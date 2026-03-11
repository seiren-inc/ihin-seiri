'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // ページ遷移時にフェードイン
    el.style.opacity = '0';
    el.style.transform = 'translateY(8px)';

    const raf = requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.45s cubic-bezier(0.4,0,0.2,1), transform 0.45s cubic-bezier(0.4,0,0.2,1)';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });

    return () => {
      cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return (
    <div ref={containerRef} style={{ willChange: 'opacity, transform' }}>
      {children}
    </div>
  );
}
