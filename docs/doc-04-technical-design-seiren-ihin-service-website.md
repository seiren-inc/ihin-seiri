# 清蓮｜遺品整理サービス Webサイト 技術設計書

**文書名**：清蓮｜遺品整理サービス Webサイト 技術設計書  
**対象サイト**：清蓮｜遺品整理サービス

---

## 1. 文書概要

**目的**  
本書は、要件定義書、基本設計書、詳細設計書を基に、Antigravityでの実装に必要な技術構成、実装方針、ページ生成方式、データ構造、フォーム仕様、料金シミュレーション実装方針、SEO実装方針、保守運用前提を定義することを目的とする。

**前提**

- 本サイトは共同運営型サービスサイトであり、清蓮が集客・窓口・初期ヒアリングを担い、株式会社ベルコールが見積・契約・実作業を担う
- サイト上では清蓮ブランドを前面に出しつつ、主体の誤認を防ぐ表示を組み込む
- 実装はAntigravityで行う
- 更新性、SEO、表示速度、将来の地域ページ拡張を重視する

---

## 2. 技術方針

### 2-1. 基本方針

- 静的生成を基本とし、必要箇所のみ動的機能を持たせる
- 高速表示を優先する
- 構造化されたコンポーネント設計とする
- 将来の事例追加、FAQ追加、地域ページ追加が容易な構造とする
- 画像は差し替え前提のホルダー設計で実装する
- 料金シミュレーションは軽量なクライアント処理で実装する
- CMS導入余地を残しつつ、初期はファイルベースでも運用可能な設計にする

### 2-2. 非機能方針

- 高速 / 安全 / 保守しやすい / 拡張しやすい
- スマホ最適 / SEO強い / 運用担当が更新しやすい

---

## 3. 想定技術構成

### 3-1. フロントエンド

- Next.js系の構成を前提としたモダンなReactベース構成
- App Router相当のページ分割構造
- TypeScript前提
- コンポーネント駆動設計
- ユーティリティファーストCSSまたはデザイントークン設計を採用

### 3-2. スタイリング

- 再利用しやすいデザイン変数を定義
- 色、余白、角丸、影、文字サイズ、行間をトークン化
- ページ固有CSSの乱立を防ぐ
- SP / TB / PCでレスポンシブ対応

### 3-3. データ管理

- 初期段階はローカルデータファイルまたはCMS風JSON管理で運用可能とする
- 将来的なCMS化に備え、一覧データと詳細データを分離設計する
- 事例、FAQ、エリア、地域ページは配列データから生成できる構造とする

### 3-4. フォーム

- 外部フォームサービス連携またはメール通知可能なフォーム基盤を採用
- 送信後に管理者通知、自動返信を行う
- スパム対策を行う

### 3-5. アナリティクス

- GA4
- Google Search Console前提
- 必要に応じて広告タグ管理導入余地を残す

---

## 4. ディレクトリ構成方針

### 4-1. 想定ディレクトリ構成

```
app/
components/
data/
lib/
styles/
public/
public/images/
public/og/
public/placeholders/
```

### 4-2. ページ系構成例

```
app/page
app/services/page
app/services/estate-clearing/page
app/services/garbage-cleaning/page
app/services/special-cleaning/page
app/pricing/page
app/simulation/page
app/cases/page
app/cases/[slug]/page
app/areas/page
app/areas/[prefecture]/page
app/flow/page
app/reasons/page
app/memorial-support/page
app/faq/page
app/contact/page
app/operator/page
app/privacy/page
app/legal/page
```

### 4-3. コンポーネント系構成例

```
components/layout/
components/common/
components/sections/
components/cards/
components/forms/
components/faq/
components/cases/
components/pricing/
components/simulation/
components/seo/
```

### 4-4. データ系構成例

```
data/site.ts
data/navigation.ts
data/services.ts
data/pricing.ts
data/faq.ts
data/cases.ts
data/areas.ts
data/local-pages.ts
data/legal.ts
```

---

## 5. ルーティング設計

