import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // Loads translation files from server/public folder
  .use(LanguageDetector) // Detects user language automatically
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Default language
    supportedLngs: ['en', 'hi'],
    interpolation: { escapeValue: false }
  });

export default i18n;