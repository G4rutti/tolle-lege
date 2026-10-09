família: material / arquitetura colonial brasileira (apoio: humanista contemporâneo) · estratégia de cor: materiais da igreja
fontes: Brygada 1918 / Figtree (categoria serif de texto sóbria para display, humanista para texto)
forma: raio 2–4 px, arco da porta (topo semicircular, base reta) como forma-assinatura · borda 1 px (2 px em destaque) · sombra: fio de luz natural mínimo, no escuro vira borda · movimento: 400 ms, curva cubic-bezier(.2,.6,.2,1), luz que muda
ousadia: o site deixa de ser pergaminho sépia e passa a ter a cal, o granito, a telha e a madeira da igreja real, com o arco como recorte de tudo.
detalhe de dono: "telha só onde se age": a telha aparece no botão de ação, na parada atual e no próximo passo, e em mais nenhum lugar.

## origem de cada cor (modelo 3D fixo, public/models/igreja-matriz-nsc.glb)
- cal #f6f6f3: lime_plaster, paredes. Fundo.
- moldura #d7dbde: molduras. Superfície afundada.
- granito #8b9298: cantaria. Borda forte. Não serve para texto sobre cal (2,9:1).
- barrado #b2bcc4: barrado pintado. Linhas e bordas.
- telha #ac573b: terracotta_tile. Acento de ação. Escala do palette.mjs (âncora em 600).
- madeira #4b3123: portas. Tinta (11:1 sobre cal).
- ferro #2f2e2d: grades. Base da noite.
- Escuro ("noite na igreja"): madeira #241a14, ferro #3a3937, cal #ece9e2, telha clarificada #e8917a. Derivados da mesma origem.
- Granito escuro #565d62 é derivado (granito escurecido para texto secundário AA). Erro #943c35 vem do palette.mjs (erro-700), não do modelo.

## por que essa fonte tem a voz da marca
Brygada 1918 é uma romana de contraste baixo, de texto impresso, com inscrição de pedra e livro antigo na memória. Combina com a cantaria e com o missal sem parecer Garamond ou Playfair. Figtree é humanista de uso, legível em tela pequena. Par de estrutura diferente (romana + humanista).

## pontos fracos que eu sei
- Não renderizei em navegador (sem captura), então o mobile em 390 px foi verificado só por CSS. Vale abrir e olhar a tela de produto e a peça.
- A planta é um desenho simplificado, não a planta real da Matriz. A posição do ambão e da pia é ilustrativa.
- Telha como ação é regra forte: em tela cheia de botões de ação ela pode virar "acento em todo lugar". Vigiar.
- A peça usa São Francisco de Assis como exemplo fixo, não o calendário litúrgico.
