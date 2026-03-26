export default function AboutSection() {
  return (
    <section
      id="about-manish-aggarwal"
      className="scroll-mt-28 py-16 px-6 md:px-8 lg:px-12 bg-white relative"
    >
      <div className="max-w-5xl mx-auto">
        <div className="space-y-6 text-center">
          {/* Small Heading */}
          <p className="text-sm font-bold text-[#B91C2E] uppercase tracking-wide">
            About Jyotish Acharya Manish Aggarwal
          </p>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333355] leading-tight">
            Astro Vedic Kundli
          </h2>

          {/* Experience Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-[#B91C2E]/10 rounded-full">
            <div className="w-2 h-2 bg-[#B91C2E] rounded-full"></div>
            <p className="text-xs font-bold text-[#B91C2E] tracking-widest uppercase">
              Since 2007 - 19 Years of Experience
            </p>
          </div>

          {/* Description */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <p className="text-base  leading-relaxed">
              Jyotish Acharya Manish Aggarwal is a highly respected and
              accomplished Astrologer based in Delhi/NCR, with over 18 years of
              dedicated experience in the fields of Astrology, Numerology, and
              Pooja Path Anushthan. Renowned for his sagacious insights and
              practical guidance, he is an approved astrologer associated with
              three major temples, a testament to his authenticity and
              expertise.
            </p>
            <p className="text-base leading-relaxed">
              A Gold Medalist and a qualified astrologer from Bhartiya Vidya
              Bhavan, Jyotish Acharya Manish Aggarwal blends classical Vedic
              knowledge with deep intuitive understanding to provide accurate
              and meaningful consultations. His work is rooted in traditional
              scriptures, ethical practices, and years of hands-on experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
