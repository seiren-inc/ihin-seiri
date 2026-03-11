interface StatItem {
  value: string;
  label: string;
  suffix?: string;
}

const stats: StatItem[] = [
  { value: '1,200', label: 'これまでの対応実績', suffix: '件以上' },
  { value: '7', label: '関東対応エリア', suffix: '都県' },
  { value: '98', label: 'お客様満足度', suffix: '%' },
  { value: '24', label: '年中無休・ご相談受付', suffix: '時間' },
];

export function StatsBanner() {
  return (
    <div className="stats-banner" aria-label="清蓮の実績数値">
      <div className="container">
        <ul className="stats-list">
          {stats.map((stat, i) => (
            <li key={i} className="stat-item">
              <span className="stat-value">
                {stat.value}
                <span className="stat-suffix">{stat.suffix}</span>
              </span>
              <span className="stat-label">{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
