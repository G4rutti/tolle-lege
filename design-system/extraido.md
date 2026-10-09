# DS extraído · Tolle Lege · 2026-10-09

**Fontes:** código `github.com/c4mpos-dev/tolle-lege` (131 arquivos em `src/`, Vite + React 19 + Tailwind v4) · site `tolle-et-lege.vercel.app` (estilos computados + capturas em 1440 e 390: home, /liturgy, /trails) · prints: nenhum enviado.
**Bruto:** [inventario-bruto.md](inventario-bruto.md) (saída do `inventario.mjs`).

**Resumo:** o projeto já tem um DS declarado e coerente (`@theme` em `src/styles/index.css`, conceito "missal antigo": pergaminho, tinta sépia, ouro), e as classes de token dominam (ink ×227, canvas ×176, line ×103). O drift está nas **bordas**: (1) os temas da imagem de compartilhar duplicam a paleta à mão com valores velhos, (2) a cor litúrgica tem 3 implementações diferentes, (3) a escala de ouro existe mas está espalhada em hex soltos, (4) os nomes de raio mentem (`rounded-2xl` = 4px), (5) ~14 sombras arbitrárias quase iguais, (6) dois idiomas de botão. Achei 5 falhas de contraste que já estão no ar.

---

## 1. O que existe

### Declarado (`@theme`)
| token | valor | usos (classes) | papel real |
|---|---|---|---|
| `ink` | `#2a221b` | 227 | texto principal **e** fundo das seções escuras (`bg-ink` em 20 arquivos) |
| `canvas` | `#faf7f0` | 176 | cartões **e** texto sobre escuro (`text-canvas/50…90`, 9 opacidades) |
| `line` | `#cfc3a8` | 103 | bordas, divisores |
| `ink-muted` | `#5f5347` | 95 | texto secundário |
| `primary` | `#a8823f` | 82 | ícones, fios, filete dos botões, rubricas sobre escuro |
| `primary-strong` | `#74561f` | 72 | texto dourado (rubricas, links), hover de botão |
| `surface` | `#ddd4bf` | 28 | seções alternadas |
| `primary-soft` | `#efe3c8` | 27 | seleção, chips, ícone em caixa |
| `marian` / `-soft` | `#3f5f86` / `#dde4ec` | 21 / 6 | área "Dúvidas" |
| `terracotta` / `-soft` | `#b5634c` / `#f0ddd4` | 13 / 5 | área "Curiosidades" |
| `sage` / `-soft` | `#56735a` / `#dfe7dc` | 10 / 4 | área "Primeiros passos" |
| `rose` / `-soft` | `#a52d47` / `#f3dde2` | 10 / 3 | Novena das Rosas |
| `cardinal` | `#7a1f26` | 9 | cruz pátea, citações (detalhe) |
| `parchment` | `#e8e1cf` | 8 (+ `body`) | fundo da página |

Fontes: **EB Garamond Variable** (serif, `font-serif` ×119, títulos e rubricas) + **Inter Variable** (sans, padrão do body). Classe de componente: `.rubric` (serif 600, 14px, caixa-alta, tracking 0.28em). Animações: `glass` 7s, `rays` 9s. Textura: grão de papel SVG a 7% sobre tudo (`body::after`, z 60). Regra declarada no CSS: ~80% papel / 15% tinta / 5% cor — confere com o site.

### No site (computado, home 1440)
- Texto: `#2a221b` ×42, `#5f5347` ×32, `#faf7f0` ×24 (+ 5 opacidades), ouro `#a8823f` ×10, `#74561f` ×8, cardinal ×6.
- Fundo: canvas ×19, ink ×7, `primary/50` ×7, primary-strong ×6, surface ×6, parchment ×5.
- Tipo: Inter 14/20 domina (×55); Garamond 500 em 48/60/72px nos títulos; Garamond 600 14px nas rubricas.
- Raio computado: `9999px` ×18, `6px` ×16, arco `9999px 9999px 0 0` ×11, `4px` ×2. Ou seja: **reto, levemente arredondado ou arco/pílula**. Nada intermediário.
- Sem modo escuro (as seções escuras são superfície invertida, não tema).

---

