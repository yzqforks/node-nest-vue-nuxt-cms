
import Cookies from 'js-cookie'
import elementEnLocale from 'element-plus/lib/locale/lang/en' // element-plus lang
import elementZhLocale from 'element-plus/lib/locale/lang/zh-CN' // element-plus lang
import enLocale from './en'
import zhLocale from './zh'
import {createI18n} from "vue-i18n";


const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale,
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale,
  },
}
export function getLanguage() {
  const chooseLanguage = Cookies.get('language') || 'zh'
  if (chooseLanguage) return chooseLanguage
  console.log('chooseLanguage', chooseLanguage)

  // if has not choose language
  const language = (
    navigator.language || navigator.browserLanguage
  ).toLowerCase()
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }
  return 'zh'
}
const i18n =createI18n({
  // set locale
  // options: en | zh | es
  locale: getLanguage(),
  messages,
})

export default i18n
