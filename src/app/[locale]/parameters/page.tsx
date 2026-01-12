import { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { parameters } from '@/data/parameters'
import { Copy } from 'lucide-react'

export default async function ParametersPage({
  params,
}: {
  params: { locale: Locale }
}) {
  const dict = await getDictionary(params.locale)
  const locale = params.locale as keyof typeof parameters[0]['description']

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            {dict.parameters.title}
          </h1>
          <p className="text-dark-300 max-w-2xl mx-auto">
            {dict.parameters.subtitle}
          </p>
        </div>

        {/* Parameters List */}
        <div className="space-y-6">
          {parameters.map((param, index) => (
            <div key={index} className="card">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-mono font-semibold text-primary-400">
                  {param.name}
                </h3>
              </div>

              <p className="text-dark-200 mb-4">
                {param.description[locale] || param.description.en}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="bg-dark-900/50 rounded-lg p-3">
                  <div className="text-dark-400 mb-1">{dict.parameters.usage}</div>
                  <code className="text-accent-cyan">{param.usage}</code>
                </div>

                <div className="bg-dark-900/50 rounded-lg p-3">
                  <div className="text-dark-400 mb-1">{dict.parameters.example}</div>
                  <code className="text-accent-pink">{param.example}</code>
                </div>

                {param.default && (
                  <div className="bg-dark-900/50 rounded-lg p-3">
                    <div className="text-dark-400 mb-1">{dict.parameters.default}</div>
                    <code className="text-green-400">{param.default}</code>
                  </div>
                )}

                {param.range && (
                  <div className="bg-dark-900/50 rounded-lg p-3">
                    <div className="text-dark-400 mb-1">{dict.parameters.range}</div>
                    <code className="text-accent-purple">{param.range}</code>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
