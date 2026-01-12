import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nijiv7.art'
  const locales = ['en', 'ja', 'ko', 'zh', 'zh-tw']
  const pages = ['', '/prompt-builder', '/prompts', '/parameters']
  
  const urls: MetadataRoute.Sitemap = []
  
  // 为每个语言和页面生成URL
  locales.forEach(locale => {
    pages.forEach(page => {
      urls.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: page === '' ? 1.0 : 0.8,
      })
    })
  })
  
  return urls
}
