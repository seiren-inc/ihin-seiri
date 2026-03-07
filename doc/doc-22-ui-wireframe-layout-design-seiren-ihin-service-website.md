# 清蓮｜遺品整理サービス UIワイヤーフレーム・ページレイアウト設計書

**文書名**：清蓮｜遺品整理サービス UIワイヤーフレーム設計書  
**対象サイト**：清蓮｜遺品整理サービス

---

## 1. 文書概要

**目的**  
本書は清蓮遺品整理サービスサイトの全ページの画面構造、UI配置、コンテンツ順序を定義する。  
本設計書はAntigravityで実装する際の画面設計の基準となる。

**定義対象**  
トップページ / サービスページ / 料金ページ / 施工事例ページ / 地域ページ / FAQページ / 問い合わせページ

---

## 2. 共通レイアウト構造

```
Header → Hero Section → Main Content → CTA Section → Footer
```

**Header構成**：ロゴ / ナビゲーション / 電話CTA / 問い合わせCTA

**Footer構成**：会社情報 / サービスリンク / プライバシー / 問い合わせ

---

## 3. トップページワイヤーフレーム

### Section 1：Hero

- `[Image Placeholder: Hero Main Visual]`
- **コピー**：遺品整理のご相談は清蓮へ
- **サブコピー**：関東対応・無料相談
- **CTA**：無料相談 / 電話相談 / 料金シミュレーション

### Section 2：サービス概要

- 遺品整理 / ゴミ清掃 / 特殊清掃（カード表示）
- `[Image Placeholder: Service Category Image]`

### Section 3：清蓮が選ばれる理由

- 理由1：相談窓口
- 理由2：料金透明
- 理由3：供養連携
- 理由4：関東対応
- `[Image Placeholder: Trust Image]`

### Section 4：料金目安

- 間取り別料金（1K / 1LDK / 2LDK / 3LDK）
- **CTA**：料金シミュレーション

### Section 5：施工事例

- 事例カード一覧
- `[Image Placeholder: Before Image]` / `[Image Placeholder: After Image]`

### Section 6：作業の流れ

- 問い合わせ → ヒアリング → 見積 → 作業
- `[Image Placeholder: Process Illustration]`

### Section 7：供養サービス

- 遺品整理 → 供養 → 散骨
- `[Image Placeholder: Memorial Image]`

### Section 8：FAQ

- よくある質問

### Section 9：問い合わせCTA

- 電話 / LINE / フォーム

---

## 4. サービスページ

- **Hero**：`[Image Placeholder: Service Hero]`
- **サービス説明**：遺品整理（仕分け / 搬出 / 清掃）/ ゴミ清掃 / 特殊清掃
- **CTA**：問い合わせ

---

## 5. 料金ページ

- **Hero**：`[Image Placeholder: Pricing Hero]`
- **料金説明**：間取り別料金（1K / 1LDK / 2LDK / 3LDK）
- **料金注意**：現地見積
- **料金シミュレーション**
- **CTA**：問い合わせ

---

## 6. 施工事例ページ

- **Hero**：`[Image Placeholder: Case Hero]`
- **事例一覧**：カード形式（地域 / 間取り / 料金 / 作業時間）
- **事例詳細**：`[Image Placeholder: Before Image]` / `[Image Placeholder: After Image]`

---

## 7. 地域ページ

- **Hero**：`[Image Placeholder: Area Hero]`
- **地域説明** / 対応エリア / サービス / 施工事例
- **CTA**：問い合わせ

---

## 8. FAQページ

- **Hero**：`[Image Placeholder: FAQ Hero]`
- **質問一覧**：アコーディオンUI（質問 / 回答）
- **CTA**：問い合わせ

---

## 9. 問い合わせページ

- **Hero**：`[Image Placeholder: Contact Hero]`
- **フォーム入力**：名前 / 電話 / メール / 住所 / 相談内容
- 送信ボタン
- **CTA**：電話 / LINE

---

## 10. モバイルUI

- 縦レイアウト
- 固定CTA（電話 / LINE）

---

## 11. UIコンポーネント

- **カード**：サービスカード / 事例カード
- **ボタン**：CTAボタン
- **アコーディオン**：FAQ

---

## 12. UX導線

検索 → トップ → サービス → 料金 → 事例 → 問い合わせ

---

## 13. 最終方針

本サイトは **信頼・安心・理解** を重視した **「終活サービスサイト」** としてUI設計する。
