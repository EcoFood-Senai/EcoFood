import { useNavigate } from 'react-router-dom'
import { FoodForm } from '../components/FoodForm'
import { useFoods } from '../context/FoodsContext'

export function NewFood() {
  const { addFood } = useFoods()
  const navigate = useNavigate()

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Cadastrar alimento</h1>
          <p>Preencha os dados para acompanhar a validade.</p>
        </div>
      </div>
      <FoodForm
        submitLabel="Cadastrar"
        onCancel={() => navigate('/alimentos')}
        onSubmit={(input) => {
          const food = addFood(input)
          navigate(`/alimentos/${food.id}`)
        }}
      />
    </div>
  )
}
