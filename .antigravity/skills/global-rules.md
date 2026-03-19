# global-rules.md — ihin-seiri

> グループ: **B（SocialBoost / テック系）**  
> 最終更新: 2026-03-19

---

## 1. ブランドアイデンティティ

### カラーシステム

| 役割 | HEX | 用途 |
|------|-----|------|
| プライマリブルー | `#0040FF` | プライマリCTA・ブランドカラー |
| ダークネイビー | `#0D2E57` | ヘッダー・フッター |
| アクセント | `#00CFFF` | 強調・グロー |
| 背景 | `#FFFFFF` または `#F0F4FF` | ベース背景 |
| テキスト | `#0D1A2E` | 本文 |

> このプロジェクトはTailwind CSS v3（postcss設定）を使用。カスタムカラーは `tailwind.config.js` の `theme.extend.colors` に定義する。

### Tailwind v3 色定義
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0040FF",
          dark:    "#0D2E57",
          accent:  "#00CFFF",
        },
        neutral: {
          bg:   "#FFFFFF",
          soft: "#F0F4FF",
          text: "#0D1A2E",
          muted:"#4A5568",
        },
      },
    },
  },
}
```

### ブランドトーン
- 「遺品整理・生前整理」という繊細なテーマを扱いつつ、近代的・整理整頓されたクリーンさを表現
- グループBのテック感を持ちながら、ユーザーの心理的負担を軽減する色使い

---

## 2. デザインシステム

### 基本方針
- **整頓・クリーン・直線的**なビジュアル
- 余白は広め（「片付ける」というブランドコンセプトと呼応）
- フォントサイズは大きめ、行間広め

---

## 3. アニメーション（GSAP + Lenis + Three.js）

このプロジェクトは `gsap@^3.14` / `lenis@^1.3` / `three@^0.183` / `@react-three/fiber` / `@react-three/drei` を使用。

### スクロールアニメーション
```tsx
// テック系：キレのあるスライドイン
gsap.fromTo(el,
  { opacity: 0, x: -30 },
  {
    opacity: 1, x: 0, duration: 0.5, ease: "power2.out",
    scrollTrigger: { trigger: el, start: "top 85%", once: true },
  }
)
```

### Lenis 設定
```tsx
const lenis = new Lenis({ lerp: 0.1, smoothWheel: true })
```

### Three.js 遅延ロード
```tsx
import dynamic from "next/dynamic"
const BackgroundScene = dynamic(() => import("@/components/three/BackgroundScene"), { ssr: false })
```

---

## 4. フォント

| 要素 | フォント |
|------|---------|
| 見出し | Noto Sans JP（ゴシック・視認性重視） |
| 本文 | Noto Sans JP |
| 英数字・数値 | Inter |

---

## 5. SEO / コンテンツ

- microCMSから記事・サービス情報を管理
- ブログ記事には必ず `Article` JSON-LD を実装
- ISRで定期的なコンテンツ更新に対応

```ts
// microCMS
import { createClient } from "microcms-js-sdk"
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
})
export const revalidate = 3600
```

---

## 6. 技術スタック最適化パターン

**スタック**: Next.js 15 / React 19 / GSAP 3 / Lenis / Three.js / R3F / microCMS / Tailwind CSS v3

### Three.js（パフォーマンス）
```tsx
// LCP要素には絶対に Three.js を使わない
// Canvas は ssr: false + Suspense でラップ
<Suspense fallback={<div className="bg-neutral-soft animate-pulse h-64" />}>
  <BackgroundScene />
</Suspense>
```

---

## 7. コンポーネント設計ルール

- `components/ui/` → 汎用UIコンポーネント
- `components/three/` → Three.js関連（ssr: false 必須）
- `any` 型の使用禁止
- `console.log` の本番コードへの混入禁止
- 画像は `next/image` を必ず使用

---

## 8. アニメーション アクセシビリティ基準（2026追加）

### useReducedMotion 必須ルール（framer-motion 新規追加）

このプロジェクトにframer-motionが新規追加された。既存のGSAPと共存させる。

```tsx
// lib/motion.ts
"use client"
import { useReducedMotion } from "framer-motion"
export function useMotionSafe() { return !useReducedMotion() }
```

```ts
// GSAP での prefers-reduced-motion 対応
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
if (!prefersReduced) {
  gsap.fromTo(el, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.5, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 85%", once: true } })
} else {
  gsap.set(el, { opacity: 1 }) // 即時表示
}
```

### Suspense による重エフェクトの遅延

```tsx
import { Suspense } from "react"
import dynamic from "next/dynamic"
const BackgroundScene = dynamic(() => import("@/components/three/BackgroundScene"), { ssr: false })
<Suspense fallback={<div className="bg-bg-light animate-pulse h-64" />}>
  <BackgroundScene />
</Suspense>
```

### パフォーマンス基準
- LCP要素にアニメーション禁止・Lighthouse Performance 90+ 維持
