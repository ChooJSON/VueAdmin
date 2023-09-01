/*
 * @Author: ChooJSON
 * @Github: https://github.com/ChooJSON
 * @Date: 2023-04-21 06:59:14
 * @LastEditors: ChooJSON
 * @LastEditTime: 2023-04-21 07:10:56
 * @Description: 国际化：internationalization/ i18n
 */
import { createI18n } from 'vue-i18n'
import EN from './en'
import ZH from './zh'

const messages = {
  en: {
    ...EN
  },
  zh: {
    ...ZH
  }
}

const getCurrentLanguage = () => {
  const UAlang = navigator.language // zh-CN
  const langCode = UAlang.indexOf('zh') !== -1 ? 'zh' : 'en'
  localStorage.setItem('lang', langCode)
  return langCode
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: getCurrentLanguage() || 'zh',
  messages: messages
})

export default i18n
