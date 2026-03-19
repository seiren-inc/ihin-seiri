# CODEX.md — ihin-seiri（事業エージェント向け文脈）

> 最終更新: 2026-03-19 | グループ: B（テック系）

---

## Project Goal（事業の目的）

**「遺品整理・生前整理のプロセスを、家族のストレスなく進められるようにする」**

故人の遺品整理や生前整理にまつわる「どこに頼めばいいか」「費用は？」
「何から始めれば？」という疑問に対して、情報提供と専門業者への橋渡しを行う。
クリーンで整然としたデザインが「片付ける」というコンセプトと呼応している。

ターゲット: 遺品整理を依頼したい50〜70代 / 生前整理を考える中高年

---

## Brand Identity

**「整然・クリーン・信頼」**
- テック系グループBのカラーリング（#0040FF / #0D2E57）ベース
- 「整理整頓」というコンセプトを余白と構造で表現

---

## AEO（JSON-LD）ルール

```tsx
{ "@type": "LocalBusiness", "name": "遺品整理サービス", "serviceType": "遺品整理・生前整理" }
{ "@type": "Article", "headline": "遺品整理の進め方ガイド" }
{ "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "遺品整理の相場は？" }] }
```

---

## プライバシー・AI生成ルール

- 故人・遺族に関する情報はセンシティブ。AIが具体的な個人事例を創作することは禁止
- Cloudflare Turnstile をフォームに実装
- microCMS コラムのAI補助作成時は「AI補助作成」表記必須

---

## PPR & Edge

```ts
experimental: { ppr: true }
images: { formats: ["image/avif", "image/webp"] }
// 本番ビルドは NEXT_TURBOPACK=0 を使用すること
```
