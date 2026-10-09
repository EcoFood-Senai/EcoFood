import { Link } from 'react-router-dom'
import { FoodCard } from '../components/FoodCard'
import { StatisticCard } from '../components/StatisticCard'
import { useFoods } from '../context/FoodsContext'
import { LOCATIONS } from '../types/food'
import { daysUntil, getValidityStatus } from '../utils/date'

export function Dashboard() {
  const { foods } = useFoods()
  const active = foods.filter((food) => food.state === 'ativo')

  const withStatus = active.map((food) => {
    const days = daysUntil(food.expiryDate)
    return { food, days, status: getValidityStatus(days) }
  })

  const expired = withStatus.filter((item) => item.status === 'vencido').length
  const warning = withStatus.filter(
    (item) => item.status === 'atencao' || item.status === 'vence-hoje',
  ).length
  const ok = withStatus.filter((item) => item.status === 'ok').length

  const upcoming = [...withStatus].sort((a, b) => a.days - b.days).slice(0, 4)

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p>Resumo dos alimentos que você tem em casa.</p>
        </div>
      </div>

      <section className="grid">
        <StatisticCard label="Alimentos ativos" value={active.length} tone="gray" />
        <StatisticCard label="No prazo" value={ok} tone="green" />
        <StatisticCard label="Perto de vencer" value={warning} hint="Até 3 dias" tone="yellow" />
        <StatisticCard label="Vencidos" value={expired} tone="red" />
      </section>

      <section className="page">
        <h2>Por local</h2>
        <div className="grid">
          {LOCATIONS.map((location) => (
            <StatisticCard
              key={location}
              label={location}
              value={active.filter((food) => food.location === location).length}
              tone="gray"
            />
          ))}
        </div>
      </section>

      <section className="page">
        <div className="page-header">
          <h2>Próximos a vencer</h2>
          <Link to="/vencimentos" className="btn btn-outline">
            Ver todos
          </Link>
        </div>
        {upcoming.length === 0 ? (
          <div className="empty">
            Nenhum alimento ativo. <Link to="/alimentos/novo">Cadastre o primeiro!</Link>
          </div>
        ) : (
          <div className="grid">
            {upcoming.map((item) => (
              <FoodCard key={item.food.id} food={item.food} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
