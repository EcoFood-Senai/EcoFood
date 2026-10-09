import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { FoodsProvider } from './context/FoodsContext'
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

function App() {
  return (
    <FoodsProvider>
      <BrowserRouter>
        <Routes>
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
            <Route
              path="*"
              element={<div className="empty">Página não encontrada.</div>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </FoodsProvider>
  )
}

export default App
