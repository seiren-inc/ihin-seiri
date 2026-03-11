import { Button } from '@/components/common/Button';
import Image from 'next/image';
import { PageHero } from '@/components/layout/PageHero';
import { NoticeBox } from '@/components/common/NoticeBox';
import { getCombinedLegalNotice } from '@/data/legal';

export const metadata = {
  title: 'ご利用の流れ | 清蓮｜遺品整理サービス',
  description: 'お問い合わせから作業完了までの流れを詳しく解説します。初めての方でも安心してご依頼いただけるよう、専任担当者が一貫サポートいたします。',
};

export default function FlowPage() {
  const legalNotices = getCombinedLegalNotice();

  const flows = [
    {
      step: 1,
      title: 'お問い合わせ・無料相談',
      desc: 'お電話・LINE・Webフォームのいずれかからご連絡ください。清蓮の相談窓口スタッフがおおよその状況やご要望を丁寧にお伺いします。この段階でご不安な点があれば何でもご質問ください。',
      image: '/images/trust-scene.png'
    },
    {
      step: 2,
      title: '現地調査・お見積り',
      desc: 'ご都合の良い日時に、提携専門業者が現地へ伺い、正確な作業量と物量を確認いたします。その後、詳細なお見積書をご提示し、作業内容や追加費用の有無についてわかりやすくご説明します。',
      image: '/images/service-estate.png'
    },
    {
      step: 3,
      title: 'ご契約・作業日時決定',
      desc: 'お見積り内容にご納得いただけましたら、提携業者との間で正式にご契約書を交わします。同時にお客様のご希望に合わせて作業日時を決定いたします。※ご納得いただけない場合はお断りいただいて構いません。',
      image: '/images/trust-scene.png'
    },
    {
      step: 4,
      title: '作業当日（仕分け・搬出・清掃）',
      desc: '経験豊富な専門スタッフが、ご近隣への配慮を怠らず、丁寧に仕分け・搬出作業を行います。貴重品の探索や不用品の分別もすべてお任せください。作業後はお部屋の簡易清掃を実施します。',
      image: '/images/hero-main.png'
    },
    {
      step: 5,
      title: '作業完了のご確認・ご精算',
      desc: '作業が完了しましたら、お客様に現場の状況をご確認いただきます。問題がなければ提携業者へお支払いいただき、完了となります。供養など後日対応サービスがある場合は、報告書をお送りいたします。',
      image: '/images/service-garbage.png'
    }
  ];

  return (
    <div className="page-flow">
      <PageHero
        title="ご利用の流れ"
        description="お問い合わせから作業完了まで、専任担当者が一貫してサポートいたします。初めての方でも安心してご依頼いただけるプロセスを構築しています。"
        backgroundImage="/images/hero-main.png"
      />

      <div className="container section-py-lg" style={{ maxWidth: '800px' }}>
        <p className="text-center mb-xl" style={{ fontSize: '1.125rem', marginBottom: '3rem' }}>
          清蓮では、ご遺族様の精神的・物理的なご負担を第一に考え、わかりやすく安心できる進行をお約束します。<br />最短即日の無料訪問見積もりも可能です。
        </p>

        <div className="flow-timeline relative pl-lg lg:pl-0">
          {/* Timeline Line (Mobile Left, PC Center) */}
          <div className="absolute top-0 bottom-0 left-8 lg:left-1/2 w-1 bg-border -translate-x-1/2 rounded-full hidden sm:block"></div>

          {flows.map((flow, idx) => (
            <div key={idx} className={`flow-step-item relative mb-2xl anim-fadeup ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center`}>
              {/* Timeline Bullet */}
              <div className="absolute top-0 left-8 lg:left-1/2 -ml-8 lg:-ml-6 w-16 h-16 lg:w-16 lg:h-16 flex items-center justify-center bg-primary text-white rounded-full font-bold text-2xl z-10 shadow-[0_0_0_6px_var(--color-bg)]">
                {flow.step}
              </div>

              {/* Content Card */}
              <div className={`w-full lg:w-1/2 pl-24 lg:pl-0 ${idx % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                <div className="card overflow-hidden shadow-lg border border-border">
                  <div className="relative w-full aspect-[16/9] bg-bg-light">
                    <Image
                      src={flow.image}
                      alt={flow.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-xl">
                    <h2 className="text-primary-dark text-xl font-bold mb-sm">{flow.title}</h2>
                    <p className="text-body leading-relaxed">{flow.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-xl" style={{ marginTop: '5rem' }}>
          <h3 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>ご不明な点がございましたらお気軽にどうぞ</h3>
          <Button href="/contact" variant="accent" size="lg">無料相談・お見積り</Button>
        </div>
      </div>

      <section className="section-legal section-py-md bg-section">
        <div className="container">
          <NoticeBox title="ご契約・作業の主体について" variant="info">
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
