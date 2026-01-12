'use client'

import { useState } from 'react'
import { promptTemplates } from '@/data/prompts'
import PromptCard from '@/components/PromptCard'

interface PromptsPageClientProps {
  dict: any
}

export default function PromptsPageClient({ dict }: PromptsPageClientProps) {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: dict.prompts.categories.all },
    { id: 'character', label: dict.prompts.categories.character },
    { id: 'action', label: dict.prompts.categories.action },
    { id: 'landscape', label: dict.prompts.categories.landscape },
    { id: 'style', label: dict.prompts.categories.style },
  ]

  const filteredPrompts = activeCategory === 'all'
    ? promptTemplates
    : promptTemplates.filter(p => p.category === activeCategory)

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            {dict.prompts.title}
          </h1>
          <p className="text-dark-300 max-w-2xl mx-auto">
            {dict.prompts.subtitle}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-white'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Prompts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPrompts.map((template) => (
            <PromptCard
              key={template.id}
              prompt={template.prompt}
              category={template.category}
              copyText={dict.prompts.copy}
              copiedText={dict.prompts.copied}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
