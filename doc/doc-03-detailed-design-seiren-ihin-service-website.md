# 清蓮｜遺品整理サービス Webサイト 詳細設計書

**文書名**：清蓮｜遺品整理サービス Webサイト 詳細設計書  
**対象サイト**：清蓮｜遺品整理サービス

---

## 1. 文書概要

**目的**  
本書は要件定義書および基本設計書を基に、Antigravity実装に必要な画面単位、要素単位、導線単位、機能単位の詳細仕様を定義することを目的とする。  
本書により、実装担当が迷わずUI構築、コンテンツ配置、状態設計、文言反映、導線接続を行える状態をつくる。

**前提**

- 清蓮は相談窓口、株式会社ベルコールは見積・契約・実作業主体である
- サイト上では清蓮ブランドを前面に出しつつ、役割分担と契約主体を誤認なく表示する
- サイトは関東エリアを対象とし、遺品整理、ゴミ清掃、特殊清掃、供養連携を軸に構成する

---

## 2. 詳細設計の基本原則

### 2-1. 情報設計原則

- ユーザーの不安を先回りして解消する
- 料金、流れ、事例、主体を明確にする
- 高齢者にも読みやすい構造とする
- 説明量が多くても圧迫感のない整理を行う
- 全ページに相談導線を持たせる
- すべての主要ページに画像ホルダーを配置する

### 2-2. UI原則

- ボタンは明確、十分な大きさ、強い視認性を持つ
- 1セクション1メッセージを徹底する
- 表はスマホではカードまたは縦並びに再構成する
- 色ではなくラベルと余白で情報階層を作る
- CTAは押し売りでなく自然に行動を促す
- センシティブな内容でも過度に暗くしない

### 2-3. 文言原則

- 煽らない
- 誤認させない
- 専門用語だけに寄せない
- やさしい言葉で説明する
- 見積主体、契約主体、実作業主体を分けて書く
- 料金シミュレーションは参考価格であることを明記する

---

## 3. サイト共通仕様

### 3-1. ブレークポイント

| デバイス | 基準幅              |
| -------- | ------------------- |
| SP       | 360px以上を基本想定 |
| TB       | 768px以上           |
| PC       | 1200px以上を基準    |

### 3-2. 共通レイアウト構造

- 固定ヘッダー
- メインコンテンツ
- セクション単位の余白
- 固定CTA
- フッター

### 3-3. 共通横幅

| 用途                   | 幅                                            |
| ---------------------- | --------------------------------------------- |
| PC本文最大幅           | 1120px前後                                    |
| コンテンツ狭幅ブロック | 760px前後                                     |
| フル幅使用箇所         | ヒーロー、CTA、背景セクション、画像セクション |

### 3-4. 共通余白

- セクション上下余白：PCでは広め、SPでは詰めすぎない
- 見出し下余白：本文の可読性を保つ値に固定
- カード内余白：狭すぎず、情報量に応じて統一

### 3-5. 共通タイポグラフィ設計

- 見出しは視認性重視
- 本文はやや大きめ
- 注意書きは読める範囲で最小限
- 数字、料金、時間、エリア名は視認性優先
- 長文は一行幅を広げすぎない

---

## 4. 共通コンポーネント詳細設計

### 4-1. ヘッダー

**構成要素**：ロゴ / 主要ナビ / 電話導線 / 無料相談ボタン / LINE相談ボタン / SP用メニューボタン

| 仕様       | 内容                                                                       |
| ---------- | -------------------------------------------------------------------------- |
| PC         | 左にロゴ、中央〜右にナビ、右端にCTA群                                      |
| SP         | 左にロゴ、右にメニューアイコン、下部固定CTAを優先しヘッダー内CTAは簡潔に   |
| スクロール | 一定スクロールで背景付与、可読性維持、縮小ヘッダー化は可、極端な変形は禁止 |

### 4-2. フッター

**構成要素**：ロゴ / サービス一覧 / 対応エリア / 事例 / FAQ / 供養連携 / 問い合わせ / 法務系リンク / 簡潔な説明文

- 複数カラム
- SPではアコーディオンまたは縦積み
- 法務リンクは末尾固定
- 連絡先は清蓮窓口のみ表示

### 4-3. 固定CTA

**SP表示固定**：電話 / LINE相談 / 無料相談 / 料金シミュレーション

- 全主要ページで表示
- フォーム送信完了ページでは非表示でも可
- スクロール時も邪魔すぎない高さに制御

