"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import translations from "@/lib/translations";

type Lang = "fr" | "en";

const LanguageContext = createContext({
  lang: "fr" as Lang,
  setLang: (l: Lang) => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("language");
      if (stored === "en" || stored === "fr") setLang(stored as Lang);
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("language", lang);
      document.documentElement.lang = lang === "fr" ? "fr" : "en";
    } catch (e) {
      // ignore
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useTranslations() {
  const { lang } = useContext(LanguageContext);
  return translations[lang];
}

export default LanguageProvider;
