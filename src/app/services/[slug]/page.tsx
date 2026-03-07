import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import { Button } from '@/components/common/Button';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { NoticeBox } from '@/components/common/NoticeBox';
import { getCombinedLegalNotice } from '@/data/legal';

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
    <div className="page-service-detail">
      {/* Hero Section */}
      <section className="service-hero bg-section section-py-md text-center">
        <div className="container">
          <h1 className="service-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{service.title}</h1>
          <p className="service-hero-desc text-sub max-w-2xl mx-auto" style={{ fontSize: '1.25rem' }}>
            {service.heroTitle}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="service-content section-py-lg">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center mb-xl">
            <div className="visual">
              <ImagePlaceholder text={`${service.title} Main Visual`} aspectRatio="4:3" />
            </div>
            <div className="text-content">
              <h2 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>{service.shortDescription}</h2>
              <p className="text-body mb-lg">{service.heroDescription}</p>
              
              <div className="features-box p-md bg-section" style={{ padding: '1.5rem', borderRadius: '12px' }}>
                <h3 className="features-title text-primary-dark" style={{ marginBottom: '1rem', fontWeight: 700 }}>■ 提供内容・特徴</h3>
                <ul className="legal-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sub mb-xs">{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-xl">
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
  );
}
