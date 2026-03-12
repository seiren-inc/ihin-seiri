import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* ブランド情報 */}
          <div>
            <div className="flex flex-col mb-4">
              <span className="text-2xl font-bold text-white leading-tight">清蓮</span>
              <span className="text-[0.8125rem] text-white/70">遺品整理サービス</span>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              関東全域対応の遺品整理・特殊清掃・供養相談。安心と信頼の終活サポートを提供します。
            </p>
          </div>

          {/* サービスリンク */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">サービス</h4>
            <ul className="flex flex-col gap-3">
              {[
                { href: '/services/estate-clearing', label: '遺品整理' },
                { href: '/services/garbage-cleaning', label: 'ゴミ清掃' },
                { href: '/services/special-cleaning', label: '特殊清掃' },
                { href: '/memorial-support', label: '供養連携' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/80 hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* サポートリンク */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">サポート</h4>
            <ul className="flex flex-col gap-3">
              {[
                { href: '/pricing', label: '料金案内' },
                { href: '/simulation', label: '料金シミュレーション' },
                { href: '/cases', label: '施工事例' },
                { href: '/flow', label: 'ご利用の流れ' },
                { href: '/faq', label: 'よくある質問' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/80 hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 企業情報リンク */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">企業情報</h4>
            <ul className="flex flex-col gap-3">
              {[
                { href: '/operator', label: '運営者情報' },
                { href: '/legal', label: '特定商取引法に基づく表記' },
                { href: '/privacy', label: 'プライバシーポリシー' },
                { href: '/contact', label: 'お問い合わせ' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/80 hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 text-center text-sm text-white/70">
          <p>&copy; {new Date().getFullYear()} 清蓮 遺品整理サービス All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
