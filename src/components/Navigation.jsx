import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const location = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Golden Myanmar HR", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact Us", href: "/contact" },
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
            <Link
              to={item.href}
              className="block text-black font-semibold text-base hover:text-gray-600 transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li className="mt-4">
          <div className="flex items-center gap-2">
            <img
              src="/images/myanmar-flag.png"
              alt="Myanmar"
              className="w-6 h-4 rounded"
            />
            <span
              className="font-semibold text-xs"
              style={{ fontFamily: "Noto Sans Myanmar, sans-serif" }}
            >
              မြန်မာ
            </span>
          </div>
        </li>
        <li>
          <button className="w-full text-black font-semibold py-3 px-4 rounded-xl hover:bg-[#e6d088] transition-colors">
            Let's Work Together
          </button>
        </li>
      </ul>
    </div>
  );

  return (
    <>
      <nav className="bg-[#F5E49D] text-black shadow-none">
        <div className="px-4 lg:px-16 py-4">
          <div className="flex items-center justify-between gap-8">
            <img
              src="/images/logo.png"
              alt="Golden Myanmar HR"
              className="h-14"
            />

            <div className="hidden lg:flex items-center space-x-8 ">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`font-semibold text-base transition-colors ${
                      isActive
                        ? "text-black font-bold"
                        : "text-gray-500 hover:text-black"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center gap-2">
                <img
                  src="/images/myanmar-flag.png"
                  alt="Myanmar"
                  className="w-6 h-4 rounded-full"
                />
                <span
                  className="font-semibold text-xs"
                  style={{ fontFamily: "Noto Sans Myanmar, sans-serif" }}
                >
                  မြန်မာ
                </span>
              </div>
              <button className="text-[#1E1E1E] font-semibold border-2 border-[#1E1E1E] py-2 px-4 rounded-xl hover:bg-gray-800 transition-colors">
                Let's Work Together
              </button>
            </div>

            <button
              className="md:hidden p-2"
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
        <div className="fixed inset-0 z-50 md:hidden">
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
