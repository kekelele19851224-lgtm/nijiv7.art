import { Locale, locales } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  const dict = await getDictionary(params.locale)

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale={params.locale} dict={dict} />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer locale={params.locale} dict={dict} />
    </div>
  )
}
