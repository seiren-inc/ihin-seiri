import { Metadata } from 'next';
import ContactClient from './ContactClient';
import { JsonLd, generateBreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'お問い合わせ・無料お見積り',
  description: '清蓮（せいれん）へのご相談や無料お見積りはこちらから。お急ぎの方はお電話、そうでない方はWebフォームまたはLINEからお気軽にお問い合わせください。',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'お問い合わせ・無料お見積り｜清蓮',
    description: '清蓮（せいれん）へのご相談や無料お見積りはこちらから。お急ぎの方はお電話、そうでない方はWebフォームまたはLINEからお気軽にお問い合わせください。',
    url: '/contact',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        generateBreadcrumbSchema([
          { name: 'ホーム', item: '/' },
          { name: 'お問い合わせ・無料お見積り', item: '/contact' }
        ])
      ]} />
      <ContactClient />
    </>
  );
}
