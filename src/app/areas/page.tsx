import Link from 'next/link';
import { supportedAreas } from '@/data/areas';
import { Button } from '@/components/common/Button';
import Image from 'next/image';
import { PageHero } from '@/components/layout/PageHero';

import { JsonLd, generateBreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata = {
  title: '対応エリア | 清蓮｜遺品整理サービス',
  description: '清蓮の遺品整理・ゴミ清掃・特殊清掃の対応エリア（関東全域）をご案内します。',
  alternates: { canonical: '/areas' },
  openGraph: { url: '/areas' },
};

export default function AreasPage() {
  return (
    <>
      <JsonLd data={[
        generateBreadcrumbSchema([
          { name: 'ホーム', item: '/' },
          { name: '対応エリア', item: '/areas' },
        ])
      ]} />
      <div className="page-areas">
      <PageHero
        title="対応エリア"
        description="清蓮の遺品整理・ゴミ清掃・特殊清掃サービスは関東全域に対応しております。最短即日でのご訪問も可能です。"
        backgroundImage="/images/hero-main.png"
      />

      <div className="container section-py-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl lg:gap-2xl items-center mb-2xl anim-fadeup">
          <div className="visual reveal-wrapper rounded-lg overflow-hidden shadow-lg">
            <div className="relative w-full aspect-[4/3] bg-bg-light">
              <Image src="/images/hero-main.png" alt="関東エリア対応マップ" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover reveal-img" />
            </div>
          </div>
          <div className="content">
            <h2 className="section-title text-primary-dark mb-md" style={{ fontSize: '1.75rem' }}>幅広い地域への迅速な対応</h2>
            <p className="text-body text-lg leading-relaxed mb-md">
              清蓮では、神奈川県、東京都をはじめとする関東全域で遺品整理・お片付けのサポートを行っております。
            </p>
            <p className="text-body text-lg leading-relaxed">
              各地域に密着した提携ネットワークにより、ご依頼から最短即日での訪問お見積りも可能です。お急ぎの場合でも、まずはお気軽にご相談ください。
            </p>
          </div>
        </div>

        <h2 className="section-title text-center text-primary-dark mt-xl mb-lg">都道府県から探す</h2>
        <div className="area-list grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-md">
          {supportedAreas.map((area, index) => (
            <Link key={area.id} href={`/areas/${area.slug}`} className="card text-center text-primary-dark hover-text-primary bg-white shadow-sm hover:shadow-md transition-all duration-300 anim-fadeup" style={{ padding: '1.5rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, border: '1px solid var(--color-border)', borderRadius: '8px', animationDelay: `${index * 0.05}s` }}>
              {area.name} <span className="ml-xs text-sub transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-xl" style={{ marginTop: '4rem' }}>
          <p className="text-sub mb-sm">記載のない周辺地域でも対応可能な場合がございます。</p>
          <Button href="/contact" size="lg" variant="secondary">詳しくはお問い合わせください</Button>
        </div>
      </div>
    </div>
    </>
  );
}
