import he from "./translations/he.json";
import en from "./translations/en.json";

export type Locale = "he" | "en";

export const translations = {
  he,
  en,
} as const;

export const defaultLocale: Locale = "he";

export function getTranslations(locale: Locale) {
  return translations[locale] ?? translations.he;
}
