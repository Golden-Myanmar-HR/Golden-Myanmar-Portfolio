import React from "react";
import { useTranslation } from "react-i18next";

const OurService = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#f5e49d] py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-12">
          {t("ourService.title")}
        </h2>

        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <img
                src={t("ourService.services.0.image")}
                alt={t("ourService.services.0.alt")}
                className="w-full h-72 object-cover rounded-lg mb-4"
              />
              <div className="p-6">
                <h3 className="text-xl lg:text-[28px] leading-[1.8] font-semibold text-black mb-5">
                  {t("ourService.services.0.title")}
                </h3>
                <p className="text-gray-700 text-justify leading-relaxed">
                  {t("ourService.services.0.description")}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <img
                src={t("ourService.services.1.image")}
                alt={t("ourService.services.1.alt")}
                className="w-full h-72 object-cover rounded-lg mb-4"
              />
              <div className="p-6">
                <h3
                  className={`text-xl lg:text-[28px] leading-[1.8] font-semibold text-black mb-5 ${
                    t("ourService.services.1.title") === "နည်းပညာ အလုပ်သင် စနစ်"
                      ? "h-auto md:h-[70px] lg:h-[100px]"
                      : ""
                  }`}
                >
                  {t("ourService.services.1.title")}
                </h3>
                <p className="text-gray-700 text-justify leading-relaxed">
                  {t("ourService.services.1.description")}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div>
                <img
                  src={t("ourService.services.2.image")}
                  alt={t("ourService.services.2.alt")}
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="p-6 flex justify-center items-center">
                <div>
                  <h3 className="text-xl lg:text-[28px] max-w-md leading-[1.8] font-semibold text-black mb-5">
                    {t("ourService.services.2.title")}
                  </h3>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    {t("ourService.services.2.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;
