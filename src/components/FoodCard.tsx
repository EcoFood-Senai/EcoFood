import { Link } from 'react-router-dom'
import type { Food } from '../types/food'
import { daysUntil, describeDays, formatDate, getValidityStatus } from '../utils/date'
import { StatusBadge } from './StatusBadge'
import './FoodCard.css'

const CATEGORY_ICON: Record<Food['category'], string> = {
  Frutas: '🍎',
  Verduras: '🥬',
  Laticínios: '🧀',
  Carnes: '🥩',
  Grãos: '🌾',
  Bebidas: '🥤',
  Outros: '🍽️',
}

export function FoodCard({ food }: { food: Food }) {
  const days = daysUntil(food.expiryDate)
  const status = getValidityStatus(days)

  return (
    <Link to={`/alimentos/${food.id}`} className={`food-card food-card--${status}`}>
      <div className="food-card__top">
        <span className="food-card__icon" aria-hidden="true">
          {CATEGORY_ICON[food.category]}
        </span>
        <StatusBadge status={status} />
      </div>
      <h3 className="food-card__name">{food.name}</h3>
      <p className="food-card__meta">
        {food.category} · {food.quantity} {food.unit}
      </p>
      <p className="food-card__date">
        {formatDate(food.expiryDate)} — <strong>{describeDays(days)}</strong>
      </p>
    </Link>
  )
}