### 4-4. パンくず

- トップ > 下層ページ > 詳細ページ
- 全下層ページに表示
- 構造化データ前提の設計
- SPでも省略しすぎない

### 4-5. ページタイトルエリア

- ページ名 / 補足コピー / 必要に応じて背景ビジュアル
- ヒーローよりは簡潔
- 全下層ページに統一様式で表示

### 4-6. セクション見出し

- 上部ラベル / 主見出し / 補足説明 / 必要ならアイコン
- 見出しだけで意味が伝わること

### 4-7. CTAブロック

- 見出し / 補足文 / 主CTA / 副CTA / 安心文言
- 背景色または背景画像可

### 4-8. 事例カード

- サムネイル / タイトル / エリア / サービス種別 / 間取り / 料金帯 / 作業時間 / タグ / 詳細を見るボタン

### 4-9. 料金表コンポーネント

- 見出し行 / 料金列 / 補足列 / 注釈
- SPではカード化
- 参考価格である注意書きを必ず付与

### 4-10. FAQアコーディオン

- 質問 / 回答 / 関連リンク
- 開閉状態管理、初期は閉じる
- カテゴリ単位にまとめる

### 4-11. 比較表コンポーネント

- 比較対象名 / 特徴 / 向いているケース / 料金の考え方 / 相談可否
- SPでは横スクロールまたはカード比較

### 4-12. 画像ホルダー

- 全ページの指定位置に配置
- ホルダー名は用途が分かる文言にする
- 比率を指定してレイアウト崩れを防ぐ
- 画像未確定でもコンポーネントとして成立させる

---

## 5. ページ別詳細設計

### 5-1. トップページ

**目的**：全体理解、信頼形成、CV獲得

#### A. ヒーロー

| 要素   | 内容                                    |
| ------ | --------------------------------------- |
| コピー | 主コピー / 補足コピー                   |
| 表記   | 関東対応表示                            |
| CTA    | 無料相談 / 電話 / 料金シミュレーション  |
| 補足   | 役割分担の簡易説明                      |
| 画像   | `[Image Placeholder: Hero Main Visual]` |

**UI仕様**

- 見出しは2〜4行以内
- CTAは最大3つまで
- SPではCTAを縦積み
- 背景画像上に文字が埋もれないようオーバーレイ制御

#### B. 信頼訴求

- 相談窓口は清蓮 / 提携専門業者対応 / 見積無料 / 関東対応 / 供養まで相談可
- `[Image Placeholder: Trust Support Scene]`
- アイコン付き4〜6項目カード、SPでは2列または縦積み

#### C. サービス一覧

- 遺品整理 / ゴミ清掃 / 特殊清掃 / 供養連携
- `[Image Placeholder: Service Category Visual]`
- 4カード構成、各カードに概要・主な対応ケース・導線ボタン

#### D. 選ばれる理由

- 安心 / 透明性 / 供養理解 / 広域対応 / 事例 / 相談しやすさ
- `[Image Placeholder: Why Choose Us Visual]`
- 2列または3列カード、理由ごとに短文説明

#### E. 料金目安

- 間取り別料金レンジ / 注意書き / 料金詳細導線
- `[Image Placeholder: Pricing Guide Support Visual]`
- 横並び表、SPではカード化、参考価格文言必須

#### F. 料金シミュレーション導線

- 入力の一部サンプル / 診断メリット / シミュレーション導線
- `[Image Placeholder: Simulation Support Illustration]`
- 簡易入力のように見せるビジュアル、別ページ遷移型

#### G. 施工事例抜粋

- 事例カード2〜4件（間取り / 料金 / 時間 / エリア）
- `[Image Placeholder: Featured Case Before After 01]`
- `[Image Placeholder: Featured Case Before After 02]`
- カルーセルより一覧優先、SPは横スワイプ可

#### H. ご利用の流れ

- 問い合わせ → ヒアリング → 見積 → 契約 → 作業 → 完了 → 供養相談
- `[Image Placeholder: Flow Support Scene]`
- フローチャート、SPでは縦ステップ

#### I. 供養連携案内

- 遺品整理後の供養相談（仏壇 / 位牌 / 遺骨 / 粉骨 / 散骨）
- `[Image Placeholder: Memorial Support Visual]`
- 清蓮の独自価値として強調、専用ページ導線

#### J. 対応エリア

- 関東地図イメージ / 都県一覧 / 地域ページ導線
- `[Image Placeholder: Area Coverage Visual]`

