"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

const zodiacData: Record<
  string,
  { name: string; dates: string; icon: React.ReactElement }
> = {
  aries: {
    name: "Aries",
    dates: "Mar 21 - Apr 19",
    icon: (
      <svg
        className="w-16 h-16 text-[#C8956D]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M6 10c0-3.5 1.5-7 3-9 1.5 2 3 5.5 3 9s-1.5 7-3 9c-1.5-2-3-5.5-3-9zm9 0c0-3.5 1.5-7 3-9 1.5 2 3 5.5 3 9s-1.5 7-3 9c-1.5-2-3-5.5-3-9z" />
      </svg>
    ),
  },
  taurus: {
    name: "Taurus",
    dates: "Apr 20 - May 20",
    icon: (
      <svg
        className="w-16 h-16 text-[#C8956D]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 4c-4 0-7 2.5-7 6 0 2 1 4 2.5 5-1.5 1-2.5 3-2.5 5 0 3 2.5 5 7 5s7-2 7-5c0-2-1-4-2.5-5 1.5-1 2.5-3 2.5-5 0-3.5-3-6-7-6zm0 2c2.5 0 4 1.5 4 3.5s-1.5 3.5-4 3.5-4-1.5-4-3.5S9.5 6 12 6z" />
      </svg>
    ),
  },
  gemini: {
    name: "Gemini",
    dates: "May 21 - Jun 20",
    icon: (
      <svg
        className="w-16 h-16 text-[#C8956D]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M7 2h3v20H7zm7 0h3v20h-3zM6 6h12v2H6zm0 10h12v2H6z" />
      </svg>
    ),
  },
  cancer: {
    name: "Cancer",
    dates: "Jun 21 - Jul 22",
    icon: (
      <svg
        className="w-16 h-16 text-[#C8956D]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2c-2.5 0-4.5 2-4.5 4.5 0 1.5.7 2.8 1.8 3.7-2.6.5-4.6 2.7-4.6 5.3 0 3 2.5 5.5 5.5 5.5s5.5-2.5 5.5-5.5c0-1.5-.6-2.9-1.6-3.9 2.4-.6 4.2-2.7 4.2-5.1C18.3 4 16.3 2 14 2c-1 0-1.9.3-2.7.9C10.6 2.3 9.8 2 9 2c-2.5 0-4.5 2-4.5 4.5 0 2.4 1.8 4.4 4.1 4.9-.6.8-1 1.8-1 2.9 0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5c0-1.1-.4-2.1-1-2.9 2.3-.5 4.1-2.5 4.1-4.9C19.7 4 17.7 2 15.2 2z" />
      </svg>
    ),
  },
  leo: {
    name: "Leo",
    dates: "Jul 23 - Aug 22",
    icon: (
      <svg
        className="w-16 h-16 text-[#C8956D]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2c-2 0-3.5 1-4 2.5-.5-1-1.5-1.5-2.5-1.5-1.7 0-3 1.3-3 3 0 1 .5 2 1.3 2.5C2.7 9 2 10.4 2 12c0 3.5 2.5 6.5 6 7.5V22h8v-2.5c3.5-1 6-4 6-7.5 0-1.6-.7-3-1.8-3.5.8-.5 1.3-1.5 1.3-2.5 0-1.7-1.3-3-3-3-1 0-2 .5-2.5 1.5-.5-1.5-2-2.5-4-2.5zm0 6c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4z" />
      </svg>
    ),
  },
  virgo: {
    name: "Virgo",
    dates: "Aug 23 - Sep 22",
    icon: (
      <svg
        className="w-16 h-16 text-[#C8956D]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M6 2v12c0 2.2 1.8 4 4 4 1.5 0 2.8-.8 3.5-2 .7 1.2 2 2 3.5 2 2.2 0 4-1.8 4-4V2h-2v12c0 1.1-.9 2-2 2s-2-.9-2-2V2h-2v12c0 1.1-.9 2-2 2s-2-.9-2-2V2H6zm11 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
      </svg>
    ),
  },
  libra: {
    name: "Libra",
    dates: "Sep 23 - Oct 22",
    icon: (
      <svg
        className="w-16 h-16 text-[#C8956D]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2C9.8 2 8 3.8 8 6c0 1.5.8 2.8 2 3.5V11H4v2h6v2H3v2h18v-2h-7v-2h6v-2h-6V9.5c1.2-.7 2-2 2-3.5 0-2.2-1.8-4-4-4zm0 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
      </svg>
    ),
  },
  scorpio: {
    name: "Scorpio",
    dates: "Oct 23 - Nov 21",
    icon: (
      <svg
        className="w-16 h-16 text-[#C8956D]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M5 2v14c0 1.1.9 2 2 2s2-.9 2-2V2H7v14c0 .1-.1 0 0 0V2H5zm4 0v14c0 1.1.9 2 2 2s2-.9 2-2V2h-2v14c0 .1-.1 0 0 0V2H9zm4 0v14c0 1.1.9 2 2 2 .7 0 1.4-.4 1.7-1l3.6 3.6 1.4-1.4-3.6-3.6c.6-.3 1-.9 1-1.6V2h-2v14c0 .1-.1 0 0 0V2h-2z" />
      </svg>
    ),
  },
  sagittarius: {
    name: "Sagittarius",
    dates: "Nov 22 - Dec 21",
    icon: (
      <svg
        className="w-16 h-16 text-[#C8956D]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M11 3v2.1c-1.1.3-2.2.8-3.1 1.6L6.5 5.3 5.1 6.7l1.4 1.4c-.8.9-1.3 2-1.6 3.1H3v2h1.9c.3 1.1.8 2.2 1.6 3.1l-1.4 1.4 1.4 1.4 1.4-1.4c.9.8 2 1.3 3.1 1.6V21h2v-1.9c1.1-.3 2.2-.8 3.1-1.6l1.4 1.4 1.4-1.4-1.4-1.4c.8-.9 1.3-2 1.6-3.1H21v-2h-1.9c-.3-1.1-.8-2.2-1.6-3.1l1.4-1.4-1.4-1.4-1.4 1.4c-.9-.8-2-1.3-3.1-1.6V3h-2zm1 4c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z" />
      </svg>
    ),
  },
  capricorn: {
    name: "Capricorn",
    dates: "Dec 22 - Jan 19",
    icon: (
      <svg
        className="w-16 h-16 text-[#C8956D]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M9 2v10c0 1.7-1.3 3-3 3s-3-1.3-3-3c0-1.1.9-2 2-2s2 .9 2 2V2h2zm8 0c-2.8 0-5 2.2-5 5v8c0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4c-1.1 0-2 .5-2.6 1.2V7c0-1.7 1.3-3 3-3V2zm0 12c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
      </svg>
    ),
  },
  aquarius: {
    name: "Aquarius",
    dates: "Jan 20 - Feb 18",
    icon: (
      <svg
        className="w-16 h-16 text-[#C8956D]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M2 8c.5 0 1 .2 1.4.6.8.8 2 .8 2.8 0 .8-.8 2-.8 2.8 0 .8.8 2 .8 2.8 0 .8-.8 2-.8 2.8 0 .8.8 2 .8 2.8 0 .8-.8 2-.8 2.8 0 .4.4.9.6 1.4.6V11c-.5 0-1-.2-1.4-.6-.8-.8-2-.8-2.8 0-.8.8-2 .8-2.8 0-.8-.8-2-.8-2.8 0-.8.8-2 .8-2.8 0-.8-.8-2-.8-2.8 0-.8.8-2 .8-2.8 0C3 10.2 2.5 10 2 10V8zm0 7c.5 0 1 .2 1.4.6.8.8 2 .8 2.8 0 .8-.8 2-.8 2.8 0 .8.8 2 .8 2.8 0 .8-.8 2-.8 2.8 0 .8.8 2 .8 2.8 0 .8-.8 2-.8 2.8 0 .4.4.9.6 1.4.6V18c-.5 0-1-.2-1.4-.6-.8-.8-2-.8-2.8 0-.8.8-2 .8-2.8 0-.8-.8-2-.8-2.8 0-.8.8-2 .8-2.8 0-.8-.8-2-.8-2.8 0-.8.8-2 .8-2.8 0C3 17.2 2.5 17 2 17v-2z" />
      </svg>
    ),
  },
  pisces: {
    name: "Pisces",
    dates: "Feb 19 - Mar 20",
    icon: (
      <svg
        className="w-16 h-16 text-[#C8956D]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M6.5 2C4 2 2 4 2 6.5v11C2 20 4 22 6.5 22S11 20 11 17.5v-11C11 4 9 2 6.5 2zm0 2C8 4 9 5 9 6.5v11c0 1.5-1 2.5-2.5 2.5S4 19 4 17.5v-11C4 5 5 4 6.5 4zM17.5 2C15 2 13 4 13 6.5v11c0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5v-11C22 4 20 2 17.5 2zm0 2c1.5 0 2.5 1 2.5 2.5v11c0 1.5-1 2.5-2.5 2.5S15 19 15 17.5v-11C15 5 16 4 17.5 4zM2 11h20v2H2z" />
      </svg>
    ),
  },
};

