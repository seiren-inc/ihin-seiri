# 清蓮｜遺品整理サービス データベース・データ構造設計書

**文書名**：清蓮｜遺品整理サービス データベース・データ構造設計書  
**対象サイト**：清蓮｜遺品整理サービス

---

## 1. 文書概要

**目的**  
本書は、清蓮｜遺品整理サービス Webサイトに必要なデータ構造、管理対象、テーブル設計、リレーション、運用ルールを定義することを目的とする。

本サイトは初期段階では静的運用または簡易CMS運用でも成立するが、将来的には以下の拡張を前提とする。

- 問い合わせ管理 / 施工事例管理 / FAQ管理 / 地域ページ管理
- AI診断結果管理 / パートナー業者管理 / 成約管理 / 紹介料管理

**設計方針**

- 初期運用に耐えるシンプルさ
- 将来のSupabase等への移行容易性
- 終活プラットフォームへの拡張性

---

## 2. 設計方針

### 2-1. 基本方針

- 正規化しすぎず運用しやすさを優先する
- 一覧系と詳細系を分離できる構造にする
- 公開用データと管理用データを分ける
- スラッグ管理を前提にする
- 公開フラグを持たせる
- SEO項目を各主要データで持てる構造にする
- 将来的な複数業者対応を考慮する

### 2-2. データ分類

- 公開コンテンツデータ
- 問い合わせ・業務データ
- 営業・収益データ
- 管理者・権限データ
- AI診断データ

---

## 3. データベース全体構成

**主要エンティティ**

| カテゴリ   | テーブル                                                                                                        |
| ---------- | --------------------------------------------------------------------------------------------------------------- |
| コンテンツ | `services` / `pages` / `pricing_rules` / `cases` / `case_images` / `faqs` / `areas` / `local_pages` / `reviews` |
| 問い合わせ | `contacts` / `contact_notes` / `lead_status_logs`                                                               |
| パートナー | `partners` / `partner_service_areas` / `partner_quotes`                                                         |
| 契約・収益 | `contracts` / `referral_fees`                                                                                   |
| AI         | `ai_diagnosis_logs`                                                                                             |
| 管理       | `admins` / `admin_activity_logs` / `site_settings`                                                              |

---

## 4. テーブル一覧と目的

| テーブル                | 目的                                                 |
| ----------------------- | ---------------------------------------------------- |
| `services`              | サービスページ情報の管理                             |
| `pages`                 | 固定ページ本文やSEO情報の管理                        |
| `pricing_rules`         | 料金シミュレーションおよび料金目安表示用のルール管理 |
| `cases`                 | 施工事例の一覧・詳細管理                             |
| `case_images`           | 施工事例画像の複数管理                               |
| `faqs`                  | FAQ管理                                              |
| `areas`                 | 都県単位または大分類エリア管理                       |
| `local_pages`           | 地域別SEOページ管理                                  |
| `contacts`              | 問い合わせ情報管理                                   |
| `contact_notes`         | 問い合わせごとの社内対応メモ管理                     |
| `lead_status_logs`      | 問い合わせの営業進行履歴管理                         |
| `partners`              | 提携業者管理                                         |
| `partner_service_areas` | 提携業者の対応エリア管理                             |
| `partner_quotes`        | 見積依頼・見積提出管理                               |
| `contracts`             | 成約管理                                             |
| `referral_fees`         | 紹介料管理                                           |
| `ai_diagnosis_logs`     | AI診断利用ログ管理                                   |
| `reviews`               | お客様の声、レビュー管理                             |
| `admins`                | 管理者アカウント管理                                 |
| `admin_activity_logs`   | 管理画面操作履歴                                     |
| `site_settings`         | 共通設定値の管理                                     |

---

## 5. テーブル詳細設計

### 5-1. services

**用途**：サービス詳細ページ表示 / サービス一覧表示 / 関連リンク生成

| カラム              | 型        | 備考                                |
| ------------------- | --------- | ----------------------------------- |
| `id`                | uuid      | 主キー                              |
| `slug`              | text      | 一意（例：`estate-clearing`）       |
| `name`              | text      | 例：遺品整理                        |
| `short_description` | text      |                                     |
| `long_description`  | text      |                                     |
| `hero_title`        | text      |                                     |
| `hero_description`  | text      |                                     |
| `service_category`  | text      | 例：`main` / `support` / `memorial` |
| `display_order`     | integer   |                                     |
| `is_published`      | boolean   |                                     |
| `seo_title`         | text      |                                     |
| `seo_description`   | text      |                                     |
| `og_image_url`      | text      |                                     |
| `created_at`        | timestamp |                                     |
| `updated_at`        | timestamp |                                     |

