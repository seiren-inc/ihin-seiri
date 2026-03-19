import Script from 'next/script';

export type JsonLdProps = {
  data: Record<string, any> | Record<string, any>[];
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      strategy="afterInteractive"
    />
  );
}

// 共通で利用頻度が高い LocalBusiness スキーマ
export function generateLocalBusinessSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.seiren-ihin.jp';
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: '清蓮（せいれん）',
    image: `${baseUrl}/images/ogp.jpg`,
    '@id': baseUrl,
    url: baseUrl,
    telephone: '0120-000-000', // FIXME: 実際の電話番号
    priceRange: '¥¥',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ダミー住所1-2-3',
      addressLocality: '横浜市',
      addressRegion: '神奈川県',
      postalCode: '000-0000',
      addressCountry: 'JP'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.44778, // 横浜の中心座標サンプル
      longitude: 139.6425
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '09:00',
      closes: '20:00'
    }
  };
}

// 共通で利用頻度が高い BreadcrumbList スキーマ
export function generateBreadcrumbSchema(items: { name: string; item: string }[]) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.seiren-ihin.jp';
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.name,
      item: `${baseUrl}${breadcrumb.item}`,
    })),
  };
}
