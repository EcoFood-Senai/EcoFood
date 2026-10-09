# EcoFood

Aplicação web para controle de alimentos e acompanhamento de datas de validade, criada para **reduzir o desperdício** de comida dentro de casa. Projeto desenvolvido em grupo como hackathon de Frameworks Front-end (SESI/SENAI).

## Links

| Recurso | Endereço |
| --- | --- |
| Aplicação publicada (Vercel) | https://eco-food-senai.vercel.app/login |
| Repositório | https://github.com/EcoFood-Senai/EcoFood |
| Quadro do projeto (GitHub Projects) | https://github.com/orgs/EcoFood-Senai/projects/2 |

## Sobre o projeto

- **ODS escolhida:** ODS 12 — Consumo e Produção Responsáveis.
- **Problema:** o desperdício de alimentos dentro de casa, causado pela desorganização da despensa, da geladeira e do freezer e pelo esquecimento das datas de validade.
- **Público-alvo:** famílias e pessoas que moram sozinhas, começando por Sorocaba-SP, que querem consumir de forma consciente.
- **Objetivo:** oferecer um site que ajude a prevenir o desperdício, mostrando o que está perto de vencer e o que existe em cada local de armazenamento.

## Benchmarking

Foram analisados aplicativos de controle de estoque doméstico (NoWaste, Pantry Check e Fridgely) e de redistribuição de alimentos (Too Good To Go e Olio).

- **Pontos positivos observados:** interface limpa e intuitiva, controle de despensa e diminuição do lixo orgânico.
- **Pontos negativos observados:** funções complexas e misturadas, e foco apenas no estoque.
- **Diferencial do EcoFood:** fluxo simples, com alimentos organizados por geladeira, freezer e dispensa, status de validade por cores e alertas objetivos.

## Funcionalidades (requisitos funcionais)

- Login e cadastro de usuário
- Cadastro, listagem, edição e exclusão de alimentos (CRUD)
- Organização por local: **Geladeira**, **Freezer** e **Dispensa**
- Busca no cadastro com catálogo de alimentos, que sugere categoria, local e validade
- Busca por nome e filtros por local, categoria e situação da validade
- Cálculo automático dos dias até o vencimento, com status por cores
- Marcar alimentos como consumidos ou descartados
- Lista de vencimentos ordenada por urgência
- Histórico de movimentações
- Dashboard e estatísticas de aproveitamento
- Dicas para evitar o desperdício
- Avisos (toasts) para cadastro, edição, exclusão e alertas de vencimento

## Requisitos não funcionais

- **Responsividade:** layout adaptado para desktop, tablet e celular
- **Usabilidade e consistência visual:** tema escuro, ícones padronizados, fontes Anton (títulos) e Poppins (textos)
- **Feedback ao usuário:** toasts e mensagens de validação nos formulários
- **Persistência de dados:** LocalStorage, separado por usuário
- **Desempenho:** aplicação estática, sem back-end
- **Manutenibilidade:** código em TypeScript, componentes reutilizáveis e estrutura de pastas organizada

## Telas

| Rota | Tela |
| --- | --- |
| `/login` | Login |
| `/cadastro` | Cadastro de usuário |
| `/` | Início |
| `/dashboard` | Resumo dos alimentos e próximos vencimentos |
| `/alimentos` | Listagem com busca e filtros |
| `/alimentos/novo` | Cadastro de alimento |
| `/alimentos/:id` | Detalhes, consumo, descarte e exclusão |
| `/alimentos/:id/editar` | Edição |
| `/vencimentos` | Vencimentos |
| `/historico` | Histórico |
| `/estatisticas` | Estatísticas |
| `/dicas` | Dicas |

## Conta de demonstração

Para testar sem criar conta, use o acesso abaixo. Ele já traz alimentos na geladeira, no freezer e na dispensa:

- **E-mail:** `demo@ecofood.com`
- **Senha:** `ecofood123`

Também é possível criar uma conta em `/cadastro`; ela começa sem alimentos.

## Tecnologias

- React 19 e TypeScript
- Vite
- React Router
- lucide-react (ícones)
- CSS puro
- Deploy na Vercel

## Como executar

Pré-requisito: Node.js 20 ou superior.

```bash
git clone https://github.com/EcoFood-Senai/EcoFood.git
cd EcoFood
npm install
npm run dev
```

Outros comandos:

```bash
npm run build   # build de produção
npm run lint    # análise estática
```

## Estrutura de pastas

```
src/
├── components/   # Header, NavBar, FoodCard, FoodForm, Modal, ...
├── context/      # Autenticação, alimentos/histórico e toasts
├── data/         # Catálogo e dados mockados
├── pages/        # Telas (pages/auth para login e cadastro)
├── types/        # Tipos TypeScript
└── utils/        # Datas, filtros, validação e LocalStorage
```

## Deploy

O projeto é publicado na Vercel a partir da branch `main`. O arquivo `vercel.json` redireciona todas as rotas para o `index.html`, necessário para o React Router funcionar ao recarregar a página.

## Equipe

| Integrante | GitHub |
| --- | --- |
| Diogo Lopes Antunes | [@Diogruuu](https://github.com/Diogruuu) |
| Júlio César Botaccio | [@jwlioo](https://github.com/jwlioo) |
| Kaiki Santos da Silva | [@kaiki2007](https://github.com/kaiki2007) |
| Marco Antônio da Costa Silva | [@mocotoTonin](https://github.com/mocotoTonin) |

## Versionamento e gestão do projeto

- **Git e GitHub:** repositório da organização EcoFood-Senai, com a branch principal `main`.
- **Commits:** padrão `tipo: descrição`, com os tipos `feat`, `fix`, `style`, `refactor`, `docs` e `chore`. Cada commit representa uma mudança real no projeto.
- **GitHub Projects:** quadro com 60 cards, cada um ligado a uma issue do repositório.
  - Colunas: Backlog, Em andamento, Em revisão e Feito.
  - Cada card tem responsável, prioridade (Alta, Média ou Baixa) e uma label de categoria (Planejamento, Benchmark, Requisitos, Protótipo, Configuração, Componentes, Funcionalidades e Extras).
- **Pull requests:** usam o modelo de `.github/pull_request_template.md`.

## Uso de Inteligência Artificial

| Ferramenta | Em que foi usada |
| --- | --- |
| ChatGPT | Documentação do projeto |
| Claude | Prototipação e auxílio na construção do site |

Todo o conteúdo gerado por IA foi revisado pela equipe.
