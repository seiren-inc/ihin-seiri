import { notFound } from 'next/navigation';
import { supportedAreas } from '@/data/areas';
import { services } from '@/data/services';
import { caseStudies } from '@/data/cases';
import { Button } from '@/components/common/Button';
import Image from 'next/image';
import { PageHero } from '@/components/layout/PageHero';
import Link from 'next/link';
import { NoticeBox } from '@/components/common/NoticeBox';
import { getCombinedLegalNotice } from '@/data/legal';

export async function generateStaticParams() {
  return supportedAreas.map(area => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = supportedAreas.find(a => a.slug === slug);
  if (!area) return { title: '地域が見つかりません' };

  return {
    title: `${area.prefecture}の遺品整理・ゴミ屋敷清掃・特殊清掃 | 清蓮`,
    description: `${area.prefecture}全域対応。${area.prefecture}での遺品整理、ゴミ屋敷の片付け、特殊清掃なら清蓮にお任せください。最短即日見積もり対応。`,
  };
}

export default async function AreaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = supportedAreas.find(a => a.slug === slug);
  const legalNotices = getCombinedLegalNotice();

  if (!area) {
    notFound();
  }

  // エリアに関連する事例を抽出（今回は都道府県名で部分一致検索）
  const areaCases = caseStudies.filter(c => c.prefecture.includes(area.prefecture) && c.published).slice(0, 3);

  return (
    <div className="page-area-detail">
      <PageHero
        title={`${area.prefecture}の遺品整理・ゴミ屋敷清掃・特殊清掃`}
        description={`${area.prefecture}内全域、最短即日で無料訪問お見積りに伺います。ご遺族の負担を軽減し、安心・丁寧なサポートをご提供します。`}
        backgroundImage="/images/hero-main.png"
      />

      <div className="container section-py-lg">
        {/* SEO Content Text */}
        <div className="content-wrap mb-xl" style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '4rem' }}>
          <h2 className="section-title text-primary-dark" style={{ fontSize: '1.75rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
            {area.prefecture}での対応と特徴
          </h2>
          <p className="text-body mb-md" style={{ lineHeight: 1.8 }}>
            清蓮では、{area.prefecture}での遺品整理、ゴミ屋敷のお片付け、孤独死現場の特殊清掃に関するご相談を多数いただいております。都心部からのご依頼から郊外のご実家の整理まで、地域に密着した提携業者が迅速かつ丁寧に対応いたします。
          </p>
          <p className="text-body" style={{ lineHeight: 1.8 }}>
            マンションやアパートの高層階での作業、近隣への配慮が特に必要な住宅街での作業など、それぞれの環境に応じた最適なプランをご提案し、安心の明朗会計でサポートいたします。
          </p>
        </div>

        {/* Services */}
        <h2 className="section-title text-center text-primary-dark" style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>{area.prefecture}で対応可能なサービス</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md mb-xl" style={{ marginBottom: '4rem' }}>
          {services.map(service => (
            <div key={service.id} className="card p-md" style={{ padding: '1.5rem' }}>
              <h3 className="text-primary-dark" style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 700 }}>{service.title}</h3>
              <p className="text-sub mb-md" style={{ fontSize: '0.875rem' }}>{service.shortDescription}</p>
              <ul className="legal-list mb-md">
                {service.features.slice(0, 2).map((feature, idx) => (
                  <li key={idx} style={{ fontSize: '0.875rem' }}>{feature}</li>
                ))}
              </ul>
              <Button href={`/services/${service.slug}`} variant="outline" size="sm" fullWidth>詳細を見る</Button>
            </div>
          ))}
        </div>

        {/* Area Case Studies */}
        {areaCases.length > 0 && (
          <div className="mb-xl" style={{ marginBottom: '4rem' }}>
            <h2 className="section-title text-center text-primary-dark" style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>{area.prefecture}での施工事例</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
              {areaCases.map(caseStudy => (
                <Link key={caseStudy.id} href={`/cases/${caseStudy.slug}`} className="group bg-white border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 anim-fadeup">
                  <div className="relative w-full aspect-[4/3] bg-bg-light overflow-hidden">
                    <Image src={caseStudy.afterImagePlaceholder || '/images/hero-main.png'} alt={`${caseStudy.title}の事例`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                  </div>
                  <div className="case-card-content p-md">
                    <div className="flex gap-xs mb-xs">
                      <span className="case-tag bg-bg-section text-sub text-xs px-2 py-1 rounded font-bold">
                        {caseStudy.area}
                      </span>
                    </div>
                    <h3 className="case-title" style={{ fontSize: '1.125rem', fontWeight: 700, margin: '0.5rem 0' }}>{caseStudy.title}</h3>
                    <p className="text-primary-dark font-bold" style={{ fontWeight: 700 }}>{caseStudy.priceBand}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Final CTA for this specific area */}
        <div className="card text-center bg-section" style={{ padding: '4rem 2rem', background: 'rgba(58, 143, 183, 0.05)' }}>
          <h2 className="section-title text-primary-dark" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>
            {area.prefecture}の遺品整理・お片付けは<br/>清蓮にご相談ください
          </h2>
          <p className="text-sub mb-lg" style={{ marginBottom: '2rem' }}>現地のお見積り・ご相談は完全無料です。まずはお気軽にご連絡ください。</p>
          <div className="flex flex-col md:flex-row gap-lg justify-center mt-lg">
            <Button href="tel:0800-888-8788" size="lg" className="bg-white text-primary-dark shadow-sm hover:shadow-md transition-shadow" style={{ border: '2px solid var(--color-primary-dark)' }}>
              <span className="text-2xl font-bold flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                0800-888-8788
              </span>
            </Button>
            <Button href="/contact" variant="accent" size="lg">Webから無料お見積り</Button>
          </div>
        </div>
      </div>

      <section className="section-legal section-py-md bg-section">
        <div className="container">
          <NoticeBox title="ご契約・作業・対応エリアについてのご注意" variant="warning">
            <ul className="legal-list">
              {legalNotices.map((notice, idx) => (
                <li key={idx}>{notice}</li>
              ))}
              <li>※{area.prefecture}内でも、一部離島や山間部など、提携業者のスケジュールにより即日対応が難しい場合がございます。事前にお問い合わせください。</li>
            </ul>
          </NoticeBox>
        </div>
      </section>
    </div>
  );
}
