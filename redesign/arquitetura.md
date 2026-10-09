# Arquitetura do site novo
data: 2026-10-09 · stack: `codigo` (o próprio app React/Vite, branch `redesign/cal-e-telha`) · host: Vercel

## Decisão: mesmas rotas, mesma navegação
O site já tem uma arquitetura boa (diagnóstico: navegação 7, conteúdo 8) e URLs indexadas. Nada muda de endereço: `mapa-urls.csv` é 100% `manter`. O redesign é de moldes (layout), identidade e próximo passo, não de árvore.

## Sitemap (igual ao atual)
- `/` home
- Começar: `/trails` (+ `/trails/:id` ×4), `/faq`, `/curiosities`
- Aprender: `/tour`, `/mass`, `/trinity`, `/mary`, `/sacraments`, `/liturgical-year`, `/glossary`
- Rezar: `/liturgy`, `/prayers`, `/rose-novena`, `/confession`

## Moldes
| molde | páginas | o que muda |
|---|---|---|
| home | `/` | hero mantém as partículas + nome; logo abaixo o **portal da cor do dia** com próximo passo (liturgia) e as trilhas como primeira escolha; seções abrem com arquinho da cor do dia |
| página de conteúdo (PageHeader) | 11 internas | cabeçalho com arco (foto/vitral dentro de um arco), rubrica em Figtree, ações em telha |
| ferramenta | `/liturgy`, `/prayers`, `/rose-novena` | coluna de leitura, rubrica em telha, fala em madeira |
| trilha | `/trails/:id` | passos numerados, botão "Próximo passo" em telha |

## Navegação
Header e footer atuais (gerados de `navGroups`) ficam.

## SEO que entra
- H1 da home legível ("Tolle Lege") em vez de letras soltas.
- JSON-LD `WebSite` na home e `FAQPage` em `/faq`.
