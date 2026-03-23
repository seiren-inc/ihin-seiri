'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function CustomCursor() {
  const cursorDot = useRef<HTMLDivElement>(null);
  const cursorOutline = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // モバイル端末（タッチデバイス）ではカーソルを無効化
    if (typeof window !== 'undefined' && 'ontouchstart' in window) {
      return;
    }

    const dot = cursorDot.current;
    const outline = cursorOutline.current;
    if (!dot || !outline) return;

    // 初期状態の透明度（マウスが動くまで非表示）
    gsap.set([dot, outline], { opacity: 0 });

    let isVisible = false;

    // quickToは再利用可能な高速セッターを生成する（毎フレームのアニメーション生成負荷をゼロにする）
    const xToDot = gsap.quickTo(dot, "x", { duration: 0.1, ease: 'power2.out' });
    const yToDot = gsap.quickTo(dot, "y", { duration: 0.1, ease: 'power2.out' });
    const xToOutline = gsap.quickTo(outline, "x", { duration: 0.4, ease: 'power3.out' });
    const yToOutline = gsap.quickTo(outline, "y", { duration: 0.4, ease: 'power3.out' });

    // マウス移動リスナー
    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) {
        gsap.to([dot, outline], { opacity: 1, duration: 0.3 });
        isVisible = true;
      }

      const { clientX, clientY } = e;
      xToDot(clientX);
      yToDot(clientY);
      xToOutline(clientX);
      yToOutline(clientY);
    };

    // ホバーエフェクトリスナー（.magnet クラスを持つ要素）
    const onMouseEnterMagnet = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      // 要素のサイズを取得してアウトラインを変形
      const rect = target.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      gsap.to(outline, {
        width: w + 16,
        height: h + 16,
        borderRadius: window.getComputedStyle(target).borderRadius || '8px',
        backgroundColor: 'rgba(30, 79, 102, 0.08)', // primary color mix
        border: '1px solid rgba(30, 79, 102, 0.2)',
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(dot, { opacity: 0, duration: 0.2 });
    };

    const onMouseLeaveMagnet = () => {
      // アウトラインを元の円形に戻す
      gsap.to(outline, {
        width: 40,
        height: 40,
        borderRadius: '50%',
        backgroundColor: 'transparent',
        border: '1px solid var(--color-primary-400)',
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(dot, { opacity: 1, duration: 0.2 });
    };

    window.addEventListener('mousemove', onMouseMove);

    // .magnet クラスの要素を監視してイベント追加/削除（MutationObserver等で動的対応も可能ですがシンプルに実装）
    const setupMagnets = () => {
      const magnets = document.querySelectorAll('.magnet, a, button'); // リンク・ボタンも対象指定
      magnets.forEach((el) => {
        el.addEventListener('mouseenter', onMouseEnterMagnet);
        el.addEventListener('mouseleave', onMouseLeaveMagnet);
      });
      return magnets;
    };

    // 初期セットアップ（少し遅延させてDOMレンダリングを待つ）
    let magnets: NodeListOf<Element>;
    const timer = setTimeout(() => {
      magnets = setupMagnets();
    }, 500);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      clearTimeout(timer);
      if (magnets) {
        magnets.forEach((el) => {
          el.removeEventListener('mouseenter', onMouseEnterMagnet);
          el.removeEventListener('mouseleave', onMouseLeaveMagnet);
        });
      }
    };
  }, []);

  return (
    <>
      {/* 追従する外側の円 */}
      <div
        ref={cursorOutline}
        className="custom-cursor-outline hidden md:block"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '1px solid var(--color-primary-400)',
          pointerEvents: 'none',
          zIndex: 980,
          transform: 'translate(-50%, -50%)',
          willChange: 'transform, width, height',
        }}
      />
      {/* 芯となる中心のドット */}
      <div
        ref={cursorDot}
        className="custom-cursor-dot hidden md:block"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: 'var(--color-accent)',
          pointerEvents: 'none',
          zIndex: 981,
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
        }}
      />
    </>
  );
}