### 5-2. pages

**用途**：固定ページ本文とSEO管理

| カラム            | 型        | 備考                                   |
| ----------------- | --------- | -------------------------------------- |
| `id`              | uuid      |                                        |
| `page_key`        | text      | 一意（例：`top` / `pricing` / `flow`） |
| `title`           | text      |                                        |
| `lead_text`       | text      |                                        |
| `body_json`       | jsonb     | セクション構造を保持可能               |
| `seo_title`       | text      |                                        |
| `seo_description` | text      |                                        |
| `og_image_url`    | text      |                                        |
| `is_published`    | boolean   |                                        |
| `updated_at`      | timestamp |                                        |

### 5-3. pricing_rules

**用途**：料金目安表示 / 料金シミュレーション算出

| カラム                          | 型        | 備考                                          |
| ------------------------------- | --------- | --------------------------------------------- |
| `id`                            | uuid      |                                               |
| `service_type`                  | text      | 例：`estate-clearing`                         |
| `room_type`                     | text      | 例：`1k` / `1ldk` / `2ldk` / `3ldk` / `house` |
| `building_type`                 | text      | 例：`apartment` / `house` / `other`           |
| `base_min_price`                | integer   |                                               |
| `base_max_price`                | integer   |                                               |
| `volume_level`                  | text      | 例：`small` / `medium` / `large`              |
| `floor_modifier`                | integer   |                                               |
| `no_elevator_modifier`          | integer   |                                               |
| `special_cleaning_modifier_min` | integer   |                                               |
| `special_cleaning_modifier_max` | integer   |                                               |
| `notes`                         | text      |                                               |
| `is_active`                     | boolean   |                                               |
| `updated_at`                    | timestamp |                                               |

### 5-4. cases

**用途**：施工事例一覧 / 施工事例詳細 / 地域SEO連携

| カラム                 | 型        | 備考                             |
| ---------------------- | --------- | -------------------------------- |
| `id`                   | uuid      |                                  |
| `slug`                 | text      | 一意                             |
| `title`                | text      |                                  |
| `service_type`         | text      |                                  |
| `area_id`              | uuid      | `areas.id` 参照                  |
| `local_page_id`        | uuid      | nullable / `local_pages.id` 参照 |
| `room_type`            | text      |                                  |
| `building_type`        | text      |                                  |
| `price_min`            | integer   |                                  |
| `price_max`            | integer   |                                  |
| `work_time_minutes`    | integer   |                                  |
| `worker_count`         | integer   |                                  |
| `summary`              | text      |                                  |
| `problem_description`  | text      |                                  |
| `solution_description` | text      |                                  |
| `detail_body`          | text      |                                  |
| `has_special_cleaning` | boolean   |                                  |
| `has_memorial_support` | boolean   |                                  |
| `is_featured`          | boolean   |                                  |
| `is_published`         | boolean   |                                  |
| `seo_title`            | text      |                                  |
| `seo_description`      | text      |                                  |
| `published_at`         | timestamp |                                  |
| `created_at`           | timestamp |                                  |
| `updated_at`           | timestamp |                                  |

### 5-5. case_images

**用途**：事例画像管理

| カラム          | 型        | 備考                                       |
| --------------- | --------- | ------------------------------------------ |
| `id`            | uuid      |                                            |
| `case_id`       | uuid      | `cases.id` 参照                            |
| `image_type`    | text      | 例：`main` / `before` / `after` / `detail` |
| `image_url`     | text      |                                            |
| `alt_text`      | text      |                                            |
| `display_order` | integer   |                                            |
| `created_at`    | timestamp |                                            |

### 5-6. faqs

**用途**：FAQページ / サービスページ流用 / 構造化データ出力

| カラム                 | 型        | 備考                                                                      |
| ---------------------- | --------- | ------------------------------------------------------------------------- |
| `id`                   | uuid      |                                                                           |
| `category`             | text      | 例：`pricing` / `estimate` / `service` / `contract` / `memorial` / `area` |
| `question`             | text      |                                                                           |
| `answer`               | text      |                                                                           |
| `related_service_type` | text      | nullable                                                                  |
| `related_area_id`      | uuid      | nullable                                                                  |
| `display_order`        | integer   |                                                                           |
| `is_published`         | boolean   |                                                                           |
| `created_at`           | timestamp |                                                                           |
| `updated_at`           | timestamp |                                                                           |

