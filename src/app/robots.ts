import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.seiren-ihin.jp';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
      // GEO (Generative Engine Optimization) 対策：AIクローラーに優良コンテンツを明示的に開放
      {
        userAgent: 'GPTBot',
        allow: ['/faq', '/reasons', '/cases', '/services', '/flow'],
      },
      {
        userAgent: 'Google-Extended',
        allow: ['/faq', '/reasons', '/cases', '/services', '/flow'],
      },
      {
        userAgent: 'Claude-Web',
        allow: ['/faq', '/reasons', '/cases', '/services', '/flow'],
      },
      {
        userAgent: 'anthropic-ai',
        allow: ['/faq', '/reasons', '/cases', '/services', '/flow'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: ['/faq', '/reasons', '/cases', '/services', '/flow'],
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
