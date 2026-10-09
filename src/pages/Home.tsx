import { Link } from 'react-router-dom'
import { CalendarClock, Leaf, Package } from 'lucide-react'
import './Home.css'

const FEATURES = [
  {
    icon: Package,
    title: 'Organize',
    text: 'Cadastre alimentos por categoria, validade e local de armazenamento.',
  },
  {
    icon: CalendarClock,
    title: 'Acompanhe',
    text: 'Veja o que está perto de vencer e consuma primeiro.',
  },
  {
    icon: Leaf,
    title: 'Reduza',
    text: 'Acompanhe estatísticas e evite o desperdício.',
  },
]

export function Home() {
  return (
    <div className="page home">
      <section className="hero">
        <div className="hero__content">
          <span className="hero__tag">ODS 12 · Consumo e produção responsáveis</span>
          <h1>
            Menos desperdício,
            <br />
            mais comida na mesa
          </h1>
          <p>
            O EcoFood ajuda você a controlar os alimentos da sua casa, acompanhar as datas de
            validade e consumir tudo a tempo.
          </p>
          <div className="hero__actions">
            <Link to="/alimentos/novo" className="btn">
              Cadastrar alimento
            </Link>
            <Link to="/dashboard" className="btn btn-outline">
              Ver dashboard
            </Link>
          </div>
        </div>
        <img src="/logo.webp" alt="Logo EcoFood" className="hero__logo" />
      </section>

      <section className="grid">
        {FEATURES.map(({ icon: Icon, title, text }) => (
          <article key={title} className="home-feature">
            <span className="home-feature__icon">
              <Icon size={26} />
            </span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
