import { useState } from 'react'
import type { FormEvent } from 'react'
import { Search } from 'lucide-react'
import { FOOD_CATALOG } from '../data/foodCatalog'
import type { CatalogItem } from '../data/foodCatalog'
import { CATEGORIES, LOCATIONS } from '../types/food'
import type { FoodCategory, StorageLocation } from '../types/food'
import type { FoodInput } from '../context/FoodsContext'
import { addDaysISO, daysUntil, describeDays, formatDate, getValidityStatus } from '../utils/date'
import { normalize } from '../utils/filter'
import { validateFood } from '../utils/validation'
import type { FoodErrors } from '../utils/validation'
import { LOCATION_ICONS } from './categoryIcons'
import { StatusBadge } from './StatusBadge'
import './FoodForm.css'

const UNITS = ['un', 'kg', 'g', 'L', 'ml', 'pacote']
const QUICK_DAYS = [3, 7, 15, 30, 90]

interface FoodFormProps {
  initial?: FoodInput
  submitLabel: string
  onSubmit: (input: FoodInput) => void
  onCancel: () => void
}

export function FoodForm({ initial, submitLabel, onSubmit, onCancel }: FoodFormProps) {
  const [name, setName] = useState(initial?.name ?? '')
  const [category, setCategory] = useState<FoodCategory>(initial?.category ?? 'Frutas')
  const [location, setLocation] = useState<StorageLocation>(initial?.location ?? 'Geladeira')
  const [quantity, setQuantity] = useState(String(initial?.quantity ?? 1))
  const [unit, setUnit] = useState(initial?.unit ?? 'un')
  const [expiryDate, setExpiryDate] = useState(initial?.expiryDate ?? addDaysISO(7))
  const [notes, setNotes] = useState(initial?.notes ?? '')
  const [errors, setErrors] = useState<FoodErrors>({})
  const [showSuggestions, setShowSuggestions] = useState(false)

  const term = normalize(name.trim())
  const suggestions =
    term.length >= 1
      ? FOOD_CATALOG.filter((item) => normalize(item.name).includes(term)).slice(0, 6)
      : []

  function applySuggestion(item: CatalogItem) {
    setName(item.name)
    setCategory(item.category)
    setLocation(item.location)
    setUnit(item.unit)
    setExpiryDate(addDaysISO(item.shelfLifeDays))
    setShowSuggestions(false)
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const input: FoodInput = {
      name: name.trim(),
      category,
      location,
      quantity: Number(quantity),
      unit,
      expiryDate,
      notes: notes.trim(),
    }
    const found = validateFood(input)
    setErrors(found)
    if (Object.keys(found).length === 0) onSubmit(input)
  }

  const days = expiryDate ? daysUntil(expiryDate) : null
  const PreviewIcon = LOCATION_ICONS[location]

  return (
    <form className="food-form" onSubmit={handleSubmit} noValidate>
      <div className="food-form__main">
        <section className="food-form__section">
          <h3>1. Identificação</h3>

          <div className="food-form__field food-form__search">
            <label htmlFor="food-name">Nome do alimento</label>
            <div className="food-form__input-icon">
              <Search size={18} />
              <input
                id="food-name"
                value={name}
                autoComplete="off"
                placeholder="Busque ou digite (ex.: Leite integral)"
                onChange={(event) => {
                  setName(event.target.value)
                  setShowSuggestions(true)
                }}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => window.setTimeout(() => setShowSuggestions(false), 120)}
              />
            </div>
            {showSuggestions && suggestions.length > 0 && (
              <ul className="food-form__suggestions" role="listbox">
                {suggestions.map((item) => (
                  <li key={item.name}>
                    <button type="button" onMouseDown={() => applySuggestion(item)}>
                      <strong>{item.name}</strong>
                      <span>
                        {item.category} · {item.location}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
            {errors.name && <span className="food-form__error">{errors.name}</span>}
          </div>

          <div className="food-form__row">
            <div className="food-form__field">
              <label htmlFor="food-category">Categoria</label>
              <select
                id="food-category"
                value={category}
                onChange={(event) => setCategory(event.target.value as FoodCategory)}
              >
                {CATEGORIES.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>
            <div className="food-form__field">
              <label htmlFor="food-quantity">Quantidade</label>
              <input
                id="food-quantity"
                type="number"
                min="0"
                step="any"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
              />
              {errors.quantity && <span className="food-form__error">{errors.quantity}</span>}
            </div>
            <div className="food-form__field">
              <label htmlFor="food-unit">Unidade</label>
              <select id="food-unit" value={unit} onChange={(event) => setUnit(event.target.value)}>
                {UNITS.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        <section className="food-form__section">
          <h3>2. Onde está guardado</h3>
          <div className="food-form__locations" role="radiogroup" aria-label="Local de armazenamento">
            {LOCATIONS.map((item) => {
              const Icon = LOCATION_ICONS[item]
              return (
                <button
                  key={item}
                  type="button"
                  role="radio"
                  aria-checked={location === item}
                  className={`food-form__location ${location === item ? 'food-form__location--active' : ''}`}
                  onClick={() => setLocation(item)}
                >
                  <Icon size={28} />
                  {item}
                </button>
              )
            })}
          </div>
        </section>

        <section className="food-form__section">
          <h3>3. Validade</h3>
          <div className="food-form__field">
            <label htmlFor="food-expiry">Data de validade</label>
            <input
              id="food-expiry"
              type="date"
              value={expiryDate}
              onChange={(event) => setExpiryDate(event.target.value)}
            />
            {errors.expiryDate && <span className="food-form__error">{errors.expiryDate}</span>}
          </div>
          <div className="food-form__chips">
            {QUICK_DAYS.map((value) => (
              <button
                key={value}
                type="button"
                className="food-form__chip"
                onClick={() => setExpiryDate(addDaysISO(value))}
              >
                +{value} dias
              </button>
            ))}
          </div>
          <div className="food-form__field">
            <label htmlFor="food-notes">Observações</label>
            <textarea
              id="food-notes"
              rows={3}
              value={notes}
              placeholder="Opcional"
              onChange={(event) => setNotes(event.target.value)}
            />
          </div>
        </section>
      </div>

      <aside className="food-form__summary">
        <h3>Resumo</h3>
        <dl>
          <div>
            <dt>Alimento</dt>
            <dd>{name.trim() || '—'}</dd>
          </div>
          <div>
            <dt>Categoria</dt>
            <dd>{category}</dd>
          </div>
          <div>
            <dt>Quantidade</dt>
            <dd>
              {quantity || 0} {unit}
            </dd>
          </div>
          <div>
            <dt>Local</dt>
            <dd className="food-form__summary-location">
              <PreviewIcon size={16} />
              {location}
            </dd>
          </div>
          <div>
            <dt>Validade</dt>
            <dd>{expiryDate ? formatDate(expiryDate) : '—'}</dd>
          </div>
        </dl>
        {days !== null && (
          <div className="food-form__status">
            <StatusBadge status={getValidityStatus(days)} />
            <span>{describeDays(days)}</span>
          </div>
        )}
        <div className="food-form__actions">
          <button type="submit" className="btn">
            {submitLabel}
          </button>
          <button type="button" className="btn btn-outline" onClick={onCancel}>
            Cancelar
          </button>
        </div>
      </aside>
    </form>
  )
}
