import React from "react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#f5e49d] min-h-[80vh] flex items-center relative overflow-hidden">
      <div className="py-16 px-4 lg:ps-42 ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-8">
            <h1 className="text-3xl md:text-4xl max-w-[550px] lg:text-[40px] font-semibold leading-[1.5] text-black">
              {t("hero.title")}
            </h1>

            <p className="text-lg md:text-xl text-[#1e1e1e] max-w-lg">
              {t("hero.subtitle")}
            </p>

            <button className="bg-white text-[#00000] text-base font-semibold py-4 px-8 rounded-2xl hover:bg-gray-800 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
              {t("hero.cta")}
            </button>
          </div>

          <div className="flex-1 w-full relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero-team.jpg"
                alt="JAY+GOLDEN MYANMAR team"
                className="w-full h-auto rounded-2xl block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
