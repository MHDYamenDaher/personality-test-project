import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/default.json';

export const defaultNS = "en";
export const resources = {
  en: {
    en
  },
} as const;

i18n.use(initReactI18next).init({
  lng: "en",
  ns: ["en"],
  defaultNS,
  resources,
});

export default i18n;
