import Link from "next/link";
import { Metadata } from "next";

import KundliPlanCards from "@/components/kundli/KundliPlanCards";

export const metadata: Metadata = {
  title: "Kundli — Basic Free & Detailed Report | Astro Vedic Kundli",
  description:
    "Choose your Vedic birth chart: a free basic kundli or a detailed kundli report with deeper insights for ₹99.",
};

const basicFeatures = [
  "Lagna & basic chart layout",
  "Key planetary positions",
  "Moon sign & birth details summary",
  "Instant preview — no payment",
];

const detailedFeatures = [
  "Everything in Basic Kundli",
  "House-wise planetary analysis",
  "Strengths, yogas & key life themes",
  "Download-friendly detailed layout",
  "Ideal before consultation or remedies",
];

export default function KundliPage() {
  return (
    <div className="min-h-screen bg-[#f7e5c8] scroll-smooth">
      <div className="h-24 shrink-0" aria-hidden />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Hero */}
        <header className="text-center max-w-2xl mx-auto mb-14 md:mb-16 pt-2">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#333355]/15 bg-[#fefbf6] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#333355]/80 mb-5">
            Vedic birth chart
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#333355] leading-tight mb-4">
            Your Kundli,{" "}
            <span className="text-[#B91C2E]">your way</span>
          </h1>
          <p className="text-base sm:text-lg text-[#333355]/80 leading-relaxed">
            Start with a free basic chart or unlock a detailed kundli with deeper
            Vedic insights — clear pricing, one trusted place.
          </p>
        </header>

        <KundliPlanCards basicFeatures={basicFeatures} detailedFeatures={detailedFeatures} />

        {/* CTA anchor targets (until generators ship) */}
        <div className="mt-12 space-y-6">
          <section
            id="next-basic"
            className="scroll-mt-28 rounded-2xl border border-[#333355]/10 bg-[#fefbf6] px-6 py-6 sm:px-8 sm:py-7"
          >
            <h3 className="text-lg font-bold text-[#333355] mb-2">Basic kundli</h3>
            <p className="text-sm text-[#333355]/75 leading-relaxed max-w-2xl">
              Use <span className="font-semibold text-[#333355]">Get basic kundli</span> above to
              submit your details. We&apos;ll prepare your free chart and follow up by email.
            </p>
          </section>
          <section
            id="next-detailed"
            className="scroll-mt-28 rounded-2xl border border-[#B91C2E]/25 bg-white px-6 py-6 sm:px-8 sm:py-7 shadow-md shadow-[#333355]/5"
          >
            <h3 className="text-lg font-bold text-[#333355] mb-2">Detailed kundli — ₹99</h3>
            <p className="text-sm text-[#333355]/75 leading-relaxed max-w-2xl">
              Choose <span className="font-semibold text-[#333355]">Get detailed kundli</span> to send
              your birth details. Payment and delivery steps will be shared on email before we
              finalize your report.
            </p>
          </section>
        </div>

        {/* Bottom strip */}
        <div className="mt-14 rounded-2xl border border-[#333355]/10 bg-[#fefbf6]/80 px-6 py-8 text-center">
          <p className="text-sm text-[#333355]/80 max-w-xl mx-auto mb-4">
            Need personal guidance on your chart? Book a consultation with our astrologers anytime.
          </p>
          <Link
            href="/consult-now"
            className="inline-flex items-center justify-center rounded-full bg-[#B91C2E] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#7f1220] transition-colors shadow-md"
          >
            Consult now
          </Link>
        </div>
      </div>
    </div>
  );
}
