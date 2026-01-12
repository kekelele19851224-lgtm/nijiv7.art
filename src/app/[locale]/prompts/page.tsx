import { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import PromptsPageClient from '@/components/PromptsPageClient'

export default async function PromptsPage({
  params,
}: {
  params: { locale: Locale }
}) {
  const dict = await getDictionary(params.locale)

  return <PromptsPageClient dict={dict} />
}
