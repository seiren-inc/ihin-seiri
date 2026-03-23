# UI/UX Global Rules Violation Report

- Project: ihin-seiri
- Generated: 2026-03-20T00:13:16.025Z
- Scope: UI files (48 files)
- Method: static analysis (regex-based heuristic)

## Critical

- なし

## High

- なし

## Medium

1. 行間不足の疑い
- 判定理由: line-height が詰まる指定を 14 件検出。可読性低下の可能性。
- 根拠:
- ihin-seiri/src/app/globals.css:52 `--line-height: 1.85;`
- ihin-seiri/src/app/globals.css:121 `line-height: 1.4;`
- ihin-seiri/src/styles/components/common.css:241 `line-height: 1.5;`
- ihin-seiri/src/styles/components/common.css:292 `line-height: 1.85;`
- ihin-seiri/src/styles/components/layout.css:29 `line-height: 1.2;`
- ihin-seiri/src/styles/pages/home.css:68 `line-height: 1.3;`
- ihin-seiri/src/styles/pages/home.css:79 `line-height: 1.9;`
- ihin-seiri/src/styles/pages/home.css:246 `line-height: 1.5;`

## Low

- なし

## Notes

- このレポートは静的解析ベースのため、最終判断は実機表示（1920/1440/1024/768/430/390/375）で確認すること。
- Fixed要素・重なり・改行崩れは、実際のDOM/表示幅で再検証すること。
