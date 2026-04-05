"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const DELAY_MS = 1500;
const STORAGE_KEY = "avk_offer_dialog_seen";

export default function OfferDialog() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setVisible(true);
    }, DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const close = () => setVisible(false);

  if (!mounted) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[100] bg-black/50 transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Slide-up panel — bottom sheet on mobile, centered modal on desktop */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Special offer"
        className={`fixed z-[101] transition-all duration-500 ease-out
          bottom-0 left-0 right-0 flex flex-col items-center
          md:inset-0 md:flex md:items-center md:justify-center md:p-6
          ${visible ? "translate-y-0 md:translate-y-0 opacity-100" : "translate-y-full md:translate-y-8 opacity-0 pointer-events-none"}`}
      >
        <div className="relative w-full max-w-lg md:max-w-4xl mx-auto rounded-t-3xl md:rounded-3xl overflow-hidden shadow-2xl bg-white">
          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-3 right-3 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
            aria-label="Close offer"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Clickable offer image */}
          <Link href="/kundli" onClick={close}>
            {/* Mobile image */}
            <Image
              src="/ad-mobile.png"
              alt="Special Offer – Get your Kundli"
              width={600}
              height={800}
              className="w-full h-auto object-cover cursor-pointer block md:hidden"
              priority
              unoptimized
            />
            {/* Tablet & Desktop image */}
            <Image
              src="/ad-web.png"
              alt="Special Offer – Get your Kundli"
              width={600}
              height={400}
              className="w-full h-auto object-cover cursor-pointer hidden md:block"
              priority
              unoptimized
            />
          </Link>
        </div>
      </div>
    </>
  );
}
