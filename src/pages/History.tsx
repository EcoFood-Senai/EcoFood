import { CheckCircle2, Pencil, Plus, Trash2, XCircle } from 'lucide-react'
import { useFoods } from '../context/FoodsContext'
import type { HistoryAction } from '../types/food'
import { formatDateTime } from '../utils/date'
import './History.css'

const ACTIONS = {
  cadastrado: { label: 'Cadastrado', icon: Plus },
  editado: { label: 'Editado', icon: Pencil },
  consumido: { label: 'Consumido', icon: CheckCircle2 },
  descartado: { label: 'Descartado', icon: Trash2 },
  excluido: { label: 'Excluído', icon: XCircle },
} satisfies Record<HistoryAction, unknown>

export function History() {
  const { history } = useFoods()

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Histórico</h1>
          <p>Tudo o que aconteceu com seus alimentos.</p>
        </div>
      </div>

      {history.length === 0 ? (
        <div className="empty">Ainda não há movimentações.</div>
      ) : (
        <ul className="history">
          {history.map((entry) => {
            const { label, icon: Icon } = ACTIONS[entry.action]
            return (
              <li key={entry.id} className={`history__item history__item--${entry.action}`}>
                <span className="history__action">
                  <Icon size={16} />
                  {label}
                </span>
                <strong>{entry.foodName}</strong>
                <time dateTime={entry.date}>{formatDateTime(entry.date)}</time>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