## 2. Drift

### 2.1 Temas de compartilhar duplicam a paleta (P1)
`features/liturgy/share/themes.ts` copia as cores à mão porque "o canvas não lê as variáveis CSS". As cópias estão desatualizadas:

| no share | token atual | ΔE OKLab |
|---|---|---|
| `#2b2622` (texto, sombras) | ink `#2a221b` | 0.016 |
| `#fbf8f3` ×6, `#fffaf6`, `#fff7f8` | canvas `#faf7f0` | 0.004 |
| `#e9dfcf` | parchment `#e8e1cf` | <0.02 |
| `#e3eaf3` / `#e5ede4` / `#f8e3e7` | marian/sage/rose-soft | <0.02 |
| `#b08a4c`, `#b08d57` (acento) | primary `#a8823f` | 0.027 |
| `#b3334e` | rose `#a52d47` | 0.033 |

Também usado em `BloomingRose.tsx`. **Correção:** o `tokens-build` gera `tokens.ts`; o canvas importa de lá. Uma fonte só.

### 2.2 Cor litúrgica em 3 lugares, 3 respostas (P1)
| cor | `liturgy/utils/colors.ts` | `liturgical-year/seasonInfo.ts` | share `themeForLiturgicalColor` |
|---|---|---|---|
| Verde | `bg-emerald-600` (Tailwind) | `sage` | `sage` |
| Roxo | `bg-purple-700` (Tailwind) | `#6d5591` | **`marian` (azul)** |
| Vermelho | `bg-red-600` (Tailwind) | `#b0463a` | `rose` |
| Rosa | `bg-pink-400` (Tailwind) | `bg-pink-300` (Tailwind) | `rose` |
| Branco | `white` + `ring-ink/20` | `primary-soft` + `ring-primary/40` | `canvas` |

É a mesma informação ("cor litúrgica de hoje") pintada diferente na Liturgia diária e no Ano litúrgico. As únicas 5 classes da paleta padrão do Tailwind no projeto inteiro estão aqui.

### 2.3 A escala de ouro existe, mas espalhada
Os hex soltos formam uma rampa quase perfeita em luminosidade:

| L (OKLCH) | hex | onde |
|---|---|---|
| 91.8 | `#efe3c8` | token `primary-soft` |
| 80.9 | `#d8bd88` | Hero, SaintOfTheDayCard (gradiente) |
| 71.8 | `#c59d55` | Resplendor (SVG) |
| 66 / 65.6 | `#b08d57`, `#b08a4c` | share, gradiente |
| 63.0 | `#a8823f` | token `primary` |
| 54.5 | `#8a6a35` ×5 | Hero (anel), SaintOfTheDayCard, share |
| 47.4 | `#74561f` | token `primary-strong` |
| 40.7 | `#5c4522` | share (fundo "Ouro") |

### 2.4 Os nomes de raio mentem
O `@theme` redefine `lg`=3px, `xl`=4px, `2xl`=4px, `3xl`=6px. No código: `rounded` ×26 (4px), `rounded-xl` ×14 (4px), `rounded-2xl` ×32 (4px), `rounded-3xl` ×28 (6px), `rounded-lg` ×3 (3px). **Três nomes pro mesmo 4px**, e quem lê `rounded-3xl` espera um card bem redondo. Mais: `rounded-full` ×83, arcos `rounded-t-full` (assinatura: janelas de igreja), e 2 avulsos (`rounded-t-[2.5rem]`, `rounded-[60%_0_60%_0]` = pétala, ilustração).

### 2.5 Sombras: 14 arbitrárias + 6 do Tailwind
- "Cartão levantado", 5 versões quase iguais: `0 18px 40px -20px`, `0 18px 40px -28px`, `0 20px 50px -15px`, `0 20px 50px -20px`, `0 24px 60px -30px`, com tinta **`rgb(43 38 34)` (ink velho) ou `rgb(42 34 27)` (ink atual)** misturados.
- `shadow-lg` ×3, `shadow-md`, `shadow-sm`, `shadow-2xl`: sombra preta do Tailwind sobre papel sépia, destoa das outras.
- Específicas com papel: brilho dourado (`138 106 53 / .3`), brilho rosa da novena (`179 51 78 / .55`), **filete interno dos botões** (`inset 0 0 0 3px <fundo>, inset 0 0 0 4px ouro/.7`) e o anel do medalhão (`0 0 0 6px parchment, 0 0 0 7px ouro/.6, inset 0 0 40px …`).

