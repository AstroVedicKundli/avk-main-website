"use client";

import Image from "next/image";
import Link from "next/link";

interface Puja {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
}

const pujas: Puja[] = [
  {
    id: "1",
    title: "Sri Sathyanarayana Vratham",
    description:
      'Lord Satyanarayana is the "highest being who is an embodiment of truth". Satyanarayana puja is performed to Lord Vishnu which bestows us with good health and wealth. During the puja,...',
    image:
      "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&h=400&fit=crop&q=80",
    slug: "sathyanarayana-vratham",
  },
  {
    id: "2",
    title: "Sri Varalaxmi Vratham",
    description:
      "Every year Varalakshmi Vratham is observed in the Sravana month. It is celebrated on Friday preceding the full moon day. Those who cannot perform it on that day, can do it o...",
    image:
      "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600&h=400&fit=crop&q=80",
    slug: "varalaxmi-vratham",
  },
  {
    id: "3",
    title: "Sri Kedareshwara Swamy Vratham",
    description:
      "The Kedareswara Vratha Puja implicates the importance of women being equal to men. This was performed by Parvathi Devi to become a part of Lord Shiva. This process was called as Ardhanareeswara...",
    image:
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=600&h=400&fit=crop&q=80",
    slug: "kedareshwara-vratham",
  },
];

export default function VrathamPujas() {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#C41E3A] font-semibold text-sm uppercase tracking-wide mb-2">
            PUJAS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e]">
            Vratham Pujas
          </h2>
        </div>

        {/* Puja Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pujas.map((puja) => (
            <div
              key={puja.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Puja Image */}
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
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-[#1a1a2e] leading-tight mb-4">
                  {puja.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4">
                  {puja.description}
                </p>

                {/* Action Links */}
                <div className="flex items-center justify-between">
                  <Link
                    href={`/puja/${puja.slug}`}
                    className="text-[#C41E3A] font-semibold text-sm hover:text-[#A31530] transition-colors"
                  >
                    Puja Details
                  </Link>
                  <Link
                    href={`/puja/${puja.slug}/book`}
                    className="text-[#C41E3A] font-semibold text-sm hover:text-[#A31530] transition-colors border-b border-[#C41E3A] hover:border-[#A31530] pb-0.5"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
