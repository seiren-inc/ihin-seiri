import Link from 'next/link';
import { caseStudies } from '@/data/cases';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { Button } from '@/components/common/Button';

export const metadata = {
  title: '施工事例 | 清蓮｜遺品整理サービス',
  description: '遺品整理、ゴミ清掃、特殊清掃の施工事例をご紹介します。参考料金や作業時間なども掲載しています。',
};

export default function CasesPage() {
  const publishedCases = caseStudies.filter(c => c.published);

  return (
    <div className="bg-background">
      {/* ページヘッダー */}
      <div className="bg-bg-section py-16">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-primary-dark mb-4">施工事例</h1>
          <p className="text-text-sub text-lg">清蓮でサポートさせていただいた事例をご紹介します。</p>
        </div>
      </div>

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
          {publishedCases.map(caseStudy => (
            <Link
              key={caseStudy.id}
              href={`/cases/${caseStudy.slug}`}
              className="group bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <ImagePlaceholder text={caseStudy.afterImagePlaceholder} aspectRatio="4:3" />
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
  );
}
