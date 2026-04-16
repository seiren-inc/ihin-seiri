import Image from 'next/image';
import { WaveDivider } from '@/components/common/WaveDivider';

interface PageHeroProps {
  title: string;
  description?: string;
  backgroundImage?: string;
}

export function PageHero({
  title,
  description,
  backgroundImage = '/images/service-bg.png',
}: PageHeroProps) {
  return (
    <div className="page-hero relative w-full overflow-hidden bg-primary-950">
      <div className="page-hero-bg absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={`${title}の背景画像`}
          fill
          className="object-cover opacity-40 mix-blend-overlay"
          priority
        />
      </div>
      <div className="container relative z-10 flex flex-col items-center justify-center text-center pt-2xl pb-xl">
        <h1 className="page-hero-title text-white">{title}</h1>
        {description && (
          <p className="page-hero-desc text-white opacity-90 mt-md">
            {description}
          </p>
        )}
      </div>
      <div className="absolute bottom-0 left-0 w-full z-20">
        <WaveDivider fromColor="transparent" toColor="var(--color-bg-light)" />
      </div>
    </div>
  );
}
