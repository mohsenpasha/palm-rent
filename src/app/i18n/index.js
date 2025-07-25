import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationFa from "../../../public/locales/fa/translation.json";
import translationEn from "../../../public/locales/en/translation.json";

const resources = {
  fa: {
    translation: translationFa,
  },
  en: {
    translation: translationEn,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "fa",
    supportedLngs: ["fa", "en"],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
