import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Niji V7 - AI Anime Art Generator Tools',
  description: 'Free Niji V7 prompt generator, templates, and parameter guide. Create stunning anime art with the perfect prompts.',
  keywords: 'niji v7, niji journey, midjourney, anime, ai art, prompt generator, anime generator',
  openGraph: {
    title: 'Niji V7 - AI Anime Art Generator Tools',
    description: 'Free Niji V7 prompt generator, templates, and parameter guide.',
    url: 'https://nijiv7.art',
    siteName: 'Niji V7',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Niji V7 - AI Anime Art Generator Tools',
    description: 'Free Niji V7 prompt generator, templates, and parameter guide.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
