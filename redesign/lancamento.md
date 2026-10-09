# Lançamento: checklist do site todo
data: 2026-10-09 · alvo: prévia da Vercel da branch `redesign/cal-e-telha`

| # | item | status | evidência |
|---|---|---|---|
| 1 | title único por página | ok | `novo/inventario.md` (19 títulos distintos) |
| 2 | meta description por página | ok | `seo/pages.ts` gera HTML por rota no build |
| 3 | um H1 legível por página | ok | home agora "Tolle Lege" (antes "T olle L ege") |
| 4 | canonical | ok | `index.html` + plugin por página |
| 5 | Open Graph + imagem 1200×630 | ok | `public/og-image.jpg` (arte antiga, ver pendências) |
| 6 | sitemap.xml e robots.txt | ok | gerados no build |
| 7 | schema | ok | WebSite (home), FAQPage (/faq) |
| 8 | 404 | ok | `NotFoundPage` |
| 9 | URLs preservadas | ok | `mapa-urls.csv` 19 × manter, `qa/paridade.md` |
| 10 | próximo passo na home | ok | portal "Ler a liturgia de hoje" logo após o hero; "Começar a jornada" no hero |
| 11 | contraste AA | ok | 32/32 pares nos tokens; correções do extraido.md §3 aplicadas |
| 12 | sem microtexto < 12px | ok | ds-lint |
| 13 | mobile sem rolagem lateral | ok | 15 rotas em 390px |
| 14 | reduzir movimento | ok | `MotionConfig reducedMotion="user"`, CSS `prefers-reduced-motion` |
| 15 | fontes com display=swap + preconnect | ok | `index.html` |
| 16 | analytics | ok | Vercel Analytics |
| 17 | favicon / PWA | parcial | favicon.svg em cal/madeira/telha; PNGs do PWA ainda na arte antiga |
| 18 | confiança / quem somos | n/a | site pessoal, remete à paróquia em todas as páginas |
| 19 | performance da home | atenção | Three.js + .glb 1,6 MB, igual ao atual (intocável) |
| 20 | links quebrados | ok | crawl do novo: 0 problemas |

## Pendências
- Refazer os PNGs do PWA e a og-image com a identidade nova (arco + cal + telha).
