import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { FoodsProvider } from '../context/FoodsContext'
import { ExpiryAlert } from './ExpiryAlert'
import { Header } from './Header'
import { NavBar } from './NavBar'
import './Layout.css'

/** Área autenticada: redireciona para o login quando não há sessão. */
export function Layout() {
  const { user } = useAuth()
  if (!user) return <Navigate to="/login" replace />

  return (
    <FoodsProvider key={user.id} userId={user.id}>
      <Header />
      <NavBar />
      <main className="layout__main">
        <Outlet />
      </main>
      <ExpiryAlert />
    </FoodsProvider>
  )
}
