import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/common/Button';
import { FaqAccordion } from '@/components/common/FaqAccordion';
import { WaveDivider } from '@/components/common/WaveDivider';
import { StatsBanner } from '@/components/common/StatsBanner';
import { BeforeAfterSlider } from '@/components/common/BeforeAfterSlider';
import { HeroRipples } from '@/components/canvas/HeroRipples';
import { MemorialParticles } from '@/components/canvas/MemorialParticles';
import { services } from '@/data/services';
import { caseStudies } from '@/data/cases';
import { NoticeBox } from '@/components/common/NoticeBox';
import { getCombinedLegalNotice } from '@/data/legal';
import { faqList } from '@/data/faq';
import { supportedAreas } from '@/data/areas';
import '../styles/pages/home.css';

// サービスアイコン画像パスの対応表
const serviceImageMap: Record<string, string> = {
  'estate-clearing': '/images/service-estate.png',
  'garbage-cleaning': '/images/service-garbage.png',
  'special-cleaning': '/images/service-special.png',
};



export default function Home() {
  const legalNotices = getCombinedLegalNotice();
  const recentCases = caseStudies.slice(0, 3);
  const topFaqs = faqList.slice(0, 4);

  return (
    <div className="page-home">
      {/* 1. Hero */}
      <section className="section-hero" style={{ zIndex: 1, overflow: 'hidden' }}>
        <HeroRipples />
        {/* 縦書き装飾テキスト */}
        <span className="hero-vertical-text" aria-hidden="true">遺品整理・終活サポート</span>
        <div className="container hero-container grid grid-cols-1 md:grid-cols-2 items-center gap-xl">
          <div className="hero-content">
            <p className="hero-badge">関東全域対応｜遺品整理・終活サポート</p>
            <h1 className="hero-title">
              想いを大切にする<br />
              遺品整理・終活サポート
            </h1>
            <p className="hero-desc">
              ご遺族のお気持ちに寄り添い、確かな技術とまごころで、<br />
              お片付けから供養の相談までトータルでサポートいたします。
            </p>
            <div className="hero-trust flex gap-sm">
              <span className="trust-badge">✓ 認定遺品整理士在籍</span>
              <span className="trust-badge">✓ 追加料金なし</span>
              <span className="trust-badge">✓ 即日対応可</span>
            </div>
            <div className="hero-cta flex gap-sm">
              <Button href="/contact" size="lg">無料お見積り・ご相談</Button>
              <Button href="/simulation" variant="secondary" size="lg">1分で料金シミュレーション</Button>
            </div>
          </div>
          <div className="hero-visual">
            <Image
              src="/images/hero-main.png"
              alt="整理された和室。清蓮の遺品整理サービスで清潔になったご実家の部屋"
              width={720}
              height={540}
              className="hero-img"
              priority
            />
          </div>
        </div>
      </section>

      {/* StatsBanner */}
      <StatsBanner />

      {/* 2. Trust */}
      <section className="section-trust bg-section section-py-md">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-xl">
            <div className="trust-visual reveal-wrapper">
              <Image
                src="/images/trust-scene.png"
                alt="清蓮スタッフとご遺族が丁寧な相談をしている様子"
                width={640}
                height={480}
                className="trust-img reveal-img"
              />
            </div>
            <div className="trust-content">
              <h2 className="section-title">はじめての方でも、ご安心ください</h2>
              <p className="section-desc" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>清蓮は、単なる片付け業者ではありません。安心の終活ブランドとして、お客様のご事情に合わせた最適なプランをご提案します。</p>
              <div className="trust-points">
                <div className="trust-point"><span className="trust-icon">📋</span><span>現地調査・お見積り完全無料</span></div>
                <div className="trust-point"><span className="trust-icon">🔒</span><span>個人情報・秘密は厳守いたします</span></div>
                <div className="trust-point"><span className="trust-icon">💚</span><span>女性スタッフ同行のご相談も可能</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services */}
      <section className="section-services section-py-lg">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">サービス一覧</h2>
            <p className="section-desc">状況に合わせて最適なサービスをご提供いたします。</p>
          </div>
          <div className="service-grid grid grid-cols-1 md:grid-cols-3 gap-lg mt-xl">
            {services.map(service => (
              <div key={service.id} className="service-card card">
                <div className="service-card-img">
                  <Image
                    src={serviceImageMap[service.id] ?? '/images/service-estate.png'}
                    alt={`${service.title}のサービスイメージ`}
                    width={480}
                    height={320}
                    className="service-img"
                  />
                </div>
                <div className="service-card-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc text-sub">{service.shortDescription}</p>
                  <Button href={`/services/${service.slug}`} variant="outline" fullWidth>詳細を見る</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fromColor="#ffffff" toColor="var(--color-primary)" />

      {/* 4. Simulation CTA */}
      <section className="section-simulation text-white section-py-md" style={{ background: 'var(--color-primary)' }}>
        <div className="container text-center">
          <h2 className="section-title text-white">料金の目安がすぐにわかります</h2>
          <p className="section-desc text-white opacity-90">間取りや荷物量を選択するだけで、おおよその作業料金を事前にご確認いただけます。</p>
          <div className="mt-lg">
            <Button href="/simulation" variant="accent" size="lg">料金シミュレーションを試す</Button>
          </div>
        </div>
      </section>

      <WaveDivider fromColor="var(--color-primary)" toColor="#ffffff" />

      {/* 5. Cases */}
      <section className="section-cases section-py-lg">
        <div className="container">
          <div className="section-header text-center flex-col items-center">
            <h2 className="section-title">施工事例</h2>
            <p className="section-desc">これまでに清蓮がサポートさせていただいた事例の一部をご紹介します。</p>
          </div>
          <div className="case-grid grid grid-cols-1 md:grid-cols-3 gap-lg mt-xl">
            {recentCases.map(caseStudy => (
              <div key={caseStudy.id} className="case-card card">
                <div className="case-card-img">
                  <BeforeAfterSlider
                    beforeSrc={caseStudy.beforeImagePlaceholder}
                    afterSrc={caseStudy.afterImagePlaceholder}
                    beforeAlt={`${caseStudy.title} 作業前`}
                    afterAlt={`${caseStudy.title} 作業後`}
                  />
                </div>
                <div className="case-card-content">
                  <span className="case-tag">{caseStudy.roomType}</span>
                  <h3 className="case-title">{caseStudy.title}</h3>
                  <p className="case-meta text-sub">{caseStudy.area} / {caseStudy.priceBand}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-xl">
            <Button href="/cases" variant="secondary" size="lg">施工事例をもっと見る</Button>
          </div>
        </div>
      </section>

      {/* 6. Reasons */}
      <section className="section-reasons bg-section section-py-lg">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">清蓮が選ばれる理由</h2>
            <p className="section-desc">安心と信頼をお届けするための、私たちのこだわりです。</p>
          </div>
          <div className="reason-grid grid grid-cols-1 md:grid-cols-3 gap-lg mt-xl relative">
            <div className="reason-card text-center">
              <div className="reason-number">01</div>
              <h3 className="reason-title">認定遺品整理士が対応</h3>
              <p className="reason-desc text-sub">専門知識を持った有資格者が、法令を遵守し、正しい知識で丁寧に作業を行います。</p>
            </div>
            <div className="reason-card text-center">
              <div className="reason-number">02</div>
              <h3 className="reason-title">明朗会計・追加費用なし</h3>
              <p className="reason-desc text-sub">お見積りにて詳細をご説明し、ご納得いただいた金額から不当な追加請求は一切いたしません。</p>
            </div>
            <div className="reason-card text-center">
              <div className="reason-number">03</div>
              <h3 className="reason-title">丁寧な供養サポート</h3>
              <p className="reason-desc text-sub">提携寺院によるお焚き上げや合同供養など、ご実家の整理や終活にまつわるお悩みもトータルサポート。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Flow (Horizontal Scroll) */}
      <section className="section-flow section-py-lg" style={{ overflow: 'hidden' }}>
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">ご利用の流れ</h2>
            <p className="section-desc">お問い合わせから作業完了まで、担当者が一貫してサポートいたします。</p>
          </div>
        </div>
        <div className="flow-horizontal-container mt-xl relative">
          <div className="flow-horizontal-wrapper">
            {/* Step 1 */}
            <div className="flow-step-card card">
              <div className="step-number bg-primary text-white">1</div>
              <div className="step-content">
                <h3 className="step-title">お問い合わせ・無料相談</h3>
                <p className="step-desc text-sub">お電話・LINE・Webフォームからご連絡ください。清蓮の専門スタッフがおおよその状況とご希望をお伺いします。</p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="flow-step-card card">
              <div className="step-number bg-primary text-white">2</div>
              <div className="step-content">
                <h3 className="step-title">現地調査・お見積り</h3>
                <p className="step-desc text-sub">提携専門業者が現地へ伺い、正確な作業量と金額を算出し、お見積書をご提示します。</p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="flow-step-card card">
              <div className="step-number bg-primary text-white">3</div>
              <div className="step-content">
                <h3 className="step-title">ご契約・作業日時決定</h3>
                <p className="step-desc text-sub">お見積り内容にご納得いただけましたら、提携業者との間でご契約・作業日の調整を行います。</p>
              </div>
            </div>
            {/* Step 4 */}
            <div className="flow-step-card card">
              <div className="step-number bg-primary text-white">4</div>
              <div className="step-content">
                <h3 className="step-title">実作業・ご確認</h3>
                <p className="step-desc text-sub">専門業者が丁寧に作業を実施します。作業完了後、お客様に状況をご確認いただき終了となります。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Memorial */}
      <section className="section-memorial section-py-lg relative z-10 overflow-hidden" style={{ background: 'var(--color-primary-950)' }}>
        <MemorialParticles />
        <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-xl relative z-20">
          <div className="memorial-content">
            <h2 className="section-title" style={{ color: '#fff' }}>供養・終活のご相談も<br />お任せください</h2>
            <p className="section-desc mb-lg" style={{ color: 'rgba(255,255,255,0.9)', marginTop: '1rem' }}>
              清蓮は遺品整理だけでなく、お仏壇やご遺骨の供養、永代供養墓・樹木葬の紹介など「終活プラットフォーム」としてのお手伝いも可能です。
            </p>
            <ul className="memorial-features mt-md mb-lg">
              <li className="text-white opacity-90 mb-xs">✓ お仏壇・お位牌・思い出の品の合同供養・お焚き上げ</li>
              <li className="text-white opacity-90 mb-xs">✓ 墓じまいや改葬（お墓のお引越し）のご相談</li>
              <li className="text-white opacity-90">✓ 粉骨・散骨・手元供養のご案内</li>
            </ul>
            <Button href="/memorial-support" variant="accent" size="lg">供養連携について詳しく見る</Button>
          </div>
          <div className="memorial-visual reveal-wrapper">
            <Image
              src="/images/memorial.png"
              alt="蓮の花が浮かぶ供養のイメージ。清蓮の供養サポートサービス"
              width={600}
              height={450}
              className="memorial-img reveal-img"
            />
          </div>
        </div>
      </section>

      {/* 9. Area */}
      <section className="section-areas section-py-lg">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">対応エリア</h2>
            <p className="section-desc">清蓮のサービスは関東全域に対応しております。</p>
          </div>
          <div className="area-content grid grid-cols-1 md:grid-cols-2 gap-xl mt-xl items-center">
            <div className="area-visual">
              <Image
                src="/images/hero-main.png"
                alt="関東全域の対応エリアイメージ"
                width={600}
                height={450}
                className="area-img"
                style={{ borderRadius: '16px', objectFit: 'cover' }}
              />
            </div>
            <div className="area-list-wrapper">
              <ul className="area-list grid grid-cols-2 gap-sm">
                {supportedAreas.map(area => (
                  <li key={area.id}>
                    <Link href={`/areas/${area.slug}`} className="area-link btn-outline">
                      {area.name} <span className="arrow">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="section-faq bg-section section-py-lg">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">よくある質問</h2>
            <p className="section-desc">お客様からよくいただくご質問をまとめました。</p>
          </div>
          <div className="mt-xl">
            <FaqAccordion items={topFaqs} />
          </div>
          <div className="text-center mt-lg">
            <Button href="/faq" variant="outline" size="lg">よくある質問をもっと見る</Button>
          </div>
        </div>
      </section>

      {/* 11. Final CTA */}
      <section className="section-final-cta section-py-xl" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/images/cta-bg.png"
            alt="朝の日差しが差し込む整理後のリビング"
            fill
            className="cta-bg-img"
            style={{ objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(13,46,66,0.88) 0%, rgba(30,79,102,0.82) 100%)' }} />
        </div>
        <div className="container text-center text-white" style={{ position: 'relative', zIndex: 1, padding: '4rem 0' }}>
          <h2 className="section-title" style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '1rem', letterSpacing: '0.05em' }}>ご相談・お見積りは無料です</h2>
          <p className="section-desc" style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '2.5rem' }}>
            まずはお気軽にお電話またはWebフォームからお問い合わせください。<br/>専門スタッフが丁寧に対応いたします。
          </p>
          <div className="flex flex-col md-flex-row gap-md justify-center mt-lg">
            <Button href="tel:0800-888-8788" size="lg" className="bg-white text-primary-dark hover-bg-gray">
              <span style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-numeric)' }}>0800-888-8788</span>
            </Button>
            <Button href="/contact" variant="accent" size="lg">Webから無料お見積り</Button>
          </div>
        </div>
      </section>

      {/* 12. Legal / Notice */}
      <section className="section-legal section-py-md">
        <div className="container">
          <NoticeBox title="ご契約・作業に関する重要なお知らせ" variant="warning">
            <ul className="legal-list">
              {legalNotices.map((notice: string, idx: number) => (
                <li key={idx}>{notice}</li>
              ))}
            </ul>
          </NoticeBox>
        </div>
      </section>
    </div>
  );
}
