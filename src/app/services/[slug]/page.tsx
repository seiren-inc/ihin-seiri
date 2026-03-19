import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import { Button } from '@/components/common/Button';
import Image from 'next/image';
import { PageHero } from '@/components/layout/PageHero';
import { NoticeBox } from '@/components/common/NoticeBox';
import { getCombinedLegalNotice } from '@/data/legal';
import { JsonLd, generateBreadcrumbSchema } from '@/components/seo/JsonLd';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: 'サービスが見つかりません' };

  return {
    title: `${service.title} | 清蓮｜遺品整理サービス`,
    description: service.heroDescription,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      url: `/services/${slug}`,
      images: [{ url: `/images/service-${service.id}.png` }],
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  const legalNotices = getCombinedLegalNotice();

  if (!service) {
    notFound();
  }

  return (
    <>
      <JsonLd data={[
        generateBreadcrumbSchema([
          { name: 'ホーム', item: '/' },
          { name: 'サービス一覧', item: '/services' },
          { name: service.title, item: `/services/${slug}` },
        ]),
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.title,
          description: service.heroDescription,
          provider: {
            '@type': 'LocalBusiness',
            name: '清蓮（せいれん）',
          },
          areaServed: {
            '@type': 'State',
            name: ['東京都', '神奈川県', '埼玉県', '千葉県', '茨城県', '栃木県', '群馬県']
          }
        }
      ]} />
      <div className="page-service-detail">
        <PageHero
          title={service.title}
          description={service.heroTitle}
          backgroundImage={`/images/service-${service.id}.png`}
        />

        {/* Main Content */}
        <section className="service-content section-py-lg gap-xl">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xl lg:gap-2xl items-center mb-xl anim-fadeup">
            <div className="visual reveal-wrapper rounded-lg overflow-hidden shadow-lg">
              <div className="relative w-full aspect-[4/3] bg-bg-light">
                <Image
                  src={`/images/service-${service.id}.png`}
                  alt={`${service.title}の作業風景`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover reveal-img"
                />
              </div>
            </div>
            <div className="text-content">
              <h2 className="section-title text-primary-dark mb-md" style={{ fontSize: '1.75rem' }}>{service.shortDescription}</h2>
              <p className="text-body mb-lg text-lg leading-relaxed">{service.heroDescription}</p>
              
              <div className="features-box p-xl bg-bg-light rounded-lg shadow-sm border border-border">
                <h3 className="features-title text-primary font-bold mb-md" style={{ fontSize: '1.25rem' }}>■ 提供内容・特徴</h3>
                <ul className="legal-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sub mb-xs">{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-2xl anim-fadeup" style={{ animationDelay: '0.1s' }}>
            <Button href="/pricing" size="lg" className="mr-md" style={{ marginRight: '1rem' }}>料金の目安を見る</Button>
            <Button href="/contact" variant="accent" size="lg">無料相談・お見積り</Button>
          </div>
        </div>
      </section>

      {/* Legal Section */}
      <section className="section-legal section-py-md bg-section">
        <div className="container">
          <NoticeBox title="ご契約・作業に関する重要なお知らせ" variant="warning">
            <ul className="legal-list">
              {legalNotices.map((notice, idx) => (
                <li key={idx}>{notice}</li>
              ))}
            </ul>
          </NoticeBox>
        </div>
      </section>
    </div>
    </>
  );
}
