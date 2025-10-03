import React from "react";
import { MdOutlinePhone, MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { TiLocationOutline } from "react-icons/ti";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const usefulLinks = [
    {
      label: t("nav.about"),
      href: "/about",
    },
    {
      label: t("footer.services"),
      href: "/services",
    },
    {
      label: t("nav.contact"),
      href: "/contact",
    },
  ];

  return (
    <footer className="bg-[#FFFBEF] pt-16 pb-8 border-t border-gray-200">
      <div className="mx-auto px-4 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          <div className="space-y-6 col-span-1 lg:col-span-2">
            <img
              src="/images/logo.png"
              alt="Golden Myanmar HR"
              className="h-16 w-auto"
            />

            <p className="text-base text-justify font-semibold text-black leading-relaxed max-w-md">
              {t("footer.description")}
            </p>

            <div className="flex space-x-4">
              <button className="cursor-pointer hover:scale-110 transition-all duration-300">
                <img src="/images/viber.png" alt="Viber" className="w-8 h-8" />
              </button>
              <button className="cursor-pointer hover:scale-110 transition-all duration-300">
                <img
                  src="/images/facebook.png"
                  alt="Facebook"
                  className="w-8 h-8"
                />
              </button>
            </div>
          </div>

          <div className="space-y-6 col-span-1">
            <h6 className="text-2xl font-semibold text-black">
              {t("footer.quickLinks")}
            </h6>

            <div className="space-y-4">
              {usefulLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.href}
                  className="block text-base text-gray-600 hover:text-black transition-colors"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="space-y-6 col-span-1">
            <h6 className="text-2xl font-semibold text-black">
              {t("footer.contact")}
            </h6>

            <div className="space-y-6">
              <div className="flex cursor-pointer items-center space-x-3">
                <MdOutlinePhone width={24} height={24} color="#000000" />
                <span className="text-base">+959 791602729</span>
              </div>

              <div className="flex cursor-pointer items-center space-x-3">
                <MdOutlineEmail width={24} height={24} color="#000000" />
                <span className="text-base">goldenmmhr@gmail.com</span>
              </div>

              <div className="flex cursor-pointer space-x-3">
                <div>
                  <TiLocationOutline width={24} height={24} color="#000000" />
                </div>
                <span className="text-justify">{t("footer.address")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
