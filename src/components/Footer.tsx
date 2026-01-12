import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import { Locale } from '@/i18n/config'

interface FooterProps {
  locale: Locale
  dict: any
}

export default function Footer({ locale, dict }: FooterProps) {
  return (
    <footer className="bg-dark-900 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-pink flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl gradient-text">Niji V7</span>
            </div>
            <p className="text-dark-400 text-sm max-w-md">
              {dict.footer.description}
            </p>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-semibold text-white mb-4">{dict.footer.tools}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/prompt-builder`} className="text-dark-400 hover:text-primary-400 text-sm transition-colors">
                  {dict.nav.promptBuilder}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/prompts`} className="text-dark-400 hover:text-primary-400 text-sm transition-colors">
                  {dict.nav.prompts}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/parameters`} className="text-dark-400 hover:text-primary-400 text-sm transition-colors">
                  {dict.nav.parameters}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">{dict.footer.resources}</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://nijijourney.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dark-400 hover:text-primary-400 text-sm transition-colors"
                >
                  Niji Journey Official
                </a>
              </li>
              <li>
                <a 
                  href="https://docs.midjourney.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dark-400 hover:text-primary-400 text-sm transition-colors"
                >
                  Midjourney Docs
                </a>
              </li>
              <li>
                <a 
                  href="https://discord.gg/nijijourney" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dark-400 hover:text-primary-400 text-sm transition-colors"
                >
                  Discord Community
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-dark-700">
          <p className="text-dark-500 text-xs text-center">
            {dict.footer.disclaimer}
          </p>
          <p className="text-dark-600 text-xs text-center mt-2">
            © {new Date().getFullYear()} nijiv7.art. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