### 2.6 Dois idiomas de botão
- **CTA "missal"** (`ButtonLink` primary/light): reto, caixa-alta, tracking 0.14em, fundo ink, filete dourado interno. É a assinatura visual do site.
- **Pílula** (`rounded-full bg-ink` / `bg-canvas`, ~40 ocorrências entre botões, chips e badges): "Criar imagem", "Começar a visita", navegação de data da liturgia.

Nenhuma regra diz quando usar qual. Visto lado a lado na home (Visita guiada → pílula, logo abaixo de "Ver a Missa passo a passo" → reto).

### 2.7 Tipografia
- Escala: os 12 passos padrão do Tailwind estão em uso (xs ×64 … 8xl ×1). Corpo: `sm` ×120 e `xs` ×64. Títulos de seção: `text-4xl sm:text-5xl`. Não precisa de escala nova, precisa de **papéis**.
- Micro-texto abaixo de 12px: `text-[0.65rem]` ×2 (10.4px), `text-[0.6rem]` (9.6px), `text-[0.55rem]` (8.8px).
- Duas "rubricas": `.rubric` (serif, 0.28em) e um rótulo sans em caixa-alta escrito à mão 20 vezes (`text-xs font-semibold tracking-[0.2em] uppercase`). Botões usam `0.14em` ×2 e `0.15em` ×2: mesma intenção.
- Entrelinha: `leading-relaxed` ×58 no corpo; `snug` ×9 nos títulos de card. Consistente.

### 2.8 O resto está bem
- Ritmo de seção: `py-16 sm:py-24` (×31/25) e `py-24 sm:py-32` (×6). Container `max-w-7xl` ×29.
- Movimento: ease `cubic-bezier(0.22, 1, 0.36, 1)` (constante `EASE`, ×4); durações `300` ×12, `500` ×5, `700`, e em JS 0.15/0.2/0.25/0.3/0.6/0.7/1/1.8/3.6s.
- z-index: 10 ×9, 40, 50, 60 (grão). Só 4 valores.

### 2.9 Sem papel de UI (não vira token semântico)
`#ffcf94`, `#f1d9a8`, `#dddddd`, `#ffffff` (partículas/3D), `#d9667d`, `#c9465f`, `#6f9173` (pétalas e folha da `BloomingRose`), `rgb(60 40 15 / .45)` (vinheta). Ficam como `illustration.*` no primitivo ou locais no componente.

---

## 3. Bugs de acessibilidade que já estão no ar

| # | par | WCAG | onde | correção proposta |
|---|---|---|---|---|
| P1 | ouro `#a8823f` em rubrica 14px sobre ink | 4.42 | `Footer.tsx:29`, `MassPreview.tsx:19`, `ExploreSection.tsx:31,66` | `gold-400 #c59d55` → **6.20** |
| P1 | terracotta sobre terracotta-soft (badge "ajoelhar") | 3.30 | `PostureBadge.tsx:7`, `SacramentCard.tsx:9` | texto `terracotta-700 #8f4a38` → **4.99** |
| P1 | terracotta 12px sobre canvas | 4.04 | `ShareImageDialog.tsx:182` | `terracotta-700` → **6.12** |
| P1 | sage sobre sage-soft (badges das trilhas) | 4.15 | `trails/tones.ts`, cartões | texto `sage-700 #3f5842` → **6.18** |
| P1 | canvas/75–80 sobre cartão terracotta ("Toque para descobrir", rubrica) | 2.99–3.18 | `CuriosityCard.tsx:37,43` | fundo `terracotta-700` (canvas 6.12) ou texto sem opacidade |
| P2 | texto de 8.8–10.4px | n/a | `ReadingView.tsx:47`, `ShareDialogFrame.tsx:152`, `TodayGospelCard.tsx:25`, `LiturgicalYearPage.tsx:35` | mínimo `xs` (12px) |
| P2 | ouro `#a8823f` como ícone com significado sobre parchment | 2.72 | ícones de navegação | ok se decorativo; senão `gold-700` |

