'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'
import { Locale, localeNames } from '@/i18n/config'

interface HeaderProps {
  locale: Locale
  dict: any
}

export default function Header({ locale, dict }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)

  const navItems = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/prompt-builder`, label: dict.nav.promptBuilder },
    { href: `/${locale}/prompts`, label: dict.nav.prompts },
    { href: `/${locale}/parameters`, label: dict.nav.parameters },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-lg border-b border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-pink flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl gradient-text">Niji V7</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-dark-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-800 border border-dark-600 text-sm text-dark-200 hover:border-primary-500 transition-colors"
              >
                {localeNames[locale]}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-dark-800 border border-dark-600 rounded-xl shadow-xl overflow-hidden">
                  {Object.entries(localeNames).map(([code, name]) => (
                    <Link
                      key={code}
                      href={`/${code}`}
                      onClick={() => setIsLangOpen(false)}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        code === locale
                          ? 'bg-primary-500/20 text-primary-400'
                          : 'text-dark-200 hover:bg-dark-700'
                      }`}
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <a
              href="https://nijijourney.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex btn-primary text-sm py-2 px-4"
            >
              {dict.nav.startCreating}
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-dark-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-dark-700">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-2 text-dark-300 hover:text-white hover:bg-dark-800 rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://nijijourney.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 mt-2 btn-primary text-center text-sm py-2"
              >
                {dict.nav.startCreating}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
