import type { FoodInput } from '../context/FoodsContext'

function inDays(days: number): string {
  const date = new Date()
  date.setDate(date.getDate() + days)
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${date.getFullYear()}-${month}-${day}`
}

/** Alimentos de exemplo para demonstrar a aplicação (datas relativas a hoje). */
export function getSampleFoods(): FoodInput[] {
  return [
    { name: 'Leite integral', category: 'Laticínios', quantity: 2, unit: 'L', expiryDate: inDays(1), notes: '' },
    { name: 'Banana', category: 'Frutas', quantity: 6, unit: 'un', expiryDate: inDays(2), notes: 'Já bem maduras' },
    { name: 'Alface', category: 'Verduras', quantity: 1, unit: 'un', expiryDate: inDays(0), notes: '' },
    { name: 'Peito de frango', category: 'Carnes', quantity: 1, unit: 'kg', expiryDate: inDays(-1), notes: 'Congelar se possível' },
    { name: 'Arroz', category: 'Grãos', quantity: 5, unit: 'kg', expiryDate: inDays(180), notes: '' },
    { name: 'Suco de laranja', category: 'Bebidas', quantity: 1, unit: 'L', expiryDate: inDays(6), notes: '' },
    { name: 'Iogurte natural', category: 'Laticínios', quantity: 4, unit: 'un', expiryDate: inDays(9), notes: '' },
    { name: 'Maçã', category: 'Frutas', quantity: 8, unit: 'un', expiryDate: inDays(12), notes: '' },
  ]
}