### 5-7. areas

**用途**：都県レベルの管理

| カラム          | 型        | 備考                   |
| --------------- | --------- | ---------------------- |
| `id`            | uuid      |                        |
| `slug`          | text      | 一意（例：`kanagawa`） |
| `name`          | text      | 例：神奈川県           |
| `region_group`  | text      | 例：`kanto`            |
| `description`   | text      |                        |
| `display_order` | integer   |                        |
| `is_active`     | boolean   |                        |
| `created_at`    | timestamp |                        |
| `updated_at`    | timestamp |                        |

### 5-8. local_pages

**用途**：地域別SEOページ管理

| カラム            | 型        | 備考                   |
| ----------------- | --------- | ---------------------- |
| `id`              | uuid      |                        |
| `area_id`         | uuid      | `areas.id` 参照        |
| `slug`            | text      | 一意（例：`yokohama`） |
| `city_name`       | text      |                        |
| `page_title`      | text      |                        |
| `lead_text`       | text      |                        |
| `body_text`       | text      |                        |
| `seo_title`       | text      |                        |
| `seo_description` | text      |                        |
| `og_image_url`    | text      |                        |
| `is_published`    | boolean   |                        |
| `display_order`   | integer   |                        |
| `created_at`      | timestamp |                        |
| `updated_at`      | timestamp |                        |

### 5-9. contacts

**用途**：問い合わせ管理の中核

| カラム                     | 型        | 備考                                                                                                                       |
| -------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------- |
| `id`                       | uuid      |                                                                                                                            |
| `inquiry_no`               | text      | 一意（例：`SI-20260307-0001`）                                                                                             |
| `channel`                  | text      | 例：`form` / `phone` / `line` / `referral`                                                                                 |
| `name`                     | text      |                                                                                                                            |
| `phone`                    | text      |                                                                                                                            |
| `email`                    | text      |                                                                                                                            |
| `prefecture`               | text      |                                                                                                                            |
| `city`                     | text      |                                                                                                                            |
| `address`                  | text      |                                                                                                                            |
| `service_type`             | text      |                                                                                                                            |
| `room_type`                | text      |                                                                                                                            |
| `volume_level`             | text      |                                                                                                                            |
| `needs_special_cleaning`   | boolean   |                                                                                                                            |
| `needs_memorial_support`   | boolean   |                                                                                                                            |
| `preferred_contact_method` | text      |                                                                                                                            |
| `message`                  | text      |                                                                                                                            |
| `status`                   | text      | 例：`new` / `hearing` / `quote_requested` / `quoted` / `considering` / `won` / `lost` / `completed` / `referral_confirmed` |
| `assigned_partner_id`      | uuid      | nullable                                                                                                                   |
| `source`                   | text      | 例：`seo` / `ads` / `direct` / `referral` / `meo`                                                                          |
| `utm_source`               | text      |                                                                                                                            |
| `utm_medium`               | text      |                                                                                                                            |
| `utm_campaign`             | text      |                                                                                                                            |
| `first_response_at`        | timestamp |                                                                                                                            |
| `closed_at`                | timestamp |                                                                                                                            |
| `created_at`               | timestamp |                                                                                                                            |
| `updated_at`               | timestamp |                                                                                                                            |

### 5-10. contact_notes

| カラム                | 型        | 備考                                    |
| --------------------- | --------- | --------------------------------------- |
| `id`                  | uuid      |                                         |
| `contact_id`          | uuid      | `contacts.id` 参照                      |
| `note_type`           | text      | 例：`internal` / `customer` / `partner` |
| `note_body`           | text      |                                         |
| `created_by_admin_id` | uuid      | `admins.id` 参照                        |
| `created_at`          | timestamp |                                         |

### 5-11. lead_status_logs

| カラム                | 型        | 備考 |
| --------------------- | --------- | ---- |
| `id`                  | uuid      |      |
| `contact_id`          | uuid      |      |
| `from_status`         | text      |      |
| `to_status`           | text      |      |
| `changed_by_admin_id` | uuid      |      |
| `memo`                | text      |      |
| `created_at`          | timestamp |      |

### 5-12. partners

