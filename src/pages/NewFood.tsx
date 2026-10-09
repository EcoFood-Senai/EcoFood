import { useNavigate } from 'react-router-dom'
import { FoodForm } from '../components/FoodForm'
import { useFoods } from '../context/FoodsContext'
import { useToast } from '../context/ToastContext'

export function NewFood() {
  const { addFood } = useFoods()
  const { notify } = useToast()
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
        submitLabel="Cadastrar alimento"
        onCancel={() => navigate('/alimentos')}
        onSubmit={(input) => {
          const food = addFood(input)
          notify('success', `${food.name} cadastrado na ${food.location === 'Dispensa' ? 'dispensa' : food.location.toLowerCase()}.`)
          navigate(`/alimentos/${food.id}`)
        }}
      />
    </div>
  )
}
