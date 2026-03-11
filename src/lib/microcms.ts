/**
 * microCMS APIクライアント
 * 環境変数が未設定の場合はnullを返し、静的データにフォールバックする
 */
import { createClient } from 'microcms-js-sdk';

// ============================================================
// クライアント初期化
// ============================================================
const isCmsConfigured =
  typeof process.env.MICROCMS_SERVICE_DOMAIN === 'string' &&
  process.env.MICROCMS_SERVICE_DOMAIN.length > 0 &&
  typeof process.env.MICROCMS_API_KEY === 'string' &&
  process.env.MICROCMS_API_KEY.length > 0;

const client = isCmsConfigured
  ? createClient({
      serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
      apiKey: process.env.MICROCMS_API_KEY!,
    })
  : null;

// ============================================================
// 型定義
// ============================================================
export type ServiceType = 'estate-clearing' | 'garbage-cleaning' | 'special-cleaning';

export interface CmsCaseStudy {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  slug: string;
  title: string;
  serviceType: ServiceType;
  prefecture: string;
  area: string;
  roomType: string;
  priceBand: string;
  workTime: string;
  workerCount: number;
  tags: string[];
  summary: string;
  beforeImage?: { url: string; height: number; width: number };
  afterImage?: { url: string; height: number; width: number };
  hasMemorialSupport: boolean;
  hasSpecialCleaning: boolean;
}

export interface CmsFaq {
  id: string;
  createdAt: string;
  updatedAt: string;
  category: string;
  question: string;
  answer: string;
  sortOrder?: number;
}

export interface CmsService {
  id: string;
  createdAt: string;
  updatedAt: string;
  serviceId: string;
  slug: string;
  title: string;
  shortDescription: string;
  heroTitle: string;
  heroDescription: string;
  features: string[];
  mainImage?: { url: string; height: number; width: number };
}

// ============================================================
// 施工事例 API
// ============================================================

/** 施工事例の一覧を取得（CMS未設定時はnullを返す → 呼び出し側でフォールバック） */
export async function fetchCaseStudies(options?: { limit?: number }): Promise<CmsCaseStudy[] | null> {
  if (!client) return null;
  try {
    const data = await client.getList<CmsCaseStudy>({
      endpoint: 'cases',
      queries: { limit: options?.limit ?? 50, orders: '-publishedAt' },
    });
    return data.contents;
  } catch (e) {
    console.error('[microCMS] cases fetch error:', e);
    return null;
  }
}

/** 施工事例の詳細をslugで取得 */
export async function fetchCaseStudyBySlug(slug: string): Promise<CmsCaseStudy | null> {
  if (!client) return null;
  try {
    const data = await client.getList<CmsCaseStudy>({
      endpoint: 'cases',
      queries: { filters: `slug[equals]${slug}`, limit: 1 },
    });
    return data.contents[0] ?? null;
  } catch (e) {
    console.error('[microCMS] case detail fetch error:', e);
    return null;
  }
}

/** generateStaticParams用: 全slugを取得 */
export async function fetchAllCaseSlugs(): Promise<{ slug: string }[]> {
  if (!client) return [];
  try {
    const data = await client.getList<CmsCaseStudy>({
      endpoint: 'cases',
      queries: { fields: 'slug', limit: 200 },
    });
    return data.contents.map((c) => ({ slug: c.slug }));
  } catch (e) {
    console.error('[microCMS] case slugs fetch error:', e);
    return [];
  }
}

// ============================================================
// FAQ API
// ============================================================

export async function fetchFaqs(): Promise<CmsFaq[] | null> {
  if (!client) return null;
  try {
    const data = await client.getList<CmsFaq>({
      endpoint: 'faqs',
      queries: { limit: 100, orders: 'sortOrder' },
    });
    return data.contents;
  } catch (e) {
    console.error('[microCMS] faqs fetch error:', e);
    return null;
  }
}

// ============================================================
// サービス API
// ============================================================

export async function fetchServices(): Promise<CmsService[] | null> {
  if (!client) return null;
  try {
    const data = await client.getList<CmsService>({
      endpoint: 'services',
      queries: { limit: 20 },
    });
    return data.contents;
  } catch (e) {
    console.error('[microCMS] services fetch error:', e);
    return null;
  }
}

export async function fetchServiceBySlug(slug: string): Promise<CmsService | null> {
  if (!client) return null;
  try {
    const data = await client.getList<CmsService>({
      endpoint: 'services',
      queries: { filters: `slug[equals]${slug}`, limit: 1 },
    });
    return data.contents[0] ?? null;
  } catch (e) {
    console.error('[microCMS] service detail fetch error:', e);
    return null;
  }
}

export async function fetchAllServiceSlugs(): Promise<{ slug: string }[]> {
  if (!client) return [];
  try {
    const data = await client.getList<CmsService>({
      endpoint: 'services',
      queries: { fields: 'slug', limit: 20 },
    });
    return data.contents.map((s) => ({ slug: s.slug }));
  } catch (e) {
    console.error('[microCMS] service slugs fetch error:', e);
    return [];
  }
}