// Dummy horoscope data
const horoscopeContent: Record<string, { date?: string; content: string }> = {
  yesterday: {
    date: "Nov 20, 2025",
    content:
      "Yesterday brought opportunities for reflection and introspection. You may have encountered some challenges that tested your patience, but these experiences have prepared you for better things ahead. Any obstacles faced were meant to strengthen your resolve and build character.",
  },
  today: {
    date: "Nov 21, 2025",
    content:
      "A specific task or goal could have you making a lot of calls, writing a lot of letters, or doing a lot of running around in the car. You're feeling especially determined. You'll succeed at this or anything else you try today. Conversations will be productive and could spur you on to new projects.",
  },
  tomorrow: {
    date: "Nov 22, 2025",
    content:
      "Tomorrow promises new beginnings and fresh perspectives. Opportunities that seemed distant may suddenly come within reach. Your communication skills will be at their peak, making it an ideal day for important conversations and negotiations. Stay alert for unexpected chances to advance your goals.",
  },
  weekly: {
    content:
      "This week brings a dynamic mix of challenges and opportunities. The first half focuses on professional growth and networking, while the latter part emphasizes personal relationships and self-care. Financial matters require attention mid-week. Stay flexible and adaptable as circumstances may change quickly. Your natural abilities will help you navigate any obstacles with grace.",
  },
  monthly: {
    content:
      "This month marks a significant period of transformation across all areas of life. Career prospects look exceptionally promising with potential advancement or new opportunities emerging mid-month. Financial stability strengthens through wise decision-making and strategic planning. Relationships deepen meaningfully, and singles may encounter someone special. Health and wellness deserve focus, particularly in the third week. Your creativity and communication abilities shine brilliantly throughout, opening exciting new doors.",
  },
  "2026": {
    content:
      "The year 2026 promises to be transformative and rewarding. Major life changes are on the horizon, bringing both challenges and incredible opportunities for growth. Career advancement reaches new heights, while personal relationships evolve into deeper, more meaningful connections. Financial prosperity increases through smart investments and strategic decisions. Focus on maintaining balance between ambition and self-care. Your intuition will be your greatest asset, guiding you through important decisions throughout the year.",
  },
};

