# Descoberta: Tolle Lege
data: 2026-10-09 · modo: 60 marca / 40 produto · ponto de partida: [extraido.md](extraido.md)

## O que é
Um caminho simples para conhecer o que a Igreja Católica crê, celebra e vive, no ritmo de cada um (README). · público: quem está chegando à fé, quem está voltando depois de um tempo, curiosos sem compromisso (README, trilhas "Não sou batizado" / "Sou batizado e quero voltar") · onde aparece: site + PWA instalável (mobile primeiro), imagens de partilha 1080×1920/1350/1080 para Instagram e WhatsApp, prévia OG; impresso não está no escopo.

Por que 60/40: é um site editorial de formação (marca), mas tem ferramentas de uso diário: liturgia com leitura longa, terço guiado conta a conta, progresso de trilhas, gerador de imagem, visita 3D (produto). A tipografia de leitura e os estados das ferramentas pesam tanto quanto a expressão.

## Motivo da evolução (usuário)
- **Falta assinatura própria:** pergaminho + Garamond + ouro é o "católico tradicional" de sempre.
- **Quer ver alternativas:** leque com 1 fiel + 2 médias + 1 ousada.

## Fixo (não muda)
- **A igreja 3D** (`public/models/igreja-matriz-nsc.glb`, inspirada na Igreja Matriz de Resende, RJ). As direções mudam o entorno, não o modelo.
- logo: existe (`LogoMark.tsx`: arco romano + cruz + livro aberto), **não é fixo**: pode ser redesenhado ou refinado.
- cores obrigatórias: nenhuma.
- fontes: nenhuma licenciada/obrigatória (EB Garamond e Inter são OFL, livres para trocar).
- conteúdo e nome: fixos.

## Personalidade
É: **acolhedor, reverente, lúcido** · NÃO é: **kitsch, estridente**

| eixo | nota | porque (evidência) |
|---|---|---|
| Energia | 3 | "no seu ritmo" (tagline); hero de partículas lenta; animações ambiente de 7s e 9s; respeita "reduzir movimento". Mas convida a agir (trilhas, "Começar"), não é sonolento. |
| Formalidade | 4 | Trata por "você", "Não existe pergunta boba", "Sem compromisso"; ao mesmo tempo cita Agostinho, usa latim (*Ad maiorem Dei gloriam*) e remete ao padre e à paróquia. Próximo com reverência. |
| Era | 3 | A marca é atemporal (nome do séc. IV, liturgia, calendário), mas o produto é de hoje (PWA, 3D, imagem pra stories). Conceito clássico, execução contemporânea. |
| Tátil ↔ digital | 4 | Hoje o site é muito tátil (grão de papel, pergaminho, molduras). O produto real é híbrido: matéria (cal, pedra, vidro, papel) renderizada em tela, com 3D e partículas. |
| Densidade | 3 | Seções com `py-24/32`, texto em `max-w-2xl`, um assunto por página. Exceção: a leitura da liturgia é texto longo, precisa de coluna de leitura de verdade. |
| Ousadia | atual 4 → alvo 6-7 | O usuário marcou "falta assinatura própria". A identidade atual é correta e discreta, mas não é reconhecível fora do site. A direção fiel fica em 4; as médias em 6; a ousada em 8+. |
| Calor | 7 | Voz acolhedora ("Deus chama você pelo nome", "a porta está aberta"); paleta quente; o site se apaga para mandar a pessoa a uma paróquia real. |

## Evidências de cor (candidatas, cada uma com origem)
**Do que já existe (ver extraido.md):**
- `#a8823f` ouro velho · origem: douramento de missal e altar; hoje é o `primary`, filete dos botões e logo no site. Risco: escorregar para o dourado kitsch (anti-referência). Se ficar, é fosco e em fio, nunca metálico nem em gradiente.
- `#7a1f26` vermelho cardinalício · origem: **rubricas dos livros litúrgicos** (rubrica vem de *ruber*, vermelho); é a cor do badge do README e da cruz do favicon claro. Hoje o site chama os sobretítulos de "rubric" mas pinta de ouro: a rubrica de verdade é vermelha.
- `#e8e1cf` / `#faf7f0` pergaminho e papel, `#2a221b` tinta sépia · origem: o livro.

