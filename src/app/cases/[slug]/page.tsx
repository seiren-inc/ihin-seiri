import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PageHero } from '@/components/layout/PageHero';
import { Button } from '@/components/common/Button';
import { fetchCaseStudyBySlug, fetchAllCaseSlugs } from '@/lib/microcms';
// CMS未設定時のフォールバック
import { caseStudies as staticCaseStudies } from '@/data/cases';
import { services } from '@/data/services';

export const revalidate = 60;

export async function generateStaticParams() {
  // CMS があればCMSのslug一覧を使用。なければ静的データにフォールバック
  const cmsSlugs = await fetchAllCaseSlugs();
  if (cmsSlugs.length > 0) return cmsSlugs;
  return staticCaseStudies.filter((c) => c.published).map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const cmsCase = await fetchCaseStudyBySlug(slug);
  if (cmsCase) {
    return {
      title: `${cmsCase.title} | 施工事例 | 清蓮`,
      description: cmsCase.summary,
    };
  }

  const staticCase = staticCaseStudies.find((c) => c.slug === slug && c.published);
  if (!staticCase) return { title: '事例が見つかりません' };
  return {
    title: `${staticCase.title} | 施工事例 | 清蓮`,
    description: staticCase.summary,
  };
}

export default async function CaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // CMS → フォールバックの順で取得
  const cmsCase = await fetchCaseStudyBySlug(slug);

  const caseData = cmsCase
    ? {
        id: cmsCase.id,
        title: cmsCase.title,
        serviceType: cmsCase.serviceType,
        prefecture: cmsCase.prefecture,
        area: cmsCase.area,
        roomType: cmsCase.roomType,
        priceBand: cmsCase.priceBand,
        workTime: cmsCase.workTime,
        workerCount: cmsCase.workerCount,
        tags: cmsCase.tags,
        summary: cmsCase.summary,
        beforeImageSrc: cmsCase.beforeImage?.url ?? '/images/hero-main.png',
        afterImageSrc: cmsCase.afterImage?.url ?? '/images/hero-main.png',
        hasMemorialSupport: cmsCase.hasMemorialSupport,
        hasSpecialCleaning: cmsCase.hasSpecialCleaning,
      }
    : (() => {
        const c = staticCaseStudies.find((x) => x.slug === slug && x.published);
        if (!c) return null;
        return {
          id: c.id,
          title: c.title,
          serviceType: c.serviceType,
          prefecture: c.prefecture,
          area: c.area,
          roomType: c.roomType,
          priceBand: c.priceBand,
          workTime: c.workTime,
          workerCount: c.workerCount,
          tags: c.tags,
          summary: c.summary,
          beforeImageSrc: c.beforeImagePlaceholder || '/images/hero-main.png',
          afterImageSrc: c.afterImagePlaceholder || '/images/hero-main.png',
          hasMemorialSupport: c.hasMemorialSupport,
          hasSpecialCleaning: c.hasSpecialCleaning,
        };
      })();

  if (!caseData) {
    notFound();
  }

  const service = services.find((s) => s.id === caseData.serviceType);

  return (
    <div className="page-case-detail">
      <PageHero
        title={caseData.title}
        description={`サービス：${service?.title || ''} ｜ エリア：${caseData.prefecture}${caseData.area}`}
        backgroundImage={caseData.afterImageSrc}
      />

      <div className="container section-py-lg">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
          <div className="case-main-content lg:col-span-2" style={{ gridColumn: 'span 2' }}>
            {/* Before / After */}
            <div className="before-after-grid grid grid-cols-1 md:grid-cols-2 gap-md mb-xl anim-fadeup" style={{ marginBottom: '3rem' }}>
              <div className="image-wrapper reveal-wrapper rounded-lg overflow-hidden relative shadow-md aspect-[4/3] bg-bg-light">
                <span className="label text-white absolute top-4 left-4 z-10" style={{ display: 'inline-block', padding: '0.25rem 1rem', background: 'rgba(0,0,0,0.6)', fontWeight: 700, borderRadius: '4px' }}>Before</span>
                <Image src={caseData.beforeImageSrc} alt="作業前" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover reveal-img" />
              </div>
              <div className="image-wrapper reveal-wrapper rounded-lg overflow-hidden relative shadow-md aspect-[4/3] bg-bg-light" style={{ animationDelay: '0.2s' }}>
                <span className="label bg-primary text-white absolute top-4 left-4 z-10" style={{ display: 'inline-block', padding: '0.25rem 1rem', fontWeight: 700, borderRadius: '4px' }}>After</span>
                <Image src={caseData.afterImageSrc} alt="作業後" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover reveal-img" />
              </div>
            </div>

            <h2 className="section-title text-primary-dark" style={{ fontSize: '1.5rem', marginBottom: '1rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>作業の概要</h2>
            <p className="text-body mb-xl" style={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '3rem' }}>
              {caseData.summary}
            </p>

            <h2 className="section-title text-primary-dark" style={{ fontSize: '1.5rem', marginBottom: '1rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>お客様の課題と対応ポイント</h2>
            <div className="bg-section p-md" style={{ padding: '2rem', borderRadius: '12px', marginBottom: '3rem' }}>
              <p className="text-body" style={{ lineHeight: 1.8 }}>
                {caseData.prefecture}{caseData.area}での{service?.title}に関する詳細な作業内容や、工夫した点、お客様からの感謝の声などを掲載予定です。
              </p>
            </div>
          </div>

          {/* サイドバー */}
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
                    <dd style={{ margin: 0, fontWeight: 700 }}>{caseData.prefecture} {caseData.area}</dd>
                  </div>
                  <div style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--color-border)' }}>
                    <dt style={{ fontSize: '0.875rem', color: 'var(--color-text-sub)', marginBottom: '0.25rem' }}>間取り</dt>
                    <dd style={{ margin: 0, fontWeight: 700 }}>{caseData.roomType}</dd>
                  </div>
                  <div style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--color-border)' }}>
                    <dt style={{ fontSize: '0.875rem', color: 'var(--color-text-sub)', marginBottom: '0.25rem' }}>ご利用料金</dt>
                    <dd style={{ margin: 0, fontWeight: 800, color: 'var(--color-accent)', fontSize: '1.25rem' }}>{caseData.priceBand}</dd>
                  </div>
                  <div style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--color-border)' }}>
                    <dt style={{ fontSize: '0.875rem', color: 'var(--color-text-sub)', marginBottom: '0.25rem' }}>作業時間</dt>
                    <dd style={{ margin: 0, fontWeight: 700 }}>{caseData.workTime} （作業員{caseData.workerCount}名）</dd>
                  </div>
                  <div>
                    <dt style={{ fontSize: '0.875rem', color: 'var(--color-text-sub)', marginBottom: '0.25rem' }}>特記事項</dt>
                    <dd style={{ margin: 0, fontWeight: 700, display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {caseData.tags.map((tag) => (
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
