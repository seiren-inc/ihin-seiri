import { Button } from '@/components/common/Button';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
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
      image: 'Contact & Consultation Scene'
    },
    {
      step: 2,
      title: '現地調査・お見積り',
      desc: 'ご都合の良い日時に、提携専門業者が現地へ伺い、正確な作業量と物量を確認いたします。その後、詳細なお見積書をご提示し、作業内容や追加費用の有無についてわかりやすくご説明します。',
      image: 'Estimate Visit Scene'
    },
    {
      step: 3,
      title: 'ご契約・作業日時決定',
      desc: 'お見積り内容にご納得いただけましたら、提携業者との間で正式にご契約書を交わします。同時にお客様のご希望に合わせて作業日時を決定いたします。※ご納得いただけない場合はお断りいただいて構いません。',
      image: 'Contract Scene'
    },
    {
      step: 4,
      title: '作業当日（仕分け・搬出・清掃）',
      desc: '経験豊富な専門スタッフが、ご近隣への配慮を怠らず、丁寧に仕分け・搬出作業を行います。貴重品の探索や不用品の分別もすべてお任せください。作業後はお部屋の簡易清掃を実施します。',
      image: 'Work Execution Scene'
    },
    {
      step: 5,
      title: '作業完了のご確認・ご精算',
      desc: '作業が完了しましたら、お客様に現場の状況をご確認いただきます。問題がなければ提携業者へお支払いいただき、完了となります。供養など後日対応サービスがある場合は、報告書をお送りいたします。',
      image: 'Confirmation & Payment Scene'
    }
  ];

  return (
    <div className="page-flow">
      <div className="bg-section section-py-md">
        <div className="container text-center">
          <h1 className="section-title">ご利用の流れ</h1>
          <p className="section-desc">お問い合わせから作業完了まで、担当者が一貫してサポートいたします。</p>
        </div>
      </div>

      <div className="container section-py-lg" style={{ maxWidth: '800px' }}>
        <p className="text-center mb-xl" style={{ fontSize: '1.125rem', marginBottom: '3rem' }}>
          清蓮では、ご遺族のご負担を第一に考え、わかりやすく安心できるプロセスを心がけています。<br />最短即日の無料訪問見積もりも可能です。
        </p>

        <div className="flow-timeline" style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Timeline Line */}
          <div style={{ position: 'absolute', top: '0', bottom: '0', left: '2rem', width: '2px', background: 'var(--color-primary)', transform: 'translateX(-50%)', opacity: 0.2 }}></div>

          {flows.map((flow, idx) => (
            <div key={idx} className="flow-step-item" style={{ position: 'relative', marginBottom: idx !== flows.length - 1 ? '4rem' : 0 }}>
              {/* Timeline Bullet */}
              <div 
                style={{ position: 'absolute', top: 0, left: 0, width: '3rem', height: '3rem', transform: 'translateX(-50%)', backgroundColor: 'var(--color-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontWeight: 800, fontSize: '1.25rem', zIndex: 2, boxShadow: '0 0 0 4px var(--color-bg)' }}
              >
                {flow.step}
              </div>

              <div className="card" style={{ marginLeft: '3rem', overflow: 'hidden' }}>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-md" style={{ padding: '2rem' }}>
                    <h2 className="text-primary-dark" style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>{flow.title}</h2>
                    <p className="text-sub" style={{ lineHeight: 1.8 }}>{flow.desc}</p>
                  </div>
                  <div className="visual">
                    <ImagePlaceholder text={flow.image} aspectRatio="4:3" className="h-full" />
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
