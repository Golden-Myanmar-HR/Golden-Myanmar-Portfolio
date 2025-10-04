import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const services = [
    {
      title: t("services.section.services.0.title"),
      image: "/images/serviceSection/service2.jpg",
      large: false,
    },
    {
      title: t("services.section.services.1.title"),
      image: "/images/serviceSection/service3.png",
      large: false,
    },
    {
      title: t("services.section.services.2.title"),
      image: "/images/serviceSection/service1.png",
      large: true,
    },
  ];

  return (
    <section className="bg-[#f5e49d] py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-16">
        <div className="flex justify-between items-start gap-8 mb-8">
          {/* <div className="flex ju space-y-6"> */}
          <h2 className="text-2xl md:text-4xl font-semibold text-black max-w-xl">
            {t("services.section.title")}
          </h2>

          <button
            onClick={() => navigate("/services")}
            className="hidden md:block bg-white text-black text-base font-semibold px-6 py-3 rounded-2xl hover:bg-black hover:text-[#f5e49d] transition-all duration-300"
          >
            {t("services.section.button")}
          </button>
          {/* </div> */}
        </div>

        <p className="text-lg md:text-xl text-justify text-[#1e1e1e] font-semibold leading-relaxed">
          {t("services.section.description")}
        </p>

        <button
          onClick={() => navigate("/services")}
          className="md:hidden bg-white mt-5 text-black text-base font-semibold px-6 py-3 rounded-2xl hover:bg-black hover:text-[#f5e49d] transition-all duration-300"
        >
          {t("services.section.button")}
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => navigate("/services")}
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
                <h5 className="absolute bottom-10 left-10 right-0 max-w-md leading-[1.8] text-xl md:text-2xl font-semibold">
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
