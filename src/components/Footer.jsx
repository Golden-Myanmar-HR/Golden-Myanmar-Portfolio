import React from "react";
import { MdOutlinePhone, MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { TiLocationOutline } from "react-icons/ti";

const Footer = () => {
  const usefulLinks = ["About Golden Myanmar HR", "Our Services", "Contact Us"];

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

            <p className="text-base font-semibold text-black leading-relaxed max-w-md">
              Contact us! We warmly welcome Japanese manpower companies to
              partner with "Golden Myanmar Human Resources Co., Ltd." We invite
              those seeking work abroad to join us for a brighter future.
            </p>

            <div className="flex space-x-4">
              <button className="hover:scale-110 transition-all duration-300">
                <img src="/images/viber.png" alt="Viber" className="w-8 h-8" />
              </button>
              <button className="hover:scale-110 transition-all duration-300">
                <img
                  src="/images/facebook.png"
                  alt="Facebook"
                  className="w-8 h-8"
                />
              </button>
            </div>
          </div>

          <div className="space-y-6 col-span-1">
            <h6 className="text-2xl font-semibold text-black">Useful Links</h6>

            <div className="space-y-4">
              {usefulLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-base text-gray-600 hover:text-black transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6 col-span-1">
            <h6 className="text-2xl font-semibold text-black">Contact Info</h6>

            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <MdOutlinePhone width={24} height={24} color="#000000" />
                <span className="text-base text-gray-600">+959 791602729</span>
              </div>

              <div className="flex items-center space-x-3">
                <MdOutlineEmail width={24} height={24} color="#000000" />
                <span className="text-base text-gray-600">
                  goldenmmhr@gmail.com
                </span>
              </div>

              <div className="flex space-x-3">
                <div>
                  <TiLocationOutline width={24} height={24} color="#000000" />
                </div>
                <span className="">
                  Room No. 1540, Tower E, Pearl Condo, Kabar Aye Pagoda Road, at
                  the corner of Sayar San Road, in Bahan Township
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