### 5-1. 静的ページ

- トップ / サービス一覧 / 遺品整理 / ゴミ清掃 / 特殊清掃
- 料金 / 料金シミュレーション / 対応エリア / 流れ / 選ばれる理由
- 供養連携 / FAQ / お問い合わせ / 運営者情報 / プライバシーポリシー / 必要表記

### 5-2. 動的生成ページ

- 施工事例詳細（`/cases/[slug]`）
- 地域別ページ（`/areas/[prefecture]`）
- 将来のコラム詳細

### 5-3. URL方針

- 英小文字 / ハイフン区切り / 簡潔 / 意味が分かる / 不要なパラメータなし

**例**

```
/services/estate-clearing
/services/garbage-cleaning
/services/special-cleaning
/pricing
/simulation
/cases/example-case-slug
/areas/kanagawa
/areas/tokyo
```

---

## 6. コンポーネント設計

### 6-1. レイアウト系

`SiteHeader` / `SiteFooter` / `MobileStickyCTA` / `PageHero` / `Breadcrumbs` / `SectionHeader` / `FinalCTASection`

### 6-2. 共通UI系

`PrimaryButton` / `SecondaryButton` / `TelButton` / `LineButton` / `InfoCard` / `ReasonCard` / `ServiceCard` / `CaseCard` / `FAQAccordion` / `ComparisonTable` / `Tag` / `NoticeBox` / `ImagePlaceholder`

### 6-3. 機能系

`PricingTable` / `PricingSimulatorForm` / `PricingSimulatorResult` / `CaseFilter` / `ContactForm` / `StepFlow` / `AreaList` / `RelatedLinks`

### 6-4. SEO系

`SeoHead` / `JsonLdBreadcrumb` / `JsonLdFAQ` / `JsonLdService`

### 6-5. コンポーネント原則

- 単一責務 / 再利用可能 / props駆動
- 内容と見た目の責務を分離
- データ駆動
- 画像未確定でも成立する構造

---

## 7. データ設計

### 7-1. サービスデータ

| フィールド                      | 内容             |
| ------------------------------- | ---------------- |
| `id`                            | 識別子           |
| `slug`                          | URL用            |
| `title`                         | サービス名       |
| `shortDescription`              | 一覧用概要       |
| `longDescription`               | 詳細説明         |
| `heroTitle` / `heroDescription` | KVコピー         |
| `imagePlaceholders`             | 画像ホルダー一覧 |
| `features`                      | 特徴リスト       |
| `flowSteps`                     | 作業ステップ     |
| `faqIds`                        | FAQ参照          |
| `relatedCaseIds`                | 関連事例参照     |
| `relatedPageLinks`              | 関連ページ導線   |

### 7-2. 料金データ

| フィールド              | 内容         |
| ----------------------- | ------------ |
| `roomType`              | 間取り       |
| `minPrice` / `maxPrice` | 料金レンジ   |
| `label`                 | 表示名       |
| `includedItems`         | 含まれるもの |
| `extraCostFactors`      | 追加費用要因 |
| `notes`                 | 注意書き     |

### 7-3. 事例データ

| フィールド                                                                  | 内容                      |
| --------------------------------------------------------------------------- | ------------------------- |
| `id` / `slug`                                                               | 識別子 / URL              |
| `title`                                                                     | 事例タイトル              |
| `serviceType`                                                               | サービス種別              |
| `area` / `prefecture`                                                       | エリア / 都県             |
| `roomType` / `priceRange`                                                   | 間取り / 料金帯           |
| `workTime` / `workerCount`                                                  | 作業時間 / 人数           |
| `tags`                                                                      | タグ一覧                  |
| `summary` / `problem` / `solution` / `detail`                               | 概要 / 課題 / 対応 / 詳細 |
| `hasMemorialSupport`                                                        | 供養相談有無              |
| `hasSpecialCleaning`                                                        | 特殊清掃有無              |
| `beforeImagePlaceholder` / `afterImagePlaceholder` / `mainImagePlaceholder` | 画像参照                  |
| `relatedCaseIds`                                                            | 関連事例                  |
| `published`                                                                 | 公開フラグ                |

