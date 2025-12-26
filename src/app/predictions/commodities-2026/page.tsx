"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Commodities2026Page() {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "overview", label: "Overview" },
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
    handleScroll();
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
          <span className="text-[#333355]/60">Commodities 2026</span>
        </nav>

        {/* Hero Banner */}
        <div className="rounded-3xl overflow-hidden mb-16 bg-white">
          {/* Full image banner without cropping (same style as stock page) */}
          <Image
            src="/predictions/commodities/commodity_banner.jpg"
            alt="Astrological commodity market banner"
            width={1600}
            height={600}
            priority
            className="w-full h-auto"
          />

          {/* Text content below the image so it doesn't cover the banner */}
          <div className="px-8 py-10 md:py-12 lg:py-14">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF7B60]/10 text-[#FF7B60] text-sm font-semibold border border-[#FF7B60]/30">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                  </svg>
                  Commodity Trading Insights
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#333355] mb-6">
                Commodity Market Predictions 2026
              </h1>
              <p className="text-lg md:text-xl text-[#333355]/80 max-w-2xl mx-auto mb-8">
                Master commodity trading with Vedic astrology. Detailed predictions for gold, silver, grains, cotton, oil, and more throughout 2026.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="bg-[#FF7B60]/5 rounded-xl px-6 py-3 border border-[#FF7B60]/20">
                  <div className="text-2xl font-bold text-[#333355]">12 Months</div>
                  <div className="text-sm text-[#333355]/70">Trading Insights</div>
                </div>
                <div className="bg-[#FF7B60]/5 rounded-xl px-6 py-3 border border-[#FF7B60]/20">
                  <div className="text-2xl font-bold text-[#333355]">All Commodities</div>
                  <div className="text-sm text-[#333355]/70">Grains, Metals, Oil</div>
                </div>
                <div className="bg-[#FF7B60]/5 rounded-xl px-6 py-3 border border-[#FF7B60]/20">
                  <div className="text-2xl font-bold text-[#333355]">Price Trends</div>
                  <div className="text-sm text-[#333355]/70">Bullish &amp; Bearish</div>
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
                        ? "bg-[#FF7B60] text-white font-semibold"
                        : "text-[#333355] hover:bg-[#FF7B60]/5"
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
                  Understanding Commodity Trading Through Astrology
                </h2>

                <div className="prose prose-lg max-w-none text-[#333355]/80">
                  <p className="mb-4">
                    India was the primary origin of trade, and its inhabitants were fully
                    skilled in this art. Just as the Sun and other planets are closely
                    related to human life, the planetary influence also plays a role in
                    the fluctuations of each commodity.
                  </p>

                  <p className="mb-4">
                    Traders, in their trade, import goods from other places where they are
                    abundant and sell them. Therefore, if a trader gains information about
                    when, where, in what quantity, and which grain will be produced in
                    varying quantities, ahead of time, or if their predictions prove to be
                    accurate, they may be able to profit.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="bg-gradient-to-br from-[#FF7B60] to-[#ff6b4a] rounded-2xl p-6 text-white">
                      <h3 className="text-xl font-bold mb-4">🌾 Commodities Covered:</h3>
                      <ul className="space-y-2">
                        <li>☑ Grains (Wheat, Rice, Barley)</li>
                        <li>☑ Precious Metals (Gold, Silver)</li>
                        <li>☑ Cotton & Textiles</li>
                        <li>☑ Oils & Ghee</li>
                        <li>☑ Sugar & Jaggery</li>
                        <li>☑ Pulses & Oilseeds</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-[#333355] to-[#2a2a45] rounded-2xl p-6 text-white">
                      <h3 className="text-xl font-bold mb-4">💡 Trading Insights Include:</h3>
                      <ul className="space-y-2">
                        <li>✓ Price trend forecasts</li>
                        <li>✓ Bullish & bearish periods</li>
                        <li>✓ Best times to buy/sell</li>
                        <li>✓ Planetary influences</li>
                        <li>✓ Market fluctuation alerts</li>
                        <li>✓ Profit opportunities</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg my-8">
                    <p className="font-semibold text-amber-900 mb-2">⚠️ Important Note:</p>
                    <p className="text-sm text-amber-800">
                      These predictions are based on Vedic astrological principles and
                      Nakshatra movements. While they provide valuable insights, commodity
                      markets are also influenced by weather, global events, and economic
                      policies. Always exercise your own judgment and consult with trading
                      advisors before making decisions.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Month-wise Predictions */}
            <div className="space-y-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#333355] text-center mb-12">
                Month-Wise Commodity Market Predictions 2026
              </h2>

              {/* January */}
              <section id="january" className="scroll-mt-32">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-[#333355] mb-2">January 2026</h3>
                    <p className="text-[#333355]/60">Year Begins with Strong Market Movements</p>
                  </div>

                  <div className="prose prose-lg max-w-none text-[#333355]/80">
                    <p>
                      According to the Commodity Market 2026, the market is expected to
                      experience bullish trends starting <strong>January 4th</strong> with
                      Jupiter&apos;s entry into Punarvasu Nakshatra, leading to price rises in
                      grains, gold, and oil.
                    </p>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                      <p className="font-semibold text-green-900 mb-2">📈 Bullish Period:</p>
                      <p className="text-sm text-green-800">
                        January 4: Jupiter enters Punarvasu - Expect rises in grains, gold,
                        and oil prices.
                      </p>
                    </div>

                    <p>
                      However, fluctuations are anticipated with Mercury&apos;s entry into Pushya
                      Nakshatra on <strong>January 6th</strong>, likely causing a decline in
                      grains and precious metals.
                    </p>

                    <p>
                      A downturn in certain commodities is forecasted when Venus, the Sun,
                      and Mars transit Uttar Ashadha Nakshatra between <strong>January 10th
                      and 11th</strong>, yet gains are expected in others like cotton.
                    </p>

                    <p>
                      On <strong>January 12th</strong>, with Venus entering Capricorn, a
                      strong market rally will occur. Furthermore, price increases in
                      various commodities are expected through mid-January.
                    </p>

                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
                      <p className="font-semibold text-amber-900 mb-2">⚠️ Caution:</p>
                      <p className="text-sm text-amber-800">
                        Post-January 15: Decline forecasted when Mercury influences the
                        market. Monitor trends carefully.
                      </p>
                    </div>

                    <p>
                      Subsequent astrological events will lead to rising trends for grains
                      and precious metals toward the end of January, though market sentiment
                      could shift negatively with Jupiter&apos;s retrograde on <strong>January
                      30th</strong>.
                    </p>

                    <p>
                      The month&apos;s conclusion could see fluctuations as Venus and Mercury
                      enter Dhanishta, with various commodities experiencing rising trends
                      alongside some recessions.
                    </p>
                  </div>
                </div>
              </section>

              {/* February */}
              <section id="february" className="scroll-mt-32">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-[#333355] mb-2">February 2026</h3>
                    <p className="text-[#333355]/60">Mixed Market with Cotton Opportunities</p>
                  </div>

                  <div className="prose prose-lg max-w-none text-[#333355]/80">
                    <p>
                      The Commodity Market 2026 anticipates that the markets could face
                      fluctuations at the beginning of February. Mercury&apos;s entry into
                      Aquarius on the <strong>3rd</strong> influences linseed and cotton
                      prices to remain low, while ghee, oil, jaggery, and sugar will be
                      high.
                    </p>

                    <p>
                      As Venus joins Mercury and Rahu on the <strong>5th</strong>, despite
                      indicating a recession, an uptrend is likely. Key traders should act
                      wisely, with special profitability predicted for cotton.
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                      <p className="font-semibold text-blue-900 mb-2">💰 Profit Opportunity:</p>
                      <p className="text-sm text-blue-800">
                        Cotton shows special profitability throughout February. Consider
                        strategic positioning.
                      </p>
                    </div>

                    <p>
                      Subsequent days will see price increases for gold, silver, and various
                      grains, particularly after the Sun enters Aquarius on <strong>February
                      12th</strong>.
                    </p>

                    <p>
                      The <strong>14th of February</strong> marks a boost for cotton and
                      metals due to Mars&apos; entry into Dhanishtha. From the <strong>19th to
                      the 22nd</strong>, prices for multiple commodities will rise.
                    </p>

                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
                      <p className="font-semibold text-amber-900 mb-2">⚠️ Watch Out:</p>
                      <p className="text-sm text-amber-800">
                        Around February 26: Mercury retrograde may cause fluctuations.
                        Exercise caution in trading decisions.
                      </p>
                    </div>

                    <p>
                      Overall, while some commodities might face declines, there are
                      optimistic signs for cotton, grains, and various other items
                      throughout February.
                    </p>
                  </div>
                </div>
              </section>

              {/* March */}
              <section id="march" className="scroll-mt-32">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-[#333355] mb-2">March 2026</h3>
                    <p className="text-[#333355]/60">Cotton & Silver Take the Lead</p>
                  </div>

                  <div className="prose prose-lg max-w-none text-[#333355]/80">
                    <p>
                      As per the Commodity Market 2026, Venus enters Pisces at the beginning
                      of the month, potentially leading to sharp increases in cotton and
                      silver prices, while profits can be made from grains, oil, and
                      jaggery.
                    </p>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                      <p className="font-semibold text-green-900 mb-2">📈 Key Opportunities:</p>
                      <p className="text-sm text-green-800">
                        Early March: Sharp increases expected in cotton and silver. Profits
                        also likely from grains, oil, and jaggery.
                      </p>
                    </div>

                    <p>
                      However, a slowdown in grains, cotton, gold, and silver may follow
                      Mars entering Shatabhishak Nakshatra on <strong>March 3rd</strong>.
                    </p>

                    <p>
                      Significant price movements are anticipated throughout March, with
                      fluctuations expected as various celestial events occur, influencing
                      commodities like oil, gold, and sugar.
                    </p>

                    <p>
                      Notable dates include <strong>March 4</strong> when market trends may
                      change, <strong>March 9</strong> with a retrograde Mercury affecting
                      prices, and <strong>March 20</strong> boosting oilseeds and cotton
                      prices with Mars&apos;s entry into the Purva Bhadrapada Nakshatra.
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                      <p className="font-semibold text-blue-900 mb-2">🌟 Month-End Boost:</p>
                      <p className="text-sm text-blue-800">
                        March 31: Sun in Revati Nakshatra will boost prices of linseed,
                        mustard, castor oil, peanuts, cotton, wheat, barley, gram, and rice
                        for 14 days. Possibility of immediate benefits!
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
                    <p className="text-[#333355]/60">Strong Performance in Grains & Cotton</p>
                  </div>

                  <div className="prose prose-lg max-w-none text-[#333355]/80">
                    <p>
                      The Commodity Market 2026 predicts that Mercury in Aquarius, along
                      with Rahu and Mars, indicates strong performance for commodities like
                      linseed, cotton, and wheat early in the month.
                    </p>

                    <p>
                      On <strong>April 2nd</strong>, Mars enters Pisces and aligns with the
                      Sun and Saturn, leading to gains in gold and cotton, although
                      disruptions in business are anticipated.
                    </p>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                      <p className="font-semibold text-green-900 mb-2">📈 Bullish Period:</p>
                      <p className="text-sm text-green-800">
                        April 1-10: Stock markets predicted to be bullish. Strong gains
                        expected in multiple commodities.
                      </p>
                    </div>

                    <p>
                      Around <strong>April 5</strong>, Venus will influence increased cotton
                      prices. Mercury&apos;s entry into Pisces on <strong>April 10</strong>,
                      aligning with malefic planets, may lead to unexpected market gains
                      despite potential losses for cautious traders.
                    </p>

                    <p>
                      Significant market fluctuations could occur around <strong>April 13
                      and April 14</strong>, with a possible downturn on <strong>April
                      16</strong> but an ensuing rally by <strong>April 17</strong>.
                    </p>

                    <p>
                      By <strong>April 27</strong>, various commodity prices, including
                      grains and Ghee, might rise substantially. The month ends with the
                      potential for a sharp market shift, urging traders to stay alert.
                    </p>
                  </div>
                </div>
              </section>

              {/* May */}
              <section id="may" className="scroll-mt-32">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-[#333355] mb-2">May 2026</h3>
                    <p className="text-[#333355]/60">Rising Grain Prices & Market Volatility</p>
                  </div>

                  <div className="prose prose-lg max-w-none text-[#333355]/80">
                    <p>
                      At the beginning of May, prices of jaggery, sugar, rice, wheat, and
                      pulses dropped, but an increase is forecasted starting <strong>May
                      6th</strong>, when Mercury enters Bharani Nakshatra.
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                      <p className="font-semibold text-blue-900 mb-2">💰 Price Surge Alert:</p>
                      <p className="text-sm text-blue-800">
                        May 6 onwards: Sun and Mercury both move into Aries. Prices of
                        wheat, rice, gram, green gram, moth bean, and pulses will rise for
                        about eight days.
                      </p>
                    </div>

                    <p>
                      Prices may rise for about eight days, followed by potential declines
                      in certain grains after <strong>May 8</strong>.
                    </p>

                    <p>
                      Traders should stock up to capitalize on market trends, says Commodity
                      Market 2026. Strong fluctuations are expected around <strong>May
                      11</strong>, and significant price changes in various commodities,
                      including Ghee, gold, and oilseeds, are anticipated.
                    </p>

                    <p>
                      By mid-May, market dynamics are predicted to shift, with both bullish
                      and bearish patterns affecting multiple goods.
                    </p>

                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
                      <p className="font-semibold text-amber-900 mb-2">⚠️ Weather Impact:</p>
                      <p className="text-sm text-amber-800">
                        From May 26: Caution advised as adverse weather conditions may
                        impact markets. Fluctuating prices persist.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* June */}
              <section id="june" className="scroll-mt-32">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-[#333355] mb-2">June 2026</h3>
                    <p className="text-[#333355]/60">Kartari Yoga & Jupiter&apos;s Influence</p>
                  </div>

                  <div className="prose prose-lg max-w-none text-[#333355]/80">
                    <p>
                      In June, planetary alignments create <strong>&apos;Kartari Yoga&apos;</strong>,
                      advising traders to stock up on grains to maximize benefits.
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                      <p className="font-semibold text-blue-900 mb-2">🌟 Major Transit:</p>
                      <p className="text-sm text-blue-800">
                        June 1: Jupiter&apos;s entry into Cancer may raise cotton prices. Stock
                        up on grains during Kartari Yoga period.
                      </p>
                    </div>

                    <p>
                      Jupiter&apos;s entry into Cancer on <strong>June 1st</strong> may raise
                      cotton prices, while grains like wheat and lentils could see
                      volatility from <strong>June 2nd</strong> due to Mercury&apos;s influence.
                    </p>

                    <p>
                      Around <strong>June 8th</strong>, expect price increases in various
                      commodities but some might experience declines. <strong>June
                      11th</strong> might bring downturns in multiple grains and silver.
                    </p>

                    <p>
                      According to the Commodity Market 2026, mid-month sees a strong market
                      for various grains and goods. By <strong>June 16th</strong>, price
                      surges in wheat and other items are expected, but subsequent declines
                      might occur.
                    </p>

                    <p>
                      A bullish market is anticipated on Muharram, with price shocks on
                      <strong> June 18th</strong> for commercial commodities.
                    </p>

                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
                      <p className="font-semibold text-amber-900 mb-2">⚠️ Month-End Alert:</p>
                      <p className="text-sm text-amber-800">
                        June 30: Mercury turns retrograde, potentially leading to high
                        prices for certain items while others remain low.
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
                    <p className="text-[#333355]/60">Saturn & Jupiter Aspects Create Opportunities</p>
                  </div>

                  <div className="prose prose-lg max-w-none text-[#333355]/80">
                    <p>
                      According to the Commodity Market 2026, Saturn enters the second Pada
                      of Revati in early July, while Jupiter aspects Saturn. In this period,
                      oilseeds, mustard, and Ghee are expected to decline, whereas pulses,
                      grains, tobacco, and jaggery might experience some gains.
                    </p>

                    <p>
                      Mars enters Rohini and Jupiter enters Pushya Pada 2 on <strong>July
                      4</strong>, with a bullish outlook for cotton, yarn, silk, and
                      mustard.
                    </p>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                      <p className="font-semibold text-green-900 mb-2">📈 Bullish Commodities:</p>
                      <p className="text-sm text-green-800">
                        July 4 onwards: Cotton, yarn, silk, and mustard show bullish
                        outlook. Strategic opportunity for traders.
                      </p>
                    </div>

                    <p>
                      A cautious approach is advised due to Venus entering Magha Leo,
                      indicating possible market recessions.
                    </p>

                    <p>
                      On <strong>July 6</strong>, with the Sun entering Punarvasu and
                      Mercury retrograding in Gemini, a market boom is anticipated for
                      various commodities including gold-silver and cotton, although gold
                      and silver might remain bearish.
                    </p>

                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
                      <p className="font-semibold text-amber-900 mb-2">⚠️ Regional Impact:</p>
                      <p className="text-sm text-amber-800">
                        Around July 26: Saturn retrograde could cause regional food
                        shortages, but grain and cotton prices likely to rise overall.
                      </p>
                    </div>

                    <p>
                      Following planetary movements could lead to fluctuating market trends,
                      with peaks and recessions occurring until late July.
                    </p>
                  </div>
                </div>
              </section>

              {/* August */}
              <section id="august" className="scroll-mt-32">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-[#333355] mb-2">August 2026</h3>
                    <p className="text-[#333355]/60">Business Boom & Strong Profit Trends</p>
                  </div>

                  <div className="prose prose-lg max-w-none text-[#333355]/80">
                    <p>
                      The Commodity Market 2026 indicates that Mars will enter Gemini on
                      <strong> August 2nd</strong>, initiating an uptrend in profits for
                      cotton, jaggery, sugar, oil, and gold, lasting until <strong>August
                      3rd</strong>.
                    </p>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                      <p className="font-semibold text-green-900 mb-2">💰 Major Gains:</p>
                      <p className="text-sm text-green-800">
                        August 3: Significant gains for various commodities as Sun moves
                        into Ashlesha Nakshatra and Guru Pushya arrives. Excellent profit
                        opportunity!
                      </p>
                    </div>

                    <p>
                      <strong>August 3rd</strong> marks significant gains for various
                      commodities as the Sun moves into Ashlesha Nakshatra and Guru Pushya
                      arrives.
                    </p>

                    <p>
                      Subsequent movements of Mercury and Jupiter are likely to induce
                      fluctuations and a boom in business, particularly affecting cotton,
                      silver, and other goods until mid-August.
                    </p>

                    <p>
                      Notably, around <strong>August 10</strong>, Jupiter&apos;s influence might
                      create drought in some areas, enhancing opportunities for grains.
                      Monitoring trends is essential, especially around <strong>August
                      18th</strong> with more bullish movements anticipated.
                    </p>

                    <p>
                      By the end of the month, strong gains are expected for several
                      commodities, while caution is advised due to potential declines in
                      specific markets.
                    </p>
                  </div>
                </div>
              </section>

              {/* September */}
              <section id="september" className="scroll-mt-32">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-[#333355] mb-2">September 2026</h3>
                    <p className="text-[#333355]/60">Venus Transit & Natural Events Impact</p>
                  </div>

                  <div className="prose prose-lg max-w-none text-[#333355]/80">
                    <p>
                      In early September, the positions of celestial bodies influence the
                      prices of various commodities. Key dates include <strong>September
                      2</strong>, where the focus is on grains, jaggery, and metals due to
                      Venus Transit in Libra.
                    </p>

                    <p>
                      Prices are expected to rise for jaggery and sugar while grain prices
                      might decline around <strong>September 11</strong>, as Venus enters
                      Swati Nakshatra.
                    </p>

                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
                      <p className="font-semibold text-amber-900 mb-2">⚠️ Natural Event Alert:</p>
                      <p className="text-sm text-amber-800">
                        Around September 12: Natural disasters could lead to increased
                        commodity prices. Stay informed and prepared.
                      </p>
                    </div>

                    <p>
                      According to the Commodity Market 2026, natural disasters around
                      <strong> September 12</strong> could lead to increased commodity
                      prices.
                    </p>

                    <p>
                      By <strong>September 17</strong>, gains in cotton, oil, and gold are
                      anticipated as the Sun enters Virgo, influenced by Mercury and Saturn.
                    </p>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                      <p className="font-semibold text-green-900 mb-2">📈 Bullish Trend:</p>
                      <p className="text-sm text-green-800">
                        September 18: Bullish trend for various grains forecasted.
                        Fluctuations in silver prices expected.
                      </p>
                    </div>

                    <p>
                      A bullish trend for various grains is forecasted around <strong>September
                      18</strong>, with fluctuations in silver prices. Key boosts for Ghee
                      and pulses are noted toward the end of September, particularly with
                      the arrival of Shraddha rituals on the <strong>26th</strong>,
                      suggesting potential market volatility.
                    </p>
                  </div>
                </div>
              </section>

              {/* October */}
              <section id="october" className="scroll-mt-32">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-[#333355] mb-2">October 2026</h3>
                    <p className="text-[#333355]/60">Retrograde Venus Boosts Multiple Sectors</p>
                  </div>

                  <div className="prose prose-lg max-w-none text-[#333355]/80">
                    <p>
                      During October, Mercury&apos;s placement in Swati Nakshatra initially
                      leads to a bearish cotton environment. However, around <strong>October
                      3</strong>, a retrograde Venus along with Mars aspect on it will boost
                      prices in various commodities such as mustard, grains, and cotton,
                      while the stock market will also show bullish trends.
                    </p>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                      <p className="font-semibold text-green-900 mb-2">📈 Rally Period:</p>
                      <p className="text-sm text-green-800">
                        October 3-10: A subsequent rally in cotton and related products
                        expected. Venus retrograde creates profit opportunities.
                      </p>
                    </div>

                    <p>
                      A subsequent rally in cotton and related products will occur until
                      <strong> October 10</strong>.
                    </p>

                    <p>
                      On <strong>October 10</strong>, the Sun will enter Chitra Nakshatra
                      and will be under the influence of Saturn. Therefore, in the coming
                      few days, there will be a rise in the prices of cotton, yarn, gold,
                      silver, jaggery, sugar pulses, wheat, gram, oilseeds, oil and Ghee.
                    </p>

                    <p>
                      According to the Commodity Market 2026, as the month progresses,
                      significant price fluctuations are expected, particularly around
                      <strong> October 17</strong> influenced by Mars.
                    </p>

                    <p>
                      Notable gains in several commodities could be anticipated from
                      <strong> October 23 to 29</strong>, although fluctuations in grain
                      prices will be prevalent. Overall, profits are expected from various
                      commodities towards the end of the month.
                    </p>
                  </div>
                </div>
              </section>

              {/* November */}
              <section id="november" className="scroll-mt-32">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-[#333355] mb-2">November 2026</h3>
                    <p className="text-[#333355]/60">Quick Profits & Market Stabilization</p>
                  </div>

                  <div className="prose prose-lg max-w-none text-[#333355]/80">
                    <p>
                      Mercury will retrograde into the Swati Nakshatra on <strong>November
                      2</strong>, indicating a bullish market trend, although a significant
                      cotton recession might occur shortly thereafter.
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                      <p className="font-semibold text-blue-900 mb-2">💰 Quick Profit Opportunity:</p>
                      <p className="text-sm text-blue-800">
                        November 5: Retrograde Venus enters Virgo and aligns with Saturn.
                        Opportunities for quick profits in coarse grains, pulses, and sugars.
                      </p>
                    </div>

                    <p>
                      On <strong>November 5</strong>, retrograde Venus enters Virgo and
                      aligns with Saturn, presenting opportunities for quick profits in
                      coarse grains, pulses, and sugars.
                    </p>

                    <p>
                      The Sun&apos;s entry into Vishakha Nakshatra on <strong>November 6</strong> suggests
                      major price fluctuations in various commodities before sharp rises by
                      <strong> November 9</strong>.
                    </p>

                    <p>
                      The market is expected to weaken on <strong>November 10 and 11</strong>,
                      but stability is likely post-<strong>November 12</strong> due to
                      planetary changes.
                    </p>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                      <p className="font-semibold text-green-900 mb-2">📈 Direct Motion Benefits:</p>
                      <p className="text-sm text-green-800">
                        November 14: Mercury and Venus turn direct. Cotton and gold expected
                        to rise. Bullish trends in grains and precious metals Nov 16-19.
                      </p>
                    </div>

                    <p>
                      Between <strong>November 12 and 14</strong>, heightened market activity
                      in grains is anticipated. By <strong>November 14</strong>, Mercury and
                      Venus will turn direct, with commodities like cotton and gold expected
                      to rise.
                    </p>

                    <p>
                      Between <strong>November 16 and 19</strong>, bullish trends in grains
                      and precious metals like gold and silver will be observed.
                    </p>

                    <p>
                      <strong>November 20</strong> marks brisk trading around Devprabodhini
                      Ekadashi, with Venus entering Libra on <strong>November 22</strong> further
                      stimulating prices.
                    </p>

                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
                      <p className="font-semibold text-amber-900 mb-2">⚠️ Month-End Caution:</p>
                      <p className="text-sm text-amber-800">
                        November 25: Fluctuations expected with prevailing risk of recession.
                        Exercise caution in trading decisions.
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
                    <p className="text-[#333355]/60">Year-End Market Dynamics & Sharp Movements</p>
                  </div>

                  <div className="prose prose-lg max-w-none text-[#333355]/80">
                    <p>
                      On <strong>December 2nd</strong>, Mercury will enter Scorpio, enhancing
                      market trends in Ghee, oil, mustard oil, cotton, silver, and gold.
                      Prices will fluctuate for grains, expected to rise until <strong>December
                      5th</strong>.
                    </p>

                    <p>
                      According to the Commodity Market 2026, on <strong>December 3rd</strong>,
                      as the Sun enters Jyeshtha, prices for several commodities including
                      gold and various grains increase, while a decline is anticipated on
                      <strong> December 4th</strong>.
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                      <p className="font-semibold text-blue-900 mb-2">🌟 Excellent Profit Yoga:</p>
                      <p className="text-sm text-blue-800">
                        December 5: Excellent profit Yoga! Significant fluctuations expected
                        in barley, gram, and other commodities as Rahu and Ketu shift into
                        new phases.
                      </p>
                    </div>

                    <p>
                      <strong>December 5th</strong> features excellent profit Yoga, with
                      significant fluctuations expected in barley, gram, and other
                      commodities as Rahu and Ketu shift into new phases.
                    </p>

                    <p>
                      <strong>December 10th</strong> marks Saturn&apos;s direct motion, benefiting
                      stockists amid sharp market fluctuations, particularly in grains
                      through <strong>December 14th</strong>.
                    </p>

                    <p>
                      By <strong>December 13th</strong>, some metals and grains are predicted
                      to soar in value. On <strong>December 16th</strong>, the Sun&apos;s entry
                      into Mool Nakshatra presents opportunities in multiple commodities.
                    </p>

                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
                      <p className="font-semibold text-amber-900 mb-2">⚠️ Market Reversal Warning:</p>
                      <p className="text-sm text-amber-800">
                        December 19: Potential market reversals could occur. Exercise extreme
                        caution with investments.
                      </p>
                    </div>

                    <p>
                      By <strong>December 19th</strong>, potential market reversals could
                      occur. The period around <strong>December 22nd and 29th</strong> is
                      characterized by strong market action.
                    </p>

                    <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
                      <p className="font-semibold text-red-900 mb-2">🚨 Year-End Caution:</p>
                      <p className="text-sm text-red-800">
                        Late December: Caution advised for grains which might underperform.
                        Gold and silver could face serious declines. End year with careful
                        positioning.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Final Note */}
            <div className="mt-16 bg-gradient-to-br from-[#FF7B60] to-[#ff6b4a] rounded-3xl shadow-xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Important Trading Disclaimer
              </h3>
              <p className="text-white/90 mb-4">
                These commodity predictions are based on Vedic astrological principles,
                Nakshatra movements, and planetary transits. While astrology provides
                valuable insights for timing and trend identification, commodity markets
                are influenced by multiple factors.
              </p>
              <p className="text-white/90 mb-4">
                <strong>Key Considerations:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/90 mb-6">
                <li>Weather conditions and seasonal variations</li>
                <li>Global supply and demand dynamics</li>
                <li>Government policies and trade regulations</li>
                <li>Currency fluctuations and economic indicators</li>
                <li>Regional production and storage conditions</li>
                <li>International market trends</li>
              </ul>
              <p className="text-sm text-white/70">
                Always conduct your own research, consult with commodity trading experts,
                and never invest more than you can afford to lose. These predictions are
                for informational purposes only and should not be considered as financial
                advice. We are not responsible for any trading profits or losses.
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
              href="/predictions/stock-market-2026"
              className="rounded-full bg-[#333355] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#2a2a45] transition-all"
            >
              Stock Market 2026
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
