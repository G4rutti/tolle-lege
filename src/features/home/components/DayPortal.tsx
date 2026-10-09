import { ButtonLink } from '@/components/ui/ButtonLink'
import { Reveal } from '@/components/ui/Reveal'
import { routes } from '@/config/routes'
import { colorStyles, liturgicalYearFor, weekLabel } from '@/features/liturgical-year'

/**
 * O portal: a porta da igreja (arco) vestida com a cor do tempo litúrgico de hoje.
 * A cor vem de --color-dia, que main.tsx define pelo calendário (identidade.md: a cor do dia só mora no arco).
 */
export function DayPortal() {
  const today = new Date()
  const { seasons, season } = liturgicalYearFor(today)

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[auto_1fr] lg:px-10">
        <Reveal className="mx-auto md:mx-0">
          <div className="flex aspect-[3/4] w-64 flex-col justify-end rounded-t-full bg-dia p-8 text-dia-on transition-colors duration-500 sm:w-80">
            <p className="text-xs font-semibold tracking-widest uppercase">Hoje · {colorStyles[season.color].label}</p>
            <p className="mt-2 font-serif text-3xl leading-tight">{season.name}</p>
            <p className="mt-1 text-sm">{weekLabel(today, season, seasons)}</p>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="max-w-xl">
          <h2 className="font-serif text-4xl font-medium tracking-tight text-balance text-ink sm:text-5xl">
            A porta está aberta. Toma e lê.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-ink-muted">
            A cor desta porta muda com o tempo da Igreja: verde no Tempo Comum, roxo no Advento e na Quaresma,
            branco no Natal e na Páscoa, vermelho em Pentecostes. Hoje ela está assim.
          </p>
          <div className="mt-8 flex flex-wrap gap-6">
            <ButtonLink to={routes.liturgy}>Ler a liturgia de hoje</ButtonLink>
            <ButtonLink to={routes.liturgicalYear} variant="text" className="self-center">
              Entender as cores
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
