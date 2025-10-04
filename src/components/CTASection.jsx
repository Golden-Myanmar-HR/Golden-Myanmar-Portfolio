import React from "react";
import { useTranslation } from "react-i18next";

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section
      className="relative h-[500px] lg:h-[600px] flex items-center justify-center lg:justify-end bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url(/images/cta.jpg)" }}
    >
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="max-w-4xl me-0 ms-5 lg:ms-0 lg:me-10 relative z-20 text-white">
        <div className="space-y-8">
          <h1 className="text-3xl md:text-4xl font-semibold max-w-[750px] leading-[1.8] mx-auto">
            {t("cta.title")}
          </h1>

          <button className="bg-[#f5e49d] text-black text-lg font-semibold py-4 px-10 rounded-2xl hover:bg-[#e6d088] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
            {t("cta.button")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
