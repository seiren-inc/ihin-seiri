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
    title: '神奈川県横浜市｜3LDKご実家の遺品整理とお仏壇の合同供養',
    serviceType: 'estate-clearing',
    prefecture: '神奈川県',
    area: '横浜市',
    roomType: '3LDK',
    priceBand: '20万円〜',
    workTime: '6時間',
    workerCount: 4,
    tags: ['実家整理', '供養対応', '買取含む'],
    summary: '施設に入居されたお母様のご自宅を、関西在住のご遺族に代わってすべて対応。貴重品・通帳類の探索から、長年使われていたお仏壇の合同供養まで一括で承りました。',
    hasMemorialSupport: true,
    hasSpecialCleaning: false,
    beforeImagePlaceholder: '/images/service-estate.png',
    afterImagePlaceholder: '/images/case-01-after.png',
    published: true,
  },
  {
    id: 'case-tokyo-1',
    slug: 'tokyo-garbage-cleaning-1k',
    title: '東京都世田谷区｜1Kゴミ屋敷の清掃と退去前原状回復',
    serviceType: 'garbage-cleaning',
    prefecture: '東京都',
    area: '世田谷区',
    roomType: '1K',
    priceBand: '10万円〜',
    workTime: '3時間',
    workerCount: 3,
    tags: ['即日対応', '秘密厳守', '退去前'],
    summary: '退去期日まで3日という状況でのご依頼。近隣に配慮した静粛な作業で、床が見えない状態から清潔な原状に戻しました。翌日の退去立ち会いにも間に合いました。',
    hasMemorialSupport: false,
    hasSpecialCleaning: false,
    beforeImagePlaceholder: '/images/service-garbage.png',
    afterImagePlaceholder: '/images/case-02-after.png',
    published: true,
  },
  {
    id: 'case-saitama-1',
    slug: 'saitama-special-cleaning-1r',
    title: '埼玉県さいたま市｜1R孤独死現場の特殊清掃・完全消臭',
    serviceType: 'special-cleaning',
    prefecture: '埼玉県',
    area: 'さいたま市',
    roomType: '1R',
    priceBand: '15万円〜',
    workTime: '4日間',
    workerCount: 2,
    tags: ['孤独死', '完全消臭', 'オゾン脱臭'],
    summary: '死後数週間が経過した現場を対応。汚染物の完全撤去後、専用オゾン脱臭機を72時間稼働させ異臭を根本から除去。大家様・ご遺族から「プロに任せて良かった」とのお言葉をいただきました。',
    hasMemorialSupport: true,
    hasSpecialCleaning: true,
    beforeImagePlaceholder: '/images/service-special.png',
    afterImagePlaceholder: '/images/case-02-after.png',
    published: true,
  }
];
