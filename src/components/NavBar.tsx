import { NavLink } from 'react-router-dom'
import {
  BarChart3,
  CalendarClock,
  History,
  LayoutDashboard,
  Lightbulb,
  Package,
  House,
} from 'lucide-react'
import './NavBar.css'

const LINKS = [
  { to: '/', label: 'Início', icon: House },
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/alimentos', label: 'Alimentos', icon: Package },
  { to: '/vencimentos', label: 'Vencimentos', icon: CalendarClock },
  { to: '/historico', label: 'Histórico', icon: History },
  { to: '/estatisticas', label: 'Estatísticas', icon: BarChart3 },
  { to: '/dicas', label: 'Dicas', icon: Lightbulb },
]

export function NavBar() {
  return (
    <nav className="navbar" aria-label="Menu principal">
      <div className="navbar__inner">
        {LINKS.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
