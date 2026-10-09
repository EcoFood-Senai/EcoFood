import { Link } from 'react-router-dom'
import { StatusBadge } from '../components/StatusBadge'
import { useFoods } from '../context/FoodsContext'
import { daysUntil, describeDays, formatDate, getValidityStatus } from '../utils/date'
import './Expirations.css'

export function Expirations() {
  const { foods } = useFoods()

  const items = foods
    .filter((food) => food.state === 'ativo')
    .map((food) => ({ food, days: daysUntil(food.expiryDate) }))
    .sort((a, b) => a.days - b.days)

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Vencimentos</h1>
          <p>Do mais urgente ao mais distante: consuma primeiro o que vence antes.</p>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="empty">Nenhum alimento ativo para acompanhar.</div>
      ) : (
        <ul className="expirations">
          {items.map(({ food, days }) => (
            <li key={food.id}>
              <Link to={`/alimentos/${food.id}`} className="expirations__item">
                <div>
                  <strong>{food.name}</strong>
                  <span>
                    {formatDate(food.expiryDate)} · {describeDays(days)}
                  </span>
                </div>
                <StatusBadge status={getValidityStatus(days)} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
