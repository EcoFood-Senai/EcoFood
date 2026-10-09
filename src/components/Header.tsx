import { Link, useNavigate } from 'react-router-dom'
import { LogOut, Plus } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useToast } from '../context/ToastContext'
import './Header.css'

export function Header() {
  const { user, logout } = useAuth()
  const { notify } = useToast()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    notify('info', 'Você saiu da sua conta.')
    navigate('/login')
  }

  return (
    <header className="header">
      <Link to="/" className="header__brand">
        <img src="/logo.webp" alt="" className="header__logo" />
        <span className="header__name">EcoFood</span>
      </Link>

      <div className="header__actions">
        <Link to="/alimentos/novo" className="btn header__cta">
          <Plus size={18} />
          <span className="header__cta-label">Novo alimento</span>
        </Link>
        <span className="header__user">{user?.name}</span>
        <button type="button" className="header__logout" aria-label="Sair" onClick={handleLogout}>
          <LogOut size={20} />
        </button>
      </div>
    </header>
  )
}
