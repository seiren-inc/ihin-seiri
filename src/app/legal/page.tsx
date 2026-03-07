import { NoticeBox } from '@/components/common/NoticeBox';
import { getCombinedLegalNotice } from '@/data/legal';

export const metadata = {
  title: '特定商取引法に基づく表記 | 清蓮｜遺品整理サービス',
  description: '清蓮（遺品整理サービス）の特定商取引法に基づく表記をご案内します。',
};

export default function LegalDisclosurePage() {
  const legalNotices = getCombinedLegalNotice();

  return (
    <div className="page-legal-disclosure">
      <div className="bg-section section-py-md">
        <div className="container text-center">
          <h1 className="section-title">特定商取引法に基づく表記</h1>
          <p className="section-desc">法令に基づく表記をご案内します。</p>
        </div>
      </div>

      <div className="container section-py-lg" style={{ maxWidth: '800px' }}>
        
        <section className="section-legal bg-section p-md mb-xl" style={{ borderRadius: '12px', padding: '2rem', marginBottom: '3rem' }}>
          <NoticeBox title="清蓮の役割とご契約の主体について" variant="warning">
            <p className="mb-md" style={{ fontSize: '0.875rem', marginBottom: '1rem', lineHeight: 1.6 }}>
              本サイト（清蓮）は、ご遺族のお悩みを解決するための総合相談窓口および集客プラットフォームとして運営されております。<br/>
              そのため、お客様と直接ご契約を交わし、作業を実施するのは当サービスが選定した提携専門業者となります。
            </p>
            <ul className="legal-list">
              {legalNotices.map((notice, idx) => (
                <li key={idx} style={{ fontSize: '0.875rem' }}>{notice}</li>
              ))}
            </ul>
          </NoticeBox>
        </section>

        <h2 className="section-title text-primary-dark" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
          紹介サービスに関する表示（清蓮）
        </h2>
        
        <div className="card overflow-hidden mb-xl" style={{ border: '1px solid var(--color-border)', borderRadius: '8px', marginBottom: '3rem' }}>
          <table className="w-full text-left" style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                <th style={{ padding: '1.5rem', width: '30%', backgroundColor: 'var(--color-bg-section)', fontWeight: 700 }}>サービス名</th>
                <td style={{ padding: '1.5rem' }}>清蓮（せいれん）遺品整理サービス</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                <th style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg-section)', fontWeight: 700 }}>運営責任者</th>
                <td style={{ padding: '1.5rem' }}>※実際の運営者名を記載してください</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                <th style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg-section)', fontWeight: 700 }}>所在地</th>
                <td style={{ padding: '1.5rem' }}>※実際の所在地を記載してください</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                <th style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg-section)', fontWeight: 700 }}>連絡先</th>
                <td style={{ padding: '1.5rem' }}>
                  電話番号：0120-000-000<br/>
                  メール：contact@example.com（※仮設定）
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                <th style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg-section)', fontWeight: 700 }}>サービス内容</th>
                <td style={{ padding: '1.5rem' }}>遺品整理・ゴミ清掃・特殊清掃業者への相談窓口および無料見積紹介</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                <th style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg-section)', fontWeight: 700 }}>利用料金</th>
                <td style={{ padding: '1.5rem' }}>お客様から本サービスへの相談・見積取得等の利用は「完全無料」です。</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="section-title text-primary-dark" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
          契約・作業に関する表示（提携専門業者）
        </h2>
        
        <p className="text-body mb-md" style={{ lineHeight: 1.8 }}>
          実際に作業を行う提携専門業者（例：株式会社ベルコール等）とのご契約における特商法表記につきましては、ご契約の際に提携業者側からご提示する契約書面にてご確認くださいませ。主な事項の目安は以下のとおりです。
        </p>

        <div className="card overflow-hidden" style={{ border: '1px solid var(--color-border)', borderRadius: '8px' }}>
          <table className="w-full text-left" style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                <th style={{ padding: '1.5rem', width: '30%', backgroundColor: 'var(--color-bg-section)', fontWeight: 700 }}>役務等の対価</th>
                <td style={{ padding: '1.5rem' }}>お見積りにてお客様にご提示し、ご納得いただいた金額となります。</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                <th style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg-section)', fontWeight: 700 }}>支払時期・方法</th>
                <td style={{ padding: '1.5rem' }}>原則として作業完了後、提携業者への現金支払い・お振込み・各種決済手段等（業者により異なります）</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                <th style={{ padding: '1.5rem', backgroundColor: 'var(--color-bg-section)', fontWeight: 700 }}>キャンセル等</th>
                <td style={{ padding: '1.5rem' }}>提携業者が定めるキャンセル規定に基づきます。詳細は必ずご契約時の書面にてご確認ください。</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
