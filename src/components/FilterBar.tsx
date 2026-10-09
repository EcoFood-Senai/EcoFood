import { CATEGORIES, LOCATIONS } from '../types/food'
import type { FoodCategory, StorageLocation, ValidityStatus } from '../types/food'
import './FilterBar.css'

interface FilterBarProps {
  category: FoodCategory | 'todas'
  location: StorageLocation | 'todos'
  status: ValidityStatus | 'todos'
  onCategoryChange: (category: FoodCategory | 'todas') => void
  onLocationChange: (location: StorageLocation | 'todos') => void
  onStatusChange: (status: ValidityStatus | 'todos') => void
}

export function FilterBar({
  category,
  location,
  status,
  onCategoryChange,
  onLocationChange,
  onStatusChange,
}: FilterBarProps) {
  return (
    <div className="filter-bar">
      <label>
        Local
        <select
          value={location}
          onChange={(event) => onLocationChange(event.target.value as StorageLocation | 'todos')}
        >
          <option value="todos">Todos</option>
          {LOCATIONS.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
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
