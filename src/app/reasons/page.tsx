import { Button } from '@/components/common/Button';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { NoticeBox } from '@/components/common/NoticeBox';
import { getCombinedLegalNotice } from '@/data/legal';

export const metadata = {
  title: '選ばれる理由 | 清蓮｜遺品整理サービス',
  description: '清蓮がお客様から選ばれる3つの理由（認定遺品整理士の対応、明朗会計、供養サポート）について詳しく解説します。',
};

export default function ReasonsPage() {
  const legalNotices = getCombinedLegalNotice();

  const reasons = [
    {
      id: 'reason-1',
      number: '01',
      title: '専門知識を持った「認定遺品整理士」が対応',
      desc: '清蓮では、遺品整理の専門資格である「遺品整理士」がご相談や現地調査に対応いたします。ご遺族の心に寄り添い、法令を遵守した適切な方法で、故人様の思い出の品を一つひとつ丁寧に整理・仕分けいたします。',
      image: 'Reason 1 Scene'
    },
    {
      id: 'reason-2',
      number: '02',
      title: '詳細・明確な「明朗会計」・追加費用ゼロのお約束',
      desc: 'お客様に安心してご依頼いただくため、現地で細かいお見積りを作成し、作業内容ごとの金額とその根拠をご説明します。ご提示したお見積り金額から、お客様の追加要望がない限り不当な追加請求は一切行いません。',
      image: 'Reason 2 Scene'
    },
    {
      id: 'reason-3',
      number: '03',
      title: '片付けで終わらせない「供養と終活」のトータルサポート',
      desc: 'ただお部屋を綺麗にするだけではなく、お仏壇やお写真の合同供養、お焚き上げを提携寺院と連携しサポート。さらに墓じまいや改葬など、遺産整理後のお悩みも一緒に解決へ導きます。',
      image: 'Reason 3 Scene'
    }
  ];

  return (
    <div className="page-reasons">
      <div className="bg-section section-py-md">
        <div className="container text-center">
          <h1 className="section-title">清蓮が選ばれる理由</h1>
          <p className="section-desc">安心と信頼をお届けするための、私たちのこだわりをご紹介します。</p>
        </div>
      </div>

      <div className="container section-py-lg">
        <div className="flex flex-col gap-xl">
          {reasons.map((reason, index) => (
            <div key={reason.id} className={`reason-row grid grid-cols-1 md:grid-cols-2 gap-xl items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`} style={{ borderBottom: index !== reasons.length - 1 ? '1px solid var(--color-border)' : 'none', paddingBottom: index !== reasons.length - 1 ? '4rem' : 0 }}>
              <div className="reason-visual">
                <ImagePlaceholder text={`Reason ${reason.number} Visual: ${reason.image}`} aspectRatio="4:3" />
              </div>
              <div className="reason-content">
                <div className="reason-number" style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary)', display: 'inline-block', padding: '0.25rem 1rem', background: 'rgba(43, 107, 138, 0.1)', borderRadius: '100px', marginBottom: '1rem' }}>
                  REASON {reason.number}
                </div>
                <h2 className="section-title text-primary-dark" style={{ fontSize: '1.75rem', marginBottom: '1rem', lineHeight: 1.4 }}>{reason.title}</h2>
                <p className="text-body" style={{ lineHeight: 1.8 }}>{reason.desc}</p>
                <div className="mt-md">
                  <NoticeBox variant="info" title="お客様の声">
                    <p style={{ fontStyle: 'italic', fontSize: '0.875rem' }}>「専門的な視点でアドバイスをいただき、とても安心してお任せできました。（30代 女性）」</p>
                  </NoticeBox>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="section-cta section-py-lg bg-section text-center">
        <div className="container">
          <h2 className="section-title mb-md">ご不明な点がございましたらお気軽にどうぞ</h2>
          <Button href="/contact" size="lg" variant="accent">無料相談・お見積り</Button>
        </div>
      </section>

      <section className="section-legal section-py-md">
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
