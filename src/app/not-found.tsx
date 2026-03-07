import Link from 'next/link';
import { Button } from '@/components/common/Button';

export const metadata = {
  title: 'ページが見つかりません (404 Not Found) | 清蓮',
};

export default function NotFound() {
  return (
    <div className="page-not-found section-py-xl text-center">
      <div className="container">
        <h1 className="section-title text-primary-dark" style={{ fontSize: '4rem', marginBottom: '1rem', fontWeight: 800 }}>404</h1>
        <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>ページが見つかりません</h2>
        
        <p className="text-body text-sub mb-xl" style={{ lineHeight: 1.8, marginBottom: '3rem' }}>
          申し訳ございません。お探しのページは削除されたか、<br className="hidden md:inline" />
          URLが変更された可能性があります。
        </p>

        <div className="quick-links max-w-md mx-auto mb-xl" style={{ maxWidth: '400px', margin: '0 auto 3rem' }}>
          <h3 className="text-sub" style={{ fontSize: '1rem', marginBottom: '1rem', fontWeight: 700 }}>お探しの情報はこちらにありませんか？</h3>
          <ul className="flex flex-col gap-sm" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><Link href="/" className="text-primary hover-text-primary-dark" style={{ textDecoration: 'underline' }}>トップページへ戻る</Link></li>
            <li><Link href="/services" className="text-primary hover-text-primary-dark" style={{ textDecoration: 'underline' }}>サービス一覧を見る</Link></li>
            <li><Link href="/pricing" className="text-primary hover-text-primary-dark" style={{ textDecoration: 'underline' }}>料金の目安を見る</Link></li>
            <li><Link href="/faq" className="text-primary hover-text-primary-dark" style={{ textDecoration: 'underline' }}>よくある質問</Link></li>
          </ul>
        </div>

        <div className="mt-xl">
          <Button href="/contact" size="lg" variant="accent">ご不明な点はお問い合わせください</Button>
        </div>
      </div>
    </div>
  );
}
