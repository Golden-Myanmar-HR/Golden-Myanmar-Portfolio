import React from "react";

const ServiceHeroSection = () => {
  return (
    <div className="mx-auto p-4 lg:px-16 bg-[#F5E49D]">
      <section
        className="relative min-h-[90vh] flex items-center rounded-2xl my-8 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/serviceBanner.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="max-w-4xl px-4 relative ps-20 z-20 text-white">
          <div className="space-y-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Your Gateway to Global Career Opportunities
            </h1>

            <p className="text-lg md:text-xl max-w-2xl leading-relaxed">
              We Focused on connecting talented people with Job opportunities
              and build a Successful Career.
            </p>

            <button className="bg-[#fff] text-black text-base font-semibold py-4 px-8 rounded-2xl hover:bg-[#e6d088] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
              Let's Work Together
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceHeroSection;
