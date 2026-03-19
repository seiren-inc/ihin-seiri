import { Button } from '@/components/common/Button';
import Image from 'next/image';
import { PageHero } from '@/components/layout/PageHero';
import { NoticeBox } from '@/components/common/NoticeBox';
import { getCombinedLegalNotice } from '@/data/legal';
import { fetchServices } from '@/lib/microcms';
import { services as staticServices } from '@/data/services';
import { JsonLd, generateBreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata = {
  title: 'サービス一覧 | 清蓮｜遺品整理サービス',
  description: '清蓮が提供する遺品整理、ゴミ清掃、特殊清掃等のサービス一覧です。関東全域で安心のサポートを提供いたします。',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    url: '/services',
  },
};

export const revalidate = 60;

// サービス画像のローカルフォールバック対応表
const serviceImageFallback: Record<string, string> = {
  'estate-clearing': '/images/service-estate.png',
  'garbage-cleaning': '/images/service-garbage.png',
  'special-cleaning': '/images/service-special.png',
};

export default async function ServicesPage() {
  const legalNotices = getCombinedLegalNotice();

  const cmsServices = await fetchServices();

  const serviceList = cmsServices
    ? cmsServices.map((s) => ({
        id: s.serviceId || s.id,
        slug: s.slug,
        title: s.title,
        heroTitle: s.heroTitle,
        heroDescription: s.heroDescription,
        features: s.features,
        imageSrc: s.mainImage?.url ?? serviceImageFallback[s.slug] ?? '/images/hero-main.png',
      }))
    : staticServices.map((s) => ({
        id: s.id,
        slug: s.slug,
        title: s.title,
        heroTitle: s.heroTitle,
        heroDescription: s.heroDescription,
        features: s.features,
        imageSrc: serviceImageFallback[s.id] ?? '/images/hero-main.png',
      }));

  return (
    <>
      <JsonLd data={[
        generateBreadcrumbSchema([
          { name: 'ホーム', item: '/' },
          { name: 'サービス一覧', item: '/services' },
        ])
      ]} />
      <div className="page-services">
      <PageHero
        title="サービス一覧"
        description="ご遺族様の負担を軽減し、前を向くための環境づくりをサポートする清蓮の各サービスをご紹介します。"
        backgroundImage="/images/hero-main.png"
      />

      <div className="container section-py-lg">
        <div className="flex flex-col gap-2xl" style={{ gap: '6rem' }}>
          {serviceList.map((service, index) => (
            <div key={service.id} className="service-row grid grid-cols-1 md:grid-cols-2 gap-xl lg:gap-2xl items-center anim-fadeup">
              <div className={`service-visual reveal-wrapper rounded-lg overflow-hidden shadow-lg ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                <div className="relative w-full aspect-[4/3] bg-bg-light">
                  <Image
                    src={service.imageSrc}
                    alt={`${service.title}の作業イメージ`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover reveal-img"
                  />
                </div>
              </div>
              <div className="service-content">
                <h2 className="section-title text-primary-dark mb-sm" style={{ fontSize: '2rem' }}>{service.title}</h2>
                <h3 className="text-primary mb-md" style={{ fontSize: '1.25rem', fontWeight: 700 }}>{service.heroTitle}</h3>
                <p className="text-sub mb-lg text-lg leading-relaxed">{service.heroDescription}</p>
                <h4 className="text-primary font-bold mb-xs">■ 主な特徴</h4>
                <ul className="legal-list mb-xl text-sub">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="mb-xs">{feature}</li>
                  ))}
                </ul>
                <Button href={`/services/${service.slug}`} size="lg" variant="primary">詳細を見る</Button>
              </div>
            </div>
          ))}
        </div>
      </div>

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