**Da igreja 3D (o único elemento fixo), materiais do `.glb` (aprox., linear → sRGB):**
- `#f6f6f3` cal (`lime_plaster`), paredes
- `#d7dbde` molduras · `#b2bcc4` barrado pintado · `#8b9298` cantaria de granito
- `#ac573b` telha de barro (`terracotta_tile`), quase o token `terracotta #b5634c` atual
- `#4b3123` madeira escura (portas) · `#2f2e2d` ferro forjado · `#303742` vitral
- `#5f7c41` / `#415a30` gramado e folhagem

Achado: **a igreja é branca de cal, cinza de granito e telha de barro**, uma paleta fria e clara de igreja colonial brasileira. O site em volta dela é pergaminho sépia, quente e escuro. A igreja fixa e o site não se parecem; uma direção pode partir dela.

**Do conteúdo:**
- Cores litúrgicas (verde, roxo, vermelho, rosa, branco/dourado) · origem: calendário litúrgico, que o site **já calcula** (`liturgical-year/calendar.ts`). Pode virar sistema: o site muda de cor com o tempo litúrgico do dia.
- Vitral (azul mariano `#3f5f86`, terracota, sálvia) · origem: `StainedGlassWindow.tsx`.

## Voz (como fala)
- **Adjetivos:** acolhedora, direta, sem julgamento.
- **Usa:** "você", imperativo gentil ("Escolha", "Leia as de hoje e reze junto", "Procure uma paróquia"), perguntas reais de quem chega ("Preciso ser batizado para ir à Missa?"), citação de santo como fecho.
- **Evita:** jargão eclesial sem explicação, tom de cobrança ou culpa, caixa-alta gritando, emoji em título, superlativo.

## O clichê do ramo (fugir)
Dado pelo usuário:
- **Lojinha de artigo religioso:** dourado brilhante, anjinhos, fonte script, degradê, brilho.
- **Influencer católico:** caixa-alta gritando, contraste neon, cara de thumbnail.

Observado nos concorrentes ([referencias.md](referencias.md)):
- Foto de Jesus, santo ou padre no hero; padre em miniatura circular (Hallow, Canção Nova).
- Ouro como atalho de "sagrado" (Ascension justifica; o problema é a forma kitsch, não a cor).
- Grid "imagem + rótulo + título + resumo + botão" idêntico em Formed, Aleteia, Paulo Ricardo, Catholic Answers. O Tolle Lege hoje **não** cai nisso: cartões sem foto, cor por área.
- Mockup de iPhone + badges de loja.
- CTA de doação em caixa-alta (Canção Nova).

O que **ninguém** do ramo faz: cor como código de sistema (Fitzcarraldo, Penguin), o vermelho de rubrica como regra de função, a paleta de uma igreja real.

O padrão atual (pergaminho + Garamond + ouro) não é clichê ruim, mas é o **default do "católico tradicional"**: é por isso que falta assinatura.

## O detalhe de dono
**"Faça o vermelho, diga o preto."** Nos missais, o que se *diz* vem impresso em preto e o que se *faz* (de pé, ajoelhe-se, o sacerdote eleva a hóstia) vem em vermelho: são as rubricas. O Tolle Lege já explica a Missa com a postura de cada parte (`PostureBadge`: de pé / sentado / de joelhos). Isso pode virar a regra de cor do sistema inteiro: **preto = o que se lê, vermelho = o que se faz** (instrução, ação, botão, próximo passo). É de quem conhece liturgia, ninguém de fora inventaria, e casa com o nome ("toma e lê").

Segundo candidato: **a igreja real de Resende**, cal + granito + telha, como paleta e como forma (o arco da porta já está no logo).

## Decisões tomadas sem perguntar
- Público e canais tirados do README e das trilhas, sem perguntar (decidido).
- Modo 60/40 marca/produto (decidido).
- Toda direção prevê **modo escuro** para leitura à noite (liturgia, orações antes de dormir); o favicon já tem versão escura (decidido).
- As cores litúrgicas são **dado**, não decoração: valem em todas as direções, com um token por cor (decidido; resolve o drift §2.2 do extraido.md).
- Leque: 1 fiel (consolidação do extraido.md), 2 médias, 1 ousada (usuário).
- A logo pode ser redesenhada, mas o arco + cruz + livro fica como ponto de partida (decidido).
