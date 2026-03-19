import { JsonLd, generateBreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata = {
  title: 'プライバシーポリシー | 清蓮｜遺品整理サービス',
  description: '清蓮（遺品整理サービス）の個人情報保護方針をご案内します。',
  alternates: { canonical: '/privacy' },
  openGraph: { url: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={[
        generateBreadcrumbSchema([
          { name: 'ホーム', item: '/' },
          { name: 'プライバシーポリシー', item: '/privacy' },
        ])
      ]} />
      <div className="page-privacy">
      <div className="bg-section section-py-md">
        <div className="container text-center">
          <h1 className="section-title">プライバシーポリシー</h1>
          <p className="section-desc">個人情報保護方針</p>
        </div>
      </div>

      <div className="container section-py-lg" style={{ maxWidth: '800px' }}>
        <div className="card p-md content-document" style={{ padding: '2.5rem' }}>
          
          <p className="text-body mb-lg" style={{ lineHeight: 1.8 }}>
            清蓮（以下「当サービス」といいます）は、お客様の個人情報の保護を最も重要な責務と認識し、以下の通り個人情報保護方針（プライバシーポリシー）を定め、その徹底を図ります。
          </p>

          <h2 className="text-primary-dark" style={{ fontSize: '1.25rem', marginBottom: '1rem', marginTop: '2.5rem', fontWeight: 700, borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>1. 個人情報の収集について</h2>
          <p className="text-body" style={{ lineHeight: 1.8 }}>
            当サービスは、お問い合わせ、お見積り依頼、サービスのご利用に際して、必要な範囲でお客様の個人情報（氏名、住所、電話番号、メールアドレス等）を適法かつ公正な手段により取得します。
          </p>

          <h2 className="text-primary-dark" style={{ fontSize: '1.25rem', marginBottom: '1rem', marginTop: '2.5rem', fontWeight: 700, borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>2. 個人情報の利用目的</h2>
          <p className="text-body mb-sm" style={{ lineHeight: 1.8 }}>取得した個人情報は、以下の目的のためにのみ利用いたします。</p>
          <ul className="legal-list">
            <li>お問い合わせに対する回答および関連資料の送付</li>
            <li>現地調査、お見積りの作成およびご連絡</li>
            <li>提携専門業者への業務引き継ぎおよび情報共有（お客様の同意に基づく）</li>
            <li>サービス提供に関するご案内およびアフターサポートの実施</li>
            <li>サービスの品質向上を目的としたアンケートや調査の実施</li>
          </ul>

          <h2 className="text-primary-dark" style={{ fontSize: '1.25rem', marginBottom: '1rem', marginTop: '2.5rem', fontWeight: 700, borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>3. 個人情報の第三者への提供</h2>
          <p className="text-body mb-sm" style={{ lineHeight: 1.8 }}>
            当サービスは、お客様の同意がある場合を除き、原則として個人情報を第三者に提供・開示いたしません。ただし、次の場合はこの限りではありません。
          </p>
          <ul className="legal-list">
            <li>法令に基づく場合</li>
            <li>人の生命、身体または財産の保護のために必要があり、ご本人の同意を得ることが困難である場合</li>
            <li>当サービスが利用目的の達成に必要な範囲内で、提携専門業者へ個人情報の取扱いを委託する場合</li>
          </ul>

          <h2 className="text-primary-dark" style={{ fontSize: '1.25rem', marginBottom: '1rem', marginTop: '2.5rem', fontWeight: 700, borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>4. 個人情報の管理と保護</h2>
          <p className="text-body" style={{ lineHeight: 1.8 }}>
            当サービスは、お客様の個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス、紛失、破損、改ざん、漏えいなどを防止するため、セキュリティシステムの維持や管理体制の整備に努めます。
          </p>

          <h2 className="text-primary-dark" style={{ fontSize: '1.25rem', marginBottom: '1rem', marginTop: '2.5rem', fontWeight: 700, borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>5. プライバシーポリシーの改定</h2>
          <p className="text-body" style={{ lineHeight: 1.8 }}>
            当サービスは、保有する個人情報に関して適用される日本の法令や規範を遵守するとともに、本ポリシーの内容を定期的に見直し、その改善に努めます。変更があった場合は本ページにてお知らせいたします。
          </p>

          <div className="mt-xl pt-lg" style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)', fontSize: '0.875rem', color: 'var(--color-text-sub)', textAlign: 'right' }}>
            <p>制定日：{new Date().getFullYear()}年4月1日</p>
            <p>清蓮 遺品整理サービス</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
