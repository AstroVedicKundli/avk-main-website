export default function StatsSection() {
  const stats = [
    {
      number: "75",
      label: "Attached\nWith\nGuru Kul",
    },
    {
      number: "1Lac+",
      label: "Puja\nAnusthan\nDone",
    },
    {
      number: "5k+",
      label: "Students\nEnrolled",
    },
    {
      number: "50k+",
      label: "Consultations\nGiven",
    },
    {
      number: "50+",
      label: "Mantra\nSpecialized\nAttached\nTemple",
    },
    {
      number: "25+",
      label: "Awards in\nthe field\nof Occult",
    },
  ];

  return (
    <section className="py-8 px-6 md:px-8 lg:px-12 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#333355] rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <div className="w-32 h-32 md:w-36 md:h-36 bg-[#F5F5F5] rounded-full flex flex-col items-center justify-center shadow-lg">
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#8B4513] mb-2">
                      {stat.number}
                    </h3>
                    <p className="text-xs md:text-sm text-[#8B4513] font-medium leading-tight whitespace-pre-line px-2">
                      {stat.label}
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
