família: cor chapada expressiva / pôster editorial contemporâneo (apoio: editorial-serifado) · estratégia de cor: o site veste a cor do tempo litúrgico
fontes: Bodoni Moda / Geist (categoria serifa display de alto contraste com itálico + grotesca neutra)
forma: raio 0 em tudo · borda 1px (2px em erro e no celular) · sombra nenhuma · movimento: troca de cor do dia 600ms, UI 160ms, entrada do arco 600ms
ousadia: a cor da página inteira muda com o calendário da Igreja; o arco da abertura corta o título
detalhe de dono: o rótulo do tempo litúrgico vive dentro da abertura do arco ("Tempo Comum · verde")

## Origem de cada cor
- verde Tempo Comum: #3f5a46, aprofundado da sálvia #56735a (âncora do palette.mjs). Cor litúrgica do Tempo Comum.
- roxo Advento/Quaresma: #6d5591. Paramentos de espera e penitência.
- vermelho Pentecostes/Paixão: #b0463a. Espírito e martírio; mesma origem da rubrica (ruber).
- rosa Gaudete/Laetare: #9c4a6b. Alegria no meio da espera (3º Advento, 4º Quaresma).
- dourado Natal/Páscoa: #c9a23f, clareado do ouro velho #a8823f da descoberta para ter contraste com tinta escura (7.29:1). O branco do tempo entra como superfície de card.
- neutro: oklch(98.4% 0.002 145.6), tingido na matiz da marca, croma ≤ .003.
- acento de UI: o próprio verde aprofundado (#3f5a46), 7.13:1 contra accent.on.
- escuro: superfícies 17.7 / 22.0 / 15.0 de luminosidade; texto 95.7; acento #8fb497 (8.22:1 contra o fundo).

## Por que essa fonte tem a voz da marca
Bodoni Moda tem contraste alto e itálico expressivo: lê como página de missal impressa e como cartaz ao mesmo tempo, e funciona em 18rem sem perder o desenho. A grotesca Geist é neutra e fria, deixa o texto longo e os números de UI quietos. Nenhuma das duas está na lista do cemitério.

## Pontos fracos que eu sei
- Abertura do arco é oclusão (mesma cor do fundo por cima do título), não recorte real nos glifos. Lê como corte, mas não é máscara tipográfica.
- No escuro, as cinco cores litúrgicas ficam iguais às do claro (só o chrome muda). Isso é decisão, mas o bloco de cor não "escurece" para o modo noturno.
- Natal/Páscoa usa dourado como fundo, não o branco; o "branco e dourado" do tempo ficou só nas superfícies de card.
- tokens.json só tem o que o palette.mjs gerou (marca, neutro, semânticas); os tokens de liturgia e de componente estão no :root do HTML, não no tokens.json. O ds-lint rodou sem tokens-build, então só as regras gerais contaram.
- Pasta design-system/referencias/ não existe neste workspace; não abri screenshots.