### 7-4. FAQデータ

| フィールド            | 内容              |
| --------------------- | ----------------- |
| `id` / `category`     | 識別子 / カテゴリ |
| `question` / `answer` | 質問 / 回答       |
| `relatedLinks`        | 関連ページ        |
| `order`               | 並び順            |

### 7-5. エリアデータ

| フィールド                            | 内容                       |
| ------------------------------------- | -------------------------- |
| `id` / `slug` / `name` / `prefecture` | 識別子 / URL / 名称 / 都県 |
| `description`                         | 説明文                     |
| `supportedServices`                   | 対応サービス               |
| `caseIds` / `faqIds`                  | 関連事例・FAQ              |
| `ctaText`                             | CTA文言                    |

### 7-6. ナビゲーションデータ

- `headerLinks` / `footerGroups` / `stickyCTAItems`

---

## 8. 画像設計

### 8-1. 基本方針

- 画像はすべて差し替え前提
- 初期実装では空ホルダーを視覚的に整理して表示
- 本番では最適化された実画像へ切り替える
- CLSを防ぐためサイズ比率を固定する

### 8-2. 画像格納方針

```
public/placeholders/
public/images/services/
public/images/cases/
public/images/areas/
public/images/common/
public/images/memorial/
```

### 8-3. 画像命名規則

```
service-estate-clearing-hero
service-garbage-cleaning-overview
case-yokohama-2ldk-before
case-yokohama-2ldk-after
area-kanagawa-map
common-final-cta-visual
```

### 8-4. 画像最適化

- Next Image相当を使用
- 適切な `width` と `height` を設定
- ヒーロー画像は `priority`
- 下層画像は `lazy load`
- WebP / AVIFを優先
- `alt` は実装時に明示

### 8-5. 画像ホルダー比率設定

| 用途             | 比率 |
| ---------------- | ---- |
| ヒーロー         | 16:9 |
| 事例メイン       | 4:3  |
| ビフォーアフター | 4:3  |
| カード           | 3:2  |
| CTA補助          | 16:9 |

---

## 9. ページ生成設計

### 9-1. 静的生成優先

- トップ / 各サービスページ / 料金 / 流れ / FAQ / 供養連携 / 法務ページはビルド時生成

### 9-2. 事例ページ

- `cases.ts` から一覧と詳細を生成
- slugベースで動的ルート生成
- 公開フラグ `published` で制御

### 9-3. 地域ページ

- `areas.ts` または `local-pages.ts` からページ生成
- 神奈川、東京、千葉、埼玉、茨城、栃木、群馬を初期対象
- 将来の追加に備えてテンプレート化

---

## 10. 料金シミュレーション技術設計

### 10-1. 実装方針

- クライアントサイドで完結する軽量ロジック
- 外部API不要
- 初期はルールベース算出
- 将来は管理画面連携余地あり

### 10-2. 入力項目

```typescript
prefecture;
buildingType;
roomType;
volumeLevel;
floorLevel;
hasElevator;
serviceType;
needsSpecialCleaning;
needsMemorialSupport;
```

### 10-3. 出力項目

```typescript
estimatedMin;
estimatedMax;
message;
caution;
ctaLabel;
```

### 10-4. 算出ロジック方針

- 基本価格テーブル（`basePriceByRoomType`）を基準
- `modifierByVolume`（荷物量）で加算
- `modifierByFloor`（階数）で加算
- `modifierByElevator`（EV無し）で加算
- `modifierByServiceType`（サービス種別）で加算
- `modifierBySpecialCleaning`（特殊清掃）は別案内または加算レンジ
- 供養相談は費用に直加算せず案内導線を追加

### 10-5. UI仕様

- 初期表示は説明と入力案内
- 入力完了で結果表示
- 注意文言を常に表示
- 問い合わせCTAへ自然接続

### 10-6. 必須注意事項表示

