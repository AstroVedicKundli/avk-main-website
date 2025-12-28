"use client";

import Image from "next/image";
import TrendingDestinations from "@/components/yatra/TrendingDestinations";
import SpiritualCityTours from "@/components/yatra/SpiritualCityTours";
import TourPackagesGrid from "@/components/yatra/TourPackagesGrid";

export default function YatraPage() {
  return (
    <div className="min-h-screen bg-[#fcf3e4]">
      {/* Hero Banner Section */}
      <div className="pt-20 w-full">
        <div className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh]">
          <Image
            src="/yatra/yatra_tours_banner.png"
            alt="Spiritual Yatra Tours"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            unoptimized
          />
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
