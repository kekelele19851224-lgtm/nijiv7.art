import { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import Link from 'next/link'
import { 
  Sparkles, Wand2, BookOpen, Settings, Globe, ExternalLink, ArrowRight,
  Eye, Zap, Target, Palette, Check, X, ChevronDown, Lightbulb, Camera
} from 'lucide-react'

export default async function HomePage({
  params,
}: {
  params: { locale: Locale }
}) {
  const dict = await getDictionary(params.locale)

  const features = [
    {
      icon: <Wand2 className="w-6 h-6" />,
      title: dict.features.promptBuilder.title,
      description: dict.features.promptBuilder.description,
      href: `/${params.locale}/prompt-builder`,
      color: 'from-primary-500 to-primary-600',
      iconBg: 'bg-primary-500/20 text-primary-400',
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: dict.features.templates.title,
      description: dict.features.templates.description,
      href: `/${params.locale}/prompts`,
      color: 'from-accent-pink to-pink-600',
      iconBg: 'bg-accent-pink/20 text-accent-pink',
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: dict.features.parameters.title,
      description: dict.features.parameters.description,
      href: `/${params.locale}/parameters`,
      color: 'from-accent-purple to-purple-600',
      iconBg: 'bg-accent-purple/20 text-accent-purple',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: dict.features.multilingual.title,
      description: dict.features.multilingual.description,
      href: '#',
      color: 'from-accent-cyan to-cyan-600',
      iconBg: 'bg-accent-cyan/20 text-accent-cyan',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-pink/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-800/50 border border-dark-600 mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-sm text-dark-200">{dict.hero.badge}</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-4 animate-slide-up">
              <span className="gradient-text">{dict.hero.title}</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-white mb-6 animate-slide-up delay-100">
              {dict.hero.subtitle}
            </h2>

            {/* Description */}
            <p className="text-lg text-dark-300 max-w-2xl mx-auto mb-10 animate-slide-up delay-200">
              {dict.hero.description}
            </p>

            {/* CTA Button */}
            <div className="animate-slide-up delay-300">
              <Link
                href={`/${params.locale}/prompt-builder`}
                className="btn-primary text-lg py-4 px-8 inline-flex items-center gap-2"
              >
                {dict.hero.cta}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-16 animate-fade-in delay-500">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">23B+</div>
                <div className="text-sm text-dark-400">{dict.compare?.table?.parameters || "Parameters"}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">4096px</div>
                <div className="text-sm text-dark-400">{dict.compare?.table?.maxRes || "Max Resolution"}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">10x</div>
                <div className="text-sm text-dark-400">{dict.compare?.table?.draftSpeed || "Draft Speed"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why V7 Section */}
      <section className="py-20 bg-dark-900/50" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              {dict.whyV7?.title || "Why V7 Changes Everything"}
            </h2>
            <p className="text-dark-300 max-w-2xl mx-auto">
              {dict.whyV7?.subtitle || "Real improvements that matter for anime artists and enthusiasts"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="card text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary-500/20 flex items-center justify-center mx-auto mb-4">
                <Eye className="w-7 h-7 text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {dict.whyV7?.coherency?.title || "Rock-Solid Consistency"}
              </h3>
              <p className="text-dark-400 text-sm">
                {dict.whyV7?.coherency?.desc || "Say goodbye to wonky eyes and mismatched details. V7 delivers dramatically improved consistency across every element."}
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card text-center">
              <div className="w-14 h-14 rounded-2xl bg-accent-pink/20 flex items-center justify-center mx-auto mb-4">
                <Palette className="w-7 h-7 text-accent-pink" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {dict.whyV7?.lineart?.title || "Beautiful Lineart"}
              </h3>
              <p className="text-dark-400 text-sm">
                {dict.whyV7?.lineart?.desc || "Clean, confident strokes that capture the essence of professional anime illustration. The kind of linework that even seasoned artists admire."}
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card text-center">
              <div className="w-14 h-14 rounded-2xl bg-accent-purple/20 flex items-center justify-center mx-auto mb-4">
                <Target className="w-7 h-7 text-accent-purple" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {dict.whyV7?.prompt?.title || "It Actually Listens"}
              </h3>
              <p className="text-dark-400 text-sm">
                {dict.whyV7?.prompt?.desc || "V7 understands what you're asking for. Complex prompts, specific character details, particular poses—it gets it right more often."}
              </p>
            </div>

            {/* Feature 4 */}
            <div className="card text-center">
              <div className="w-14 h-14 rounded-2xl bg-accent-cyan/20 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-7 h-7 text-accent-cyan" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {dict.whyV7?.sref?.title || "Style Reference"}
              </h3>
              <p className="text-dark-400 text-sm">
                {dict.whyV7?.sref?.desc || "Lock in your aesthetic with the powerful --sref feature. Build a consistent visual identity across all your work."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-20" id="get-started">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              {dict.howTo?.title || "Get Started in Minutes"}
            </h2>
            <p className="text-dark-300 max-w-2xl mx-auto">
              {dict.howTo?.subtitle || "From signup to stunning anime art in three simple steps"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-pink flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div className="card pt-8">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {dict.howTo?.step1?.title || "Create Your Account"}
                </h3>
                <p className="text-dark-400 text-sm">
                  {dict.howTo?.step1?.desc || "Head to the official Niji Journey site or join the Discord server. You can start with a free trial to test the waters."}
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-pink flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div className="card pt-8">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {dict.howTo?.step2?.title || "Craft Your Prompt"}
                </h3>
                <p className="text-dark-400 text-sm">
                  {dict.howTo?.step2?.desc || "Describe what you want to create. Add \"--niji 7\" to your prompt to unlock V7's full potential. Be specific—V7 can handle it."}
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-pink flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <div className="card pt-8">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {dict.howTo?.step3?.title || "Generate & Refine"}
                </h3>
                <p className="text-dark-400 text-sm">
                  {dict.howTo?.step3?.desc || "Watch as four unique variations appear in seconds. Upscale your favorites, iterate on what works, and download your masterpiece."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* V6 vs V7 Comparison */}
      <section className="py-20 bg-dark-900/50" id="compare">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              {dict.compare?.title || "V6 vs V7: The Upgrade"}
            </h2>
            <p className="text-dark-300 max-w-2xl mx-auto">
              {dict.compare?.subtitle || "Here's exactly what's improved in the latest version"}
            </p>
          </div>

          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-dark-600">
                    <th className="text-left py-4 px-6 text-dark-300 font-medium">{dict.compare?.table?.feature || "Feature"}</th>
                    <th className="text-center py-4 px-6 text-dark-300 font-medium">Niji V6</th>
                    <th className="text-center py-4 px-6 text-primary-400 font-medium">Niji V7</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-dark-700">
                    <td className="py-4 px-6 text-white">{dict.compare?.table?.lineart || "Lineart Quality"}</td>
                    <td className="py-4 px-6 text-center text-dark-400">{dict.compare?.table?.good || "Good"}</td>
                    <td className="py-4 px-6 text-center">
                      <span className="text-primary-400 font-medium">{dict.compare?.table?.exceptional || "Exceptional"}</span>
                      <span className="text-dark-500 text-sm block">{dict.compare?.table?.majorUpgrade || "Major upgrade"}</span>
                    </td>
                  </tr>
                  <tr className="border-b border-dark-700">
                    <td className="py-4 px-6 text-white">{dict.compare?.table?.consistency || "Character Consistency"}</td>
                    <td className="py-4 px-6 text-center text-dark-400">{dict.compare?.table?.moderate || "Moderate"}</td>
                    <td className="py-4 px-6 text-center">
                      <span className="text-primary-400 font-medium">{dict.compare?.table?.high || "High"}</span>
                      <span className="text-dark-500 text-sm block">{dict.compare?.table?.eyesHands || "Eyes, hands, poses stay coherent"}</span>
                    </td>
                  </tr>
                  <tr className="border-b border-dark-700">
                    <td className="py-4 px-6 text-white">{dict.compare?.table?.promptUnderstanding || "Prompt Understanding"}</td>
                    <td className="py-4 px-6 text-center text-dark-400">{dict.compare?.table?.standard || "Standard"}</td>
                    <td className="py-4 px-6 text-center">
                      <span className="text-primary-400 font-medium">{dict.compare?.table?.precise || "Precise"}</span>
                      <span className="text-dark-500 text-sm block">{dict.compare?.table?.complexRequests || "Gets complex requests right"}</span>
                    </td>
                  </tr>
                  <tr className="border-b border-dark-700">
                    <td className="py-4 px-6 text-white">{dict.compare?.table?.maxRes || "Max Resolution"}</td>
                    <td className="py-4 px-6 text-center text-dark-400">2048px</td>
                    <td className="py-4 px-6 text-center text-primary-400 font-medium">4096px</td>
                  </tr>
                  <tr className="border-b border-dark-700">
                    <td className="py-4 px-6 text-white">{dict.compare?.table?.draftMode || "Draft Mode"}</td>
                    <td className="py-4 px-6 text-center">
                      <X className="w-5 h-5 text-red-400 mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Check className="w-5 h-5 text-green-400 mx-auto" />
                      <span className="text-dark-500 text-sm block">{dict.compare?.table?.fasterCost || "10x faster, 50% cost"}</span>
                    </td>
                  </tr>
                  <tr className="border-b border-dark-700">
                    <td className="py-4 px-6 text-white">{dict.compare?.table?.sref || "Style Reference (sref)"}</td>
                    <td className="py-4 px-6 text-center">
                      <Check className="w-5 h-5 text-green-400 mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Check className="w-5 h-5 text-green-400 mx-auto" />
                      <span className="text-dark-500 text-sm block">{dict.compare?.table?.enhanced || "Enhanced support"}</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-white">{dict.compare?.table?.parameters || "Model Parameters"}</td>
                    <td className="py-4 px-6 text-center text-dark-400">{dict.compare?.table?.undisclosed || "Undisclosed"}</td>
                    <td className="py-4 px-6 text-center text-primary-400 font-medium">~23 Billion</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Pro Tips Section */}
      <section className="py-20" id="tips">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              {dict.tips?.title || "Pro Tips"}
            </h2>
            <p className="text-dark-300 max-w-2xl mx-auto">
              {dict.tips?.subtitle || "Get better results with these techniques"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tip 1 */}
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {dict.tips?.tip1?.title || "Be Specific"}
                  </h3>
                  <p className="text-dark-400 text-sm">
                    {dict.tips?.tip1?.desc || "The more detail you provide about character features, clothing, poses, and backgrounds, the closer V7 gets to your vision. Don't be shy—describe everything."}
                  </p>
                </div>
              </div>
            </div>

            {/* Tip 2 */}
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                  <Camera className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {dict.tips?.tip2?.title || "Master Aspect Ratios"}
                  </h3>
                  <p className="text-dark-400 text-sm">
                    {dict.tips?.tip2?.desc || "Use --ar to set your canvas. Try 3:4 for portraits, 16:9 for scenes, 1:1 for icons. The right ratio makes a huge difference."}
                  </p>
                </div>
              </div>
            </div>

            {/* Tip 3 */}
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent-pink/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-accent-pink" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {dict.tips?.tip3?.title || "Draft First, Refine Later"}
                  </h3>
                  <p className="text-dark-400 text-sm">
                    {dict.tips?.tip3?.desc || "Use draft mode to rapidly explore ideas at 10x speed and half cost. Once you find the direction you like, switch to full quality."}
                  </p>
                </div>
              </div>
            </div>

            {/* Tip 4 */}
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent-purple/20 flex items-center justify-center flex-shrink-0">
                  <Palette className="w-5 h-5 text-accent-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {dict.tips?.tip4?.title || "Build Your Style Library"}
                  </h3>
                  <p className="text-dark-400 text-sm">
                    {dict.tips?.tip4?.desc || "Save reference images that capture your aesthetic. Use --sref to maintain consistency across an entire series or character lineup."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              {dict.features.title}
            </h2>
            <p className="text-dark-300 max-w-2xl mx-auto">
              {dict.features.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Link
                key={index}
                href={feature.href}
                className="card group cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl ${feature.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-dark-400 text-sm">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              {dict.faq?.title || "Got Questions?"}
            </h2>
            <p className="text-dark-300 max-w-2xl mx-auto">
              {dict.faq?.subtitle || "Here's what people usually want to know"}
            </p>
          </div>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="card group">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-semibold text-white">
                  {dict.faq?.q1?.question || "What exactly is Niji Journey V7?"}
                </span>
                <ChevronDown className="w-5 h-5 text-dark-400 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-dark-400 text-sm">
                {dict.faq?.q1?.answer || "Niji V7 is the latest version of Nijijourney's AI image generation model, specifically designed for anime and illustration styles. It's developed in collaboration between Midjourney and Spellbrush, focusing on Eastern aesthetics and anime art."}
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="card group">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-semibold text-white">
                  {dict.faq?.q2?.question || "How do I actually use V7?"}
                </span>
                <ChevronDown className="w-5 h-5 text-dark-400 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-dark-400 text-sm">
                {dict.faq?.q2?.answer || "In Discord, add \"--niji 7\" to the end of your prompt. On the web interface at nijijourney.com, select \"Niji 7\" from the version dropdown. You'll need a Midjourney/Nijijourney subscription to generate images."}
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="card group">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-semibold text-white">
                  {dict.faq?.q3?.question || "Is there a free option?"}
                </span>
                <ChevronDown className="w-5 h-5 text-dark-400 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-dark-400 text-sm">
                {dict.faq?.q3?.answer || "Midjourney occasionally offers free trial periods. The basic subscription starts at $10/month with limited generations. Our tools here (prompt builder, templates, guides) are completely free to use."}
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="card group">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-semibold text-white">
                  {dict.faq?.q4?.question || "What's the real difference between V6 and V7?"}
                </span>
                <ChevronDown className="w-5 h-5 text-dark-400 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-dark-400 text-sm">
                {dict.faq?.q4?.answer || "V7 brings major improvements in coherency (especially eyes and hands), lineart quality, prompt understanding, and introduces draft mode for faster iteration. It's more literal in interpretation, so vague prompts may work differently than in V6."}
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="card group">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-semibold text-white">
                  {dict.faq?.q5?.question || "What's the --sref feature for?"}
                </span>
                <ChevronDown className="w-5 h-5 text-dark-400 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-dark-400 text-sm">
                {dict.faq?.q5?.answer || "Style Reference (--sref) lets you use an image URL to influence the visual style of your generation. It's perfect for maintaining a consistent aesthetic across multiple images, like for character sheets or series."}
              </p>
            </details>

            {/* FAQ 6 */}
            <details className="card group">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-semibold text-white">
                  {dict.faq?.q6?.question || "Can I use the images commercially?"}
                </span>
                <ChevronDown className="w-5 h-5 text-dark-400 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-dark-400 text-sm">
                {dict.faq?.q6?.answer || "Yes, with a paid Midjourney subscription you own the rights to the images you create and can use them commercially. Check Midjourney's terms of service for specific details on your subscription tier."}
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-600 p-8 sm:p-12">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-pink/20 rounded-full blur-3xl" />

            <div className="relative text-center">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                {dict.cta.title}
              </h2>
              <p className="text-dark-300 mb-8 max-w-xl mx-auto">
                {dict.cta.description}
              </p>
              <a
                href="https://nijijourney.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                {dict.cta.button}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
