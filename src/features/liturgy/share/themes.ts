import { raw, type TokenName } from '@/styles/ds/tokens'
import type { LiturgicalColor } from '../types'

export type ShareThemeId = 'canvas' | 'gold' | 'marian' | 'terracotta' | 'sage' | 'rose' | 'night'

export type ShareTheme = {
  id: ShareThemeId
  name: string
  /** Fundo externo da imagem. */
  outer: string
  /** O cartão com o texto. */
  card: string
  text: string
  muted: string
  accent: string
}

/** O canvas não lê variáveis CSS: usa os valores resolvidos dos tokens (design-system/tokens). */
const c = (name: TokenName) => raw[name]
/** Mesma cor com transparência (oklch(... / a)). */
const a = (name: TokenName, alpha: number) => raw[name].replace(')', ` / ${alpha})`)

export const shareThemes: ShareTheme[] = [
  { id: 'canvas', name: 'Cal', outer: c('color.primitivos.moldura'), card: c('color.primitivos.cal'), text: c('color.primitivos.madeira'), muted: c('color.primitivos.granito-escuro'), accent: c('color.primitivos.telha') },
  { id: 'gold', name: 'Telha', outer: c('color.primitivos.telha-escura'), card: c('color.primitivos.telha'), text: c('color.primitivos.branco'), muted: a('color.primitivos.branco', 0.8), accent: c('color.primitivos.telha-clara') },
  { id: 'marian', name: 'Roxo', outer: c('color.primitivos.madeira'), card: c('color.liturgia.roxo'), text: c('color.primitivos.branco'), muted: a('color.primitivos.branco', 0.8), accent: c('color.primitivos.branco') },
  { id: 'terracotta', name: 'Madeira', outer: c('color.primitivos.ferro'), card: c('color.primitivos.madeira'), text: c('color.primitivos.cal'), muted: a('color.primitivos.cal', 0.75), accent: c('color.primitivos.telha-clara') },
  { id: 'sage', name: 'Verde', outer: c('color.primitivos.madeira'), card: c('color.liturgia.verde'), text: c('color.primitivos.branco'), muted: a('color.primitivos.branco', 0.8), accent: c('color.primitivos.branco') },
  { id: 'rose', name: 'Vermelho', outer: c('color.primitivos.madeira'), card: c('color.liturgia.vermelho'), text: c('color.primitivos.branco'), muted: a('color.primitivos.branco', 0.8), accent: c('color.primitivos.branco') },
  { id: 'night', name: 'Noite', outer: c('color.primitivos.noite-sunken'), card: c('color.primitivos.ferro'), text: c('color.primitivos.cal'), muted: a('color.primitivos.cal', 0.6), accent: c('color.primitivos.noite-telha') },
]

/** Tema que combina com a cor litúrgica do dia. */
export const themeForLiturgicalColor: Record<LiturgicalColor, ShareThemeId> = {
  Verde: 'sage',
  Vermelho: 'rose',
  Roxo: 'marian',
  Rosa: 'rose',
  Branco: 'canvas',
}

export type ShareFormatId = 'story' | 'post' | 'square'

export const shareFormats: { id: ShareFormatId; name: string; width: number; height: number }[] = [
  { id: 'story', name: 'Stories', width: 1080, height: 1920 },
  { id: 'post', name: 'Post', width: 1080, height: 1350 },
  { id: 'square', name: 'Quadrado', width: 1080, height: 1080 },
]

export const shareRadii = [
  { id: 'none', name: 'Reto', value: 0 },
  { id: 'soft', name: 'Suave', value: 36 },
  { id: 'round', name: 'Redondo', value: 80 },
] as const

export type ShareRadiusId = (typeof shareRadii)[number]['id']

/** As opções dos editores de imagem (bordas, formato e link do site), prontas para os botões. */
export const radiusOptions = shareRadii.map((r) => ({ id: r.id, name: r.name }))
export const formatOptions = shareFormats.map((f) => ({ id: f.id, name: f.name }))
export const linkOptions = [
  { id: 'off', name: 'Sem link' },
  { id: 'on', name: 'Com link' },
]
