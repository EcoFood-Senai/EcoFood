# EcoFood

Aplicação web para controle de alimentos e acompanhamento de datas de validade, com foco em **reduzir o desperdício** de comida em casa.

**ODS relacionada:** ODS 12 — Consumo e Produção Responsáveis.

## Links

- **Repositório:** https://github.com/EcoFood-Senai/EcoFood
- **Aplicação publicada:** _(preencher com a URL da Vercel após o deploy)_
- **Quadro do projeto (GitHub Projects):** https://github.com/orgs/EcoFood-Senai/projects/2

## Problema e objetivo

Muitas famílias jogam comida fora por esquecerem a validade dos alimentos. O EcoFood permite cadastrar o que existe em casa, ver o que está perto de vencer e registrar o que foi consumido ou descartado.

## Funcionalidades

- Login e cadastro de usuário (dados salvos no navegador, senha com hash SHA-256)
- CRUD de alimentos, organizados por local: **Geladeira**, **Freezer** e **Dispensa**
- Busca no cadastro com catálogo mockado, que sugere categoria, local e validade
- Busca por nome e filtros por local, categoria e situação da validade
- Cálculo automático dos dias até o vencimento, com status por cores
- Marcar alimentos como consumidos ou descartados
- Toasts informando cadastros, edições, exclusões e alertas de vencimento
- Histórico de movimentações, dashboard e estatísticas
- Dicas para evitar desperdício
- Tema escuro e layout responsivo (desktop, tablet e celular)

## Conta de demonstração

A conta abaixo já vem com alimentos mockados na geladeira, no freezer e na dispensa:

- **E-mail:** `demo@ecofood.com`
- **Senha:** `ecofood123`

Também é possível criar uma conta nova em `/cadastro` (começa sem alimentos).

## Tecnologias

- React 19 + TypeScript
- Vite
- React Router
- lucide-react (ícones)
- CSS puro
- Fontes: **Anton** (títulos) e **Poppins** (textos)

## Como executar

```bash
git clone https://github.com/EcoFood-Senai/EcoFood.git
cd EcoFood
npm install
npm run dev
```

Outros comandos: `npm run build` (build de produção) e `npm run lint`.

## Estrutura de pastas

```
src/
├── components/   # Header, NavBar, FoodCard, FoodForm, Modal, ...
├── context/      # Autenticação, alimentos/histórico e toasts
├── data/         # Catálogo e dados mockados
├── pages/        # Telas da aplicação (e pages/auth para login/cadastro)
├── types/        # Tipos TypeScript
└── utils/        # Datas, filtros, validação e LocalStorage
```

## Equipe

- [@Diogruuu](https://github.com/Diogruuu)
- [@jwlioo](https://github.com/jwlioo)
- [@kaiki2007](https://github.com/kaiki2007)
- [@mocotoTonin](https://github.com/mocotoTonin)

## Versionamento e gestão

- Git com commits no padrão `feat:`, `fix:`, `style:`, `docs:`, `refactor:` e `chore:`
- Tarefas organizadas no GitHub Projects (Backlog, Em andamento, Em revisão e Feito), com prioridades e responsáveis
- Cada card é uma issue do repositório

## Uso de Inteligência Artificial

| Ferramenta | Etapa | Contribuição |
| --- | --- | --- |
| ChatGPT | Planejamento | Apoio na definição do problema, benchmarking, requisitos e lista de tarefas do projeto |
| Claude Code | Versionamento e desenvolvimento | Configuração do GitHub Projects e issues, e apoio na implementação das telas, componentes e commits |

Todo o conteúdo gerado por IA foi revisado pela equipe.