#### K. FAQ抜粋

- 代表質問3〜5件 / FAQページ導線
- `[Image Placeholder: FAQ Support Image]`

#### L. 最終CTA

- 無料相談 / 電話 / LINE
- `[Image Placeholder: Final CTA Visual]`

---

### 5-2. サービス一覧ページ

#### A. ページKV

`[Image Placeholder: Service Index Hero]`

#### B. サービスカード一覧

- 遺品整理 / ゴミ清掃 / 特殊清掃 / 供養相談
- 各カード：画像 / 簡易説明 / 主なケース / 詳細導線

#### C. サービス比較

- 違いを可視化
- `[Image Placeholder: Comparison Support Visual]`
- 比較軸：対象物 / 対応状況 / 見積方法 / 向いている相談

#### D. 清蓮の役割説明

- 窓口・ヒアリング・供養連携 / ベルコールが実務 / 誤認防止文言

#### E. CTA

`[Image Placeholder: CTA Support Visual]`

---

### 5-3. 遺品整理ページ

#### A. KV

`[Image Placeholder: Estate Clearing Hero]`

#### B. サービス概要

- 何を行うか / どんな人向けか / 相談ケース例
- `[Image Placeholder: Estate Clearing Overview]`

#### C. よくある悩み

- 実家整理 / 遠方対応 / 仕分けの不安 / 仏壇や位牌の扱い / 貴重品探索

#### D. 作業内容

- 仕分け / 分別 / 搬出 / 探索 / 簡易清掃 / 供養相談
- `[Image Placeholder: Sorting Work Scene]`
- `[Image Placeholder: Valuable Search Scene]`

#### E. 料金の考え方

- 間取り / 荷物量 / 階数 / エレベーター / 特殊条件 / 注意書き

#### F. 事例

- `[Image Placeholder: Before After Estate Case 01]`
- `[Image Placeholder: Before After Estate Case 02]`

#### G. 流れ

`[Image Placeholder: Estate Flow Scene]`

#### H. FAQ

`[Image Placeholder: Estate FAQ Support Visual]`

#### I. CTA

`[Image Placeholder: Estate CTA Visual]`

---

### 5-4. ゴミ清掃ページ

#### A. KV

`[Image Placeholder: Garbage Cleaning Hero]`

#### B. サービス概要

- 大量残置物 / ゴミ屋敷 / 生活ごみ / 空き家残置物
- `[Image Placeholder: Garbage Cleaning Overview]`

#### C. 対応ケース

- 部屋全体 / 一部のみ / 引越し後 / 管理物件 / 近隣配慮

#### D. 作業内容

- 仕分け / 搬出 / 清掃 / 分別 / 必要に応じた消臭
- `[Image Placeholder: Cleaning Process Scene]`

#### E. 料金説明

- 物量重視 / 間取りだけで決まらない / 現地見積推奨

#### F. 事例

- `[Image Placeholder: Before After Garbage Case 01]`
- `[Image Placeholder: Before After Garbage Case 02]`

#### G. FAQ

`[Image Placeholder: Garbage FAQ Visual]`

#### H. CTA

`[Image Placeholder: Garbage CTA Visual]`

---

### 5-5. 特殊清掃ページ

#### A. KV

`[Image Placeholder: Special Cleaning Hero]`

#### B. 概要

- 特殊清掃の定義 / 秘密保持 / センシティブ対応
- `[Image Placeholder: Special Cleaning Overview]`

#### C. 対応内容

- 除菌 / 消臭 / 汚損除去 / 必要に応じた原状回復相談
- `[Image Placeholder: Professional Equipment Scene]`
- `[Image Placeholder: Deodorization Scene]`

#### D. 安全配慮

- 衛生管理 / 近隣配慮 / 迅速対応
- `[Image Placeholder: Hygiene Safety Visual]`

#### E. 料金説明

- 現地確認前提 / 範囲による変動 / 追加項目例

#### F. 事例

- `[Image Placeholder: Before After Special Case 01]`
- `[Image Placeholder: Before After Special Case 02]`

#### G. 流れ

`[Image Placeholder: Special Cleaning Flow Visual]`

#### H. CTA

`[Image Placeholder: Special Cleaning CTA Visual]`

---

### 5-6. 料金案内ページ

#### A. KV

`[Image Placeholder: Pricing Hero]`

#### B. 料金方針

