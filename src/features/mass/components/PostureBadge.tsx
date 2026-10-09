import { postureLabels, type Posture } from '../data'

/** Postura é o que se faz: rubrica em telha, como no missal (identidade.md: madeira diz, telha faz). */
const postureClasses: Record<Posture, string> = {
  stand: 'bg-accent-subtle text-accent-hover',
  sit: 'bg-accent-subtle text-accent-hover',
  kneel: 'bg-accent-subtle text-accent-hover',
}

export function PostureBadge({ posture }: { posture: Posture }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${postureClasses[posture]}`}
    >
      <span aria-hidden className="size-1.5 rounded-full bg-current" />
      {postureLabels[posture]}
    </span>
  )
}