> 参考価格です。正式なお見積りは現地確認後となります。見積書は提携専門業者名義で発行されます。

---

## 11. フォーム技術設計

### 11-1. 実装要件

- 必須バリデーション
- メール形式チェック / 電話番号形式チェック
- 送信中状態表示 / 送信成功状態表示 / 送信失敗時再試行案内

### 11-2. スパム対策

- reCAPTCHA系または軽量bot対策
- honeypot項目導入可
- 短時間連投制御

### 11-3. 通知設計

**送信先**：清蓮管理用メールアドレス

**自動返信内容**：受領確認 / 今後の流れ / 緊急時電話案内

**管理者通知項目**：問い合わせ日時 / 氏名 / 電話番号 / エリア / サービス種別 / 相談内容

### 11-4. データ保持方針

- 初期はメール通知中心
- 必要に応じてスプレッドシート連携やCRM連携余地を残す

---

## 12. 事例機能技術設計

### 12-1. 一覧機能

全件表示 / 条件フィルタ / タグ表示 / カードUI

### 12-2. フィルタ項目

`serviceType` / `roomType` / `prefecture` / `priceBand` / `hasSpecialCleaning` / `hasMemorialSupport`

### 12-3. 絞り込み仕様

- クライアントサイドでも実装可
- 件数が大きくなればサーバ側絞り込みへ拡張可能
- 結果なし時はメッセージ表示

### 12-4. 詳細ページ仕様

メイン画像 / ビフォーアフター / 要約情報 / 本文 / 関連事例 / CTA

---

## 13. FAQ機能技術設計

### 13-1. データ駆動

`faq.ts` を元にカテゴリ別表示

### 13-2. 表示仕様

- カテゴリごとに見出し分離
- アコーディオン開閉（初期クローズ）
- URLハッシュで直接遷移余地あり

### 13-3. SEO

- FAQ構造化データを出力
- 質問文と回答文は実文で保持

---

## 14. SEO実装設計

### 14-1. title設計

- ページごとに固有
- 主要キーワードを前方に配置
- 文字数過多を避ける

### 14-2. meta description設計

- ユーザーの不安解消要素 / エリア / サービス内容 / 相談しやすさ / 供養連携を含める

### 14-3. OGP

- ページごとにタイトルと概要
- `public/og/` で管理

### 14-4. 構造化データ

- `BreadcrumbList` / `FAQPage` / `Service` / `Article`（コラム時追加）

### 14-5. canonical

- 全ページに設定 / 重複ページを作らない

### 14-6. robots

- 本番index / プレビューnoindex運用可

### 14-7. sitemap

- 自動生成またはビルド時生成
- 地域ページと事例詳細も含める

---

## 15. パフォーマンス設計

### 15-1. 目標

- 初回表示高速 / LCP改善 / CLS抑制 / 不要JS最小化

### 15-2. 方針

- 画像最適化 / 静的生成優先 / 重いライブラリ不採用
- アニメーション最小限 / 必要な箇所のみクライアントコンポーネント

### 15-3. LCP候補管理

- ヒーロー画像 / ファーストビュー見出し / CTAボタン群を優先読み込み対象に限定

---

## 16. アクセシビリティ設計

### 16-1. 基本要件

- 適切な見出し階層 / フォームラベル / aria属性の補助
- キーボード操作対応 / コントラスト確保 / ボタンサイズ確保 / 画像alt設定

### 16-2. 高齢者配慮

- 文字サイズを小さくしすぎない
- 複雑なUIを避ける
- 重要情報は箇条化よりブロック分離
- 電話導線を常に分かりやすくする

---

## 17. セキュリティ設計

### 17-1. 基本要件

- フォーム入力値サニタイズ
- 外部リンクの安全設定
- 環境変数管理
- 送信先情報のソース直書き最小化

### 17-2. 個人情報配慮

- フォーム送信時のみ取得
- 不要な個人情報収集をしない
- プライバシーポリシーを明記
- 管理者通知先の運用を明確化

---

## 18. 計測設計

### 18-1. 主要イベント

