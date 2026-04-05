import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming Soon | Astro Vedic Kundli",
  description:
    "Our astrologers directory is on the way. Check back soon for profiles and booking.",
};

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-[#f7e5c8] flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-[#333355] mb-3">
          Coming Soon
        </h1>
        <p className="text-base text-[#333355]/80 mb-10 leading-relaxed">
          We&apos;re preparing our astrologers section so you can explore
          profiles and connect with trusted Vedic guides. Stay tuned.
        </p>
        <Link
          href="/"
          className="inline-block rounded-full bg-[#B91C2E] px-8 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#7f1220]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
