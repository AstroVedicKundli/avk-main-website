"use client";

import Image from "next/image";
import TrendingDestinations from "@/components/yatra/TrendingDestinations";
import SpiritualCityTours from "@/components/yatra/SpiritualCityTours";
import TourPackagesGrid from "@/components/yatra/TourPackagesGrid";

export default function YatraPage() {
  return (
    <div className="min-h-screen bg-[#f7e5c8]">
      {/* Hero Banner Section */}
      <section className="relative w-full h-[75vh] md:h-[55vh] lg:h-[70vh] overflow-hidden bg-[#f7e5c8] pt-20">
        <div className="relative w-full h-full">
          {/* Mobile Banner */}
          <div className="block md:hidden absolute inset-0">
            <Image
              src="/yatra/yatra_tours_banner_mobile.png"
              alt="Spiritual Yatra Tours"
              fill
              priority
              className="object-contain object-center"
              sizes="100vw"
              unoptimized
            />
          </div>

          {/* Desktop Banner */}
          <div className="hidden md:block absolute inset-0">
            <Image
              src="/yatra/yatra_tours_banner.png"
              alt="Spiritual Yatra Tours"
              fill
              priority
              className="object-contain object-center"
              sizes="100vw"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Trending Destinations Section */}
      <TrendingDestinations />

      {/* Spiritual City Tours Section */}
      <SpiritualCityTours />

      {/* Tour Packages Grid */}
      <TourPackagesGrid />
    </div>
  );
}
