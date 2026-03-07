import { services } from '@/data/services';
import { Button } from '@/components/common/Button';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { NoticeBox } from '@/components/common/NoticeBox';
import { getCombinedLegalNotice } from '@/data/legal';

export const metadata = {
  title: 'サービス一覧 | 清蓮｜遺品整理サービス',
  description: '清蓮が提供する遺品整理、ゴミ清掃、特殊清掃等のサービス一覧です。関東全域で安心のサポートを提供いたします。',
};

export default function ServicesPage() {
  const legalNotices = getCombinedLegalNotice();

  return (
    <div className="page-services">
      <div className="bg-section section-py-md">
        <div className="container text-center">
          <h1 className="section-title">サービス一覧</h1>
          <p className="section-desc">清蓮でご案内可能な各種サービスについてご紹介します。</p>
        </div>
      </div>

      <div className="container section-py-lg">
        <div className="flex flex-col gap-xl">
          {services.map((service, index) => (
            <div key={service.id} className={`service-row grid grid-cols-1 md:grid-cols-2 gap-xl items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="service-visual">
                <ImagePlaceholder text={`Service Main: ${service.title}`} aspectRatio="4:3" />
              </div>
              <div className="service-content">
                <h2 className="section-title" style={{ fontSize: '2rem' }}>{service.title}</h2>
                <h3 className="text-primary-dark" style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 700 }}>{service.heroTitle}</h3>
                <p className="text-sub" style={{ marginBottom: '1.5rem' }}>{service.heroDescription}</p>
                
                <h4 style={{ marginBottom: '0.5rem', fontWeight: 700 }}>■ 主な特徴</h4>
                <ul className="legal-list mb-lg" style={{ marginBottom: '1.5rem' }}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sub">{feature}</li>
                  ))}
                </ul>

                <Button href={`/services/${service.slug}`}>詳細を見る</Button>
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
  );
}
