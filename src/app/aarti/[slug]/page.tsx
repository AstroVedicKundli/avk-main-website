"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

interface AartiDetail {
  title: string;
  bannerImage: string;
  description: string;
  lyricsIntro: string;
  lyricsTitle: string;
  lyrics: string[];
}

const aartiData: Record<string, AartiDetail> = {
  "dhanteras-aarti": {
    title: "Dhanteras Aarti",
    bannerImage:
      "https://images.unsplash.com/photo-1609941337459-81f1e7dce70e?w=1200&h=600&fit=crop&q=80",
    description:
      "Celebrate Diwali with Dhanteras Aarti! Invoke blessings of Dhanvantari & Lakshmi for health, wealth & prosperity. Start your festival with divine grace.",
    lyricsIntro:
      "Dhanteras is a special festival in India. It comes two days before Diwali. On this day, people pray to Goddess Lakshmi for wealth and Lord Dhanvantari for good health. They light lamps and sing prayers. Many people buy gold, silver, or new utensils for good luck. Homes and temples look bright with lights and decorations. People believe that doing aarti on Dhanteras brings happiness and removes money problems. This festival is a time to pray, celebrate, and hope for a happy life.",
    lyricsTitle: "Dhanwantri Aarti in English",
    lyrics: [
      "Om Jai Dhanwantri Deva, Jai Dhanwantri Deva. Jara-rog se peedit, jan-jan sukh deva.",
      "Jai Dhanwantri Deva.",
      "Tum samudra se nikle, amrit kalash liye. Devasur ke sankat aakar door kiye.",
      "Jai Dhanwantri Deva.",
      "Amar ved upchaar, tumne jagat sikhaye. Arogya ka vismay gyan hamein bataye.",
      "Jai Dhanwantri Deva.",
      "Dhanvantari prabhu aap, vaidya shiromani hain. Bhakton ki vedna haro, dayalu swami hain.",
      "Jai Dhanwantri Deva.",
    ],
  },
  "ganesh-aarti": {
    title: "Ganesh Aarti",
    bannerImage:
      "https://images.unsplash.com/photo-1567591414240-e9c1e6e3c6f3?w=1200&h=600&fit=crop&q=80",
    description:
      "Invoke the blessings of Lord Ganesha with this beautiful Aarti. Remove obstacles and bring prosperity into your life with divine grace.",
    lyricsIntro:
      "Lord Ganesha is worshipped as the remover of obstacles and the god of beginnings. This aarti is sung during Ganesh Chaturthi and other auspicious occasions to seek his blessings for success and prosperity.",
    lyricsTitle: "Ganesh Aarti in English",
    lyrics: [
      "Jai Ganesh Jai Ganesh Jai Ganesh Deva.",
      "Mata Jaki Parvati Pita Mahadeva.",
      "Ek Dant Dayavant Char Bhuja Dhari.",
      "Mathe Par Tilak Sohe Muse Ki Sawari.",
      "Jai Ganesh Jai Ganesh Jai Ganesh Deva.",
      "Pan Chadhe Phool Chadhe Aur Chadhe Mewa.",
      "Ladduan Ka Bhog Lage Sant Karen Seva.",
      "Jai Ganesh Jai Ganesh Jai Ganesh Deva.",
    ],
  },
  "govardhan-maharaj-aarti": {
    title: "Govardhan Maharaj Aarti",
    bannerImage:
      "https://images.unsplash.com/photo-1621275471769-e6aa344546d5?w=1200&h=600&fit=crop&q=80",
    description:
      "Sing the divine Govardhan Maharaj Aarti and seek blessings from the sacred mountain lifted by Lord Krishna.",
    lyricsIntro:
      "Govardhan Puja is celebrated to honor the Govardhan Hill, which Lord Krishna lifted on his little finger to protect the people of Vrindavan from heavy rains sent by Lord Indra.",
    lyricsTitle: "Govardhan Aarti in English",
    lyrics: [
      "Om Jai Shri Govardhan, Girdhari Lal Ki.",
      "Krishna Murari Mohan, Radhey Ke Lal Ki.",
      "Govind Gopal Nandlal, Brij Ke Baal Ki.",
      "Om Jai Shri Govardhan, Girdhari Lal Ki.",
    ],
  },
};

// Default aarti data for slugs not in the database
const defaultAarti: AartiDetail = {
  title: "Aarti",
  bannerImage:
    "https://images.unsplash.com/photo-1609941337459-81f1e7dce70e?w=1200&h=600&fit=crop&q=80",
  description:
    "Experience the divine grace through this sacred Aarti. Invoke blessings and spiritual peace in your life.",
  lyricsIntro:
    "Aarti is a Hindu religious ritual of worship, a part of puja, in which light from wicks soaked in ghee or camphor is offered to deities. The purpose of performing aarti is to ward off evil effects and to welcome the deity.",
  lyricsTitle: "Aarti Lyrics",
  lyrics: [
    "Om Jai Jagdish Hare, Swami Jai Jagdish Hare.",
    "Bhakt Jano Ke Sankat, Daas Jano Ke Sankat.",
    "Kshan Mein Door Kare, Om Jai Jagdish Hare.",
  ],
};

export default function AartiDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  // Get aarti data or use default
  const aarti = aartiData[slug] || {
    ...defaultAarti,
    title: slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="pt-28 pb-6 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-gray-600 flex-wrap">
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
            <Link
              href="/aarti"
              className="hover:text-[#FF9800] transition-colors"
            >
              Aarti
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
            <span className="font-semibold text-[#333355]">{aarti.title}</span>
          </nav>
        </div>
      </div>

      {/* Banner Image */}
      <div className="px-4 md:px-6 lg:px-8 pb-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden bg-[#D4A574]">
            <Image
              src={aarti.bannerImage}
              alt={aarti.title}
              fill
              className="object-cover"
              unoptimized
            />
            {/* Title Overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-[#D4A574]/90 to-transparent flex items-center justify-end">
              <h2 className="text-3xl md:text-5xl font-bold text-white pr-8 md:pr-16 text-right">
                {aarti.title.split(" ").slice(0, -1).join(" ")}
                <br />
                {aarti.title.split(" ").slice(-1)}
              </h2>
            </div>
            {/* Download Button */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <button className="text-white text-xs flex flex-col items-center hover:opacity-80 transition-opacity">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                <span>Download</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Share Buttons */}
      <div className="px-4 md:px-6 lg:px-8 pb-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg
                className="w-5 h-5 text-[#25D366]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 md:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-[#333355] mb-4">
            {aarti.title}
          </h1>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-8">
            {aarti.description}
          </p>

          {/* Lyrics Section */}
          <h2 className="text-xl md:text-2xl font-bold text-[#333355] mb-4">
            {aarti.title} Lyrics
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8">
            {aarti.lyricsIntro}
          </p>

          {/* Aarti in English */}
          <h3 className="text-lg md:text-xl font-bold text-[#333355] mb-4">
            {aarti.lyricsTitle}
          </h3>

          <div className="space-y-4">
            {aarti.lyrics.map((line, index) => (
              <p key={index} className="text-gray-700 leading-relaxed italic">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


