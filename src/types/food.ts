export type FoodCategory =
  | 'Frutas'
  | 'Verduras'
  | 'Laticínios'
  | 'Carnes'
  | 'Grãos'
  | 'Bebidas'
  | 'Outros'

export const CATEGORIES: FoodCategory[] = [
  'Frutas',
  'Verduras',
  'Laticínios',
  'Carnes',
  'Grãos',
  'Bebidas',
  'Outros',
]

export type StorageLocation = 'Geladeira' | 'Freezer' | 'Dispensa'

export const LOCATIONS: StorageLocation[] = ['Geladeira', 'Freezer', 'Dispensa']

export type FoodState = 'ativo' | 'consumido' | 'descartado'

export interface Food {
  id: string
  name: string
  category: FoodCategory
  location: StorageLocation
  quantity: number
  unit: string
  expiryDate: string
  notes: string
  state: FoodState
  createdAt: string
}

export type HistoryAction =
  | 'cadastrado'
  | 'editado'
  | 'consumido'
  | 'descartado'
  | 'excluido'

export interface HistoryEntry {
  id: string
  foodName: string
  action: HistoryAction
  date: string
}

export type ValidityStatus = 'vencido' | 'vence-hoje' | 'atencao' | 'ok'
