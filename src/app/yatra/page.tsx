"use client";

import TrendingDestinations from "@/components/yatra/TrendingDestinations";
import SpiritualCityTours from "@/components/yatra/SpiritualCityTours";
import TourPackagesGrid from "@/components/yatra/TourPackagesGrid";

export default function YatraPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Hero Section */}
      <div className="pt-32 pb-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333355] mb-4">
              Spiritual Yatra Tours
            </h1>
            <p className="text-base md:text-lg text-[#333355]/70 max-w-3xl mx-auto">
              Embark on sacred journeys to holy places with expert guidance and
              divine blessings
            </p>
          </div>
        </div>
      </div>

      {/* Trending Destinations Section */}
      <TrendingDestinations />

      {/* Spiritual City Tours Section */}
      <SpiritualCityTours />

      {/* Tour Packages Grid */}
      <TourPackagesGrid />
    </div>
  );
}
