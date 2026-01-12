import { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import PromptBuilder from '@/components/PromptBuilder'

export default async function PromptBuilderPage({
  params,
}: {
  params: { locale: Locale }
}) {
  const dict = await getDictionary(params.locale)

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            {dict.promptBuilder.title}
          </h1>
          <p className="text-dark-300 max-w-2xl mx-auto">
            {dict.promptBuilder.subtitle}
          </p>
        </div>

        {/* Prompt Builder Component */}
        <PromptBuilder dict={dict} />
      </div>
    </div>
  )
}
