"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function YatraSection() {
  const destinations = [
    {
      id: 1,
      name: "Vaishno Devi",
      image:
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&h=800&fit=crop",
      link: "/yatra/vaishno-devi",
    },
    {
      id: 2,
      name: "Tirupati",
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&h=800&fit=crop",
      link: "/yatra/tirupati",
    },
    {
      id: 3,
      name: "Ujjain Darshan",
      image:
        "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=600&h=800&fit=crop",
      link: "/yatra/ujjain",
    },
    {
      id: 4,
      name: "Varanasi",
      image:
        "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=600&h=800&fit=crop",
      link: "/yatra/varanasi",
    },
    {
      id: 5,
      name: "Amarnath",
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&h=800&fit=crop",
      link: "/yatra/amarnath",
    },
    {
      id: 6,
      name: "Kedarnath",
      image:
        "https://images.unsplash.com/photo-1558431382-27e303142255?w=600&h=800&fit=crop",
      link: "/yatra/kedarnath",
    },
    {
      id: 7,
      name: "Golden Temple",
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=800&fit=crop",
      link: "/yatra/golden-temple",
    },
    {
      id: 8,
      name: "Badrinath",
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&h=800&fit=crop",
      link: "/yatra/badrinath",
    },
    {
      id: 9,
      name: "Somnath",
      image:
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=800&fit=crop",
      link: "/yatra/somnath",
    },
    {
      id: 10,
      name: "Dwarka",
      image:
        "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=600&h=800&fit=crop",
      link: "/yatra/dwarka",
    },
    {
      id: 11,
      name: "Rishikesh",
      image:
        "https://images.unsplash.com/photo-1558431382-27e303142255?w=600&h=800&fit=crop",
      link: "/yatra/rishikesh",
    },
    {
      id: 12,
      name: "Haridwar",
      image:
        "https://images.unsplash.com/photo-1591280063444-d3c514eb6e13?w=600&h=800&fit=crop",
      link: "/yatra/haridwar",
    },
    {
      id: 13,
      name: "Shirdi",
      image:
        "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=600&h=800&fit=crop",
      link: "/yatra/shirdi",
    },
    {
      id: 14,
      name: "Puri Jagannath",
      image:
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&h=800&fit=crop",
      link: "/yatra/puri",
    },
    {
      id: 15,
      name: "Mathura Vrindavan",
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=800&fit=crop&q=80",
      link: "/yatra/mathura",
    },
    {
      id: 16,
      name: "Ayodhya",
      image:
        "https://images.unsplash.com/photo-1586276393635-5ecd8a851acc?w=600&h=800&fit=crop",
      link: "/yatra/ayodhya",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [containerWidth, setContainerWidth] = useState(1200);
  const [cardsPerView, setCardsPerView] = useState(4);
  const containerRef = useRef<HTMLDivElement>(null);

  // Update cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2); // Tablet: 2 cards
      } else {
        setCardsPerView(4); // Desktop: 4 cards
      }
    };

    // Set initial value
    updateCardsPerView();

    // Add event listener for resize
    window.addEventListener("resize", updateCardsPerView);

    // Cleanup
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const totalSlides = destinations.length - cardsPerView + 1;
  const maxIndex = totalSlides - 1;

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
    setDragOffset(0);
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(maxIndex);
    }
    setDragOffset(0);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setDragOffset(0);
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setDragOffset(0);
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();

    const currentX = e.pageX;
    const diff = startX - currentX;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    setIsDragging(false);

    // Determine if we should change slides based on drag distance
    const threshold = 100; // pixels to trigger slide change

    if (dragOffset > threshold && currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    } else if (dragOffset < -threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }

    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    setDragOffset(0);
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    const currentX = e.touches[0].pageX;
    const diff = startX - currentX;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };

  // Calculate transform based on current index and drag offset
  const calculateTransform = () => {
    // Use a percentage-based calculation
    const cardPercentage = 100 / cardsPerView;
    const gapPercentage = (24 / containerWidth) * 100;

    // Clamp the index to prevent over-scrolling
    const maxScroll = destinations.length - cardsPerView;
    const clampedIndex = Math.min(currentIndex, maxScroll);

    const baseOffset = -clampedIndex * (cardPercentage + gapPercentage);
    const dragPercentage = (dragOffset / containerWidth) * 100;
    return baseOffset - dragPercentage;
  };

  return (
    <section className="py-16 px-6 md:px-8 lg:px-12 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-row justify-between items-start mb-8 gap-4">
          <div className="flex-1">
            <p className="text-xs md:text-sm font-semibold text-[#8B4513] tracking-wider mb-1 md:mb-2">
              BEST PLACES TOURISTS VISIT
            </p>
            <h2 className="text-base md:text-2xl lg:text-4xl font-bold text-[#333355]">
              Tour Destinations
            </h2>
          </div>

          <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
            {/* Hide on mobile, show on tablet and up */}
            <div className="text-right hidden md:block">
              <span className="text-xl md:text-2xl lg:text-3xl font-bold text-[#333355]">
                +50
              </span>
              <p className="text-xs md:text-sm text-[#333355]/70 whitespace-nowrap">
                Attractive destinations
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="w-9 h-9 md:w-10 md:h-10 bg-[#333355] text-white rounded-lg hover:bg-[#4a4a6a] transition-all flex items-center justify-center shadow-md"
                aria-label="Previous destinations"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-9 h-9 md:w-10 md:h-10 bg-[#333355] text-white rounded-lg hover:bg-[#4a4a6a] transition-all flex items-center justify-center shadow-md"
                aria-label="Next destinations"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
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
              </button>
            </div>
          </div>
        </div>

        {/* Destinations Grid with Smooth Scroll */}
        <div
          ref={containerRef}
          className={`mb-6 overflow-hidden ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex gap-6 select-none"
            style={{
              transform: `translateX(${calculateTransform()}%)`,
              transition: isDragging ? "none" : "transform 0.3s ease-out",
            }}
          >
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="group relative h-[350px] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 flex-shrink-0"
                style={{
                  width: `calc((100% - ${
                    (cardsPerView - 1) * 24
                  }px) / ${cardsPerView})`,
                }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#333355] to-[#4a4a6a]">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Base Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Hover Gradient Overlay - appears from bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Destination Name - Clickable */}
                <div className="absolute bottom-6 left-6 right-16">
                  <Link href={destination.link} className="inline-block">
                    <h3 className="text-white text-xl md:text-2xl font-bold hover:text-[#FF7B60] transition-colors duration-300 cursor-pointer">
                      {destination.name}
                    </h3>
                  </Link>
                </div>

                {/* Location Pin Icon */}
                <div className="absolute bottom-6 right-6">
                  <div className="w-10 h-10 bg-[#FF7B60] rounded-full flex items-center justify-center shadow-lg">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Dots Indicator - Show 3 dots on mobile, more on desktop */}
          <div className="flex gap-2 items-center">
            {cardsPerView === 1 ? (
              // Mobile: Show only 3 dots - previous, current, next
              <>
                {currentIndex > 0 && (
                  <button
                    onClick={() => goToSlide(currentIndex - 1)}
                    className="w-2 h-2 rounded-full bg-[#333355]/30 hover:bg-[#333355]/50 transition-all flex-shrink-0"
                    aria-label={`Go to slide ${currentIndex}`}
                  />
                )}
                <button
                  className="w-8 h-2 rounded-full bg-[#8B4513] transition-all flex-shrink-0"
                  aria-label={`Current slide ${currentIndex + 1}`}
                />
                {currentIndex < maxIndex && (
                  <button
                    onClick={() => goToSlide(currentIndex + 1)}
                    className="w-2 h-2 rounded-full bg-[#333355]/30 hover:bg-[#333355]/50 transition-all flex-shrink-0"
                    aria-label={`Go to slide ${currentIndex + 2}`}
                  />
                )}
              </>
            ) : (
              // Tablet/Desktop: Show all dots
              Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all flex-shrink-0 ${
                    index === currentIndex
                      ? "w-8 bg-[#8B4513]"
                      : "w-2 bg-[#333355]/30 hover:bg-[#333355]/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))
            )}
          </div>

          {/* View All Link */}
          <Link
            href="/yatra"
            className="inline-flex items-center gap-2 text-[#8B4513] font-semibold text-xs md:text-sm hover:text-[#723A0F] transition-colors group whitespace-nowrap"
          >
            View all destinations
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
