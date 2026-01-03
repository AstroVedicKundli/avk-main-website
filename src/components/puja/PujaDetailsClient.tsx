"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface PujaData {
  name: string;
  fullName?: string;
  description: string;
  benefits: string[];
  date: string;
  closingDate: string;
  originalPrice: number;
  discountedPrice: number;
  aboutPuja?: {
    title: string;
    content: string[];
  };
  detailedBenefits?: string[];
  process?: {
    title: string;
    steps: { heading: string; description: string }[];
  };
  whyUs?: {
    title: string;
    reasons: { heading: string; description: string }[];
  };
}

interface PujaDetailsClientProps {
  puja: PujaData;
  slug: string;
}

function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div>
      <h3 className="text-lg font-bold text-[#1a1a2e] mb-4">
        Puja Will Close In:
      </h3>
      <div className="grid grid-cols-4 gap-3 md:gap-4">
        <div className="bg-[#7C1A1E] text-white rounded-lg p-4 text-center">
          <div className="text-3xl md:text-4xl font-bold">
            {String(timeLeft.days).padStart(2, "0")}
          </div>
          <div className="text-sm mt-1">Days</div>
        </div>
        <div className="bg-[#7C1A1E] text-white rounded-lg p-4 text-center">
          <div className="text-3xl md:text-4xl font-bold">
            {String(timeLeft.hours).padStart(2, "0")}
          </div>
          <div className="text-sm mt-1">Hours</div>
        </div>
        <div className="bg-[#7C1A1E] text-white rounded-lg p-4 text-center">
          <div className="text-3xl md:text-4xl font-bold">
            {String(timeLeft.minutes).padStart(2, "0")}
          </div>
          <div className="text-sm mt-1">Minutes</div>
        </div>
        <div className="bg-[#7C1A1E] text-white rounded-lg p-4 text-center">
          <div className="text-3xl md:text-4xl font-bold">
            {String(timeLeft.seconds).padStart(2, "0")}
          </div>
          <div className="text-sm mt-1">Seconds</div>
        </div>
      </div>
    </div>
  );
}

export default function PujaDetailsClient({
  puja,
  slug,
}: PujaDetailsClientProps) {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About Puja" },
    { id: "benefits", label: "Benefits" },
    { id: "process", label: "Process" },
    { id: "whyus", label: "Why Us?" },
  ];

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Left Column - Puja Details */}
        <div className="lg:col-span-2">
          {/* Puja Name */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#7C1A1E] mb-4">
            {puja.fullName || puja.name}
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg mb-6">{puja.description}</p>

          {/* Benefits List */}
          <div className="space-y-3 mb-8">
            {puja.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-[#1a1a2e] flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Date */}
          <div className="flex items-center gap-3 text-gray-700 mb-6">
            <svg
              className="w-6 h-6 text-[#C41E3A]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-lg">{puja.date}</span>
          </div>
        </div>

        {/* Right Column - Booking Card */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-24">
            {/* Countdown Timer */}
            <CountdownTimer targetDate={puja.closingDate} />

            {/* Price Section */}
            <div className="mt-6 mb-6">
              <p className="text-sm text-gray-600 uppercase tracking-wide mb-2">
                PRICE
              </p>
              <div className="flex items-center gap-3">
                <span className="text-gray-400 line-through text-xl">
                  ₹ {puja.originalPrice.toLocaleString("en-IN")}
                </span>
                <span className="text-3xl font-bold text-[#1a1a2e]">
                  ₹ {puja.discountedPrice.toLocaleString("en-IN")} /-
                </span>
              </div>
            </div>

            {/* Book Now Button */}
            <Link
              href={`/puja/booking/${slug}`}
              className="block w-full bg-[#7C1A1E] hover:bg-[#5A1216] text-white font-bold text-center py-4 rounded-md transition-colors text-lg"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-16">
        {/* Tab Headers */}
        <div className="border-b border-gray-200">
          <div className="flex gap-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 px-2 font-medium text-lg whitespace-nowrap transition-colors relative ${
                  activeTab === tab.id
                    ? "text-[#7C1A1E]"
                    : "text-gray-600 hover:text-[#7C1A1E]"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#7C1A1E]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="py-8">
          {/* About Puja Tab */}
          {activeTab === "about" && puja.aboutPuja && (
            <div>
              <h2 className="text-3xl font-bold text-[#7C1A1E] mb-6">
                {puja.aboutPuja.title}
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                {puja.aboutPuja.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          )}

          {/* Benefits Tab */}
          {activeTab === "benefits" && puja.detailedBenefits && (
            <div>
              <h2 className="text-3xl font-bold text-[#7C1A1E] mb-6">
                Benefits {puja.name} Brings:
              </h2>
              <ul className="space-y-3">
                {puja.detailedBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1">◦</span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Process Tab */}
          {activeTab === "process" && puja.process && (
            <div>
              <h2 className="text-3xl font-bold text-[#7C1A1E] mb-6">
                {puja.process.title}
              </h2>
              <ul className="space-y-4">
                {puja.process.steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1">•</span>
                    <div>
                      <span className="font-bold text-gray-900">
                        {step.heading}
                      </span>{" "}
                      <span className="text-gray-700">{step.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Why Us Tab */}
          {activeTab === "whyus" && puja.whyUs && (
            <div>
              <h2 className="text-3xl font-bold text-[#7C1A1E] mb-6">
                {puja.whyUs.title}
              </h2>
              <ul className="space-y-4">
                {puja.whyUs.reasons.map((reason, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-gray-400 mt-1">•</span>
                    <div>
                      <span className="font-bold text-gray-900">
                        {reason.heading}
                      </span>{" "}
                      <span className="text-gray-700">{reason.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

