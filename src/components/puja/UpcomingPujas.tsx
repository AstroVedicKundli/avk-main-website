"use client";

import Image from "next/image";
import Link from "next/link";

interface PujaCard {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  location: string;
  date: string;
  tithi: string;
  bookingStatus?: string;
  slug: string;
}

const upcomingPujas: PujaCard[] = [
  {
    id: "1",
    badge: "Kaal Bhairav Jayanti Puja",
    badgeColor: "bg-gradient-to-r from-orange-200 to-orange-300",
    title: "Kaal Bhairav Puja",
    subtitle: "",
    description: "Protection from Negativity, Evil Forces & Obstacles",
    image: "/puja/durga-puja.jpg",
    location: "Pardeshwar Mandir/ Ujjain",
    date: "3 January, Saturday, Pausha Shukla Purnima",
    tithi: "Pausha Shukla Purnima",
    slug: "kaal-bhairav-puja",
  },
  {
    id: "2",
    badge: "Ekadashi Puja",
    badgeColor: "bg-gradient-to-r from-orange-500 to-orange-600",
    title: "Ekadashi Puja",
    subtitle: "",
    description: "For freedom from past sins and healing of chronic diseases.",
    image: "/puja/ved.jpg",
    location: "Pardeshwar Mandir/ Ujjain",
    date: "3 January, Saturday, Pausha Shukla Purnima",
    tithi: "Pausha Shukla Purnima",
    slug: "ekadashi-puja",
  },
  {
    id: "3",
    badge: "Sarva Karya Siddhi Puja",
    badgeColor: "bg-gradient-to-r from-amber-700 to-amber-800",
    title: "Sarva Karya Siddhi Puja",
    subtitle: "",
    description: "For success in life, career, and spirituality. Remove blockages, delays…",
    image: "/puja/ganesh-ji.png",
    location: "Pardeshwar Mandir/ Ujjain",
    date: "3 January, Saturday, Pausha Shukla Purnima",
    tithi: "Pausha Shukla Purnima",
    slug: "sarva-karya-siddhi-puja",
  },
];

export default function UpcomingPujas() {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#C41E3A] font-semibold text-sm uppercase tracking-wide mb-2">
            SPECIAL PUJAS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e]">
            Upcoming Pujas
          </h2>
        </div>

        {/* Puja Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {upcomingPujas.map((puja) => (
            <div
              key={puja.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 flex flex-col"
            >
              {/* Puja Image - Clean banner for user-provided images */}
              <div className="relative h-64 w-full">
                <Image
                  src={puja.image}
                  alt={puja.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Puja Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Subtitle */}
                {puja.subtitle && (
                  <p className="text-gray-600 text-sm mb-2 italic">
                    {puja.subtitle}
                  </p>
                )}

                {/* Title */}
                <h3 className="text-lg font-bold text-[#1a1a2e] leading-tight mb-3">
                  {puja.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {puja.description}
                </p>

                {/* Location - Single line with ellipsis */}
                <div className="flex items-start gap-2 mb-3">
                  <svg
                    className="w-4 h-4 text-[#C41E3A] mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-xs text-gray-500 truncate flex-1">
                    {puja.location}
                  </p>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 mb-6">
                  <svg
                    className="w-4 h-4 text-[#C41E3A]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-xs text-gray-700">{puja.date}</p>
                </div>

                {/* Participate Button - Pushed to bottom with mt-auto */}
                <Link
                  href={`/puja/upcoming/${puja.slug}`}
                  className="block w-full bg-[#C41E3A] hover:bg-[#A31530] text-white font-bold text-center py-3 rounded-md transition-colors flex items-center justify-center gap-2 mt-auto"
                >
                  PARTICIPATE
                  <svg
                    className="w-4 h-4"
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
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/puja/all-upcoming"
            className="inline-block bg-[#C41E3A] hover:bg-[#A31530] text-white font-bold px-8 py-3 rounded-md transition-colors shadow-md hover:shadow-lg"
          >
            View All Upcoming Pujas
          </Link>
        </div>
      </div>
    </section>
  );
}

