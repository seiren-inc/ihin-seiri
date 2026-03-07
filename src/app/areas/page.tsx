import Link from 'next/link';
import { supportedAreas } from '@/data/areas';
import { Button } from '@/components/common/Button';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';

export const metadata = {
  title: '対応エリア | 清蓮｜遺品整理サービス',
  description: '清蓮の遺品整理・ゴミ清掃・特殊清掃の対応エリア（関東全域）をご案内します。',
};

export default function AreasPage() {
  return (
    <div className="page-areas">
      <div className="bg-section section-py-md">
        <div className="container text-center">
          <h1 className="section-title">対応エリア</h1>
          <p className="section-desc">清蓮のサービスは関東全域に対応しております。</p>
        </div>
      </div>

      <div className="container section-py-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center mb-xl">
          <div className="visual">
            <ImagePlaceholder text="Kanto Area Map" aspectRatio="4:3" />
          </div>
          <div className="content">
            <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>幅広い地域への迅速な対応</h2>
            <p className="text-body mb-md" style={{ lineHeight: 1.8 }}>
              清蓮では、神奈川県、東京都をはじめとする関東全域で遺品整理・お片付けのサポートを行っております。
            </p>
            <p className="text-body" style={{ lineHeight: 1.8 }}>
              各地域に密着した提携ネットワークにより、ご依頼から最短即日での訪問お見積りも可能です。お急ぎの場合でも、まずはお気軽にご相談ください。
            </p>
          </div>
        </div>

        <h2 className="section-title text-center text-primary-dark" style={{ marginTop: '4rem', marginBottom: '2rem' }}>都道府県から探す</h2>
        <div className="area-list grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-md">
          {supportedAreas.map(area => (
            <Link key={area.id} href={`/areas/${area.slug}`} className="card text-center text-primary-dark hover-text-primary" style={{ padding: '1.5rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, border: '2px solid var(--color-border)' }}>
              {area.name} <span style={{ marginLeft: '0.5rem', color: 'var(--color-text-sub)' }}>→</span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-xl" style={{ marginTop: '4rem' }}>
          <p className="text-sub mb-sm">記載のない周辺地域でも対応可能な場合がございます。</p>
          <Button href="/contact" size="lg" variant="secondary">詳しくはお問い合わせください</Button>
        </div>
      </div>
    </div>
  );
}
