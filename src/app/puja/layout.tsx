import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Puja Services - Vedic Rituals | Astro Vedic Kundli",
  description:
    "Book personalized puja services performed by expert pandits. Traditional Vedic rituals for peace, prosperity, and spiritual growth.",
};

export default function PujaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
