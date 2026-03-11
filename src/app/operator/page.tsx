import { NoticeBox } from '@/components/common/NoticeBox';
import { getCombinedLegalNotice } from '@/data/legal';

export const metadata = {
  title: '運営者情報 | 清蓮｜遺品整理サービス',
  description: '清蓮（遺品整理サービス）の運営者情報をご案内します。',
};

export default function OperatorPage() {
  const legalNotices = getCombinedLegalNotice();

  return (
    <div className="page-operator">
      <div className="bg-section section-py-md">
        <div className="container text-center">
          <h1 className="section-title">運営者情報</h1>
          <p className="section-desc">清蓮の運営元に関する情報をご案内します。</p>
        </div>
      </div>

      <div className="container section-py-lg" style={{ maxWidth: '800px' }}>
        <h2 className="section-title text-primary-dark" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>事業概要</h2>
        
        <div className="card overflow-hidden mb-xl" style={{ border: '1px solid var(--color-border)', borderRadius: '8px' }}>
          <table className="w-full text-left" style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                <th style={{ padding: '1.5rem', width: '30%', backgroundColor: 'var(--color-bg-section)', fontWeight: 700 }}>サービス名</th>
                <td style={{ padding: '1.5rem' }}>清蓮（せいれん）遺品整理サービス</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                <th style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg-section)', fontWeight: 700 }}>事業内容</th>
                <td style={{ padding: '1.5rem' }}>
                  <ul className="legal-list">
                    <li>遺品整理・ゴミ屋敷清掃に関するご相談受付</li>
                    <li>専門業者の紹介および手配</li>
                    <li>終活・供養に関する相談サポート</li>
                  </ul>
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                <th style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg-section)', fontWeight: 700 }}>お問い合わせ</th>
                <td style={{ padding: '1.5rem' }}>
                  お電話：0800-888-8788<br />
                  Web：お問い合わせフォームより受付
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <section className="section-legal bg-section p-md" style={{ borderRadius: '12px', padding: '2rem' }}>
          <NoticeBox title="清蓮の役割とご契約の主体について" variant="warning">
            <p className="mb-md" style={{ fontSize: '0.875rem', marginBottom: '1rem', lineHeight: 1.6 }}>本サイト（清蓮）は、ご遺族のお悩みを解決するための総合相談窓口および集客プラットフォームとして運営されております。</p>
            <ul className="legal-list">
              {legalNotices.map((notice, idx) => (
                <li key={idx} style={{ fontSize: '0.875rem' }}>{notice}</li>
              ))}
            </ul>
          </NoticeBox>
        </section>
      </div>
    </div>
  );
}
