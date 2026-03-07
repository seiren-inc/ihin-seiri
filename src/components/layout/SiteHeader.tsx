import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner flex justify-between items-center">
        <div className="logo">
          <Link href="/">
            <span className="logo-text">清蓮</span>
            <span className="logo-subtext">遺品整理サービス</span>
          </Link>
        </div>
        
        <nav className="desktop-nav hidden md-flex">
          <ul className="flex gap-md">
            <li><Link href="/services/estate-clearing">遺品整理</Link></li>
            <li><Link href="/services/garbage-cleaning">ゴミ清掃</Link></li>
            <li><Link href="/services/special-cleaning">特殊清掃</Link></li>
            <li><Link href="/pricing">料金</Link></li>
            <li><Link href="/cases">施工事例</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </nav>

        <div className="header-cta hidden md-flex gap-sm">
          <a href="tel:0120-000-000" className="tel-cta">0120-000-000</a>
          <Link href="/contact" className="contact-cta">無料お見積り</Link>
        </div>
      </div>
    </header>
  );
}
