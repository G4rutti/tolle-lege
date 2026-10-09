# Diagnóstico: tolle-et-lege.vercel.app
data: 2026-10-09 · base: crawl de 19 páginas (`atual/inventario.md`), estilos computados, código do repo · DS extraído: [../design-system/extraido.md](../design-system/extraido.md)

| dimensão | nota | evidência |
|---|---|---|
| Identidade | 6 | Coerente ("missal antigo") mas é o default do "católico tradicional": pergaminho + Garamond + ouro. Drift nas bordas (3 implementações da cor litúrgica, share com hex velhos). |
| Clareza | 7 | Tagline clara ("Uma introdução à fé católica, no seu ritmo"), mas o hero leva 210dvh de rolagem de partículas antes da primeira ação. |
| Conversão (próximo passo) | 5 | Não há CTA na primeira dobra; "Escolher minha trilha" só no fim da home. Dois idiomas de botão (reto com filete × pílula) sem regra. |
| Conteúdo | 8 | 15 mil palavras próprias, voz acolhedora e precisa; trilhas por perfil; liturgia diária via API. |
| Confiança | 7 | Remete à paróquia e ao padre em todas as páginas; créditos e fonte da liturgia citados. Sem "quem fez" nem contato. |
| Navegação | 7 | Menu em 3 grupos (Começar / Aprender / Rezar), rodapé completo. O crawler não viu os links do rodapé sem JS. |
| Mobile | 7 | Funciona, sem rolagem lateral; hero de partículas pesado e longo no celular. |
| SEO técnico | 5 | H1 da home vira "T olle L ege" (letras quebradas em spans); nenhum schema; SPA com HTML por página gerado no build (bom). |
| Performance e acessibilidade | 6 | Three.js + HDRI + .glb de 1,6 MB na home; 5 falhas de contraste e microtexto de 8.8px (extraido.md §3, já corrigidos na branch do DS). |

**Média: 6,4**

## Patrimônio (preservar)
- As 19 URLs (rotas em inglês, sitemap no ar) e os títulos por página.
- O conteúdo inteiro (data.ts por feature) e a voz.
- A igreja 3D da Matriz de Resende (fixo, decisão do dono) e o hero de partículas "a palavra edifica a igreja".
- O nome, a citação de Agostinho, o logo arco + cruz + livro.
- As ferramentas: trilhas com progresso, terço guiado, liturgia diária, gerador de imagem, ano litúrgico calculado.

## Dívida (pagar)
- Identidade sem assinatura → resolvida pela identidade Cal e telha (design-system/identidade.md).
- Primeira ação tarda: falta um próximo passo visível já na home.
- H1 quebrado e sem schema (WebSite, BreadcrumbList, FAQPage nas dúvidas).
- Botões em dois idiomas; cor de ação espalhada por ícone e fio.
