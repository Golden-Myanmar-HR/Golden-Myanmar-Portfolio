import React from "react";
import {
  MdOutlinePhone,
  MdOutlineEmail,
  MdOutlineLocationOn,
} from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaViber } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();

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
    <footer className="bg-white pt-16 pb-8">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 md:gap-8">
          {/* Company Introduction and Social Media */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src="/images/logo.png"
                alt="Golden Myanmar HR"
                className="h-24 w-auto"
              />
            </div>

            <p className="text-black leading-relaxed text-sm">
              Contact us! We warmly welcome Japanese manpower companies to
              partner with 'Golden Myanmar Human Resources Co., Ltd'. We invite
              those seeking work abroad to join us for a brighter future.
            </p>

            <div className="flex space-x-3">
              <button
                onClick={() =>
                  window.open("viber://chat?number=+959791602729", "_blank")
                }
                className="cursor-pointer hover:scale-110 transition-all duration-300"
              >
                <img src="/images/viber.png" alt="Viber" className="w-8 h-8" />
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/share/p/1FjXjMBRyZ",
                    "_blank"
                  )
                }
                className="cursor-pointer hover:scale-110 transition-all duration-300"
              >
                <img
                  src="/images/facebook.png"
                  alt="Facebook"
                  className="w-8 h-8"
                />
              </button>
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-6">
            <h3 className="text-[18px] md:text-[24px] font-semibold text-black">
              Useful Links
            </h3>
            <ul className="space-y-8">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.href}
                    className="block text-black hover:text-gray-600 transition-colors text-sm"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-[18px] md:text-[24px] font-semibold text-black">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center">
                  <MdOutlinePhone className="w-5 h-5 text-black" />
                </div>
                <span className="text-black font-medium text-sm">
                  +959 791602729
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center">
                  <MdOutlineEmail className="w-5 h-5 text-black" />
                </div>
                <span className="text-black font-medium text-sm">
                  goldenmmhr@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Our Office */}
          <div className="space-y-6">
            <h3 className="text-[18px] md:text-[24px] font-semibold text-black">
              Our Office
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mt-1">
                  <MdOutlineLocationOn className="w-5 h-5 text-black" />
                </div>
                <div className="text-black font-medium text-sm">
                  {t("footer.address")}
                </div>
              </div>
              <div className="mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d954.8043441382039!2d96.1549615550425!3d16.815568849563206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ed00487e4393%3A0xb625ae84346a0fad!2sPearl%20Condominium!5e0!3m2!1sen!2ssg!4v1760927824869!5m2!1sen!2ssg"
                  width="100%"
                  height="150"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
