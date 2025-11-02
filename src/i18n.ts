import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'id'],
    fallbackLng: 'en',
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/src/locales/{{lng}}/{{ns}}.json',
    },
    ns: ['common', 'home', 'about', 'ailab', 'apps', 'blog', 'contact', 'portfolio', 'store'],
    defaultNS: 'common',
    react: {
      useSuspense: false,
    },
  });

export default i18n;