"use client";

import Image from "next/image";
import Link from "next/link";

interface AartiItem {
  id: string;
  title: string;
  label: string;
  image: string;
  updatedAt: string;
  slug: string;
}

const aartis: AartiItem[] = [
  {
    id: "1",
    title: "Dhanteras Aarti",
    label: "Dhanteras Aarti",
    image: "/puja/aarti/Dhanteras_Aarti.webp",
    updatedAt: "October 18, 2025",
    slug: "dhanteras-aarti",
  },
  {
    id: "2",
    title: "Ganesh Aarti",
    label: "Ganesh Aarti",
    image: "/puja/aarti/Ganesh_Aarti.webp",
    updatedAt: "October 18, 2025",
    slug: "ganesh-aarti",
  },
  {
    id: "3",
    title: "Govardhan Maharaj Aarti",
    label: "Govardhan Maharaj Aarti",
    image: "/puja/aarti/Govardhan_Aarti.webp",
    updatedAt: "October 15, 2025",
    slug: "govardhan-maharaj-aarti",
  },
  {
    id: "4",
    title: "Balaji Aarti",
    label: "Balaji Aarti",
    image: "/puja/aarti/Balaji_Aarti.webp",
    updatedAt: "July 15, 2025",
    slug: "balaji-aarti",
  },
  {
    id: "5",
    title: "Dharmaraj Aarti",
    label: "Dharmaraj Aarti",
    image: "/puja/aarti/Dharmaraj_Aarti.webp",
    updatedAt: "July 15, 2025",
    slug: "dharmaraj-aarti",
  },
  {
    id: "6",
    title: "Lalita Aarti",
    label: "Lalita Aarti",
    image: "/puja/aarti/Lalita_Aarti.webp",
    updatedAt: "July 15, 2025",
    slug: "lalita-aarti",
  },
  {
    id: "7",
    title: "Ramayan Aarti",
    label: "Ramayan Aarti",
    image: "/puja/aarti/Ramayan_Aarti.webp",
    updatedAt: "July 15, 2025",
    slug: "ramayan-aarti",
  },
  {
    id: "8",
    title: "Sankata Aarti",
    label: "Sankata Aarti",
    image: "/puja/aarti/Sankata_Aarti.webp",
    updatedAt: "July 15, 2025",
    slug: "sankata-aarti",
  },
  {
    id: "9",
    title: "Ekadashi Aarti",
    label: "Ekadashi Aarti",
    image: "/puja/aarti/Ekadashi_Aarti.webp",
    updatedAt: "July 15, 2025",
    slug: "ekadashi-aarti",
  },
  {
    id: "10",
    title: "Gorakhnath Aarti",
    label: "Gorakhnath Aarti",
    image: "/puja/aarti/Gorakhnath_Aarti.webp",
    updatedAt: "July 15, 2025",
    slug: "gorakhnath-aarti",
  },
  {
    id: "11",
    title: "Siddhivinayak Aarti",
    label: "Siddhivinayak Aarti",
    image: "/puja/aarti/Siddhivinayak_Aarti.webp",
    updatedAt: "July 15, 2025",
    slug: "siddhivinayak-aarti",
  },
  {
    id: "12",
    title: "Vishwakarma Aarti",
    label: "Vishwakarma Aarti",
    image: "/puja/aarti/Vishwakarma_Aarti.webp",
    updatedAt: "July 15, 2025",
    slug: "vishwakarma-aarti",
  },
  {
    id: "13",
    title: "Ahoi Aarti in English",
    label: "Ahoi Aarti",
    image: "/puja/aarti/Ahoi_Aarti.webp",
    updatedAt: "July 15, 2025",
    slug: "ahoi-aarti",
  },
  {
    id: "14",
    title: "Bharat Mata Aarti",
    label: "Bharat Mata Aarti",
    image: "/puja/aarti/Bharat_Mata_Aarti.webp",
    updatedAt: "July 15, 2025",
    slug: "bharat-mata-aarti",
  },
  {
    id: "15",
    title: "Kartikeya Aarti",
    label: "Kartikeya Aarti",
    image: "/puja/aarti/Kartikeya_Aarti.webp",
    updatedAt: "July 15, 2025",
    slug: "kartikeya-aarti",
  },
  {
    id: "16",
    title: "Bhagavad Gita Aarti",
    label: "Bhagavad Gita Aarti",
    image: "/puja/aarti/Bhagavad_Gita_Aarti.webp",
    updatedAt: "July 15, 2025",
    slug: "bhagavad-gita-aarti",
  },
  {
    id: "17",
    title: "Dattachi Aarti",
    label: "Dattachi Aarti",
    image: "/puja/aarti/Dattachi_Aarti.webp",
    updatedAt: "July 15, 2025",
    slug: "dattachi-aarti",
  },
  {
    id: "18",
    title: "Annapurna Aarti",
    label: "Annapurna Aarti",
    image: "/puja/aarti/Annapurna_Aarti.webp",
    updatedAt: "July 15, 2025",
    slug: "annapurna-aarti",
  },
];

export default function AartiPage() {
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
            <span className="font-semibold text-[#333355]">Aarti</span>
          </nav>
        </div>
      </div>

      {/* Page Title */}
      <div className="px-4 md:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-[#333355]">
            Aarti
          </h1>
        </div>
      </div>

      {/* Aarti Grid */}
      <div className="px-4 md:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {aartis.map((aarti) => (
              <Link
                key={aarti.id}
                href={`/aarti/${aarti.slug}`}
                className="flex items-center gap-4 bg-white rounded-lg p-3 hover:shadow-md transition-all border border-gray-100"
              >
                {/* Image with Label */}
                <div className="relative w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden bg-[#FF9800]">
                  <Image
                    src={aarti.image}
                    alt={aarti.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  {/* Label Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-[#FF9800]/90 px-2 py-1">
                    <p className="text-white text-[10px] font-medium text-center leading-tight">
                      {aarti.label}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-base font-semibold text-[#333355] mb-1">
                    {aarti.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Updated at {aarti.updatedAt}
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


