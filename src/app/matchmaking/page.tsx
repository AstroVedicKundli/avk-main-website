import Link from "next/link";
import Image from "next/image";

export default function MatchmakingPage() {
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
					<span className="text-[#333355]/60">Matchmaking</span>
				</nav>

				{/* Hero Section */}
				<section className="rounded-3xl bg-white shadow-xl overflow-hidden mb-12">
					<div className="grid md:grid-cols-2 gap-0">
						{/* Left: Text */}
						<div className="px-8 py-10 md:px-10 md:py-14 flex flex-col justify-center">
							<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF7B60]/10 text-[#FF7B60] text-xs sm:text-sm font-semibold border border-[#FF7B60]/30 mb-4 w-fit">
								<span>Vedic Matchmaking</span>
							</div>
							<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#333355] mb-4 leading-tight">
								Matchmaking for a
								<span className="text-[#FF7B60]"> Happy &amp; Harmonious </span>
								Marriage
							</h1>
							<p className="text-[#333355]/80 text-sm sm:text-base md:text-lg mb-6 max-w-xl">
								Get detailed Kundli matching based on Gun Milan, Manglik dosha, and
								planetary positions. Understand emotional, mental and spiritual
								compatibility before taking the most important decision of your life.
							</p>

							<div className="flex flex-wrap gap-3 mb-6">
								<div className="flex items-center gap-2 text-xs sm:text-sm text-[#333355]/80 bg-[#FF7B60]/5 px-3 py-2 rounded-full">
									<span className="h-2 w-2 rounded-full bg-[#FF7B60]" />
									36-Gun Kundli Matching
								</div>
								<div className="flex items-center gap-2 text-xs sm:text-sm text-[#333355]/80 bg-[#FF7B60]/5 px-3 py-2 rounded-full">
									<span className="h-2 w-2 rounded-full bg-[#FF7B60]" />
									Manglik &amp; Dosha Analysis
								</div>
								<div className="flex items-center gap-2 text-xs sm:text-sm text-[#333355]/80 bg-[#FF7B60]/5 px-3 py-2 rounded-full">
									<span className="h-2 w-2 rounded-full bg-[#FF7B60]" />
									Personalized Remedies
								</div>
							</div>

							<div className="flex flex-wrap gap-4 items-center">
								<Link
									href="/matchmaking/start"
									className="inline-flex items-center justify-center rounded-full bg-[#333355] px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#2a2a45] transition-all"
								>
									Start Matchmaking
								</Link>
								<p className="text-xs sm:text-sm text-[#333355]/60">
									Only birth details needed – accurate date, time &amp; place.
								</p>
							</div>
						</div>

						{/* Right: Illustration */}
						<div className="relative h-64 md:h-full bg-[#FCF3E4]">
							<div className="absolute inset-0 flex items-center justify-center p-6 md:p-10">
								<div className="relative h-full w-full max-w-md rounded-3xl shadow-lg overflow-hidden bg-[#FFF5EC] border border-[#F3C5A5]/70">
									<div className="relative h-2/3 w-full bg-black/5">
										<Image
											src="/matchmaking/wedding.png"
											alt="Wedding rituals illustration"
											fill
											className="object-cover"
											sizes="(max-width: 768px) 280px, 360px"
										/>
									</div>
									<div className="h-1/3 w-full bg-[#FCF3E4] border-t border-[#333355]/10 px-3 sm:px-4 py-2.5 sm:py-3.5 flex items-center">
										<div className="grid grid-cols-3 gap-2 w-full">
											{[
												{ src: "/matchmaking/Kundli.webp", title: "Kundli" },
												{ src: "/matchmaking/Compatibility.webp", title: "Compatibility" },
												{ src: "/matchmaking/Dosha.webp", title: "Dosha" },
												{ src: "/matchmaking/Nakshatra.webp", title: "Nakshatra" },
												{ src: "/matchmaking/Relationship.webp", title: "Relationship" },
												{ src: "/matchmaking/Vedic.webp", title: "Vedic" },
											].map((item) => (
												<div
													key={item.src}
													className="flex flex-col items-center justify-center rounded-xl bg-white/80 border border-white/60 px-2 py-2"
												>
													<div className="relative h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 mb-1">
														<Image
															src={item.src}
															alt={item.title}
															fill
															className="object-contain"
															sizes="32px"
														/>
													</div>
													<p className="text-[10px] sm:text-[11px] md:text-xs font-medium text-[#333355] text-center leading-tight">
														{item.title}
													</p>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Main Content Sections */}
				<div className="space-y-12 md:space-y-16">
					{/* What is Vedic Matchmaking */}
					<section className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
						<h2 className="text-2xl md:text-3xl font-bold text-[#333355] mb-4">
							What is Vedic Matchmaking?
						</h2>
						<p className="text-[#333355]/80 mb-4 text-sm sm:text-base">
							Kundali matching is an ancient astrological method of comparing the horoscopes of a would-be bride and groom. It is based on the positions of planets and nakshatras (constellations) at their exact birth time and place.

This kundali matching by name and date of birth reveals a couple's compatibility, potential challenges and overall strength of the relationship. To do this, the online patrika matching, like any offline match making, considers Guna Milan and Manglik dosha.
						</p>
						<p className="text-[#333355]/80 text-sm sm:text-base mb-6">
							At Astro Vedic Kundli, we study Ashtakoota (8 aspects), Manglik dosha,
							Navamsa chart and planetary positions to provide a clear picture of the
							strengths and challenges in a relationship, along with practical
							guidance and remedies.
						</p>
						<div className="grid gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{[
								{ src: "/matchmaking/Kundli.webp", title: "Kundli Matching" },
								{ src: "/matchmaking/Compatibility.webp", title: "Compatibility" },
								{ src: "/matchmaking/Dosha.webp", title: "Dosha Analysis" },
								{ src: "/matchmaking/Nakshatra.webp", title: "Nakshatra" },
								{ src: "/matchmaking/Relationship.webp", title: "Relationship Insights" },
								{ src: "/matchmaking/Vedic.webp", title: "Vedic Guidance" },
							].map((item) => (
								<div
									key={item.src}
									className="flex flex-col rounded-2xl border border-[#333355]/10 bg-[#FCF3E4]/40 overflow-hidden shadow-sm"
								>
									<div className="relative h-32 sm:h-36 md:h-40 w-full bg-white">
										<Image
											src={item.src}
											alt={item.title}
											fill
											className="object-contain p-2 sm:p-3"
											sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
										/>
									</div>
									<div className="px-4 py-3">
										<h3 className="text-sm sm:text-base font-semibold text-[#333355]">
											{item.title}
										</h3>
									</div>
								</div>
							))}
						</div>
					</section>

					{/* Key Checks Card Grid */}
					<section className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
						<h2 className="text-2xl md:text-3xl font-bold text-[#333355] mb-6">
							What We Check in Matchmaking
						</h2>
						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							<div className="rounded-2xl border border-[#333355]/10 bg-[#FCF3E4]/60 p-5">
								<h3 className="text-lg font-semibold text-[#333355] mb-2">
									36-Gun Matching (Ashtakoota)
								</h3>
								<p className="text-sm text-[#333355]/80">
									Varna, Vashya, Tara, Yoni, Graha Maitri, Gana, Bhakoot and Nadi –
									all 8 kootas are analysed to see overall compatibility score.
								</p>
							</div>

							<div className="rounded-2xl border border-[#333355]/10 bg-[#FCF3E4]/60 p-5">
								<h3 className="text-lg font-semibold text-[#333355] mb-2">
									Manglik &amp; Dosha Analysis
								</h3>
								<p className="text-sm text-[#333355]/80">
									Check for Manglik dosha, Kaal Sarp, Pitra dosha and other critical
									combinations that may affect marriage and remedies to balance them.
								</p>
							</div>

							<div className="rounded-2xl border border-[#333355]/10 bg-[#FCF3E4]/60 p-5">
								<h3 className="text-lg font-semibold text-[#333355] mb-2">
									Emotional &amp; Mental Harmony
								</h3>
								<p className="text-sm text-[#333355]/80">
									Moon, Venus and Jupiter are analysed to understand emotional nature,
									expectations, attachment style and ability to handle conflicts.
								</p>
							</div>

							<div className="rounded-2xl border border-[#333355]/10 bg-[#FCF3E4]/60 p-5">
								<h3 className="text-lg font-semibold text-[#333355] mb-2">
									Family &amp; Lifestyle Compatibility
								</h3>
								<p className="text-sm text-[#333355]/80">
									Houses related to family, home, finances and comforts are studied
									to see overall lifestyle harmony after marriage.
								</p>
							</div>

							<div className="rounded-2xl border border-[#333355]/10 bg-[#333355]/5 p-5">
								<h3 className="text-lg font-semibold text-[#333355] mb-2">
									Longevity of Relationship
								</h3>
								<p className="text-sm text-[#333355]/80">
									7th house, its lord and supporting houses are checked for stability,
									commitment and long-term support between partners.
								</p>
							</div>

							<div className="rounded-2xl border border-[#333355]/10 bg-[#FCF3E4]/60 p-5">
								<h3 className="text-lg font-semibold text-[#333355] mb-2">
									Remedies &amp; Guidance
								</h3>
								<p className="text-sm text-[#333355]/80">
									Simple and practical remedies like puja, mantra, daan and lifestyle
									changes to strengthen weak areas in the relationship chart.
								</p>
							</div>
						</div>
					</section>

					{/* How It Works */}
					<section className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
						<h2 className="text-2xl md:text-3xl font-bold text-[#333355] mb-6">
							How Our Matchmaking Process Works
						</h2>
						<div className="grid gap-6 md:grid-cols-4">
							<div className="flex flex-col gap-3">
								<div className="w-9 h-9 rounded-full bg-[#FF7B60]/10 text-[#FF7B60] font-semibold flex items-center justify-center text-sm">
									1
								</div>
								<h3 className="text-base font-semibold text-[#333355]">
									Share Birth Details
								</h3>
								<p className="text-sm text-[#333355]/80">
									Date, time and place of birth for both partners or prospects.
								</p>
							</div>

							<div className="flex flex-col gap-3">
								<div className="w-9 h-9 rounded-full bg-[#FF7B60]/10 text-[#FF7B60] font-semibold flex items-center justify-center text-sm">
									2
								</div>
								<h3 className="text-base font-semibold text-[#333355]">
									Detailed Kundli Matching
								</h3>
								<p className="text-sm text-[#333355]/80">
									We analyse charts, Gun Milan, doshas and planetary strengths.
								</p>
							</div>

							<div className="flex flex-col gap-3">
								<div className="w-9 h-9 rounded-full bg-[#FF7B60]/10 text-[#FF7B60] font-semibold flex items-center justify-center text-sm">
									3
								</div>
								<h3 className="text-base font-semibold text-[#333355]">
									Get Matchmaking Report
								</h3>
								<p className="text-sm text-[#333355]/80">
									Clear explanation of compatibility, strengths, challenges and timing.
								</p>
							</div>

							<div className="flex flex-col gap-3">
								<div className="w-9 h-9 rounded-full bg-[#FF7B60]/10 text-[#FF7B60] font-semibold flex items-center justify-center text-sm">
									4
								</div>
								<h3 className="text-base font-semibold text-[#333355]">
									Remedies &amp; Next Steps
								</h3>
								<p className="text-sm text-[#333355]/80">
									Personalized guidance to strengthen your relationship path.
								</p>
							</div>
						</div>
					</section>

					{/* Why Online Free Kundli Matching */}
					<section className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
						<h2 className="text-2xl md:text-3xl font-bold text-[#333355] mb-4">
							Why Choose Online Free Kundli Matching?
						</h2>
						<div className="space-y-6">
							<div className="space-y-3 text-sm sm:text-base text-[#333355]/80">
								<p>
									Many families still prefer visiting their trusted astrologers for detailed
									kundli matching of their sons and daughters. While this is valuable, it
									can also be time-consuming and leaves room for manual calculation errors in
									such an important decision.
								</p>
								<p>
									For your convenience, Astro Vedic Kundli offers free kundli matching by
									name and date of birth. Here are some key reasons why online Kundli Milan
									is a great choice:
								</p>
							</div>

							<div className="grid gap-4 md:grid-cols-2">
								<div className="rounded-2xl border border-[#333355]/10 bg-[#FCF3E4]/70 p-4 flex gap-3">
									<div className="mt-1 h-6 w-6 rounded-full bg-[#FF7B60]/10 flex items-center justify-center text-[11px] font-semibold text-[#FF7B60]">
										1
									</div>
									<div>
										<h3 className="text-sm sm:text-base font-semibold text-[#333355] mb-1">
											Free Kundli Matching
										</h3>
										<p className="text-xs sm:text-sm text-[#333355]/80">
											The service is completely free, so you get guidance on
												compatibility without spending anything, helping you save money
												in the process.
										</p>
									</div>
								</div>

								<div className="rounded-2xl border border-[#333355]/10 bg-[#FCF3E4]/70 p-4 flex gap-3">
									<div className="mt-1 h-6 w-6 rounded-full bg-[#FF7B60]/10 flex items-center justify-center text-[11px] font-semibold text-[#FF7B60]">
										2
									</div>
									<div>
										<h3 className="text-sm sm:text-base font-semibold text-[#333355] mb-1">
											Saves Time
										</h3>
										<p className="text-xs sm:text-sm text-[#333355]/80">
											Online kundali matching generates an instant compatibility report,
												so decisions around marriage matching can be taken faster without
												multiple visits.
										</p>
									</div>
								</div>

								<div className="rounded-2xl border border-[#333355]/10 bg-[#FCF3E4]/70 p-4 flex gap-3">
									<div className="mt-1 h-6 w-6 rounded-full bg-[#FF7B60]/10 flex items-center justify-center text-[11px] font-semibold text-[#FF7B60]">
										3
									</div>
									<div>
										<h3 className="text-sm sm:text-base font-semibold text-[#333355] mb-1">
											Reliable Predictions
										</h3>
										<p className="text-xs sm:text-sm text-[#333355]/80">
											System-based calculations minimise human error and follow
												standard rules, helping you get consistent and dependable
												results.
										</p>
									</div>
								</div>

								<div className="rounded-2xl border border-[#333355]/10 bg-[#FCF3E4]/70 p-4 flex gap-3">
									<div className="mt-1 h-6 w-6 rounded-full bg-[#FF7B60]/10 flex items-center justify-center text-[11px] font-semibold text-[#FF7B60]">
										4
									</div>
									<div>
										<h3 className="text-sm sm:text-base font-semibold text-[#333355] mb-1">
											Detailed Online Report
										</h3>
										<p className="text-xs sm:text-sm text-[#333355]/80">
											You receive a structured view of Gun Milan, Ashtakoot score and
												Mangal dosh analysis, making it easier to understand the
												relationship dynamics.
										</p>
									</div>
								</div>

								<div className="rounded-2xl border border-[#333355]/10 bg-[#FCF3E4]/70 p-4 flex gap-3">
									<div className="mt-1 h-6 w-6 rounded-full bg-[#FF7B60]/10 flex items-center justify-center text-[11px] font-semibold text-[#FF7B60]">
										5
									</div>
									<div>
										<h3 className="text-sm sm:text-base font-semibold text-[#333355] mb-1">
											Accessible Anytime, Anywhere
										</h3>
										<p className="text-xs sm:text-sm text-[#333355]/80">
											You can access free kundli matching from any device and any
												location, making it highly convenient for modern busy
												lifestyles and families living in different cities or countries.
										</p>
									</div>
								</div>

								<div className="rounded-2xl border border-[#333355]/10 bg-[#FCF3E4]/70 p-4 flex gap-3">
									<div className="mt-1 h-6 w-6 rounded-full bg-[#FF7B60]/10 flex items-center justify-center text-[11px] font-semibold text-[#FF7B60]">
										6
									</div>
									<div>
										<h3 className="text-sm sm:text-base font-semibold text-[#333355] mb-1">
											Shareable with Family
										</h3>
										<p className="text-xs sm:text-sm text-[#333355]/80">
											Online reports can be easily shared with family members or elders
												for discussion, helping everyone review the same clear information
												before taking a final decision.
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* Small FAQ / Note */}
					<section className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
						<h2 className="text-2xl md:text-3xl font-bold text-[#333355] mb-4">
							Important Note
						</h2>
						<p className="text-sm sm:text-base text-[#333355]/80 mb-3">
							Matchmaking is a spiritual and astrological guidance tool. It helps you
							understand the nature of the relationship, possible challenges and how to
							handle them wisely.
						</p>
						<p className="text-sm sm:text-base text-[#333355]/80 mb-4">
							A strong marriage is built on understanding, respect and effort from
							both sides. Astrology shows tendencies and timing; your free will and
							actions complete the picture.
						</p>
						<p className="text-xs sm:text-sm text-[#333355]/60">
							Disclaimer: The guidance provided is based on Vedic astrological
							calculations. We recommend that final decisions about marriage should
							always be taken with mutual understanding between families and
							individuals.
						</p>
					</section>
				</div>
			</div>
		</div>
	);
}

