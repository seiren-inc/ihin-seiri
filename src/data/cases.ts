export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  serviceType: 'estate-clearing' | 'garbage-cleaning' | 'special-cleaning';
  prefecture: string;
  area: string;
  roomType: string;
  priceBand: string;
  workTime: string;
  workerCount: number;
  tags: string[];
  summary: string;
  hasMemorialSupport: boolean;
  hasSpecialCleaning: boolean;
  beforeImagePlaceholder: string;
  afterImagePlaceholder: string;
  published: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'case-yokohama-1',
    slug: 'yokohama-estate-clearing-3ldk',
    title: 'ご実家の遺品整理と合同供養',
    serviceType: 'estate-clearing',
    prefecture: '神奈川県',
    area: '横浜市',
    roomType: '3LDK',
    priceBand: '20万円〜',
    workTime: '6時間',
    workerCount: 4,
    tags: ['実家整理', '供養対応', '買取含む'],
    summary: '遠方にお住まいのご遺族からのご依頼。貴重品の探索とお仏壇の合同供養を合わせて承りました。',
    hasMemorialSupport: true,
    hasSpecialCleaning: false,
    beforeImagePlaceholder: 'Before Image (3LDK 遺品整理)',
    afterImagePlaceholder: 'After Image (3LDK 遺品整理)',
    published: true,
  },
  {
    id: 'case-tokyo-1',
    slug: 'tokyo-garbage-cleaning-1k',
    title: '退去に伴うアパートのゴミ屋敷清掃',
    serviceType: 'garbage-cleaning',
    prefecture: '東京都',
    area: '世田谷区',
    roomType: '1K',
    priceBand: '10万円〜',
    workTime: '3時間',
    workerCount: 3,
    tags: ['即日対応', '秘密厳守', '退去前'],
    summary: '長年溜め込んでしまったゴミの撤去。引越し退去日が迫っている中、近隣に配慮しながら短時間で作業を完了しました。',
    hasMemorialSupport: false,
    hasSpecialCleaning: false,
    beforeImagePlaceholder: 'Before Image (1K ゴミ屋敷)',
    afterImagePlaceholder: 'After Image (1K ゴミ屋敷)',
    published: true,
  },
  {
    id: 'case-saitama-1',
    slug: 'saitama-special-cleaning-1r',
    title: '孤独死現場の特殊清掃と消臭',
    serviceType: 'special-cleaning',
    prefecture: '埼玉県',
    area: 'さいたま市',
    roomType: '1R',
    priceBand: '15万円〜',
    workTime: '4日間',
    workerCount: 2,
    tags: ['孤独死', '完全消臭', 'オゾン脱臭'],
    summary: '死後数週間が経過した現場。初期消臭と汚染物の撤去後、オゾン脱臭機を数日間稼働させ、完全に異臭を取り除きました。',
    hasMemorialSupport: true,
    hasSpecialCleaning: true,
    beforeImagePlaceholder: 'Before Image (1R 特殊清掃)',
    afterImagePlaceholder: 'After Image (1R 特殊清掃)',
    published: true,
  }
];