- 参考価格 / 現地見積で確定 / ベルコール名義見積
- `[Image Placeholder: Pricing Guide Visual]`

#### C. 間取り別料金表

- 1K / 1LDK / 2LDK / 3LDK / 戸建て（各レンジを表示）

#### D. 料金に含まれるもの

- 仕分け / 搬出 / 簡易清掃 / 探索 / 基本対応
- `[Image Placeholder: Included Services Visual]`

#### E. 追加費用が発生する場合

- 階段 / 重量物 / 遠方 / 特殊条件 / 特殊清掃
- `[Image Placeholder: Additional Cost Factors Visual]`

#### F. 見積の流れ

- 問い合わせ → ヒアリング → 現地確認 → 見積提出
- `[Image Placeholder: Estimate Flow Visual]`

#### G. シミュレーション導線

`[Image Placeholder: Pricing CTA Visual]`

---

### 5-7. 料金シミュレーションページ

#### A. KV

`[Image Placeholder: Simulation Hero]`

#### B. 説明ブロック

- 何が分かるか / 参考価格であること
- `[Image Placeholder: Simulation Support Visual]`

#### C. 入力フォーム

**入力項目**：エリア / 建物種別 / 間取り / 荷物量 / 階数 / エレベーター有無 / サービス種別 / 特殊清掃有無 / 供養相談有無

**UI仕様**

- ステップ式または1画面完結式
- SPでは縦並び
- 選択はプルダウンよりボタン選択優先

#### D. 結果表示

- 概算レンジ / 料金に影響する要素 / 見積案内 / 次の行動
- `[Image Placeholder: Simulation Result Support Visual]`

#### E. 注意事項

- 確定料金ではない / 詳細は現地確認後
- `[Image Placeholder: Estimate Notice Visual]`

#### F. CTA

`[Image Placeholder: Simulation CTA Visual]`

---

### 5-8. 施工事例一覧ページ

#### A. KV

`[Image Placeholder: Case Index Hero]`

#### B. 絞り込みエリア

- サービス / 間取り / エリア / 料金帯 / 特殊清掃 / 供養相談
- `[Image Placeholder: Case Filter Support Visual]`
- PCは横並びフィルタ、SPはモーダルまたは展開式

#### C. 事例一覧

- `[Image Placeholder: Case Card Image 01]`
- `[Image Placeholder: Case Card Image 02]`
- `[Image Placeholder: Case Card Image 03]`
- `[Image Placeholder: Case Card Image 04]`

#### D. CTA

`[Image Placeholder: Case CTA Visual]`

---

### 5-9. 施工事例詳細ページ

#### A. メインビジュアル

`[Image Placeholder: Case Detail Main Image]`

#### B. 事例概要

- タイトル / サービス種別 / エリア / 間取り / 料金帯 / 時間 / 人数 / タグ

#### C. ビフォーアフター

- `[Image Placeholder: Before Image]`
- `[Image Placeholder: After Image]`

#### D. 詳細説明

- 相談背景 / 作業内容 / 対応上のポイント / 供養相談有無 / 追加費用有無
- `[Image Placeholder: Work Detail Scene]`

#### E. 関連事例

- `[Image Placeholder: Related Case Image 01]`
- `[Image Placeholder: Related Case Image 02]`

#### F. CTA

`[Image Placeholder: Case Detail CTA Visual]`

---

### 5-10. 対応エリアページ

#### A. KV

`[Image Placeholder: Area Hero]`

#### B. 関東対応概要

- 都県一覧
- `[Image Placeholder: Kanto Area Map]`

#### C. 都県別ブロック

- 神奈川 / 東京 / 千葉 / 埼玉 / 茨城 / 栃木 / 群馬

#### D. 注意事項

- 対応可否は地域により調整 / 見積日時は要相談
- `[Image Placeholder: Area Coverage Support Visual]`

#### E. CTA

`[Image Placeholder: Area CTA Visual]`

---

### 5-11. 地域別ページ

#### A. KV

`[Image Placeholder: Local Area Hero]`

#### B. 地域向け説明

- 地域名を含む主文 / 対応サービス
- `[Image Placeholder: Local Support Scene]`

#### C. その地域で多い相談例

- 遺品整理 / ゴミ清掃 / 特殊清掃 / 供養相談

#### D. 料金の考え方

- 地域差は過度に強調しない / 現地見積前提

#### E. 地域事例

- `[Image Placeholder: Local Case Image 01]`
- `[Image Placeholder: Local Case Image 02]`

