import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: localStorage.getItem("i18nextLng") || "am",
    debug: false,
    backend: {
        loadPath: 'locales/{{ns}}/{{lng}}.json'
    },
    detection: {
        order: ['queryString, cookie'],
        cache: ['cookie']
    },
    interpolation: {
        escapeValue: false,
        formatSeparator: '.'
    },
    react: {
        wait: true,
    },
    ns: ['header']
});

export default i18n