| カラム                 | 型        | 備考 |
| ---------------------- | --------- | ---- |
| `id`                   | uuid      |      |
| `company_name`         | text      |      |
| `display_name`         | text      |      |
| `contact_person`       | text      |      |
| `phone`                | text      |      |
| `email`                | text      |      |
| `address`              | text      |      |
| `can_estate_clearing`  | boolean   |      |
| `can_garbage_cleaning` | boolean   |      |
| `can_special_cleaning` | boolean   |      |
| `can_memorial_support` | boolean   |      |
| `license_notes`        | text      |      |
| `insurance_notes`      | text      |      |
| `is_active`            | boolean   |      |
| `contract_start_date`  | date      |      |
| `contract_end_date`    | date      |      |
| `created_at`           | timestamp |      |
| `updated_at`           | timestamp |      |

### 5-13. partner_service_areas

| カラム       | 型        | 備考               |
| ------------ | --------- | ------------------ |
| `id`         | uuid      |                    |
| `partner_id` | uuid      | `partners.id` 参照 |
| `area_id`    | uuid      | `areas.id` 参照    |
| `city_name`  | text      | nullable           |
| `is_primary` | boolean   |                    |
| `created_at` | timestamp |                    |

### 5-14. partner_quotes

| カラム               | 型        | 備考                                                                  |
| -------------------- | --------- | --------------------------------------------------------------------- |
| `id`                 | uuid      |                                                                       |
| `contact_id`         | uuid      |                                                                       |
| `partner_id`         | uuid      |                                                                       |
| `quote_requested_at` | timestamp |                                                                       |
| `site_visit_at`      | timestamp |                                                                       |
| `quote_submitted_at` | timestamp |                                                                       |
| `quote_min_amount`   | integer   |                                                                       |
| `quote_max_amount`   | integer   |                                                                       |
| `quote_file_url`     | text      |                                                                       |
| `quote_status`       | text      | 例：`requested` / `scheduled` / `submitted` / `expired` / `cancelled` |
| `remarks`            | text      |                                                                       |
| `created_at`         | timestamp |                                                                       |
| `updated_at`         | timestamp |                                                                       |

### 5-15. contracts

| カラム            | 型        | 備考                                     |
| ----------------- | --------- | ---------------------------------------- |
| `id`              | uuid      |                                          |
| `contact_id`      | uuid      |                                          |
| `partner_id`      | uuid      |                                          |
| `contract_date`   | date      |                                          |
| `contract_amount` | integer   |                                          |
| `service_date`    | date      |                                          |
| `contract_status` | text      | 例：`active` / `completed` / `cancelled` |
| `created_at`      | timestamp |                                          |
| `updated_at`      | timestamp |                                          |

### 5-16. referral_fees

| カラム                   | 型        | 備考                                               |
| ------------------------ | --------- | -------------------------------------------------- |
| `id`                     | uuid      |                                                    |
| `contract_id`            | uuid      |                                                    |
| `fee_type`               | text      | 例：`percentage` / `fixed`                         |
| `fee_rate`               | numeric   | nullable                                           |
| `fee_amount`             | integer   |                                                    |
| `calculated_base_amount` | integer   |                                                    |
| `confirmed_at`           | timestamp |                                                    |
| `paid_at`                | timestamp |                                                    |
| `payment_status`         | text      | 例：`pending` / `confirmed` / `paid` / `cancelled` |
| `remarks`                | text      |                                                    |
| `created_at`             | timestamp |                                                    |
| `updated_at`             | timestamp |                                                    |

### 5-17. ai_diagnosis_logs

| カラム                   | 型        | 備考                                                          |
| ------------------------ | --------- | ------------------------------------------------------------- |
| `id`                     | uuid      |                                                               |
| `session_id`             | text      |                                                               |
| `diagnosis_type`         | text      | 例：`pricing` / `volume` / `garbage-level` / `memorial-guide` |
| `prefecture`             | text      |                                                               |
| `building_type`          | text      |                                                               |
| `room_type`              | text      |                                                               |
| `volume_level`           | text      |                                                               |
| `floor_level`            | integer   |                                                               |
| `has_elevator`           | boolean   |                                                               |
| `needs_special_cleaning` | boolean   |                                                               |
| `needs_memorial_support` | boolean   |                                                               |
| `result_min_price`       | integer   |                                                               |
| `result_max_price`       | integer   |                                                               |
| `recommended_service`    | text      |                                                               |
| `converted_to_contact`   | boolean   |                                                               |
| `created_at`             | timestamp |                                                               |

### 5-18. reviews

