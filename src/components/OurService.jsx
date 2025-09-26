import React from "react";

const OurService = () => {
  return (
    <section className="bg-[#f5e49d] py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-12">
          Our Services
        </h2>

        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <img
                src="/images/serviceSection/service2.jpg"
                alt="Recruitment & Placement training session"
                className="w-full h-72 object-cover rounded-lg mb-4"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-3">
                  Recruitment & Placement
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The Technical Intern Training System provides opportunities
                  for Myanmar nationals to develop technical knowledge and
                  practical skills in Japan. After completing the program,
                  trainees are expected to contribute these skills towards the
                  advancement of their home countries' economies.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <img
                src="/images/serviceSection/service3.png"
                alt="Specified skilled workers in construction"
                className="w-full h-72 object-cover rounded-lg mb-4"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-3">
                  Specified skilled workers system
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The Specified Skilled Worker System is a framework established
                  to admit foreign nationals who possess designated levels of
                  expertise and technical skills, particularly in industrial
                  sectors that face challenges in securing sufficient domestic
                  labor.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div>
                <img
                  src="/images/serviceSection/service1.png"
                  alt="Tokutei Workers in caregiving"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="p-6 flex justify-center items-center">
                <div>
                  <h3 className="text-[28px] max-w-md font-semibold text-black mb-3">
                    Specified Skilled Worker System
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The Specified Skilled Worker System is a framework
                    established to admit foreign nationals who possess
                    designated levels of expertise and technical skills,
                    particularly in Industrial sectors that face challenges in
                    securing sufficient domestic labor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;
