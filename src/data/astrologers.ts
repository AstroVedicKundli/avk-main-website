export type Expertise =
  | "Vedic Astrology"
  | "Vastu"
  | "Tarot"
  | "Numerology"
  | "Feng Shui"
  | "KP Astrology"
  | "Prashna"
  | "Reiki Healing"
  | "Yoga & Meditation"
  | "Pranic Healing"
  | "Psychics"
  | "Fortune Teller"
  | "Chakra Healing"
  | "Face Reading"
  | "Love & Marriage Spell"
  | "Past Life Regression";

export const expertiseOptions: Expertise[] = [
  "Vedic Astrology",
  "Vastu",
  "Tarot",
  "Numerology",
  "Feng Shui",
  "KP Astrology",
  "Prashna",
  "Reiki Healing",
  "Yoga & Meditation",
  "Pranic Healing",
  "Psychics",
  "Fortune Teller",
  "Chakra Healing",
  "Face Reading",
  "Love & Marriage Spell",
  "Past Life Regression",
];

export type AstrologerReview = {
  name: string;
  rating: number;
  comment: string;
  date: string;
};

export type Astrologer = {
  slug: string;
  name: string;
  rating: number;
  experience: number;
  pricePerMin: number;
  languages: string[];
  avatar: string;
  expertise: Expertise;
  bio: string;
  education: string;
  reviews: AstrologerReview[];
};

