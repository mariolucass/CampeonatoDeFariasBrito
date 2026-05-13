# ⚽ Campeonato Fariasbritense de Futebol 2023

> Frontend oficial do Campeonato Municipal de Futebol de Farias Brito – CE. Plataforma web para acompanhamento de classificação, tabela de jogos, súmulas, artilharia, equipes e regulamento do campeonato.

---

## 📸 Preview

| Página Inicial                     | Classificação                                        | Tabela de Jogos                        |
| ---------------------------------- | ---------------------------------------------------- | -------------------------------------- |
| ![Home](./public/preview/home.png) | ![Classificação](./public/preview/classificacao.png) | ![Tabela](./public/preview/tabela.png) |

---

## 🛠 Stack

| Tecnologia           | Versão | Uso                                         |
| -------------------- | ------ | ------------------------------------------- |
| **Next.js**          | 15     | Framework principal, App Router             |
| **React**            | 19     | UI e gerenciamento de estado                |
| **TypeScript**       | 5.6    | Tipagem estática                            |
| **Tailwind CSS**     | 3.4    | Estilização utility-first                   |
| **Framer Motion**    | 11     | Animações e transições de página            |
| **Swiper.js**        | 11     | Carrosseis e galerias                       |
| **shadcn/ui**        | latest | Componentes acessíveis (Sheet, Collapsible) |
| **Moment.js**        | 2.30   | Formatação de datas em pt-BR                |
| **Axios**            | 1.7    | Requisições HTTP                            |
| **Vercel Analytics** | 1.3    | Monitoramento de uso                        |

---

## 🚀 Rodando localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/campeonato-fariasbrito.git

# Instale as dependências
npm install

# Rode em desenvolvimento (com Turbopack)
npm run dev

# Build de produção
npm run build && npm run start
```

> Acesse em `http://localhost:3000`

---

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx           # Root layout com Header, Footer e providers
│   ├── page.tsx             # Página inicial (Dashboard)
│   └── (routes)/
│       ├── tabela/          # Tabela de jogos por fase
│       ├── classificacao/   # Classificação 1ª e 2ª fase
│       ├── equipes/         # Lista de equipes e elencos
│       ├── sumulas/         # Súmulas com fotos dos jogos
│       ├── artilharia/      # Ranking de artilheiros
│       └── regulamento/     # Regulamento oficial
├── components/
│   ├── CarrouselPageMain    # Carrossel hero da página inicial
│   ├── NavOptions           # Grid de navegação por seções
│   ├── PlayersCards         # Cards de jogadores e comissão técnica
│   ├── Schedule             # Tabela de classificação
│   ├── Strikers             # Ranking de artilheiros
│   ├── Table                # Tabela de jogos por fase
│   └── WeekendPictures      # Galeria de fotos do fim de semana
├── config/
│   └── font.ts              # Configuração centralizada de fontes (next/font/local)
├── context/                 # Contextos globais (teams, players, matches)
├── data/                    # Dados estáticos (PDFs, imagens, times)
├── layouts/
│   ├── ArrowFooter          # Botão scroll-to-top
│   ├── ContainerTransition  # Animação de transição entre páginas
│   ├── Footer               # Rodapé
│   ├── Header               # Cabeçalho com nav desktop e drawer mobile
│   ├── NavBar               # Menu lateral mobile (Sheet)
│   └── Regulamento          # Conteúdo do regulamento
├── services/                # Chamadas à API (matches, teams, players, images)
└── utils/                   # Utilitários (datas, nomes, escudos)
```

---

## 🎨 Design System

O projeto foi redesenhado com uma **estética esportiva editorial**, inspirada em plataformas de design como Figma e sites de times profissionais. Princípios aplicados:

### Paleta de Cores

```css
--color-main:    /* Laranja primário — botões, headers, badges */ --color-tertiary:
  /* Verde secundário — destaques, downloads */
  --color-bgtwo: /* Cinza claro — fundo de seções alternadas */
  --color-bgone: /* Branco — fundo padrão */;
