# 清蓮サイト Tailwind CSS デザイン改善 仕様書

## 役割と前提

あなたは世界トップレベルのWebデザイナー兼フロントエンドエンジニアです。
以下の仕様に基づき、清蓮｜遺品整理サービスのWebサイトを Tailwind CSS を使ってデザインリニューアルしてください。

---

## 現在の技術構成

- **Framework**: Next.js 15.3.0 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3（globals.css に @tailwind ディレクティブ追加済み）+ 既存 Vanilla CSS が共存
- **Animation**: Lenis + GSAP
- **Icons**: lucide-react

---

## 配色テーマ（案C: Clear & Elegant）

3色ベース。Tailwind の `tailwind.config.js` の `theme.extend.colors` に定義済み。

| 役割                   | CSS変数                | Tailwind クラス                        | HEX       |
| ---------------------- | ---------------------- | -------------------------------------- | --------- |
| ベース背景             | `--color-bg`           | `bg-background`                        | `#ffffff` |
| セクション背景         | `--color-bg-section`   | `bg-bg-section`                        | `#f8f9fa` |
| メインカラー（青墨色） | `--color-primary`      | `bg-primary`, `text-primary`           | `#2c3e50` |
| メインカラー（深）     | `--color-primary-dark` | `bg-primary-dark`, `text-primary-dark` | `#1a252f` |
| アクセント（蓮ピンク） | `--color-accent`       | `bg-accent`, `text-accent`             | `#c08497` |
| テキスト               | `--color-text`         | `text-text`                            | `#2c3e50` |
| サブテキスト           | `--color-text-sub`     | `text-text-sub`                        | `#6c7a89` |
| ボーダー               | `--color-border`       | `border-border`                        | `#e2e8f0` |

---

## 改善対象コンポーネント一覧

### 1. SiteHeader（`src/components/layout/SiteHeader.tsx`）

**現在の課題**:

- モバイルハンバーガーメニューが未実装
- ナビゲーションリンクのホバー効果が弱い
- ヘッダーのスクロール時のグラス効果が CSS ファイル側に依存

**実装方針**:

- `useState` でモバイルメニューの開閉状態管理
- スクロール量に応じて影の濃さを動的変更（`useEffect` + `window.addEventListener('scroll')`）
- Tailwind クラスで全スタイルを実装し、外部 CSS（`layout.css`）の該当記述を削除

**出力仕様**:

```tsx
// SiteHeader.tsx の完全書き換えイメージ（実装時には完全なコードを出力）
// - sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-border shadow-sm
// - max-w-[1200px] mx-auto px-6 h-20 flex justify-between items-center
// - モバイルメニュー: fixed inset-0 z-40 bg-white flex flex-col
// - 電話CTA: text-xl font-bold text-primary
// - 問い合わせCTA: bg-accent hover:bg-accent/hover text-white px-6 py-3 rounded-xl font-bold
```

---

### 2. SiteFooter（`src/components/layout/SiteFooter.tsx`）

**現在の課題**:

- 背景色（濃紺）と配色（蓮ピンク×白）が合っていない
- ロゴエリアとリンクの余白バランスが不均一

**実装方針**:

- フッター全体を `bg-primary-dark text-white` に統一
- コンテンツを `grid grid-cols-1 md:grid-cols-3 gap-10` で整列
- コピーライトラインは `border-t border-white/10 pt-6 text-center text-white/60 text-sm`

---

### 3. MobileStickyCTA（`src/components/layout/MobileStickyCTA.tsx`）

**現在の課題**:

- スタイルが `layout.css` に依存しており Tailwind 化できていない
- LINE ボタンの色が CSS ファイル内ハードコード

**実装方針**:

- `className` を Tailwind のみで記述
- `fixed bottom-0 left-0 w-full z-50 flex md:hidden`
- 電話: `flex-1 flex flex-col items-center justify-center gap-1 py-3 text-xs font-bold text-white bg-primary-dark`
- Web見積: `flex-1 flex flex-col items-center justify-center gap-1 py-3 text-xs font-bold text-white bg-accent`
- LINE: `flex-1 flex flex-col items-center justify-center gap-1 py-3 text-xs font-bold text-white bg-[#06C755]`

---

### 4. 施工事例一覧ページ（`src/app/cases/page.tsx`）

**現在の課題**:

- `style={{}}` のインライン記述が多く保守性が低い
- カードのホバー効果がない

**実装方針**:

- 全 `style={{}}` を Tailwind クラスに置換
- カードに `group` + `hover:shadow-lg hover:-translate-y-1 transition-all duration-200` を追加
- タグは `bg-bg-section text-xs font-bold px-2 py-1 rounded`
- フィルターは `inline-flex gap-2 p-2 bg-bg-section rounded-full`

---

### 5. Button コンポーネント（`src/components/common/Button.tsx`）

**実装方針**:

- `variant` ごとに Tailwind クラスを切り替え（`cva` 不使用。三項演算子またはオブジェクトマッピングで対応）
- `primary`: `bg-primary text-white hover:bg-primary-dark`
- `accent`: `bg-accent text-white hover:bg-accent/80`
- `outline`: `border-2 border-primary text-primary hover:bg-primary hover:text-white`
- `secondary`: `bg-bg-section text-primary hover:bg-border`
- サイズ: `sm: px-4 py-2 text-sm`, `md: px-6 py-3`, `lg: px-8 py-4 text-lg`
- 全バリアントに `inline-flex items-center justify-center font-bold rounded-xl transition-colors duration-200` を付与

---

### 6. 共通 CSS（`src/styles/layout.css` と `src/styles/components/layout.css`）

**対応方針**:

- 上記コンポーネントの Tailwind 化が完了した段階で、対応する CSS クラス定義を削除
- `section-py-md`, `section-py-lg` などのユーティリティは `globals.css` の `@layer utilities` に移行:

```css
@layer utilities {
  .section-py-sm {
    @apply py-10;
  }
  .section-py-md {
    @apply py-16;
  }
  .section-py-lg {
    @apply py-24;
  }
  .container {
    @apply max-w-[1200px] mx-auto px-6;
  }
}
```

---

## 実装の優先順位

1. `Button.tsx` の Tailwind 化（全ページに影響するため最優先）
2. `SiteHeader.tsx` の Tailwind 化 + モバイルメニュー実装
3. `MobileStickyCTA.tsx` の Tailwind 化
4. `SiteFooter.tsx` の Tailwind 化
5. `cases/page.tsx` の `style={{}}` 除去と Tailwind 化
6. `globals.css` の `@layer utilities` 移行
7. 不要になった CSS ファイルの記述を削除

---

## 禁止事項

- `style={{}}` のインラインスタイルは禁止（ただし動的な値は例外）
- `className` への CSS 変数直書き（`className="text-[var(--color-primary)]"`）は禁止。必ずTailwindの拡張トークンを使う
- `tailwind.config.js` に定義されていない色の追加（変更が必要な場合は config を先に更新）
- コンポーネントの機能・ルーティング・データ構造の変更は行わない（スタイルのみ改修）

---

## 検証コマンド

```bash
npm run build
```

エラーなく全ページのビルドが完了することを確認してください。
