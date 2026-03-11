interface WaveDividerProps {
  /** 上のセクションの背景色 (CSS値) */
  fromColor?: string;
  /** 波の色 = 下のセクション背景色 (CSS値) */
  toColor?: string;
  /** 反転: true = 下から上に向かう波 */
  flip?: boolean;
  className?: string;
}

/**
 * セクション間の境界を波形SVGで演出するコンポーネント。
 * toColor に下のセクション背景色を渡す。
 */
export function WaveDivider({
  fromColor = 'transparent',
  toColor = '#f8f7f5',
  flip = false,
  className = '',
}: WaveDividerProps) {
  return (
    <div
      className={`wave-divider ${className}`}
      aria-hidden="true"
      style={{
        background: fromColor,
        lineHeight: 0,
        overflow: 'hidden',
        transform: flip ? 'scaleY(-1)' : undefined,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: '56px' }}
      >
        <path
          d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,56 L0,56 Z"
          fill={toColor}
        />
      </svg>
    </div>
  );
}
