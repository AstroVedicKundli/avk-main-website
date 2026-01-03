import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import PujaDetailsClient from "@/components/puja/PujaDetailsClient";

interface PujaData {
  name: string;
  fullName?: string;
  description: string;
  benefits: string[];
  date: string;
  closingDate: string;
  originalPrice: number;
  discountedPrice: number;
  aboutPuja?: {
    title: string;
    content: string[];
  };
  detailedBenefits?: string[];
  process?: {
    title: string;
    steps: { heading: string; description: string }[];
  };
  whyUs?: {
    title: string;
    reasons: { heading: string; description: string }[];
  };
}

// Puja data - matches the data from UpcomingPujas component
const pujaData: { [key: string]: PujaData } = {
  "kaal-bhairav-puja": {
    name: "Kaal Bhairav Puja",
    fullName: "Kaal Bhairav Online Puja",
    description:
      "Perform Kaal Bhairav Puja online – Protection from Negativity, Evil Forces & Obstacles",
    benefits: [
      "Online Puja with complete rituals and mantra chanting",
      "Prashad and video will be delivered to your home",
    ],
    date: "10th January 2026",
    closingDate: "2026-01-10T00:00:00",
    originalPrice: 2100,
    discountedPrice: 1100,
    aboutPuja: {
      title: "What Is Kaal Bhairav Puja?",
      content: [
        "Kaal Bhairav Puja is a Hindu ritual dedicated to Lord Kaal Bhairav, the fierce and protective form of Lord Shiva. This puja is performed to remove obstacles, defeat enemies, gain protection from negative forces, and resolve financial troubles. It holds special importance on Kaal Bhairav Ashtami (also known as Kaal Bhairav Jayanti) and is also considered highly effective when done on auspicious days like Sunday, Tuesday or Saturday.",
        "This Kaal Bhairav Ashtami puja is performed before starting a new journey or undertaking an important work to ensure safety and good fortune. It is believed that the worship of Lord Bhairav removes planetary doshas and brings peace and stability.",
        "Now you don't have to visit temples personally to book your puja. You can check the Kaal Bhairav Puja cost online and choose a suitable package as per your budget and convenience.",
      ],
    },
    detailedBenefits: [
      "Removal of obstacles and enemies.",
      "Protection from negative energies and evil eyes.",
      "Financial prosperity and success.",
      "Fosters good health and longevity.",
      "Pacification of the planets Rahu and Ketu.",
      "It is also considered auspicious to perform this pooja before beginning any new ventures.",
    ],
    process: {
      title: "Follow These Easy Steps To Book Your Kaal Bhairav Online E-Puja:",
      steps: [
        {
          heading: "Select Your Package:",
          description: "Choose from the exclusive available package.",
        },
        {
          heading: "Fill in Your Details:",
          description: "Provide your name, gotra, place, and aspirations.",
        },
        {
          heading: "Complete Payment:",
          description: "Secure your booking via online payment.",
        },
        {
          heading: "Participate in Group Puja:",
          description:
            "Join the online puja conducted by Astro Arun Pandit Verified Pandits, under Astro Arun Pandit's expert guidance.",
        },
        {
          heading: "Receive Puja Video:",
          description:
            "Get a recorded video of the puja, along with prashad delivery and products delivered right to your doorstep.",
        },
      ],
    },
    whyUs: {
      title: "Why Choose Astro Arun Pandit For Kaal Bahirav E-Puja?",
      reasons: [
        {
          heading: "50+ Years of Legacy:",
          description:
            "Over 50+ years of expertise in Vedic astrology and authentic puja rituals.",
        },
        {
          heading: "Certified Priests:",
          description:
            "All rituals are performed by experienced and verified Brahmin priests under the expert guidance of Astro Arun Pandit.",
        },
        {
          heading: "Personalized Experience:",
          description:
            "The puja is tailored to your specific needs, with your name, gotra, and intentions included.",
        },
        {
          heading: "Global Participation:",
          description:
            "Participate from anywhere in the world, with prashad and AstroKit delivered to your doorstep.",
        },
        {
          heading: "Transparency & Trust:",
          description:
            "Receive a full video recording of the puja, showing every important moment and ensuring transparency.",
        },
      ],
    },
  },
  "ekadashi-puja": {
    name: "Ekadashi Puja",
    fullName: "Ekadashi Online Puja",
    description:
      "Perform Ekadashi Puja online – For freedom from past sins and healing of chronic diseases",
    benefits: [
      "Online Puja with complete rituals and mantra chanting",
      "Prashad and video will be delivered to your home",
    ],
    date: "10th January 2026",
    closingDate: "2026-01-10T00:00:00",
    originalPrice: 2100,
    discountedPrice: 1100,
    aboutPuja: {
      title: "What Is Ekadashi Puja?",
      content: [
        "Ekadashi Puja is a sacred Hindu ritual observed on the eleventh day of each lunar fortnight. This auspicious day is dedicated to Lord Vishnu and is believed to cleanse sins, promote spiritual growth, and bring divine blessings. Observing Ekadashi with devotion helps in achieving salvation and freedom from past karmic debts.",
      ],
    },
    detailedBenefits: [
      "Freedom from past sins and karmic debts",
      "Healing of chronic diseases",
      "Spiritual purification and growth",
      "Divine blessings from Lord Vishnu",
      "Mental peace and clarity",
      "Protection from negative influences",
    ],
    process: {
      title: "Follow These Easy Steps To Book Your Ekadashi Online E-Puja:",
      steps: [
        {
          heading: "Select Your Package:",
          description: "Choose from the exclusive available package.",
        },
        {
          heading: "Fill in Your Details:",
          description: "Provide your name, gotra, place, and aspirations.",
        },
        {
          heading: "Complete Payment:",
          description: "Secure your booking via online payment.",
        },
        {
          heading: "Participate in Group Puja:",
          description:
            "Join the online puja conducted by Astro Arun Pandit Verified Pandits, under Astro Arun Pandit's expert guidance.",
        },
        {
          heading: "Receive Puja Video:",
          description:
            "Get a recorded video of the puja, along with prashad delivery and products delivered right to your doorstep.",
        },
      ],
    },
    whyUs: {
      title: "Why Choose Astro Arun Pandit For Ekadashi E-Puja?",
      reasons: [
        {
          heading: "50+ Years of Legacy:",
          description:
            "Over 50+ years of expertise in Vedic astrology and authentic puja rituals.",
        },
        {
          heading: "Certified Priests:",
          description:
            "All rituals are performed by experienced and verified Brahmin priests under the expert guidance of Astro Arun Pandit.",
        },
        {
          heading: "Personalized Experience:",
          description:
            "The puja is tailored to your specific needs, with your name, gotra, and intentions included.",
        },
        {
          heading: "Global Participation:",
          description:
            "Participate from anywhere in the world, with prashad and AstroKit delivered to your doorstep.",
        },
        {
          heading: "Transparency & Trust:",
          description:
            "Receive a full video recording of the puja, showing every important moment and ensuring transparency.",
        },
      ],
    },
  },
  "sarva-karya-siddhi-puja": {
    name: "Sarva Karya Siddhi Puja",
    fullName: "Sarva Karya Siddhi Online Puja",
    description:
      "Perform Sarva Karya Siddhi Puja online – For success in life, career, and spirituality. Remove blockages and delays",
    benefits: [
      "Online Puja with complete rituals and mantra chanting",
      "Prashad and video will be delivered to your home",
    ],
    date: "10th January 2026",
    closingDate: "2026-01-10T00:00:00",
    originalPrice: 2100,
    discountedPrice: 1100,
    aboutPuja: {
      title: "What Is Sarva Karya Siddhi Puja?",
      content: [
        "Sarva Karya Siddhi Puja is a powerful Hindu ritual performed to ensure success in all endeavors. This puja removes obstacles, delays, and blockages that hinder progress in personal, professional, and spiritual life. It invokes the blessings of divine forces to grant fulfillment of desires and achievement of goals.",
      ],
    },
    detailedBenefits: [
      "Success in all life endeavors",
      "Removal of obstacles and delays",
      "Career advancement and growth",
      "Spiritual progress and enlightenment",
      "Financial prosperity",
      "Achievement of long-pending goals",
    ],
    process: {
      title:
        "Follow These Easy Steps To Book Your Sarva Karya Siddhi Online E-Puja:",
      steps: [
        {
          heading: "Select Your Package:",
          description: "Choose from the exclusive available package.",
        },
        {
          heading: "Fill in Your Details:",
          description: "Provide your name, gotra, place, and aspirations.",
        },
        {
          heading: "Complete Payment:",
          description: "Secure your booking via online payment.",
        },
        {
          heading: "Participate in Group Puja:",
          description:
            "Join the online puja conducted by Astro Arun Pandit Verified Pandits, under Astro Arun Pandit's expert guidance.",
        },
        {
          heading: "Receive Puja Video:",
          description:
            "Get a recorded video of the puja, along with prashad delivery and products delivered right to your doorstep.",
        },
      ],
    },
    whyUs: {
      title: "Why Choose Astro Arun Pandit For Sarva Karya Siddhi E-Puja?",
      reasons: [
        {
          heading: "50+ Years of Legacy:",
          description:
            "Over 50+ years of expertise in Vedic astrology and authentic puja rituals.",
        },
        {
          heading: "Certified Priests:",
          description:
            "All rituals are performed by experienced and verified Brahmin priests under the expert guidance of Astro Arun Pandit.",
        },
        {
          heading: "Personalized Experience:",
          description:
            "The puja is tailored to your specific needs, with your name, gotra, and intentions included.",
        },
        {
          heading: "Global Participation:",
          description:
            "Participate from anywhere in the world, with prashad and AstroKit delivered to your doorstep.",
        },
        {
          heading: "Transparency & Trust:",
          description:
            "Receive a full video recording of the puja, showing every important moment and ensuring transparency.",
        },
      ],
    },
  },
};

interface PujaDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PujaDetailPage({ params }: PujaDetailPageProps) {
  const { slug } = await params;
  const puja = pujaData[slug];

  // If puja not found, show 404
  if (!puja) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Puja", href: "/puja" },
    { label: "Upcoming Pujas", href: "/puja#upcoming" },
    { label: puja.name },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Puja Details - Client Component */}
        <PujaDetailsClient puja={puja} slug={slug} />
      </div>
    </div>
  );
}

// Generate static params for known pujas
export function generateStaticParams() {
  return Object.keys(pujaData).map((slug) => ({
    slug,
  }));
}
