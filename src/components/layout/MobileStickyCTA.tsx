import Link from 'next/link';
import { Phone, Mail, MessageSquare } from 'lucide-react';

export function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 flex md:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.15)]">
      <a
        href="tel:0800-888-8788"
        className="flex-none w-1/4 flex flex-col items-center justify-center gap-1 py-3 text-xs font-bold text-white transition-colors duration-200"
        style={{ background: 'var(--color-primary-900)' }}
      >
        <Phone size={18} />
        <span>電話相談</span>
      </a>
      <Link
        href="/contact"
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-sm font-bold text-white transition-colors duration-200"
        style={{ background: 'var(--color-accent-600)', fontSize: '0.875rem' }}
      >
        <Mail size={20} />
        <span>無料Web見積り</span>
      </Link>
      <a
        href="https://line.me"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-none w-1/4 flex flex-col items-center justify-center gap-1 py-3 text-xs font-bold text-white bg-[#06C755] hover:bg-[#04a244] transition-colors duration-200"
      >
        <MessageSquare size={18} />
        <span>LINE相談</span>
      </a>
    </div>
  );
}

