# Niji V7 - Prompt Generator Tool

Free tools for creating perfect Niji V7 prompts.

## Features

- 🎨 **Prompt Builder** - Build prompts step by step with character, scene, style options
- 📚 **Prompt Templates** - Ready-to-use prompts for various anime styles
- ⚙️ **Parameter Guide** - Complete guide to all Niji V7 parameters
- 🌍 **Multi-language** - English, Japanese, Korean, Chinese (Simplified & Traditional)

## Getting Started

### Prerequisites

Make sure you have Node.js installed (v18 or higher recommended):
- Download from: https://nodejs.org

### Installation

1. Extract the zip file
2. Open terminal in the project folder
3. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

### Deploy

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with one click

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Project Structure

```
niji-v7-tool/
├── src/
│   ├── app/
│   │   ├── [locale]/          # Localized pages
│   │   │   ├── page.tsx       # Home page
│   │   │   ├── prompt-builder/
│   │   │   ├── prompts/
│   │   │   └── parameters/
│   │   ├── globals.css
│   │   └── layout.tsx
│   ├── components/            # React components
│   ├── data/                  # Data files & locales
│   └── i18n/                  # i18n configuration
├── public/                    # Static assets
├── package.json
├── tailwind.config.ts
└── next.config.js
```

## Customization

### Adding New Prompts

Edit `src/data/prompts.ts` to add more prompt templates.

### Adding New Parameters

Edit `src/data/parameters.ts` to add more parameters.

### Modifying Translations

Edit the JSON files in `src/data/locales/`:
- `en.json` - English
- `ja.json` - Japanese
- `ko.json` - Korean
- `zh.json` - Simplified Chinese
- `zh-tw.json` - Traditional Chinese

## Future Enhancements

- [ ] User authentication (NextAuth.js)
- [ ] Payment integration (Stripe)
- [ ] Image generation API
- [ ] User-submitted prompts gallery
- [ ] sref style code library

## License

MIT License

## Disclaimer

This is an independent tool site. Niji V7 is a product of Midjourney and Spellbrush. We are not affiliated with Midjourney or Nijijourney.
