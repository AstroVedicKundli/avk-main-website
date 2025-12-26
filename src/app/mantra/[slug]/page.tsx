"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

interface MantraDetail {
  title: string;
  bannerImage: string;
  description: string;
  mantraTitle: string;
  mantraText: string;
  meaning: string;
  benefits: string[];
}

const mantraData: Record<string, MantraDetail> = {
  "laxmi-mantra": {
    title: "Laxmi Mantra",
    bannerImage: "/puja/mantra/slug/Laxmi_Mantra.webp",
    description:
      "Explore the most sacred Laxmi Mata Mantra. This devotional chant invokes the blessings of Goddess Lakshmi for financial growth, success, and overall well-being.",
    mantraTitle: "Lakshmi Moola Mantra",
    mantraText:
      "Om Shreem Hreem Shreem Kamale Kamalalaye Praseed Praseed. Shreem Hreem Shreem Om Mahalaxmi Namah.",
    meaning:
      "Hail to Goddess Mahalaxmi, who is associated with the seed mantras Shreem, Hreem, Shreem and is seated on a lotus. By remembering her, one receives divine blessings. We bow to such a benevolent Mahalaxmi and seek her blessings for prosperity.",
    benefits: [
      "Attracts wealth and abundance into your life",
      "Removes financial obstacles and debts",
      "Brings prosperity and good fortune",
      "Enhances success in business and career",
      "Creates positive energy in your home",
    ],
  },
  "ganesh-mantra": {
    title: "Ganesha Mantras",
    bannerImage: "/puja/mantra/slug/Ganesha_Mantra.webp",
    description:
      "Chant the powerful Ganesha Mantra to remove obstacles from your path. Lord Ganesha is the remover of obstacles and the god of beginnings.",
    mantraTitle: "Ganesh Moola Mantra",
    mantraText: "Om Gam Ganapataye Namaha",
    meaning:
      "Salutations to Lord Ganesha, the remover of obstacles. By chanting this mantra, we invoke the blessings of Lord Ganesha to clear our path and bring success in all endeavors.",
    benefits: [
      "Removes obstacles from your path",
      "Brings success in new ventures",
      "Enhances wisdom and intelligence",
      "Provides protection from negative energies",
      "Brings good luck and prosperity",
    ],
  },
  "hanuman-moola-mantra": {
    title: "Hanuman Moola Mantra",
    bannerImage: "/puja/mantra/slug/Hanuman_Mantra.webp",
    description:
      "The Hanuman Moola Mantra invokes the strength and devotion of Lord Hanuman. Chant this mantra for courage, protection, and to overcome fears.",
    mantraTitle: "Hanuman Moola Mantra",
    mantraText: "Om Hanumate Namah",
    meaning:
      "Salutations to Lord Hanuman. This simple yet powerful mantra invokes the energy of Hanuman, the embodiment of strength, courage, and devotion to Lord Rama.",
    benefits: [
      "Provides courage and strength",
      "Protects from evil and negative energies",
      "Helps overcome fears and anxieties",
      "Enhances devotion and spiritual growth",
      "Brings physical and mental strength",
    ],
  },
  "shiv-mantra": {
    title: "Shiv Mantra",
    bannerImage:
      "https://images.unsplash.com/photo-1609941337459-81f1e7dce70e?w=1200&h=600&fit=crop&q=80",
    description:
      "The sacred Shiv Mantra connects you with the divine energy of Lord Shiva. Chant for inner peace, spiritual awakening, and liberation.",
    mantraTitle: "Shiva Moola Mantra",
    mantraText: "Om Namah Shivaya",
    meaning:
      "I bow to Lord Shiva. This five-syllable mantra (Panchakshari) is one of the most powerful mantras in Hinduism. It represents the five elements - earth, water, fire, air, and space.",
    benefits: [
      "Brings inner peace and calmness",
      "Aids in spiritual awakening",
      "Removes negativity and impurities",
      "Enhances meditation practice",
      "Leads to liberation (Moksha)",
    ],
  },
  "krishna-mantra": {
    title: "Krishna Mantra",
    bannerImage: "/puja/mantra/slug/Krishna_Mantra.webp",
    description:
      "The Krishna Mantra fills your heart with divine love and joy. Lord Krishna's mantras bring happiness, peace, and spiritual enlightenment.",
    mantraTitle: "Krishna Moola Mantra",
    mantraText: "Om Kleem Krishnaya Namaha",
    meaning:
      "Salutations to Lord Krishna with the seed sound Kleem. This mantra invokes the divine love and grace of Lord Krishna, attracting positive relationships and spiritual bliss.",
    benefits: [
      "Attracts love and positive relationships",
      "Brings joy and happiness",
      "Enhances devotion to the divine",
      "Removes mental stress and anxiety",
      "Brings spiritual enlightenment",
    ],
  },
  "ganesha-mantras": {
    // Alias slug for list page, reusing Ganesh mantra content
    title: "Ganesha Mantras",
    bannerImage: "/puja/mantra/slug/Ganesha_Mantra.webp",
    description:
      "Chant these sacred Ganesha mantras to seek the blessings of Lord Ganesha for new beginnings, removal of obstacles, and success in every step of life.",
    mantraTitle: "Ganesha Mantra",
    mantraText: "Om Gam Ganapataye Namaha",
    meaning:
      "We bow to Lord Ganesha, the remover of obstacles and the lord of wisdom. Regular chanting brings clarity, confidence, and support in all important actions.",
    benefits: [
      "Removes obstacles before important tasks",
      "Brings confidence and clarity of mind",
      "Supports success in studies and career",
      "Creates auspicious energy at home and work",
    ],
  },
  "chhath-puja-mantra": {
    title: "Chhath Puja Mantra",
    bannerImage: "/puja/mantra/slug/Chhath_Mantra.webp",
    description:
      "Chhath Puja mantras are dedicated to Surya Dev and Chhathi Maiya. They are chanted to express gratitude for life, health, and prosperity.",
    mantraTitle: "Chhath Puja Mantra",
    mantraText: "Om Adityaaya Namah",
    meaning:
      "Salutations to the radiant Sun God, who nourishes and sustains all life. This mantra is a prayer for strength, health, and well-being.",
    benefits: [
      "Brings vitality and good health",
      "Supports success through hard work and discipline",
      "Increases gratitude and positivity",
      "Connects you with the energy of the Sun",
    ],
  },
  "govardhan-mantra": {
    title: "Govardhan Mantra",
    bannerImage: "/puja/mantra/slug/Govardhan_Mantra.webp",
    description:
      "Govardhan Mantra is chanted in devotion to Lord Krishna and Govardhan Hill, symbolizing divine protection and shelter.",
    mantraTitle: "Govardhan Mantra",
    mantraText: "Om Giridhari Govardhan Dhaari Namah",
    meaning:
      "We bow to the Lord who lifted Govardhan Hill to protect his devotees. The mantra is a reminder that divine grace always supports sincere hearts.",
    benefits: [
      "Invokes protection from difficulties",
      "Strengthens faith in divine support",
      "Brings peace during challenging times",
      "Encourages humility and devotion",
    ],
  },
  "radha-mantra": {
    title: "Radha Mantra",
    bannerImage: "/puja/mantra/slug/Radha_Mantra.webp",
    description:
      "Radha Mantra connects the devotee with the pure love and devotion of Shri Radha, the eternal consort of Lord Krishna.",
    mantraTitle: "Radha Mantra",
    mantraText: "Om Radha Krishnaya Namah",
    meaning:
      "Salutations to Radha and Krishna together, the embodiment of divine love and harmony. Chanting brings sweetness and devotion into the heart.",
    benefits: [
      "Deepens devotion and bhakti",
      "Heals emotional hurts and loneliness",
      "Brings harmony to relationships",
      "Opens the heart to unconditional love",
    ],
  },
  "narayan-mantra": {
    title: "Narayan Mantra",
    bannerImage: "/puja/mantra/slug/Narayan_Mantra.webp",
    description:
      "Narayan Mantra invokes Lord Narayan, the all-pervading form of Vishnu who preserves and sustains the universe.",
    mantraTitle: "Narayan Mantra",
    mantraText: "Om Namo Narayanaya",
    meaning:
      "We bow to Lord Narayan, the supreme protector and source of peace. The mantra calms the mind and reminds us of our divine center.",
    benefits: [
      "Brings inner peace and stability",
      "Protects from negativity and fear",
      "Supports spiritual discipline and sadhana",
      "Strengthens faith in divine guidance",
    ],
  },
  "kali-mantra": {
    title: "Kali Mantra",
    bannerImage: "/puja/mantra/slug/Kali_Mantra.webp",
    description:
      "Kali Mantra is chanted to call upon Maa Kali, who destroys negativity and grants fearlessness.",
    mantraTitle: "Kali Mantra",
    mantraText: "Om Kreem Kalikayai Namah",
    meaning:
      "We bow to Maa Kali, the fierce form of the Divine Mother who cuts away ignorance, fear, and inner darkness.",
    benefits: [
      "Removes deep-seated fears and blockages",
      "Destroys negative patterns and habits",
      "Increases courage and inner power",
      "Supports rapid spiritual transformation",
    ],
  },
  "agni-mantra": {
    title: "Agni Mantra",
    bannerImage: "/puja/mantra/slug/Agni_Mantra.webp",
    description:
      "Agni Mantra honors the sacred fire, symbol of transformation, purity, and divine witness in every ritual.",
    mantraTitle: "Agni Mantra",
    mantraText: "Om Agnaye Namah",
    meaning:
      "Salutations to Agni, the fire that purifies and carries our prayers to the divine realms.",
    benefits: [
      "Purifies thoughts and intentions",
      "Supports disciplined spiritual practice",
      "Strengthens willpower and determination",
      "Helps burn away past negativity",
    ],
  },
  "maha-rudrabhishek-mantras": {
    title: "Maha Rudrabhishek Mantras",
    bannerImage: "/puja/mantra/slug/Maha_Rudrabhishek_Mantra.webp",
    description:
      "These mantras are recited during Maha Rudrabhishek to worship Lord Shiva in his Rudra form through abhishek and chanting.",
    mantraTitle: "Maha Rudra Mantra",
    mantraText: "Om Namo Bhagavate Rudraya",
    meaning:
      "We bow to Lord Rudra, the powerful and compassionate aspect of Shiva who destroys sorrow and grants liberation.",
    benefits: [
      "Removes intense karmic blocks",
      "Brings strength during difficult periods",
      "Purifies the environment and mind",
      "Supports deep spiritual austerities",
    ],
  },
  "shakti-mantra": {
    title: "Shakti Mantra",
    bannerImage: "/puja/mantra/slug/Shakti_Mantra.webp",
    description:
      "Shakti Mantra awakens the divine feminine energy within, bringing dynamism, creativity, and confidence.",
    mantraTitle: "Shakti Mantra",
    mantraText: "Om Aim Hreem Kleem Chamundayai Vichche",
    meaning:
      "This mantra invokes the combined energy of wisdom, power, and protection of the Divine Mother.",
    benefits: [
      "Increases spiritual and physical energy",
      "Supports courage and self-expression",
      "Protects from subtle negative influences",
      "Helps manifest positive change in life",
    ],
  },
  "rudra-mantra": {
    title: "Rudra Mantra",
    bannerImage: "/puja/mantra/slug/Rudra_Mantra.webp",
    description:
      "Rudra Mantra is dedicated to Lord Shiva in his fierce aspect as Rudra, who destroys suffering and grants fearlessness.",
    mantraTitle: "Rudra Mantra",
    mantraText: "Om Rudraya Namah",
    meaning:
      "We bow to Lord Rudra, who removes deep-rooted sorrow and purifies the soul.",
    benefits: [
      "Helps release anger and restlessness",
      "Protects during challenging transitions",
      "Strengthens inner stability and focus",
      "Supports deep meditation on Shiva",
    ],
  },
  "brihaspati-grah-mantra": {
    title: "Brihaspati Grah Mantra",
    bannerImage: "/puja/mantra/slug/Brihaspati_Mantra.webp",
    description:
      "Brihaspati Mantra is chanted to strengthen the positive influence of Jupiter, the planet of wisdom, expansion, and blessings.",
    mantraTitle: "Brihaspati Mantra",
    mantraText: "Om Brim Brihaspataye Namah",
    meaning:
      "Salutations to Brihaspati, the divine teacher and guide who grants knowledge, fortune, and dharma.",
    benefits: [
      "Improves judgment and decision-making",
      "Supports success in education and teaching",
      "Attracts blessings and good fortune",
      "Balances Jupiter-related astrological issues",
    ],
  },
  "dhanvantari-mantra": {
    title: "Dhanvantari Mantra",
    bannerImage: "/puja/mantra/slug/Dhanvantari_Mantra.webp",
    description:
      "Dhanvantari Mantra is dedicated to Lord Dhanvantari, the divine physician and source of Ayurvedic wisdom.",
    mantraTitle: "Dhanvantari Mantra",
    mantraText: "Om Namo Bhagavate Dhanvantaraye",
    meaning:
      "We bow to Lord Dhanvantari, who grants health, vitality, and freedom from disease.",
    benefits: [
      "Supports healing and recovery",
      "Strengthens immunity and vitality",
      "Blesses doctors and healers in their work",
      "Helps remove fear related to illness",
    ],
  },
  "sita-mantra": {
    title: "Sita Mantra",
    bannerImage: "/puja/mantra/slug/Sita_Mantra.webp",
    description:
      "Sita Mantra invokes the grace of Maa Sita, symbol of purity, devotion, and unwavering strength.",
    mantraTitle: "Sita Mantra",
    mantraText: "Om Sita Ramaya Namah",
    meaning:
      "We bow to Sita and Ram together, calling in their blessings of dharma, love, and endurance.",
    benefits: [
      "Brings patience and emotional strength",
      "Heals pain related to relationships",
      "Inspires righteous living and faith",
      "Creates harmony within family life",
    ],
  },
  "ram-mantra": {
    title: "Ram Mantra",
    bannerImage: "/puja/mantra/slug/Ram_Mantra.webp",
    description:
      "Ram Mantra is one of the simplest yet most powerful mantras, filling life with courage, clarity, and devotion.",
    mantraTitle: "Ram Mantra",
    mantraText: "Shri Ram Jai Ram Jai Jai Ram",
    meaning:
      "Glory to Lord Ram, who upholds dharma and shows the path of righteousness and compassion.",
    benefits: [
      "Steadies the mind in times of stress",
      "Brings courage to follow dharma",
      "Purifies the heart from negativity",
      "Creates a protective aura of devotion",
    ],
  },
  "tulsi-mantra": {
    title: "Tulsi Mantra",
    bannerImage: "/puja/mantra/slug/Tulsi_Mantra.webp",
    description:
      "Tulsi Mantra honors the sacred Tulsi plant, bringing purity, protection, and divine grace into the home.",
    mantraTitle: "Tulsi Mantra",
    mantraText: "Om Tulasi Devyai Namah",
    meaning:
      "We bow to Goddess Tulsi, who purifies the environment and supports devotion to Lord Vishnu.",
    benefits: [
      "Purifies the home and surroundings",
      "Supports health and immunity",
      "Increases devotion and sattvic qualities",
      "Brings peace and harmony in family life",
    ],
  },
  "annapurna-mantra": {
    title: "Annapurna Mantra",
    bannerImage: "/puja/mantra/slug/Annapurna_Mantra.webp",
    description:
      "Annapurna Mantra is chanted to Maa Annapurna, the giver of food, nourishment, and abundance.",
    mantraTitle: "Annapurna Mantra",
    mantraText: "Om Annapurnayai Namah",
    meaning:
      "We bow to Maa Annapurna, who ensures that her devotees are protected from hunger and scarcity.",
    benefits: [
      "Removes fear of lack and scarcity",
      "Blesses the home with steady nourishment",
      "Encourages sharing and generosity",
      "Brings gratitude for everyday blessings",
    ],
  },
  "navagraha-mantras": {
    title: "Navagraha Mantras",
    bannerImage: "/puja/mantra/slug/Navagraha_Mantra.webp",
    description:
      "Navagraha Mantras are chanted to balance the influences of the nine planets and invite harmony into life.",
    mantraTitle: "Navagraha Mantra",
    mantraText: "Om Navagrahaya Namah",
    meaning:
      "We bow to all nine planetary energies, seeking their blessings for balance, prosperity, and protection.",
    benefits: [
      "Helps ease challenging planetary periods",
      "Brings balance to different areas of life",
      "Supports success in important endeavors",
      "Improves overall peace of mind",
    ],
  },
  "zodiac-mantras": {
    title: "Mantras of the 12 Zodiac",
    bannerImage: "/puja/mantra/slug/Zodiac_Mantra.webp",
    description:
      "These mantras are connected with the 12 zodiac signs and are chanted to align personal energy with cosmic rhythms.",
    mantraTitle: "Zodiac Mantra",
    mantraText: "Om Rashi Devatabhyo Namah",
    meaning:
      "We bow to the deities ruling the zodiac signs, inviting support in living in harmony with our true nature.",
    benefits: [
      "Supports self-understanding through astrology",
      "Helps align actions with favorable times",
      "Reduces stress about destiny and fate",
      "Encourages conscious, mindful choices",
    ],
  },
};

