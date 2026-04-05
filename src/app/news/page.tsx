import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";

export default function NewsPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-[#f7e5c8]">
      {/* Header */}
      <div className="bg-[#f7e5c8] pt-28 pb-14 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block text-[#B91C2E] text-sm font-bold uppercase tracking-widest mb-3">
            Our Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#333355] mb-4">
            Latest Stories
          </h1>
          <p className="text-[#333355]/60 text-base max-w-xl mx-auto">
            Insights, updates, and wisdom from the world of Vedic Astrology, spirituality, and cosmic guidance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Featured Post */}
        <Link
          href={`/news/${featured.slug}`}
          className="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 mb-14"
        >
          <div className="relative h-72 lg:h-auto overflow-hidden">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 1024px) 100vw, 50vw"
              unoptimized
            />
            <div className="absolute top-4 left-4">
              <span className="bg-[#B91C2E] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase">
                {featured.category}
              </span>
            </div>
            <div className="absolute top-4 right-4">
              <span className="bg-[#333355] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                Featured
              </span>
            </div>
          </div>
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-3 text-sm text-[#333355]/60 mb-4">
              <span>{featured.author}</span>
              <span>•</span>
              <span>{featured.date}</span>
              <span>•</span>
              <span>{featured.readTime}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#333355] mb-4 leading-tight group-hover:text-[#B91C2E] transition-colors">
              {featured.title}
            </h2>
            <p className="text-[#333355]/70 leading-relaxed mb-6">
              {featured.excerpt}
            </p>
            <span className="inline-flex items-center gap-2 text-[#B91C2E] font-semibold text-sm group-hover:gap-3 transition-all">
              Read Full Story
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </Link>

        {/* Rest of Posts */}
        <h2 className="text-2xl font-bold text-[#333355] mb-8">More Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/news/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-52 overflow-hidden flex-shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  unoptimized
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#B91C2E] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs text-[#333355]/60 mb-3">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-[#333355] mb-3 leading-tight group-hover:text-[#B91C2E] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-[#333355]/70 leading-relaxed line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-[#B91C2E] font-semibold text-sm mt-4 group-hover:gap-2 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
