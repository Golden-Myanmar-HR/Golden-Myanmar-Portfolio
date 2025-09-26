import React from "react";

const ExpectedGrowthSection = () => {
  return (
    <section className="bg-[#fffbef] py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-16">
        <div className="space-y-16">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-black">
              Expected Growth
            </h2>

            <p className="text-lg md:text-xl text-[#1e1e1e] leading-relaxed font-semibold">
              We are currently planning to expand our market in various
              industries by sending Technical Intern Trainees, Skilled Workers
              and Tokutei workers to Japan. We aim to establish collaborative
              partnerships with supervising organizations interested in mutual
              benefits for both entities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <img
                src="/images/technical-trainees.png"
                alt="Technical intern trainees in industrial setting"
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h4 className="text-2xl md:text-3xl font-semibold text-black text-center">
                  Technical Intern Trainees
                </h4>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <img
                src="/images/abtrrain.png"
                alt="Specified skilled workers in professional environment"
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h4 className="text-2xl md:text-3xl font-semibold text-black text-center">
                  Specified Skilled Workers
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpectedGrowthSection;