// Default mantra data for slugs not in the database
const defaultMantra: MantraDetail = {
  title: "Mantra",
  bannerImage:
    "https://images.unsplash.com/photo-1609941337459-81f1e7dce70e?w=1200&h=600&fit=crop&q=80",
  description:
    "Explore this sacred mantra. Mantras are powerful sound vibrations that connect us with divine energies and bring peace, prosperity, and spiritual growth.",
  mantraTitle: "Sacred Mantra",
  mantraText: "Om Shanti Shanti Shanti",
  meaning:
    "This sacred mantra invokes divine blessings and brings peace to the mind, body, and soul. Regular chanting helps in spiritual growth and inner transformation.",
  benefits: [
    "Brings peace and tranquility",
    "Enhances spiritual connection",
    "Removes negative energies",
    "Improves focus and concentration",
    "Promotes overall well-being",
  ],
};

export default function MantraDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  // Get mantra data or use default
  const mantra = mantraData[slug] || {
    ...defaultMantra,
    title: slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    mantraTitle: `${slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")}`,
  };

  const copyMantra = () => {
    navigator.clipboard.writeText(mantra.mantraText);
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
              href="/mantra"
              className="hover:text-[#FF9800] transition-colors"
            >
              Mantra
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
            <span className="font-semibold text-[#333355]">{mantra.title}</span>
          </nav>
        </div>
      </div>

      {/* Banner Image */}
      <div className="px-4 md:px-6 lg:px-8 pb-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden bg-[#D4A574]">
            <Image
              src={mantra.bannerImage}
              alt={mantra.title}
              fill
              className="object-cover"
              unoptimized
            />
            {/* Title Overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-[#D4A574]/90 to-transparent flex items-center justify-end">
              <h2 className="text-3xl md:text-5xl font-bold text-white pr-8 md:pr-16 text-right">
                {mantra.title.split(" ").slice(0, -1).join(" ")}
                <br />
                {mantra.title.split(" ").slice(-1)}
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
            {mantra.title}
          </h1>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-8">
            {mantra.description}
          </p>

          {/* Mantra Section */}
          <h2 className="text-xl md:text-2xl font-bold text-[#333355] mb-4">
            {mantra.mantraTitle}
          </h2>

          {/* Mantra Box */}
          <div className="relative bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
            <p className="text-lg text-gray-800 italic leading-relaxed pr-8">
              &ldquo;{mantra.mantraText}&rdquo;
            </p>
            {/* Copy Button */}
            <button
              onClick={copyMantra}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              title="Copy mantra"
            >
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
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>

          {/* Meaning Section */}
          <h2 className="text-xl md:text-2xl font-bold text-[#333355] mb-4">
            Meaning:
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8">{mantra.meaning}</p>

          {/* Benefits Section */}
          <h2 className="text-xl md:text-2xl font-bold text-[#333355] mb-4">
            Benefits:
          </h2>

          <ul className="space-y-3">
            {mantra.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#FF9800] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-gray-600 leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}


