import React from "react";
import { useTranslation } from "react-i18next";

const PartnershipSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#fffbef] py-20">
      <div className="px-4 ms-0 lg:px-0 lg:ms-42">
        <h2 className="text-3xl md:text-4xl font-semibold text-black leading-tight mb-10">
          {t("partnership.title")}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
          <div className="space-y-8">
            <p className="text-base text-justify md:text-xl font-semibold text-[#1e1e1e] leading-[2] font-medium">
              {t("partnership.description")}
            </p>
          </div>

          <div className="rounded-l-xl overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <img
              src="/images/partnership.jpg"
              alt={t("partnership.title")}
              className="w-full h-full object-cover block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
