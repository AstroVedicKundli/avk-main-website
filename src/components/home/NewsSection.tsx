import Link from "next/link";
import Image from "next/image";

export default function NewsSection() {
  const newsItems = [
    {
      id: 1,
      date: "Nov 10, 2024",
      author: "By Admin",
      category: "Astrology",
      title: "Complete Step by Step guide to rangoli art using flowers",
      excerpt:
        "Learn how to read and interpret your birth chart with our comprehensive guide to Vedic astrology and ancient wisdom.",
      image:
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop",
      link: "/news/birth-chart-guide",
      featured: true,
    },
    {
      id: 2,
      date: "Nov 08, 2024",
      author: "By Admin",
      category: "Vastu",
      title: "12 Vastu Colors Everyone Should Use in Their Kitchen",
      excerpt:
        "Discover how Vastu colors can enhance positive energy in your kitchen space.",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      link: "/news/vastu-colors",
      featured: false,
    },
    {
      id: 3,
      date: "Nov 05, 2024",
      author: "By Admin",
      category: "Puja",
      title: "Why has Puja been an important part of Hindu religion",
      excerpt:
        "Understanding the significance and spiritual importance of Puja rituals.",
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&h=800&fit=crop",
      link: "/news/puja-importance",
      featured: false,
    },
    {
      id: 4,
      date: "Nov 02, 2024",
      author: "By Admin",
      category: "Astrology",
      title: "Sunday Choghadiya: Muhurat timings for today auspicious work",
      excerpt:
        "Find the most auspicious timings for your important activities today.",
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit=crop",
      link: "/news/choghadiya",
      featured: false,
    },
  ];

  const featuredStory = newsItems.find((item) => item.featured);
  const sideStories = newsItems.filter((item) => !item.featured);

  return (
    <section className="py-16 px-6 md:px-8 lg:px-12 bg-[#FCF3E4]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#333355]">
            Latest Stories
          </h2>
          <Link
            href="/news"
            className="text-xs md:text-sm font-semibold text-[#333355] hover:text-[#FF7B60] transition-colors flex items-center gap-1 border border-[#333355] px-4 py-2 rounded-full hover:border-[#FF7B60]"
          >
            VIEW MORE LINK
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        {/* News Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Featured Story - Left Side */}
          {featuredStory && (
            <Link
              href={featuredStory.link}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Featured Image */}
              <div className="relative h-[280px] md:h-[300px] overflow-hidden flex-shrink-0">
                <Image
                  src={featuredStory.image}
                  alt={featuredStory.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#FF7B60] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {featuredStory.category}
                  </span>
                </div>
              </div>

              {/* Featured Content */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#333355] mb-3 leading-tight group-hover:text-[#FF7B60] transition-colors">
                    {featuredStory.title}
                  </h3>
                  <p className="text-sm text-[#333355]/70 mb-4 line-clamp-2">
                    {featuredStory.excerpt}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#333355]/60">
                  <span>{featuredStory.author}</span>
                  <span>•</span>
                  <span>{featuredStory.date}</span>
                </div>
              </div>
            </Link>
          )}

          {/* Side Stories - Right Side */}
          <div className="flex flex-col gap-4 h-full justify-between">
            {sideStories.map((story) => (
              <Link
                key={story.id}
                href={story.link}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-1"
              >
                {/* Small Thumbnail - No border radius on left to touch corners */}
                <div className="relative w-28 md:w-36 flex-shrink-0 overflow-hidden self-stretch">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="144px"
                  />
                </div>

                {/* Story Content */}
                <div className="flex-1 flex flex-col justify-center p-4">
                  {/* Category */}
                  <span className="text-[#FF7B60] text-xs font-semibold mb-2">
                    {story.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-sm md:text-base font-bold text-[#333355] leading-tight mb-2 line-clamp-2 group-hover:text-[#FF7B60] transition-colors">
                    {story.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs text-[#333355]/60 mb-2 line-clamp-1">
                    {story.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-2 text-xs text-[#333355]/60">
                    <span>{story.author}</span>
                    <span>•</span>
                    <span>{story.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