// Category-specific horoscope content
const categoryContent: Record<
  string,
  {
    icon: React.ReactElement;
    title: string;
    content: string;
    rating: string;
    color: string;
  }
> = {
  love: {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clipRule="evenodd"
        />
      </svg>
    ),
    title: "Love & Relationships",
    content:
      "Your romantic life is blooming beautifully today. If you're in a relationship, expect deeper emotional connections and meaningful conversations with your partner. Single individuals may encounter someone intriguing in an unexpected setting. Venus influences suggest that expressing your feelings openly will strengthen bonds. Small gestures of affection will be particularly well-received. This is an excellent time for planning romantic activities or having important relationship discussions.",
    rating: "Excellent",
    color: "from-pink-500 to-rose-500",
  },
  career: {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
      </svg>
    ),
    title: "Career & Professional",
    content:
      "Professional opportunities are abundant today. Your hard work and dedication are finally being recognized by superiors. This is an ideal time to pitch new ideas, request promotions, or start ambitious projects. Collaborations with colleagues will be particularly fruitful. Mercury's position enhances your communication skills, making presentations and negotiations highly successful. Stay confident and assertive in your professional dealings. A mentor or authority figure may offer valuable guidance.",
    rating: "Very Good",
    color: "from-blue-500 to-indigo-500",
  },
  money: {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
          clipRule="evenodd"
        />
      </svg>
    ),
    title: "Money & Finance",
    content:
      "Financial prospects look favorable today. Jupiter's influence suggests potential for unexpected income or profitable investments. However, avoid impulsive spending decisions. This is an excellent time to review your budget, plan savings, or consult with financial advisors. Business ventures initiated now have strong potential for success. Be cautious with lending money to others. Focus on building long-term financial security rather than quick gains. A past investment may finally show promising returns.",
    rating: "Good",
    color: "from-green-500 to-emerald-500",
  },
  health: {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z"
          clipRule="evenodd"
        />
      </svg>
    ),
    title: "Health & Wellness",
    content:
      "Your energy levels are high, making this an ideal day for physical activities and exercise. Focus on maintaining balance in your diet and getting adequate rest. Mental health is equally important - consider meditation or yoga to manage stress. The planetary alignment suggests paying attention to digestive health. Stay hydrated throughout the day. If you've been postponing medical check-ups, now is a good time to schedule them. Listen to your body's signals and don't push yourself too hard. Overall vitality is strong.",
    rating: "Very Good",
    color: "from-orange-500 to-amber-500",
  },
};

