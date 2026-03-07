import Link from 'next/link';
import { Phone, Mail, MessageSquare } from 'lucide-react';

export function MobileStickyCTA() {
  return (
    <div className="mobile-sticky-cta flex md:hidden">
      <a href="tel:0120-000-000" className="cta-item tel">
        <Phone size={20} />
        <span>電話相談</span>
      </a>
      <Link href="/contact" className="cta-item mail">
        <Mail size={20} />
        <span>Web見積り</span>
      </Link>
      <a href="#" className="cta-item line">
        <MessageSquare size={20} />
        <span>LINE相談</span>
      </a>
    </div>
  );
}