| カラム          | 型        | 備考 |
| --------------- | --------- | ---- |
| `id`            | uuid      |      |
| `title`         | text      |      |
| `review_body`   | text      |      |
| `customer_area` | text      |      |
| `service_type`  | text      |      |
| `rating`        | integer   |      |
| `is_featured`   | boolean   |      |
| `is_published`  | boolean   |      |
| `created_at`    | timestamp |      |
| `updated_at`    | timestamp |      |

### 5-19. admins

| カラム          | 型        | 備考                                      |
| --------------- | --------- | ----------------------------------------- |
| `id`            | uuid      |                                           |
| `name`          | text      |                                           |
| `email`         | text      |                                           |
| `role`          | text      | 例：`super_admin` / `editor` / `operator` |
| `is_active`     | boolean   |                                           |
| `last_login_at` | timestamp |                                           |
| `created_at`    | timestamp |                                           |
| `updated_at`    | timestamp |                                           |

### 5-20. admin_activity_logs

| カラム         | 型        | 備考                                         |
| -------------- | --------- | -------------------------------------------- |
| `id`           | uuid      |                                              |
| `admin_id`     | uuid      |                                              |
| `action_type`  | text      | 例：`create` / `update` / `delete` / `login` |
| `target_table` | text      |                                              |
| `target_id`    | uuid      |                                              |
| `summary`      | text      |                                              |
| `created_at`   | timestamp |                                              |

### 5-21. site_settings

| カラム          | 型        | 備考 |
| --------------- | --------- | ---- |
| `id`            | uuid      |      |
| `setting_key`   | text      | 一意 |
| `setting_value` | jsonb     |      |
| `description`   | text      |      |
| `updated_at`    | timestamp |      |

---

## 6. リレーション設計

### 6-1. 基本リレーション

| 親          | 関係       | 子                                       |
| ----------- | ---------- | ---------------------------------------- |
| `areas`     | 1対多      | `local_pages`                            |
| `areas`     | 1対多      | `cases`                                  |
| `cases`     | 1対多      | `case_images`                            |
| `contacts`  | 1対多      | `contact_notes`                          |
| `contacts`  | 1対多      | `lead_status_logs`                       |
| `partners`  | 1対多      | `partner_quotes`                         |
| `contacts`  | 1対多      | `partner_quotes`                         |
| `contacts`  | 1対1/1対多 | `contracts`                              |
| `contracts` | 1対1       | `referral_fees`                          |
| `partners`  | 多対多     | `areas`（中間：`partner_service_areas`） |

### 6-2. 将来拡張リレーション

- `partners` 1対多 `reviews`
- `contacts` 1対多 `ai_diagnosis_logs`
- `local_pages` 1対多 `reviews`
- `services` 1対多 `faqs`

---

## 7. 主キー・一意制約

- すべての主キーはuuid
- 人が見る管理番号は別カラムで持つ
- `slug` は公開URL用に一意制約を持つ
- `inquiry_no` は業務管理用に一意制約を持つ
- `setting_key` は一意制約を持つ

---

## 8. インデックス設計

### 8-1. 主要インデックス

```
cases.slug / cases.area_id / cases.service_type / cases.is_published
faqs.category
local_pages.slug
contacts.status / contacts.created_at / contacts.source
partner_quotes.contact_id
contracts.contact_id
referral_fees.payment_status
ai_diagnosis_logs.diagnosis_type / ai_diagnosis_logs.created_at
```

### 8-2. 検索最適化対象

問い合わせ一覧 / 事例一覧 / 地域ページ生成 / FAQカテゴリ表示 / 紹介料未払一覧

---

## 9. 公開データと管理データの分離

| 区分       | テーブル                                                                                                                                      |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 公開対象   | `services` / `pages` / `pricing_rules`の一部 / `cases`公開分 / `case_images`公開分 / `faqs`公開分 / `areas` / `local_pages` / `reviews`公開分 |
| 非公開対象 | `contacts` / `contact_notes` / `lead_status_logs` / `partner_quotes` / `contracts` / `referral_fees` / `admins` / `admin_activity_logs`       |

---

## 10. ステータス定義

### 10-1. 問い合わせ status

| 値                   | 意味           |
| -------------------- | -------------- |
| `new`                | 新規問い合わせ |
| `hearing`            | ヒアリング中   |
| `quote_requested`    | 見積依頼済     |
| `quoted`             | 見積提出済     |
| `considering`        | 検討中         |
| `won`                | 成約           |
| `lost`               | 失注           |
| `completed`          | 作業完了       |
| `referral_confirmed` | 紹介料確定     |

