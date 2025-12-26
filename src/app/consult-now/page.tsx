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
				<div className="mb-8 rounded-3xl bg-white/80 border border-[#333355]/10 shadow-sm p-4 sm:p-5 flex flex-col gap-4">
					<div className="flex flex-wrap items-center justify-between gap-3">
						<p className="text-xs sm:text-sm font-medium text-[#333355]">
							Filter by Expertise, Language, Rating, Experience & Price
						</p>
						<p className="text-xs text-[#333355]/60">
							Showing {filteredAstrologers.length} of {astrologers.length} astrologers
						</p>
					</div>
					<div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-5">
						<div ref={expertiseRef} className="relative flex flex-col gap-1">
							<label className="text-[11px] sm:text-xs font-medium text-[#333355]/70">
								Expertise
							</label>
							<button
								type="button"
								className="flex items-center justify-between rounded-2xl border border-[#333355]/20 bg-[#fefbf6] px-3 py-2 text-xs sm:text-sm text-[#333355] focus:outline-none focus:ring-2 focus:ring-[#FF7B60]/50"
								onClick={() => setExpertiseOpen((prev) => !prev)}
							>
								<span className="truncate">
									{expertiseFilter.length === 0
											? "All Expertise"
											: `${expertiseFilter.length} selected`}
								</span>
								<span className="ml-2 text-[10px] text-[#333355]/60">
									{expertiseOpen ? "▲" : "▼"}
								</span>
							</button>
							{expertiseOpen && (
								<div className="absolute z-20 mt-20 w-60 max-h-64 overflow-auto rounded-2xl bg-white border border-[#333355]/15 shadow-lg p-2 space-y-1">
									<button
										type="button"
										className="w-full rounded-xl px-2 py-1.5 text-left text-xs sm:text-sm text-[#333355] hover:bg-[#FCF3E4]"
										onClick={() => setExpertiseFilter([])}
									>
										All Expertise
									</button>
									<div className="h-px bg-[#333355]/10 my-1" />
									{expertiseOptions.map((option) => {
										const checked = expertiseFilter.includes(option);
										return (
											<label
												key={option}
												className="flex items-center gap-2 rounded-xl px-2 py-1.5 text-xs sm:text-sm text-[#333355] hover:bg-[#FCF3E4]/70 cursor-pointer"
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
													className="h-3.5 w-3.5 rounded border border-[#333355]/40 text-[#FF7B60]"
												/>
												<span>{option}</span>
											</label>
										);
									})}
								</div>
							)}
						</div>
						<div ref={languageRef} className="relative flex flex-col gap-1">
							<label className="text-[11px] sm:text-xs font-medium text-[#333355]/70">
								Language
							</label>
							<button
								type="button"
								className="flex items-center justify-between rounded-2xl border border-[#333355]/20 bg-[#fefbf6] px-3 py-2 text-xs sm:text-sm text-[#333355] focus:outline-none focus:ring-2 focus:ring-[#FF7B60]/50"
								onClick={() => setLanguageOpen((prev) => !prev)}
							>
								<span className="truncate">
									{languageFilter.length === 0
											? "All Languages"
											: `${languageFilter.length} selected`}
								</span>
								<span className="ml-2 text-[10px] text-[#333355]/60">
									{languageOpen ? "▲" : "▼"}
								</span>
							</button>
							{languageOpen && (
								<div className="absolute z-20 mt-20 w-52 max-h-64 overflow-auto rounded-2xl bg-white border border-[#333355]/15 shadow-lg p-2 space-y-1">
									<button
										type="button"
										className="w-full rounded-xl px-2 py-1.5 text-left text-xs sm:text-sm text-[#333355] hover:bg-[#FCF3E4]"
										onClick={() => setLanguageFilter([])}
									>
										All Languages
									</button>
									<div className="h-px bg-[#333355]/10 my-1" />
									{languages.map((lang) => {
										const checked = languageFilter.includes(lang);
										return (
											<label
												key={lang}
												className="flex items-center gap-2 rounded-xl px-2 py-1.5 text-xs sm:text-sm text-[#333355] hover:bg-[#FCF3E4]/70 cursor-pointer"
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
													className="h-3.5 w-3.5 rounded border border-[#333355]/40 text-[#FF7B60]"
												/>
												<span>{lang}</span>
											</label>
										);
									})}
								</div>
							)}
						</div>
						<div ref={ratingRef} className="relative flex flex-col gap-1">
							<label className="text-[11px] sm:text-xs font-medium text-[#333355]/70">
								Min Rating
							</label>
							<button
								type="button"
								className="flex items-center justify-between rounded-2xl border border-[#333355]/20 bg-[#fefbf6] px-3 py-2 text-xs sm:text-sm text-[#333355] focus:outline-none focus:ring-2 focus:ring-[#FF7B60]/50"
								onClick={() => setRatingOpen((prev) => !prev)}
							>
								<span className="truncate">
									{ratingOptions.find((o) => o.value === minRating)?.label ??
											"All Ratings"}
								</span>
								<span className="ml-2 text-[10px] text-[#333355]/60">
									{ratingOpen ? "▲" : "▼"}
								</span>
							</button>
							{ratingOpen && (
								<div className="absolute z-20 mt-20 w-44 max-h-64 overflow-auto rounded-2xl bg-white border border-[#333355]/15 shadow-lg p-2 space-y-1">
									{ratingOptions.map((option) => (
										<button
											key={option.value}
											type="button"
											className={`w-full rounded-xl px-2 py-1.5 text-left text-xs sm:text-sm ${
												minRating === option.value
														? "bg-[#FCF3E4] text-[#333355]"
														: "text-[#333355] hover:bg-[#FCF3E4]/70"
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
						<div ref={experienceRef} className="relative flex flex-col gap-1">
							<label className="text-[11px] sm:text-xs font-medium text-[#333355]/70">
								Min Experience
							</label>
							<button
								type="button"
								className="flex items-center justify-between rounded-2xl border border-[#333355]/20 bg-[#fefbf6] px-3 py-2 text-xs sm:text-sm text-[#333355] focus:outline-none focus:ring-2 focus:ring-[#FF7B60]/50"
								onClick={() => setExperienceOpen((prev) => !prev)}
							>
								<span className="truncate">
									{experienceOptions.find((o) => o.value === minExperience)?.label ??
											"All Experience"}
								</span>
								<span className="ml-2 text-[10px] text-[#333355]/60">
									{experienceOpen ? "▲" : "▼"}
								</span>
							</button>
							{experienceOpen && (
								<div className="absolute z-20 mt-20 w-44 max-h-64 overflow-auto rounded-2xl bg-white border border-[#333355]/15 shadow-lg p-2 space-y-1">
									{experienceOptions.map((option) => (
										<button
											key={option.value}
											type="button"
											className={`w-full rounded-xl px-2 py-1.5 text-left text-xs sm:text-sm ${
												minExperience === option.value
														? "bg-[#FCF3E4] text-[#333355]"
														: "text-[#333355] hover:bg-[#FCF3E4]/70"
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
						<div ref={priceRef} className="relative flex flex-col gap-1">
							<label className="text-[11px] sm:text-xs font-medium text-[#333355]/70">
								Max Price / min
							</label>
							<button
								type="button"
								className="flex items-center justify-between rounded-2xl border border-[#333355]/20 bg-[#fefbf6] px-3 py-2 text-xs sm:text-sm text-[#333355] focus:outline-none focus:ring-2 focus:ring-[#FF7B60]/50"
								onClick={() => setPriceOpen((prev) => !prev)}
							>
								<span className="truncate">
									{priceOptions.find((o) => o.value === maxPrice)?.label ??
											"All Prices"}
								</span>
								<span className="ml-2 text-[10px] text-[#333355]/60">
									{priceOpen ? "▲" : "▼"}
								</span>
							</button>
							{priceOpen && (
								<div className="absolute z-20 mt-20 w-44 max-h-64 overflow-auto rounded-2xl bg-white border border-[#333355]/15 shadow-lg p-2 space-y-1">
									{priceOptions.map((option) => (
										<button
											key={option.value}
											type="button"
											className={`w-full rounded-xl px-2 py-1.5 text-left text-xs sm:text-sm ${
												maxPrice === option.value
														? "bg-[#FCF3E4] text-[#333355]"
														: "text-[#333355] hover:bg-[#FCF3E4]/70"
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
							className="group relative block rounded-3xl bg-gradient-to-br from-[#FFE1D5] via-white to-[#E4E7FF] p-[1px] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7B60]/70"
						>
							<div className="flex h-full flex-col rounded-[1.4rem] bg-white/95 backdrop-blur-sm p-4 sm:p-5">
								<div className="flex items-center gap-4 mb-4">
									<div className="relative h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-[#FCF3E4] flex items-center justify-center overflow-hidden ring-2 ring-[#FFB59F]/60 group-hover:ring-[#FF7B60] transition-colors">
										<Image
											src={astro.avatar}
											alt={astro.name}
											fill
											className="object-contain p-2"
											sizes="64px"
										/>
									</div>
									<div className="flex-1 min-w-0">
										<p className="inline-flex items-center rounded-full bg-[#FFF1EA] px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold text-[#FF7B60] uppercase tracking-wide mb-1 max-w-full truncate">
											{astro.expertise}
										</p>
										<h2 className="text-sm sm:text-base font-semibold text-[#333355] truncate">
											{astro.name}
										</h2>
										<div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] sm:text-xs">
											<span className="inline-flex items-center gap-1 rounded-full bg-[#FFF7D6] px-2 py-1 text-[#9C7A00]">
												<span className="text-yellow-500">★</span>
												<span className="font-semibold">{astro.rating.toFixed(1)}</span>
												<span className="text-[#9C7A00]/80">Rating</span>
											</span>
											<span className="inline-flex items-center rounded-full bg-[#EEF0FF] px-2 py-1 text-[#333355]/80">
												<span className="font-semibold">{astro.experience}+ yrs</span>
												<span className="ml-1">Experience</span>
											</span>
										</div>
									</div>
								</div>

								<div className="mb-4 rounded-2xl bg-[#FDF7F3] px-3 py-3 flex items-center justify-between gap-3 text-xs sm:text-sm text-[#333355]/85">
									<div>
										<p className="text-[11px] sm:text-xs text-[#333355]/60 mb-0.5">
											Consultation Charges
										</p>
										<p className="text-base sm:text-lg font-semibold text-[#333355]">
											₹{astro.pricePerMin}/min
										</p>
									</div>
									<div className="text-right max-w-[50%]">
										<p className="text-[11px] sm:text-xs text-[#333355]/60">Speaks</p>
										<p className="text-xs sm:text-sm font-medium text-[#333355] truncate">
											{astro.languages.join(", ")}
										</p>
									</div>
								</div>

								<div className="mt-auto flex gap-3">
									<button
										type="button"
										className="flex-1 inline-flex items-center justify-center rounded-full bg-[#FF7B60] px-3 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-[#ff6a48] transition-colors"
										onClick={(e) => e.preventDefault()}
									>
										<span className="mr-1">💬</span>
										Chat
									</button>
									<button
										type="button"
										className="flex-1 inline-flex items-center justify-center rounded-full border border-[#333355]/20 bg-white px-3 py-2 text-xs sm:text-sm font-semibold text-[#333355] shadow-sm hover:bg-[#333355] hover:text-white transition-colors"
										onClick={(e) => e.preventDefault()}
									>
										<span className="mr-1">📞</span>
										Call
									</button>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
