import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="site-footer bg-section section-py-md">
      <div className="container">
        <div className="footer-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
          <div className="footer-info">
            <div className="footer-logo">
              <span className="logo-text">清蓮</span>
              <span className="logo-subtext">遺品整理サービス</span>
            </div>
            <p className="footer-desc text-sub">
              関東全域対応の遺品整理・特殊清掃・供養相談。安心と信頼の終活サポートを提供します。
            </p>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">サービス</h4>
            <ul className="footer-list">
              <li><Link href="/services/estate-clearing">遺品整理</Link></li>
              <li><Link href="/services/garbage-cleaning">ゴミ清掃</Link></li>
              <li><Link href="/services/special-cleaning">特殊清掃</Link></li>
              <li><Link href="/memorial-support">供養連携</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">サポート</h4>
            <ul className="footer-list">
              <li><Link href="/pricing">料金案内</Link></li>
              <li><Link href="/simulation">料金シミュレーション</Link></li>
              <li><Link href="/cases">施工事例</Link></li>
              <li><Link href="/flow">ご利用の流れ</Link></li>
              <li><Link href="/faq">よくある質問</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">企業情報</h4>
            <ul className="footer-list">
              <li><Link href="/operator">運営者情報</Link></li>
              <li><Link href="/legal">特定商取引法に基づく表記</Link></li>
              <li><Link href="/privacy">プライバシーポリシー</Link></li>
              <li><Link href="/contact">お問い合わせ</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} 清蓮 遺品整理サービス All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
