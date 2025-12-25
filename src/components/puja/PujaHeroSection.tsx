"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

interface Slide {
  id: number;
  tagline: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  templeImage: string;
}

const slides: Slide[] = [
  {
    id: 1,
    tagline: "CONNECT WITH DIVINITY!",
    title: "ONLINE TEMPLE PUJA",
    description:
      "Easily schedule special pujas at renowned temples. Experience divine blessings without any hassle!",
    ctaText: "Find Temples",
    ctaLink: "/temples",
    templeImage: "/puja/temple-1.png",
  },
  {
    id: 2,
    tagline: "SACRED RITUALS AT HOME",
    title: "PERSONALIZED PUJA",
    description:
      "Get customized puja services performed by experienced pandits based on your birth chart and spiritual needs.",
    ctaText: "Book Now",
    ctaLink: "/puja/book",
    templeImage: "/puja/ganesh-ji.png",
  },
  {
    id: 3,
    tagline: "DIVINE BLESSINGS DELIVERED",
    title: "PRASAD & OFFERINGS",
    description:
      "Receive sacred prasad and blessed items directly at your doorstep after every puja ceremony.",
    ctaText: "Learn More",
    ctaLink: "/puja/prasad",
    templeImage: "/puja/puja-1.png",
  },
];

const features = [
  {
    icon: (
      <svg
        className="w-7 h-7 text-[#C41E3A]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Online Puja Booking",
    description: "Perform sacred rituals from anywhere with expert priests.",
    link: "/puja/online",
  },
  {
    icon: (
      <svg
        className="w-7 h-7 text-[#C41E3A]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      </svg>
    ),
    title: "Temple Puja Booking",
    description: "Schedule special pujas at renowned temples hassle-free.",
    link: "/temples",
  },
  {
    icon: (
      <svg
        className="w-7 h-7 text-[#C41E3A]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    title: "Priest Services",
    description:
      "Hire experienced Vedic priests for personalized rituals and ceremonies.",
    link: "/puja/priests",
  },
];

export default function PujaHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleNavClick = (direction: "prev" | "next") => {
    setIsAutoPlaying(false);
    if (direction === "prev") {
      prevSlide();
    } else {
      nextSlide();
    }
  };

  return (
    <section className="relative w-full">
      {/* Main Hero Content with Beige Background */}
      <div className="relative min-h-[600px] md:min-h-[700px] bg-[#FCF3E4] pt-28 md:pt-32 pb-32 md:pb-40">
        {/* Navigation Arrows */}
        <button
          onClick={() => handleNavClick("prev")}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-[#C41E3A]/10 hover:bg-[#C41E3A]/20 rounded-full flex items-center justify-center transition-colors"
          aria-label="Previous slide"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-[#C41E3A]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={() => handleNavClick("next")}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-[#C41E3A]/10 hover:bg-[#C41E3A]/20 rounded-full flex items-center justify-center transition-colors"
          aria-label="Next slide"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-[#C41E3A]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-left">
              {/* Om Symbol */}
              <div className="mb-6">
                <span
                  className="text-6xl md:text-8xl font-bold text-[#C41E3A]"
                  style={{ fontFamily: "serif" }}
                >
                  ॐ
                </span>
              </div>

              {/* Slide Content */}
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`transition-all duration-500 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 absolute pointer-events-none"
                  }`}
                >
                  {/* Tagline */}
                  <p className="text-[#C41E3A] font-bold text-sm md:text-base tracking-wide mb-2">
                    {slide.tagline}
                  </p>

                  {/* Main Title */}
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1a1a2e] mb-4 leading-tight">
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p className="text-[#333] text-base md:text-lg mb-8 max-w-lg leading-relaxed">
                    {slide.description}
                  </p>

                  {/* CTA Button */}
                  <Link
                    href={slide.ctaLink}
                    className="inline-block bg-[#C41E3A] hover:bg-[#A31530] text-white font-semibold px-8 py-3 rounded-md transition-colors shadow-lg hover:shadow-xl"
                  >
                    {slide.ctaText}
                  </Link>
                </div>
              ))}

              {/* Navigation Dots */}
              <div className="flex gap-2 mt-8">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`transition-all rounded-full ${
                      index === currentSlide
                        ? "w-8 h-2 bg-[#C41E3A]"
                        : "w-2 h-2 bg-[#C41E3A]/30 hover:bg-[#C41E3A]/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Content - Temple Image */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[550px]">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={slide.templeImage}
                    alt="Temple"
                    fill
                    className="object-contain object-center drop-shadow-2xl"
                    priority={index === 0}
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards Section - White Background */}
      <div className="relative z-20 bg-white pt-4 pb-12">
        {/* Cards Container - Overlapping Hero */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 -mt-24 md:-mt-38">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-xl p-6 md:p-8 text-center relative mt-8"
              >
                {/* Arrow pointer at top */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[16px] border-b-white" />

                {/* Icon Circle - positioned above card */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-50">
                  {feature.icon}
                </div>

                {/* Content with top padding for icon */}
                <div className="pt-6">
                  <h3 className="font-bold text-[#1a1a2e] text-lg mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-5 leading-relaxed">
                    {feature.description}
                  </p>
                  <Link
                    href={feature.link}
                    className="inline-block text-[#C41E3A] font-bold text-sm uppercase tracking-wide hover:text-[#A31530] transition-colors border-b-2 border-[#C41E3A] hover:border-[#A31530] pb-0.5"
                  >
                    BOOK NOW
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
