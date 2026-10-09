import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { FilterBar } from '../components/FilterBar'
import { FoodCard } from '../components/FoodCard'
import { SearchBar } from '../components/SearchBar'
import { useFoods } from '../context/FoodsContext'
import { DEFAULT_FILTERS, filterFoods } from '../utils/filter'
import type { FoodFilters } from '../utils/filter'
import './FoodList.css'

export function FoodList() {
  const { foods } = useFoods()
  const [filters, setFilters] = useState<FoodFilters>(DEFAULT_FILTERS)

  const active = foods.filter((food) => food.state === 'ativo')
  const visible = filterFoods(active, filters)

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Alimentos</h1>
          <p>{active.length} alimento(s) ativo(s) na sua casa.</p>
        </div>
        <Link to="/alimentos/novo" className="btn">
          <Plus size={18} />
          Novo alimento
        </Link>
      </div>

      <div className="food-list__toolbar">
        <SearchBar value={filters.search} onChange={(search) => setFilters({ ...filters, search })} />
        <FilterBar
          category={filters.category}
          location={filters.location}
          status={filters.status}
          onCategoryChange={(category) => setFilters({ ...filters, category })}
          onLocationChange={(location) => setFilters({ ...filters, location })}
          onStatusChange={(status) => setFilters({ ...filters, status })}
        />
      </div>

      {active.length === 0 ? (
        <div className="empty">
          Você ainda não cadastrou nenhum alimento. <Link to="/alimentos/novo">Cadastrar agora</Link>
        </div>
      ) : visible.length === 0 ? (
        <div className="empty">Nenhum alimento encontrado com esses filtros.</div>
      ) : (
        <div className="grid">
          {visible.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      )}
    </div>
  )
}
