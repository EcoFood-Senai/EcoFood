import { Link } from 'react-router-dom'
import './Header.css'

interface HeaderProps {
  onToggleMenu: () => void
}

export function Header({ onToggleMenu }: HeaderProps) {
  return (
    <header className="header">
      <button type="button" className="header__menu" aria-label="Abrir menu" onClick={onToggleMenu}>
        ☰
      </button>
      <Link to="/" className="header__logo">
        🌱 EcoFood
      </Link>
      <Link to="/alimentos/novo" className="btn header__cta">
        + Novo alimento
      </Link>
    </header>
  )
}
