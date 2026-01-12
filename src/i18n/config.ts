export const locales = ['en', 'ja', 'ko', 'zh', 'zh-tw'] as const
export type Locale = (typeof locales)[number]

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ja: '日本語',
  ko: '한국어',
  zh: '简体中文',
  'zh-tw': '繁體中文',
}

export const defaultLocale: Locale = 'en'
