import HeroCarousel from "@/components/home/HeroCarousel";
import AboutSection from "@/components/home/AboutSection";
import StatsSection from "@/components/home/StatsSection";
import CoursesSection from "@/components/home/CoursesSection";
import NewsSection from "@/components/home/NewsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import VideosSection from "@/components/home/VideosSection";
import YatraSection from "@/components/home/YatraSection";
import FAQSection from "@/components/home/FAQSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#FCF3E4] overflow-hidden">
      {/* Faded Astrology Illustrations Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top Left - Sun/Star */}
        <div className="absolute top-20 left-10 text-[#333355] opacity-[0.03] text-9xl">
          ☀️
        </div>

        {/* Top Right - Moon */}
        <div className="absolute top-40 right-20 text-[#333355] opacity-[0.03] text-8xl">
          🌙
        </div>

        {/* Middle Left - Zodiac Wheel */}
        <div className="absolute top-1/3 left-5 text-[#333355] opacity-[0.03] text-9xl rotate-12">
          ♈︎
        </div>

        {/* Middle Right - Stars */}
        <div className="absolute top-1/2 right-10 text-[#333355] opacity-[0.03] text-8xl">
          ✨
        </div>

        {/* Bottom Left - Crystal Ball */}
        <div className="absolute bottom-40 left-20 text-[#333355] opacity-[0.03] text-9xl">
          🔮
        </div>

        {/* Bottom Right - Constellation */}
        <div className="absolute bottom-32 right-16 text-[#333355] opacity-[0.03] text-8xl -rotate-12">
          ⭐
        </div>

        {/* Additional decorative elements */}
        <div className="absolute top-2/3 left-1/4 text-[#333355] opacity-[0.03] text-7xl">
          ♋︎
        </div>

        <div className="absolute top-1/4 right-1/3 text-[#333355] opacity-[0.03] text-7xl rotate-45">
          ♌︎
        </div>
      </div>

      {/* Content with relative positioning to appear above background */}
      <div className="relative z-10">
        {/* Hero Carousel Section */}
        <HeroCarousel />

        {/* About Section */}
        <AboutSection />

        {/* Stats Section */}
        <StatsSection />

        {/* Courses Section */}
        <CoursesSection />

        {/* News Section */}
        <NewsSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Videos Section */}
        <VideosSection />

        {/* Yatra Section */}
        <YatraSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Content sections will be built here */}
      </div>
    </div>
  );
}
