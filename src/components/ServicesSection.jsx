import React from "react";

const ServicesSection = () => {
  const services = [
    {
      title: "Recruitment & Placement Services",
      image: "/images/serviceSection/service2.jpg",
      large: false,
    },
    {
      title: "Technical Intern Training Worker System",
      image: "/images/serviceSection/service3.png",
      large: false,
    },
    {
      title: "Specified skilled Workers System",
      image: "/images/serviceSection/service1.png",
      large: true,
    },
  ];

  return (
    <section className="bg-[#f5e49d] py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-16">
        <div className="flex  justify-between items-start gap-8 mb-8">
          {/* <div className="flex ju space-y-6"> */}
          <h2 className="text-2xl md:text-4xl font-semibold text-black max-w-lg">
            How Can We Help
          </h2>

          <button className="bg-white text-black text-base font-semibold px-6 py-3 rounded-2xl hover:bg-black hover:text-[#f5e49d] transition-all duration-300">
            Check Our Services
          </button>
          {/* </div> */}
        </div>

        <p className="text-lg md:text-xl text-[#1e1e1e] font-semibold leading-relaxed">
          Our company's great mission for all employers to get suitable and
          active employees with much competence. And for all job seekers, we
          ensure them to secure prospective and well-paid jobs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                service.large ? "h-96 md:col-span-2 md:h-96" : "h-96"
              }`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              {/* <div className="absolute top-0 left-0 right-0 bg-black/40 z-100"></div> */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 h-full w-full p-6 pb-6 text-white">
                <h5 className="absolute bottom-10 left-10 right-0 text-xl md:text-2xl font-semibold leading-tight">
                  {service.title}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
