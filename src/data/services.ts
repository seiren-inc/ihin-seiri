export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  heroTitle: string;
  heroDescription: string;
  features: string[];
}

export const services: ServiceData[] = [
  {
    id: 'estate-clearing',
    slug: 'estate-clearing',
    title: '遺品整理',
    shortDescription: '故人様の思い出の品を、ご遺族に寄り添って丁寧に整理・仕分けいたします。',
    heroTitle: '想いを大切にする遺品整理',
    heroDescription: '単なる片付けではなく、ご家族の想いや人生の整理として、心を込めてお手伝いいたします。',
    features: [
      '貴重品・思い出の品の丁寧な探索',
      '不用品の適正処理・買取査定',
      '提携寺院による合同供養・お焚き上げ対応',
      '女性スタッフ同行のご相談可能'
    ]
  },
  {
    id: 'garbage-cleaning',
    slug: 'garbage-cleaning',
    title: 'ゴミ屋敷清掃（ゴミ清掃）',
    shortDescription: '足の踏み場もない状態からでも、スピーディーかつ秘密厳守で原状回復いたします。',
    heroTitle: '誰にも知られず、確実な片付けを',
    heroDescription: 'ゴミ屋敷状態でお困りの方へ。周りに知られることなく、迅速に清潔な空間を取り戻します。',
    features: [
      '近隣への配慮と秘密厳守のアプローチ',
      '悪臭・害虫の発生源の徹底除去',
      '状態に応じたハウスクリーニングの同時提案',
      '経験豊富なプロによるスピーディーな作業'
    ]
  },
  {
    id: 'special-cleaning',
    slug: 'special-cleaning',
    title: '特殊清掃',
    shortDescription: '孤独死や事故等で汚染されたお部屋を、特殊な薬剤と技術で完全消臭・除菌いたします。',
    heroTitle: '早急な対応と、確かな消臭・除菌技術',
    heroDescription: '通常の清掃では落ちない血液や体液の汚れ、深刻な腐敗臭を専用の機材と薬剤で根本から消臭・除菌します。',
    features: [
      'オゾン脱臭機など専用機材を使用した完全消臭',
      '特殊薬剤による徹底的な除菌・感染症対策',
      '原状回復のためのリフォームのご相談（クロス・床材張り替え等）',
      '近隣住民へのご配慮を最優先した迅速な対応'
    ]
  }
];
