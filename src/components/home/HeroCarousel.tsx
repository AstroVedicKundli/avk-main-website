"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroCarousel() {
  const slide = {
    image: "/banner-home.png",
    preTitle: "TALK DIRECTLY WITH",
    title: "MANISH AGGARWAL",
    subtitle: "Celebrity Astrologer & Ritual Expert",
    services: [
      "Vedic Astrology & Numerology",
      "Pooja Path & Anushtan",
      "Career & Business Prosperity",
      "Marriage & Relationship Harmony",
      "Personalized Life Problem Solutions",
    ],
    ctaText: "Book Your Consultation Now",
    ctaLink: "/kundli",
  };

  return (
    <>
      <section className="relative w-full h-[75vh] md:h-[65vh] overflow-hidden bg-[#fcf3e4] pt-8">
        <div className="relative w-full h-full">
          {/* Background Image - Hidden on mobile, shown on desktop */}
          <div className="hidden md:block absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority
              className="object-contain object-bottom"
              sizes="100vw"
              unoptimized
            />
          </div>

          {/* Content - Left Aligned */}
          <div className="relative z-20 h-full flex items-center md:items-center">
            <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
              <div className="max-w-3xl pt-0 md:pt-16">
                {/* Pre-title */}
                <p className="text-[#b91c2e] text-sm md:text-base lg:text-lg font-bold mb-3 tracking-wider uppercase">
                  # {slide.preTitle}
                </p>

                {/* Main Title */}
                <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-[#1a1a2e] mb-3 leading-tight">
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-[#4a4a4a] text-base md:text-xl lg:text-2xl font-semibold mb-6 md:mb-8">
                  {slide.subtitle}
                </p>

                {/* Services List */}
                <div className="space-y-2 mb-6 md:mb-8">
                  {slide.services.map((service, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="text-[#b91c2e] text-lg font-bold mr-3 flex-shrink-0">
                        •
                      </span>
                      <span className="text-[#2a2a2a] text-sm md:text-base font-semibold uppercase tracking-wide">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={slide.ctaLink}
                  className="inline-block px-8 py-4 md:px-10 md:py-5 bg-[#b91c2e] text-white text-base md:text-lg lg:text-xl font-bold uppercase rounded-lg shadow-xl hover:bg-[#9a1525] transition-all transform hover:scale-105"
                >
                  {slide.ctaText}
                </Link>
              </div>
            </div>
          </div>

          {/* Background Image - Shown on mobile at bottom */}
          <div className="md:hidden relative w-full h-64 mt-6">
            <Image
              src={slide.image}
              alt={slide.title}
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
