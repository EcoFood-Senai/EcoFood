import { Link, useNavigate, useParams } from 'react-router-dom'
import { FoodForm } from '../components/FoodForm'
import { useFoods } from '../context/FoodsContext'
import { useToast } from '../context/ToastContext'

export function EditFood() {
  const { id = '' } = useParams()
  const { getFood, updateFood } = useFoods()
  const { notify } = useToast()
  const navigate = useNavigate()
  const food = getFood(id)

  if (!food) {
    return (
      <div className="empty">
        Alimento não encontrado. <Link to="/alimentos">Voltar para a lista</Link>
      </div>
    )
  }

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Editar alimento</h1>
          <p>Altere as informações de {food.name}.</p>
        </div>
      </div>
      <FoodForm
        initial={food}
        submitLabel="Salvar alterações"
        onCancel={() => navigate(`/alimentos/${food.id}`)}
        onSubmit={(input) => {
          updateFood(food.id, input)
          notify('success', `${input.name} atualizado com sucesso.`)
          navigate(`/alimentos/${food.id}`)
        }}
      />
    </div>
  )
}
