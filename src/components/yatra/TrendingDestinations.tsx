"use client";

import Link from "next/link";
import Image from "next/image";

interface Destination {
  id: string;
  name: string;
  image: string;
  slug: string;
}

const destinations: Destination[] = [
  {
    id: "1",
    name: "VARANASI",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&h=600&fit=crop&q=80",
    slug: "varanasi"
  },
  {
    id: "2",
    name: "PRAYAGRAJ",
    image: "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=800&h=600&fit=crop&q=80",
    slug: "prayagraj"
  },
  {
    id: "3",
    name: "AYODHYA",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop&q=80",
    slug: "ayodhya"
  },
  {
    id: "4",
    name: "UJJAIN",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop&q=80",
    slug: "ujjain"
  },
  {
    id: "5",
    name: "ODISHA",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop&q=80",
    slug: "odisha"
  },
  {
    id: "6",
    name: "CHARDHAM YATRA",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop&q=80",
    slug: "chardham-yatra"
  },
  {
    id: "7",
    name: "JYOTIRLINGA",
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&h=600&fit=crop&q=80",
    slug: "jyotirlinga"
  },
  {
    id: "8",
    name: "ADI KAILASH",
    image: "https://images.unsplash.com/photo-1585170988020-4e37ea3b3ea9?w=800&h=600&fit=crop&q=80",
    slug: "adi-kailash"
  },
  {
    id: "9",
    name: "MUKTINATH",
    image: "https://images.unsplash.com/photo-1585170988020-4e37ea3b3ea9?w=800&h=600&fit=crop&q=80",
    slug: "muktinath"
  },
  {
    id: "10",
    name: "SRI LANKA",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop&q=80",
    slug: "sri-lanka"
  }
];

export default function TrendingDestinations() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-[#E91E63]">Trending Destination</span>{" "}
            <span className="text-[#333355]">Pilgrimage tour Packages</span>
          </h2>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {destinations.map((destination) => (
            <Link
              key={destination.id}
              href={`/yatra/${destination.slug}`}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Background Image */}
              <Image
                src={destination.image}
                alt={destination.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                unoptimized
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-4 md:p-6">
                <h3 className="text-white font-bold text-lg md:text-xl text-center mb-1">
                  {destination.name}
                </h3>
                <p className="text-white/90 text-xs md:text-sm">Tour Packages</p>
              </div>

              {/* Decorative Border on Hover */}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#E91E63]/50 rounded-2xl transition-all duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


