"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

interface ChalisaDetail {
  title: string;
  bannerImage: string;
  description: string;
  dohaTitle: string;
  dohaLyrics: string[];
  chaupaiTitle: string;
  chaupaiLyrics: string[];
}

const chalisaData: Record<string, ChalisaDetail> = {
  "hanuman-chalisa": {
    title: "Hanuman Chalisa",
    bannerImage:
      "https://images.unsplash.com/photo-1609941337459-81f1e7dce70e?w=1200&h=600&fit=crop&q=80",
    description:
      "Read Hanuman Chalisa in English with Doha & Chaupai. Discover its meaning & power. Boost positivity, read now for peace and blessings.",
    dohaTitle: "Hanuman Chalisa Doha in English",
    dohaLyrics: [
      "Shri Guru Charan Saroj Raj, Nij Manu Mukur Sudhaari. Baranau Raghubar Vimal Jas, Jo Daayak Phal Chari.",
      "Buddhiheen Tanu Jaankai, Sumiron Pavan-Kumar. Bal Buddhi Vidya Dehu Mohin, Harhu Kalesh Vikaari.",
    ],
    chaupaiTitle: "Hanuman Chalisa Chaupai in English",
    chaupaiLyrics: [
      "Jai Hanuman Gyaan Gun Saagar, Jai Kapis Tihun Lok Ujaagar.",
      "Ram Doot Atulit Bal Dhaama, Anjani-Putra Pavan-Sut Naama.",
      "Mahabir Bikram Bajrangi, Kumati Nivaar Sumati Ke Sangi.",
      "Kanchan Varan Viraaj Subesa, Kanan Kundal Kunchit Kesa.",
      "Haath Vajra Au Dhwaja Viraaje, Kaandhe Moonj Janeu Saaje.",
      "Sankar Suvan Kesri Nandan, Tej Prataap Maha Jag Vandan.",
      "Vidyavaan Guni Ati Chaatur, Ram Kaaj Karibe Ko Aatur.",
      "Prabhu Charitra Sunibe Ko Rasiya, Ram Lakhan Sita Man Basiya.",
    ],
  },
  "mahalakshmi-chalisa": {
    title: "Mahalakshmi Chalisa",
    bannerImage:
      "https://images.unsplash.com/photo-1567591414240-e9c1e6e3c6f3?w=1200&h=600&fit=crop&q=80",
    description:
      "Read Mahalakshmi Chalisa in English with Doha & Chaupai. Invoke the blessings of Goddess Lakshmi for wealth and prosperity.",
    dohaTitle: "Mahalakshmi Chalisa Doha in English",
    dohaLyrics: [
      "Maat Lakshmi Kari Kripa, Karo Hriday Mein Vaas. Mani Mool Mantra Lakshmiji, Karo Vishesh Prakaash.",
    ],
    chaupaiTitle: "Mahalakshmi Chalisa Chaupai in English",
    chaupaiLyrics: [
      "Jai Jai Jagat Janani Jagdamba, Sabke Tum Ho Rakhvari Amba.",
      "Surya Chandrama Dhyavat, Narad Rishi Gaavat.",
      "Durga Roop Niranjani, Sukh Sampati Ke Daani.",
      "Jo Koi Dhyavey Lakshmiji Ko, Sadaa Sukhi Rahey Vo.",
    ],
  },
  "shiv-chalisa": {
    title: "Shiv Chalisa",
    bannerImage:
      "https://images.unsplash.com/photo-1621275471769-e6aa344546d5?w=1200&h=600&fit=crop&q=80",
    description:
      "Read Shiv Chalisa in English with Doha & Chaupai. Seek the blessings of Lord Shiva for spiritual growth and inner peace.",
    dohaTitle: "Shiv Chalisa Doha in English",
    dohaLyrics: [
      "Jai Ganesh Girija Suvan, Mangal Mool Sujaan. Kahat Ayodhya Das Tum, Dehu Abhay Vardaan.",
    ],
    chaupaiTitle: "Shiv Chalisa Chaupai in English",
    chaupaiLyrics: [
      "Jai Girijapati Deen Dayaala, Sada Karat Santan Pratipala.",
      "Bhal Chandrama Sohati Neeke, Kanan Kundal Naag Phani Keeke.",
      "Ang Gaur Shir Ganga Bahaye, Mundmaal Tan Chhar Lagaye.",
      "Vastra Khaal Baghambar Sohe, Chavi Ko Dekh Naag Mun Mohe.",
    ],
  },
  "durga-chalisa": {
    title: "Durga Chalisa",
    bannerImage:
      "https://images.unsplash.com/photo-1609941337459-81f1e7dce70e?w=1200&h=600&fit=crop&q=80",
    description:
      "Read Durga Chalisa in English with Doha & Chaupai. Invoke the divine power of Maa Durga for protection and strength.",
    dohaTitle: "Durga Chalisa Doha in English",
    dohaLyrics: ["Namo Namo Durge Sukh Karani, Namo Namo Ambe Dukh Harani."],
    chaupaiTitle: "Durga Chalisa Chaupai in English",
    chaupaiLyrics: [
      "Jai Ambe Gauri Maiya, Jai Shyama Gauri Maiya.",
      "Tumko Nisdin Dhyavat Hari, Brahma Shivji.",
      "Rishi Muni Pandit Dhyavat, Narad Sharad Shesh.",
      "Doot Sat Sugriva Ke Aaye, Mukh Nikasee Bat.",
    ],
  },
};

