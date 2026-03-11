'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ScrollAnimations() {
  useEffect(() => {
    // ScrollTrigger がリフレッシュされるまで少し待つ
    const ctx = gsap.context(() => {

      // ① セクションタイトルのフェードアップ
      gsap.utils.toArray<HTMLElement>('.section-title').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 30,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        });
      });

      // ② サービスカードのstagger フェードアップ
      const serviceCards = gsap.utils.toArray<HTMLElement>('.service-card');
      if (serviceCards.length > 0) {
        gsap.from(serviceCards, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.section-services',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }

      // ③ 施工事例カードのstagger
      const caseCards = gsap.utils.toArray<HTMLElement>('.case-card');
      if (caseCards.length > 0) {
        gsap.from(caseCards, {
          opacity: 0,
          y: 40,
          scale: 0.97,
          duration: 0.7,
          stagger: 0.18,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.section-cases',
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        });
      }

      // ④ 選ばれる理由カードのstagger
      const reasonCards = gsap.utils.toArray<HTMLElement>('.reason-card');
      if (reasonCards.length > 0) {
        gsap.from(reasonCards, {
          opacity: 0,
          x: -30,
          duration: 0.75,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.section-reasons',
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        });
      }

      // ⑤ Flow 横スクロール＆ピン留め (Phase 4)
      const flowSection = document.querySelector('.section-flow');
      const flowHorizontalWrapper = document.querySelector('.flow-horizontal-wrapper');
      
      if (flowSection && flowHorizontalWrapper) {
        // 横にスクロールするべき距離を計算（中身の幅 - 画面幅 + 余白）
        const getScrollAmount = () => {
          return -(flowHorizontalWrapper.scrollWidth - window.innerWidth + 40);
        };

        const tween = gsap.to(flowHorizontalWrapper, {
          x: getScrollAmount,
          ease: 'none',
        });

        ScrollTrigger.create({
          trigger: flowSection,
          start: 'center center',
          end: () => `+=${getScrollAmount() * -1}`, // スクロールする距離分だけPinを下へ伸ばす
          pin: true,
          animation: tween,
          scrub: 1, // スクロールに滑らかに連動
          invalidateOnRefresh: true, // リサイズ時に計算し直す
        });
      }

      // ⑥ Hero ビジュアルのフェードインスライド（右から）
      const heroVisual = document.querySelector('.hero-visual');
      if (heroVisual) {
        gsap.from(heroVisual, {
          opacity: 0,
          x: 40,
          duration: 1.0,
          ease: 'power3.out',
          delay: 0.3,
        });
      }

      // ⑦ Hero コンテンツの順番フェードアップ
      const heroTitle = document.querySelector('.hero-title');
      const heroBadge = document.querySelector('.hero-badge');
      const heroDesc = document.querySelector('.hero-desc');
      const heroTrust = document.querySelector('.hero-trust');
      const heroCta = document.querySelector('.hero-cta');

      const heroEls = [heroBadge, heroTitle, heroDesc, heroTrust, heroCta].filter(Boolean);
      if (heroEls.length > 0) {
        gsap.from(heroEls, {
          opacity: 0,
          y: 22,
          duration: 0.75,
          stagger: 0.12,
          ease: 'power3.out',
          delay: 0.1,
        });
      }

      // ⑧ Trust コンテンツのフェードイン（画像以外）
      const trustContent = document.querySelector('.trust-content');
      if (trustContent) {
        gsap.from(trustContent, {
          opacity: 0,
          y: 20,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.section-trust',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }

      // ⑨ 供養セクションのフェードイン（画像以外）
      const memorialContent = document.querySelector('.memorial-content');
      if (memorialContent) {
        gsap.from(memorialContent, {
          opacity: 0,
          x: -30,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.section-memorial',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }

      // ⑩ Cinematic Image Reveal (Phase 4)
      const revealElements = gsap.utils.toArray<HTMLElement>('.reveal-wrapper');
      revealElements.forEach((wrapper) => {
        const img = wrapper.querySelector('.reveal-img');
        
        // CSSでJSロード前に隠していた初期クリップパスをGSAP用にリセット
        wrapper.classList.remove('is-reveal-ready');
        gsap.set(wrapper, { clipPath: 'inset(0 100% 0 0)' });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapper,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });

        // 1. ラッパー自体のマスクが開示される（左から右へ）
        tl.to(wrapper, {
          clipPath: 'inset(0 0% 0 0)',
          duration: 1.2,
          ease: 'power4.inOut',
        });

        // 2. と同時に、中の画像が少し奥から手前へズームダウンする（パララックス効果）
        if (img) {
          gsap.set(img, { scale: 1.15 });
          tl.to(img, {
            scale: 1,
            duration: 1.6,
            ease: 'power3.out',
          }, '<0.2'); // マスクが開示されて少し遅れてスケールアニメーションが目に入る
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
