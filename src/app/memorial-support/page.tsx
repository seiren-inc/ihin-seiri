import { Button } from '@/components/common/Button';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { NoticeBox } from '@/components/common/NoticeBox';
import { getCombinedLegalNotice } from '@/data/legal';

export const metadata = {
  title: '供養連携・終活サポート | 清蓮｜遺品整理サービス',
  description: '清蓮は遺品整理だけでなく、お仏壇の合同供養やお焚き上げ、墓じまいなどの終活サポートも承っております。',
};

export default function MemorialSupportPage() {
  const legalNotices = getCombinedLegalNotice();

  return (
    <div className="page-memorial">
      <div className="bg-primary text-white section-py-lg text-center" style={{ backgroundColor: 'var(--color-primary-dark)' }}>
        <div className="container">
          <h1 className="section-title text-white" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>供養連携・終活サポート</h1>
          <p className="section-desc opacity-80 text-white" style={{ fontSize: '1.125rem' }}>
            単なるお片付けで終わらせない。<br/>ご遺族のお気持ちに寄り添い、「想いを納める」お手伝いをいたします。
          </p>
        </div>
      </div>

      <div className="container section-py-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl mb-xl items-center">
          <div className="content">
            <h2 className="section-title text-primary-dark" style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>
              処分ではなく「供養する」という選択
            </h2>
            <p className="text-body mb-md" style={{ lineHeight: 1.8 }}>
              遺品整理をしていると、故人様が大切にしていたお品物、お写真、人形、お仏壇など、ごみとして捨てるには忍びないものが多数出てきます。
            </p>
            <p className="text-body mb-lg" style={{ lineHeight: 1.8 }}>
              清蓮では、そうしたご遺族の「どうすればいいかわからない」というお悩みに応えるため、提携寺院と連携し、真心を込めた合同供養やお焚き上げによる対応を行っております。
            </p>
          </div>
          <div className="visual">
            <ImagePlaceholder text="Memorial Concept Visual" aspectRatio="4:3" />
          </div>
        </div>

        <h2 className="section-title text-center text-primary-dark" style={{ marginTop: '5rem', marginBottom: '2rem' }}>主な供養・終活サポートメニュー</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md mb-xl">
          <div className="card p-md bg-section text-center" style={{ padding: '2rem' }}>
            <div className="icon-wrap mb-md" style={{ width: '4rem', height: '4rem', background: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: 'white', fontWeight: 800 }}>1</div>
            <h3 className="text-primary-dark mb-sm" style={{ fontSize: '1.25rem', fontWeight: 700 }}>合同供養・お焚き上げ</h3>
            <p className="text-sub text-left" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
              お仏壇、ご本尊、お位牌、写真アルバム、趣味の品、人形等。提携寺院にて魂抜きの法要を行った後、適切にお焚き上げ・処分いたします。
            </p>
          </div>
          
          <div className="card p-md bg-section text-center" style={{ padding: '2rem' }}>
            <div className="icon-wrap mb-md" style={{ width: '4rem', height: '4rem', background: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: 'white', fontWeight: 800 }}>2</div>
            <h3 className="text-primary-dark mb-sm" style={{ fontSize: '1.25rem', fontWeight: 700 }}>お墓じまい・改葬</h3>
            <p className="text-sub text-left" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
              お墓の後継者がいない、遠方でお墓参りに行けない方のためのご相談。墓石の解体撤去や、ご遺骨の引越し・手続きをサポートします。
            </p>
          </div>

          <div className="card p-md bg-section text-center" style={{ padding: '2rem' }}>
            <div className="icon-wrap mb-md" style={{ width: '4rem', height: '4rem', background: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: 'white', fontWeight: 800 }}>3</div>
            <h3 className="text-primary-dark mb-sm" style={{ fontSize: '1.25rem', fontWeight: 700 }}>特殊清掃後の原状回復</h3>
            <p className="text-sub text-left" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
              汚染されたお部屋の消臭だけでなく、お部屋の壁紙張替えなど原状回復（リフォーム）も合わせてご提案できます。
            </p>
          </div>
        </div>
      </div>

      <section className="section-cta section-py-lg text-center bg-section">
        <div className="container">
          <h2 className="section-title mb-md">遺品整理と合わせたご相談がお得です</h2>
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
