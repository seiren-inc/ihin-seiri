import type { Metadata } from 'next';
import './globals.css';
import '../styles/layout.css';
import '../styles/components/layout.css';
import '../styles/components/common.css';
import { LenisProvider } from '@/components/providers/LenisProvider';
import { ScrollAnimations } from '@/components/providers/ScrollAnimations';
import { PageTransitionProvider } from '@/components/providers/PageTransitionProvider';
import { CustomCursor } from '@/components/common/CustomCursor';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { MobileStickyCTA } from '@/components/layout/MobileStickyCTA';

export const metadata: Metadata = {
  title: '清蓮｜遺品整理サービス',
  description: '関東全域対応の遺品整理・ゴミ屋敷片付け・特殊清掃・供養相談。安心と信頼の終活サポートを提供します。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <LenisProvider>
          <CustomCursor />
          <ScrollAnimations />
          <div className="layout-content">
            <SiteHeader />
            <main className="main-content">
              <PageTransitionProvider>
                {children}
              </PageTransitionProvider>
            </main>
            <SiteFooter />
            <MobileStickyCTA />
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
