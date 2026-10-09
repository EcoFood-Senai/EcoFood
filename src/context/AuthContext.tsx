import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { getMockFoods } from '../data/mockFoods'
import type { Food } from '../types/food'
import { hashPassword } from '../utils/password'
import { loadFromStorage, saveToStorage } from '../utils/storage'
import { ALERT_KEY, SESSION_KEY, USERS_KEY, foodsKey } from '../utils/storageKeys'

export interface User {
  id: string
  name: string
  email: string
}

interface StoredUser extends User {
  passwordHash: string
}

type AuthResult = { ok: true } | { ok: false; error: string }

interface AuthContextValue {
  user: User | null
  login: (email: string, password: string) => Promise<AuthResult>
  register: (name: string, email: string, password: string) => Promise<AuthResult>
  logout: () => void
}

/** Conta de demonstração com dados mockados (geladeira, freezer e dispensa). */
export const DEMO_EMAIL = 'demo@ecofood.com'
export const DEMO_PASSWORD = 'ecofood123'
const DEMO_ID = 'demo'

const AuthContext = createContext<AuthContextValue | null>(null)

function toPublic({ id, name, email }: StoredUser): User {
  return { id, name, email }
}

function seedDemoFoods() {
  if (localStorage.getItem(foodsKey(DEMO_ID))) return
  const foods: Food[] = getMockFoods().map((input) => ({
    ...input,
    id: crypto.randomUUID(),
    state: 'ativo',
    createdAt: new Date().toISOString(),
  }))
  saveToStorage(foodsKey(DEMO_ID), foods)
}

async function loadUsers(): Promise<StoredUser[]> {
  const users = loadFromStorage<StoredUser[]>(USERS_KEY, [])
  if (!users.some((item) => item.id === DEMO_ID)) {
    users.push({
      id: DEMO_ID,
      name: 'Usuário Demo',
      email: DEMO_EMAIL,
      passwordHash: await hashPassword(DEMO_PASSWORD),
    })
    saveToStorage(USERS_KEY, users)
  }
  return users
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => loadFromStorage<User | null>(SESSION_KEY, null))

  const startSession = useCallback((stored: StoredUser) => {
    if (stored.id === DEMO_ID) seedDemoFoods()
    const publicUser = toPublic(stored)
    saveToStorage(SESSION_KEY, publicUser)
    sessionStorage.removeItem(ALERT_KEY)
    setUser(publicUser)
  }, [])

  const login = useCallback(
    async (email: string, password: string): Promise<AuthResult> => {
      const users = await loadUsers()
      const hash = await hashPassword(password)
      const found = users.find(
        (item) => item.email.toLowerCase() === email.trim().toLowerCase() && item.passwordHash === hash,
      )
      if (!found) return { ok: false, error: 'E-mail ou senha incorretos.' }
      startSession(found)
      return { ok: true }
    },
    [startSession],
  )

  const register = useCallback(
    async (name: string, email: string, password: string): Promise<AuthResult> => {
      const users = await loadUsers()
      if (users.some((item) => item.email.toLowerCase() === email.trim().toLowerCase())) {
        return { ok: false, error: 'Já existe uma conta com esse e-mail.' }
      }
      const created: StoredUser = {
        id: crypto.randomUUID(),
        name: name.trim(),
        email: email.trim(),
        passwordHash: await hashPassword(password),
      }
      saveToStorage(USERS_KEY, [...users, created])
      startSession(created)
      return { ok: true }
    },
    [startSession],
  )

  const logout = useCallback(() => {
    localStorage.removeItem(SESSION_KEY)
    sessionStorage.removeItem(ALERT_KEY)
    setUser(null)
  }, [])

  const value = useMemo(() => ({ user, login, register, logout }), [user, login, register, logout])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth deve ser usado dentro de AuthProvider')
  return context
}
