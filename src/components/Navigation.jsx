import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const location = useLocation();

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.services"), href: "/services" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  const drawer = (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <img src="/images/logo.png" alt="Golden Myanmar HR" className="h-12" />
        <button onClick={handleDrawerToggle} className="p-2">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <ul className="space-y-4">
        {navItems.map((item) => (
          <li key={item.label} onClick={handleDrawerToggle}>
            <NavLink
              to={item.href}
              className={({ isActive }) =>
                isActive
                  ? "block text-black font-semibold text-base hover:text-gray-600 transition-colors"
                  : "block text-gray-500 font-semibold text-base hover:text-gray-600 transition-colors"
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
        <li className="mt-4">
          <LanguageSwitcher />
        </li>
        <li>
          <button
            onClick={() =>
              window.open("viber://chat?number=+959791602729", "_blank")
            }
            className="w-full border-2 border-[#1E1E1E] hover:bg-black hover:text-[#F5E49D] font-semibold py-3 px-4 rounded-xl hover:bg-[#e6d088] transition-colors"
          >
            {t("nav.workTogether")}
          </button>
        </li>
      </ul>
    </div>
  );

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5E49D] text-black shadow-lg">
        <div className="lg:px-10 px-5 py-1">
          <div className="flex items-center justify-between gap-8">
            <img
              src="/images/logo.png"
              alt="Golden Myanmar HR"
              className="h-24"
            />

            <div className="nav-md:hidden nav-lg:flex items-center space-x-8 ms-0 lg:ms-18">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <NavLink
                    key={item.label}
                    to={item.href}
                    className={`font-semibold text-base text-[16px] transition-colors ${
                      isActive
                        ? "text-black font-bold"
                        : "text-gray-500 hover:text-black"
                    }`}
                  >
                    {item.label}
                  </NavLink>
                );
              })}
            </div>

            <div className="nav-md:hidden nav-lg:flex items-center space-x-6">
              <LanguageSwitcher />
              <button
                onClick={() =>
                  window.open("viber://chat?number=+959791602729", "_blank")
                }
                className="text-[#1E1E1E] font-semibold border-2 border-[#1E1E1E] py-2 px-4 rounded-xl hover:bg-gray-800 hover:text-[#F5E49D] transition-colors duration-300"
              >
                {t("nav.workTogether")}
              </button>
            </div>

            <button
              className="nav-lg:hidden nav-md:block p-2"
              onClick={handleDrawerToggle}
              aria-label="open drawer"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 nav-lg:hidden nav-md:block">
          <div className="fixed" onClick={handleDrawerToggle}></div>
          <div className="fixed right-0 top-0 h-full w-72 bg-white shadow-xl">
            {drawer}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
