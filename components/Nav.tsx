"use client";

import React from "react";
import { useLanguage, useTranslations } from "./LanguageProvider";

export default function Nav() {
  const { lang, setLang } = useLanguage();
  const tr = useTranslations();

  return (
    <header className="py-4 bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="font-playfair text-2xl text-[#2C1810]">
            {tr.nav.siteTitle}
          </div>
          <nav className="hidden md:flex gap-4 text-sm text-[#5C4A3A]">
            <button
              onClick={() =>
                document
                  .getElementById("menu")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-[#2C1810]"
            >
              {tr.nav.menu}
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("order")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-[#2C1810]"
            >
              {tr.nav.order}
            </button>
            <a href="#" className="hover:text-[#2C1810]">
              {tr.nav.about}
            </a>
            <a href="#" className="hover:text-[#2C1810]">
              {tr.nav.contact}
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-sm text-[#5C4A3A]">
            {lang === "fr" ? "FR" : "EN"}
          </div>
          <div className="inline-flex bg-[#FFF8F0] rounded-full p-1 border border-[#E8D5C4]">
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded-full text-sm ${lang === "en" ? "bg-[#B8956A] text-white" : "text-[#2C1810]"}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("fr")}
              className={`px-3 py-1 rounded-full text-sm ${lang === "fr" ? "bg-[#B8956A] text-white" : "text-[#2C1810]"}`}
            >
              FR
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
