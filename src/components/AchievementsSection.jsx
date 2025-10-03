import React from "react";
import { BsPersonRaisedHand, BsHammer, BsFlag } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const AchievementsSection = () => {
  const { t } = useTranslation();

  const achievements = [
    {
      title: t("achievements.achievements.0.title"),
      image: "/images/tokutei-trainees.jpg",
    },
    {
      title: t("achievements.achievements.1.title"),
      image: "/images/ach1.jpg",
    },
    {
      title: t("achievements.achievements.2.title"),
      image: "/images/ach2.jpg",
    },
  ];

  const stats = [
    {
      title: t("achievements.stats.0.title"),
      count: t("achievements.stats.0.count"),
      icon: BsPersonRaisedHand,
      image: "/images/traning1.png",
    },
    {
      title: t("achievements.stats.1.title"),
      count: t("achievements.stats.1.count"),
      icon: BsHammer,
      image: "/images/traning2.png",
    },
    {
      title: t("achievements.stats.2.title"),
      count: t("achievements.stats.2.count"),
      icon: BsFlag,
      image: "/images/taning3.png",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#f5e49d] to-[#fffbef] py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-16">
        <div className="space-y-16">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-black">
              {t("achievements.title")}
            </h2>

            <p className="text-lg md:text-xl text-[#1e1e1e] text-justify font-semibold leading-[2]">
              {t("achievements.description")}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex-1 relative rounded-2xl overflow-hidden h-80 lg:h-120 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-4 text-white">
                  <h6 className="text-base font-semibold tracking-tight text-center">
                    {achievement.title}
                  </h6>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-8 mt-8">
            {stats.map((stat, index) => {
              return (
                <div
                  key={index}
                  className="flex-1 items-center bg-white rounded-2xl p-8 text-center shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-300 relative"
                >
                  <h5 className="text-2xl font-semibold text-black mb-4">
                    {stat.title}
                  </h5>
                  <div className="w-40 h-40  flex items-center justify-center mx-auto mb-4 text-3xl text-black">
                    <img
                      src={stat.image}
                      alt={stat.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h6 className="text-xl font-semibold text-[#1e1e1e]">
                    {stat.count}
                  </h6>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
