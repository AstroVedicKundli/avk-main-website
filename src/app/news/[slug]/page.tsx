import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, blogPosts } from "@/data/blogPosts";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FCF3E4]">
      {/* Hero Section */}
      <div className="relative w-full bg-[#FCF3E4] pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[#333355]/50 text-sm mb-6">
            <Link href="/" className="hover:text-[#B91C2E] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/news" className="hover:text-[#B91C2E] transition-colors">
              Latest Stories
            </Link>
            <span>/</span>
            <span className="text-[#333355]/80 line-clamp-1">{post.title}</span>
          </div>

          {/* Category Badge */}
          <span className="inline-block bg-[#B91C2E] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide mb-4">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333355] leading-tight mb-6">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-[#333355]/60 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#B91C2E] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                A
              </div>
              <span>{post.author}</span>
            </div>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-6 -mt-8">
        <div className="relative w-full h-[300px] md:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
            unoptimized
            priority
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Intro */}
            <p className="text-lg text-[#333355]/80 leading-relaxed mb-10 font-medium border-l-4 border-[#B91C2E] pl-5">
              {post.content.intro}
            </p>

            {/* Sections */}
            <div className="space-y-10">
              {post.content.sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-xl md:text-2xl font-bold text-[#333355] mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#B91C2E] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </span>
                    {section.heading}
                  </h2>
                  <p className="text-base text-[#333355]/75 leading-relaxed">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Conclusion */}
            <div className="mt-10 p-6 bg-[#333355] rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#B91C2E]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Conclusion
              </h3>
              <p className="text-white/80 leading-relaxed text-base">
                {post.content.conclusion}
              </p>
            </div>

            {/* Back Button */}
            <div className="mt-10">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-[#B91C2E] font-semibold hover:gap-3 transition-all"
              >
                <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Back to All Stories
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Author Card */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-sm font-bold text-[#B91C2E] uppercase tracking-wide mb-4">
                About the Author
              </h3>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-[#333355] flex items-center justify-center text-white font-bold text-lg">
                  M
                </div>
                <div>
                  <p className="font-bold text-[#333355]">Manish Aggarwal</p>
                  <p className="text-xs text-[#333355]/60">Vedic Astrologer</p>
                </div>
              </div>
              <p className="text-sm text-[#333355]/70 leading-relaxed">
                Gold Medalist from Bhartiya Vidya Bhavan with 18+ years of experience in Vedic Astrology, Numerology & Pooja Path Anushthan.
              </p>
            </div>

            {/* Consult CTA */}
            <div className="bg-[#B91C2E] rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Need Guidance?</h3>
              <p className="text-sm text-white/80 mb-4 leading-relaxed">
                Book a personalised consultation with Astro Manish Aggarwal today.
              </p>
              <Link
                href="/consult-now"
                className="block w-full text-center bg-white text-[#B91C2E] font-bold py-2.5 rounded-xl text-sm hover:bg-[#FCF3E4] transition-colors"
              >
                Consult Now
              </Link>
            </div>

            {/* Share */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-sm font-bold text-[#333355] uppercase tracking-wide mb-4">
                Share this Article
              </h3>
              <div className="flex gap-3">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://astrovedickundli.com/news/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#1877F2] text-white py-2 rounded-lg text-xs font-semibold hover:opacity-90 transition-opacity"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                  Facebook
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://astrovedickundli.com/news/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#1DA1F2] text-white py-2 rounded-lg text-xs font-semibold hover:opacity-90 transition-opacity"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-[#333355] mb-8">More Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/news/${related.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      unoptimized
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#B91C2E] text-white text-xs font-bold px-3 py-1 rounded-full">
                        {related.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-[#333355] text-sm leading-tight mb-2 line-clamp-2 group-hover:text-[#B91C2E] transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-xs text-[#333355]/60">{related.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
