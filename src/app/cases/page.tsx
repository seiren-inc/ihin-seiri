import Link from 'next/link';
import { Button } from '@/components/common/Button';
import Image from 'next/image';
import { PageHero } from '@/components/layout/PageHero';
import { fetchCaseStudies } from '@/lib/microcms';
// CMS未設定時のフォールバック
import { caseStudies as staticCaseStudies } from '@/data/cases';

import { JsonLd, generateBreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata = {
  title: '施工事例 | 清蓮｜遺品整理サービス',
  description: '遺品整理、ゴミ清掃、特殊清掃の施工事例をご紹介します。参考料金や作業時間なども掲載しています。',
  alternates: {
    canonical: '/cases',
  },
  openGraph: {
    url: '/cases',
  },
};

// ISR: 60秒ごとに再生成（CMS更新が自動反映される）
export const revalidate = 60;

export default async function CasesPage() {
  // CMS から取得。取得できない場合は静的データにフォールバック
  const cmsCases = await fetchCaseStudies();

  const cases = cmsCases
    ? cmsCases.map((c) => ({
        id: c.id,
        slug: c.slug,
        title: c.title,
        roomType: c.roomType,
        prefecture: c.prefecture,
        area: c.area,
        priceBand: c.priceBand,
        workTime: c.workTime,
        workerCount: c.workerCount,
        hasMemorialSupport: c.hasMemorialSupport,
        afterImageSrc: c.afterImage?.url ?? '/images/hero-main.png',
      }))
    : staticCaseStudies
        .filter((c) => c.published)
        .map((c) => ({
          id: c.id,
          slug: c.slug,
          title: c.title,
          roomType: c.roomType,
          prefecture: c.prefecture,
          area: c.area,
          priceBand: c.priceBand,
          workTime: c.workTime,
          workerCount: c.workerCount,
          hasMemorialSupport: c.hasMemorialSupport,
          afterImageSrc: c.afterImagePlaceholder || '/images/hero-main.png',
        }));

  return (
    <>
      <JsonLd data={[
        generateBreadcrumbSchema([
          { name: 'ホーム', item: '/' },
          { name: '施工事例', item: '/cases' },
        ])
      ]} />
      <div className="bg-background">
      <PageHero
        title="施工事例"
        description="ご遺族様に寄り添い、丁寧に向き合わせていただいた清蓮の施工事例をご紹介します。"
        backgroundImage="/images/hero-main.png"
      />

      <div className="max-w-[1200px] mx-auto px-6 py-24">
        {/* フィルター（静的表示） */}
        <div className="mb-12 text-center">
          <div className="inline-flex gap-2 p-2 bg-bg-section rounded-full flex-wrap justify-center">
            <span className="px-5 py-2 bg-primary text-white text-sm font-bold rounded-full cursor-pointer">すべて</span>
            <span className="px-5 py-2 bg-transparent text-text-sub text-sm font-bold rounded-full cursor-pointer hover:bg-border/50 transition-colors">遺品整理</span>
            <span className="px-5 py-2 bg-transparent text-text-sub text-sm font-bold rounded-full cursor-pointer hover:bg-border/50 transition-colors">ゴミ清掃</span>
            <span className="px-5 py-2 bg-transparent text-text-sub text-sm font-bold rounded-full cursor-pointer hover:bg-border/50 transition-colors">特殊清掃</span>
          </div>
        </div>

        {/* 事例グリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy) => (
            <Link
              key={caseStudy.id}
              href={`/cases/${caseStudy.slug}`}
              className="group bg-white border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 anim-fadeup"
            >
              <div className="relative w-full aspect-[4/3] bg-bg-light overflow-hidden">
                <Image
                  src={caseStudy.afterImageSrc}
                  alt={`${caseStudy.title}の施工後画像`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6">
                {/* タグ */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-bg-section text-text-sub text-xs font-bold px-2 py-1 rounded">
                    {caseStudy.roomType}
                  </span>
                  <span className="bg-bg-section text-text-sub text-xs font-bold px-2 py-1 rounded">
                    {caseStudy.prefecture}{caseStudy.area}
                  </span>
                  {caseStudy.hasMemorialSupport && (
                    <span className="bg-accent/10 text-accent text-xs font-bold px-2 py-1 rounded">
                      供養対応
                    </span>
                  )}
                </div>

                <h2 className="text-xl font-bold text-primary-dark group-hover:text-primary transition-colors duration-200 mb-4 leading-snug">
                  {caseStudy.title}
                </h2>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="block text-xs text-text-sub mb-1">作業料金目安</span>
                    <strong className="text-text font-bold">{caseStudy.priceBand}</strong>
                  </div>
                  <div>
                    <span className="block text-xs text-text-sub mb-1">作業時間</span>
                    <strong className="text-text font-bold">{caseStudy.workTime} / {caseStudy.workerCount}名</strong>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-text-sub mb-6">その他の事例も多数ございます。まずはお気軽にお問い合わせください。</p>
          <Button href="/contact" size="lg">無料相談・お見積り</Button>
        </div>
      </div>
    </div>
    </>
  );
}
