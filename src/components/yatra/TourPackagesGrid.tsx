"use client";

import Link from "next/link";
import Image from "next/image";

interface TourPackage {
  id: string;
  title: string;
  image: string;
  route: string[];
  startEndPoint: string;
  duration: string;
  meals: string;
  discount: string;
  price: number;
  slug: string;
}

const tourPackages: TourPackage[] = [
  {
    id: "1",
    title: "Exclusive Chardham Yatra by Helicopter",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop&q=80",
    route: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
    startEndPoint: "Dehradun",
    duration: "6 days & 5 nights",
    meals: "Brunch & Dinner",
    discount: "INR 5,000",
    price: 225000,
    slug: "chardham-helicopter",
  },
  {
    id: "2",
    title: "Badrinath Puri Rameshwaram Dwarka Tour",
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop&q=80",
    route: ["Puri", "Dwarka", "Somnath", "Kedarnath", "Rameshwaram"],
    startEndPoint: "Bhubaneshwar / Dwarka",
    duration: "15 days & 14 nights",
    meals: "Brunch & Dinner",
    discount: "INR 4,900",
    price: 76900,
    slug: "char-dham-tour",
  },
  {
    id: "3",
    title: "12 Jyotirlinga Darshan Tour Package",
    image:
      "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&h=600&fit=crop&q=80",
    route: ["Somnath", "Mallikarjuna", "Mahakaleshwar", "Rameshwaram"],
    startEndPoint: "Mumbai / Hyderabad",
    duration: "24 days & 23 nights",
    meals: "Brunch & Dinner",
    discount: "INR 10,500",
    price: 95000,
    slug: "jyotirlinga-tour",
  },
  {
    id: "4",
    title: "Allahabad Ayodhya Varanasi Gaya Tour",
    image:
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&h=600&fit=crop&q=80",
    route: ["Allahabad", "Ayodhya", "Varanasi", "Bodhgaya"],
    startEndPoint: "Allahabad",
    duration: "5 days & 4 nights",
    meals: "Brunch & Dinner",
    discount: "INR 1,500",
    price: 18950,
    slug: "eastern-holy-tour",
  },
  {
    id: "5",
    title: "North India Temple Tour Package",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop&q=80",
    route: ["Haridwar", "Rishikesh", "Varanasi", "Mathura"],
    startEndPoint: "Haridwar",
    duration: "9 days & 8 nights",
    meals: "Brunch & Dinner",
    discount: "INR 2,500",
    price: 37500,
    slug: "north-temple-tour",
  },
  {
    id: "6",
    title: "Muktinath Yatra Tour Package",
    image:
      "https://images.unsplash.com/photo-1585170988020-4e37ea3b3ea9?w=800&h=600&fit=crop&q=80",
    route: ["Kathmandu", "Pokhara", "Jomsom", "Muktinath"],
    startEndPoint: "Kathmandu",
    duration: "8 days & 7 nights",
    meals: "Brunch & Dinner",
    discount: "INR 2,300",
    price: 34000,
    slug: "muktinath-tour",
  },
];

export default function TourPackagesGrid() {
  return (
    <div className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tourPackages.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Tour Image */}
              <div className="relative h-56 w-full">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
                {/* Route Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="flex items-center gap-1 text-white text-xs flex-wrap">
                    <svg
                      className="w-3 h-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {tour.route.map((location, index) => (
                      <span key={index} className="flex items-center">
                        {location}
                        {index < tour.route.length - 1 && (
                          <span className="mx-1">→</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tour Content */}
              <div className="p-5">
                {/* Title */}
                <h3 className="text-lg font-semibold text-[#4169E1] mb-4 line-clamp-2 min-h-[56px]">
                  {tour.title}
                </h3>

                {/* Tour Details Grid */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {/* Start & End Point */}
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#FFF3E0] flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-[#FF9800]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">
                        Start & End Point
                      </p>
                      <p className="text-sm font-semibold text-[#333355] line-clamp-1">
                        {tour.startEndPoint}
                      </p>
                    </div>
                  </div>

                  {/* Tour Duration */}
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#FFF3E0] flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-[#FF9800]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">
                        Tour Duration
                      </p>
                      <p className="text-sm font-semibold text-[#333355] line-clamp-1">
                        {tour.duration}
                      </p>
                    </div>
                  </div>

                  {/* Tour Meals */}
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#FFF3E0] flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-[#FF9800]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Tour Meals</p>
                      <p className="text-sm font-semibold text-[#333355] line-clamp-1">
                        {tour.meals}
                      </p>
                    </div>
                  </div>

                  {/* Offer Discount */}
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#FFF3E0] flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-[#FF9800]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">
                        Offer Discount
                      </p>
                      <p className="text-sm font-semibold text-[#FF4757] line-clamp-1">
                        {tour.discount}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">From</p>
                    <p className="text-2xl font-bold text-[#333355]">
                      {tour.price.toLocaleString("en-IN")}
                      <span className="text-sm font-normal text-gray-500 ml-1">
                        INR
                      </span>
                    </p>
                  </div>
                  <Link
                    href={`/yatra/${tour.slug}`}
                    className="bg-gradient-to-r from-[#E91E63] to-[#D81B60] text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:from-[#D81B60] hover:to-[#C2185B] transition-all shadow-md hover:shadow-lg"
                  >
                    View Tour
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


