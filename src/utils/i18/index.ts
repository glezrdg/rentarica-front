import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// Import your translation files
import enCommon from "../locale/en/common.json";
import esCommon from "../locale/es/common.json";
import zhCommon from "../locale/zh/common.json";
import frCommon from "../locale/fr/common.json";
import ruCommon from "../locale/ru/common.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: enCommon,
      },
      es: {
        translation: esCommon,
      },
      fr: {
        translation: frCommon,
      },
      ru: {
        translation: ruCommon,
      },
      zh: {
        translation: zhCommon,
      },
    },

    lng: "es", // if you're using a language detector, do not define the lng option
    fallbackLng: "es",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18n;
