"use client";

import Image from "next/image";
import Link from "next/link";

interface MantraItem {
  id: string;
  title: string;
  label: string;
  image: string;
  updatedAt: string;
  slug: string;
}

const mantras: MantraItem[] = [
  {
    id: "1",
    title: "Chhath Puja Mantra",
    label: "Chhath Puja Mantra",
    image:
      "https://images.unsplash.com/photo-1609941337459-81f1e7dce70e?w=200&h=200&fit=crop&q=80",
    updatedAt: "October 23, 2025",
    slug: "chhath-puja-mantra",
  },
  {
    id: "2",
    title: "Laxmi Mantra",
    label: "Laxmi Mantra",
    image:
      "https://images.unsplash.com/photo-1567591414240-e9c1e6e3c6f3?w=200&h=200&fit=crop&q=80",
    updatedAt: "October 18, 2025",
    slug: "laxmi-mantra",
  },
  {
    id: "3",
    title: "Govardhan Mantra",
    label: "Govardhan Mantra",
    image:
      "https://images.unsplash.com/photo-1621275471769-e6aa344546d5?w=200&h=200&fit=crop&q=80",
    updatedAt: "October 15, 2025",
    slug: "govardhan-mantra",
  },
  {
    id: "4",
    title: "Ganesha Mantras",
    label: "Ganesha Mantras",
    image:
      "https://images.unsplash.com/photo-1609941337459-81f1e7dce70e?w=200&h=200&fit=crop&q=80",
    updatedAt: "August 27, 2025",
    slug: "ganesha-mantras",
  },
  {
    id: "5",
    title: "Radha Mantra",
    label: "Radha Mantra",
    image:
      "https://images.unsplash.com/photo-1567591414240-e9c1e6e3c6f3?w=200&h=200&fit=crop&q=80",
    updatedAt: "May 21, 2025",
    slug: "radha-mantra",
  },
  {
    id: "6",
    title: "Narayan Mantra",
    label: "Narayan Mantra",
    image:
      "https://images.unsplash.com/photo-1621275471769-e6aa344546d5?w=200&h=200&fit=crop&q=80",
    updatedAt: "May 21, 2025",
    slug: "narayan-mantra",
  },
  {
    id: "7",
    title: "Kali Mantra",
    label: "Kali Mantra",
    image:
      "https://images.unsplash.com/photo-1609941337459-81f1e7dce70e?w=200&h=200&fit=crop&q=80",
    updatedAt: "May 21, 2025",
    slug: "kali-mantra",
  },
  {
    id: "8",
    title: "Agni Mantra",
    label: "Agni Mantra",
    image:
      "https://images.unsplash.com/photo-1567591414240-e9c1e6e3c6f3?w=200&h=200&fit=crop&q=80",
    updatedAt: "May 21, 2025",
    slug: "agni-mantra",
  },
  {
    id: "9",
    title: "Maha Rudrabhishek Mantras",
    label: "Maha Rudrabhishek Mantras",
    image:
      "https://images.unsplash.com/photo-1621275471769-e6aa344546d5?w=200&h=200&fit=crop&q=80",
    updatedAt: "May 21, 2025",
    slug: "maha-rudrabhishek-mantras",
  },
  {
    id: "10",
    title: "Shakti Mantra",
    label: "Shakti Mantra",
    image:
      "https://images.unsplash.com/photo-1609941337459-81f1e7dce70e?w=200&h=200&fit=crop&q=80",
    updatedAt: "May 21, 2025",
    slug: "shakti-mantra",
  },
  {
    id: "11",
    title: "Hanuman Moola Mantra",
    label: "Hanuman Moola Mantra",
    image:
      "https://images.unsplash.com/photo-1567591414240-e9c1e6e3c6f3?w=200&h=200&fit=crop&q=80",
    updatedAt: "May 21, 2025",
    slug: "hanuman-moola-mantra",
  },
  {
    id: "12",
    title: "Krishna Mantra",
    label: "Krishna Mantra",
    image:
      "https://images.unsplash.com/photo-1621275471769-e6aa344546d5?w=200&h=200&fit=crop&q=80",
    updatedAt: "May 21, 2025",
    slug: "krishna-mantra",
  },
  {
    id: "13",
    title: "Rudra Mantra",
    label: "Rudra Mantra",
    image:
      "https://images.unsplash.com/photo-1609941337459-81f1e7dce70e?w=200&h=200&fit=crop&q=80",
    updatedAt: "May 21, 2025",
    slug: "rudra-mantra",
  },
  {
    id: "14",
    title: "Brihaspati Grah Mantra",
    label: "Brihaspati Grah Mantra",
    image:
      "https://images.unsplash.com/photo-1567591414240-e9c1e6e3c6f3?w=200&h=200&fit=crop&q=80",
    updatedAt: "May 14, 2025",
    slug: "brihaspati-grah-mantra",
  },
  {
    id: "15",
    title: "Dhanvantari Mantra",
    label: "Dhanvantari Mantra",
    image:
      "https://images.unsplash.com/photo-1621275471769-e6aa344546d5?w=200&h=200&fit=crop&q=80",
    updatedAt: "May 14, 2025",
    slug: "dhanvantari-mantra",
  },
  {
    id: "16",
    title: "Sita Mantra",
    label: "Sita Mantra",
    image:
      "https://images.unsplash.com/photo-1609941337459-81f1e7dce70e?w=200&h=200&fit=crop&q=80",
    updatedAt: "May 14, 2025",
    slug: "sita-mantra",
  },
  {
    id: "17",
    title: "Ram Mantra",
    label: "Ram Mantra",
    image:
      "https://images.unsplash.com/photo-1567591414240-e9c1e6e3c6f3?w=200&h=200&fit=crop&q=80",
    updatedAt: "May 14, 2025",
    slug: "ram-mantra",
  },
  {
    id: "18",
    title: "Tulsi Mantra",
    label: "Tulsi Mantra",
    image:
      "https://images.unsplash.com/photo-1621275471769-e6aa344546d5?w=200&h=200&fit=crop&q=80",
    updatedAt: "May 14, 2025",
    slug: "tulsi-mantra",
  },
  {
    id: "19",
    title: "Annapurna Mantra",
    label: "Annapurna Mantra",
    image:
      "https://images.unsplash.com/photo-1609941337459-81f1e7dce70e?w=200&h=200&fit=crop&q=80",
    updatedAt: "May 13, 2025",
    slug: "annapurna-mantra",
  },
  {
    id: "20",
    title: "Navagraha Mantras",
    label: "Navagraha Mantras",
    image:
      "https://images.unsplash.com/photo-1567591414240-e9c1e6e3c6f3?w=200&h=200&fit=crop&q=80",
    updatedAt: "May 13, 2025",
    slug: "navagraha-mantras",
  },
  {
    id: "21",
    title: "Mantras of the 12 Zodiac...",
    label: "Mantras of the 12 Zodiac",
    image:
      "https://images.unsplash.com/photo-1621275471769-e6aa344546d5?w=200&h=200&fit=crop&q=80",
    updatedAt: "May 13, 2025",
    slug: "zodiac-mantras",
  },
];

export default function MantraPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="pt-28 pb-6 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#FF9800] transition-colors">
              Home
            </Link>
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
            <span className="font-semibold text-[#333355]">Mantra</span>
          </nav>
        </div>
      </div>

      {/* Page Title */}
      <div className="px-4 md:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-[#333355]">
            Mantra
          </h1>
        </div>
      </div>

      {/* Mantra Grid */}
      <div className="px-4 md:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mantras.map((mantra) => (
              <Link
                key={mantra.id}
                href={`/mantra/${mantra.slug}`}
                className="flex items-center gap-4 bg-white rounded-lg p-3 hover:shadow-md transition-all border border-gray-100"
              >
                {/* Image with Label */}
                <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-[#00BCD4]">
                  <Image
                    src={mantra.image}
                    alt={mantra.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  {/* Label Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-[#00838F]/90 px-2 py-1">
                    <p className="text-white text-[10px] font-medium text-center leading-tight">
                      {mantra.label}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-base font-semibold text-[#333355] mb-1">
                    {mantra.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Updated at {mantra.updatedAt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


