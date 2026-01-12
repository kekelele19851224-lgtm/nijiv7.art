'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface PromptCardProps {
  prompt: string
  category: string
  copyText: string
  copiedText: string
}

export default function PromptCard({ prompt, category, copyText, copiedText }: PromptCardProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const categoryColors: Record<string, string> = {
    character: 'bg-primary-500/20 text-primary-400 border-primary-500/30',
    action: 'bg-accent-pink/20 text-accent-pink border-accent-pink/30',
    landscape: 'bg-green-500/20 text-green-400 border-green-500/30',
    style: 'bg-accent-purple/20 text-accent-purple border-accent-purple/30',
  }

  return (
    <div className="card group hover:border-primary-500/50">
      <div className="flex items-start justify-between gap-4 mb-3">
        <span className={`text-xs px-2 py-1 rounded-full border ${categoryColors[category] || categoryColors.character}`}>
          {category}
        </span>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1.5 text-xs text-dark-400 hover:text-primary-400 transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-green-400" />
              <span className="text-green-400">{copiedText}</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              {copyText}
            </>
          )}
        </button>
      </div>
      
      <p className="text-sm text-dark-200 font-mono leading-relaxed break-words">
        {prompt}
      </p>
    </div>
  )
}
