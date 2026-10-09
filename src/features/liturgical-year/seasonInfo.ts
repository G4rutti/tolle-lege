import type { LiturgicalColor, SeasonId } from './calendar'

export const seasonDescriptions: Record<SeasonId, string> = {
  advent:
    'Cerca de quatro semanas de espera e preparação para o Natal. Tempo de esperança e vigilância: esperamos a vinda de Jesus, no presépio e no fim dos tempos.',
  christmas:
    'Celebra o nascimento de Jesus e sua manifestação ao mundo, da noite de Natal até o Batismo do Senhor.',
  'ordinary-1':
    'Acompanha os primeiros passos da vida pública de Jesus. “Comum” vem de “contado”: as semanas são numeradas, não é um tempo sem importância.',
  lent: 'Quarenta dias de oração, jejum e caridade para preparar o coração para a Páscoa. Começa na Quarta-feira de Cinzas.',
  triduum:
    'Os três dias mais importantes do ano: a Ceia do Senhor, a Paixão na Sexta-feira Santa e a grande Vigília da Ressurreição.',
  easter:
    'Cinquenta dias de alegria pela Ressurreição, vividos como um único grande domingo, até Pentecostes.',
  'ordinary-2':
    'O tempo mais longo do ano: a vida cristã no dia a dia, até a festa de Cristo Rei, que encerra o ano litúrgico.',
}

/** Cores de desenho (SVG) e classes literais para o Tailwind. */
export const colorStyles: Record<LiturgicalColor, { fill: string; label: string; swatch: string }> = {
  purple: { fill: 'var(--color-liturgia-roxo)', label: 'Roxo', swatch: 'bg-liturgia-roxo' },
  white: { fill: 'var(--color-liturgia-branco)', label: 'Branco', swatch: 'bg-liturgia-branco ring-1 ring-ink/20' },
  green: { fill: 'var(--color-liturgia-verde)', label: 'Verde', swatch: 'bg-liturgia-verde' },
  red: { fill: 'var(--color-liturgia-vermelho)', label: 'Vermelho', swatch: 'bg-liturgia-vermelho' },
}

export const colorMeanings = [
  { swatch: 'bg-liturgia-verde', name: 'Verde', meaning: 'Esperança e vida que cresce. Usado no Tempo Comum.' },
  { swatch: 'bg-liturgia-roxo', name: 'Roxo', meaning: 'Penitência e preparação. Advento e Quaresma.' },
  { swatch: 'bg-liturgia-branco ring-1 ring-ink/20', name: 'Branco', meaning: 'Alegria, festa e pureza. Natal, Páscoa e festas de Nossa Senhora.' },
  { swatch: 'bg-liturgia-vermelho', name: 'Vermelho', meaning: 'O fogo do Espírito e o sangue dos mártires. Pentecostes e Paixão.' },
  { swatch: 'bg-liturgia-rosa', name: 'Rosa', meaning: 'Alegria no meio da espera. Só em dois domingos: 3º do Advento e 4º da Quaresma.' },
]
