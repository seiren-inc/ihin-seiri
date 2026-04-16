# Multi-Agent Operating Rules — ihin-seiri

> 対象: Antigravity / Codex / Claude Code
> 更新: 2026-04-14

---

## 1. チーム構成と役割分担

| エージェント | 主担当 | 副担当禁止事項 |
|---|---|---|
| **Antigravity** | 設計・構成・UI方針・ドキュメント・ワークフロー策定 | 最終ブラウザ検証・本番コード実装 |
| **Codex** | 実装・diff生成・リポジトリ内コード変更 | 大規模リファクタ（承認なし） |
| **Claude Code** | 深堀り分析・横断的レビュー・監査 | 実装（分析専任） |

## 2. タスクルーティング基準

```
UI/デザイン判断 → Antigravity
実装・diff → Codex
横断レビュー・監査 → Claude Code
```

## 3. 実行契約（非交渉）

- app code / schema / env / package.json を理由なく触らない
- 実装前に必ず Analysis → Plan → Approval フローを経る
- 完了報告には必ず変更ファイルパス・diff・検証結果を含める
- 推測での補完は禁止

## 4. プラットフォーム固有禁止事項 — ihin-seiri

- `tailwind.config.js` カスタムカラー値の変更禁止
- dev は Turbopack: `npm run dev`、build は `NEXT_TURBOPACK=0 next build`
- microCMS: フェッチは Server Components のみ
- ISR: `revalidate = 3600` の無断変更禁止
- Three.js: `dynamic import + ssr: false + Suspense` 必須

## 5. 完了定義

以下がすべて揃った場合のみ完了とする：

- [ ] 変更ファイルパス（フルパス）の提示
- [ ] diff または変更箇所の明示
- [ ] `NEXT_TURBOPACK=0 npm run build` の実行結果
- [ ] スコープ遵守の確認
- [ ] Skill Usage Report

## 6. エスカレーション基準

以下が発生したら即停止してユーザーに確認：

- カラートークンの変更が必要
- Turbopack/Build 設定変更が必要
- 複数モジュールへの影響
- 要件が不明確
