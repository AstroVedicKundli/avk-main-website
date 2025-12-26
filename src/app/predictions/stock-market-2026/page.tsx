"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function StockMarket2026Page() {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "planets", label: "Planetary Transits" },
    { id: "january", label: "January" },
    { id: "february", label: "February" },
    { id: "march", label: "March" },
    { id: "april", label: "April" },
    { id: "may", label: "May" },
    { id: "june", label: "June" },
    { id: "july", label: "July" },
    { id: "august", label: "August" },
    { id: "september", label: "September" },
    { id: "october", label: "October" },
    { id: "november", label: "November" },
    { id: "december", label: "December" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Find active section
      const sectionElements = sections.map((section) =>
        document.getElementById(section.id)
      );

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial active section
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fefbf6] to-white">
      {/* Spacer for fixed header */}
      <div className="h-24"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center space-x-2 text-sm">
          <Link href="/" className="text-[#333355] hover:text-[#FF7B60]">
            Home
          </Link>
          <span className="text-[#333355]/40">/</span>
          <span className="text-[#333355]/60">Predictions</span>
          <span className="text-[#333355]/40">/</span>
          <span className="text-[#333355]/60">Stock Market 2026</span>
        </nav>

        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-[#333355] via-[#2a2a45] to-[#1f1f35]"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF7B60] rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF7B60] rounded-full filter blur-3xl"></div>
          </div>
          <div className="relative px-8 py-16 md:py-24 lg:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-semibold border border-white/20">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                  Vedic Astrology Insights
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Stock Market Predictions 2026
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
                Navigate the markets with planetary wisdom. Comprehensive analysis of planetary movements and their impact on stock market trends throughout 2026.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20">
                  <div className="text-2xl font-bold text-white">12 Months</div>
                  <div className="text-sm text-white/70">Detailed Analysis</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20">
                  <div className="text-2xl font-bold text-white">6 Planets</div>
                  <div className="text-sm text-white/70">Transit Calendar</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20">
                  <div className="text-2xl font-bold text-white">Key Dates</div>
                  <div className="text-sm text-white/70">Investment Timing</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Layout with Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Table of Contents Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-3xl shadow-xl p-6 sticky top-24">
              <h3 className="text-xl font-bold text-[#333355] mb-6">Table of Content</h3>
              <nav className="space-y-1">
                {sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all ${
                      activeSection === section.id
                        ? "bg-[#333355] text-white font-semibold"
                        : "text-[#333355] hover:bg-[#333355]/5"
                    }`}
                  >
                    <span className="flex items-start gap-3">
                      <span className="font-semibold">{index + 1}.</span>
                      <span>{section.label}</span>
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 min-w-0">
            {/* Overview Section */}
            <section id="overview" className="mb-16 scroll-mt-32">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333355] mb-6">
              Understanding Market Through Planetary Movements
            </h2>

            <div className="prose prose-lg max-w-none text-[#333355]/80">
              <p className="mb-4">
                Stock Market Predictions 2026 reveal that the market is not only
                influenced by economic policies or news from around the world, but the
                movement of planets also plays an important role in determining its
                direction and speed. According to Vedic astrology, each planet is a
                factor for a specific industry or market. Therefore, when the planets
                change their zodiac sign or state, the market also changes, sometimes
                picking up speed, and sometimes suddenly slowing down.
              </p>

              <p className="mb-4">
                Based on this principle, the learned astrologers of Astro Vedic Kundli have
                prepared this special stock market prediction 2026 for stock investors.
                Its objective is that by knowing the ups and downs in the market in
                advance, you take the right decision at the right time and be successful
                in earning more profits.
              </p>

              <div className="bg-[#FF7B60]/10 border-l-4 border-[#FF7B60] p-6 rounded-lg my-8">
                <p className="font-semibold text-[#333355] mb-2">⚠️ Important Disclaimer:</p>
                <p className="text-sm">
                  You should invest only by following your own discretion as the market
                  is subject to risks. Trade only after knowing your current planetary
                  positions and transits from your horoscope and whether they are
                  favourable. We will not be responsible for any kind of profit or loss.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gradient-to-br from-[#333355] to-[#2a2a45] rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">📈 This Prediction Helps You Understand:</h3>
                  <ul className="space-y-2">
                    <li>☑ When will the market see a bullish wave?</li>
                    <li>☑ When to be cautious about recession?</li>
                    <li>☑ When is the best time to buy?</li>
                    <li>☑ And when is it necessary to exit with profit?</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-[#FF7B60] to-[#ff6b4a] rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">💡 Key Benefits:</h3>
                  <ul className="space-y-2">
                    <li>✓ Reduction in investment risk</li>
                    <li>✓ Increased potential for profit</li>
                    <li>✓ Enhanced confidence in decision-making</li>
                    <li>✓ Better sector-wise insights</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Planetary Transits Section */}
        <section id="planets" className="mb-16 scroll-mt-32">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333355] mb-8">
              2026 Planetary Transits Calendar
            </h2>

            <div className="space-y-8">
              {/* Jupiter */}
              <div className="border-l-4 border-yellow-500 pl-6">
                <h3 className="text-2xl font-bold text-[#333355] mb-4 flex items-center gap-2">
                  <span className="text-3xl">♃</span> Jupiter (Guru)
                </h3>
                <ul className="space-y-2 text-[#333355]/80">
                  <li>• March 11, 2026: Jupiter moves from retrograde to direct</li>
                  <li>• June 2, 2026: Enters exalted sign Cancer (from Gemini)</li>
                  <li>• July 14, 2026: Jupiter combust</li>
                  <li>• August 12, 2026: Jupiter rises</li>
                  <li>• October 31, 2026: Enters Leo (friend Sun&apos;s sign)</li>
                  <li>• December 13, 2026: Becomes retrograde</li>
                </ul>
              </div>

              {/* Saturn */}
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-2xl font-bold text-[#333355] mb-4 flex items-center gap-2">
                  <span className="text-3xl">♄</span> Saturn (Shani)
                </h3>
                <ul className="space-y-2 text-[#333355]/80">
                  <li>• Remains in Pisces throughout 2026</li>
                  <li>• March 7, 2026: Saturn combust</li>
                  <li>• April 13, 2026: Saturn rises</li>
                  <li>• July 27, 2026: Moves into retrograde state</li>
                  <li>• December 11, 2026: Turns direct from retrograde</li>
                </ul>
              </div>

              {/* Rahu & Ketu */}
              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-2xl font-bold text-[#333355] mb-4 flex items-center gap-2">
                  <span className="text-3xl">☊☋</span> Rahu & Ketu
                </h3>
                <ul className="space-y-2 text-[#333355]/80">
                  <li>• Rahu: Remains in Aquarius, enters Capricorn on December 5, 2026</li>
                  <li>• Ketu: Enters Cancer on December 5, 2026</li>
                </ul>
              </div>

              {/* Mars */}
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-2xl font-bold text-[#333355] mb-4 flex items-center gap-2">
                  <span className="text-3xl">♂</span> Mars (Mangal)
                </h3>
                <ul className="space-y-2 text-[#333355]/80">
                  <li>• January 16, 2026: Enters exalted sign Capricorn</li>
                  <li>• February 23, 2026: Transits into Aquarius</li>
                  <li>• March 26, 2026: Mars rises</li>
                  <li>• April 2, 2026: Enters Pisces</li>
                  <li>• May 11, 2026: Enters own sign Aries</li>
                  <li>• June 21, 2026: Transits into Taurus</li>
                  <li>• August 2, 2026: Enters Gemini</li>
                  <li>• September 18, 2026: Enters debilitated sign Cancer</li>
                  <li>• November 12, 2026: Enters Leo</li>
                </ul>
              </div>

              {/* Venus */}
              <div className="border-l-4 border-pink-500 pl-6">
                <h3 className="text-2xl font-bold text-[#333355] mb-4 flex items-center gap-2">
                  <span className="text-3xl">♀</span> Venus (Shukra)
                </h3>
                <ul className="space-y-2 text-[#333355]/80">
                  <li>• January 13, 2026: Enters Capricorn</li>
                  <li>• February 6, 2026: Transits into Aquarius</li>
                  <li>• February 17, 2026: Venus rises</li>
                  <li>• March 2, 2026: Enters Pisces</li>
                  <li>• March 26, 2026: Enters Aries</li>
                  <li>• April 19, 2026: Enters own sign Taurus</li>
                  <li>• May 14, 2026: Transits into Gemini</li>
                  <li>• June 8, 2026: Enters Cancer</li>
                  <li>• July 4, 2026: Enters Leo</li>
                  <li>• August 1, 2026: Enters debilitated sign Virgo</li>
                  <li>• September 2, 2026: Enters own sign Libra</li>
                  <li>• October 3, 2026: Starts retrograde</li>
                  <li>• October 19, 2026: Venus combust</li>
                  <li>• October 29, 2026: Venus rises</li>
                  <li>• November 6, 2026: Transits into Virgo (retrograde)</li>
                  <li>• November 14, 2026: Becomes direct</li>
                  <li>• November 22, 2026: Re-enters Libra</li>
                </ul>
              </div>

              {/* Mercury */}
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-2xl font-bold text-[#333355] mb-4 flex items-center gap-2">
                  <span className="text-3xl">☿</span> Mercury (Budh)
                </h3>
                <ul className="space-y-2 text-[#333355]/80">
                  <li>• January 17, 2026: Enters Capricorn</li>
                  <li>• February 3, 2026: Enters Aquarius</li>
                  <li>• February 10, 2026: Rises from combust state</li>
                  <li>• February 26, 2026: Becomes retrograde</li>
                  <li>• February 28, 2026: Mercury combust</li>
                  <li>• March 13, 2026: Mercury rises</li>
                  <li>• March 21, 2026: Moves direct from retrograde</li>
                  <li>• April 11, 2026: Enters debilitated sign Pisces</li>
                  <li>• April 30, 2026: Transits into Aries</li>
                  <li>• May 1, 2026: Mercury combust</li>
                  <li>• May 15, 2026: Enters Taurus</li>
                  <li>• May 26, 2026: Mercury rises</li>
                  <li>• May 29, 2026: Enters own sign Gemini</li>
                  <li>• June 22, 2026: Enters Cancer</li>
                  <li>• June 29, 2026: Turns retrograde</li>
                  <li>• July 5, 2026: Mercury combust</li>
                  <li>• July 7, 2026: Re-enters Gemini (retrograde)</li>
                  <li>• July 21, 2026: Mercury rises</li>
                  <li>• July 24, 2026: Turns direct from retrograde</li>
                  <li>• August 5, 2026: Re-enters Cancer</li>
                  <li>• August 14, 2026: Mercury combust</li>
                  <li>• August 22, 2026: Enters Leo</li>
                  <li>• September 7, 2026: Enters own sign Virgo</li>
                  <li>• September 13, 2026: Mercury rises</li>
                  <li>• September 26, 2026: Enters Libra</li>
                  <li>• October 24, 2026: Turns retrograde</li>
                  <li>• October 30, 2026: Mercury combust</li>
                  <li>• November 10, 2026: Mercury rises</li>
                  <li>• November 13, 2026: Becomes direct</li>
                  <li>• December 2, 2026: Enters Scorpio</li>
                  <li>• December 7, 2026: Mercury combust (remains till year end)</li>
                  <li>• December 22, 2026: Enters Sagittarius</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Month-wise Predictions */}
        <div className="space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333355] text-center mb-12">
            Month-Wise Stock Market Predictions 2026
          </h2>

          {/* January */}
          <section id="january" className="scroll-mt-32">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-[#333355] mb-2">January 2026</h3>
                <p className="text-[#333355]/60">Important Signals For Investors</p>
              </div>

              <div className="prose prose-lg max-w-none text-[#333355]/80">
                <p>
                  According to Stock Market Prediction 2026, the year 2026 will start on
                  Thursday with the auspicious combination of Taurus and Rohini Nakshatra.
                  The first month of the year, January, is going to be full of excitement
                  and ups and downs for the stock market.
                </p>

                <p>
                  Initially, pressure will continue to build and break in financial
                  institutions, pharma, IT, software and media sectors, as if these
                  sectors are trying to understand the mood of the new year.
                </p>

                <p>
                  From <strong>January 1 to January 2</strong>, stocks of cement,
                  automobile, power, steel, gas, petrochemical and heavy engineering
                  sectors will be seen getting good support, which may indicate strength
                  in the market movement.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                  <p className="font-semibold text-blue-900 mb-2">💡 Key Dates:</p>
                  <p className="text-sm text-blue-800">
                    Strong support expected: Jan 1-2 (Cement, Auto, Power, Steel sectors)
                  </p>
                </div>

                <p>
                  Immediately after this, the period from <strong>January 5 to January 9</strong> can
                  breathe new life into the stock market. Investors can expect positive
                  momentum during this period.
                </p>
              </div>
            </div>
          </section>

          {/* February */}
          <section id="february" className="scroll-mt-32">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-[#333355] mb-2">February 2026</h3>
                <p className="text-[#333355]/60">Market Trends & Opportunities</p>
              </div>

              <div className="prose prose-lg max-w-none text-[#333355]/80">
                <p>
                  February brings new planetary alignments that will influence market
                  sentiment. With Mercury&apos;s movement and Venus entering new signs,
                  investors should watch for sector-specific opportunities.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
                  <p className="font-semibold text-amber-900 mb-2">⚠️ Key Highlights:</p>
                  <p className="text-sm text-amber-800">
                    Venus transits and Mercury retrograde will create volatility. Exercise
                    caution during mid-month.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* March */}
          <section id="march" className="scroll-mt-32">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-[#333355] mb-2">March 2026</h3>
                <p className="text-[#333355]/60">Spring Season Market Outlook</p>
              </div>

              <div className="prose prose-lg max-w-none text-[#333355]/80">
                <p>
                  March marks significant planetary changes with Jupiter moving direct and
                  Saturn&apos;s combustion. These celestial events will bring renewed energy to
                  the markets.
                </p>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                  <p className="font-semibold text-green-900 mb-2">📈 Positive Signals:</p>
                  <p className="text-sm text-green-800">
                    Jupiter direct motion on March 11 signals growth opportunities in
                    expansion-related sectors.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* April */}
          <section id="april" className="scroll-mt-32">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-[#333355] mb-2">April 2026</h3>
                <p className="text-[#333355]/60">Mid-Year Strategic Planning</p>
              </div>

              <div className="prose prose-lg max-w-none text-[#333355]/80">
                <p>
                  April brings Mercury into debilitated Pisces and Mars entering its own
                  sign Aries. This combination suggests mixed signals for different
                  sectors.
                </p>
              </div>
            </div>
          </section>

          {/* May */}
          <section id="may" className="scroll-mt-32">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-[#333355] mb-2">May 2026</h3>
                <p className="text-[#333355]/60">Summer Market Dynamics</p>
              </div>

              <div className="prose prose-lg max-w-none text-[#333355]/80">
                <p>
                  May sees Venus entering its own sign Taurus and Mercury in Gemini. These
                  favorable placements suggest stability in communication, technology, and
                  luxury goods sectors.
                </p>
              </div>
            </div>
          </section>

          {/* June */}
          <section id="june" className="scroll-mt-32">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-[#333355] mb-2">June 2026</h3>
                <p className="text-[#333355]/60">Major Jupiter Transit</p>
              </div>

              <div className="prose prose-lg max-w-none text-[#333355]/80">
                <p>
                  <strong>June 2, 2026</strong> marks a significant event as Jupiter enters
                  its exalted sign Cancer. This is one of the most auspicious transits of
                  the year and can bring substantial growth opportunities.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                  <p className="font-semibold text-blue-900 mb-2">🌟 Major Event:</p>
                  <p className="text-sm text-blue-800">
                    Jupiter&apos;s exaltation in Cancer signals strong growth in real estate,
                    banking, and infrastructure sectors.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* July */}
          <section id="july" className="scroll-mt-32">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-[#333355] mb-2">July 2026</h3>
                <p className="text-[#333355]/60">Mid-Year Market Assessment</p>
              </div>

              <div className="prose prose-lg max-w-none text-[#333355]/80">
                <p>
                  July brings Jupiter combustion on the 14th and Saturn&apos;s retrograde
                  motion from the 27th. These events suggest a period of consolidation and
                  reassessment.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
                  <p className="font-semibold text-amber-900 mb-2">⚠️ Caution Period:</p>
                  <p className="text-sm text-amber-800">
                    Jupiter combustion may temporarily slow down growth momentum.
                    Conservative approach recommended.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* August */}
          <section id="august" className="scroll-mt-32">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-[#333355] mb-2">August 2026</h3>
                <p className="text-[#333355]/60">Recovery & Growth Phase</p>
              </div>

              <div className="prose prose-lg max-w-none text-[#333355]/80">
                <p>
                  Jupiter rises on <strong>August 12</strong>, marking the end of its
                  combustion. This signals renewed growth and optimism in the markets.
                  Venus enters debilitated Virgo, which may impact luxury and entertainment
                  sectors.
                </p>
              </div>
            </div>
          </section>

          {/* September */}
          <section id="september" className="scroll-mt-32">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-[#333355] mb-2">September 2026</h3>
                <p className="text-[#333355]/60">Autumn Market Volatility</p>
              </div>

              <div className="prose prose-lg max-w-none text-[#333355]/80">
                <p>
                  September 2026 is going to start full of excitement and ups and downs in
                  the stock market. With the influence of Ashwini Nakshatra and Mars, this
                  month will bring special signals for investors.
                </p>

                <p>
                  At the beginning of the month i.e. on <strong>September 1 and 2</strong>,
                  there will be a possibility of increased pressure on the shares of media,
                  software, pharma and banking sectors, due to which the market may show
                  some weakness.
                </p>

                <p>
                  However, as <strong>September 3 and 4</strong> pass, the index may once
                  again see a recovery due to gains in various sectors and support from
                  blue-chip companies.
                </p>

                <p>
                  If this positive trend continues, stocks of key sectors like cement,
                  steel, railways, real estate, power, gas, petrochemicals and automobiles
                  will see moderate gains between <strong>September 7 and September 11</strong>.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
                  <p className="font-semibold text-amber-900 mb-2">⚠️ High Alert Period:</p>
                  <p className="text-sm text-amber-800">
                    Between September 21 and 25, sudden changes in market sentiment,
                    rumours and international events may create heavy selling. Exercise
                    extreme caution.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                  <p className="font-semibold text-green-900 mb-2">📈 Favorable Dates:</p>
                  <p className="text-sm text-green-800">
                    September 2, 5, 7, 13, 17, 26, 27, and 28 show high possibility of
                    market rise.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* October */}
          <section id="october" className="scroll-mt-32">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-[#333355] mb-2">October 2026</h3>
                <p className="text-[#333355]/60">Important Signals For Investors</p>
              </div>

              <div className="prose prose-lg max-w-none text-[#333355]/80">
                <p>
                  The month of October 2026 will begin on Thursday with the influence of
                  Rohini Nakshatra along with Taurus. Media, telecom, information
                  technology and financial institutions stocks are likely to provide strong
                  support at the beginning of the month.
                </p>

                <p>
                  If these sectors continue to rise during <strong>October 1 and 2</strong>,
                  the market may see a recovery trend and investor confidence will once
                  again strengthen.
                </p>

                <p>
                  The shares of software, pharma, banking, power, real estate, automobile
                  and petrochemical companies can show good performance from <strong>October
                  5 to October 9</strong>.
                </p>

                <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
                  <p className="font-semibold text-red-900 mb-2">🚨 Critical Period:</p>
                  <p className="text-sm text-red-800">
                    October 19 to October 23 could be challenging. Increasing selling
                    pressure indicates a major fall. Trade with utmost caution.
                  </p>
                </div>

                <p>
                  After this, the market will again see activity on <strong>26th and 27th
                  October</strong> where minor fluctuations will continue. The market
                  situation may stabilize from 28th to 30th October with strong support
                  from various sectors leading to a potential rally.
                </p>
              </div>
            </div>
          </section>

          {/* November */}
          <section id="november" className="scroll-mt-32">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-[#333355] mb-2">November 2026</h3>
                <p className="text-[#333355]/60">Ups And Downs Throughout, But Plenty Of Opportunities!</p>
              </div>

              <div className="prose prose-lg max-w-none text-[#333355]/80">
                <p>
                  November 2026 begins on Sunday under the influence of Pushya Nakshatra
                  and Cancer zodiac sign. According to stock market predictions 2026, the
                  market is going to take an exciting turn right from the beginning of the
                  month.
                </p>

                <p>
                  There may be sudden movements and disturbances in the market on <strong>November
                  2</strong>, hence investors should be cautious in the initial days.
                </p>

                <p>
                  However, the market mood may improve between <strong>November 3 and
                  November 6</strong>. During this period, shares of real estate,
                  gold-silver, automobile, rubber, petrochemical, copper, steel and sugar
                  sectors are likely to get good support.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
                  <p className="font-semibold text-amber-900 mb-2">⚠️ Unstable Period:</p>
                  <p className="text-sm text-amber-800">
                    November 9 to November 13: Pressure of instability increases. Market
                    sentiment will change frequently. Avoid hasty decisions.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
                  <p className="font-semibold text-red-900 mb-2">📉 Bearish Phase:</p>
                  <p className="text-sm text-red-800">
                    November 16 to November 20: Selling pressure may increase significantly.
                    Even blue-chip stocks may fall. Minimize risk-taking investments.
                  </p>
                </div>

                <p>
                  As the month moves towards the end, signs of relief will be visible.
                  Shares of power, metal, steel and automobile sectors may emerge strongly
                  between <strong>November 23 and November 27</strong>. This will give a
                  good bounce to the market.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                  <p className="font-semibold text-blue-900 mb-2">💡 Investment Mantra:</p>
                  <p className="text-sm text-blue-800">
                    Perform smart analysis, act at the right time, and avoid panic!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* December */}
          <section id="december" className="scroll-mt-32">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-[#333355] mb-2">December 2026</h3>
                <p className="text-[#333355]/60">Year-End Market Update & Sector Analysis</p>
              </div>

              <div className="prose prose-lg max-w-none text-[#333355]/80">
                <p>
                  The month of December will start with Tuesday, Leo zodiac sign and Magha
                  Nakshatra. According to astrological calculations, this month is going to
                  bring many golden opportunities for stock market investors.
                </p>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                  <p className="font-semibold text-green-900 mb-2">📈 Positive Start:</p>
                  <p className="text-sm text-green-800">
                    December 1-4: Stock market environment will be quite positive. IT,
                    telecom, media, pharma, banking, steel, infrastructure, heavy
                    engineering, and automobile sectors likely to rise.
                  </p>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
                  <p className="font-semibold text-amber-900 mb-2">⚠️ Volatility Alert:</p>
                  <p className="text-sm text-amber-800">
                    December 7-11: Market volatility increases. Sharp fluctuations possible
                    in media, software, pharma and financial sectors. Trade with caution.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
                  <p className="font-semibold text-red-900 mb-2">🚨 High Risk Period:</p>
                  <p className="text-sm text-red-800">
                    December 14-18: Tremendous selling pressure expected. Stocks across
                    major sectors could see sudden decline. Potential sharp drop in Nifty
                    and Sensex. Avoid risky investments.
                  </p>
                </div>

                <p>
                  There will be slight fluctuations in the market on <strong>December 21</strong>.
                  But after this the atmosphere will start becoming positive again.
                </p>

                <p>
                  Between <strong>December 22 and December 25</strong>, steel, cement,
                  power, real estate, chemical, petro-gas and metal sectors can give good
                  returns to their investors. Investor confidence may return once again in
                  the last week of the year.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                  <p className="font-semibold text-blue-900 mb-2">🎯 Year-End Rally:</p>
                  <p className="text-sm text-blue-800">
                    December 28-31: Strong growth expected in major sectors. Last leg of
                    the year will keep stock market buoyant and profitable. Indices may
                    close higher than expected.
                  </p>
                </div>

                <p className="text-lg font-semibold text-[#333355] mt-8">
                  December 2026 is going to be an exciting month in terms of the stock
                  market. If you invest wisely and at the right time, this year-end can
                  prove to be very auspicious for you financially.
                </p>
              </div>
            </div>
          </section>
        </div>

            {/* Final Note */}
            <div className="mt-16 bg-gradient-to-br from-[#333355] to-[#2a2a45] rounded-3xl shadow-xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Important Disclaimer
          </h3>
          <p className="text-white/90 mb-4">
            These predictions are based on Vedic astrological principles and planetary
            movements. While astrology can provide valuable insights, the stock market
            is influenced by numerous factors including economic policies, global events,
            and market sentiment.
          </p>
          <p className="text-white/90 mb-4">
            <strong>Always:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/90 mb-6">
            <li>Consult your personal horoscope before making investment decisions</li>
            <li>Exercise your own discretion and judgment</li>
            <li>Understand that markets are subject to risks</li>
            <li>Never invest more than you can afford to lose</li>
            <li>Consider consulting with financial advisors</li>
          </ul>
          <p className="text-sm text-white/70">
            We are not responsible for any profits or losses resulting from investment
            decisions made based on these predictions.
          </p>
        </div>

          </main>
        </div>

        {/* Related Links */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-[#333355] mb-6">
            Explore More Predictions
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/predictions/commodities-2026"
              className="rounded-full bg-[#333355] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#2a2a45] transition-all"
            >
              Commodities 2026
            </Link>
            <Link
              href="/horoscope"
              className="rounded-full border-2 border-[#333355] px-6 py-3 text-sm font-semibold text-[#333355] hover:bg-[#333355] hover:text-white transition-all"
            >
              Daily Horoscope
            </Link>
            <Link
              href="/kundli"
              className="rounded-full border-2 border-[#333355] px-6 py-3 text-sm font-semibold text-[#333355] hover:bg-[#333355] hover:text-white transition-all"
            >
              Get Your Kundli
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
