import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ConfirmDeleteModal } from '../components/ConfirmDeleteModal'
import { StatusBadge } from '../components/StatusBadge'
import { useFoods } from '../context/FoodsContext'
import { daysUntil, describeDays, formatDate, formatDateTime, getValidityStatus } from '../utils/date'
import './FoodDetails.css'

export function FoodDetails() {
  const { id = '' } = useParams()
  const { getFood, markAs, removeFood } = useFoods()
  const navigate = useNavigate()
  const [confirmDelete, setConfirmDelete] = useState(false)
  const food = getFood(id)

  if (!food) {
    return (
      <div className="empty">
        Alimento não encontrado. <Link to="/alimentos">Voltar para a lista</Link>
      </div>
    )
  }

  const days = daysUntil(food.expiryDate)
  const isActive = food.state === 'ativo'

  return (
    <div className="page">
      <div className="page-header">
        <h1>{food.name}</h1>
        {isActive ? (
          <StatusBadge status={getValidityStatus(days)} />
        ) : (
          <span className="food-details__state">{food.state}</span>
        )}
      </div>

      <dl className="food-details">
        <div>
          <dt>Categoria</dt>
          <dd>{food.category}</dd>
        </div>
        <div>
          <dt>Quantidade</dt>
          <dd>
            {food.quantity} {food.unit}
          </dd>
        </div>
        <div>
          <dt>Validade</dt>
          <dd>
            {formatDate(food.expiryDate)}
            {isActive && ` — ${describeDays(days)}`}
          </dd>
        </div>
        <div>
          <dt>Cadastrado em</dt>
          <dd>{formatDateTime(food.createdAt)}</dd>
        </div>
        <div>
          <dt>Observações</dt>
          <dd>{food.notes || '—'}</dd>
        </div>
      </dl>

      <div className="food-details__actions">
        {isActive && (
          <>
            <button type="button" className="btn" onClick={() => markAs(food.id, 'consumido')}>
              ✔ Marcar como consumido
            </button>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => markAs(food.id, 'descartado')}
            >
              Descartar
            </button>
          </>
        )}
        <Link to={`/alimentos/${food.id}/editar`} className="btn btn-outline">
          Editar
        </Link>
        <button type="button" className="btn btn-danger" onClick={() => setConfirmDelete(true)}>
          Excluir
        </button>
      </div>

      {confirmDelete && (
        <ConfirmDeleteModal
          food={food}
          onCancel={() => setConfirmDelete(false)}
          onConfirm={() => {
            removeFood(food.id)
            navigate('/alimentos')
          }}
        />
      )}
    </div>
  )
}
