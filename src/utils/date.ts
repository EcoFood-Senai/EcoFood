import type { ValidityStatus } from '../types/food'

const MS_PER_DAY = 24 * 60 * 60 * 1000

function startOfDay(date: Date): number {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime()
}

/** Dias restantes até o vencimento (negativo quando já venceu). */
export function daysUntil(expiryDate: string, today: Date = new Date()): number {
  const [year, month, day] = expiryDate.split('-').map(Number)
  const expiry = new Date(year, month - 1, day)
  return Math.round((startOfDay(expiry) - startOfDay(today)) / MS_PER_DAY)
}

export function getValidityStatus(days: number): ValidityStatus {
  if (days < 0) return 'vencido'
  if (days === 0) return 'vence-hoje'
  if (days <= 3) return 'atencao'
  return 'ok'
}

export function describeDays(days: number): string {
  if (days < 0) return `Venceu há ${Math.abs(days)} dia${days === -1 ? '' : 's'}`
  if (days === 0) return 'Vence hoje'
  if (days === 1) return 'Vence amanhã'
  return `Vence em ${days} dias`
}

export function formatDate(isoDate: string): string {
  const [year, month, day] = isoDate.slice(0, 10).split('-')
  return `${day}/${month}/${year}`
}

export function formatDateTime(iso: string): string {
  const date = new Date(iso)
  return `${date.toLocaleDateString('pt-BR')} às ${date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  })}`
}

/** Data (YYYY-MM-DD) daqui a `days` dias; use valores negativos para o passado. */
export function addDaysISO(days: number): string {
  const date = new Date()
  date.setDate(date.getDate() + days)
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${date.getFullYear()}-${month}-${day}`
}

export function todayISO(): string {
  return addDaysISO(0)
}
