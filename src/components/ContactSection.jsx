import React from "react";
import { useTranslation } from "react-i18next";

function ContactSection() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Header Section */}
      <section
        className="md:min-h-[80vh] min-h-[50vh] py-16 flex items-center justify-center"
        style={{
          background: "linear-gradient(180deg, #F5E49D 0%, #FFFBEF 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 leading-[2]">
          <div className="">
            <h1 className="text-2xl text-justify md:text-3xl lg:text-[40px] leading-[2] text-justify font-bold text-black mb-8">
              {t("contactSection.title")}
            </h1>
            <button className="bg-[#F5E49D] text-black font-semibold py-3 px-8 rounded-xl hover:bg-[#e6d088] transition-colors">
              {t("contactSection.button")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactSection;
