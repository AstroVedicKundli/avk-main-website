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
          className="inline-flex items-center gap-2 text-sm text-[#333355]/70 hover:text-[#FF7B60] transition"
        >
          <span className="text-lg">←</span>
          Back to all astrologers
        </Link>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
          <div className="rounded-3xl border border-[#333355]/10 bg-white/80 p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="relative mx-auto h-32 w-32 flex-shrink-0 overflow-hidden rounded-full border-2 border-[#FF7B60]/70 bg-[#FCF3E4] shadow-lg">
                <Image
                  src={astrologer.avatar}
                  alt={astrologer.name}
                  fill
                  className="object-contain p-3"
                />
              </div>

              <div className="flex-1 space-y-3">
                <div className="inline-flex items-center rounded-full bg-[#FFF1EA] px-3 py-1 text-xs font-medium text-[#FF7B60] ring-1 ring-[#FF7B60]/40">
                  {astrologer.expertise}
                </div>
                <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#333355]">
                  {astrologer.name}
                </h1>
                <p className="text-sm text-[#333355]/75">
                  {astrologer.bio}
                </p>

                <div className="mt-4 flex flex-wrap gap-3 text-xs sm:text-sm">
                  <div className="inline-flex items-center gap-1 rounded-full bg-[#FFF7D6] px-3 py-1 text-[#9C7A00]">
                    ⭐ {astrologer.rating} • Top Rated
                  </div>
                  <div className="inline-flex items-center gap-1 rounded-full bg-[#EEF0FF] px-3 py-1 text-[#333355]/80">
                    ⏳ {astrologer.experience}+ yrs experience
                  </div>
                  <div className="inline-flex items-center gap-1 rounded-full bg-[#E8F5E9] px-3 py-1 text-[#2E7D32]">
                    💬 Speaks: {astrologer.languages.join(", ")}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="space-y-4 text-sm text-[#333355]">
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#333355]/70">
                  About
                </h2>
                <p>{astrologer.bio}</p>
                <div className="pt-3 text-sm text-[#333355]/80">
                  <p className="font-semibold text-[#333355]">Education & Training</p>
                  <p className="mt-1">{astrologer.education}</p>
                </div>
              </div>

              <div className="space-y-4 rounded-2xl bg-[#FDF7F3] p-4 sm:p-5 border border-[#333355]/10">
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#333355]/70">
                  Consultation Details
                </h2>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[#333355]/70">Charge</span>
                    <span className="text-base font-semibold text-[#FF7B60]">
                      ₹{astrologer.pricePerMin}/min
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#333355]/70">Available Languages</span>
                    <span className="text-right text-[#333355]">
                      {astrologer.languages.join(", ")}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#333355]/70">Expertise</span>
                    <span className="text-right text-[#333355]">
                      {astrologer.expertise}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <button className="inline-flex flex-1 items-center justify-center rounded-full bg-[#FF7B60] px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#ff6a48]">
                    Chat Now
                  </button>
                  <button className="inline-flex flex-1 items-center justify-center rounded-full border border-[#333355]/20 bg-white px-4 py-2.5 text-sm font-semibold text-[#333355] shadow-lg transition hover:bg-[#333355] hover:text-white">
                    Call Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-[#333355]/10 bg-white/80 p-5 sm:p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#333355]/70">
                Specialisations
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-[#333355]">
                <li>▪️ Marriage & relationship matching</li>
                <li>▪️ Career & business guidance</li>
                <li>▪️ Finance & property decisions</li>
                <li>▪️ Health & spiritual growth</li>
                <li>▪️ Remedies for doshas & obstacles</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-[#333355]/10 bg-white/80 p-5 sm:p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#333355]/70">
                Reviews
              </h2>
              <div className="mt-3 space-y-3 text-sm text-[#333355]">
                {astrologer.reviews.map((review, index) => (
                  <div
                    key={`${review.name}-${index}`}
                    className="rounded-2xl border border-[#333355]/10 bg-[#FDF7F3] p-3.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-semibold text-[#333355]">{review.name}</p>
                      <span className="text-xs text-[#9C7A00]">
                        ⭐ {review.rating.toFixed(1)} • {review.date}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm text-[#333355]/80">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
 
            <div className="rounded-3xl border border-[#333355]/10 bg-gradient-to-br from-[#FFE1D5] via-white to-[#E4E7FF] p-5 sm:p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#333355]">
                How Consultation Works
              </h2>
              <ol className="mt-3 space-y-2 text-sm text-[#333355]">
                <li>1. Choose Chat or Call and complete payment.</li>
                <li>2. Share your birth details & concern briefly.</li>
                <li>3. Get clear answers with practical remedies.</li>
                <li>4. Receive personalised guidance based on your chart.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
