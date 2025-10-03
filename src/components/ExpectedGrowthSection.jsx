import React from "react";
import { useTranslation } from "react-i18next";

const ExpectedGrowthSection = () => {
  const { t } = useTranslation();

  const categories = [
    {
      title: t("expectedGrowth.categories.0.title"),
      image: t("expectedGrowth.categories.0.image"),
      alt: t("expectedGrowth.categories.0.alt"),
    },
    {
      title: t("expectedGrowth.categories.1.title"),
      image: t("expectedGrowth.categories.1.image"),
      alt: t("expectedGrowth.categories.1.alt"),
    },
  ];
  return (
    <section className="bg-[#fffbef] py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-16">
        <div className="space-y-16">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-black">
              {t("expectedGrowth.title")}
            </h2>

            <p className="text-lg text-justify md:text-xl text-[#1e1e1e] leading-relaxed font-semibold">
              {t("expectedGrowth.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={category.image}
                  alt={category.alt}
                  className="w-full h-72 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-2xl md:text-[28px] font-semibold text-black text-center">
                    {category.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpectedGrowthSection;
