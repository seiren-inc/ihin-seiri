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
    <div className="page-cases">
      <div className="bg-section section-py-md">
        <div className="container text-center">
          <h1 className="section-title">施工事例</h1>
          <p className="section-desc">清蓮でサポートさせていただいた事例をご紹介します。</p>
        </div>
      </div>

      <div className="container section-py-lg">
        {/* Simple Filter UI (Static display for Phase 2/3) */}
        <div className="filter-wrapper mb-xl text-center" style={{ marginBottom: '3rem' }}>
          <div className="inline-flex gap-sm p-xs" style={{ background: 'var(--color-bg-section)', borderRadius: '100px', display: 'inline-flex', padding: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span className="btn btn-sm btn-primary" style={{ borderRadius: '100px' }}>すべて</span>
            <span className="btn btn-sm" style={{ borderRadius: '100px', background: 'transparent' }}>遺品整理</span>
            <span className="btn btn-sm" style={{ borderRadius: '100px', background: 'transparent' }}>ゴミ清掃</span>
            <span className="btn btn-sm" style={{ borderRadius: '100px', background: 'transparent' }}>特殊清掃</span>
          </div>
        </div>

        <div className="case-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {publishedCases.map(caseStudy => (
            <Link key={caseStudy.id} href={`/cases/${caseStudy.slug}`} className="case-card">
              <ImagePlaceholder text={caseStudy.afterImagePlaceholder} aspectRatio="4:3" />
              <div className="case-card-content" style={{ padding: '1.5rem' }}>
                <div className="flex gap-xs mb-sm" style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                  <span className="case-tag" style={{ background: 'var(--color-bg-section)', fontSize: '0.75rem', padding: '0.25rem 0.5rem', borderRadius: '4px', fontWeight: 700 }}>{caseStudy.roomType}</span>
                  <span className="case-tag" style={{ background: 'var(--color-bg-section)', fontSize: '0.75rem', padding: '0.25rem 0.5rem', borderRadius: '4px', fontWeight: 700 }}>{caseStudy.prefecture}{caseStudy.area}</span>
                  {caseStudy.hasMemorialSupport && (
                    <span className="case-tag" style={{ background: 'rgba(58, 143, 183, 0.1)', color: 'var(--color-accent)', fontSize: '0.75rem', padding: '0.25rem 0.5rem', borderRadius: '4px', fontWeight: 700 }}>供養対応</span>
                  )}
                </div>
                <h2 className="case-title text-primary-dark hover-text-primary" style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 700, lineHeight: 1.4 }}>
                  {caseStudy.title}
                </h2>
                <div className="grid grid-cols-2 gap-sm text-sub" style={{ fontSize: '0.875rem' }}>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.75rem', opacity: 0.8 }}>作業料金目安</span>
                    <strong style={{ color: 'var(--color-text)' }}>{caseStudy.priceBand}</strong>
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.75rem', opacity: 0.8 }}>作業時間</span>
                    <strong style={{ color: 'var(--color-text)' }}>{caseStudy.workTime} / {caseStudy.workerCount}名</strong>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-xl" style={{ marginTop: '3rem' }}>
          <p className="text-sub mb-md">その他の事例も多数ございます。まずはお気軽にお問い合わせください。</p>
          <Button href="/contact" size="lg">無料相談・お見積り</Button>
        </div>
      </div>
    </div>
  );
}
