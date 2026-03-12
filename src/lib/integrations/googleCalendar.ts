import crypto from "node:crypto";

import type { ConsultationMode } from "@/lib/consultNow/types";

type CalendarEventResult = {
  created: boolean;
  eventId?: string;
  htmlLink?: string;
  meetLink?: string;
  reason?: string;
};

export type BusyInterval = {
  startIso: string;
  endIso: string;
};

function base64UrlEncode(input: string | Buffer): string {
  const encoded = Buffer.from(input).toString("base64");
  return encoded.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

async function getGoogleAccessToken(): Promise<string> {
  const oauthClientId = process.env.GOOGLE_OAUTH_CLIENT_ID;
  const oauthClientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET;
  const oauthRefreshToken = process.env.GOOGLE_OAUTH_REFRESH_TOKEN;

  // Preferred mode: calendar-owner OAuth refresh token.
  // This avoids service-account restrictions around Meet/attendees on consumer calendars.
  if (oauthClientId && oauthClientSecret && oauthRefreshToken) {
    const oauthResponse = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: oauthClientId,
        client_secret: oauthClientSecret,
        refresh_token: oauthRefreshToken,
        grant_type: "refresh_token",
      }),
    });

    if (!oauthResponse.ok) {
      throw new Error(`Google OAuth token request failed: ${await oauthResponse.text()}`);
    }

    const oauthData = (await oauthResponse.json()) as { access_token: string };
    return oauthData.access_token;
  }

  // Fallback mode: service account token.
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKeyRaw = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;

  if (!clientEmail || !privateKeyRaw) {
    throw new Error("Google service account credentials are missing.");
  }

  const privateKey = privateKeyRaw.replace(/\\n/g, "\n");
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: clientEmail,
    scope: "https://www.googleapis.com/auth/calendar",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  };

  const header = { alg: "RS256", typ: "JWT" };
  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const unsignedToken = `${encodedHeader}.${encodedPayload}`;

  const signature = crypto.sign("RSA-SHA256", Buffer.from(unsignedToken), {
    key: privateKey,
  });

  const assertion = `${unsignedToken}.${base64UrlEncode(signature)}`;

  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
  });

  if (!tokenResponse.ok) {
    throw new Error(`Google token request failed: ${await tokenResponse.text()}`);
  }

  const tokenData = (await tokenResponse.json()) as { access_token: string };
  return tokenData.access_token;
}

