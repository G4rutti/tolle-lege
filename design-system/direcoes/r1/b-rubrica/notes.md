família: editorial-serifado (apoio: suíço de grade na UI) · estratégia de cor: duas tintas (preto de impressão + vermelho de rubrica sobre papel)
fontes: Literata / Literata (categoria serifa de texto, UMA família para tudo)
forma: raio 0 · borda 1px (2px só em foco/erro) · sombra nenhuma · movimento: 150 ms hover/foco, 200 ms entrada, uma curva
ousadia: a regra de função "faça o vermelho, diga o preto" aplicada em todo componente, inclusive na postura da Missa e no botão de avançar.
detalhe de dono: rubrica dos missais. Postura (de pé, sentados, de joelhos) em vermelho, fala e resposta do povo em preto.

## Origem das cores
- Vermelho de rubrica, marca 800 `#7a1f26`: rubricas dos livros litúrgicos (*ruber*). Mesma cor do badge do README e da cruz do favicon claro. Clareado só nas variantes de escuro (marca 400 `#ed8483`), para ter 7,8:1 sobre a página escura.
- Tinta, neutro 900 `#1d1515`: preto de impressão, tintado a 21° (matiz do vermelho) para não parecer cinza frio de tela.
- Papel, neutro 50 `#fef9f8`: papel de missal quase branco. Sem bege, sem pergaminho, sem ouro.
- Verde `#2e6b4f`, roxo `#5e3b6b`, rosa `#c4748a`: cores litúrgicas do calendário (tempo comum, advento/quaresma, gaudete/laetare). Só como barra. O branco é o papel com fio.
- Escuro: superfícies 950 e 900 por elevação, sem sombra. Acento sobe um degrau para 400.

## Por que essa fonte tem a voz da marca
Literata foi desenhada para leitura longa em tela, com eixo óptico (o tamanho pequeno abre, o título fecha). A liturgia é texto longo e a marca fala de ler devagar. Usar uma família só, como as edições de Morgan Library e Standard Ebooks, dá unidade sem template. Não é EB Garamond, Fraunces, Playfair, Cormorant nem Inter.

## Pontos fracos que eu sei
- O botão destrutivo usa erro 700 (`#9d312c`), perto do vermelho de ação (`#7a1f26`). A distinção é só de matiz e de luminosidade. Se ficar confuso, troque por tinta sólida.
- As cores litúrgicas dependem do calendário do dia. Sem o cálculo, a barra fica com a cor errada.
- Labels em caixa-alta de 12 px com tracking largo podem ficar fracos no celular ao sol.
- Desenhei as três figuras de postura à mão (monoline). Não testei em tamanho pequeno.
- Não renderizei em navegador: o layout e o 390 px estão revisados por código, não por screenshot. Contrastes calculados (WCAG), não medidos na tela.
- As respostas litúrgicas da tela (Graças a Deus, Glória a vós, Senhor, Mistério da fé) foram escritas de memória. Conferir no missal oficial antes de publicar.
- As posturas variam por paróquia (joelhos na consagração e na comunhão). A tela diz isso, mas o conteúdo precisa de revisão litúrgica.
- `referencias/` não existia na pasta de trabalho: as referências foram lidas só do `referencias.md`, sem screenshots.
