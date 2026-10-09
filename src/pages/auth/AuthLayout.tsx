import type { ReactNode } from 'react'
import './Auth.css'

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="auth">
      <main className="auth__main">
        <img src="/logo.webp" alt="EcoFood" className="auth__logo" />
        <h1 className="auth__title">EcoFood</h1>
        <p className="auth__subtitle">Controle de alimentos e combate ao desperdício</p>
        {children}
      </main>
      <footer className="auth__footer">© 2026 EcoFood. Todos os direitos reservados.</footer>
    </div>
  )
}