### 10-2. 見積 quote_status

| 値          | 意味         |
| ----------- | ------------ |
| `requested` | 依頼済       |
| `scheduled` | 現地見積予定 |
| `submitted` | 提出済       |
| `expired`   | 期限切れ     |
| `cancelled` | キャンセル   |

### 10-3. 契約 contract_status

| 値          | 意味       |
| ----------- | ---------- |
| `active`    | 契約中     |
| `completed` | 完了       |
| `cancelled` | キャンセル |

### 10-4. 紹介料 payment_status

| 値          | 意味   |
| ----------- | ------ |
| `pending`   | 未確定 |
| `confirmed` | 確定   |
| `paid`      | 支払済 |
| `cancelled` | 無効   |

---

## 11. AI診断データ活用設計

### 11-1. 保存目的

- どの診断が多く使われるか分析
- どの条件で問い合わせにつながるか分析
- 地域別ニーズ分析
- 将来の見積精度向上

### 11-2. 個人情報方針

- AI診断ログは原則匿名
- 問い合わせ送信時のみ `contacts` に紐づけ可能
- 診断ログ単体では個人特定しない

---

## 12. CMS・管理画面連携想定

### 12-1. 管理画面で更新する主対象

施工事例 / FAQ / 地域ページ / レビュー / 料金目安 / 提携業者 / 問い合わせ対応 / 紹介料ステータス

### 12-2. 管理画面で閲覧する主対象

問い合わせ一覧 / 見積依頼状況 / 成約一覧 / 紹介料一覧 / AI診断利用状況

---

## 13. Supabase移行前提の実装方針

### 13-1. 初期フェーズ

- JSONまたはMD相当のファイルベース運用でも可
- ただしスキーマは本設計書に寄せる
- slug、id、公開フラグの持ち方を統一する

### 13-2. DB移行フェーズ

1. public向けデータから順に移行
2. 次に問い合わせ管理
3. 最後に収益管理とパートナー管理を移行

---

## 14. セキュリティ・権限設計

### 14-1. 管理権限

| 権限          | 範囲                                     |
| ------------- | ---------------------------------------- |
| `super_admin` | 全権限                                   |
| `editor`      | 公開コンテンツ編集のみ                   |
| `operator`    | 問い合わせ閲覧、メモ追加、ステータス変更 |

### 14-2. 制御対象

`contacts` / `referral_fees` / `contracts` / `partners` / `admins` / `admin_activity_logs`

---

## 15. バックアップ・監査設計

### 15-1. バックアップ対象

問い合わせ / 契約 / 紹介料 / 施工事例 / 地域ページ / FAQ / パートナー情報

### 15-2. 監査対象

`admin_activity_logs` / `lead_status_logs` / `referral_fees` 更新履歴 / `contracts` 更新履歴

---

## 16. 代表的な利用シナリオ

### 16-1. 問い合わせから成約まで

```
contacts 登録 → contact_notes 追加 → lead_status_logs で hearing
→ partner_quotes 作成 → partner_quotes submitted
→ contracts 作成 → referral_fees 作成
→ contacts status を won または completed に更新
```

### 16-2. 施工事例公開

```
cases 作成 → case_images 登録 → seo_title / seo_description 設定
→ is_published true → 一覧・詳細に反映
```

### 16-3. 地域ページ追加

```
areas 確認 → local_pages 作成 → 地域に紐づく cases を表示 → FAQとCTAを接続
```

---

## 17. 初期実装優先順位

| 優先度 | テーブル                                                                                                             |
| ------ | -------------------------------------------------------------------------------------------------------------------- |
| A      | `services` / `pages` / `pricing_rules` / `cases` / `case_images` / `faqs` / `areas` / `local_pages` / `contacts`     |
| B      | `contact_notes` / `lead_status_logs` / `partners` / `partner_quotes`                                                 |
| C      | `contracts` / `referral_fees` / `ai_diagnosis_logs` / `reviews` / `admins` / `admin_activity_logs` / `site_settings` |

---

## 18. 最終方針

本サイトのデータ構造は、単なるWebサイト運用ではなく、問い合わせ獲得から見積、成約、紹介料管理、将来の複数業者展開までを見据えた事業基盤として設計する。

初期は軽量に始めつつ、将来の終活プラットフォーム化に耐えられる構造を維持することを最優先方針とする。
