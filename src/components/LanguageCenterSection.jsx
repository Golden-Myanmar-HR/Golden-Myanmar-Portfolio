import React from "react";
import { useTranslation } from "react-i18next";

const LanguageCenterSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#FFFBEF] py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-16">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-black">
              {t("languageCenter.title")}
            </h2>

            <p className="text-lg text-justify md:text-xl text-[#1e1e1e] leading-[2] font-medium">
              {t("languageCenter.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <img
                src="/images/language1.jpg"
                alt={t("languageCenter.images.0.alt")}
                className="w-full h-90 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <img
                src="/images/language2.jpg"
                alt={t("languageCenter.images.1.alt")}
                className="w-full h-90 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguageCenterSection;
