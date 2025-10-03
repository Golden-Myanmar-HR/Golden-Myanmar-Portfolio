import React from "react";
import { useTranslation } from "react-i18next";

const InterviewProcessSection = () => {
  const { t } = useTranslation();

  const processes = [
    {
      badge: t("interviewProcess.processes.0.badge"),
      title: t("interviewProcess.processes.0.title"),
      description: t("interviewProcess.processes.0.description"),
      image: "/images/recruitment-service.jpg",
      reverse: false,
    },
    {
      badge: t("interviewProcess.processes.1.badge"),
      title: t("interviewProcess.processes.1.title"),
      description: t("interviewProcess.processes.1.description"),
      image: "/images/technical-training.jpg",
      reverse: true,
    },
    {
      badge: t("interviewProcess.processes.2.badge"),
      title: (
        <span className="leading-[1.5]">
          {t("interviewProcess.processes.2.title")}
        </span>
      ),
      description: t("interviewProcess.processes.2.description"),
      image: "/images/skilled-workers.jpg",
      reverse: false,
    },
    {
      badge: t("interviewProcess.processes.3.badge"),
      title: (
        <span className="leading-[1.5]">
          {t("interviewProcess.processes.3.title")}
        </span>
      ),
      description: t("interviewProcess.processes.3.description"),
      image: "/images/construction-trainees.jpg",
      reverse: true,
    },
    {
      badge: t("interviewProcess.processes.4.badge"),
      title: t("interviewProcess.processes.4.title"),
      description: t("interviewProcess.processes.4.description"),
      image: "/images/interview5.jpg",
      reverse: false,
    },
  ];

  return (
    <section className="bg-[#fffbef] py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-16">
        <div className="space-y-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-black">
            {t("interviewProcess.title")}
          </h2>

          {processes.map((process, index) => (
            <div key={index}>
              <div className="space-y-4 mb-10 md:mb-5">
                <span className="inline-block bg-yellow-400 text-black font-semibold text-sm px-3 py-1 rounded-full mb-2">
                  {process.badge}
                </span>
                <h3 className="text-2xl md:text-3xl font-semibold text-black leading-tight">
                  {process.title}
                </h3>
              </div>
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16`}
              >
                <p className="order-2 text-justify md:order-1 text-base md:text-[20px] text-[#1e1e1e] leading-[2] font-semibold">
                  {process.description}
                </p>
                <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <img
                    src={process.image}
                    alt={process.title}
                    className="w-full h-[330px] object-cover block"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterviewProcessSection;