| イベント名               | 発火条件           |
| ------------------------ | ------------------ |
| 電話タップ               | 電話ボタンクリック |
| LINEタップ               | LINE導線クリック   |
| 無料相談送信             | フォーム送信完了   |
| シミュレーション利用開始 | 入力開始時         |
| シミュレーション結果表示 | 結果エリア表示時   |
| 事例詳細閲覧             | 詳細ページ到達     |
| 供養連携ページ遷移       | 供養ページ到達     |
| 地域ページ閲覧           | 地域ページ到達     |

### 18-2. 計測方針

- data属性またはイベント名を統一
- CTAごとに区別可能にする
- トップ / サービス / 料金 / 事例 / 地域で比較できるようにする

---

## 19. デザインシステム技術設計

### 19-1. トークン設計

`colors` / `spacing` / `radius` / `shadow` / `fontSize` / `lineHeight` / `containerWidth` / `zIndex` / `transition`

### 19-2. カラートークン方針

- 背景 / 本文 / 補助本文 / ボーダー / CTA / アクセント / 注意 / 成功 を分離する

### 19-3. 余白トークン

`section-lg` / `section-md` / `section-sm` / `stack-lg` / `stack-md` / `stack-sm`

### 19-4. コンポーネント命名

- PascalCase / 意味ベース命名 / ページ固有名より役割名優先

---

## 20. 運用拡張設計

### 20-1. 将来拡張しやすくする対象

- 地域ページ追加 / 事例追加 / FAQ追加
- コラム追加 / サービス追加 / お客様の声追加 / 法人向け導線追加

### 20-2. CMS化余地

- data構造をCMS移行しやすいスキーマで設計
- slug管理 / 公開フラグ / 並び順 / カテゴリ / 画像参照 / SEO項目を分けて保持

### 20-3. 管理画面不要でも回る初期設計

- ファイルベース更新
- セクション単位で差し替えやすい
- 内容修正が1箇所で済むよう共通データ化

---

## 21. エラー設計

### 21-1. 404ページ

- わかりやすい案内 / 主要ページ導線 / 問い合わせ導線

### 21-2. フォームエラー

- 入力内容を保持
- 何を直すべきか明示

### 21-3. シミュレーションエラー

- 簡易メッセージ
- 問い合わせ導線へ誘導

---

## 22. 法務表示技術設計

### 22-1. 共通注記コンポーネント

- 役割分担や見積主体を複数ページで使うため `NoticeBox` 化する

### 22-2. 配置対象

- トップ / 料金 / 流れ / FAQ / お問い合わせ / 運営者情報 / 必要表記

### 22-3. 文言管理

- `data/legal.ts` に保持し共通参照可能にする

---

## 23. Antigravity実装指示

### 23-1. 実装優先順位

1. レイアウト基盤
2. 共通コンポーネント
3. トップページ
4. サービスページ
5. 料金
6. シミュレーション
7. 事例一覧と詳細
8. エリア
9. FAQ
10. お問い合わせ
11. 法務ページ

### 23-2. 実装上の禁止事項

- ページごとの場当たり的なCSS追加
- 重いアニメーション
- 画像サイズ未指定
- 法務文言の欠落
- 主体誤認表現
- 不必要なクライアントコンポーネント化

### 23-3. 実装上の必須事項

- 画像ホルダー全配置
- SP最適化
- CTA固定
- 構造化データ
- 計測ポイント埋め込み
- 事例と地域ページの量産構造化

---

## 24. 技術設計の最終方針

本サイトは、競合のような単純な料金表サイトではなく、モダンなUI、料金シミュレーション、事例主導の信頼設計、供養導線、地域拡張性を備えた終活連携型の遺品整理サイトとして実装する。  
技術面では、静的生成を中心に高速性とSEOを担保しつつ、将来の事例追加、地域ページ追加、CMS化に耐えられる構造で組み立てる。  
Antigravity実装時は、本書を基準として、コンポーネント再利用、データ駆動、軽量実装、主体誤認防止、更新性確保を徹底すること。
