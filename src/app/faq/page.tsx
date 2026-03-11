import { Button } from '@/components/common/Button';
import { PageHero } from '@/components/layout/PageHero';
import { fetchFaqs } from '@/lib/microcms';
import { faqList as staticFaqList } from '@/data/faq';
import { FaqAccordionClient } from './FaqAccordionClient';

export const metadata = {
  title: 'よくある質問 | 清蓮｜遺品整理サービス',
  description: '遺品整理・ゴミ清掃・特殊清掃に関するよくある質問（FAQ）をまとめました。',
};

// ISR: 60秒ごとに再生成
export const revalidate = 60;

export default async function FAQPage() {
  // CMS から取得。取得できない場合は静的データにフォールバック
  const cmsFaqs = await fetchFaqs();

  const faqList = cmsFaqs
    ? cmsFaqs.map((f) => ({
        id: f.id,
        category: f.category,
        question: f.question,
        answer: f.answer,
      }))
    : staticFaqList;

  // カテゴリごとにグループ化
  const faqsByCategory = faqList.reduce(
    (acc, faq) => {
      if (!acc[faq.category]) acc[faq.category] = [];
      acc[faq.category].push(faq);
      return acc;
    },
    {} as Record<string, typeof faqList>
  );

  return (
    <div className="page-faq">
      <PageHero
        title="よくある質問"
        description="清蓮のサービスについて、お客様からよくいただくご質問をまとめました。"
        backgroundImage="/images/hero-main.png"
      />

      <div className="container section-py-lg" style={{ maxWidth: '800px' }}>
        {/* インタラクティブなアコーディオン（クライアントコンポーネント） */}
        <FaqAccordionClient faqsByCategory={faqsByCategory} />

        <div className="text-center mt-xl" style={{ marginTop: '4rem', padding: '3rem', background: 'var(--color-bg-section)', borderRadius: '12px' }}>
          <h3 className="text-primary-dark" style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 700 }}>その他ご不明な点がございましたら</h3>
          <p className="text-sub mb-lg" style={{ marginBottom: '2rem' }}>些細なことでもお気軽にご相談ください。専門スタッフが丁寧にお答えいたします。</p>
          <div className="flex justify-center gap-md">
            <Button href="/contact" variant="accent" size="lg">Webからお問い合わせ</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
