import './Tips.css'

const TIPS = [
  {
    icon: '🧊',
    title: 'Congele o que não vai consumir',
    text: 'Pães, carnes e frutas maduras duram meses no freezer. Congele antes de vencer.',
  },
  {
    icon: '📥',
    title: 'Primeiro que entra, primeiro que sai',
    text: 'Coloque os alimentos mais novos atrás e os mais antigos na frente da geladeira.',
  },
  {
    icon: '🛒',
    title: 'Compre só o necessário',
    text: 'Faça uma lista de compras com base no que você já tem cadastrado no EcoFood.',
  },
  {
    icon: '🍌',
    title: 'Aproveite frutas maduras',
    text: 'Bananas e maçãs muito maduras viram bolos, vitaminas e geleias.',
  },
  {
    icon: '🥬',
    title: 'Guarde verduras do jeito certo',
    text: 'Lave, seque bem e guarde em potes com papel toalha para durarem mais.',
  },
  {
    icon: '📅',
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
        {TIPS.map((tip) => (
          <article key={tip.title} className="tip">
            <span aria-hidden="true">{tip.icon}</span>
            <h3>{tip.title}</h3>
            <p>{tip.text}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