// Default chalisa data for slugs not in the database
const defaultChalisa: ChalisaDetail = {
  title: "Chalisa",
  bannerImage:
    "https://images.unsplash.com/photo-1609941337459-81f1e7dce70e?w=1200&h=600&fit=crop&q=80",
  description:
    "Read this sacred Chalisa in English with Doha & Chaupai. Discover its meaning & power for spiritual growth and divine blessings.",
  dohaTitle: "Chalisa Doha in English",
  dohaLyrics: [
    "Shri Guru Charan Saroj Raj, Nij Manu Mukur Sudhaari.",
    "Baranau Raghubar Vimal Jas, Jo Daayak Phal Chari.",
  ],
  chaupaiTitle: "Chalisa Chaupai in English",
  chaupaiLyrics: [
    "Jai Jai Jai, Divine grace upon all.",
    "May peace and blessings be with you always.",
  ],
};

export default function ChalisaDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  // Get chalisa data or use default
  const chalisa = chalisaData[slug] || {
    ...defaultChalisa,
    title: slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    dohaTitle: `${slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")} Doha in English`,
    chaupaiTitle: `${slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")} Chaupai in English`,
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
              href="/chalisa"
              className="hover:text-[#FF9800] transition-colors"
            >
              Chalisa Collection
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
              {chalisa.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Banner Image */}
      <div className="px-4 md:px-6 lg:px-8 pb-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden bg-[#5D4037]">
            <Image
              src={chalisa.bannerImage}
              alt={chalisa.title}
              fill
              className="object-cover"
              unoptimized
            />
            {/* Title Overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-[#5D4037]/90 to-transparent flex items-center justify-end">
              <h2 className="text-3xl md:text-5xl font-bold text-white pr-8 md:pr-16 text-right">
                {chalisa.title.split(" ").slice(0, -1).join(" ")}
                <br />
                {chalisa.title.split(" ").slice(-1)}
              </h2>
            </div>
            {/* Download & Share Buttons */}
            <div className="absolute top-4 right-4 flex items-center gap-4">
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
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                <span>Share</span>
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
            {chalisa.title}
          </h1>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-8">
            {chalisa.description}
          </p>

          {/* Doha Section */}
          <h2 className="text-xl md:text-2xl font-bold text-[#333355] mb-6">
            {chalisa.dohaTitle}
          </h2>

          <div className="space-y-4 mb-10">
            {chalisa.dohaLyrics.map((line, index) => (
              <p key={index} className="text-gray-700 leading-relaxed italic">
                {line}
              </p>
            ))}
          </div>

          {/* Chaupai Section */}
          <h2 className="text-xl md:text-2xl font-bold text-[#333355] mb-6">
            {chalisa.chaupaiTitle}
          </h2>

          <div className="space-y-4">
            {chalisa.chaupaiLyrics.map((line, index) => (
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


