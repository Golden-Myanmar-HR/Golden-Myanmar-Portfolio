import React from "react";

const MissionVisionSection = () => {
  const missionPoints = [
    "Connect skilled workers from Myanmar with job opportunities in Japan",
    "Offer reliable recruitment services that meet international standards",
    "Teach language skills that help candidates succeed in real work situations",
  ];

  const visionPoints = [
    "Build respect and share cultures through valuable international experiences.",
    "Help Myanmar and the world understand each other better",
    "Give people chances to live and work in different cultural settings",
  ];

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #F5E49D 0%, #FFFBEF 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          <div className="flex flex-col gap-8">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-black">
                Mission
              </h2>

              <div className="space-y-6 md:min-h-84 lg:min-h-72">
                {missionPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-[#FFDE59] text-black w-8 h-8 rounded-full flex items-center justify-center text-base font-semibold flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <p className="text-base md:text-xl text-[#1e1e1e] leading-relaxed font-semibold">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <img
                src="/images/mission-office.jpg"
                alt="Office workspace representing our mission"
                className="w-full h-84 object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-black">
                Vision
              </h2>

              <div className="space-y-6 md:min-h-84 lg:min-h-72">
                {visionPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-[#FFDE59] text-black w-8 h-8 rounded-full flex items-center justify-center text-base font-semibold flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <p className="text-base md:text-xl text-[#1e1e1e] leading-relaxed font-semibold">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <img
                src="/images/vision-meeting.jpg"
                alt="Meeting room representing our vision"
                className="w-full h-84 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
