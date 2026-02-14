"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { Locale, getTranslations } from "@/i18n";
import type { default as heTranslations } from "@/i18n/translations/he.json";

type Translations = typeof heTranslations;

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
  dir: "rtl" | "ltr";
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("he");

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "he" ? "he" : "en";
    document.documentElement.dir = locale === "he" ? "rtl" : "ltr";
  }, [locale]);

  const value: LocaleContextType = {
    locale,
    setLocale,
    t: getTranslations(locale) as Translations,
    dir: locale === "he" ? "rtl" : "ltr",
  };

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
