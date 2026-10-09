import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import './Layout.css'

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Header onToggleMenu={() => setMenuOpen((open) => !open)} />
      <Sidebar open={menuOpen} onNavigate={() => setMenuOpen(false)} />
      <main className="layout__main">
        <Outlet />
      </main>
    </>
  )
}
