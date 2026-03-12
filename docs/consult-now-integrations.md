# Consult-Now Integrations

This document covers environment setup and end-to-end flow for `/consult-now`.

## 1) Environment variables

Copy `.env.example` to `.env.local` and set real credentials:

- `NEXT_PUBLIC_RAZORPAY_KEY_ID`
- `RAZORPAY_KEY_ID`
- `RAZORPAY_KEY_SECRET`
- `NEXT_PUBLIC_ENABLE_RAZORPAY` (`true` by default; set `false` to skip payment in test mode)
- `GOOGLE_CALENDAR_ID`
- `GOOGLE_ENABLE_MEET` (`true` by default; set `false` to skip Meet creation)
- `GOOGLE_OAUTH_CLIENT_ID` (preferred mode for Meet links)
- `GOOGLE_OAUTH_CLIENT_SECRET` (preferred mode for Meet links)
- `GOOGLE_OAUTH_REFRESH_TOKEN` (preferred mode for Meet links)
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`
- `GOOGLE_ENABLE_ATTENDEES` (`false` by default for service-account flow; set `true` only with domain-wide delegation)
- `ENABLE_AISENSY_WHATSAPP` (`false` by default; set `true` when ready)
- `AISENSY_API_KEY`
- `AISENSY_CAMPAIGN_NAME`
- `AISENSY_API_URL` (optional; defaults to AiSensy public endpoint)

## 2) Implemented API routes

- `GET /api/consult-now/slots?date=YYYY-MM-DD`
  - Returns phase-1 static slots.
- `POST /api/consult-now/payment/order`
  - Creates Razorpay order based on nationality pricing (server-side trusted).
- `POST /api/consult-now/payment/verify`
  - Verifies Razorpay signature.
- `POST /api/consult-now/confirm`
  - Final confirmation: create Calendar event (+ Meet for online). AiSensy WhatsApp is sent only when `ENABLE_AISENSY_WHATSAPP=true`.

## 3) Test vs production setup

- Use Razorpay test keys for local/dev and keep live keys only in production secrets.
- Use a dedicated Google Calendar for testing to validate event creation and Meet generation.
- Use a test campaign/template in AiSensy before switching to production template.

### Google auth mode selection

- If `GOOGLE_OAUTH_CLIENT_ID`, `GOOGLE_OAUTH_CLIENT_SECRET`, and `GOOGLE_OAUTH_REFRESH_TOKEN` are present, backend uses **OAuth owner mode**.
- Otherwise backend falls back to **service-account mode**.
- OAuth owner mode is recommended when you need consistent Google Meet link creation without end-user consent on each booking.

## 4) Go-live checklist

- Confirm payment signature verification passes for real transactions.
- Confirm Google Calendar service account has calendar write access.
- Confirm Meet link appears for online consultations.
- Confirm WhatsApp message delivery in AiSensy dashboard logs.
- Add webhook/persistence layer if long-term booking records are required.
