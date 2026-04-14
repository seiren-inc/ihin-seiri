'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface GsapRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  stagger?: number;
}

export function GsapReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 1,
  distance = 40,
  className = '',
  stagger = 0,
}: GsapRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!elementRef.current) return;

    const vars: gsap.TweenVars = {
      opacity: 0,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: elementRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    };

    switch (direction) {
      case 'up': vars.y = distance; break;
      case 'down': vars.y = -distance; break;
      case 'left': vars.x = distance; break;
      case 'right': vars.x = -distance; break;
    }

    if (stagger > 0) {
      const targets = elementRef.current.children;
      gsap.from(targets, { ...vars, stagger });
    } else {
      gsap.from(elementRef.current, vars);
    }
  }, { scope: elementRef });

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
