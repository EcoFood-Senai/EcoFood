import { StatisticCard } from '../components/StatisticCard'
import { useFoods } from '../context/FoodsContext'
import { CATEGORIES, LOCATIONS } from '../types/food'
import './Statistics.css'

interface BarProps {
  label: string
  count: number
  max: number
}

function Bar({ label, count, max }: BarProps) {
  return (
    <div className="stats-chart__row">
      <span>{label}</span>
      <div className="stats-chart__track">
        <div className="stats-chart__bar" style={{ width: `${(count / max) * 100}%` }} />
      </div>
      <strong>{count}</strong>
    </div>
  )
}

export function Statistics() {
  const { foods } = useFoods()

  const consumed = foods.filter((food) => food.state === 'consumido').length
  const discarded = foods.filter((food) => food.state === 'descartado').length
  const finished = consumed + discarded
  const useRate = finished === 0 ? 0 : Math.round((consumed / finished) * 100)

  const byCategory = CATEGORIES.map((label) => ({
    label,
    count: foods.filter((food) => food.category === label).length,
  }))
  const byLocation = LOCATIONS.map((label) => ({
    label,
    count: foods.filter((food) => food.location === label).length,
  }))
  const max = Math.max(1, ...byCategory.map((item) => item.count), ...byLocation.map((item) => item.count))

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Estatísticas</h1>
          <p>Veja o quanto você está aproveitando seus alimentos.</p>
        </div>
      </div>

      <section className="grid">
        <StatisticCard label="Total cadastrado" value={foods.length} tone="gray" />
        <StatisticCard label="Consumidos" value={consumed} tone="green" />
        <StatisticCard label="Descartados" value={discarded} tone="red" />
        <StatisticCard
          label="Aproveitamento"
          value={`${useRate}%`}
          hint="Consumidos ÷ (consumidos + descartados)"
          tone="yellow"
        />
      </section>

      <div className="stats-columns">
        <section className="stats-chart">
          <h2>Por local</h2>
          {byLocation.map((item) => (
            <Bar key={item.label} {...item} max={max} />
          ))}
        </section>

        <section className="stats-chart">
          <h2>Por categoria</h2>
          {byCategory.map((item) => (
            <Bar key={item.label} {...item} max={max} />
          ))}
        </section>
      </div>
    </div>
  )
}
