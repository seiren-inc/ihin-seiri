# CLAUDE.md — ihin-seiri（技術エージェント向け憲法）

> 最終更新: 2026-03-19 | Package Manager: npm | Node: >=18.0.0

---

## コマンド一覧

```bash
npm run dev          # 開発サーバー起動（Turbopack）
npm run build        # NEXT_TURBOPACK=0 next build（本番はwebpack）
npm run start        # 本番サーバー起動
npm run lint         # ESLint
```

---

## 技術スタック

| 項目 | 内容 |
|------|------|
| Framework | Next.js 15.x |
| React | 19.x |
| Styling | Tailwind CSS v3（tailwind.config.js に詳細なカスタムカラー定義済み） |
| Animation | GSAP 3 + Lenis / Framer Motion v12（新規追加） |
| 3D | Three.js / @react-three/fiber / @react-three/drei |
| CMS | microCMS |
| Icons | Lucide React |

---

## 重要：tailwind.config.jsのカスタム設定

```js
// 変更禁止のプロジェクト固有設定
primary: { DEFAULT: "#1e4f66", dark: "#1a252f" }
accent:  { DEFAULT: "#9c5272" }
// spacing, borderRadius, maxWidth も定義済み
```

---

## PPR & 最適化

```ts
experimental: { ppr: true }
images: { formats: ["image/avif", "image/webp"] }
```

---

## エラー解決

```bash
# Turbopack ビルドエラー → npm run build（NEXT_TURBOPACK=0） で回避
# Three.js SSRエラー → dynamic import + ssr: false
# microCMS API エラー → MICROCMS_SERVICE_DOMAIN / MICROCMS_API_KEY を確認
```
