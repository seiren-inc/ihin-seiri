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
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.seiren-ihin.jp';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: '清蓮｜遺品整理・特殊清掃・ゴミ屋敷片付け',
    template: '%s | 清蓮（せいれん）',
  },
  description: '関東全域対応の遺品整理・ゴミ屋敷片付け・特殊清掃・供養相談。認定遺品整理士が安心と信頼の終活サポートを提供します。見積もり無料・即日対応可。',
  keywords: ['遺品整理', '特殊清掃', 'ゴミ屋敷', '生前整理', '不用品回収', '関東', '東京', '神奈川', '埼玉', '千葉'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '清蓮｜遺品整理・特殊清掃・ゴミ屋敷片付け',
    description: '関東全域対応の遺品整理・ゴミ屋敷片付け・特殊清掃・供養相談。認定遺品整理士が安心と信頼の終活サポートを提供します。',
    url: baseUrl,
    siteName: '清蓮',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/images/ogp.jpg', // 後ほど追加が必要であれば用意
        width: 1200,
        height: 630,
        alt: '清蓮 - 遺品整理サービス',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '清蓮｜遺品整理・特殊清掃',
    description: '関東全域対応の遺品整理・ゴミ屋敷片付け・特殊清掃。安心と信頼の終活サポート。',
    images: ['/images/ogp.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={cn("font-sans", geist.variable)}>
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
