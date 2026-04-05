export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Varshphal Report 2026",
      description: "Your Yearly Personalised Prediction for 2026",
    },
    {
      id: 2,
      title: "Kundli Pathshala Webinar",
      description: "Live Kundli Pathshala Webinar on Zoom",
    },
    {
      id: 3,
      title: "Lal Kitab Report",
      description: "Lal Kitab remedies attract success, prosperity, and positivity.",
    },
    {
      id: 4,
      title: "Fortune Report Plus",
      description: "Your Fortune Report Plus Gives the Big Picture",
    },
    {
      id: 5,
      title: "Book Consultation Call",
      description: "Personalized guidance on life, love, career, business, money",
    },
    {
      id: 6,
      title: "Finance Report",
      description: "Get your Personalised Finance Report",
    },
    {
      id: 7,
      title: "Occult Gurukul",
      description: "Learn Astrology with Astro Arun Pandit",
    },
    {
      id: 8,
      title: "Gemsmantra",
      description: "GemsMantra celebrates the wonders of gemstones by connecting people with their beauty, energy, and purpose.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7e5c8]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-8 lg:px-12 bg-gradient-to-br from-[#333355] to-[#4a4a6a]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto">
            Comprehensive astrological services based on ancient Vedic wisdom to guide your life&apos;s journey
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#333355]/10 hover:-translate-y-1 flex flex-col"
              >
                {/* Icon Circle */}
                <div className="w-24 h-24 bg-[#FF7B60] rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <div className="w-12 h-12 bg-white/20 rounded-lg"></div>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-[#8B4513] mb-4 text-center">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-[#333355]/80 mb-6 leading-relaxed text-center flex-grow">
                  {service.description}
                </p>

                {/* CTA Button */}
                <button className="w-full bg-[#8B4513] text-white py-3 rounded-lg font-semibold hover:bg-[#723A0F] transition-all shadow-md hover:shadow-lg">
                  Order Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

