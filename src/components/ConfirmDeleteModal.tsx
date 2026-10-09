import type { Food } from '../types/food'
import { Modal } from './Modal'

interface ConfirmDeleteModalProps {
  food: Food
  onConfirm: () => void
  onCancel: () => void
}

export function ConfirmDeleteModal({ food, onConfirm, onCancel }: ConfirmDeleteModalProps) {
  return (
    <Modal title="Excluir alimento" onClose={onCancel}>
      <p>
        Tem certeza que deseja excluir <strong>{food.name}</strong>? Essa ação não pode ser
        desfeita.
      </p>
      <div className="modal__actions">
        <button type="button" className="btn btn-outline" onClick={onCancel}>
          Cancelar
        </button>
        <button type="button" className="btn btn-danger" onClick={onConfirm}>
          Excluir
        </button>
      </div>
    </Modal>
  )
}
