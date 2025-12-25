"use client";

import Link from "next/link";
import Image from "next/image";

interface City {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  slug: string;
}

const cities: City[] = [
  {
    id: "1",
    name: "Haridwar",
    subtitle: "GATEWAY TO THE GODS",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop&q=80",
    slug: "haridwar"
  },
  {
    id: "2",
    name: "Rishikesh",
    subtitle: "YOGA CAPITAL OF THE WORLD",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop&q=80",
    slug: "rishikesh"
  },
  {
    id: "3",
    name: "Kedarnath",
    subtitle: "ABODE OF SHIVA",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop&q=80",
    slug: "kedarnath"
  },
  {
    id: "4",
    name: "Badrinath",
    subtitle: "GATEWAY TO THE ETERNAL",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop&q=80",
    slug: "badrinath"
  },
  {
    id: "5",
    name: "Ujjain",
    subtitle: "ANCIENT SEAT OF KNOWLEDGE",
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&h=600&fit=crop&q=80",
    slug: "ujjain"
  },
  {
    id: "6",
    name: "Somnath",
    subtitle: "ETERNAL SHRINE OF SHIVA",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop&q=80",
    slug: "somnath"
  },
  {
    id: "7",
    name: "Dwarka",
    subtitle: "KINGDOM OF LORD KRISHNA",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop&q=80",
    slug: "dwarka"
  },
  {
    id: "8",
    name: "Puri",
    subtitle: "LAND OF LORD JAGANNATH",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop&q=80",
    slug: "puri"
  },
  {
    id: "9",
    name: "Mathura",
    subtitle: "BIRTHPLACE OF LORD KRISHNA",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop&q=80",
    slug: "mathura"
  },
  {
    id: "10",
    name: "Rameshwaram",
    subtitle: "BRIDGE TO THE DIVINE",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop&q=80",
    slug: "rameshwaram"
  },
  {
    id: "11",
    name: "Tirupati",
    subtitle: "HOME OF LORD VENKATESWARA",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop&q=80",
    slug: "tirupati"
  },
  {
    id: "12",
    name: "Srisailam Mallikarjuna",
    subtitle: "HEART OF DIVINE PEACE",
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&h=600&fit=crop&q=80",
    slug: "srisailam-mallikarjuna"
  },
  {
    id: "13",
    name: "Bodhgaya",
    subtitle: "WHERE BUDDHA ATTAINED ENLIGHTENMENT",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop&q=80",
    slug: "bodhgaya"
  },
  {
    id: "14",
    name: "Kailash Mansarovar",
    subtitle: "JOURNEY TO THE ABODE OF SHIVA",
    image: "https://images.unsplash.com/photo-1585170988020-4e37ea3b3ea9?w=800&h=600&fit=crop&q=80",
    slug: "kailash-mansarovar"
  },
  {
    id: "15",
    name: "Vaishno Devi",
    subtitle: "PATHWAY TO THE DIVINE",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop&q=80",
    slug: "vaishno-devi"
  }
];

export default function SpiritualCityTours() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-[#e8f4f8] to-[#f0f8fb]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-[#E91E63]">Spiritual City</span>{" "}
            <span className="text-[#333355]">Tours in India</span>
          </h2>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {cities.map((city) => (
            <Link
              key={city.id}
              href={`/yatra/city/${city.slug}`}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Background Image */}
              <Image
                src={city.image}
                alt={city.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                unoptimized
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-4 md:p-6">
                <p className="text-white/90 text-[10px] md:text-xs font-light uppercase tracking-wider mb-2 text-center">
                  {city.subtitle}
                </p>
                <h3 className="text-white font-bold text-xl md:text-2xl lg:text-3xl text-center">
                  {city.name}
                </h3>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-white/30 rounded-2xl transition-all duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


