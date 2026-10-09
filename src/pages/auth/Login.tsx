import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Lock, Mail } from 'lucide-react'
import { IconInput } from '../../components/IconInput'
import { useAuth } from '../../context/AuthContext'
import { useToast } from '../../context/ToastContext'
import { AuthLayout } from './AuthLayout'

export function Login() {
  const { user, login } = useAuth()
  const { notify } = useToast()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  if (user) return <Navigate to="/dashboard" replace />

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if (!email.trim() || !password) {
      notify('warning', 'Preencha o e-mail e a senha para entrar.')
      return
    }
    setLoading(true)
    const result = await login(email, password)
    setLoading(false)
    if (!result.ok) {
      notify('error', result.error)
      return
    }
    notify('success', 'Login realizado com sucesso.')
    navigate('/dashboard')
  }

  return (
    <AuthLayout>
      <form className="auth__form" onSubmit={handleSubmit} noValidate>
        <IconInput
          label="E-mail:"
          icon={Mail}
          type="email"
          value={email}
          placeholder="Digite seu e-mail"
          autoComplete="email"
          onChange={setEmail}
        />
        <IconInput
          label="Senha:"
          icon={Lock}
          type="password"
          value={password}
          placeholder="Digite sua senha"
          autoComplete="current-password"
          onChange={setPassword}
        />
        <button type="submit" className="btn auth__submit" disabled={loading}>
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
      <p className="auth__switch">
        Ainda não tem conta? <Link to="/cadastro">Cadastre-se</Link>
      </p>
    </AuthLayout>
  )
}
