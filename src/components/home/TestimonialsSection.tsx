"use client";
import { useState, useRef, useEffect } from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      title: "Small Business - Small Business Owner",
      text: "Astro Vedic Kundli has been an invaluable partner in navigating the complexities of life decisions and spiritual guidance.",
    },
    {
      id: 2,
      name: "Rahul Verma",
      title: "Real Estate - Property Developer",
      text: "The kundli reading was incredibly accurate and helped me make important business decisions with confidence.",
    },
    {
      id: 3,
      name: "Anjali Patel",
      title: "Healthcare - Medical Practice Owner",
      text: "Daily horoscope predictions are spot on! The guidance has been truly helpful in my personal and professional life.",
    },
    {
      id: 4,
      name: "Vikram Singh",
      title: "Technology - Startup Founder",
      text: "The numerology consultation changed my perspective on life. The insights were remarkably accurate and helpful.",
    },
    {
      id: 5,
      name: "Kavita Desai",
      title: "Retail - Business Consultant",
      text: "Excellent astrology consultation! The predictions and remedies have brought positive changes in my life.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [containerWidth, setContainerWidth] = useState(1200);
  const [cardsPerView, setCardsPerView] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);

  // Update cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2); // Tablet: 2 cards
      } else {
        setCardsPerView(3); // Desktop: 3 cards
      }
    };

    // Set initial value
    updateCardsPerView();

    // Add event listener for resize
    window.addEventListener("resize", updateCardsPerView);

    // Cleanup
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const totalSlides = testimonials.length - cardsPerView + 1;
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
    const maxScroll = testimonials.length - cardsPerView;
    const clampedIndex = Math.min(currentIndex, maxScroll);

    const baseOffset = -clampedIndex * (cardPercentage + gapPercentage);
    const dragPercentage = (dragOffset / containerWidth) * 100;
    return baseOffset - dragPercentage;
  };

  return (
    <section className="py-16 px-6 md:px-8 lg:px-12 bg-[#FCF3E4]">
      <div className="max-w-7xl mx-auto">
        {/* Quote Mark */}
        <div className="text-4xl md:text-6xl text-[#333355]/20 font-serif mb-4">
          &ldquo;
        </div>

        {/* Section Heading */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-[#333355] mb-3 md:mb-4">
            Why Clients Rely on Us
          </h2>
          <p className="text-sm md:text-base text-[#333355]/70 max-w-2xl">
            Supporting our businesses with excellent work, timely response, and
            actionable resources that allow us to empower our clients and
            stakeholders.
          </p>
        </div>

        {/* Testimonials Horizontal Scroll */}
        <div
          ref={containerRef}
          className={`mb-8 overflow-hidden ${
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
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gradient-to-br from-[#2B2D42] to-[#1a1b2e] rounded-2xl p-6 md:p-8 text-white shadow-xl min-h-[240px] md:min-h-[280px] flex flex-col justify-between flex-shrink-0"
                style={{
                  width: `calc((100% - ${
                    (cardsPerView - 1) * 24
                  }px) / ${cardsPerView})`,
                }}
              >
                {/* Testimonial Text */}
                <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-6">
                  {testimonial.text}
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-3 md:gap-4">
                  {/* Avatar */}
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#FF7B60] to-[#ff6a4d] rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg shadow-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-sm md:text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-white/70">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between gap-4">
          {/* Dots Indicator - Show 3 dots on mobile */}
          <div className="flex gap-2 items-center">
            {cardsPerView === 1 ? (
              // Mobile: Show only 3 dots - previous, current, next
              <>
                {currentIndex > 0 && (
                  <button
                    onClick={() => goToSlide(currentIndex - 1)}
                    className="w-2 h-2 rounded-full bg-[#8B4513]/30 hover:bg-[#8B4513]/50 transition-all flex-shrink-0"
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
                    className="w-2 h-2 rounded-full bg-[#8B4513]/30 hover:bg-[#8B4513]/50 transition-all flex-shrink-0"
                    aria-label={`Go to slide ${currentIndex + 2}`}
                  />
                )}
              </>
            ) : (
              // Tablet/Desktop: Show progress bar
              <div className="flex-1 max-w-xs h-1 bg-[#333355]/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#8B4513] rounded-full transition-all duration-300"
                  style={{
                    width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%`,
                  }}
                ></div>
              </div>
            )}
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="w-9 h-9 md:w-10 md:h-10 bg-[#8B4513] text-white rounded-lg hover:bg-[#723A0F] transition-all flex items-center justify-center shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous testimonials"
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
              className="w-9 h-9 md:w-10 md:h-10 bg-[#8B4513] text-white rounded-lg hover:bg-[#723A0F] transition-all flex items-center justify-center shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next testimonials"
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
    </section>
  );
}
