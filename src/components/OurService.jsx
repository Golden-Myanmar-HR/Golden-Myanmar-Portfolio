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
          <div className="rounded-lg overflow-hidden">
            <div className="bg-[#FFFBEF] rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div>
                <img
                  src={t("ourService.services.0.image")}
                  alt={t("ourService.services.0.alt")}
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="px-6 py-6 md:px-14 md:py-10 flex justify-center items-center">
                <div>
                  <h3 className="text-xl lg:text-[28px] leading-[1.8] font-semibold text-black mb-5">
                    {t("ourService.services.0.title")}
                  </h3>
                  <p className="text-black font-semibold text-[14px] lg:text-[16px]  text-justify leading-[2]">
                    {t("ourService.services.0.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#FFFBEF] rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <img
                src={t("ourService.services.1.image")}
                alt={t("ourService.services.1.alt")}
                className="w-full h-72 object-cover rounded-lg"
              />
              <div className="py-6 px-6 md:py-10 md:px-14">
                <h3
                  className={`text-xl lg:text-[28px] leading-[1.8] font-semibold text-black mb-5`}
                >
                  {t("ourService.services.1.title")}
                </h3>
                <p className="text-black font-semibold text-[14px] lg:text-[16px]  text-justify leading-[1.8]">
                  {t("ourService.services.1.description")}
                </p>
              </div>
            </div>

            <div className="bg-[#FFFBEF] rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <img
                src={t("ourService.services.2.image")}
                alt={t("ourService.services.2.alt")}
                className="w-full h-72 object-cover rounded-lg"
              />
              <div className="py-6 px-6 md:py-10 md:px-14">
                <h3 className="text-xl lg:text-[28px] leading-[1.8] font-semibold text-black mb-5">
                  {t("ourService.services.2.title")}
                </h3>
                <p className="text-black font-semibold text-[14px] lg:text-[16px]  text-justify leading-[1.8]">
                  {t("ourService.services.2.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;
