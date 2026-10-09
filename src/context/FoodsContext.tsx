import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import type { Food, HistoryAction, HistoryEntry } from '../types/food'
import { loadFromStorage, saveToStorage } from '../utils/storage'
import { foodsKey, historyKey } from '../utils/storageKeys'

export type FoodInput = Omit<Food, 'id' | 'createdAt' | 'state'>

interface FoodsContextValue {
  foods: Food[]
  history: HistoryEntry[]
  getFood: (id: string) => Food | undefined
  addFood: (input: FoodInput) => Food
  updateFood: (id: string, input: FoodInput) => void
  markAs: (id: string, state: 'consumido' | 'descartado') => void
  removeFood: (id: string) => void
}

const FoodsContext = createContext<FoodsContextValue | null>(null)

function newId(): string {
  return crypto.randomUUID()
}

export function FoodsProvider({ userId, children }: { userId: string; children: ReactNode }) {
  const [foods, setFoods] = useState<Food[]>(() => loadFromStorage<Food[]>(foodsKey(userId), []))
  const [history, setHistory] = useState<HistoryEntry[]>(() =>
    loadFromStorage<HistoryEntry[]>(historyKey(userId), []),
  )

  useEffect(() => saveToStorage(foodsKey(userId), foods), [userId, foods])
  useEffect(() => saveToStorage(historyKey(userId), history), [userId, history])

  const log = useCallback((foodName: string, action: HistoryAction) => {
    const entry: HistoryEntry = {
      id: newId(),
      foodName,
      action,
      date: new Date().toISOString(),
    }
    setHistory((current) => [entry, ...current])
  }, [])

  const getFood = useCallback((id: string) => foods.find((food) => food.id === id), [foods])

  const addFood = useCallback(
    (input: FoodInput) => {
      const food: Food = {
        ...input,
        id: newId(),
        state: 'ativo',
        createdAt: new Date().toISOString(),
      }
      setFoods((current) => [food, ...current])
      log(food.name, 'cadastrado')
      return food
    },
    [log],
  )

  const updateFood = useCallback(
    (id: string, input: FoodInput) => {
      setFoods((current) => current.map((food) => (food.id === id ? { ...food, ...input } : food)))
      log(input.name, 'editado')
    },
    [log],
  )

  const markAs = useCallback(
    (id: string, state: 'consumido' | 'descartado') => {
      const target = foods.find((food) => food.id === id)
      if (!target) return
      setFoods((current) => current.map((food) => (food.id === id ? { ...food, state } : food)))
      log(target.name, state)
    },
    [foods, log],
  )

  const removeFood = useCallback(
    (id: string) => {
      const target = foods.find((food) => food.id === id)
      if (!target) return
      setFoods((current) => current.filter((food) => food.id !== id))
      log(target.name, 'excluido')
    },
    [foods, log],
  )

  const value = useMemo(
    () => ({ foods, history, getFood, addFood, updateFood, markAs, removeFood }),
    [foods, history, getFood, addFood, updateFood, markAs, removeFood],
  )

  return <FoodsContext.Provider value={value}>{children}</FoodsContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useFoods(): FoodsContextValue {
  const context = useContext(FoodsContext)
  if (!context) throw new Error('useFoods deve ser usado dentro de FoodsProvider')
  return context
}
