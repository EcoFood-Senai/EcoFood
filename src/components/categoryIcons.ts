import { Apple, Beef, CupSoda, Leaf, Milk, Refrigerator, Snowflake, Utensils, Warehouse, Wheat } from 'lucide-react'
import type { FoodCategory, StorageLocation } from '../types/food'

export const CATEGORY_ICONS = {
  Frutas: Apple,
  Verduras: Leaf,
  Laticínios: Milk,
  Carnes: Beef,
  Grãos: Wheat,
  Bebidas: CupSoda,
  Outros: Utensils,
} satisfies Record<FoodCategory, unknown>

export const LOCATION_ICONS = {
  Geladeira: Refrigerator,
  Freezer: Snowflake,
  Dispensa: Warehouse,
} satisfies Record<StorageLocation, unknown>
