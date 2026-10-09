import './SearchBar.css'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function SearchBar({ value, onChange, placeholder = 'Buscar alimento...' }: SearchBarProps) {
  return (
    <label className="search-bar">
      <span aria-hidden="true">🔍</span>
      <input
        type="search"
        value={value}
        placeholder={placeholder}
        aria-label="Buscar alimento"
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  )
}
