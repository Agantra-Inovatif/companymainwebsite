import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import common_en from './locales/en/common.json';
import home_en from './locales/en/home.json';
import about_en from './locales/en/about.json';
import ailab_en from './locales/en/ailab.json';
import store_en from './locales/en/store.json';

import common_id from './locales/id/common.json';
import home_id from './locales/id/home.json';
import about_id from './locales/id/about.json';
import ailab_id from './locales/id/ailab.json';
import store_id from './locales/id/store.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'id'],
    fallbackLng: 'en',
    debug: true,
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    resources: {
      en: {
        common: common_en,
        home: home_en,
        about: about_en,
        ailab: ailab_en,
        store: store_en,
      },
      id: {
        common: common_id,
        home: home_id,
        about: about_id,
        ailab: ailab_id,
        store: store_id,
      },
    },
    ns: ['common', 'home', 'about', 'ailab', 'store'],
    defaultNS: 'common',
  });

export default i18n;