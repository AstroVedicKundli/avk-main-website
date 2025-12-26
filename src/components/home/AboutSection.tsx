import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-16 px-6 md:px-8 lg:px-12 bg-white relative">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-6 text-center">
          {/* Small Heading */}
          <p className="text-sm font-bold text-[#8B4414] uppercase tracking-wide">
            About Manish Aggarwal
          </p>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333355] leading-tight">
            Astro Vedic Kundli
          </h2>

          {/* Experience Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-[#8B4414]/10 rounded-full">
            <div className="w-2 h-2 bg-[#8B4414] rounded-full"></div>
            <p className="text-xs font-bold text-[#8B4414] tracking-widest uppercase">
              Since 2007 - 18 Years of Experience
            </p>
          </div>

          {/* Description */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <p className="text-base  leading-relaxed">
              Manish Aggarwal is a highly respected and accomplished Astrologer
              based in Delhi/NCR, with over 18 years of dedicated experience in
              the fields of Astrology, Numerology, and Pooja Path Anushthan.
              Renowned for his sagacious insights and practical guidance, he is
              an approved astrologer associated with three major temples, a
              testament to his authenticity and expertise.
            </p>
            <p className="text-base leading-relaxed">
              A Gold Medalist and a qualified astrologer from Bhartiya Vidya
              Bhavan, Manish Aggarwal blends classical Vedic knowledge with deep
              intuitive understanding to provide accurate and meaningful
              consultations. His work is rooted in traditional scriptures,
              ethical practices, and years of hands-on experience.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <Link
              href="/consultation"
              className="inline-flex items-center gap-2 bg-[#8B4414] text-white px-8 py-3 rounded-lg font-bold text-sm hover:bg-[#723A0F] transition-all shadow-md hover:shadow-lg transform hover:scale-105"
            >
              ENQUIRY NOW
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
