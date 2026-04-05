"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function LearningSection() {
  const [activeTab, setActiveTab] = useState<"videos" | "courses">("videos");

  const videos = [
    {
      id: 1,
      title: "The Arts and Science of Relationships: Understanding Human Needs",
      youtubeId: "U0F-uKUv7Tc",
      youtubeUrl: "https://www.youtube.com/watch?v=U0F-uKUv7Tc",
      category: "Relationships & Self",
      step: "Step 14/50",
      duration: "Course, 80 hours",
    },
    {
      id: 2,
      title: "Positive Psychiatry and Mental Health",
      youtubeId: "cb8dNhZN4Bg",
      youtubeUrl: "https://www.youtube.com/watch?v=cb8dNhZN4Bg",
      category: "Mental Health",
      step: "Step 2/12",
      duration: "Course, 12 hours",
    },
    {
      id: 3,
      title: "Conversations That Inspire: Coaching Learning, Leadership and Change",
      youtubeId: "qnEHnmUIsT8",
      youtubeUrl: "https://www.youtube.com/watch?v=qnEHnmUIsT8",
      category: "Leadership",
      step: "Step 10/30",
      duration: "Course, 35 hours",
    },
    {
      id: 4,
      title: "Wine Tasting: Sensory Techniques for Wine Analysis",
      youtubeId: "OGdXUBoDeYg",
      youtubeUrl: "https://www.youtube.com/watch?v=OGdXUBoDeYg",
      category: "Wine & Aroma",
      step: "Step 9/12",
      duration: "Course, 18 hours",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header with Heading and Tabs */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-6">
          {/* Left: Heading */}
          <div>
            <p className="text-sm md:text-base text-[#FF7B60] font-semibold mb-2 uppercase tracking-wide">
              Learning Resources
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#333355]">
              Educational Content
            </h2>
          </div>

          {/* Right: Tabs */}
          <div className="flex items-center gap-1 border-b-2 border-gray-100">
            <button
              onClick={() => setActiveTab("videos")}
              className={`pb-4 px-6 text-lg font-bold transition-all relative ${
                activeTab === "videos"
                  ? "text-[#333355]"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              Videos
              {activeTab === "videos" && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#333355] rounded-t-full"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab("courses")}
              className={`pb-4 px-6 text-lg font-bold transition-all relative ${
                activeTab === "courses"
                  ? "text-[#333355]"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              Courses
              {activeTab === "courses" && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#333355] rounded-t-full"></div>
              )}
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "videos" ? (
          <div>
            {/* Videos Grid - Horizontal scroll on mobile, grid on desktop */}
            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory scrollbar-hide pb-4">
              {videos.map((video) => (
                <a
                  key={video.id}
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 flex-shrink-0 w-[280px] md:w-auto snap-start"
                >
                  {/* Video Thumbnail */}
                  <div className="relative aspect-video overflow-hidden bg-gray-800 rounded-t-xl">
                    {/* YouTube Thumbnail */}
                    <Image
                      src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                      alt={video.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                    {/* Category - Bottom Left */}
                    <div className="absolute bottom-3 left-3">
                      <p className="text-white text-sm font-medium">
                        {video.category}
                      </p>
                    </div>

                    {/* Play Button - Bottom Right */}
                    <div className="absolute bottom-3 right-3">
                      <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <svg
                          className="w-5 h-5 text-gray-800 ml-0.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-4">
                    <h3 className="text-gray-900 font-bold text-sm leading-tight mb-2 line-clamp-2">
                      {video.title}
                    </h3>

                    <p className="text-gray-500 text-xs">{video.duration}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* View All Button - Bottom */}
            <div className="text-center mt-10">
              <Link
                href="https://www.youtube.com/@astrovedickundli"
                target="_blank"
                className="inline-flex items-center gap-2 bg-[#333355] text-white px-8 py-3 rounded-lg font-bold text-sm hover:bg-[#FF7B60] transition-all shadow-md hover:shadow-lg transform hover:scale-105"
              >
                View All
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ) : (
          // Courses - Coming Soon
          <div className="flex flex-col items-center justify-center py-20">
            <div className="text-center max-w-md">
              <div className="w-20 h-20 bg-[#333355]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-[#333355]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#333355] mb-3">
                Courses Coming Soon
              </h3>
              <p className="text-gray-500">
                We are working on bringing you comprehensive astrology courses.
                Stay tuned!
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

