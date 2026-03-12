export type ConsultationMode = "online" | "inPerson";

export type Nationality = "indian" | "overseas";

export type SlotOption = {
  id: string;
  label: string;
  startIso: string;
  endIso: string;
  available: boolean;
};

export type BookingContactDetails = {
  fullName: string;
  phoneNumber: string;
  email?: string;
  whatsappNumber: string;
  consultationMode: ConsultationMode;
  nationality: Nationality;
};

export type PaymentVerificationPayload = {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
};
