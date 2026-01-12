'use client'

import { useState, useEffect } from 'react'
import { Copy, Check, Sparkles, ExternalLink } from 'lucide-react'

interface PromptBuilderProps {
  dict: any
}

export default function PromptBuilder({ dict }: PromptBuilderProps) {
  const [copied, setCopied] = useState(false)
  const [prompt, setPrompt] = useState('')
  
  // Character options
  const [gender, setGender] = useState('none')
  const [age, setAge] = useState('none')
  const [hairColor, setHairColor] = useState('none')
  const [hairStyle, setHairStyle] = useState('none')
  const [eyeColor, setEyeColor] = useState('none')
  const [expression, setExpression] = useState('none')
  
  // Scene options
  const [location, setLocation] = useState('none')
  const [time, setTime] = useState('none')
  const [weather, setWeather] = useState('none')
  
  // Style options
  const [artStyle, setArtStyle] = useState('none')
  const [lighting, setLighting] = useState('none')
  const [camera, setCamera] = useState('none')
  
  // Parameters
  const [aspectRatio, setAspectRatio] = useState('1:1')
  const [stylize, setStylize] = useState('100')

  // Generate prompt whenever options change
  useEffect(() => {
    generatePrompt()
  }, [gender, age, hairColor, hairStyle, eyeColor, expression, location, time, weather, artStyle, lighting, camera, aspectRatio, stylize])

  const generatePrompt = () => {
    const parts: string[] = []
    
    // Character description
    const characterParts: string[] = []
    if (gender !== 'none') characterParts.push(gender)
    if (age !== 'none') characterParts.push(age)
    if (hairColor !== 'none' && hairStyle !== 'none') {
      characterParts.push(`${hairStyle} ${hairColor} hair`)
    } else if (hairColor !== 'none') {
      characterParts.push(`${hairColor} hair`)
    } else if (hairStyle !== 'none') {
      characterParts.push(`${hairStyle} hair`)
    }
    if (eyeColor !== 'none') characterParts.push(`${eyeColor} eyes`)
    if (expression !== 'none') characterParts.push(`${expression} expression`)
    
    if (characterParts.length > 0) {
      parts.push(`anime ${characterParts.join(', ')}`)
    }
    
    // Scene description
    const sceneParts: string[] = []
    if (location !== 'none') sceneParts.push(location)
    if (time !== 'none') sceneParts.push(time)
    if (weather !== 'none') sceneParts.push(weather)
    
    if (sceneParts.length > 0) {
      parts.push(sceneParts.join(', '))
    }
    
    // Style description
    const styleParts: string[] = []
    if (artStyle !== 'none') styleParts.push(`${artStyle} style`)
    if (lighting !== 'none') styleParts.push(`${lighting} lighting`)
    if (camera !== 'none') styleParts.push(`${camera} shot`)
    
    if (styleParts.length > 0) {
      parts.push(styleParts.join(', '))
    }
    
    // Build final prompt
    let finalPrompt = parts.join(', ')
    
    if (finalPrompt) {
      finalPrompt += ` --niji 7 --ar ${aspectRatio}`
      if (stylize !== '100') {
        finalPrompt += ` --stylize ${stylize}`
      }
    }
    
    setPrompt(finalPrompt)
  }

  const copyToClipboard = async () => {
    if (!prompt) return
    await navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const t = dict.promptBuilder

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Options Panel */}
      <div className="space-y-6">
        {/* Character Section */}
        <div className="card">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center">
              <span className="text-primary-400">👤</span>
            </span>
            {t.character.title}
          </h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-dark-300 mb-2">{t.character.gender}</label>
              <select 
                value={gender} 
                onChange={(e) => setGender(e.target.value)}
                className="select-field"
              >
                <option value="none">{t.character.genderOptions.none}</option>
                <option value="female">{t.character.genderOptions.female}</option>
                <option value="male">{t.character.genderOptions.male}</option>
                <option value="non-binary">{t.character.genderOptions.other}</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm text-dark-300 mb-2">{t.character.age}</label>
              <select 
                value={age} 
                onChange={(e) => setAge(e.target.value)}
                className="select-field"
              >
                <option value="none">{t.character.ageOptions.none}</option>
                <option value="child">{t.character.ageOptions.child}</option>
                <option value="teen">{t.character.ageOptions.teen}</option>
                <option value="young adult">{t.character.ageOptions.young}</option>
                <option value="adult">{t.character.ageOptions.adult}</option>
                <option value="elderly">{t.character.ageOptions.elderly}</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm text-dark-300 mb-2">{t.character.hairColor}</label>
              <select 
                value={hairColor} 
                onChange={(e) => setHairColor(e.target.value)}
                className="select-field"
              >
                <option value="none">{t.character.hairOptions.none}</option>
                <option value="black">{t.character.hairOptions.black}</option>
                <option value="brown">{t.character.hairOptions.brown}</option>
                <option value="blonde">{t.character.hairOptions.blonde}</option>
                <option value="red">{t.character.hairOptions.red}</option>
                <option value="pink">{t.character.hairOptions.pink}</option>
                <option value="blue">{t.character.hairOptions.blue}</option>
                <option value="purple">{t.character.hairOptions.purple}</option>
                <option value="green">{t.character.hairOptions.green}</option>
                <option value="white">{t.character.hairOptions.white}</option>
                <option value="silver">{t.character.hairOptions.silver}</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm text-dark-300 mb-2">{t.character.hairStyle}</label>
              <select 
                value={hairStyle} 
                onChange={(e) => setHairStyle(e.target.value)}
                className="select-field"
              >
                <option value="none">{t.character.hairStyleOptions.none}</option>
                <option value="short">{t.character.hairStyleOptions.short}</option>
                <option value="long">{t.character.hairStyleOptions.long}</option>
                <option value="ponytail">{t.character.hairStyleOptions.ponytail}</option>
                <option value="twintails">{t.character.hairStyleOptions.twintails}</option>
                <option value="braided">{t.character.hairStyleOptions.braid}</option>
                <option value="bun">{t.character.hairStyleOptions.bun}</option>
                <option value="bob">{t.character.hairStyleOptions.bob}</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm text-dark-300 mb-2">{t.character.eyeColor}</label>
              <select 
                value={eyeColor} 
                onChange={(e) => setEyeColor(e.target.value)}
                className="select-field"
              >
                <option value="none">{t.character.hairOptions.none}</option>
                <option value="black">{t.character.hairOptions.black}</option>
                <option value="brown">{t.character.hairOptions.brown}</option>
                <option value="blue">{t.character.hairOptions.blue}</option>
                <option value="green">{t.character.hairOptions.green}</option>
                <option value="red">{t.character.hairOptions.red}</option>
                <option value="purple">{t.character.hairOptions.purple}</option>
                <option value="golden">{t.character.hairOptions.blonde}</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm text-dark-300 mb-2">{t.character.expression}</label>
              <select 
                value={expression} 
                onChange={(e) => setExpression(e.target.value)}
                className="select-field"
              >
                <option value="none">{t.character.expressionOptions.none}</option>
                <option value="happy">{t.character.expressionOptions.happy}</option>
                <option value="sad">{t.character.expressionOptions.sad}</option>
                <option value="angry">{t.character.expressionOptions.angry}</option>
                <option value="surprised">{t.character.expressionOptions.surprised}</option>
                <option value="calm">{t.character.expressionOptions.calm}</option>
                <option value="determined">{t.character.expressionOptions.determined}</option>
                <option value="shy">{t.character.expressionOptions.shy}</option>
                <option value="confident">{t.character.expressionOptions.confident}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Scene Section */}
        <div className="card">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-accent-pink/20 flex items-center justify-center">
              <span className="text-accent-pink">🏞️</span>
            </span>
            {t.scene.title}
          </h3>
          
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-dark-300 mb-2">{t.scene.location}</label>
              <select 
                value={location} 
                onChange={(e) => setLocation(e.target.value)}
                className="select-field"
              >
                <option value="none">{t.scene.locationOptions.none}</option>
                <option value="city background">{t.scene.locationOptions.city}</option>
                <option value="school">{t.scene.locationOptions.school}</option>
                <option value="forest">{t.scene.locationOptions.forest}</option>
                <option value="beach">{t.scene.locationOptions.beach}</option>
                <option value="mountain">{t.scene.locationOptions.mountain}</option>
                <option value="castle">{t.scene.locationOptions.castle}</option>
                <option value="space">{t.scene.locationOptions.space}</option>
                <option value="underwater">{t.scene.locationOptions.underwater}</option>
                <option value="cafe">{t.scene.locationOptions.cafe}</option>
                <option value="bedroom">{t.scene.locationOptions.bedroom}</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm text-dark-300 mb-2">{t.scene.time}</label>
              <select 
                value={time} 
                onChange={(e) => setTime(e.target.value)}
                className="select-field"
              >
                <option value="none">{t.scene.timeOptions.none}</option>
                <option value="daytime">{t.scene.timeOptions.day}</option>
                <option value="night">{t.scene.timeOptions.night}</option>
                <option value="sunset">{t.scene.timeOptions.sunset}</option>
                <option value="sunrise">{t.scene.timeOptions.sunrise}</option>
                <option value="golden hour">{t.scene.timeOptions.golden_hour}</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm text-dark-300 mb-2">{t.scene.weather}</label>
              <select 
                value={weather} 
                onChange={(e) => setWeather(e.target.value)}
                className="select-field"
              >
                <option value="none">{t.scene.weatherOptions.none}</option>
                <option value="clear sky">{t.scene.weatherOptions.clear}</option>
                <option value="cloudy">{t.scene.weatherOptions.cloudy}</option>
                <option value="rain">{t.scene.weatherOptions.rain}</option>
                <option value="snow">{t.scene.weatherOptions.snow}</option>
                <option value="storm">{t.scene.weatherOptions.storm}</option>
                <option value="foggy">{t.scene.weatherOptions.fog}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Style Section */}
        <div className="card">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-accent-purple/20 flex items-center justify-center">
              <span className="text-accent-purple">🎨</span>
            </span>
            {t.style.title}
          </h3>
          
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-dark-300 mb-2">{t.style.artStyle}</label>
              <select 
                value={artStyle} 
                onChange={(e) => setArtStyle(e.target.value)}
                className="select-field"
              >
                <option value="none">{t.style.artStyleOptions.none}</option>
                <option value="anime">{t.style.artStyleOptions.anime}</option>
                <option value="manga">{t.style.artStyleOptions.manga}</option>
                <option value="chibi">{t.style.artStyleOptions.chibi}</option>
                <option value="semi-realistic">{t.style.artStyleOptions.realistic}</option>
                <option value="watercolor">{t.style.artStyleOptions.watercolor}</option>
                <option value="cel shading">{t.style.artStyleOptions.cel_shading}</option>
                <option value="studio ghibli">{t.style.artStyleOptions.ghibli}</option>
                <option value="cyberpunk">{t.style.artStyleOptions.cyberpunk}</option>
                <option value="fantasy">{t.style.artStyleOptions.fantasy}</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm text-dark-300 mb-2">{t.style.lighting}</label>
              <select 
                value={lighting} 
                onChange={(e) => setLighting(e.target.value)}
                className="select-field"
              >
                <option value="none">{t.style.lightingOptions.none}</option>
                <option value="soft">{t.style.lightingOptions.soft}</option>
                <option value="dramatic">{t.style.lightingOptions.dramatic}</option>
                <option value="backlit">{t.style.lightingOptions.backlit}</option>
                <option value="neon">{t.style.lightingOptions.neon}</option>
                <option value="natural">{t.style.lightingOptions.natural}</option>
                <option value="studio">{t.style.lightingOptions.studio}</option>
                <option value="cinematic">{t.style.lightingOptions.cinematic}</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm text-dark-300 mb-2">{t.style.camera}</label>
              <select 
                value={camera} 
                onChange={(e) => setCamera(e.target.value)}
                className="select-field"
              >
                <option value="none">{t.style.cameraOptions.none}</option>
                <option value="portrait">{t.style.cameraOptions.portrait}</option>
                <option value="full body">{t.style.cameraOptions.full_body}</option>
                <option value="close-up">{t.style.cameraOptions.close_up}</option>
                <option value="wide">{t.style.cameraOptions.wide}</option>
                <option value="dutch angle">{t.style.cameraOptions.dutch}</option>
                <option value="low angle">{t.style.cameraOptions.low}</option>
                <option value="high angle">{t.style.cameraOptions.high}</option>
                <option value="pov">{t.style.cameraOptions.pov}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Parameters Section */}
        <div className="card">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-accent-cyan/20 flex items-center justify-center">
              <span className="text-accent-cyan">⚙️</span>
            </span>
            {t.parameters.title}
          </h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-dark-300 mb-2">{t.parameters.aspectRatio}</label>
              <select 
                value={aspectRatio} 
                onChange={(e) => setAspectRatio(e.target.value)}
                className="select-field"
              >
                <option value="1:1">1:1 (Square)</option>
                <option value="3:4">3:4 (Portrait)</option>
                <option value="2:3">2:3 (Portrait)</option>
                <option value="4:3">4:3 (Landscape)</option>
                <option value="16:9">16:9 (Widescreen)</option>
                <option value="21:9">21:9 (Ultrawide)</option>
                <option value="9:16">9:16 (Mobile)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm text-dark-300 mb-2">{t.parameters.stylize}</label>
              <input
                type="range"
                min="0"
                max="1000"
                step="50"
                value={stylize}
                onChange={(e) => setStylize(e.target.value)}
                className="w-full h-2 bg-dark-700 rounded-lg appearance-none cursor-pointer accent-primary-500"
              />
              <div className="text-center text-sm text-dark-300 mt-1">{stylize}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Output Panel */}
      <div className="lg:sticky lg:top-24 h-fit">
        <div className="card border-primary-500/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary-400" />
            {t.output.title}
          </h3>
          
          <div className="bg-dark-900 rounded-xl p-4 min-h-[120px] mb-4 border border-dark-600">
            {prompt ? (
              <p className="text-white font-mono text-sm leading-relaxed">{prompt}</p>
            ) : (
              <p className="text-dark-500 text-sm italic">{t.output.empty}</p>
            )}
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={copyToClipboard}
              disabled={!prompt}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all ${
                prompt
                  ? 'bg-dark-700 hover:bg-dark-600 text-white'
                  : 'bg-dark-800 text-dark-500 cursor-not-allowed'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-400" />
                  {t.output.copied}
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  {t.output.copy}
                </>
              )}
            </button>
            
            <a
              href="https://nijijourney.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn-primary flex items-center justify-center gap-2"
            >
              {t.output.create}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
