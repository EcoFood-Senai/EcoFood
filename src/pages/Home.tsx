import { Link } from 'react-router-dom'
import './Home.css'

export function Home() {
  return (
    <div className="page">
      <section className="hero">
        <span className="hero__tag">ODS 12 · Consumo e produção responsáveis</span>
        <h1>
          Menos desperdício,
          <br />
          mais comida na mesa.
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
      </section>

      <section className="grid">
        <article className="home-feature">
          <span aria-hidden="true">📦</span>
          <h3>Organize</h3>
          <p>Cadastre seus alimentos com categoria, quantidade e validade.</p>
        </article>
        <article className="home-feature">
          <span aria-hidden="true">⏰</span>
          <h3>Acompanhe</h3>
          <p>Veja o que está perto de vencer e priorize o que consumir primeiro.</p>
        </article>
        <article className="home-feature">
          <span aria-hidden="true">🌍</span>
          <h3>Reduza</h3>
          <p>Acompanhe estatísticas e descubra o quanto você evitou de desperdício.</p>
        </article>
      </section>
    </div>
  )
}