export const astrologers: Astrologer[] = [
  {
    slug: "pandit-rajesh-sharma",
    name: "Pandit Rajesh Sharma",
    rating: 4.9,
    experience: 18,
    pricePerMin: 35,
    languages: ["Hindi", "English"],
    avatar: "/astrologers/astrologer1.jpg",
    expertise: "Vedic Astrology",
    bio: "Specialises in traditional Vedic astrology, marriage matching and practical remedies that are easy to follow in daily life.",
    education: "Jyotish Acharya, traditional gurukul training in Varanasi",
    reviews: [
      {
        name: "Priya K.",
        rating: 5,
        comment: "Very clear guidance for my marriage decisions, felt calm after the session.",
        date: "Nov 2025",
      },
      {
        name: "Rahul S.",
        rating: 4.8,
        comment: "Accurate timing predictions for my job change, remedies were simple.",
        date: "Oct 2025",
      },
    ],
  },
  {
    slug: "astrologer-neha-verma",
    name: "Astrologer Neha Verma",
    rating: 4.8,
    experience: 12,
    pricePerMin: 32,
    languages: ["Hindi", "English", "Punjabi"],
    avatar: "/astrologers/astrologer2.jpg",
    expertise: "Love & Marriage Spell",
    bio: "Helps couples with relationship healing, understanding compatibility and resolving long‑pending emotional blocks.",
    education: "Certified relationship counsellor, advanced training in mantras & rituals",
    reviews: [
      {
        name: "Simran D.",
        rating: 4.9,
        comment: "Got great clarity on my relationship, she listens patiently.",
        date: "Dec 2025",
      },
      {
        name: "Ankit & Ria",
        rating: 4.8,
        comment: "Her guidance helped our families align for marriage.",
        date: "Sep 2025",
      },
    ],
  },
  {
    slug: "guru-anand-joshi",
    name: "Guru Anand Joshi",
    rating: 4.7,
    experience: 20,
    pricePerMin: 40,
    languages: ["Hindi", "Marathi", "English"],
    avatar: "/astrologers/astrologer3.jpg",
    expertise: "KP Astrology",
    bio: "Known for accurate timing using KP astrology for career, property and court matters.",
    education: "KP astrology certification, 20+ years of research and practice",
    reviews: [
      {
        name: "Vikram P.",
        rating: 4.7,
        comment: "Helped me choose the right time to start my business.",
        date: "Aug 2025",
      },
      {
        name: "Megha R.",
        rating: 4.8,
        comment: "Very logical approach, explains every combination calmly.",
        date: "Jul 2025",
      },
    ],
  },
  {
    slug: "astro-pooja-mishra",
    name: "Astro Pooja Mishra",
    rating: 4.9,
    experience: 9,
    pricePerMin: 30,
    languages: ["Hindi", "Gujarati", "English"],
    avatar: "/astrologers/astrologer4.jpg",
    expertise: "Tarot",
    bio: "Intuitive tarot reader focusing on love, self‑growth and breaking repeating patterns.",
    education: "Certified tarot reader, courses in psychology & mindfulness",
    reviews: [
      {
        name: "Isha M.",
        rating: 5,
        comment: "Her tarot reading matched exactly what I was going through.",
        date: "Nov 2025",
      },
      {
        name: "Devanshi",
        rating: 4.8,
        comment: "Very warm energy, gave me hope during a tough phase.",
        date: "Sep 2025",
      },
    ],
  },
  {
    slug: "pandit-vivek-tiwari",
    name: "Pandit Vivek Tiwari",
    rating: 4.8,
    experience: 15,
    pricePerMin: 36,
    languages: ["Hindi", "English", "Bhojpuri"],
    avatar: "/astrologers/astrologer5.jpg",
    expertise: "Numerology",
    bio: "Expert in name corrections, business numerology and selecting lucky dates for important events.",
    education: "Advanced numerology diploma, vastu and muhurta training",
    reviews: [
      {
        name: "Rohit K.",
        rating: 4.8,
        comment: "Name correction actually improved my confidence at work.",
        date: "Oct 2025",
      },
      {
        name: "Startup Founder",
        rating: 4.7,
        comment: "Took his help for company name and launch date, very satisfied.",
        date: "Aug 2025",
      },
    ],
  },
  {
    slug: "astrologer-kavya-rao",
    name: "Astrologer Kavya Rao",
    rating: 4.7,
    experience: 11,
    pricePerMin: 28,
    languages: ["Hindi", "Telugu", "English"],
    avatar: "/astrologers/astrologer6.jpg",
    expertise: "Pranic Healing",
    bio: "Combines astrology with pranic and energy healing for emotional balance and inner peace.",
    education: "Pranic healing certifications, meditation and yoga training",
    reviews: [
      {
        name: "Sneha G.",
        rating: 4.9,
        comment: "Felt very light after the healing session, sleep improved.",
        date: "Dec 2025",
      },
      {
        name: "Arjun",
        rating: 4.7,
        comment: "Good for stress relief and grounding, highly recommend.",
        date: "Sep 2025",
      },
    ],
  },
  {
    slug: "dr-manish-trivedi",
    name: "Dr. Manish Trivedi",
    rating: 4.9,
    experience: 22,
    pricePerMin: 45,
    languages: ["Hindi", "English", "Gujarati"],
    avatar: "/astrologers/astrologer7.jpg",
    expertise: "Vastu",
    bio: "Senior vastu and astrology expert helping with home, office and factory layout corrections.",
    education: "PhD in Vastu Shastra, traditional Jyotish studies",
    reviews: [
      {
        name: "House Owner",
        rating: 4.9,
        comment: "After his vastu changes, our home environment feels more peaceful.",
        date: "Nov 2025",
      },
      {
        name: "Business Client",
        rating: 4.8,
        comment: "Office consultation gave good results in team harmony.",
        date: "Jul 2025",
      },
    ],
  },
  {
    slug: "astro-ritu-jain",
    name: "Astro Ritu Jain",
    rating: 4.8,
    experience: 10,
    pricePerMin: 29,
    languages: ["Hindi", "Rajasthani", "English"],
    avatar: "/astrologers/astrologer8.jpg",
    expertise: "Past Life Regression",
    bio: "Works with past‑life indications in charts to understand karmic patterns and spiritual lessons.",
    education: "Training in regression techniques, spiritual counselling",
    reviews: [
      {
        name: "Karuna",
        rating: 4.8,
        comment: "Session gave me a new understanding of my fears.",
        date: "Oct 2025",
      },
      {
        name: "Aditya",
        rating: 4.7,
        comment: "Very insightful reading on karmic connections in relationships.",
        date: "Aug 2025",
      },
    ],
  },
  {
    slug: "pandit-sandeep-kulkarni",
    name: "Pandit Sandeep Kulkarni",
    rating: 4.6,
    experience: 14,
    pricePerMin: 27,
    languages: ["Hindi", "Kannada", "English"],
    avatar: "/astrologers/astrologer9.jpg",
    expertise: "Reiki Healing",
    bio: "Helps with emotional healing, aura cleansing and gentle spiritual support using Reiki.",
    education: "Reiki Master level, meditation and mantra training",
    reviews: [
      {
        name: "Namrata",
        rating: 4.6,
        comment: "Felt very relaxed after the session, anxiety reduced.",
        date: "Sep 2025",
      },
      {
        name: "Karthik",
        rating: 4.7,
        comment: "Good for emotional balance, will consult again.",
        date: "Jun 2025",
      },
    ],
  },
  {
    slug: "astrologer-meera-iyer",
    name: "Astrologer Meera Iyer",
    rating: 4.8,
    experience: 13,
    pricePerMin: 33,
    languages: ["Hindi", "Tamil", "English"],
    avatar: "/astrologers/astrologer10.jpg",
    expertise: "Yoga & Meditation",
    bio: "Guides clients with a blend of astrology, yoga and meditation for holistic wellbeing.",
    education: "Yoga teacher training, meditation and Jyotish courses",
    reviews: [
      {
        name: "Sonia",
        rating: 4.8,
        comment: "Her routines are simple and fit well into daily life.",
        date: "Dec 2025",
      },
      {
        name: "Rohan",
        rating: 4.7,
        comment: "Good guidance on both chart and lifestyle changes.",
        date: "Sep 2025",
      },
    ],
  },
  {
    slug: "guru-harish-patel",
    name: "Guru Harish Patel",
    rating: 4.7,
    experience: 17,
    pricePerMin: 31,
    languages: ["Hindi", "Gujarati", "English"],
    avatar: "/astrologers/astrologer11.jpg",
    expertise: "Chakra Healing",
    bio: "Focuses on chakra balancing, spiritual growth and removing energetic blocks.",
    education: "Chakra healing and energy‑work certifications",
    reviews: [
      {
        name: "Deepa",
        rating: 4.7,
        comment: "Felt more centred and grounded after a few sessions.",
        date: "Oct 2025",
      },
      {
        name: "Sameer",
        rating: 4.8,
        comment: "Explained spiritual concepts in a very simple way.",
        date: "Jul 2025",
      },
    ],
  },
  {
    slug: "astro-sneha-kulkarni",
    name: "Astro Sneha Kulkarni",
    rating: 4.9,
    experience: 8,
    pricePerMin: 26,
    languages: ["Hindi", "Marathi", "English"],
    avatar: "/astrologers/astrologer12.jpg",
    expertise: "Face Reading",
    bio: "Specialises in face reading and horoscope analysis for personality and relationship guidance.",
    education: "Face reading courses, traditional Jyotish study",
    reviews: [
      {
        name: "Manasi",
        rating: 4.9,
        comment: "She read my nature so accurately just from my face.",
        date: "Nov 2025",
      },
      {
        name: "Tejas",
        rating: 4.8,
        comment: "Very helpful for understanding my strengths and weaknesses.",
        date: "Aug 2025",
      },
    ],
  },
];