#### F. FAQ

`[Image Placeholder: Local FAQ Visual]`

#### G. CTA

`[Image Placeholder: Local CTA Visual]`

---

### 5-12. ご利用の流れページ

#### A. KV

`[Image Placeholder: Flow Hero]`

#### B. ステップ一覧

| #   | ステップ           | 画像                                        |
| --- | ------------------ | ------------------------------------------- |
| 1   | 問い合わせ         | `[Image Placeholder: Contact Step Visual]`  |
| 2   | ヒアリング         | `[Image Placeholder: Hearing Step Visual]`  |
| 3   | 見積調整           | `[Image Placeholder: Estimate Step Visual]` |
| 4   | 現地見積           | —                                           |
| 5   | 契約               | —                                           |
| 6   | 作業               | `[Image Placeholder: Work Step Visual]`     |
| 7   | 完了確認           | —                                           |
| 8   | 供養相談（必要時） | `[Image Placeholder: Memorial Step Visual]` |

#### C. 補足説明

- 誰が何を担当するか / 見積名義 / 契約主体 / 作業主体

#### D. CTA

`[Image Placeholder: Flow CTA Visual]`

---

### 5-13. 選ばれる理由ページ

#### A. KV

`[Image Placeholder: Reasons Hero]`

#### B. 理由一覧

- 清蓮が窓口 / 相談しやすい / 料金の透明性 / 事例が見える / 供養まで相談可 / 関東広域対応
- `[Image Placeholder: Trust Reason Visual]`
- `[Image Placeholder: Transparent Pricing Visual]`
- `[Image Placeholder: Memorial Coordination Visual]`
- `[Image Placeholder: Case Trust Visual]`

#### C. CTA

`[Image Placeholder: Reasons CTA Visual]`

---

### 5-14. 供養連携案内ページ

#### A. KV

`[Image Placeholder: Memorial Support Hero]`

#### B. 概要

- 遺品整理後に発生しやすい供養課題
- `[Image Placeholder: Memorial Overview Visual]`

#### C. 対応可能な供養相談

- 遺骨 / 仏壇 / 位牌 / 粉骨 / 散骨 / お墓じまい関連
- `[Image Placeholder: Ashes Support Visual]`
- `[Image Placeholder: Buddhist Items Support Visual]`
- `[Image Placeholder: Sea Scattering Support Visual]`

#### D. 関連サービス導線

- 清蓮既存事業との接続

#### E. CTA

`[Image Placeholder: Memorial CTA Visual]`

---

### 5-15. よくある質問ページ

#### A. KV

`[Image Placeholder: FAQ Hero]`

#### B. カテゴリ選択

- 料金 / 見積 / 作業 / エリア / 契約 / 供養
- `[Image Placeholder: FAQ Support Scene]`

#### C. FAQ一覧

- カテゴリ別アコーディオン / 関連ページリンク付き

#### D. CTA

`[Image Placeholder: FAQ CTA Visual]`

---

### 5-16. お問い合わせページ

#### A. KV

`[Image Placeholder: Contact Hero]`

#### B. 導入文

- 相談歓迎 / 現地見積案内 / 緊急相談可否
- `[Image Placeholder: Contact Support Visual]`

#### C. フォーム

**項目**：氏名 / 電話番号 / メールアドレス / エリア / 住所（任意） / 相談内容 / 希望サービス / 間取り / 荷物量 / 希望連絡方法 / 備考 / 同意

**入力補助**：必須任意ラベル / エラー文言 / 送信ボタン / 送信前確認説明

#### D. 電話とLINE案内

`[Image Placeholder: Line Support Visual]`

#### E. CTA補助

`[Image Placeholder: Contact CTA Visual]`

---

### 5-17. 運営者情報ページ

#### A. KV

`[Image Placeholder: Operator Info Hero]`

#### B. 清蓮情報

- 会社情報 / 窓口としての役割
- `[Image Placeholder: Operator Trust Visual]`

#### C. 共同運営説明

- 提携専門業者が見積・契約・作業を担当 / 顧客との契約主体の説明

#### D. CTA

`[Image Placeholder: Operator CTA Visual]`

---

### 5-18. プライバシーポリシー

- タイトル / 本文 / 問い合わせ先
- `[Image Placeholder: Privacy Policy Header Visual]`

### 5-19. 必要表記ページ

- タイトル / 本文 / 運営上必要な表示
- `[Image Placeholder: Legal Notice Header Visual]`

---

