'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/services/estate-clearing', label: '遺品整理' },
  { href: '/services/garbage-cleaning', label: 'ゴミ清掃' },
  { href: '/services/special-cleaning', label: '特殊清掃' },
  { href: '/pricing', label: '料金' },
  { href: '/cases', label: '施工事例' },
  { href: '/faq', label: 'FAQ' },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // メニュー開閉時に body スクロールを制御
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={[
          'sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-border transition-shadow duration-200',
          scrolled ? 'shadow-md' : 'shadow-sm',
        ].join(' ')}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-20 flex justify-between items-center">
          {/* ロゴ */}
          <div className="flex flex-col">
            <Link href="/" className="flex flex-col">
              <span className="text-2xl font-bold text-primary-dark leading-tight">清蓮</span>
              <span className="text-xs text-text-sub">遺品整理サービス</span>
            </Link>
          </div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text font-medium hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-200 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* デスクトップ CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:0120-000-000"
              className="text-xl font-bold text-primary hover:text-primary-dark transition-colors duration-200"
            >
              0120-000-000
            </a>
            <Link
              href="/contact"
              className="bg-accent hover:bg-[#a56f82] text-white font-bold px-6 py-3 rounded-xl transition-colors duration-200"
            >
              無料お見積り
            </Link>
          </div>

          {/* モバイル ハンバーガーボタン */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-primary"
            aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* モバイルメニュー オーバーレイ */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col md:hidden">
          <div className="h-20 border-b border-border flex items-center justify-between px-6">
            <Link href="/" className="flex flex-col" onClick={() => setMenuOpen(false)}>
              <span className="text-2xl font-bold text-primary-dark leading-tight">清蓮</span>
              <span className="text-xs text-text-sub">遺品整理サービス</span>
            </Link>
            <button onClick={() => setMenuOpen(false)} className="p-2 text-primary" aria-label="閉じる">
              <X size={28} />
            </button>
          </div>

          <nav className="flex flex-col flex-1 overflow-y-auto px-6 py-8 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-bold text-text hover:text-primary py-4 border-b border-border transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="p-6 border-t border-border flex flex-col gap-3">
            <a
              href="tel:0120-000-000"
              className="flex items-center justify-center gap-2 py-4 bg-primary text-white font-bold rounded-xl text-xl"
            >
              0120-000-000
            </a>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center py-4 bg-accent text-white font-bold rounded-xl"
            >
              無料お見積り（Web）
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
