import Link from "next/link";

export default function MatchmakingStartPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fefbf6] to-white">
      {/* Spacer for fixed header */}
      <div className="h-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center space-x-2 text-sm">
          <Link href="/" className="text-[#333355] hover:text-[#FF7B60]">
            Home
          </Link>
          <span className="text-[#333355]/40">/</span>
          <Link href="/matchmaking" className="text-[#333355] hover:text-[#FF7B60]">
            Matchmaking
          </Link>
          <span className="text-[#333355]/40">/</span>
          <span className="text-[#333355]/60">Start</span>
        </nav>

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#333355] mb-2">
            Matchmaking Details
          </h1>
          <p className="text-sm sm:text-base text-[#333355]/75 max-w-2xl">
            Please enter the birth details of both boy and girl. Accurate date, time
            and place of birth help in precise Kundli matching and compatibility
            analysis.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 mb-10">
          <form className="space-y-10">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Boy Details */}
              <div>
                <h2 className="text-xl font-semibold text-[#333355] mb-4">
                  Boy&apos;s Details
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#333355]/80 mb-1">
                      Full Name (optional)
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-2xl border border-[#333355]/20 bg-[#fefbf6] px-3 py-2.5 text-sm text-[#333355] focus:outline-none focus:ring-2 focus:ring-[#FF7B60]/60 focus:border-[#FF7B60]"
                      placeholder="Enter boy&apos;s name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#333355]/80 mb-1">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        className="w-full rounded-2xl border border-[#333355]/20 bg-[#fefbf6] px-3 py-2.5 text-sm text-[#333355] focus:outline-none focus:ring-2 focus:ring-[#FF7B60]/60 focus:border-[#FF7B60]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#333355]/80 mb-1">
                        Time of Birth
                      </label>
                      <input
                        type="time"
                        className="w-full rounded-2xl border border-[#333355]/20 bg-[#fefbf6] px-3 py-2.5 text-sm text-[#333355] focus:outline-none focus:ring-2 focus:ring-[#FF7B60]/60 focus:border-[#FF7B60]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#333355]/80 mb-1">
                      Place of Birth
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-2xl border border-[#333355]/20 bg-[#fefbf6] px-3 py-2.5 text-sm text-[#333355] focus:outline-none focus:ring-2 focus:ring-[#FF7B60]/60 focus:border-[#FF7B60]"
                      placeholder="City, State, Country"
                    />
                  </div>
                </div>
              </div>

              {/* Girl Details */}
              <div>
                <h2 className="text-xl font-semibold text-[#333355] mb-4">
                  Girl&apos;s Details
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#333355]/80 mb-1">
                      Full Name (optional)
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-2xl border border-[#333355]/20 bg-[#fefbf6] px-3 py-2.5 text-sm text-[#333355] focus:outline-none focus:ring-2 focus:ring-[#FF7B60]/60 focus:border-[#FF7B60]"
                      placeholder="Enter girl&apos;s name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#333355]/80 mb-1">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        className="w-full rounded-2xl border border-[#333355]/20 bg-[#fefbf6] px-3 py-2.5 text-sm text-[#333355] focus:outline-none focus:ring-2 focus:ring-[#FF7B60]/60 focus:border-[#FF7B60]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#333355]/80 mb-1">
                        Time of Birth
                      </label>
                      <input
                        type="time"
                        className="w-full rounded-2xl border border-[#333355]/20 bg-[#fefbf6] px-3 py-2.5 text-sm text-[#333355] focus:outline-none focus:ring-2 focus:ring-[#FF7B60]/60 focus:border-[#FF7B60]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#333355]/80 mb-1">
                      Place of Birth
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-2xl border border-[#333355]/20 bg-[#fefbf6] px-3 py-2.5 text-sm text-[#333355] focus:outline-none focus:ring-2 focus:ring-[#FF7B60]/60 focus:border-[#FF7B60]"
                      placeholder="City, State, Country"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-[#333355]/10 mt-2">
              <div className="text-xs sm:text-sm text-[#333355]/60 max-w-md">
                Note: If you are unsure about exact birth time, you can mention it
                approximately. Our astrologers can guide you further based on chart
                patterns.
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-[#333355] px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#2a2a45] transition-all"
              >
                Proceed to Matching
              </button>
            </div>
          </form>
        </div>

        {/* Guna Milan / Ashtakoot Explanation */}
        <section className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#333355] mb-2">
              Guna Milan: Key Part of Kundli Matching
            </h2>
            <p className="text-sm sm:text-base text-[#333355]/80">
              In Vedic matchmaking, Gun Milan is done by comparing the kundlis across
              8 aspects or Kootas, collectively called <span className="font-semibold">Ashtakoot</span>.
              These 8 Kootas together give a compatibility score out of 36, also known
              as the <span className="font-semibold">Guna score</span>.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {/* 1. Varna */}
            <div className="rounded-2xl border border-[#333355]/10 bg-[#FCF3E4]/70 p-4 sm:p-5">
              <div className="flex items-start gap-3 mb-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#FF7B60]/10 text-xs font-semibold text-[#FF7B60]">
                  1
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-[#333355]">
                    Varna – Emotional Matching
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#333355]/80">
                Varna score is obtained by comparing the caste compatibility of two
                individuals. This component sheds light on their emotional
                compatibility.
              </p>
            </div>

            {/* 2. Vashya */}
            <div className="rounded-2xl border border-[#333355]/10 bg-[#FCF3E4]/70 p-4 sm:p-5">
              <div className="flex items-start gap-3 mb-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#FF7B60]/10 text-xs font-semibold text-[#FF7B60]">
                  2
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-[#333355]">
                    Vashya – Influence &amp; Control
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#333355]/80">
                This component of Kundli matching helps determine who will be more
                authoritative or influential in the relationship, and how that
                dynamic plays out.
              </p>
            </div>

            {/* 3. Tara */}
            <div className="rounded-2xl border border-[#333355]/10 bg-[#FCF3E4]/70 p-4 sm:p-5">
              <div className="flex items-start gap-3 mb-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#FF7B60]/10 text-xs font-semibold text-[#FF7B60]">
                  3
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-[#333355]">
                    Tara – Birth Star Compatibility
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#333355]/80">
                Also known as Tara Milan, this koot measures how compatible two people
                can be based on the strength of the relationship between their birth
                stars (nakshatras).
              </p>
            </div>

            {/* 4. Yoni */}
            <div className="rounded-2xl border border-[#333355]/10 bg-[#FCF3E4]/70 p-4 sm:p-5">
              <div className="flex items-start gap-3 mb-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#FF7B60]/10 text-xs font-semibold text-[#FF7B60]">
                  4
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-[#333355]">
                    Yoni – Sexual Compatibility
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#333355]/80">
                Yoni koot analyses the couple&apos;s level of closeness, romanticism,
                sexual compatibility and shared love in the relationship.
              </p>
            </div>

            {/* 5. Graha Maitri */}
            <div className="rounded-2xl border border-[#333355]/10 bg-[#FCF3E4]/70 p-4 sm:p-5">
              <div className="flex items-start gap-3 mb-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#FF7B60]/10 text-xs font-semibold text-[#FF7B60]">
                  5
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-[#333355]">
                    Graha Maitri – Mental Compatibility
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#333355]/80">
                This koot determines a couple&apos;s affection and intellectual
                compatibility based on the friendship, neutrality or enmity between
                ruling planets.
              </p>
            </div>

            {/* 6. Gana */}
            <div className="rounded-2xl border border-[#333355]/10 bg-[#FCF3E4]/70 p-4 sm:p-5">
              <div className="flex items-start gap-3 mb-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#FF7B60]/10 text-xs font-semibold text-[#FF7B60]">
                  6
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-[#333355]">
                    Gana – Character Compatibility
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#333355]/80">
                Gana assesses personality and attitude, dividing individuals into
                Devata, Manushya and Rakshasa categories to see how their natures
                align.
              </p>
            </div>

            {/* 7. Bhakoot */}
            <div className="rounded-2xl border border-[#333355]/10 bg-[#FCF3E4]/70 p-4 sm:p-5">
              <div className="flex items-start gap-3 mb-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#FF7B60]/10 text-xs font-semibold text-[#FF7B60]">
                  7
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-[#333355]">
                    Bhakoot – Peace &amp; Understanding
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#333355]/80">
                Bhakoot measures harmony and financial stability between partners
                based on the distance between their Moon signs. Matching Moon signs
                often give better results.
              </p>
            </div>

            {/* 8. Nadi */}
            <div className="rounded-2xl border border-[#333355]/10 bg-[#FCF3E4]/70 p-4 sm:p-5">
              <div className="flex items-start gap-3 mb-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#FF7B60]/10 text-xs font-semibold text-[#FF7B60]">
                  8
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-[#333355]">
                    Nadi – Health &amp; Genetics
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#333355]/80">
                Nadi focuses on health and genetic compatibility by dividing
                nakshatras into Adi, Madhya and Antya categories, helping avoid
                hereditary issues.
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#333355]/70 border-t border-[#333355]/10 pt-4 mt-2 mb-4">
            Together, these 8 Ashtakoota factors are assigned points that sum up to a
            maximum of 36. This becomes the Gun Milan or compatibility score, which
            is also reflected in many online kundli matching and Gun Milan tools.
          </p>

          {/* Koota Points Table */}
          <div className="overflow-x-auto rounded-2xl border border-[#333355]/10 bg-[#FCF3E4]/60">
            <table className="min-w-full divide-y divide-[#333355]/10 text-sm">
              <thead className="bg-[#FF7B60]/10">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#333355]/80">
                    Koota
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#333355]/80">
                    Maximum Points
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#333355]/10">
                <tr>
                  <td className="px-4 py-3 text-[#333355]">Varna</td>
                  <td className="px-4 py-3 text-[#333355]/80">1</td>
                </tr>
                <tr className="bg-white/40">
                  <td className="px-4 py-3 text-[#333355]">Vasya / Vashya</td>
                  <td className="px-4 py-3 text-[#333355]/80">2</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-[#333355]">Tara / Dina</td>
                  <td className="px-4 py-3 text-[#333355]/80">3</td>
                </tr>
                <tr className="bg-white/40">
                  <td className="px-4 py-3 text-[#333355]">Yoni</td>
                  <td className="px-4 py-3 text-[#333355]/80">4</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-[#333355]">Grah Maitri / Rasyadipati</td>
                  <td className="px-4 py-3 text-[#333355]/80">5</td>
                </tr>
                <tr className="bg-white/40">
                  <td className="px-4 py-3 text-[#333355]">Gana</td>
                  <td className="px-4 py-3 text-[#333355]/80">6</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-[#333355]">Rashi / Bhakoota</td>
                  <td className="px-4 py-3 text-[#333355]/80">7</td>
                </tr>
                <tr className="bg-white/40">
                  <td className="px-4 py-3 text-[#333355]">Nadi</td>
                  <td className="px-4 py-3 text-[#333355]/80">8</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-[#333355] font-semibold">Total</td>
                  <td className="px-4 py-3 text-[#333355] font-semibold">36</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Guna Score Interpretation */}
          <div className="mt-6 space-y-3">
            <h3 className="text-base sm:text-lg font-semibold text-[#333355]">
              The Guna Milan Score for Ideal Marriage
            </h3>
            <p className="text-xs sm:text-sm text-[#333355]/75">
              After Ashtakoota matching, the astrologer calculates the final Guna
              score out of 36. The higher the score, the more supportive the
              planetary combinations are for harmony and understanding in marriage.
              The table below shows how different Guna ranges are generally
              interpreted.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-[#333355]/10 bg-white/70">
              <table className="min-w-full divide-y divide-[#333355]/10 text-sm">
                <thead className="bg-[#FF7B60]/10">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#333355]/80">
                      Guna Points Obtained
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#333355]/80">
                      Prediction / Result
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#333355]/10">
                  <tr>
                    <td className="px-4 py-3 text-[#333355]">Below 18</td>
                    <td className="px-4 py-3 text-[#333355]/80">
                      Not recommended for marriage – major differences and
                      challenging combinations.
                    </td>
                  </tr>
                  <tr className="bg-[#FCF3E4]/60">
                    <td className="px-4 py-3 text-[#333355]">18 to 24</td>
                    <td className="px-4 py-3 text-[#333355]/80">
                      Acceptable match with average compatibility; extra care and
                      understanding are needed.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-[#333355]">24 to 32</td>
                    <td className="px-4 py-3 text-[#333355]/80">
                      Good match with supportive factors for a stable married life.
                    </td>
                  </tr>
                  <tr className="bg-[#FCF3E4]/60">
                    <td className="px-4 py-3 text-[#333355]">32 to 36</td>
                    <td className="px-4 py-3 text-[#333355]/80">
                      Excellent match; very strong compatibility and harmony
                      indicated.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
