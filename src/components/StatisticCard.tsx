import './StatisticCard.css'

interface StatisticCardProps {
  label: string
  value: string | number
  hint?: string
  tone?: 'green' | 'yellow' | 'red' | 'gray'
}

export function StatisticCard({ label, value, hint, tone = 'green' }: StatisticCardProps) {
  return (
    <div className={`statistic-card statistic-card--${tone}`}>
      <span className="statistic-card__label">{label}</span>
      <strong className="statistic-card__value">{value}</strong>
      {hint && <span className="statistic-card__hint">{hint}</span>}
    </div>
  )
}
