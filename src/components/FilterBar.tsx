import { CATEGORIES } from '../types/food'
import type { FoodCategory, ValidityStatus } from '../types/food'
import './FilterBar.css'

interface FilterBarProps {
  category: FoodCategory | 'todas'
  status: ValidityStatus | 'todos'
  onCategoryChange: (category: FoodCategory | 'todas') => void
  onStatusChange: (status: ValidityStatus | 'todos') => void
}

export function FilterBar({ category, status, onCategoryChange, onStatusChange }: FilterBarProps) {
  return (
    <div className="filter-bar">
      <label>
        Categoria
        <select
          value={category}
          onChange={(event) => onCategoryChange(event.target.value as FoodCategory | 'todas')}
        >
          <option value="todas">Todas</option>
          {CATEGORIES.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <label>
        Validade
        <select
          value={status}
          onChange={(event) => onStatusChange(event.target.value as ValidityStatus | 'todos')}
        >
          <option value="todos">Todas</option>
          <option value="ok">No prazo</option>
          <option value="atencao">Atenção (até 3 dias)</option>
          <option value="vence-hoje">Vence hoje</option>
          <option value="vencido">Vencidos</option>
        </select>
      </label>
    </div>
  )
}