export async function createCalendarEventForConsultation(input: {
  fullName: string;
  phoneNumber: string;
  email?: string;
  consultationMode: ConsultationMode;
  startIso: string;
  endIso: string;
}): Promise<CalendarEventResult> {
  const calendarId = process.env.GOOGLE_CALENDAR_ID;
  if (!calendarId) {
    return { created: false, reason: "GOOGLE_CALENDAR_ID is not configured." };
  }

  try {
    const accessToken = await getGoogleAccessToken();
    const requestId = crypto.randomUUID();
    const enableAttendeeInvites = process.env.GOOGLE_ENABLE_ATTENDEES === "true";
    const enableMeetCreation = process.env.GOOGLE_ENABLE_MEET !== "false";
    const hasOAuthOwnerMode = Boolean(
      process.env.GOOGLE_OAUTH_CLIENT_ID &&
        process.env.GOOGLE_OAUTH_CLIENT_SECRET &&
        process.env.GOOGLE_OAUTH_REFRESH_TOKEN
    );

    const eventBody: Record<string, unknown> = {
      summary: `Consultation - ${input.fullName} with Astrologer Manish Aggarwal`,
      description: [
        `Phone: ${input.phoneNumber}`,
        input.email ? `Email: ${input.email}` : undefined,
        `Mode: ${input.consultationMode}`,
      ]
        .filter(Boolean)
        .join("\n"),
      start: {
        dateTime: input.startIso,
        timeZone: "Asia/Kolkata",
      },
      end: {
        dateTime: input.endIso,
        timeZone: "Asia/Kolkata",
      },
    };

    if (input.consultationMode === "online" && enableMeetCreation) {
      eventBody.conferenceData = {
        createRequest: {
          requestId,
          conferenceSolutionKey: { type: "hangoutsMeet" },
        },
      };
      if ((enableAttendeeInvites || hasOAuthOwnerMode) && input.email) {
        eventBody.attendees = [{ email: input.email }];
      }
    }

    const createEvent = async (
      body: Record<string, unknown>,
      conferenceDataVersion = 1
    ) => {
      return fetch(
        `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?conferenceDataVersion=${conferenceDataVersion}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
    };

    let eventResponse = await createEvent(eventBody, 1);
    let eventText = eventResponse.ok ? "" : await eventResponse.text();

    // Some calendars/accounts reject Meet creation via conferenceData.
    // Fallback to creating a normal event so booking is not blocked.
    if (
      !eventResponse.ok &&
      input.consultationMode === "online" &&
      eventText.includes("Invalid conference type value")
    ) {
      const fallbackBody = { ...eventBody };
      delete fallbackBody.conferenceData;
      eventResponse = await createEvent(fallbackBody, 0);
      eventText = eventResponse.ok ? "" : await eventResponse.text();
    }

    if (!eventResponse.ok) {
      throw new Error(`Google event creation failed: ${eventText}`);
    }

    const eventJson = (await eventResponse.json()) as {
      id?: string;
      htmlLink?: string;
      conferenceData?: {
        entryPoints?: Array<{ entryPointType?: string; uri?: string }>;
      };
    };

    const meetEntry = eventJson.conferenceData?.entryPoints?.find(
      (entry) => entry.entryPointType === "video"
    );

    return {
      created: true,
      eventId: eventJson.id,
      htmlLink: eventJson.htmlLink,
      meetLink: meetEntry?.uri,
      reason: meetEntry?.uri
        ? undefined
        : input.consultationMode === "online" && enableMeetCreation
          ? "Event created without Meet link for this calendar/account."
          : undefined,
    };
  } catch (error) {
    return {
      created: false,
      reason: error instanceof Error ? error.message : "Unknown calendar error.",
    };
  }
}

function isOverlapping(
  startA: string,
  endA: string,
  startB: string,
  endB: string
): boolean {
  const aStart = new Date(startA).getTime();
  const aEnd = new Date(endA).getTime();
  const bStart = new Date(startB).getTime();
  const bEnd = new Date(endB).getTime();

  if ([aStart, aEnd, bStart, bEnd].some((time) => Number.isNaN(time))) {
    return false;
  }

  return aStart < bEnd && bStart < aEnd;
}

export async function getCalendarBusyIntervals(input: {
  rangeStartIso: string;
  rangeEndIso: string;
}): Promise<BusyInterval[]> {
  const calendarId = process.env.GOOGLE_CALENDAR_ID;
  if (!calendarId) {
    return [];
  }

  try {
    const accessToken = await getGoogleAccessToken();
    const response = await fetch(
      "https://www.googleapis.com/calendar/v3/freeBusy",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          timeMin: input.rangeStartIso,
          timeMax: input.rangeEndIso,
          timeZone: "Asia/Kolkata",
          items: [{ id: calendarId }],
        }),
      }
    );

    if (!response.ok) {
      throw new Error(await response.text());
    }

    const json = (await response.json()) as {
      calendars?: Record<string, { busy?: Array<{ start: string; end: string }> }>;
    };

    const busy = json.calendars?.[calendarId]?.busy || [];
    return busy.map((interval) => ({
      startIso: interval.start,
      endIso: interval.end,
    }));
  } catch {
    return [];
  }
}

export async function isCalendarSlotAvailable(input: {
  startIso: string;
  endIso: string;
}): Promise<boolean> {
  const busyIntervals = await getCalendarBusyIntervals({
    rangeStartIso: input.startIso,
    rangeEndIso: input.endIso,
  });

  return !busyIntervals.some((busyInterval) =>
    isOverlapping(
      input.startIso,
      input.endIso,
      busyInterval.startIso,
      busyInterval.endIso
    )
  );
}
