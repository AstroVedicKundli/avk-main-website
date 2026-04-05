"use client";

import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "How can I book a consultation call with Jyotish Acharya Manish Aggarwal?",
      answer:
        "You can easily book a consultation call with Jyotish Acharya Manish Aggarwal by visiting our booking page and selecting a convenient time slot. Alternatively, you can contact us directly through WhatsApp or call our support team. We offer both online and in-person consultation options.",
    },
    {
      id: 2,
      question: "Does Jyotish Acharya Manish Aggarwal provide astrology courses?",
      answer:
        "Yes, Jyotish Acharya Manish Aggarwal offers comprehensive astrology courses for beginners and advanced learners. Our courses cover Vedic Astrology, Numerology, Palmistry, Lal Kitab, and more. Each course includes live sessions, recorded content, and certification upon completion.",
    },
    {
      id: 3,
      question: 'What is "The Jyotish Acharya Manish Aggarwal Show"?',
      answer:
        '"The Jyotish Acharya Manish Aggarwal Show" is a weekly educational program where Jyotish Acharya Manish Aggarwal shares astrological insights, answers viewer questions, and discusses planetary transits and their effects. The show is broadcast live on YouTube every week and covers topics like career predictions, relationship advice, and remedial measures.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 md:px-8 lg:px-12 bg-[#f7e5c8]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Heading */}
          <div className="lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 mb-4">
              <svg
                className="w-5 h-5 text-[#B91C2E]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-semibold text-[#B91C2E] uppercase tracking-wide">
                Frequently asked questions
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333355] mb-4">
              Frequently asked{" "}
              <span className="text-[#B91C2E]">questions</span>
            </h2>
            <p className="text-base text-[#333355]/70 leading-relaxed">
              Get answers to common questions about our astrology services,
              consultations, and courses. We're here to guide you on your
              spiritual journey.
            </p>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="bg-gray-50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 transition-colors"
                >
                  <span className="text-base md:text-lg font-semibold text-[#333355] flex-1">
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#B91C2E] flex items-center justify-center transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {/* Answer Content */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-sm md:text-base text-[#333355]/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

