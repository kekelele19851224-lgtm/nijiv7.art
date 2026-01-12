export interface PromptTemplate {
  id: string
  category: 'character' | 'action' | 'landscape' | 'style'
  prompt: string
  preview?: string
}

export const promptTemplates: PromptTemplate[] = [
  // Character Prompts
  {
    id: '1',
    category: 'character',
    prompt: 'cute anime girl, long silver hair flowing in wind, deep blue eyes, school uniform, cherry blossom petals, golden hour lighting --niji 7 --ar 3:4'
  },
  {
    id: '2',
    category: 'character',
    prompt: 'handsome anime boy, short messy black hair, red eyes, wearing hoodie, urban city background, neon lights, night scene --niji 7 --ar 3:4'
  },
  {
    id: '3',
    category: 'character',
    prompt: 'elegant anime princess, long pink hair in elaborate updo, golden tiara, flowing white gown, castle ballroom, dramatic lighting --niji 7 --ar 2:3'
  },
  {
    id: '4',
    category: 'character',
    prompt: 'chibi character, big sparkling eyes, pastel colors, holding a star wand, magical girl outfit, cute pose --niji 7 --ar 1:1 --stylize 200'
  },
  {
    id: '5',
    category: 'character',
    prompt: 'mysterious anime woman, long purple hair, golden eyes, traditional japanese kimono, moonlit garden, petals floating --niji 7 --ar 2:3'
  },
  {
    id: '6',
    category: 'character',
    prompt: 'cool anime protagonist, spiky blonde hair, determined expression, battle-worn armor, epic pose, dramatic sky background --niji 7 --ar 3:4'
  },
  
  // Action Prompts
  {
    id: '7',
    category: 'action',
    prompt: 'magical girl mid-transformation, swirling energy ribbons, sparkles and light particles, intricate costume design, dramatic angle --niji 7 --ar 16:9'
  },
  {
    id: '8',
    category: 'action',
    prompt: 'anime swordsman in dynamic slash pose, motion blur, energy trail from blade, intense expression, dust particles --niji 7 --ar 16:9'
  },
  {
    id: '9',
    category: 'action',
    prompt: 'mecha pilot in cockpit, intense battle scene, holographic displays, dramatic lighting, speed lines --niji 7 --ar 16:9'
  },
  {
    id: '10',
    category: 'action',
    prompt: 'ninja leaping through moonlit rooftops, dynamic pose, flowing scarf, shuriken in hand, japanese castle background --niji 7 --ar 16:9'
  },
  {
    id: '11',
    category: 'action',
    prompt: 'witch casting powerful spell, magical circles, glowing runes, wind effect on hair and clothes, mystical energy --niji 7 --ar 3:4'
  },
  
  // Landscape Prompts
  {
    id: '12',
    category: 'landscape',
    prompt: 'anime landscape, floating islands in the sky, dramatic sunset clouds, distant mountains, studio ghibli inspired, peaceful atmosphere --niji 7 --ar 21:9'
  },
  {
    id: '13',
    category: 'landscape',
    prompt: 'japanese shrine on mountain top, cherry blossoms, misty atmosphere, morning sunlight, torii gate, peaceful --niji 7 --ar 16:9'
  },
  {
    id: '14',
    category: 'landscape',
    prompt: 'cyberpunk city at night, neon signs, rain-soaked streets, reflections, flying cars, dense urban environment --niji 7 --ar 16:9'
  },
  {
    id: '15',
    category: 'landscape',
    prompt: 'underwater fantasy kingdom, bioluminescent plants, ancient ruins, schools of colorful fish, light rays from surface --niji 7 --ar 16:9'
  },
  {
    id: '16',
    category: 'landscape',
    prompt: 'cozy anime cafe interior, warm lighting, plants, wooden furniture, large windows, afternoon sunlight, slice of life --niji 7 --ar 16:9'
  },
  {
    id: '17',
    category: 'landscape',
    prompt: 'fantasy forest path, giant ancient trees, magical mushrooms, fireflies, dappled sunlight, mysterious atmosphere --niji 7 --ar 16:9'
  },
  
  // Style Reference Prompts
  {
    id: '18',
    category: 'style',
    prompt: 'portrait of a warrior princess, ornate golden armor, fierce expression, dramatic side lighting --niji 7 --sref [your-image-url] --sw 100'
  },
  {
    id: '19',
    category: 'style',
    prompt: 'anime character in vintage 90s style, cel shading, nostalgic color palette, VHS aesthetic --niji 7 --stylize 300'
  },
  {
    id: '20',
    category: 'style',
    prompt: 'watercolor anime illustration, soft edges, pastel colors, dreamy atmosphere, gentle lighting --niji 7 --stylize 400'
  },
  {
    id: '21',
    category: 'style',
    prompt: 'dark fantasy anime style, detailed linework, gothic architecture, dramatic shadows, moody atmosphere --niji 7 --stylize 250'
  },
  {
    id: '22',
    category: 'style',
    prompt: 'minimalist anime portrait, clean lines, limited color palette, negative space, modern design --niji 7 --stylize 100'
  },
  {
    id: '23',
    category: 'style',
    prompt: 'retro anime screenshot, 1980s aesthetic, grain texture, warm color grading, nostalgic feel --niji 7 --stylize 350'
  }
]
