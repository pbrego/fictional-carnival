import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "locales/translation.json";

const resources = {
    en: {
        translation: translationEn,
    },
};

export const i18n = i18next.use(initReactI18next).init({
    resources,
    debug: false,
    ns: ["translation"],
    fallbackLng: "en",
    keySeparator: ".",
    nsSeparator: false,
    react: {
        wait: true,
        useSuspense: false,
    },
    supportedLngs: ["en"],
});