```

### Tipografia

- **Conduit ITC** — fonte display esportiva, carregada via `next/font/local` com `display: swap`
- Hierarquia com `font-black uppercase tracking-tight` para títulos e `tracking-widest opacity-40` para labels

### Padrões Visuais Recorrentes

- **Header de seção**: badge colorido + título `font-black uppercase` + linha horizontal `opacity-10`
- **Textura diagonal**: `repeating-linear-gradient(-45deg)` com `opacity-[0.04]` nos fundos `bg-main`
- **Linha de acento**: gradiente `from-tertiary via-white/20 to-tertiary/40` separando header/footer do conteúdo
- **Cards**: `rounded-xl border border-opacity-[0.08]` com `hover:-translate-y-1 hover:shadow-md`

---

## ✨ Principais Funcionalidades

### 🗓 Tabela de Jogos

- Exibe partidas organizadas por fase: 1ª Fase, 2ª Fase, Quartas, Semifinal e Final
- Placar tipográfico com destaque visual para o time vencedor (`opacity-50` no perdedor)
- Indicador de pênaltis e W.O.
- Estado "A jogar" quando a partida ainda não ocorreu

### 📊 Classificação

- Tabela semântica `<table>` com colunas: POS, TIME, PJ, V, VP, DP, D, GP, GC, SG, P
- Destaque por cor: verde (`bg-emerald-500/10`) para classificados, vermelho (`bg-red-500/10`) para eliminados
- Badge de pontos contextual por status
- Legenda visual integrada

### 👕 Equipes

- Lista ordenada com accordeon (shadcn `Collapsible`)
- Exibe jogadores e comissão técnica por equipe
- Cards de jogadores com foto em `aspect-square object-cover` e hover zoom

### 📸 Súmulas

- Agrupadas por dia de jogo
- Cada súmula mostra placar, pênaltis (quando houver), data e fotos
- Nota de correção destacada quando aplicável

### 🏆 Artilharia

- Ranking com top 3 destacado por medalhas (ouro, prata, bronze)
- Badge de gols contextual por posição

---

## 🔄 Transições de Página

Implementadas com **Framer Motion** seguindo a filosofia Apple (iOS/macOS):

```tsx
// ContainerTransition.tsx
initial:  { opacity: 0, y: 12,  scale: 0.985, filter: "blur(4px)" }
animate:  { opacity: 1, y: 0,   scale: 1,     filter: "blur(0px)" }
exit:     { opacity: 0, y: -6,  scale: 0.99,  filter: "blur(2px)" }
```

- `mode="wait"` no `AnimatePresence` garante que a página antiga saia completamente antes da nova entrar
- `key={pathName}` força o React a detectar troca de rota e disparar o ciclo exit → enter
- `cubic-bezier(0.25, 0.1, 0.25, 1)` — curva nativa do WebKit/Apple
- `willChange: "transform, opacity"` para compositing na GPU

---

## 📦 Scripts Disponíveis

```bash
npm run dev        # Desenvolvimento com Turbopack
npm run build      # Build de produção
npm run start      # Servidor de produção
npm run lint       # ESLint
npm run type-check # Verificação de tipos sem compilar
```

---

## 🔧 Configuração de Fontes

As fontes são gerenciadas centralmente em `src/config/font.ts` usando `next/font/local` (Next.js 13.2+):

```ts
import localFont from "next/font/local";

export const conduit = localFont({
  src: [
    { path: "../../public/fonts/Conduit ITC Regular.otf", weight: "400" },
    { path: "../../public/fonts/Conduit ITC Bold.otf", weight: "700" },
  ],
  variable: "--font-conduit",
  display: "swap",
  preload: true,
});
```

---

## 🌐 Deploy

O projeto está hospedado na **Vercel** com integração contínua via GitHub. Cada push na branch `main` gera um deploy automático.

- Analytics integrado via `@vercel/analytics`
- Otimização automática de imagens via `next/image`
- Font preloading automático via `next/font`

---

## 👨‍💻 Autor

**Mário Lucas** — Desenvolvedor FullStack

[![GitHub](https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=github)](https://github.com/seu-usuario)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/seu-perfil)

---

## 📄 Licença

Este projeto foi desenvolvido para fins públicos e comunitários, promovendo o esporte e a cultura local de Farias Brito – CE.
