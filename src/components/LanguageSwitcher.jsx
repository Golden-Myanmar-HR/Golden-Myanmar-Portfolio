import React, { useState } from "react";
import { useTranslation } from "react-i18next";
// import engFlag from "";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "/images/eng.png" },
    { code: "mm", name: "မြန်မာ", flag: "/images/myanmar-flag.png" },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:scale-105 transition-colors"
      >
        {currentLanguage.code === "mm" ? (
          <img
            src="/images/myanmar-flag.png"
            alt="Myanmar"
            className="w-4 h-4 rounded-full"
          />
        ) : (
          <img
            src="/images/eng.png"
            alt="English"
            className="w-4 h-4 rounded-full"
          />
        )}
        <span
          className="font-semibold text-xs"
          style={
            currentLanguage.code === "mm"
              ? { fontFamily: "Noto Sans Myanmar, sans-serif" }
              : {}
          }
        >
          {currentLanguage.name}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[120px]">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                currentLanguage.code === language.code ? "bg-gray-100" : ""
              }`}
            >
              {language.code === "mm" ? (
                <img
                  src="/images/myanmar-flag.png"
                  alt="Myanmar"
                  className="w-6 h-4 rounded"
                />
              ) : (
                <img
                  src="/images/eng.png"
                  alt="English"
                  className="w-6 h-4 rounded"
                />
              )}
              <span
                className="font-semibold text-xs"
                style={
                  language.code === "mm"
                    ? { fontFamily: "Noto Sans Myanmar, sans-serif" }
                    : {}
                }
              >
                {language.name}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
