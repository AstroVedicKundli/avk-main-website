"use client";

import Image from "next/image";
import Link from "next/link";

interface ArticleCard {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  bgColor: string;
}

const articles: ArticleCard[] = [
  {
    id: "1",
    title: "Aarti",
    description:
      "Find complete lyrics of all the famous Aartis and easily worship your beloved God.",
    image:
      "https://images.unsplash.com/photo-1609941337459-81f1e7dce70e?w=600&h=500&fit=crop&q=80",
    link: "/aarti",
    bgColor: "#FF9800",
  },
  {
    id: "2",
    title: "Chalisa",
    description:
      "You will get complete Chalisa of all the deities. Read Chalisa during the Pooja of your beloved deities and seek their grace.",
    image:
      "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=500&fit=crop&q=80",
    link: "/chalisa",
    bgColor: "#8B7355",
  },
  {
    id: "3",
    title: "Mantra",
    description:
      "Here you will find all the powerful mantras for peace of mind. Chant these mantras and remove all the obstacles from life.",
    image:
      "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=600&h=500&fit=crop&q=80",
    link: "/mantra",
    bgColor: "#00BCD4",
  },
];

export default function SanatanArticles() {
  return (
    <div className="py-16 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#333355] mb-4">
            Read interesting articles about upcoming fasts, festivals, and
            everything around Sanatan Dharma.
          </h2>
          <p className="text-base md:text-lg text-[#333355]/70 max-w-4xl mx-auto mb-4">
            Read interesting articles about upcoming fasts, festivals, and
            everything around Sanatan Dharma.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div
                className="relative h-52 w-full"
                style={{ backgroundColor: article.bgColor }}
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#333355] mb-3">
                  {article.title}
                </h3>
                <p className="text-[#333355]/70 text-sm leading-relaxed mb-5 flex-grow">
                  {article.description}
                </p>
                <Link
                  href={article.link}
                  className="text-[#E91E63] font-semibold hover:text-[#C2185B] transition-colors"
                >
                  Read All
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


