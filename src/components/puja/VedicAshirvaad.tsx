"use client";

import Image from "next/image";
import Link from "next/link";

export default function VedicAshirvaad() {
  return (
    <section className="py-16 bg-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Tagline */}
            <p className="text-[#C41E3A] font-semibold text-sm uppercase tracking-wide mb-3">
              FOR YOUR SPECIAL DAYS!
            </p>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4 leading-tight">
              Vedic Ashirvaad for Your Special Days!
            </h2>

            {/* Decorative Lines */}
            <div className="flex gap-2 mb-6">
              <div className="w-8 h-1 bg-[#C41E3A] rounded-full" />
              <div className="w-8 h-1 bg-[#C41E3A] rounded-full" />
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-8">
              Mark your special occasions with the divine power of Vedic
              Ashirvaad. Whether it&apos;s a birthday, wedding, anniversary, or
              any milestone, receive sacred blessings through authentic Vedic
              rituals performed by experienced priests. Invoke positive energy,
              prosperity, and spiritual well-being for you and your loved ones.
              Celebrate your moments with divine grace and timeless traditions!
            </p>

            {/* CTA Button */}
            <Link
              href="/puja/ashirvaad"
              className="inline-block bg-[#C41E3A] hover:bg-[#A31530] text-white font-semibold px-8 py-3 rounded-md transition-colors shadow-md hover:shadow-lg"
            >
              Know More
            </Link>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative h-[400px] md:h-[450px] rounded-lg overflow-hidden">
              <Image
                src="/puja/ved.jpg"
                alt="Vedic Ashirvaad Puja"
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Overlay Card */}
            <div className="absolute bottom-4 right-4 left-4 md:left-auto md:w-80 bg-[#C41E3A] text-white p-5 rounded-lg shadow-xl">
              <p className="text-lg font-medium leading-snug">
                Vedic Ashirvaad – Divine Blessings for a Prosperous Life!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Banner */}
      <div className="mt-16 mx-4 md:mx-8 lg:mx-auto max-w-7xl">
        <div className="relative bg-[#1a1a2e] rounded-xl overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/puja/durga-puja.jpg"
              alt="Spirituality Background"
              fill
              className="object-cover opacity-40"
              unoptimized
            />
          </div>

          {/* Content */}
          <div className="relative flex items-center gap-6 md:gap-10 px-6 md:px-12 py-8 md:py-10">
            {/* Play Button */}
            <button
              className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-[#C41E3A] rounded-full flex items-center justify-center shadow-lg hover:bg-[#A31530] transition-colors group"
              aria-label="Play video"
            >
              <svg
                className="w-6 h-6 md:w-8 md:h-8 text-white ml-1 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>

            {/* Quote Text */}
            <p className="text-white text-lg md:text-2xl font-bold leading-snug">
              &ldquo;Discover the Essence of Hindu Spirituality – Watch, Learn,
              and Stay Connected!&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
