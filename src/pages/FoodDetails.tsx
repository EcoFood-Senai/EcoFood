import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Check, Pencil, Trash2, X } from 'lucide-react'
import { LOCATION_ICONS } from '../components/categoryIcons'
import { ConfirmDeleteModal } from '../components/ConfirmDeleteModal'
import { StatusBadge } from '../components/StatusBadge'
import { useFoods } from '../context/FoodsContext'
import { useToast } from '../context/ToastContext'
import { daysUntil, describeDays, formatDate, formatDateTime, getValidityStatus } from '../utils/date'
import './FoodDetails.css'

export function FoodDetails() {
  const { id = '' } = useParams()
  const { getFood, markAs, removeFood } = useFoods()
  const { notify } = useToast()
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
  const LocationIcon = LOCATION_ICONS[food.location]

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
          <dt>Local</dt>
          <dd className="food-details__location">
            <LocationIcon size={18} />
            {food.location}
          </dd>
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
            <button
              type="button"
              className="btn"
              onClick={() => {
                markAs(food.id, 'consumido')
                notify('success', `${food.name} marcado como consumido.`)
              }}
            >
              <Check size={18} />
              Marcar como consumido
            </button>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => {
                markAs(food.id, 'descartado')
                notify('warning', `${food.name} foi descartado.`)
              }}
            >
              <X size={18} />
              Descartar
            </button>
          </>
        )}
        <Link to={`/alimentos/${food.id}/editar`} className="btn btn-outline">
          <Pencil size={18} />
          Editar
        </Link>
        <button type="button" className="btn btn-danger" onClick={() => setConfirmDelete(true)}>
          <Trash2 size={18} />
          Excluir
        </button>
      </div>

      {confirmDelete && (
        <ConfirmDeleteModal
          food={food}
          onCancel={() => setConfirmDelete(false)}
          onConfirm={() => {
            removeFood(food.id)
            notify('success', `${food.name} excluído com sucesso.`)
            navigate('/alimentos')
          }}
        />
      )}
    </div>
  )
}
