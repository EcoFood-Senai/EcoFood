import { useState } from 'react'
import type { ComponentType } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import type { LucideProps } from 'lucide-react'
import './IconInput.css'

interface IconInputProps {
  label: string
  icon: ComponentType<LucideProps>
  type?: 'text' | 'email' | 'password'
  value: string
  placeholder: string
  autoComplete?: string
  error?: string
  onChange: (value: string) => void
}

export function IconInput({
  label,
  icon: Icon,
  type = 'text',
  value,
  placeholder,
  autoComplete,
  error,
  onChange,
}: IconInputProps) {
  const [visible, setVisible] = useState(false)
  const isPassword = type === 'password'

  return (
    <label className="icon-input">
      <span className="icon-input__label">{label}</span>
      <span className={`icon-input__field ${error ? 'icon-input__field--error' : ''}`}>
        <Icon size={18} />
        <input
          type={isPassword && visible ? 'text' : type}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onChange={(event) => onChange(event.target.value)}
        />
        {isPassword && (
          <button
            type="button"
            className="icon-input__toggle"
            aria-label={visible ? 'Ocultar senha' : 'Mostrar senha'}
            onClick={() => setVisible((current) => !current)}
          >
            {visible ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </span>
      {error && <span className="icon-input__error">{error}</span>}
    </label>
  )
}
