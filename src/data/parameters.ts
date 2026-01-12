export interface Parameter {
  name: string
  description: {
    en: string
    ja: string
    ko: string
    zh: string
    'zh-tw': string
  }
  usage: string
  example: string
  default?: string
  range?: string
}

export const parameters: Parameter[] = [
  {
    name: '--niji 7',
    description: {
      en: 'Activates Niji V7 model for anime-style generation',
      ja: 'Niji V7モデルをアクティブにしてアニメスタイルを生成',
      ko: 'Niji V7 모델을 활성화하여 애니메이션 스타일 생성',
      zh: '激活 Niji V7 模型以生成动漫风格图像',
      'zh-tw': '啟用 Niji V7 模型以生成動漫風格圖像'
    },
    usage: '--niji 7',
    example: 'cute anime girl --niji 7'
  },
  {
    name: '--ar',
    description: {
      en: 'Sets the aspect ratio of the generated image',
      ja: '生成される画像のアスペクト比を設定',
      ko: '생성된 이미지의 화면 비율을 설정',
      zh: '设置生成图像的宽高比',
      'zh-tw': '設定生成圖像的寬高比'
    },
    usage: '--ar width:height',
    example: '--ar 16:9, --ar 3:4, --ar 1:1',
    default: '1:1'
  },
  {
    name: '--stylize / --s',
    description: {
      en: 'Controls how strongly Niji applies its default aesthetic style. Higher values = more stylized',
      ja: 'Nijiがデフォルトの美的スタイルをどの程度適用するかを制御。値が高いほどスタイライズされる',
      ko: 'Niji가 기본 미적 스타일을 얼마나 강하게 적용하는지 제어. 높은 값 = 더 스타일화',
      zh: '控制 Niji 应用默认美学风格的强度。值越高，风格化越强',
      'zh-tw': '控制 Niji 應用預設美學風格的強度。值越高，風格化越強'
    },
    usage: '--stylize <0-1000> or --s <0-1000>',
    example: '--stylize 250, --s 500',
    default: '100',
    range: '0-1000'
  },
  {
    name: '--sref',
    description: {
      en: 'Style Reference - Uses an image URL to influence the style of your generation',
      ja: 'スタイル参照 - 画像URLを使用して生成のスタイルに影響を与える',
      ko: '스타일 참조 - 이미지 URL을 사용하여 생성 스타일에 영향',
      zh: '风格参考 - 使用图像 URL 来影响生成的风格',
      'zh-tw': '風格參考 - 使用圖像 URL 來影響生成的風格'
    },
    usage: '--sref <image-url>',
    example: '--sref https://example.com/style.jpg'
  },
  {
    name: '--sw',
    description: {
      en: 'Style Weight - Controls how strongly the style reference is applied',
      ja: 'スタイルウェイト - スタイル参照の適用強度を制御',
      ko: '스타일 가중치 - 스타일 참조 적용 강도를 제어',
      zh: '风格权重 - 控制风格参考的应用强度',
      'zh-tw': '風格權重 - 控制風格參考的應用強度'
    },
    usage: '--sw <0-1000>',
    example: '--sw 100, --sw 500',
    default: '100',
    range: '0-1000'
  },
  {
    name: '--no',
    description: {
      en: 'Negative prompt - Tells the model what NOT to include in the image',
      ja: 'ネガティブプロンプト - 画像に含めないものをモデルに伝える',
      ko: '부정 프롬프트 - 이미지에 포함하지 않을 것을 모델에 지시',
      zh: '反向提示词 - 告诉模型不要在图像中包含什么',
      'zh-tw': '反向提示詞 - 告訴模型不要在圖像中包含什麼'
    },
    usage: '--no <items>',
    example: '--no text, watermark, blurry'
  },
  {
    name: '--chaos / --c',
    description: {
      en: 'Controls variation in results. Higher values produce more unexpected results',
      ja: '結果のバリエーションを制御。値が高いほど予想外の結果に',
      ko: '결과의 변화를 제어. 높은 값 = 더 예상치 못한 결과',
      zh: '控制结果的变化程度。值越高，结果越意外',
      'zh-tw': '控制結果的變化程度。值越高，結果越意外'
    },
    usage: '--chaos <0-100> or --c <0-100>',
    example: '--chaos 50, --c 25',
    default: '0',
    range: '0-100'
  },
  {
    name: '--seed',
    description: {
      en: 'Sets a seed number for reproducible results. Same seed + same prompt = similar image',
      ja: '再現可能な結果のためにシード番号を設定。同じシード+同じプロンプト=類似の画像',
      ko: '재현 가능한 결과를 위한 시드 번호 설정. 동일 시드 + 동일 프롬프트 = 유사 이미지',
      zh: '设置种子号以获得可复现的结果。相同种子 + 相同提示词 = 相似图像',
      'zh-tw': '設定種子號以獲得可複現的結果。相同種子 + 相同提示詞 = 相似圖像'
    },
    usage: '--seed <number>',
    example: '--seed 12345'
  },
  {
    name: '--q / --quality',
    description: {
      en: 'Controls rendering quality and generation time. Higher = better quality but slower',
      ja: 'レンダリング品質と生成時間を制御。高い=高品質だが遅い',
      ko: '렌더링 품질과 생성 시간을 제어. 높음 = 높은 품질이지만 느림',
      zh: '控制渲染质量和生成时间。值越高质量越好但越慢',
      'zh-tw': '控制渲染品質和生成時間。值越高品質越好但越慢'
    },
    usage: '--q <.25, .5, 1>',
    example: '--q 1',
    default: '1',
    range: '.25, .5, 1'
  },
  {
    name: '--tile',
    description: {
      en: 'Creates seamless, tileable patterns for textures and backgrounds',
      ja: 'テクスチャや背景用のシームレスなタイルパターンを作成',
      ko: '텍스처와 배경용 심리스 타일 패턴 생성',
      zh: '创建用于纹理和背景的无缝可平铺图案',
      'zh-tw': '創建用於紋理和背景的無縫可平鋪圖案'
    },
    usage: '--tile',
    example: 'floral pattern --tile --niji 7'
  },
  {
    name: '--style raw',
    description: {
      en: 'Reduces Niji default beautification for more direct prompt interpretation',
      ja: 'Nijiのデフォルト美化を減らし、より直接的なプロンプト解釈に',
      ko: 'Niji 기본 미화를 줄여 프롬프트를 더 직접적으로 해석',
      zh: '减少 Niji 的默认美化，更直接地解释提示词',
      'zh-tw': '減少 Niji 的預設美化，更直接地解釋提示詞'
    },
    usage: '--style raw',
    example: 'portrait photo --style raw --niji 7'
  },
  {
    name: '--repeat / --r',
    description: {
      en: 'Runs the same prompt multiple times (Standard: 2-4, Pro: 2-10)',
      ja: '同じプロンプトを複数回実行（Standard: 2-4、Pro: 2-10）',
      ko: '동일한 프롬프트를 여러 번 실행 (Standard: 2-4, Pro: 2-10)',
      zh: '多次运行相同的提示词（Standard: 2-4, Pro: 2-10）',
      'zh-tw': '多次運行相同的提示詞（Standard: 2-4, Pro: 2-10）'
    },
    usage: '--repeat <2-10> or --r <2-10>',
    example: '--repeat 4, --r 2',
    range: '2-10'
  }
]
