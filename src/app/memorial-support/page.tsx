import { Button } from '@/components/common/Button';
import Image from 'next/image';
import { PageHero } from '@/components/layout/PageHero';
import { NoticeBox } from '@/components/common/NoticeBox';
import { getCombinedLegalNotice } from '@/data/legal';

import { JsonLd, generateBreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata = {
  title: '供養連携・終活サポート | 清蓮｜遺品整理サービス',
  description: '清蓮は遺品整理だけでなく、お仏壇の合同供養やお焚き上げ、墓じまいなどの終活サポートも承っております。',
  alternates: { canonical: '/memorial-support' },
  openGraph: { url: '/memorial-support' },
};

export default function MemorialSupportPage() {
  const legalNotices = getCombinedLegalNotice();

  return (
    <>
      <JsonLd data={[
        generateBreadcrumbSchema([
          { name: 'ホーム', item: '/' },
          { name: '供養・終活サポート', item: '/memorial-support' },
        ])
      ]} />
      <div className="page-memorial">
      <PageHero
        title="供養連携・終活サポート"
        description="単なるお片付けで終わらせない。ご遺族のお気持ちに寄り添い、「想いを納める」お手伝いをいたします。"
        backgroundImage="/images/memorial.png"
      />

      <div className="container section-py-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl mb-xl items-center anim-fadeup">
          <div className="content">
            <h2 className="section-title text-primary-dark mb-md" style={{ fontSize: '1.75rem' }}>
              処分ではなく「供養する」という選択
            </h2>
            <p className="text-body text-lg leading-relaxed mb-md">
              遺品整理をしていると、故人様が大切にしていたお品物、お写真、人形、お仏壇など、ごみとして捨てるには忍びないものが多数出てきます。
            </p>
            <p className="text-body text-lg leading-relaxed mb-lg">
              清蓮では、そうしたご遺族の「どうすればいいかわからない」というお悩みに応えるため、提携寺院と連携し、真心を込めた合同供養やお焚き上げによる対応を行っております。
            </p>
          </div>
          <div className="visual reveal-wrapper rounded-lg overflow-hidden shadow-lg lg:order-first">
            <div className="relative w-full aspect-[4/3] bg-bg-light">
              <Image src="/images/memorial.png" alt="供養サポート" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover reveal-img" />
            </div>
          </div>
        </div>

        <h2 className="section-title text-center text-primary-dark mt-2xl mb-xl">主な供養・終活サポートメニュー</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md mb-2xl">
          <div className="card p-xl bg-section text-center anim-fadeup" style={{ animationDelay: '0.1s' }}>
            <div className="icon-wrap mb-md mx-auto flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full font-bold text-xl">1</div>
            <h3 className="text-primary-dark mb-sm font-bold text-xl">合同供養・お焚き上げ</h3>
            <p className="text-sub text-left text-sm leading-relaxed">
              お仏壇、ご本尊、お位牌、写真アルバム、趣味の品、人形等。提携寺院にて魂抜きの法要を行った後、適切にお焚き上げ・処分いたします。
            </p>
          </div>
          
          <div className="card p-xl bg-section text-center anim-fadeup" style={{ animationDelay: '0.2s' }}>
            <div className="icon-wrap mb-md mx-auto flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full font-bold text-xl">2</div>
            <h3 className="text-primary-dark mb-sm font-bold text-xl">お墓じまい・改葬</h3>
            <p className="text-sub text-left text-sm leading-relaxed">
              お墓の後継者がいない、遠方でお墓参りに行けない方のためのご相談。墓石の解体撤去や、ご遺骨の引越し・手続きをサポートします。
            </p>
          </div>

          <div className="card p-xl bg-section text-center anim-fadeup" style={{ animationDelay: '0.3s' }}>
            <div className="icon-wrap mb-md mx-auto flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full font-bold text-xl">3</div>
            <h3 className="text-primary-dark mb-sm font-bold text-xl">特殊清掃後の原状回復</h3>
            <p className="text-sub text-left text-sm leading-relaxed">
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
    </>
  );
}
