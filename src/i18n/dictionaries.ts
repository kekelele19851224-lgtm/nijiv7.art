import { Locale } from './config'

const dictionaries = {
  en: () => import('@/data/locales/en.json').then((module) => module.default),
  ja: () => import('@/data/locales/ja.json').then((module) => module.default),
  ko: () => import('@/data/locales/ko.json').then((module) => module.default),
  zh: () => import('@/data/locales/zh.json').then((module) => module.default),
  'zh-tw': () => import('@/data/locales/zh-tw.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]?.() ?? dictionaries.en()
}
