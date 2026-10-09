import type { FoodInput } from '../context/FoodsContext'

export type FoodErrors = Partial<Record<'name' | 'quantity' | 'expiryDate', string>>

export function validateFood(input: FoodInput): FoodErrors {
  const errors: FoodErrors = {}
  if (input.name.trim().length < 2) errors.name = 'Informe o nome do alimento (mín. 2 letras).'
  if (!Number.isFinite(input.quantity) || input.quantity <= 0) {
    errors.quantity = 'A quantidade deve ser maior que zero.'
  }
  if (!input.expiryDate) errors.expiryDate = 'Informe a data de validade.'
  return errors
}
