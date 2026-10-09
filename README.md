# 🌱 EcoFood

Aplicação web para controle de alimentos e acompanhamento de datas de validade, com foco em **reduzir o desperdício** de comida em casa.

**ODS relacionada:** ODS 12 — Consumo e Produção Responsáveis.

## 🔗 Links

- **Repositório:** https://github.com/EcoFood-Senai/EcoFood
- **Aplicação publicada:** _(preencher com a URL da Vercel após o deploy)_
- **Quadro do projeto (GitHub Projects):** https://github.com/orgs/EcoFood-Senai/projects/2

## 🎯 Problema e objetivo

Muitas famílias jogam comida fora por esquecerem a validade dos alimentos. O EcoFood permite cadastrar o que existe em casa, ver o que está perto de vencer e registrar o que foi consumido ou descartado.

## ✨ Funcionalidades

- Cadastro, listagem, edição e exclusão (CRUD) de alimentos
- Busca por nome e filtros por categoria e situação da validade
- Cálculo automático dos dias até o vencimento, com status por cores
- Marcar alimentos como consumidos ou descartados
- Histórico de movimentações
- Dashboard e estatísticas de aproveitamento
- Dicas para evitar desperdício
- Dados salvos no navegador (LocalStorage)
- Layout responsivo (desktop, tablet e celular)

## 🛠️ Tecnologias

- React 19 + TypeScript
- Vite
- React Router
- CSS puro
- Fontes: **Anton** (títulos) e **Poppins** (textos)

## ▶️ Como executar

```bash
git clone https://github.com/EcoFood-Senai/EcoFood.git
cd EcoFood
npm install
npm run dev
```

Outros comandos: `npm run build` (build de produção) e `npm run lint`.

## 🗂️ Estrutura de pastas

```
src/
├── components/   # Header, Sidebar, FoodCard, StatusBadge, Modal, ...
├── context/      # Estado global dos alimentos e histórico
├── pages/        # Telas da aplicação
├── types/        # Tipos TypeScript
└── utils/        # Datas, filtros, validação e LocalStorage
```

## 👥 Equipe

- [@Diogruuu](https://github.com/Diogruuu)
- [@jwlioo](https://github.com/jwlioo)
- [@kaiki2007](https://github.com/kaiki2007)
- [@mocotoTonin](https://github.com/mocotoTonin)

## 🔀 Versionamento e gestão

- Git com commits no padrão `feat:`, `fix:`, `style:`, `docs:`, `refactor:` e `chore:`
- Tarefas organizadas no GitHub Projects (Backlog → Em andamento → Em revisão → Feito), com prioridades e responsáveis
- Cada card é uma issue do repositório

## 🤖 Uso de Inteligência Artificial

| Ferramenta | Etapa | Contribuição |
| --- | --- | --- |
| ChatGPT | Planejamento | Apoio na definição do problema, benchmarking, requisitos e lista de tarefas do projeto |
| Claude Code | Versionamento e desenvolvimento | Configuração do GitHub Projects e issues, e apoio na implementação das telas, componentes e commits |

Todo o conteúdo gerado por IA foi revisado pela equipe.
