import HeroCarousel from "@/components/home/HeroCarousel";
import AboutSection from "@/components/home/AboutSection";
import StatsSection from "@/components/home/StatsSection";
import NewsSection from "@/components/home/NewsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import LearningSection from "@/components/home/LearningSection";
import YatraSection from "@/components/home/YatraSection";
import FAQSection from "@/components/home/FAQSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#FCF3E4] overflow-hidden">
      {/* Content with relative positioning to appear above background */}
      <div className="relative z-10">
        {/* Hero Carousel Section */}
        <HeroCarousel />

        {/* About Section */}
        <AboutSection />

        {/* Stats Section */}
        <StatsSection />

        {/* Learning Section (Videos & Courses) */}
        <LearningSection />

        {/* Yatra Section */}
        <YatraSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* News Section */}
        <NewsSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Content sections will be built here */}
      </div>
    </div>
  );
}
