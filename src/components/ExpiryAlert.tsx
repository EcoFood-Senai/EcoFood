import { useEffect } from 'react'
import { useFoods } from '../context/FoodsContext'
import { useToast } from '../context/ToastContext'
import { daysUntil } from '../utils/date'
import { ALERT_KEY } from '../utils/storageKeys'

/** Mostra uma única vez por sessão um alerta com os alimentos vencidos ou perto de vencer. */
export function ExpiryAlert() {
  const { foods } = useFoods()
  const { notify } = useToast()

  useEffect(() => {
    if (sessionStorage.getItem(ALERT_KEY)) return
    sessionStorage.setItem(ALERT_KEY, '1')

    const active = foods.filter((food) => food.state === 'ativo')
    const expired = active.filter((food) => daysUntil(food.expiryDate) < 0).length
    const soon = active.filter((food) => {
      const days = daysUntil(food.expiryDate)
      return days >= 0 && days <= 3
    }).length

    if (expired > 0) {
      notify('error', `${expired} alimento(s) vencido(s). Verifique e descarte se necessário.`)
    }
    if (soon > 0) {
      notify('warning', `${soon} alimento(s) vencem em até 3 dias. Consuma primeiro!`)
    }
  }, [foods, notify])

  return null
}