Passam: ink em tudo (≥10.6), ink-muted (≥5.06), primary-strong (≥4.60, o projeto já segue a própria regra "use -strong pra texto"), cardinal, marian, rose, canvas sobre ink até /50 (4.72).

---

## 4. Proposta de tokens

**Âncora de marca:** `gold-500 #a8823f` · origem: *extraído de `src/styles/index.css` (`--color-primary`) e de tolle-et-lege.vercel.app; usado no filete dos botões, fios de seção, ícones, partículas do hero.* É a cor mais característica, não a mais usada (essa é o ink).

### 4.1 Primitivos (valores existentes; nada inventado)
```
paper   50 #faf7f0 · 100 #e8e1cf · 200 #ddd4bf · 300 #cfc3a8
sepia  600 #5f5347 · 900 #2a221b · 950 #171412
gold   100 #efe3c8 · 300 #d8bd88 · 400 #c59d55 · 500 #a8823f · 600 #8a6a35 · 700 #74561f · 800 #5c4522
cardinal 700 #7a1f26
marian 100 #dde4ec · 500 #4a6b94 · 600 #3f5f86 · 700 #2f4764
terracotta 100 #f0ddd4 · 400 #c9725b · 500 #b5634c · 700 #8f4a38
sage   100 #dfe7dc · 600 #56735a · 700 #3f5842
rose   100 #f3dde2 · 400 #d9667d · 600 #a52d47
liturgical purple #6d5591 · red #b0463a
```
Sem passos vazios: só entra o que tem uso.

### 4.2 Semânticos
| token | → primitivo | substitui |
|---|---|---|
| `bg.page` | paper-100 | `bg-parchment` |
| `bg.surface` | paper-50 | `bg-canvas` |
| `bg.surface-alt` | paper-200 | `bg-surface` |
| `bg.inverse` | sepia-900 | `bg-ink` (seções escuras, footer) |
| `text.default` | sepia-900 | `text-ink`, `text-ink/80`, `/85` |
| `text.muted` | sepia-600 | `text-ink-muted` |
| `text.accent` | gold-700 | `text-primary-strong` |
| `text.on-inverse` | paper-50 | `text-canvas` sobre ink |
| `text.on-inverse-muted` | paper-50 @ 70% | `text-canvas/50…/90` (9 opacidades → 1) |
| `text.accent-on-inverse` | gold-400 | `text-primary` sobre ink (conserta 4.42) |
| `border.default` | paper-300 | `border-line` |
| `border.accent` | gold-500 @ 50% | `border-primary/40…/60` |
| `accent.default` | gold-500 | `primary` (ícone, fio, filete) |
| `accent.strong` | gold-700 | `bg-primary-strong`, hover |
| `accent.soft` | gold-100 | `primary-soft`, `::selection` |
| `mark` | cardinal-700 | `cardinal` |
| `area.{duvidas,curiosidades,passos,novena}.{solid,soft,text}` | marian / terracotta / sage / rose; `text` = passo 600–700 | `toneClasses` (2 arquivos) |
| `liturgical.{verde,roxo,vermelho,rosa,branco}` | sage-600 / purple / red / rose-400 / paper-50 + ring `border.accent` | os 3 mapas da §2.2 |

### 4.3 Tipo, forma, sombra, movimento
- **Papéis tipográficos:** `display` (serif 500, 60/72/96) · `h1` (serif 500, 48→60) · `h2` (serif 500, 36→48, tracking-tight) · `h3` (serif 500, 24, snug) · `h4` (serif 500, 20) · `lead` (sans 18/1.625) · `body` (sans 16/1.625) · `body-sm` (sans 14/20) · `caption` (sans 12/16) · `rubric` (serif 600 14, caps, 0.28em) · `label` (sans 600 12, caps, 0.2em) · `button` (sans 600 14, caps, 0.15em).
- **Raio:** `sm` 3px · `md` 4px · `lg` 6px · `arch` 9999px 9999px 0 0 · `pill` 9999px.
- **Sombra:** `raised` = 0 18px 40px -20px sepia-900/35 · `floating` = 0 20px 50px -20px sepia-900/35 · `glow-gold` · `glow-rose` · componente `button.rule` (filete).
- **Espaço:** `section.y` = 4rem → 6rem (sm) · `section.y-lg` = 6rem → 8rem · `container` = 80rem.
- **Movimento:** `ease.out` cubic-bezier(0.22,1,0.36,1) · `fast` 200ms · `base` 300ms · `slow` 600ms · `slower` 1000ms · `ambient` 7s/9s.
- **z:** `raised` 10 · `dropdown` 40 · `header` 50 · `grain` 60.

