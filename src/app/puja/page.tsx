"use client";

import PujaHeroSection from "@/components/puja/PujaHeroSection";
import VrathamPujas from "@/components/puja/VrathamPujas";
import VedicAshirvaad from "@/components/puja/VedicAshirvaad";
import SanatanArticles from "@/components/puja/SanatanArticles";

export default function PujaPage() {
  return (
    <div className="min-h-screen bg-[#FCF3E4]">
      {/* Hero Section with Feature Cards */}
      <PujaHeroSection />

      {/* Vratham Pujas Section */}
      <VrathamPujas />

      {/* Vedic Ashirvaad Section */}
      <VedicAshirvaad />

      {/* Sanatan Dharma Articles Section */}
      <SanatanArticles />
    </div>
  );
}
