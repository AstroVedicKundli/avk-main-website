"use client";

import Image from "next/image";
import Link from "next/link";

interface ChalisaItem {
  id: string;
  title: string;
  label: string;
  image: string;
  updatedAt: string;
  slug: string;
}

const chalisas: ChalisaItem[] = [
  {
    id: "1",
    title: "Hanuman Chalisa",
    label: "Hanuman Chalisa",
    image:
      "https://images.unsplash.com/photo-1609941337459-81f1e7dce70e?w=200&h=200&fit=crop&q=80",
    updatedAt: "November 17, 2025",
    slug: "hanuman-chalisa",
  },
  {
    id: "2",
    title: "Mahalakshmi Chalisa",
    label: "Mahalakshmi Chalisa",
    image:
      "https://images.unsplash.com/photo-1567591414240-e9c1e6e3c6f3?w=200&h=200&fit=crop&q=80",
    updatedAt: "October 18, 2025",
    slug: "mahalakshmi-chalisa",
  },
  {
    id: "3",
    title: "Kaali Chalisa",
    label: "Kaali Chalisa",
    image:
      "https://images.unsplash.com/photo-1621275471769-e6aa344546d5?w=200&h=200&fit=crop&q=80",
    updatedAt: "July 9, 2025",
    slug: "kaali-chalisa",
  },
  {
    id: "4",
    title: "Radha Chalisa",
    label: "Radha Chalisa",
    image:
      "https://images.unsplash.com/photo-1609941337459-81f1e7dce70e?w=200&h=200&fit=crop&q=80",
    updatedAt: "July 9, 2025",
    slug: "radha-chalisa",
  },
  {
    id: "5",
    title: "Chant Parwati Chalisa to...",
    label: "Parwati Chalisa",
    image:
      "https://images.unsplash.com/photo-1567591414240-e9c1e6e3c6f3?w=200&h=200&fit=crop&q=80",
    updatedAt: "July 9, 2025",
    slug: "parwati-chalisa",
  },
  {
    id: "6",
    title: "Santoshi Chalisa",
    label: "Santoshi Chalisa",
    image:
      "https://images.unsplash.com/photo-1621275471769-e6aa344546d5?w=200&h=200&fit=crop&q=80",
    updatedAt: "July 9, 2025",
    slug: "santoshi-chalisa",
  },
  {
    id: "7",
    title: "Tulsi Chalisa",
    label: "Tulsi Chalisa",
    image:
      "https://images.unsplash.com/photo-1609941337459-81f1e7dce70e?w=200&h=200&fit=crop&q=80",
    updatedAt: "July 9, 2025",
    slug: "tulsi-chalisa",
  },
  {
    id: "8",
    title: "Chamunda Chalisa",
    label: "Chamunda Chalisa",
    image:
      "https://images.unsplash.com/photo-1567591414240-e9c1e6e3c6f3?w=200&h=200&fit=crop&q=80",
    updatedAt: "July 8, 2025",
    slug: "chamunda-chalisa",
  },
  {
    id: "9",
    title: "Ram Chalisa",
    label: "Ram Chalisa",
    image:
      "https://images.unsplash.com/photo-1621275471769-e6aa344546d5?w=200&h=200&fit=crop&q=80",
    updatedAt: "July 8, 2025",
    slug: "ram-chalisa",
  },
  {
    id: "10",
    title: "Durga Chalisa",
    label: "Durga Chalisa",
    image:
      "https://images.unsplash.com/photo-1609941337459-81f1e7dce70e?w=200&h=200&fit=crop&q=80",
    updatedAt: "July 8, 2025",
    slug: "durga-chalisa",
  },
  {
    id: "11",
    title: "Navgrah Chalisa",
    label: "Navgrah Chalisa",
    image:
      "https://images.unsplash.com/photo-1567591414240-e9c1e6e3c6f3?w=200&h=200&fit=crop&q=80",
    updatedAt: "July 8, 2025",
    slug: "navgrah-chalisa",
  },
  {
    id: "12",
    title: "Saraswati Chalisa",
    label: "Saraswati Chalisa",
    image:
      "https://images.unsplash.com/photo-1621275471769-e6aa344546d5?w=200&h=200&fit=crop&q=80",
    updatedAt: "July 8, 2025",
    slug: "saraswati-chalisa",
  },
  {
    id: "13",
    title: "Vishnu Chalisa",
    label: "Vishnu Chalisa",
    image:
      "https://images.unsplash.com/photo-1609941337459-81f1e7dce70e?w=200&h=200&fit=crop&q=80",
    updatedAt: "July 8, 2025",
    slug: "vishnu-chalisa",
  },
  {
    id: "14",
    title: "Surya Dev Chalisa",
    label: "Surya Dev Chalisa",
    image:
      "https://images.unsplash.com/photo-1567591414240-e9c1e6e3c6f3?w=200&h=200&fit=crop&q=80",
    updatedAt: "July 8, 2025",
    slug: "surya-dev-chalisa",
  },
  {
    id: "15",
    title: "Sheetla Chalisa",
    label: "Sheetla Chalisa",
    image:
      "https://images.unsplash.com/photo-1621275471769-e6aa344546d5?w=200&h=200&fit=crop&q=80",
    updatedAt: "July 8, 2025",
    slug: "sheetla-chalisa",
  },
  {
    id: "16",
    title: "Sai Baba Chalisa",
    label: "Sai Baba Chalisa",
    image:
      "https://images.unsplash.com/photo-1609941337459-81f1e7dce70e?w=200&h=200&fit=crop&q=80",
    updatedAt: "July 8, 2025",
    slug: "sai-baba-chalisa",
  },
  {
    id: "17",
    title: "Shiv Chalisa",
    label: "Shiv Chalisa",
    image:
      "https://images.unsplash.com/photo-1567591414240-e9c1e6e3c6f3?w=200&h=200&fit=crop&q=80",
    updatedAt: "July 8, 2025",
    slug: "shiv-chalisa",
  },
  {
    id: "18",
    title: "Bhairav Chalisa",
    label: "Bhairav Chalisa",
    image:
      "https://images.unsplash.com/photo-1621275471769-e6aa344546d5?w=200&h=200&fit=crop&q=80",
    updatedAt: "April 9, 2025",
    slug: "bhairav-chalisa",
  },
  {
    id: "19",
    title: "Hanuman Chalisa Story",
    label: "Story of Hanuman",
    image:
      "https://images.unsplash.com/photo-1609941337459-81f1e7dce70e?w=200&h=200&fit=crop&q=80",
    updatedAt: "December 9, 2024",
    slug: "hanuman-chalisa-story",
  },
];

export default function ChalisaPage() {
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
            <span className="font-semibold text-[#333355]">
              Chalisa Collection
            </span>
          </nav>
        </div>
      </div>

      {/* Page Title */}
      <div className="px-4 md:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-[#333355]">
            Chalisa Collection
          </h1>
        </div>
      </div>

      {/* Chalisa Grid */}
      <div className="px-4 md:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {chalisas.map((chalisa) => (
              <Link
                key={chalisa.id}
                href={`/chalisa/${chalisa.slug}`}
                className="flex items-center gap-4 bg-white rounded-lg p-3 hover:shadow-md transition-all border border-gray-100"
              >
                {/* Image with Label */}
                <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-[#D2691E]">
                  <Image
                    src={chalisa.image}
                    alt={chalisa.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  {/* Label Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-[#D2691E]/90 px-2 py-1">
                    <p className="text-white text-[10px] font-medium text-center leading-tight">
                      {chalisa.label}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-base font-semibold text-[#333355] mb-1">
                    {chalisa.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Updated at {chalisa.updatedAt}
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


