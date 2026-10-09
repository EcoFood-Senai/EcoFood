import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AuthProvider } from './context/AuthContext'
import { ToastProvider } from './context/ToastContext'
import { Dashboard } from './pages/Dashboard'
import { EditFood } from './pages/EditFood'
import { Expirations } from './pages/Expirations'
import { FoodDetails } from './pages/FoodDetails'
import { FoodList } from './pages/FoodList'
import { History } from './pages/History'
import { Home } from './pages/Home'
import { NewFood } from './pages/NewFood'
import { Statistics } from './pages/Statistics'
import { Tips } from './pages/Tips'
import { Login } from './pages/auth/Login'
import { Register } from './pages/auth/Register'

function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="cadastro" element={<Register />} />
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="alimentos" element={<FoodList />} />
              <Route path="alimentos/novo" element={<NewFood />} />
              <Route path="alimentos/:id" element={<FoodDetails />} />
              <Route path="alimentos/:id/editar" element={<EditFood />} />
              <Route path="vencimentos" element={<Expirations />} />
              <Route path="historico" element={<History />} />
              <Route path="estatisticas" element={<Statistics />} />
              <Route path="dicas" element={<Tips />} />
              <Route path="*" element={<div className="empty">Página não encontrada.</div>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ToastProvider>
  )
}

export default App
