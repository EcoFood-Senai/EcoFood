import { useState } from 'react'
import type { FormEvent } from 'react'
import { CATEGORIES } from '../types/food'
import type { FoodCategory } from '../types/food'
import type { FoodInput } from '../context/FoodsContext'
import { todayISO } from '../utils/date'
import { validateFood } from '../utils/validation'
import type { FoodErrors } from '../utils/validation'
import './FoodForm.css'

const UNITS = ['un', 'kg', 'g', 'L', 'ml', 'pacote']


interface FoodFormProps {
  initial?: FoodInput
  submitLabel: string
  onSubmit: (input: FoodInput) => void
  onCancel: () => void
}

export function FoodForm({ initial, submitLabel, onSubmit, onCancel }: FoodFormProps) {
  const [name, setName] = useState(initial?.name ?? '')
  const [category, setCategory] = useState<FoodCategory>(initial?.category ?? 'Frutas')
  const [quantity, setQuantity] = useState(String(initial?.quantity ?? 1))
  const [unit, setUnit] = useState(initial?.unit ?? 'un')
  const [expiryDate, setExpiryDate] = useState(initial?.expiryDate ?? todayISO())
  const [notes, setNotes] = useState(initial?.notes ?? '')
  const [errors, setErrors] = useState<FoodErrors>({})

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const input: FoodInput = {
      name: name.trim(),
      category,
      quantity: Number(quantity),
      unit,
      expiryDate,
      notes: notes.trim(),
    }
    const found = validateFood(input)
    setErrors(found)
    if (Object.keys(found).length === 0) onSubmit(input)
  }

  return (
    <form className="food-form" onSubmit={handleSubmit} noValidate>
      <label>
        Nome
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ex.: Leite integral" />
        {errors.name && <span className="food-form__error">{errors.name}</span>}
      </label>

      <label>
        Categoria
        <select value={category} onChange={(e) => setCategory(e.target.value as FoodCategory)}>
          {CATEGORIES.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>

      <div className="food-form__row">
        <label>
          Quantidade
          <input
            type="number"
            min="0"
            step="any"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          {errors.quantity && <span className="food-form__error">{errors.quantity}</span>}
        </label>
        <label>
          Unidade
          <select value={unit} onChange={(e) => setUnit(e.target.value)}>
            {UNITS.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
      </div>

      <label>
        Data de validade
        <input type="date" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
        {errors.expiryDate && <span className="food-form__error">{errors.expiryDate}</span>}
      </label>

      <label>
        Observações
        <textarea
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Opcional"
        />
      </label>

      <div className="food-form__actions">
        <button type="button" className="btn btn-outline" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit" className="btn">
          {submitLabel}
        </button>
      </div>
    </form>
  )
}
