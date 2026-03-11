import { notFound } from 'next/navigation';
import { caseStudies } from '@/data/cases';
import { services } from '@/data/services';
import Image from 'next/image';
import { PageHero } from '@/components/layout/PageHero';
import { Button } from '@/components/common/Button';

export async function generateStaticParams() {
  return caseStudies.filter(c => c.published).map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((c) => c.slug === slug && c.published);
  if (!caseStudy) return { title: '事例が見つかりません' };

  return {
    title: `${caseStudy.title} | 施工事例 | 清蓮`,
    description: caseStudy.summary,
  };
}

export default async function CaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((c) => c.slug === slug && c.published);

  if (!caseStudy) {
    notFound();
  }

  const service = services.find(s => s.id === caseStudy.serviceType);

  return (
    <div className="page-case-detail">
      <PageHero
        title={caseStudy.title}
        description={`サービス：${service?.title || ''} ｜ エリア：${caseStudy.prefecture}${caseStudy.area}`}
        backgroundImage={caseStudy.afterImagePlaceholder || '/images/hero-main.png'}
      />

      <div className="container section-py-lg">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
          <div className="case-main-content lg:col-span-2" style={{ gridColumn: 'span 2' }}>
            
            <div className="before-after-grid grid grid-cols-1 md:grid-cols-2 gap-md mb-xl anim-fadeup" style={{ marginBottom: '3rem' }}>
              <div className="image-wrapper reveal-wrapper rounded-lg overflow-hidden relative shadow-md aspect-[4/3] bg-bg-light">
                <span className="label text-white absolute top-4 left-4 z-10" style={{ display: 'inline-block', padding: '0.25rem 1rem', background: 'rgba(0,0,0,0.6)', fontWeight: 700, borderRadius: '4px' }}>Before</span>
                <Image src={caseStudy.beforeImagePlaceholder || '/images/hero-main.png'} alt="作業前" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover reveal-img" />
              </div>
              <div className="image-wrapper reveal-wrapper rounded-lg overflow-hidden relative shadow-md aspect-[4/3] bg-bg-light" style={{ animationDelay: '0.2s' }}>
                <span className="label bg-primary text-white absolute top-4 left-4 z-10" style={{ display: 'inline-block', padding: '0.25rem 1rem', fontWeight: 700, borderRadius: '4px' }}>After</span>
                <Image src={caseStudy.afterImagePlaceholder || '/images/hero-main.png'} alt="作業後" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover reveal-img" />
              </div>
            </div>

            <h2 className="section-title text-primary-dark" style={{ fontSize: '1.5rem', marginBottom: '1rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>作業の概要</h2>
            <p className="text-body mb-xl" style={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '3rem' }}>
              {caseStudy.summary}
            </p>

            <h2 className="section-title text-primary-dark" style={{ fontSize: '1.5rem', marginBottom: '1rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>お客様の課題と対応ポイント</h2>
            <div className="bg-section p-md" style={{ padding: '2rem', borderRadius: '12px', marginBottom: '3rem' }}>
              <p className="text-body" style={{ lineHeight: 1.8 }}>
                [内容詳細プレースホルダー：実際はCMSから流し込む想定の本文エリア。{caseStudy.prefecture}{caseStudy.area}での{service?.title}に関する詳細な作業内容や、工夫した点、お客様からの感謝の声などを記述します。]
              </p>
            </div>

          </div>

          <div className="case-sidebar">
            <div className="case-info-table card" style={{ overflow: 'hidden' }}>
              <h3 className="bg-primary text-white p-md" style={{ margin: 0, padding: '1rem 1.5rem', fontSize: '1.25rem' }}>作業データ</h3>
              <div className="p-md" style={{ padding: '1.5rem' }}>
                <dl className="info-list" style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--color-border)' }}>
                    <dt style={{ fontSize: '0.875rem', color: 'var(--color-text-sub)', marginBottom: '0.25rem' }}>サービス内容</dt>
                    <dd style={{ margin: 0, fontWeight: 700 }}>{service?.title}</dd>
                  </div>
                  <div style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--color-border)' }}>
                    <dt style={{ fontSize: '0.875rem', color: 'var(--color-text-sub)', marginBottom: '0.25rem' }}>エリア</dt>
                    <dd style={{ margin: 0, fontWeight: 700 }}>{caseStudy.prefecture} {caseStudy.area}</dd>
                  </div>
                  <div style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--color-border)' }}>
                    <dt style={{ fontSize: '0.875rem', color: 'var(--color-text-sub)', marginBottom: '0.25rem' }}>間取り</dt>
                    <dd style={{ margin: 0, fontWeight: 700 }}>{caseStudy.roomType}</dd>
                  </div>
                  <div style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--color-border)' }}>
                    <dt style={{ fontSize: '0.875rem', color: 'var(--color-text-sub)', marginBottom: '0.25rem' }}>ご利用料金</dt>
                    <dd style={{ margin: 0, fontWeight: 800, color: 'var(--color-accent)', fontSize: '1.25rem' }}>{caseStudy.priceBand}</dd>
                  </div>
                  <div style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--color-border)' }}>
                    <dt style={{ fontSize: '0.875rem', color: 'var(--color-text-sub)', marginBottom: '0.25rem' }}>作業時間</dt>
                    <dd style={{ margin: 0, fontWeight: 700 }}>{caseStudy.workTime} （作業員{caseStudy.workerCount}名）</dd>
                  </div>
                  <div>
                    <dt style={{ fontSize: '0.875rem', color: 'var(--color-text-sub)', marginBottom: '0.25rem' }}>特記事項</dt>
                    <dd style={{ margin: 0, fontWeight: 700, display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {caseStudy.tags.map(tag => (
                        <span key={tag} className="tag" style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', background: 'var(--color-bg-section)', borderRadius: '4px' }}>{tag}</span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="mt-xl text-center" style={{ marginTop: '2rem' }}>
              <p className="text-sub mb-sm" style={{ marginBottom: '1rem', fontSize: '0.875rem' }}>同じようなケースでお悩みなら</p>
              <Button href="/contact" size="lg" fullWidth variant="accent">無料相談・お見積り</Button>
            </div>
            
            <div className="mt-md text-center" style={{ marginTop: '1rem' }}>
              <Button href="/cases" variant="outline" fullWidth>施工事例一覧へ戻る</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
