import React from "react";
import { useTranslation } from "react-i18next";

function OurProcess() {
  const { t } = useTranslation();

  const processSteps = [
    {
      id: 1,
      title: t("ourProcess.steps.0.title"),
      description: [
        t("ourProcess.steps.0.description.0"),
        t("ourProcess.steps.0.description.1"),
        t("ourProcess.steps.0.description.2"),
        t("ourProcess.steps.0.description.3"),
      ],
      image: "/images/pc1.jpg",
    },
    {
      id: 2,
      title: t("ourProcess.steps.1.title"),
      description: [
        t("ourProcess.steps.1.description.0"),
        t("ourProcess.steps.1.description.1"),
        t("ourProcess.steps.1.description.2"),
      ],
      image: "/images/pc2.jpg",
    },
    {
      id: 3,
      title: t("ourProcess.steps.2.title"),
      description: [
        t("ourProcess.steps.2.description.0"),
        t("ourProcess.steps.2.description.1"),
        t("ourProcess.steps.2.description.2"),
        t("ourProcess.steps.2.description.3"),
      ],
      image: "/images/pc3.png",
    },
    {
      id: 4,
      title: t("ourProcess.steps.3.title"),
      description: [
        t("ourProcess.steps.3.description.0"),
        t("ourProcess.steps.3.description.1"),
      ],
      image: "/images/pc4.png",
    },
    {
      id: 5,
      title: t("ourProcess.steps.4.title"),
      description: [
        t("ourProcess.steps.4.description.0"),
        t("ourProcess.steps.4.description.1"),
      ],
      image: "/images/pc5.png",
    },
    {
      id: 6,
      title: t("ourProcess.steps.5.title"),
      description: [
        t("ourProcess.steps.5.description.0"),
        t("ourProcess.steps.5.description.1"),
        t("ourProcess.steps.5.description.2"),
        t("ourProcess.steps.5.description.3"),
      ],
      image: "/images/pc6.png",
    },
  ];

  return (
    <section className="py-16 bg-[#FFFBEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className=" leading-[1.5] text-xl md:text-2xl lg:text-4xl font-bold  mb-6">
            {t("ourProcess.title")}
          </h2>
          <p className="text-base leading-[2] text-justify font-semibold text-lg md:text-xl lg:text-[24px] text-[#1E1E1E]">
            {t("ourProcess.description")}
          </p>
        </div>

        <div className="space-y-16">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              //   className="flex flex-col lg:flex-row items-center gap-8"
            >
              <div className="space-y-4 mb-10 md:mb-5">
                <span className="inline-block bg-yellow-400 text-black font-semibold text-sm px-3 py-1 rounded-lg mb-2">
                  Step {step.id}
                </span>
                <h3 className="text-xl md:text-2xl font-semibold text-black leading-tight">
                  {step.title}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                <div>
                  <div className="">
                    <ul className="space-y-5">
                      {step.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex gap-4 items-center">
                          <div className="bg-[#FFDE59] text-black w-8 h-8 rounded-full flex items-center justify-center text-base font-semibold flex-shrink-0 mt-1">
                            {itemIndex + 1}
                          </div>
                          <span className="text-[#1E1E1E] font-medium max-w-md text-[20px]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-80 object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurProcess;
