import { Link } from 'react-router-dom'
import type { Food } from '../types/food'
import { daysUntil, describeDays, formatDate, getValidityStatus } from '../utils/date'
import { CATEGORY_ICONS, LOCATION_ICONS } from './categoryIcons'
import { StatusBadge } from './StatusBadge'
import './FoodCard.css'

export function FoodCard({ food }: { food: Food }) {
  const days = daysUntil(food.expiryDate)
  const status = getValidityStatus(days)
  const CategoryIcon = CATEGORY_ICONS[food.category]
  const LocationIcon = LOCATION_ICONS[food.location]

  return (
    <Link to={`/alimentos/${food.id}`} className={`food-card food-card--${status}`}>
      <div className="food-card__top">
        <span className="food-card__icon">
          <CategoryIcon size={22} />
        </span>
        <StatusBadge status={status} />
      </div>
      <h3 className="food-card__name">{food.name}</h3>
      <p className="food-card__meta">
        {food.category} · {food.quantity} {food.unit}
      </p>
      <p className="food-card__location">
        <LocationIcon size={15} />
        {food.location}
      </p>
      <p className="food-card__date">
        {formatDate(food.expiryDate)} — <strong>{describeDays(days)}</strong>
      </p>
    </Link>
  )
}
