import type { ValidityStatus } from '../types/food'
import './StatusBadge.css'

const LABELS: Record<ValidityStatus, string> = {
  vencido: 'Vencido',
  'vence-hoje': 'Vence hoje',
  atencao: 'Atenção',
  ok: 'No prazo',
}

export function StatusBadge({ status }: { status: ValidityStatus }) {
  return <span className={`status-badge status-badge--${status}`}>{LABELS[status]}</span>
}