## 6. フォーム詳細設計

### 6-1. 入力項目仕様

| 項目           | 必須/任意 | 形式                 |
| -------------- | --------- | -------------------- |
| 氏名           | 必須      | テキスト             |
| 電話番号       | 必須      | 数字ハイフン許容     |
| メールアドレス | 必須      | 形式チェック         |
| エリア         | 必須      | 選択式               |
| 住所           | 任意      | 詳細入力             |
| 希望サービス   | 必須      | 複数選択可           |
| 間取り         | 任意/推奨 | 選択式               |
| 荷物量         | 任意/推奨 | 選択式               |
| 希望連絡方法   | —         | 電話 / メール / LINE |
| 相談内容       | 必須      | テキストエリア       |
| 添付           | 任意      | 将来拡張             |
| 同意チェック   | 必須      | チェックボックス     |

### 6-2. バリデーション

- リアルタイムまたは送信時
- エラーは項目近傍表示
- 色だけでなく文言で説明
- 未入力時は分かりやすく指示

### 6-3. 送信完了

- 完了メッセージ
- 次の案内
- 電話相談導線
- トップに戻る導線

---

## 7. 料金シミュレーション詳細ロジック設計

### 7-1. 入力カテゴリ

- エリア / 建物種別 / 間取り / 荷物量 / 階数 / EV有無 / 特殊清掃 / 供養相談 / 希望サービス

### 7-2. 出力設計

- 概算価格帯（例：8万円〜14万円程度）
- 補足表示：荷物量や特殊条件で変動 / 正式見積は現地確認後 / ベルコール名義で提出

### 7-3. UI反応

- 入力後に即時更新または結果ボタン
- ローディングは短く
- 不必要な演出禁止

---

## 8. 事例管理詳細設計

### 8-1. 一覧表示項目

- タイトル / サービス種別 / エリア / 間取り / 料金帯 / 作業時間 / タグ / サムネイル

### 8-2. 詳細表示項目

- 相談背景 / 作業概要 / 実施内容 / 時間 / 人数 / 料金 / ポイント / 供養相談有無 / ビフォーアフター

### 8-3. タグ設計

- 遺品整理 / ゴミ清掃 / 特殊清掃 / 供養相談
- 1K / 2LDK / 戸建て
- 横浜 / 東京
- 緊急対応 / 遠方相談

---

## 9. SEO詳細設計

### 9-1. ページ別title方針

| ページ         | title構成                      |
| -------------- | ------------------------------ |
| トップ         | サービス名 + 関東 + 無料相談   |
| 地域ページ     | 地域名 + 遺品整理 + サービス名 |
| サービスページ | サービス名 + 特徴 + 関東対応   |

### 9-2. meta description方針

- 料金 / 対応内容 / 相談のしやすさ / 供養連携 / エリアを簡潔に含める

### 9-3. 見出し設計

- h1は1つ
- h2はセクション主題
- h3は補足要素
- 見出しだけ読んでも内容が追える構造

### 9-4. 構造化データ

- BreadcrumbList
- FAQPage
- Service
- Article（コラム時に適用）

---

## 10. アクセシビリティ詳細設計

### 10-1. 必須要件

- 文字サイズが小さすぎない
- 色コントラスト確保
- ボタンサイズ確保
- 画像に代替情報
- フォームラベル明記
- エラー説明を文言で出す

### 10-2. 高齢者配慮

- 行間に余裕
- 漢字が多すぎる文を避ける
- 問い合わせ導線を複数用意
- 電話導線を明確化

---

## 11. パフォーマンス詳細設計

### 11-1. 画像最適化

- 遅延読み込み
- 必要サイズ出し分け
- ヒーロー画像は優先読み込み
- 不要な装飾画像を増やさない

### 11-2. スクリプト制御

- シミュレーション機能は軽量実装
- 不要なアニメーションライブラリ禁止
- 事例絞り込みは軽量構成

---

## 12. アニメーション詳細設計

### 12-1. 許可される演出

- フェードイン
- 軽いスライド
- ホバー反応
- アコーディオン開閉
- 数字カウントは必要最小限

### 12-2. 禁止演出

- 過剰なパララックス
- 長いローディング
- 激しい点滅
- 内容理解を阻害する動き

---

## 13. 法務文言配置設計

### 13-1. 必須配置箇所

- トップの補足文
- 料金ページ
- 流れページ
- FAQ
- お問い合わせページ
- 必要表記ページ

