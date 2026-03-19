import { Metadata } from 'next';
import SimulationClient from './SimulationClient';
import { JsonLd, generateBreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: '1分でできる料金シミュレーション',
  description: '遺品整理・ゴミ屋敷清掃・特殊清掃の概算費用をすぐに確認できる無料シミュレーションツールです。間取りや作業状況を選ぶだけで、すぐにおおよその金額がご確認いただけます。',
  alternates: {
    canonical: '/simulation',
  },
  openGraph: {
    title: '1分でできる料金シミュレーション｜清蓮',
    description: '遺品整理・ゴミ屋敷清掃・特殊清掃の概算費用をすぐに確認できる無料シミュレーションツールです。',
    url: '/simulation',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={[
        generateBreadcrumbSchema([
          { name: 'ホーム', item: '/' },
          { name: '1分で料金シミュレーション', item: '/simulation' }
        ])
      ]} />
      <SimulationClient />
    </>
  );
}
