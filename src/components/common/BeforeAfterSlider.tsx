'use client';

import { useRef, useState, useCallback } from 'react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  /** 初期仕切り位置 0〜100 (%) */
  initialPosition?: number;
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = '作業前',
  afterAlt = '作業後',
  initialPosition = 50,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(initialPosition);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  // Mouse events
  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    updatePosition(e.clientX);
    e.preventDefault();
  };
  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  }, [updatePosition]);
  const onMouseUp = () => { isDragging.current = false; };

  // Touch events
  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    updatePosition(e.touches[0].clientX);
  };
  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.touches[0].clientX);
  }, [updatePosition]);
  const onTouchEnd = () => { isDragging.current = false; };

  return (
    <div
      ref={containerRef}
      className="ba-slider"
      aria-label="ビフォーアフター比較スライダー"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* After image (全幅) */}
      <div className="ba-img ba-after">
        <Image src={afterSrc} alt={afterAlt} fill style={{ objectFit: 'cover' }} />
        <span className="ba-label ba-label-after">{afterAlt}</span>
      </div>

      {/* Before image (clip) */}
      <div
        className="ba-img ba-before"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image src={beforeSrc} alt={beforeAlt} fill style={{ objectFit: 'cover' }} />
        <span className="ba-label ba-label-before">{beforeAlt}</span>
      </div>

      {/* Divider handle */}
      <div className="ba-handle" style={{ left: `${position}%` }}>
        <div className="ba-line" />
        <div className="ba-knob" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M6 10l-4-4m0 0l4-4M2 6h16M14 10l4 4m0 0l-4 4M18 14H2" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