### 13-2. 必須内容

- 清蓮は相談窓口
- 見積書はベルコール名義
- 契約はベルコールと顧客
- 実作業は提携専門業者対応
- 料金シミュレーションは参考価格

---

## 14. 状態設計

### 14-1. フォーム状態

初期 → 入力中 → エラー → 送信中 → 完了

### 14-2. FAQ状態

閉じ ↔ 開き

### 14-3. シミュレーション状態

初期 → 入力済み → 計算中 → 結果表示 → 注意表示

### 14-4. 事例絞り込み状態

全件 → 条件適用 → 結果なし

> 結果なし時文言：「該当する事例が見つかりませんでした。条件を変更してご確認ください。」

---

## 15. エラーメッセージ設計

### 15-1. フォーム

- 氏名を入力してください
- 電話番号を正しく入力してください
- メールアドレスの形式をご確認ください
- ご希望のサービスを選択してください
- 個人情報の取り扱いに同意してください

### 15-2. シミュレーション

- 一部の条件が未入力です
- 条件に応じて概算価格が表示できませんでした
- お急ぎの場合は無料相談をご利用ください

---

## 16. 画像ホルダー一覧まとめ

### トップ

- `[Image Placeholder: Hero Main Visual]`
- `[Image Placeholder: Trust Support Scene]`
- `[Image Placeholder: Service Category Visual]`
- `[Image Placeholder: Pricing Guide Support Visual]`
- `[Image Placeholder: Simulation Support Illustration]`
- `[Image Placeholder: Featured Case Before After 01]`
- `[Image Placeholder: Featured Case Before After 02]`
- `[Image Placeholder: Flow Support Scene]`
- `[Image Placeholder: Memorial Support Visual]`
- `[Image Placeholder: Area Coverage Visual]`
- `[Image Placeholder: Final CTA Visual]`

### サービス一覧

- `[Image Placeholder: Service Index Hero]`
- `[Image Placeholder: Estate Clearing Service Card]`
- `[Image Placeholder: Garbage Cleaning Service Card]`
- `[Image Placeholder: Special Cleaning Service Card]`
- `[Image Placeholder: Memorial Support Service Card]`
- `[Image Placeholder: Comparison Support Visual]`
- `[Image Placeholder: CTA Support Visual]`

### 遺品整理

- `[Image Placeholder: Estate Clearing Hero]`
- `[Image Placeholder: Estate Clearing Overview]`
- `[Image Placeholder: Sorting Work Scene]`
- `[Image Placeholder: Valuable Search Scene]`
- `[Image Placeholder: Before After Estate Case 01]`
- `[Image Placeholder: Before After Estate Case 02]`
- `[Image Placeholder: Estate Flow Scene]`
- `[Image Placeholder: Estate FAQ Support Visual]`
- `[Image Placeholder: Estate CTA Visual]`

### ゴミ清掃

- `[Image Placeholder: Garbage Cleaning Hero]`
- `[Image Placeholder: Garbage Cleaning Overview]`
- `[Image Placeholder: Garbage Room Example]`
- `[Image Placeholder: Cleaning Process Scene]`
- `[Image Placeholder: Before After Garbage Case 01]`
- `[Image Placeholder: Before After Garbage Case 02]`
- `[Image Placeholder: Garbage Flow Support Visual]`
- `[Image Placeholder: Garbage FAQ Visual]`
- `[Image Placeholder: Garbage CTA Visual]`

### 特殊清掃

- `[Image Placeholder: Special Cleaning Hero]`
- `[Image Placeholder: Special Cleaning Overview]`
- `[Image Placeholder: Professional Equipment Scene]`
- `[Image Placeholder: Deodorization Scene]`
- `[Image Placeholder: Before After Special Case 01]`
- `[Image Placeholder: Before After Special Case 02]`
- `[Image Placeholder: Hygiene Safety Visual]`
- `[Image Placeholder: Special Cleaning Flow Visual]`
- `[Image Placeholder: Special Cleaning CTA Visual]`

### 料金

- `[Image Placeholder: Pricing Hero]`
- `[Image Placeholder: Pricing Guide Visual]`
- `[Image Placeholder: Included Services Visual]`
- `[Image Placeholder: Additional Cost Factors Visual]`
- `[Image Placeholder: Estimate Flow Visual]`
- `[Image Placeholder: Pricing CTA Visual]`

### シミュレーション

