import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const LINKS = [
  { to: '/', label: 'Início', icon: '🏠' },
  { to: '/dashboard', label: 'Dashboard', icon: '📊' },
  { to: '/alimentos', label: 'Alimentos', icon: '🥦' },
  { to: '/vencimentos', label: 'Vencimentos', icon: '⏰' },
  { to: '/historico', label: 'Histórico', icon: '📜' },
  { to: '/estatisticas', label: 'Estatísticas', icon: '📈' },
  { to: '/dicas', label: 'Dicas', icon: '💡' },
]

interface SidebarProps {
  open: boolean
  onNavigate: () => void
}

export function Sidebar({ open, onNavigate }: SidebarProps) {
  return (
    <>
      <nav className={`sidebar ${open ? 'sidebar--open' : ''}`} aria-label="Menu principal">
        {LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) => `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`}
            onClick={onNavigate}
          >
            <span aria-hidden="true">{link.icon}</span>
            {link.label}
          </NavLink>
        ))}
      </nav>
      {open && <div className="sidebar-backdrop" onClick={onNavigate} />}
    </>
  )
}
