import type { ReactNode } from 'react'

type SectionHeaderProps = {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
}

export function SectionHeader({ eyebrow, title, description, align = 'left' }: SectionHeaderProps) {
  const centered = align === 'center'

  return (
    <header className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {/* Rubrica entre fios, como nos cabeçalhos dos livros litúrgicos */}
      <p
        className={`flex items-center gap-3 rubric text-primary-strong ${centered ? 'justify-center' : ''}`}
      >
        {/* Arquinho na cor do dia: abre cada seção (identidade.md) */}
        <span aria-hidden className="inline-block h-4 w-3 shrink-0 rounded-t-full border-2 border-b-0 border-dia" />
        {eyebrow}
        <span aria-hidden className="h-px w-10 bg-line" />
      </p>
      <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-balance text-ink sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-pretty text-ink-muted">{description}</p>
      )}
    </header>
  )
}
