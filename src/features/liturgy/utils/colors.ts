import type { LiturgicalColor } from '../types'

/** Classes literais para o Tailwind detectar no build. */
export const liturgicalColorClass: Record<LiturgicalColor, string> = {
  Verde: 'bg-liturgia-verde',
  Vermelho: 'bg-liturgia-vermelho',
  Roxo: 'bg-liturgia-roxo',
  Rosa: 'bg-liturgia-rosa',
  Branco: 'bg-liturgia-branco ring-1 ring-ink/20',
}
