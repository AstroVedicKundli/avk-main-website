"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Expertise } from "@/data/astrologers";
import { astrologers, expertiseOptions } from "@/data/astrologers";

const ratingOptions = [
	{ value: "All", label: "All Ratings" },
	{ value: "4.5", label: "4.5+" },
	{ value: "4.7", label: "4.7+" },
	{ value: "4.8", label: "4.8+" },
	{ value: "4.9", label: "4.9+" },
];

const experienceOptions = [
	{ value: "All", label: "All Experience" },
	{ value: "5", label: "5+ yrs" },
	{ value: "10", label: "10+ yrs" },
	{ value: "15", label: "15+ yrs" },
	{ value: "20", label: "20+ yrs" },
];

const priceOptions = [
	{ value: "All", label: "All Prices" },
	{ value: "30", label: "Up to ₹30" },
	{ value: "35", label: "Up to ₹35" },
	{ value: "40", label: "Up to ₹40" },
	{ value: "45", label: "Up to ₹45" },
];

export default function ConsultationPage() {
	const [expertiseFilter, setExpertiseFilter] = useState<Expertise[]>([]);
	const [languageFilter, setLanguageFilter] = useState<string[]>([]);
	const [minRating, setMinRating] = useState<string>("All");
	const [minExperience, setMinExperience] = useState<string>("All");
	const [maxPrice, setMaxPrice] = useState<string>("All");
	const [expertiseOpen, setExpertiseOpen] = useState(false);
	const [languageOpen, setLanguageOpen] = useState(false);
	const [ratingOpen, setRatingOpen] = useState(false);
	const [experienceOpen, setExperienceOpen] = useState(false);
	const [priceOpen, setPriceOpen] = useState(false);
	const expertiseRef = useRef<HTMLDivElement | null>(null);
	const languageRef = useRef<HTMLDivElement | null>(null);
	const ratingRef = useRef<HTMLDivElement | null>(null);
	const experienceRef = useRef<HTMLDivElement | null>(null);
	const priceRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent | TouchEvent) => {
			const target = event.target as Node;
			const isInsideFilter =
				(expertiseRef.current && expertiseRef.current.contains(target)) ||
				(languageRef.current && languageRef.current.contains(target)) ||
				(ratingRef.current && ratingRef.current.contains(target)) ||
				(experienceRef.current && experienceRef.current.contains(target)) ||
				(priceRef.current && priceRef.current.contains(target));

			if (!isInsideFilter) {
				setExpertiseOpen(false);
				setLanguageOpen(false);
				setRatingOpen(false);
				setExperienceOpen(false);
				setPriceOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		document.addEventListener("touchstart", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("touchstart", handleClickOutside);
		};
	}, []);

	const languages = useMemo(
		() =>
			Array.from(new Set(astrologers.flatMap((a) => a.languages))).sort(),
		[]
	);

	const filteredAstrologers = useMemo(() => {
		return astrologers.filter((astro) => {
			if (
				expertiseFilter.length > 0 &&
				!expertiseFilter.includes(astro.expertise)
			)
				return false;
			if (
				languageFilter.length > 0 &&
				!astro.languages.some((lang) => languageFilter.includes(lang))
			)
				return false;
			if (minRating !== "All" && astro.rating < parseFloat(minRating))
				return false;
			if (
				minExperience !== "All" &&
				astro.experience < parseInt(minExperience, 10)
			)
				return false;
			if (maxPrice !== "All" && astro.pricePerMin > parseInt(maxPrice, 10))
				return false;
			return true;
		});
	}, [expertiseFilter, languageFilter, minRating, minExperience, maxPrice]);

	return (
		<div className="min-h-screen bg-gradient-to-b from-[#fefbf6] to-white">
			{/* Spacer for fixed header */}
			<div className="h-24" />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
				{/* Heading & Intro */}
				<div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
					<div>
						<h1 className="text-3xl sm:text-4xl font-bold text-[#333355] mb-2">
							Consult with Expert Astrologers
						</h1>
						<p className="text-sm sm:text-base text-[#333355]/75 max-w-2xl">
							Choose from verified Vedic astrologers with years of experience.
							Check their ratings, expertise, languages and per-minute charges, then
							start a chat or call instantly.
						</p>
					</div>
					<div className="flex items-center gap-2 text-xs sm:text-sm text-[#333355]/70 bg-white/80 border border-[#333355]/10 rounded-2xl px-4 py-2 shadow-sm">
						<span className="h-2 w-2 rounded-full bg-[#00C853]" />
						<span>24x7 Live Consultations</span>
					</div>
				</div>

				{/* Filters */}
				<div className="mb-8 rounded-3xl bg-gradient-to-br from-white via-[#fefbf6] to-[#FFF1EA] border-2 border-[#FFB59F]/30 shadow-lg p-5 sm:p-6 flex flex-col gap-5 relative">
					{/* Decorative elements */}
					<div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-[#FFE1D5]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
					<div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#E4E7FF]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
					
					<div className="flex flex-wrap items-center justify-between gap-3 relative z-10">
						<div>
							<p className="text-sm sm:text-base font-bold text-[#333355] mb-1">
								🔍 Filter Astrologers
							</p>
							<p className="text-xs text-[#333355]/60">
								Expertise, Language, Rating, Experience & Price
							</p>
						</div>
						<div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FFE1D5] to-[#FFF1EA] px-4 py-2 shadow-md">
							<span className="text-xs sm:text-sm font-bold text-[#FF7B60]">
								{filteredAstrologers.length}
							</span>
							<span className="text-xs text-[#333355]/70">
								of {astrologers.length} astrologers
							</span>
						</div>
					</div>
					<div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-5 relative z-10">
						<div ref={expertiseRef} className="relative flex flex-col gap-1.5">
							<label className="text-[11px] sm:text-xs font-bold text-[#333355] uppercase tracking-wide">
								Expertise
							</label>
							<button
								type="button"
								className="flex items-center justify-between rounded-2xl border-2 border-[#FFB59F]/30 bg-white hover:bg-gradient-to-r hover:from-[#FFF1EA] hover:to-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#333355] focus:outline-none focus:ring-2 focus:ring-[#FF7B60] shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
								onClick={() => setExpertiseOpen((prev) => !prev)}
							>
								<span className="truncate">
									{expertiseFilter.length === 0
											? "All Expertise"
											: `${expertiseFilter.length} selected`}
								</span>
								<span className="ml-2 text-xs font-bold text-[#FF7B60]">
									{expertiseOpen ? "▲" : "▼"}
								</span>
							</button>
							{expertiseOpen && (
								<div className="absolute z-20 mt-20 w-60 max-h-64 overflow-auto rounded-2xl bg-white border-2 border-[#FFB59F]/30 shadow-2xl p-3 space-y-1">
									<button
										type="button"
										className="w-full rounded-xl px-3 py-2 text-left text-xs sm:text-sm font-semibold text-[#333355] hover:bg-gradient-to-r hover:from-[#FFE1D5] hover:to-[#FFF1EA] transition-all"
										onClick={() => setExpertiseFilter([])}
									>
										All Expertise
									</button>
									<div className="h-0.5 bg-gradient-to-r from-transparent via-[#FFB59F]/30 to-transparent my-2" />
									{expertiseOptions.map((option) => {
										const checked = expertiseFilter.includes(option);
										return (
											<label
												key={option}
												className="flex items-center gap-3 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium text-[#333355] hover:bg-gradient-to-r hover:from-[#FCF3E4] hover:to-[#FFF1EA] cursor-pointer transition-all hover:scale-[1.02]"
											>
												<input
													type="checkbox"
													checked={checked}
													onChange={() => {
														setExpertiseFilter((prev) =>
															prev.includes(option)
																? prev.filter((v) => v !== option)
																: [...prev, option]
														);
													}}
													className="h-4 w-4 rounded border-2 border-[#FF7B60]/50 text-[#FF7B60] focus:ring-2 focus:ring-[#FF7B60]/30"
												/>
												<span>{option}</span>
											</label>
										);
									})}
								</div>
							)}
						</div>
						<div ref={languageRef} className="relative flex flex-col gap-1.5">
							<label className="text-[11px] sm:text-xs font-bold text-[#333355] uppercase tracking-wide">
								Language
							</label>
							<button
								type="button"
								className="flex items-center justify-between rounded-2xl border-2 border-[#FFB59F]/30 bg-white hover:bg-gradient-to-r hover:from-[#FFF1EA] hover:to-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#333355] focus:outline-none focus:ring-2 focus:ring-[#FF7B60] shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
								onClick={() => setLanguageOpen((prev) => !prev)}
							>
								<span className="truncate">
									{languageFilter.length === 0
											? "All Languages"
											: `${languageFilter.length} selected`}
								</span>
								<span className="ml-2 text-xs font-bold text-[#FF7B60]">
									{languageOpen ? "▲" : "▼"}
								</span>
							</button>
							{languageOpen && (
								<div className="absolute z-20 mt-20 w-52 max-h-64 overflow-auto rounded-2xl bg-white border-2 border-[#FFB59F]/30 shadow-2xl p-3 space-y-1">
									<button
										type="button"
										className="w-full rounded-xl px-3 py-2 text-left text-xs sm:text-sm font-semibold text-[#333355] hover:bg-gradient-to-r hover:from-[#FFE1D5] hover:to-[#FFF1EA] transition-all"
										onClick={() => setLanguageFilter([])}
									>
										All Languages
									</button>
									<div className="h-0.5 bg-gradient-to-r from-transparent via-[#FFB59F]/30 to-transparent my-2" />
									{languages.map((lang) => {
										const checked = languageFilter.includes(lang);
										return (
											<label
												key={lang}
												className="flex items-center gap-3 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium text-[#333355] hover:bg-gradient-to-r hover:from-[#FCF3E4] hover:to-[#FFF1EA] cursor-pointer transition-all hover:scale-[1.02]"
											>
												<input
													type="checkbox"
													checked={checked}
													onChange={() => {
														setLanguageFilter((prev) =>
															prev.includes(lang)
																? prev.filter((v) => v !== lang)
																: [...prev, lang]
														);
													}}
													className="h-4 w-4 rounded border-2 border-[#FF7B60]/50 text-[#FF7B60] focus:ring-2 focus:ring-[#FF7B60]/30"
												/>
												<span>{lang}</span>
											</label>
										);
									})}
								</div>
							)}
						</div>
						<div ref={ratingRef} className="relative flex flex-col gap-1.5">
							<label className="text-[11px] sm:text-xs font-bold text-[#333355] uppercase tracking-wide">
								Min Rating
							</label>
							<button
								type="button"
								className="flex items-center justify-between rounded-2xl border-2 border-[#FFB59F]/30 bg-white hover:bg-gradient-to-r hover:from-[#FFF1EA] hover:to-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#333355] focus:outline-none focus:ring-2 focus:ring-[#FF7B60] shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
								onClick={() => setRatingOpen((prev) => !prev)}
							>
								<span className="truncate">
									{ratingOptions.find((o) => o.value === minRating)?.label ??
											"All Ratings"}
								</span>
								<span className="ml-2 text-xs font-bold text-[#FF7B60]">
									{ratingOpen ? "▲" : "▼"}
								</span>
							</button>
							{ratingOpen && (
								<div className="absolute z-20 mt-20 w-44 max-h-64 overflow-auto rounded-2xl bg-white border-2 border-[#FFB59F]/30 shadow-2xl p-3 space-y-1">
									{ratingOptions.map((option) => (
										<button
											key={option.value}
											type="button"
											className={`w-full rounded-xl px-3 py-2 text-left text-xs sm:text-sm font-semibold transition-all hover:scale-[1.02] ${
												minRating === option.value
														? "bg-gradient-to-r from-[#FFE1D5] to-[#FFF1EA] text-[#FF7B60] shadow-sm"
														: "text-[#333355] hover:bg-gradient-to-r hover:from-[#FCF3E4] hover:to-[#FFF1EA]"
											}`}
											onClick={() => {
												setMinRating(option.value);
												setRatingOpen(false);
											}}
										>
											{option.label}
										</button>
									))}
								</div>
							)}
						</div>
						<div ref={experienceRef} className="relative flex flex-col gap-1.5">
							<label className="text-[11px] sm:text-xs font-bold text-[#333355] uppercase tracking-wide">
								Min Experience
							</label>
							<button
								type="button"
								className="flex items-center justify-between rounded-2xl border-2 border-[#FFB59F]/30 bg-white hover:bg-gradient-to-r hover:from-[#FFF1EA] hover:to-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#333355] focus:outline-none focus:ring-2 focus:ring-[#FF7B60] shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
								onClick={() => setExperienceOpen((prev) => !prev)}
							>
								<span className="truncate">
									{experienceOptions.find((o) => o.value === minExperience)?.label ??
											"All Experience"}
								</span>
								<span className="ml-2 text-xs font-bold text-[#FF7B60]">
									{experienceOpen ? "▲" : "▼"}
								</span>
							</button>
							{experienceOpen && (
								<div className="absolute z-20 mt-20 w-44 max-h-64 overflow-auto rounded-2xl bg-white border-2 border-[#FFB59F]/30 shadow-2xl p-3 space-y-1">
									{experienceOptions.map((option) => (
										<button
											key={option.value}
											type="button"
											className={`w-full rounded-xl px-3 py-2 text-left text-xs sm:text-sm font-semibold transition-all hover:scale-[1.02] ${
												minExperience === option.value
														? "bg-gradient-to-r from-[#FFE1D5] to-[#FFF1EA] text-[#FF7B60] shadow-sm"
														: "text-[#333355] hover:bg-gradient-to-r hover:from-[#FCF3E4] hover:to-[#FFF1EA]"
											}`}
											onClick={() => {
												setMinExperience(option.value);
												setExperienceOpen(false);
											}}
										>
											{option.label}
										</button>
									))}
								</div>
							)}
						</div>
						<div ref={priceRef} className="relative flex flex-col gap-1.5">
							<label className="text-[11px] sm:text-xs font-bold text-[#333355] uppercase tracking-wide">
								Max Price / min
							</label>
							<button
								type="button"
								className="flex items-center justify-between rounded-2xl border-2 border-[#FFB59F]/30 bg-white hover:bg-gradient-to-r hover:from-[#FFF1EA] hover:to-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#333355] focus:outline-none focus:ring-2 focus:ring-[#FF7B60] shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
								onClick={() => setPriceOpen((prev) => !prev)}
							>
								<span className="truncate">
									{priceOptions.find((o) => o.value === maxPrice)?.label ??
											"All Prices"}
								</span>
								<span className="ml-2 text-xs font-bold text-[#FF7B60]">
									{priceOpen ? "▲" : "▼"}
								</span>
							</button>
							{priceOpen && (
								<div className="absolute z-20 mt-20 w-44 max-h-64 overflow-auto rounded-2xl bg-white border-2 border-[#FFB59F]/30 shadow-2xl p-3 space-y-1">
									{priceOptions.map((option) => (
										<button
											key={option.value}
											type="button"
											className={`w-full rounded-xl px-3 py-2 text-left text-xs sm:text-sm font-semibold transition-all hover:scale-[1.02] ${
												maxPrice === option.value
														? "bg-gradient-to-r from-[#FFE1D5] to-[#FFF1EA] text-[#FF7B60] shadow-sm"
														: "text-[#333355] hover:bg-gradient-to-r hover:from-[#FCF3E4] hover:to-[#FFF1EA]"
											}`}
											onClick={() => {
												setMaxPrice(option.value);
												setPriceOpen(false);
											}}
										>
											{option.label}
										</button>
									))}
								</div>
							)}
						</div>
					</div>
				</div>

				{/* Astrologer Cards Grid */}
				<div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
					{filteredAstrologers.map((astro) => (
						<Link
							key={astro.slug}
							href={`/consult-now/${astro.slug}`}
							className="group relative block rounded-3xl bg-gradient-to-br from-[#FFE1D5] via-white to-[#E4E7FF] p-[1px] shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7B60]/70"
						>
							<div className="flex h-full flex-col rounded-[1.4rem] bg-white/95 backdrop-blur-sm p-5 sm:p-6 relative overflow-hidden">
								{/* Decorative gradient blob */}
								<div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#FFE1D5]/30 to-[#E4E7FF]/30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
								
								<div className="relative z-10">
									<div className="flex items-center gap-4 mb-4">
										<div className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-gradient-to-br from-[#FFB59F] to-[#FF7B60] p-[2px] group-hover:scale-110 transition-transform duration-300">
											<div className="h-full w-full rounded-full bg-white p-[2px]">
												<div className="relative h-full w-full rounded-full overflow-hidden">
													<Image
														src={astro.avatar}
														alt={astro.name}
														fill
														className="object-cover rounded-full"
														sizes="80px"
													/>
												</div>
											</div>
											{/* Online indicator */}
											<div className="absolute bottom-0 right-0 w-4 h-4 bg-[#00C853] rounded-full border-2 border-white shadow-md" />
										</div>
										<div className="flex-1 min-w-0">
											<p className="inline-flex items-center rounded-full bg-gradient-to-r from-[#FFF1EA] to-[#FFE1D5] px-3 py-1.5 text-[10px] sm:text-[11px] font-bold text-[#FF7B60] uppercase tracking-wider mb-2 max-w-full truncate shadow-sm">
												{astro.expertise}
											</p>
											<h2 className="text-base sm:text-lg font-bold text-[#333355] truncate group-hover:text-[#FF7B60] transition-colors">
												{astro.name}
											</h2>
											<div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] sm:text-xs">
												<span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#FFF7D6] to-[#FFEFB0] px-2.5 py-1 text-[#9C7A00] shadow-sm">
													<span className="text-yellow-500">★</span>
													<span className="font-bold">{astro.rating.toFixed(1)}</span>
												</span>
												<span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#EEF0FF] to-[#E4E7FF] px-2.5 py-1 text-[#333355] shadow-sm">
													<span className="font-bold">{astro.experience}+ yrs</span>
												</span>
											</div>
										</div>
									</div>

									<div className="mb-4 rounded-2xl bg-gradient-to-br from-[#FDF7F3] to-[#FFF1EA] px-4 py-4 flex items-center justify-between gap-3 text-xs sm:text-sm text-[#333355]/85 border border-[#FFB59F]/20 shadow-sm group-hover:shadow-md transition-shadow">
										<div>
											<p className="text-[11px] sm:text-xs text-[#333355]/60 mb-1 font-medium">
												Consultation Charges
											</p>
											<p className="text-lg sm:text-xl font-bold text-[#FF7B60] flex items-baseline gap-1">
												₹{astro.pricePerMin}
												<span className="text-xs text-[#333355]/60 font-normal">/min</span>
											</p>
										</div>
										<div className="text-right max-w-[50%]">
											<p className="text-[11px] sm:text-xs text-[#333355]/60 mb-1 font-medium">Speaks</p>
											<p className="text-xs sm:text-sm font-semibold text-[#333355] truncate">
												{astro.languages.join(", ")}
											</p>
										</div>
									</div>

									<div className="mt-auto flex gap-3">
										<button
											type="button"
											className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF7B60] to-[#FF6A48] px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 relative overflow-hidden group/btn"
											onClick={(e) => e.preventDefault()}
										>
											<span className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
											<span className="relative">💬</span>
											<span className="relative">Chat</span>
										</button>
										<button
											type="button"
											className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#333355]/30 bg-white px-4 py-2.5 text-xs sm:text-sm font-bold text-[#333355] shadow-md hover:bg-[#333355] hover:text-white hover:border-[#333355] hover:scale-105 active:scale-95 transition-all duration-200"
											onClick={(e) => e.preventDefault()}
										>
											<span>📞</span>
											<span>Call</span>
										</button>
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