- `[Image Placeholder: Simulation Hero]`
- `[Image Placeholder: Simulation Support Visual]`
- `[Image Placeholder: Simulation Result Support Visual]`
- `[Image Placeholder: Estimate Notice Visual]`
- `[Image Placeholder: Simulation CTA Visual]`

### 事例一覧

- `[Image Placeholder: Case Index Hero]`
- `[Image Placeholder: Case Filter Support Visual]`
- `[Image Placeholder: Case Card Image 01]`
- `[Image Placeholder: Case Card Image 02]`
- `[Image Placeholder: Case Card Image 03]`
- `[Image Placeholder: Case Card Image 04]`
- `[Image Placeholder: Case CTA Visual]`

### 事例詳細

- `[Image Placeholder: Case Detail Main Image]`
- `[Image Placeholder: Before Image]`
- `[Image Placeholder: After Image]`
- `[Image Placeholder: Work Detail Scene]`
- `[Image Placeholder: Related Case Image 01]`
- `[Image Placeholder: Related Case Image 02]`
- `[Image Placeholder: Case Detail CTA Visual]`

### 対応エリア

- `[Image Placeholder: Area Hero]`
- `[Image Placeholder: Kanto Area Map]`
- `[Image Placeholder: Area Coverage Support Visual]`
- `[Image Placeholder: Area CTA Visual]`

### 地域別

- `[Image Placeholder: Local Area Hero]`
- `[Image Placeholder: Local Support Scene]`
- `[Image Placeholder: Local Case Image 01]`
- `[Image Placeholder: Local Case Image 02]`
- `[Image Placeholder: Local FAQ Visual]`
- `[Image Placeholder: Local CTA Visual]`

### 流れ

- `[Image Placeholder: Flow Hero]`
- `[Image Placeholder: Contact Step Visual]`
- `[Image Placeholder: Hearing Step Visual]`
- `[Image Placeholder: Estimate Step Visual]`
- `[Image Placeholder: Work Step Visual]`
- `[Image Placeholder: Memorial Step Visual]`
- `[Image Placeholder: Flow CTA Visual]`

### 選ばれる理由

- `[Image Placeholder: Reasons Hero]`
- `[Image Placeholder: Trust Reason Visual]`
- `[Image Placeholder: Transparent Pricing Visual]`
- `[Image Placeholder: Memorial Coordination Visual]`
- `[Image Placeholder: Case Trust Visual]`
- `[Image Placeholder: Reasons CTA Visual]`

### 供養連携

- `[Image Placeholder: Memorial Support Hero]`
- `[Image Placeholder: Memorial Overview Visual]`
- `[Image Placeholder: Ashes Support Visual]`
- `[Image Placeholder: Buddhist Items Support Visual]`
- `[Image Placeholder: Sea Scattering Support Visual]`
- `[Image Placeholder: Memorial CTA Visual]`

### FAQ

- `[Image Placeholder: FAQ Hero]`
- `[Image Placeholder: FAQ Support Scene]`
- `[Image Placeholder: FAQ CTA Visual]`

### お問い合わせ

- `[Image Placeholder: Contact Hero]`
- `[Image Placeholder: Contact Support Visual]`
- `[Image Placeholder: Line Support Visual]`
- `[Image Placeholder: Contact CTA Visual]`

### 運営者情報

- `[Image Placeholder: Operator Info Hero]`
- `[Image Placeholder: Operator Trust Visual]`
- `[Image Placeholder: Operator CTA Visual]`

### 法務ページ

- `[Image Placeholder: Privacy Policy Header Visual]`
- `[Image Placeholder: Legal Notice Header Visual]`

---

## 17. 実装指示まとめ

- 全ページに画像ホルダーを実装する
- コンポーネントの再利用性を高くする
- 事例、FAQ、地域ページは量産しやすい構造にする
- 固定CTAはSPで最適化する
- 主体の誤認を防ぐ文言を複数箇所に分散配置する
- 料金シミュレーションは軽量で分かりやすくする
- 古い片付け業者サイトに見えない上質なUIを徹底する

---

## 18. 詳細設計の最終方針

本サイトの詳細設計は、見た目の美しさだけでなく、問い合わせ率、安心感、説明責任、将来のSEO拡張、供養導線形成までを同時に満たすことを目的とする。  
Antigravity実装では、本書を基準として、すべてのページ、導線、機能、UI、画像ホルダー、法務文言の配置を忠実に反映し、競合より一段上のモダンで信頼性の高い遺品整理サービスサイトを構築する。
