"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroCarousel() {
  return (
    <>
      <section className="relative w-full h-[75vh] md:h-[55vh] lg:h-[70vh] overflow-hidden bg-[#fcf3e4]">
        <div className="relative w-full h-full">
          {/* Mobile Banner Image */}
          <div className="block md:hidden absolute inset-0">
            <Image
              src="/home-banner-mobile.png"
              alt="Astro Vedic Kundli - Manish Aggarwal"
              fill
              priority
              className="object-contain object-center"
              sizes="100vw"
              unoptimized
            />
          </div>

          {/* Desktop Banner Image */}
          <div className="hidden md:block absolute inset-0">
            <Image
              src="/banner-1.png"
              alt="Astro Vedic Kundli - Manish Aggarwal"
              fill
              priority
              className="object-contain object-center"
              sizes="100vw"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Moving Strip */}
      <div className="relative w-full bg-[#7d1a28] py-4 overflow-hidden">
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `}</style>

        <div className="flex animate-scroll whitespace-nowrap">
          {/* Repeat the content twice for seamless loop */}
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center px-8">
              <span className="text-white text-lg md:text-xl font-semibold">
                Book your Consultation — Slots are limited. Reserve yours now!!
              </span>
              <Link
                href="/kundli"
                className="mx-8 px-6 py-2 bg-white text-[#7d1a28] text-base md:text-lg font-bold rounded-lg hover:bg-gray-100 transition-all whitespace-nowrap"
              >
                Book Now
              </Link>
              <span className="text-white text-lg md:text-xl font-semibold">
                Book your Consultation — Slots are limited. Reserve yours now!!
              </span>
              <Link
                href="/kundli"
                className="mx-8 px-6 py-2 bg-white text-[#7d1a28] text-base md:text-lg font-bold rounded-lg hover:bg-gray-100 transition-all whitespace-nowrap"
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
