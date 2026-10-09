import { ArrowRightLeft, Apple, CalendarDays, Leaf, ShoppingCart, Snowflake } from 'lucide-react'
import './Tips.css'

const TIPS = [
  {
    icon: Snowflake,
    title: 'Congele o que não vai consumir',
    text: 'Pães, carnes e frutas maduras duram meses no freezer. Congele antes de vencer.',
  },
  {
    icon: ArrowRightLeft,
    title: 'Primeiro que entra, primeiro que sai',
    text: 'Coloque os alimentos mais novos atrás e os mais antigos na frente da geladeira.',
  },
  {
    icon: ShoppingCart,
    title: 'Compre só o necessário',
    text: 'Faça uma lista de compras com base no que você já tem cadastrado no EcoFood.',
  },
  {
    icon: Apple,
    title: 'Aproveite frutas maduras',
    text: 'Bananas e maçãs muito maduras viram bolos, vitaminas e geleias.',
  },
  {
    icon: Leaf,
    title: 'Guarde verduras do jeito certo',
    text: 'Lave, seque bem e guarde em potes com papel toalha para durarem mais.',
  },
  {
    icon: CalendarDays,
    title: 'Entenda as datas',
    text: '“Consumir até” exige atenção à segurança; “melhor antes de” indica qualidade.',
  },
]

export function Tips() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Dicas</h1>
          <p>Pequenas atitudes que reduzem o desperdício de alimentos.</p>
        </div>
      </div>

      <div className="grid">
        {TIPS.map(({ icon: Icon, title, text }) => (
          <article key={title} className="tip">
            <span className="tip__icon">
              <Icon size={24} />
            </span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
