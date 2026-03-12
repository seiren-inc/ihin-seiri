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
          y: 20, // 移動量を減らしてキビキビと
          duration: 0.6, // 0.85 -> 0.6
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
          y: 30,
          duration: 0.5, // 0.8 -> 0.5
          stagger: 0.1,  // 0.15 -> 0.1
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
          y: 30,
          scale: 0.98,
          duration: 0.5, // 0.7 -> 0.5
          stagger: 0.1,  // 0.18 -> 0.1
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
          x: -20,
          duration: 0.6, // 0.75 -> 0.6
          stagger: 0.12, // 0.2 -> 0.12
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
          x: 20,
          duration: 0.8, // 1.0 -> 0.8
          ease: 'power3.out',
          delay: 0.1,    // 0.3 -> 0.1
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
          y: 15,
          duration: 0.6, // 0.75 -> 0.6
          stagger: 0.08, // 0.12 -> 0.08
          ease: 'power3.out',
          delay: 0,      // 0.1 -> 0
        });
      }

      // ⑧ Trust コンテンツのフェードイン（画像以外）
      const trustContent = document.querySelector('.trust-content');
      if (trustContent) {
        gsap.from(trustContent, {
          opacity: 0,
          y: 20,
          duration: 0.6, // 0.85 -> 0.6
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
          x: -20,
          duration: 0.6, // 0.85 -> 0.6
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
          duration: 0.8, // 1.2 -> 0.8
          ease: 'power4.inOut',
        });

        // 2. と同時に、中の画像が少し奥から手前へズームダウンする（パララックス効果）
        if (img) {
          gsap.set(img, { scale: 1.1 });
          tl.to(img, {
            scale: 1,
            duration: 1.2, // 1.6 -> 1.2
            ease: 'power3.out',
          }, '<0.1'); // 0.2 -> 0.1
        }
      });
      
      // ⑪ 汎用アニメーションクラス .anim-fadeup に対する処理を追加 (バグ修正)
      // 下層ページの各要素がスクロールに応じてキビキビとフェードインするようになる
      gsap.utils.toArray<HTMLElement>('.anim-fadeup').forEach((el) => {
        // すでに個別のScrollTriggerが設定されている要素（= 親要素経由などでトリガー済みの可能性があるもの）は除外しても良いが、
        // 現状 .anim-fadeup クラスがついている要素は個別のScrollTriggerが未設定のものばかりなので直接初期化
        gsap.from(el, {
          opacity: 0,
          y: 24,
          duration: 0.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
