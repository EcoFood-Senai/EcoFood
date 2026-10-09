import { useFoods } from '../context/FoodsContext'
import type { HistoryAction } from '../types/food'
import { formatDateTime } from '../utils/date'
import './History.css'

const LABELS: Record<HistoryAction, string> = {
  cadastrado: '➕ Cadastrado',
  editado: '✏️ Editado',
  consumido: '✅ Consumido',
  descartado: '🗑️ Descartado',
  excluido: '❌ Excluído',
}

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
          {history.map((entry) => (
            <li key={entry.id} className={`history__item history__item--${entry.action}`}>
              <span className="history__action">{LABELS[entry.action]}</span>
              <strong>{entry.foodName}</strong>
              <time dateTime={entry.date}>{formatDateTime(entry.date)}</time>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
