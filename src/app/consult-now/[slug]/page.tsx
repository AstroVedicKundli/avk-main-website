import Image from "next/image";
import Link from "next/link";
import { astrologers } from "@/data/astrologers";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function AstrologerProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const astrologer = astrologers.find((a) => a.slug === slug);

  if (!astrologer) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#fefbf6] to-white flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-2xl font-semibold text-[#333355] mb-2">Astrologer Not Found</h1>
          <p className="text-[#333355]/70 mb-4">
            We could not find a profile for this astrologer.
          </p>
          <Link
            href="/consult-now"
            className="inline-flex items-center justify-center rounded-full bg-[#FF7B60] px-6 py-2 text-sm font-medium text-white shadow-lg hover:bg-[#ff6a48] transition"
          >
            ← Back to Consult Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fefbf6] to-white">
      <div className="h-24" />
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <Link
          href="/consult-now"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#333355]/70 hover:text-[#FF7B60] transition-all hover:gap-3 group"
        >
          <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
          Back to all astrologers
        </Link>

        <div className="flex flex-col gap-8">
          {/* Main Profile Card */}
          <div className="rounded-3xl border-2 border-[#FFB59F]/30 bg-gradient-to-br from-white via-[#FFFAF5] to-white shadow-2xl p-6 sm:p-8 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br from-[#FFE1D5]/30 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-gradient-to-br from-[#E4E7FF]/30 to-transparent rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center relative z-10">
              <div className="relative mx-auto h-32 w-32 flex-shrink-0 rounded-full bg-gradient-to-br from-[#FFB59F] to-[#FF7B60] p-[3px] shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="h-full w-full rounded-full bg-white p-[3px]">
                  <div className="relative h-full w-full rounded-full overflow-hidden bg-[#FCF3E4]">
                    <Image
                      src={astrologer.avatar}
                      alt={astrologer.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                </div>
                {/* Online indicator */}
                <div className="absolute bottom-1 right-1 w-5 h-5 bg-[#00C853] rounded-full border-3 border-white shadow-lg">
                  <span className="absolute inset-0 bg-[#00C853] rounded-full animate-ping opacity-75" />
                </div>
              </div>

              <div className="flex-1 space-y-3">
                <div className="inline-flex items-center rounded-full bg-gradient-to-r from-[#FFF1EA] to-[#FFE1D5] px-4 py-1.5 text-xs font-bold text-[#FF7B60] uppercase tracking-wider shadow-md">
                  ✨ {astrologer.expertise}
                </div>
                <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#333355]">
                  {astrologer.name}
                </h1>
                <p className="text-sm sm:text-base text-[#333355]/80 leading-relaxed">
                  {astrologer.bio}
                </p>

                <div className="mt-4 flex flex-wrap gap-3 text-xs sm:text-sm">
                  <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FFF7D6] to-[#FFEFB0] px-4 py-2 text-[#9C7A00] font-bold shadow-md">
                    <span className="text-yellow-500">⭐</span>
                    {astrologer.rating} Rating
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EEF0FF] to-[#E4E7FF] px-4 py-2 text-[#333355] font-bold shadow-md">
                    <span>⏳</span>
                    {astrologer.experience}+ years
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#E8F5E9] to-[#C8E6C9] px-4 py-2 text-[#2E7D32] font-bold shadow-md">
                    <span>🗣️</span>
                    {astrologer.languages.join(", ")}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-3 relative z-10">
              <div className="space-y-4 text-sm text-[#333355]">
                <h2 className="text-base font-bold uppercase tracking-wider text-[#333355] flex items-center gap-2">
                  <span className="text-lg">📚</span>
                  About
                </h2>
                <p className="leading-relaxed text-[#333355]/90">{astrologer.bio}</p>
                <div className="pt-3 rounded-2xl bg-gradient-to-br from-[#FFF1EA]/50 to-transparent p-4 border border-[#FFB59F]/20">
                  <p className="font-bold text-[#333355] flex items-center gap-2 mb-2">
                    <span>🎓</span>
                    Education & Training
                  </p>
                  <p className="mt-1 text-[#333355]/80">{astrologer.education}</p>
                </div>
              </div>

              <div className="space-y-4 rounded-2xl bg-gradient-to-br from-[#FDF7F3] to-[#FFF1EA] p-5 sm:p-6 border-2 border-[#FFB59F]/30 shadow-lg">
                <h2 className="text-base font-bold uppercase tracking-wider text-[#333355] flex items-center gap-2">
                  <span className="text-lg">💰</span>
                  Consultation Details
                </h2>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/80 border border-[#FFB59F]/20">
                    <span className="text-[#333355]/70 font-medium">Charge</span>
                    <span className="text-xl font-bold text-[#FF7B60]">
                      ₹{astrologer.pricePerMin}
                      <span className="text-xs text-[#333355]/60 font-normal">/min</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/80 border border-[#FFB59F]/20">
                    <span className="text-[#333355]/70 font-medium">Languages</span>
                    <span className="text-right text-[#333355] font-semibold">
                      {astrologer.languages.join(", ")}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/80 border border-[#FFB59F]/20">
                    <span className="text-[#333355]/70 font-medium">Expertise</span>
                    <span className="text-right text-[#333355] font-semibold">
                      {astrologer.expertise}
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF7B60] to-[#FF6A48] px-5 py-3 text-sm font-bold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 relative overflow-hidden group">
                    <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="relative text-base">💬</span>
                    <span className="relative">Chat Now</span>
                  </button>
                  <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-[#333355]/30 bg-white px-5 py-3 text-sm font-bold text-[#333355] shadow-lg hover:bg-[#333355] hover:text-white hover:border-[#333355] hover:scale-105 transition-all duration-200">
                    <span className="text-base">📞</span>
                    <span>Call Now</span>
                  </button>
                </div>
              </div>

              {/* Specialisations */}
              <div className="space-y-4">
                <h2 className="text-base font-bold uppercase tracking-wider text-[#333355] flex items-center gap-2">
                  <span className="text-lg">⚡</span>
                  Specialisations
                </h2>
                <ul className="space-y-3 text-sm text-[#333355]">
                  <li className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-[#FFF1EA]/50 to-transparent hover:from-[#FFF1EA] transition-colors">
                    <span className="text-[#FF7B60] font-bold">•</span>
                    <span className="font-medium">Marriage & relationship matching</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-[#FFF1EA]/50 to-transparent hover:from-[#FFF1EA] transition-colors">
                    <span className="text-[#FF7B60] font-bold">•</span>
                    <span className="font-medium">Career & business guidance</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-[#FFF1EA]/50 to-transparent hover:from-[#FFF1EA] transition-colors">
                    <span className="text-[#FF7B60] font-bold">•</span>
                    <span className="font-medium">Finance & property decisions</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-[#FFF1EA]/50 to-transparent hover:from-[#FFF1EA] transition-colors">
                    <span className="text-[#FF7B60] font-bold">•</span>
                    <span className="font-medium">Health & spiritual growth</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-[#FFF1EA]/50 to-transparent hover:from-[#FFF1EA] transition-colors">
                    <span className="text-[#FF7B60] font-bold">•</span>
                    <span className="font-medium">Remedies for doshas & obstacles</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Client Reviews - Full Width */}
          <div className="rounded-3xl border-2 border-[#FFB59F]/30 bg-gradient-to-br from-white to-[#FFFAF5] shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
            {/* Decorative quote mark */}
            <div className="absolute top-0 right-0 text-[200px] text-[#FFB59F]/10 font-serif leading-none pointer-events-none">"</div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#333355] flex items-center gap-3">
                  <span className="text-2xl sm:text-3xl">⭐</span>
                  Client Reviews
                </h2>
                <div className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#FFF7D6] to-[#FFEFB0] px-4 py-2 rounded-full shadow-md">
                  <span className="text-2xl">⭐</span>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-[#9C7A00]">{astrologer.rating}</span>
                    <span className="text-xs text-[#9C7A00]/70">Overall Rating</span>
                  </div>
                </div>
              </div>
              
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {astrologer.reviews.map((review, index) => (
                  <div
                    key={`${review.name}-${index}`}
                    className="group rounded-2xl border-2 border-[#FFB59F]/20 bg-gradient-to-br from-white via-[#FDF7F3] to-white p-5 hover:shadow-xl transition-all duration-300 hover:scale-[1.03] hover:border-[#FFB59F]/40 relative"
                  >
                    {/* Quote icon */}
                    <div className="absolute top-3 right-3 text-4xl text-[#FF7B60]/10 font-serif leading-none">"</div>
                    
                    <div className="relative z-10">
                      {/* Rating badge */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-lg ${
                                i < Math.floor(review.rating)
                                  ? "text-yellow-500"
                                  : "text-gray-300"
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="text-sm font-bold text-[#9C7A00] bg-gradient-to-r from-[#FFF7D6] to-[#FFEFB0] px-3 py-1 rounded-full shadow-sm">
                          {review.rating.toFixed(1)}
                        </span>
                      </div>
                      
                      {/* Review text */}
                      <p className="text-sm text-[#333355] leading-relaxed mb-4 italic min-h-[60px]">
                        "{review.comment}"
                      </p>
                      
                      {/* Reviewer info */}
                      <div className="flex items-center justify-between pt-3 border-t border-[#FFB59F]/20">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF7B60] to-[#FFB59F] flex items-center justify-center text-white font-bold text-xs shadow-md">
                            {review.name.charAt(0)}
                          </div>
                          <p className="font-bold text-[#333355] text-sm">{review.name}</p>
                        </div>
                        <p className="text-xs text-[#333355]/60 font-medium">{review.date}</p>
                      </div>
                    </div>
                    
                    {/* Verified badge */}
                    <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#00C853] bg-[#E8F5E9] px-2 py-1 rounded-full">
                        <span>✓</span>
                        Verified
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* How it Works - Full Width */}
          <div className="rounded-3xl border-2 border-[#FFB59F]/30 bg-gradient-to-br from-[#FFE1D5] via-white to-[#E4E7FF] shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-xl font-bold uppercase tracking-wider text-[#333355] flex items-center gap-2 mb-6">
              <span className="text-2xl">📋</span>
              How Consultation Works
            </h2>
            
            {/* Horizontal workflow */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF7B60] to-[#FF6A48] text-white font-bold flex items-center justify-center text-2xl shadow-lg mb-4">
                  1
                </div>
                <p className="text-sm font-semibold text-[#333355] leading-tight">
                  Choose Chat or Call and complete payment
                </p>
              </div>
              
              <div className="flex items-center justify-center text-[#FF7B60] text-3xl font-bold pt-6">
                →
              </div>
              
              <div className="flex-1 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF7B60] to-[#FF6A48] text-white font-bold flex items-center justify-center text-2xl shadow-lg mb-4">
                  2
                </div>
                <p className="text-sm font-semibold text-[#333355] leading-tight">
                  Share your birth details & concern briefly
                </p>
              </div>
              
              <div className="flex items-center justify-center text-[#FF7B60] text-3xl font-bold pt-6">
                →
              </div>
              
              <div className="flex-1 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF7B60] to-[#FF6A48] text-white font-bold flex items-center justify-center text-2xl shadow-lg mb-4">
                  3
                </div>
                <p className="text-sm font-semibold text-[#333355] leading-tight">
                  Get clear answers with practical remedies
                </p>
              </div>
              
              <div className="flex items-center justify-center text-[#FF7B60] text-3xl font-bold pt-6">
                →
              </div>
              
              <div className="flex-1 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF7B60] to-[#FF6A48] text-white font-bold flex items-center justify-center text-2xl shadow-lg mb-4">
                  4
                </div>
                <p className="text-sm font-semibold text-[#333355] leading-tight">
                  Receive personalised guidance based on your chart
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
