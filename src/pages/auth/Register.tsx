import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Lock, Mail, User } from 'lucide-react'
import { IconInput } from '../../components/IconInput'
import { useAuth } from '../../context/AuthContext'
import { useToast } from '../../context/ToastContext'
import { AuthLayout } from './AuthLayout'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Register() {
  const { user, register } = useAuth()
  const { notify } = useToast()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)

  if (user) return <Navigate to="/dashboard" replace />

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const found: Record<string, string> = {}
    if (name.trim().length < 2) found.name = 'Informe seu nome.'
    if (!EMAIL_PATTERN.test(email.trim())) found.email = 'Informe um e-mail válido.'
    if (password.length < 6) found.password = 'A senha deve ter ao menos 6 caracteres.'
    if (confirm !== password) found.confirm = 'As senhas não conferem.'
    setErrors(found)
    if (Object.keys(found).length > 0) {
      notify('warning', 'Revise os campos destacados.')
      return
    }

    setLoading(true)
    const result = await register(name, email, password)
    setLoading(false)
    if (!result.ok) {
      notify('error', result.error)
      return
    }
    notify('success', 'Conta criada com sucesso. Bem-vindo ao EcoFood!')
    navigate('/dashboard')
  }

  return (
    <AuthLayout>
      <form className="auth__form" onSubmit={handleSubmit} noValidate>
        <IconInput
          label="Nome:"
          icon={User}
          value={name}
          placeholder="Digite seu nome"
          autoComplete="name"
          error={errors.name}
          onChange={setName}
        />
        <IconInput
          label="E-mail:"
          icon={Mail}
          type="email"
          value={email}
          placeholder="Digite seu e-mail"
          autoComplete="email"
          error={errors.email}
          onChange={setEmail}
        />
        <IconInput
          label="Senha:"
          icon={Lock}
          type="password"
          value={password}
          placeholder="Crie uma senha"
          autoComplete="new-password"
          error={errors.password}
          onChange={setPassword}
        />
        <IconInput
          label="Confirmar senha:"
          icon={Lock}
          type="password"
          value={confirm}
          placeholder="Repita a senha"
          autoComplete="new-password"
          error={errors.confirm}
          onChange={setConfirm}
        />
        <button type="submit" className="btn auth__submit" disabled={loading}>
          {loading ? 'Criando conta...' : 'Criar conta'}
        </button>
      </form>
      <p className="auth__switch">
        Já tem uma conta? <Link to="/login">Entrar</Link>
      </p>
    </AuthLayout>
  )
}
