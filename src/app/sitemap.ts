import { MetadataRoute } from 'next';
import { caseStudies } from '@/data/cases';
import { services } from '@/data/services';
import { supportedAreas } from '@/data/areas';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.seiren-ihin.jp';

  // 静的ページのリスト
  const staticRoutes = [
    '',
    '/services',
    '/cases',
    '/areas',
    '/pricing',
    '/flow',
    '/faq',
    '/reasons',
    '/memorial-support',
    '/operator',
    '/contact',
    '/simulation',
    '/legal',
    '/privacy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // サービス詳細ページ（動的）
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // 施工事例ページ（動的）
  const caseRoutes = caseStudies
    .filter((c) => c.published)
    .map((c) => ({
      url: `${baseUrl}/cases/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

  // 対応エリアページ（動的）
  const areaRoutes = supportedAreas.map((area) => ({
    url: `${baseUrl}/areas/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...caseRoutes, ...areaRoutes];
}
