import type { Food, FoodCategory, StorageLocation, ValidityStatus } from '../types/food'
import { daysUntil, getValidityStatus } from './date'

export interface FoodFilters {
  search: string
  category: FoodCategory | 'todas'
  location: StorageLocation | 'todos'
  status: ValidityStatus | 'todos'
}

export const DEFAULT_FILTERS: FoodFilters = {
  search: '',
  category: 'todas',
  location: 'todos',
  status: 'todos',
}

export function normalize(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
}

export function filterFoods(foods: Food[], filters: FoodFilters): Food[] {
  const term = normalize(filters.search.trim())

  return foods.filter((food) => {
    if (term && !normalize(food.name).includes(term)) return false
    if (filters.category !== 'todas' && food.category !== filters.category) return false
    if (filters.location !== 'todos' && food.location !== filters.location) return false
    if (filters.status !== 'todos') {
      const status = getValidityStatus(daysUntil(food.expiryDate))
      if (status !== filters.status) return false
    }
    return true
  })
}
