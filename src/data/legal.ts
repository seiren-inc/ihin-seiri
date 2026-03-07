export const legalNotices = {
  consultationRole: '清蓮は遺品整理のお見積り・ご相談窓口です。',
  contractEntity: 'お見積書の発行およびご契約は、提携専門業者名義となります。',
  workExecution: 'お見積もりや実作業は、弊社提携の専門業者が責任をもって対応いたします。',
  simulationDisclaimer: '料金シミュレーションの結果はあくまで参考価格です。詳細な状況により変動する場合がございます。正式なお見積りは現地確認後にご提示いたします。',
};

export function getCombinedLegalNotice(): string[] {
  return [
    legalNotices.consultationRole,
    legalNotices.contractEntity,
    legalNotices.workExecution
  ];
}