### 4.4 Mapa antigo → novo (codemod)
| antigo | novo |
|---|---|
| `#2b2622`, `rgb(43 38 34)` | `sepia-900` |
| `#fbf8f3`, `#fffaf6`, `#fff7f8` | `paper-50` |
| `#e9dfcf` | `paper-100` |
| `#b08a4c`, `#b08d57` | `gold-500` |
| `#8a6a35` | `gold-600` |
| `#d8bd88` / `#c59d55` / `#5c4522` | `gold-300` / `gold-400` / `gold-800` |
| `#7a1f35`, `#7a1a33` (ΔE 0.022 do cardinal) | `cardinal-700` *(confirmar)* |
| `#b3334e` | `rose-600` |
| `#e3eaf3` / `#e5ede4` / `#f8e3e7` | `marian-100` / `sage-100` / `rose-100` |
| `#5f7f63` (share) | `sage-600` |
| `#6b625a` (share muted) | `sepia-600` |
| `bg-emerald-600` | `liturgical.verde` |
| `bg-purple-700`, `bg-[#6d5591]` | `liturgical.roxo` |
| `bg-red-600`, `bg-[#b0463a]` | `liturgical.vermelho` |
| `bg-pink-300`, `bg-pink-400` | `liturgical.rosa` |
| `rounded`, `rounded-xl`, `rounded-2xl` | `rounded-md` (4px) |
| `rounded-3xl` | `rounded-lg` (6px) |
| `rounded-lg` (3px) | `rounded-sm` |
| `rounded-t-full` | `rounded-arch` |
| `shadow-[0_18px_40px_-20/-28px…]` | `shadow-raised` |
| `shadow-[0_20px_50px_-15/-20px…]`, `shadow-[0_24px_60px_-30px…]`, `shadow-lg/2xl` | `shadow-floating` |
| `shadow-sm/md` | `shadow-raised` |
| `text-[0.55rem]`, `[0.6rem]`, `[0.65rem]` | `text-xs` |
| `text-xs font-semibold tracking-[0.2em] uppercase` | `.label` |
| `tracking-[0.14em]`, `[0.15em]` | `tracking-button` (0.15em) |
| `text-canvas/50…/90` sobre ink | `text-on-inverse-muted` |
| `text-primary` em texto sobre ink | `text-accent-on-inverse` |
| `share/themes.ts` (hex) | import de `tokens.ts` gerado |

---

## 5. Decisões em aberto
1. **Botão:** manter os dois com papel explícito (reto com filete = CTA de navegação; pílula = ação dentro de ferramenta: data, criar imagem) ou unificar no reto?
2. **Roxo litúrgico no share** hoje cai no tema azul `marian`. Criar tema "Roxo" com `liturgical.purple`?
3. **Rosa litúrgica:** hoje pink-300/400 do Tailwind. Proposta: `rose-400 #d9667d` (já existe na novena).
4. **`#7a1f35` → cardinal:** ΔE 0.022, no limite. Fundir ou manter um vinho próprio da novena?

---

*Método:* `inventario.mjs` (cópia local com 1 correção: 4 cores em template literal tipo `rgba(176, ${x}, …)` derrubavam o script; foram descartadas) + contagem de classes de token (o inventário só pega cor literal) + snippet de estilo computado no site. O Playwright MCP do ds-forge não conectou (timeout); usei o browser embutido. As capturas foram analisadas mas não salvas em disco (a ferramenta não grava). Contraste: `lib/color.mjs` (WCAG 2 + APCA).
