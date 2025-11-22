import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daily Horoscope - Free Predictions | Astro Vedic Kundli",
  description: "Get your free daily horoscope with personalized predictions for all zodiac signs. Plan your day with cosmic guidance.",
};

const zodiacSigns = [
  {
    name: "Aries",
    dates: "Mar 21 - Apr 19",
    excerpt: "A joint endeavor with a partner could lead to imaginative and creative opportunities. You feel...",
    color: "from-red-100 to-pink-100",
    icon: "♈",
  },
  {
    name: "Taurus",
    dates: "Apr 20 - May 20",
    excerpt: "Today, you might have an irresistible impulse to put your home in order. You want to give it...",
    color: "from-blue-100 to-cyan-100",
    icon: "♉",
  },
  {
    name: "Gemini",
    dates: "May 21 - Jun 20",
    excerpt: "A specific task or goal could have you making a lot of calls, writing a lot of letters, or...",
    color: "from-yellow-100 to-amber-100",
    icon: "♊",
  },
  {
    name: "Cancer",
    dates: "Jun 21 - Jul 22",
    excerpt: "If you've been thinking about working out of your home, this is the time to put your plans...",
    color: "from-green-100 to-emerald-100",
    icon: "♋",
  },
  {
    name: "Leo",
    dates: "Jul 23 - Aug 22",
    excerpt: "Although you occasionally want to spend a whole day alone, this isn't the time. You have a...",
    color: "from-orange-100 to-red-100",
    icon: "♌",
  },
  {
    name: "Virgo",
    dates: "Aug 23 - Sep 22",
    excerpt: "Unknown skills or talents that you didn't know you had might set you on a course that leads...",
    color: "from-purple-100 to-pink-100",
    icon: "♍",
  },
  {
    name: "Libra",
    dates: "Sep 23 - Oct 22",
    excerpt: "An unwitting communication from a friend could set you off on a path that changes your life....",
    color: "from-pink-100 to-rose-100",
    icon: "♎",
  },
  {
    name: "Scorpio",
    dates: "Oct 23 - Nov 21",
    excerpt: "Whatever difficulties may have arisen over the past few days, you have the power to overcome...",
    color: "from-indigo-100 to-purple-100",
    icon: "♏",
  },
  {
    name: "Sagittarius",
    dates: "Nov 22 - Dec 21",
    excerpt: "Your association with a group could enable your spiritual progress today. Past emotional issues...",
    color: "from-teal-100 to-green-100",
    icon: "♐",
  },
  {
    name: "Capricorn",
    dates: "Dec 22 - Jan 19",
    excerpt: "Professional success could bring financial rewards your way today. You might receive a bonus...",
    color: "from-slate-100 to-gray-100",
    icon: "♑",
  },
  {
    name: "Aquarius",
    dates: "Jan 20 - Feb 18",
    excerpt: "Today you could feel especially idealistic and see the world through rose-colored glasses...",
    color: "from-cyan-100 to-blue-100",
    icon: "♒",
  },
  {
    name: "Pisces",
    dates: "Feb 19 - Mar 20",
    excerpt: "Communications with friends and colleagues could be especially gratifying today. You might...",
    color: "from-blue-100 to-indigo-100",
    icon: "♓",
  },
];

export default function HoroscopePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f3f7] to-[#ebe9ed] pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333355] mb-6">
            Horoscope Forecasts
          </h1>
          
          {/* Decorative Divider */}
          <div className="flex items-center justify-center mb-6">
            <svg className="w-48 h-3" viewBox="0 0 200 10" fill="none">
              <path 
                d="M0 5 Q 20 0, 40 5 T 80 5 Q 100 8, 120 5 T 160 5 Q 180 2, 200 5" 
                stroke="#C8956D" 
                strokeWidth="1.5" 
                fill="none"
              />
            </svg>
          </div>

          <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            It is a long established fact that a reader will be distracted by the readable content of a page
            <br className="hidden md:block" />
            when looking at its layout. The point of using Lorem Ipsum.
          </p>
        </div>

        {/* Zodiac Signs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {zodiacSigns.map((sign) => (
            <Link
              key={sign.name}
              href={`/horoscope/${sign.name.toLowerCase()}`}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="flex gap-6 p-5">
                {/* Left side - Icon and Sign Info */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`bg-gradient-to-br ${sign.color} w-24 h-24 flex items-center justify-center mb-2`}
                    style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}
                  >
                  </div>
                  <h3 className="text-base font-bold text-[#333355] mb-0.5">
                    {sign.name}
                  </h3>
                  <p className="text-xs text-gray-500">{sign.dates}</p>
                </div>

                {/* Right side - Content */}
                <div className="flex-1 flex flex-col justify-between py-1">
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    {sign.excerpt}
                  </p>
                  <div>
                    <span className="text-purple-600 hover:text-purple-700 font-semibold text-sm uppercase tracking-wide">
                      Read More
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

