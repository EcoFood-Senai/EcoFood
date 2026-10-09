import type { FoodInput } from '../context/FoodsContext'
import { addDaysISO } from '../utils/date'

/** Dados mockados carregados na conta de demonstração (datas relativas a hoje). */
export function getMockFoods(): FoodInput[] {
  return [
    { name: 'Leite integral', category: 'Laticínios', location: 'Geladeira', quantity: 2, unit: 'L', expiryDate: addDaysISO(1), notes: '' },
    { name: 'Iogurte natural', category: 'Laticínios', location: 'Geladeira', quantity: 4, unit: 'un', expiryDate: addDaysISO(9), notes: '' },
    { name: 'Alface', category: 'Verduras', location: 'Geladeira', quantity: 1, unit: 'un', expiryDate: addDaysISO(0), notes: '' },
    { name: 'Tomate', category: 'Verduras', location: 'Geladeira', quantity: 1, unit: 'kg', expiryDate: addDaysISO(4), notes: '' },
    { name: 'Maçã', category: 'Frutas', location: 'Geladeira', quantity: 8, unit: 'un', expiryDate: addDaysISO(12), notes: '' },
    { name: 'Suco de laranja', category: 'Bebidas', location: 'Geladeira', quantity: 1, unit: 'L', expiryDate: addDaysISO(6), notes: '' },
    { name: 'Peito de frango', category: 'Carnes', location: 'Freezer', quantity: 1, unit: 'kg', expiryDate: addDaysISO(45), notes: 'Porções individuais' },
    { name: 'Carne moída', category: 'Carnes', location: 'Freezer', quantity: 2, unit: 'kg', expiryDate: addDaysISO(2), notes: '' },
    { name: 'Polpa de fruta', category: 'Frutas', location: 'Freezer', quantity: 5, unit: 'pacote', expiryDate: addDaysISO(120), notes: '' },
    { name: 'Arroz', category: 'Grãos', location: 'Dispensa', quantity: 5, unit: 'kg', expiryDate: addDaysISO(180), notes: '' },
    { name: 'Feijão', category: 'Grãos', location: 'Dispensa', quantity: 3, unit: 'kg', expiryDate: addDaysISO(150), notes: '' },
    { name: 'Banana', category: 'Frutas', location: 'Dispensa', quantity: 6, unit: 'un', expiryDate: addDaysISO(2), notes: 'Já bem maduras' },
    { name: 'Pão de forma', category: 'Grãos', location: 'Dispensa', quantity: 1, unit: 'pacote', expiryDate: addDaysISO(-1), notes: '' },
  ]
}
