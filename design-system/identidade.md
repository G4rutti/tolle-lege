# Identidade: Tolle Lege
versão: 1.0 · 2026-10-09 · direção: Cal e telha, variante ousada (r2/b-ousada) · base: [descoberta.md](descoberta.md), [extraido.md](extraido.md)

## Personalidade
É: acolhedor, reverente, lúcido · NÃO é: kitsch, estridente · eixos: energia 3 · formalidade 4 · era 3 · tátil 4 · densidade 3 · ousadia 7 · calor 7
Em uma frase: uma igreja de verdade com a porta aberta: cal, pedra e telha, sem enfeite que não esteja lá, e a cor do dia na porta.

## Cor
Toda cor vem do modelo 3D fixo da Igreja Matriz de Resende (`public/models/igreja-matriz-nsc.glb`) ou do calendário litúrgico.

| papel | token | origem | proporção |
|---|---|---|---|
| fundo | `color.surface.default` → primitivos.cal | `lime_plaster`, paredes | ~46% |
| superfície afundada | `color.surface.sunken` → moldura | molduras das janelas | ~14% |
| borda | `color.border.*` → barrado / granito | barrado pintado, cantaria | ~10% |
| tinta (todo texto de leitura) | `color.text.default` → madeira | portas de madeira escura | ~9% |
| invertido / noite | `color.surface.inverse` → ferro | ferro forjado das grades | ~6% |
| **ação** | `color.accent.default` → telha `#ac573b` (âncora) | `terracotta_tile`, telhado | ~4% |
| **cor do dia** | `color.dia.default` → `color.liturgia.*` | calendário litúrgico | só no arco |

Regras:
- **Telha só onde se age:** botão, link de ação, parada atual, próximo passo, postura na Missa ("De pé."). Nunca fundo de seção, nunca decoração.
- **Madeira diz, telha faz:** o que se lê/reza em madeira; o que se faz em telha (regra das rubricas do missal, com o barro da igreja).
- **A cor do dia só mora no arco:** arco do nome, portal da home, arquinho de abertura de seção, marcador da liturgia. Nunca em botão, texto corrido ou ícone.
- O app troca `color.dia.default` em runtime (`data-tempo="verde|roxo|vermelho|rosa|branco"` no `<html>`). Natal/Páscoa: portal em moldura com texto em madeira.
- `color.liturgia.vermelho` é próximo da telha: em dia vermelho, botões continuam telha e o arco fica vermelho; nunca coloque os dois lado a lado no mesmo componente.
- Contraste: 32/32 pares aprovados em claro e escuro ([build/contraste.md](build/contraste.md)).

## Tipografia
display: **Brygada 1918** (romana de inscrição, contraste baixo) · porque: a voz da pedra gravada, sem ser o Garamond do "católico tradicional" · texto/UI: **Figtree** (humanista) · mono: não há.
estilos: display (até 76px, lh 1.05), h1, h2, body (16px, lh 1.55, medida 40rem), small, label (caixa-alta 0.12em) → `font.*` nos tokens.
Regras: display e falas litúrgicas em Brygada; instrução, interface e rubrica em Figtree 600; resposta do povo em Brygada 600 (negrito), fala do padre em Brygada 400.

## Forma
raio: **o arco** (meio-círculo em cima, reto embaixo, `radius.arch`) é a forma da marca: imagens, cartão de destaque, portal, marcadores. Todo o resto é reto, 2-4px. · borda: 1px barrado; forte em granito · sombra: um fio de luz natural; no escuro vira borda · espaço: base 4px.

## Movimento
Suave, como luz que muda de hora: 400ms padrão, 600ms para a troca da cor do dia, curva de saída suave. Respeita `prefers-reduced-motion`.

## Imagem e ícones
foto: a igreja real (3D ou foto da Matriz), material e luz natural; nunca foto de Jesus/padre como hero, nunca vela com bokeh · ícones: Lucide, traço 1.5, em madeira; telha só se for ação · ilustração: planta da igreja em traço, sem personagem.

## Logo
arquivos: `LogoMark.tsx` (arco + cruz + livro) a ser redesenhado: o arco passa a ser contorno em telha (`arco-mini`) e, na versão grande, o arco cheio na cor do dia entre "Tolle" e "Lege" · respiro mínimo: altura do arco · tamanho mínimo: 24px · versões: cor (arco telha), mono madeira, negativo cal sobre ferro · fundos: cal, moldura, ferro. **Pendente:** redesenho final e arquivos SVG.

## Voz
Acolhedora, direta, sem julgamento. Usa "você", imperativo gentil, perguntas reais de quem chega, citação de santo como fecho. Proibido: jargão sem explicação, culpa, caixa-alta gritando, emoji em título, superlativo.
- antes: "PARTICIPE DA SANTA MISSA E TRANSFORME SUA VIDA!" → depois: "A Missa explicada parte por parte. Você pode só olhar."
- antes: "Ritos Iniciais da Celebração Eucarística" → depois: "Ritos iniciais · 2 de 9 — De pé. Faça o sinal da cruz."

## Movimento ousado e detalhe de dono
- ousado: **o site veste a cor do tempo litúrgico** no arco: o nome, o portal da home e cada seção mudam de verde para roxo no Advento, sozinhos.
- detalhe de dono: **a igreja de Resende** é a paleta (cal, granito, telha, madeira, ferro) e o arco da porta é a forma; **"madeira diz, telha faz"** traduz a rubrica do missal.

## Não fazemos
- Pergaminho, bege envelhecido ou papel com grão (era a cara anterior; virou default do "católico tradicional").
- Dourado brilhante, gradiente metálico, anjinhos, fonte script (lojinha de artigo religioso).
- Caixa-alta gritando, neon, cara de thumbnail; CTA de doação em caixa-alta (influencer / campanha).
- Foto de Jesus, santo ou padre como hero; padre em miniatura circular.
- Grid "imagem + rótulo + título + resumo + botão" repetido.
- Telha em área grande ou como decoração; cor do dia fora do arco.
- Cores da paleta padrão do Tailwind (`emerald-600`, `pink-400`…): cor litúrgica só pelos tokens `color.liturgia.*`.
- Hex solto no código ou nos temas de partilha: o canvas importa `build/tokens.ts`.
