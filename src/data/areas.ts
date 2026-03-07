export interface Area {
  id: string;
  slug: string;
  name: string;
  prefecture: string;
}

export const supportedAreas: Area[] = [
  { id: 'kanagawa', slug: 'kanagawa', name: '神奈川県全域', prefecture: '神奈川県' },
  { id: 'tokyo', slug: 'tokyo', name: '東京都全域', prefecture: '東京都' },
  { id: 'chiba', slug: 'chiba', name: '千葉県全域', prefecture: '千葉県' },
  { id: 'saitama', slug: 'saitama', name: '埼玉県全域', prefecture: '埼玉県' },
  { id: 'ibaraki', slug: 'ibaraki', name: '茨城県全域', prefecture: '茨城県' },
  { id: 'tochigi', slug: 'tochigi', name: '栃木県全域', prefecture: '栃木県' },
  { id: 'gunma', slug: 'gunma', name: '群馬県全域', prefecture: '群馬県' },
];
