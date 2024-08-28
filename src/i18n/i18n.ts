import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "../locales/en/translation.json";
import ptTranslation from "../locales/pt/translation.json";
import esTranslation from "../locales/es/translation.json";

const resources = {
  en: { translation: enTranslation },
  pt: { translation: ptTranslation },
  es: { translation: esTranslation },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
