import React from "react";
import { useTranslation } from "react-i18next";

const AboutCompanySection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#f5e49d] py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-16">
        <div className="space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <img
                src="/images/about1.jpg"
                alt="Golden Myanmar HR team members in professional setting"
                className="w-full h-84 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <img
                src="/images/about2.jpg"
                alt="Golden Myanmar HR staff in office environment"
                className="w-full h-84 object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-black">
              {t("aboutCompany.title")}
            </h2>

            <p className="text-base text-justify md:text-xl text-[#1e1e1e] leading-[1.8] font-medium">
              {t("aboutCompany.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-2xl p-4 shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <img
                src="/images/certificate-2.jpg"
                alt="Business registration document"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <img
                src="/images/certificate-3.jpg"
                alt="Professional certification document"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <img
                src="/images/certificate-1.jpg"
                alt="Official license certificate from Ministry of Labor"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompanySection;
