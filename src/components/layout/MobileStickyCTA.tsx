import Link from 'next/link';
import { Phone, Mail, MessageSquare } from 'lucide-react';

export function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 flex md:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.1)]">
      <a
        href="tel:0120-000-000"
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-xs font-bold text-white bg-primary-dark hover:bg-primary transition-colors duration-200"
      >
        <Phone size={20} />
        <span>電話相談</span>
      </a>
      <Link
        href="/contact"
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-xs font-bold text-white bg-accent hover:bg-[#a56f82] transition-colors duration-200"
      >
        <Mail size={20} />
        <span>Web見積り</span>
      </Link>
      <a
        href="#"
        className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-xs font-bold text-white bg-[#06C755] hover:bg-[#04a244] transition-colors duration-200"
      >
        <MessageSquare size={20} />
        <span>LINE相談</span>
      </a>
    </div>
  );
}
