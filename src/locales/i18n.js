import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LocalStorageBackend from 'i18next-localstorage-backend'
import HttpBackend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { translation_EN } from './en/data'
import { translation_ES } from './es/data'

const resources = {
  en: { data: translation_EN },
  'en-US': { data: translation_EN },
  es: { data: translation_ES },
  'es-ES': { data: translation_ES }
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      backends: [
        LocalStorageBackend,
        HttpBackend
      ],
      backendOptions: [{
        expirationTime: 7 * 24 * 60 * 60 * 1000,
        store: window.localStorage,
      }]
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'en-US', 'es', 'es-ES'],
    debug: false,
    resources: resources,
    interpolation: {
      escapeValue: false,
    }
  })


export default i18n