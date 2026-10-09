import type { FoodCategory, StorageLocation } from '../types/food'

export interface CatalogItem {
  name: string
  category: FoodCategory
  location: StorageLocation
  unit: string
  /** Validade média sugerida, em dias, contando a partir de hoje. */
  shelfLifeDays: number
}

/** Catálogo mockado usado na busca do cadastro para sugerir categoria, local e validade. */
export const FOOD_CATALOG: CatalogItem[] = [
  { name: 'Maçã', category: 'Frutas', location: 'Geladeira', unit: 'un', shelfLifeDays: 20 },
  { name: 'Banana', category: 'Frutas', location: 'Dispensa', unit: 'un', shelfLifeDays: 5 },
  { name: 'Laranja', category: 'Frutas', location: 'Geladeira', unit: 'un', shelfLifeDays: 14 },
  { name: 'Morango', category: 'Frutas', location: 'Geladeira', unit: 'pacote', shelfLifeDays: 5 },
  { name: 'Uva', category: 'Frutas', location: 'Geladeira', unit: 'kg', shelfLifeDays: 7 },
  { name: 'Mamão', category: 'Frutas', location: 'Geladeira', unit: 'un', shelfLifeDays: 6 },
  { name: 'Abacate', category: 'Frutas', location: 'Dispensa', unit: 'un', shelfLifeDays: 5 },
  { name: 'Polpa de fruta', category: 'Frutas', location: 'Freezer', unit: 'pacote', shelfLifeDays: 180 },
  { name: 'Alface', category: 'Verduras', location: 'Geladeira', unit: 'un', shelfLifeDays: 6 },
  { name: 'Tomate', category: 'Verduras', location: 'Geladeira', unit: 'kg', shelfLifeDays: 8 },
  { name: 'Cenoura', category: 'Verduras', location: 'Geladeira', unit: 'kg', shelfLifeDays: 20 },
  { name: 'Brócolis', category: 'Verduras', location: 'Geladeira', unit: 'un', shelfLifeDays: 6 },
  { name: 'Batata', category: 'Verduras', location: 'Dispensa', unit: 'kg', shelfLifeDays: 30 },
  { name: 'Cebola', category: 'Verduras', location: 'Dispensa', unit: 'kg', shelfLifeDays: 30 },
  { name: 'Espinafre', category: 'Verduras', location: 'Geladeira', unit: 'pacote', shelfLifeDays: 5 },
  { name: 'Leite integral', category: 'Laticínios', location: 'Geladeira', unit: 'L', shelfLifeDays: 7 },
  { name: 'Iogurte natural', category: 'Laticínios', location: 'Geladeira', unit: 'un', shelfLifeDays: 15 },
  { name: 'Queijo mussarela', category: 'Laticínios', location: 'Geladeira', unit: 'g', shelfLifeDays: 20 },
  { name: 'Manteiga', category: 'Laticínios', location: 'Geladeira', unit: 'un', shelfLifeDays: 60 },
  { name: 'Requeijão', category: 'Laticínios', location: 'Geladeira', unit: 'un', shelfLifeDays: 25 },
  { name: 'Peito de frango', category: 'Carnes', location: 'Freezer', unit: 'kg', shelfLifeDays: 90 },
  { name: 'Carne moída', category: 'Carnes', location: 'Freezer', unit: 'kg', shelfLifeDays: 90 },
  { name: 'Bife bovino', category: 'Carnes', location: 'Freezer', unit: 'kg', shelfLifeDays: 120 },
  { name: 'Filé de peixe', category: 'Carnes', location: 'Freezer', unit: 'kg', shelfLifeDays: 60 },
  { name: 'Linguiça', category: 'Carnes', location: 'Freezer', unit: 'kg', shelfLifeDays: 60 },
  { name: 'Presunto', category: 'Carnes', location: 'Geladeira', unit: 'g', shelfLifeDays: 10 },
  { name: 'Arroz', category: 'Grãos', location: 'Dispensa', unit: 'kg', shelfLifeDays: 180 },
  { name: 'Feijão', category: 'Grãos', location: 'Dispensa', unit: 'kg', shelfLifeDays: 180 },
  { name: 'Macarrão', category: 'Grãos', location: 'Dispensa', unit: 'pacote', shelfLifeDays: 240 },
  { name: 'Aveia', category: 'Grãos', location: 'Dispensa', unit: 'pacote', shelfLifeDays: 150 },
  { name: 'Farinha de trigo', category: 'Grãos', location: 'Dispensa', unit: 'kg', shelfLifeDays: 120 },
  { name: 'Pão de forma', category: 'Grãos', location: 'Dispensa', unit: 'pacote', shelfLifeDays: 6 },
  { name: 'Suco de laranja', category: 'Bebidas', location: 'Geladeira', unit: 'L', shelfLifeDays: 6 },
  { name: 'Refrigerante', category: 'Bebidas', location: 'Dispensa', unit: 'L', shelfLifeDays: 120 },
  { name: 'Água de coco', category: 'Bebidas', location: 'Geladeira', unit: 'L', shelfLifeDays: 8 },
  { name: 'Ovos', category: 'Outros', location: 'Geladeira', unit: 'un', shelfLifeDays: 25 },
  { name: 'Molho de tomate', category: 'Outros', location: 'Dispensa', unit: 'un', shelfLifeDays: 150 },
  { name: 'Sorvete', category: 'Outros', location: 'Freezer', unit: 'L', shelfLifeDays: 90 },
  { name: 'Pizza congelada', category: 'Outros', location: 'Freezer', unit: 'un', shelfLifeDays: 120 },
  { name: 'Biscoito', category: 'Outros', location: 'Dispensa', unit: 'pacote', shelfLifeDays: 90 },
]
