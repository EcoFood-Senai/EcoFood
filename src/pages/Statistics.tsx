import { StatisticCard } from '../components/StatisticCard'
import { useFoods } from '../context/FoodsContext'
import { CATEGORIES } from '../types/food'
import './Statistics.css'

export function Statistics() {
  const { foods } = useFoods()

  const consumed = foods.filter((food) => food.state === 'consumido').length
  const discarded = foods.filter((food) => food.state === 'descartado').length
  const finished = consumed + discarded
  const useRate = finished === 0 ? 0 : Math.round((consumed / finished) * 100)

  const byCategory = CATEGORIES.map((category) => ({
    category,
    count: foods.filter((food) => food.category === category).length,
  }))
  const max = Math.max(1, ...byCategory.map((item) => item.count))

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

      <section className="stats-chart">
        <h2>Alimentos por categoria</h2>
        {byCategory.map((item) => (
          <div key={item.category} className="stats-chart__row">
            <span>{item.category}</span>
            <div className="stats-chart__track">
              <div
                className="stats-chart__bar"
                style={{ width: `${(item.count / max) * 100}%` }}
              />
            </div>
            <strong>{item.count}</strong>
          </div>
        ))}
      </section>
    </div>
  )
}