export default function ZodiacSignPage({
  params,
}: {
  params: Promise<{ sign: string }>;
}) {
  const [activeTab, setActiveTab] = useState<
    "yesterday" | "today" | "tomorrow" | "weekly" | "monthly" | "2026"
  >("today");
  const [activeCategory, setActiveCategory] = useState<
    "daily" | "love" | "career" | "money" | "health"
  >("daily");

  const { sign } = use(params);
  const signData = zodiacData[sign.toLowerCase()];

  if (!signData) {
    notFound();
  }

  const tabs = [
    { id: "yesterday", label: "YESTERDAY" },
    { id: "today", label: "TODAY" },
    { id: "tomorrow", label: "TOMORROW" },
    { id: "weekly", label: "WEEKLY" },
    { id: "monthly", label: "MONTHLY" },
    { id: "2026", label: "2026" },
  ] as const;

  const categories = [
    { id: "daily", label: "DAILY HOROSCOPE", icon: "☀️" },
    { id: "love", label: "LOVE", icon: "❤️" },
    { id: "career", label: "CAREER", icon: "💼" },
    { id: "money", label: "MONEY", icon: "💰" },
    { id: "health", label: "HEALTH", icon: "🏃" },
  ] as const;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f3f7] to-[#ebe9ed] pb-16">
      {/* Dark Header Banner */}
      <div className="bg-gradient-to-b from-[#3a2f52] via-[#4a3565] to-[#2d2440] pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Starry Background Effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-1 h-1 bg-orange-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-pink-400 rounded-full animate-pulse"></div>
          <div className="absolute top-60 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute top-24 right-1/2 w-1 h-1 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-8 left-20 w-1 h-1 bg-red-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-16 right-40 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center mb-6">
            <p className="text-sm text-white/60 uppercase tracking-wider mb-4">
              DAILY
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white">
                {signData.name} Horoscope
              </h1>
              {/* Change Sign Dropdown */}
              <div className="flex justify-center">
                <select
                  className="bg-transparent border border-white/30 text-white px-6 py-3 rounded-lg text-sm cursor-pointer hover:border-white/50 transition-colors appearance-none pr-10 bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%227%22%20viewBox%3D%220%200%2012%207%22%3E%3cpath%20fill%3D%22%23ffffff%22%20d%3D%22M1%200l5%205%205-5z%22%2F%3E%3c%2Fsvg%3E')] bg-no-repeat bg-right bg-origin-content"
                  value={sign}
                  onChange={(e) =>
                    (window.location.href = `/horoscope/${e.target.value}`)
                  }
                >
                  <option value="" disabled className="bg-[#3a2f52] text-white">
                    Change sign
                  </option>
                  {Object.keys(zodiacData).map((zodiacSign) => (
                    <option
                      key={zodiacSign}
                      value={zodiacSign}
                      className="bg-[#3a2f52] text-white"
                    >
                      {zodiacData[zodiacSign].name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        {/* Tabs Navigation for Time-based Horoscope */}
        <div className="bg-white/80 backdrop-blur-sm rounded-t-2xl border-b border-gray-200 shadow-sm">
          <div className="flex flex-wrap justify-center gap-2 p-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-sm font-semibold transition-all rounded-lg ${
                  activeTab === tab.id
                    ? "bg-[#333355] text-white shadow-lg"
                    : "text-gray-600 hover:text-[#333355] hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
            {/* Print Icon */}
            <button className="px-4 py-3 text-gray-600 hover:text-[#333355] transition-colors">
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
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-b-2xl shadow-2xl p-8 md:p-12">
          {/* Date Display for daily horoscopes */}
          {(activeTab === "yesterday" ||
            activeTab === "today" ||
            activeTab === "tomorrow") &&
            horoscopeContent[activeTab].date && (
              <p className="text-sm text-[#333355]/70 mb-6 font-semibold">
                {horoscopeContent[activeTab].date}
              </p>
            )}

          {/* Horoscope Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-[#333355]/80 leading-relaxed text-base md:text-lg">
              {horoscopeContent[activeTab].content}
            </p>
          </div>

          {/* Category Tabs - Below the divider */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-[#333355] text-center mb-6">
              Explore More Categories
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {categories
                .filter((cat) => cat.id !== "daily")
                .map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-6 py-3 text-xs font-bold uppercase tracking-wide transition-all rounded-lg flex items-center gap-2 ${
                      activeCategory === category.id
                        ? "bg-gradient-to-r " +
                          (category.id === "love"
                            ? "from-pink-500 to-rose-500"
                            : category.id === "career"
                            ? "from-blue-500 to-indigo-500"
                            : category.id === "money"
                            ? "from-green-500 to-emerald-500"
                            : "from-orange-500 to-amber-500") +
                          " text-white shadow-lg"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <span>{category.icon}</span>
                    {category.label}
                  </button>
                ))}
            </div>

            {/* Category Content - Expanded inline */}
            {activeCategory !== "daily" && (
              <div className="mt-8">
                <div
                  className={`bg-gradient-to-r ${categoryContent[activeCategory].color} rounded-2xl p-8 md:p-10 mb-6`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 text-white">
                      {categoryContent[activeCategory].icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {categoryContent[activeCategory].title}
                      </h2>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-white/90">
                          Rating:
                        </span>
                        <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-white">
                          {categoryContent[activeCategory].rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-[#333355]/80 leading-relaxed text-base md:text-lg">
                    {categoryContent[activeCategory].content}
                  </p>
                </div>

                {/* Additional Insights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 border border-gray-200">
                    <div className="text-center">
                      <div className="text-3xl mb-2">⭐</div>
                      <p className="text-sm font-semibold text-[#333355]">
                        Lucky Number
                      </p>
                      <p className="text-2xl font-bold text-[#333355] mt-1">
                        7
                      </p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 border border-gray-200">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🎨</div>
                      <p className="text-sm font-semibold text-[#333355]">
                        Lucky Color
                      </p>
                      <p className="text-lg font-bold text-[#333355] mt-1">
                        Blue
                      </p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 border border-gray-200">
                    <div className="text-center">
                      <div className="text-3xl mb-2">⏰</div>
                      <p className="text-sm font-semibold text-[#333355]">
                        Best Time
                      </p>
                      <p className="text-lg font-bold text-[#333355] mt-1">
                        2-4 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-br from-[#333355] to-[#4a4a6a] rounded-3xl shadow-lg p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Want Personalized Predictions?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Get a detailed analysis based on your exact birth chart and
            planetary positions for more accurate guidance.
          </p>
          <Link
            href="/kundli"
            className="inline-block bg-white text-[#333355] hover:bg-gray-100 px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            Get Your Personalized Horoscope
          </Link>
        </div>
      </div>
    </div>
  );
}
