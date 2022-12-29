import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
 
import { TRANSLATIONS_AR } from "./translations/arabic/translations"; 
import { TRANSLATIONS_EN } from "./translations/english/translations"; 


i18n
 .use(LanguageDetector)
 .use(initReactI18next)
 .init({
   resources: {
     ar: {
       translation: TRANSLATIONS_AR
     },
     en: {
        translation: TRANSLATIONS_EN
      }
   }
 });
 
i18n.changeLanguage("ar");