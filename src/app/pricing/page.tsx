import { basePricingRules } from '@/data/pricing';
import { Button } from '@/components/common/Button';
import { NoticeBox } from '@/components/common/NoticeBox';
import { getCombinedLegalNotice } from '@/data/legal';

import { JsonLd, generateBreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata = {
  title: '料金案内 | 清蓮｜遺品整理サービス',
  description: '遺品整理・特殊清掃の基本料金と、追加費用がかかるケースについて分かりやすくご案内します。明朗会計で安心のサービスを提供します。',
  alternates: { canonical: '/pricing' },
  openGraph: { url: '/pricing' },
};

export default function PricingPage() {
  const legalNotices = getCombinedLegalNotice();

  return (
    <>
      <JsonLd data={[
        generateBreadcrumbSchema([
          { name: 'ホーム', item: '/' },
          { name: '料金案内', item: '/pricing' },
        ])
      ]} />
      <div className="page-pricing">
      <div className="bg-section section-py-md">
        <div className="container text-center">
          <h1 className="section-title">料金案内</h1>
          <p className="section-desc">間取りや荷物量に応じた基本料金の目安をご案内します。</p>
        </div>
      </div>

      <section className="section-pricing-table section-py-lg">
        <div className="container">
          <h2 className="section-title text-center mb-lg">基本料金の目安（遺品整理・ゴミ清掃）</h2>
          
          <div className="pricing-table-wrapper" style={{ overflowX: 'auto' }}>
            <table className="pricing-table w-full" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', marginTop: '2rem' }}>
              <thead>
                <tr className="bg-section">
                  <th style={{ padding: '1rem', borderBottom: '2px solid var(--color-primary-dark)' }}>間取り</th>
                  <th style={{ padding: '1rem', borderBottom: '2px solid var(--color-primary-dark)' }}>費用の目安</th>
                  <th style={{ padding: '1rem', borderBottom: '2px solid var(--color-primary-dark)' }}>作業人数の目安</th>
                </tr>
              </thead>
              <tbody>
                {basePricingRules.map((rule, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <td style={{ padding: '1.5rem 1rem', fontWeight: 700 }}>{rule.label}</td>
                    <td style={{ padding: '1.5rem 1rem', color: 'var(--color-primary)', fontWeight: 700, fontSize: '1.25rem' }}>
                      {rule.minPrice.toLocaleString()}円 〜 {rule.maxPrice.toLocaleString()}円
                    </td>
                    <td style={{ padding: '1.5rem 1rem', color: 'var(--color-text-sub)' }}>
                      1〜{idx + 2}名
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sub mt-sm" style={{ fontSize: '0.9375rem' }}>※上記はあくまで目安です。買取可能な品物がある場合は、お見積り金額から差し引かせていただきます。</p>
        </div>
      </section>

      <section className="section-pricing-details section-py-md bg-section">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-xl">
          <div className="included-items card p-md" style={{ padding: '2rem' }}>
            <h3 className="text-primary-dark" style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 700 }}>基本料金に含まれるもの</h3>
            <ul className="legal-list">
              <li className="mb-xs">仕分け・分別作業</li>
              <li className="mb-xs">梱包作業（ダンボール等の資材含む）</li>
              <li className="mb-xs">搬出作業</li>
              <li className="mb-xs">不用品の適正処理・回収</li>
              <li className="mb-xs">簡易清掃（掃き掃除・拭き掃除など）</li>
            </ul>
          </div>
          <div className="extra-costs card p-md" style={{ padding: '2rem' }}>
            <h3 className="text-primary-dark" style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 700 }}>追加費用が発生しやすいケース</h3>
            <ul className="legal-list">
              <li className="mb-xs">エレベーターがなく、階段での搬出が必要な場合（階数加算）</li>
              <li className="mb-xs">トラックの駐車位置が遠く、運搬距離が長い場合</li>
              <li className="mb-xs">特殊清掃（オゾン脱臭機など）が必要な場合</li>
              <li className="mb-xs">冷蔵庫・テレビ・エアコンなどの家電リサイクル料金</li>
              <li className="mb-xs">ハウスクリーニングや解体工事を追加でご希望される場合</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-cta section-py-lg text-center">
        <div className="container">
          <h2 className="section-title">ご自身のケースでの目安を知りたい方へ</h2>
          <p className="section-desc mb-lg">いくつかの項目を選択するだけで、1分ですぐに料金のシミュレーションが可能です。</p>
          <Button href="/simulation" size="lg" variant="accent">料金シミュレーションを試す</Button>
        </div>
      </section>

      <section className="section-legal section-py-md">
        <div className="container">
          <NoticeBox title="ご契約・お見積りについて" variant="warning">
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
