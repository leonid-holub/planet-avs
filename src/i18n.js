import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationEN from '../public/locales/en/translationEN';
import translationUA from '../public/locales/ua/translationUA';



i18n.use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: 'ua',
    resources: {
        en: {
            translation: translationEN,
        },
        ua: {
            translation: translationUA,
        },
    },
    debug: false,
    detection: {
        order: ['queryString, cookie'],
        cache: ['cookie'],
    },
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;