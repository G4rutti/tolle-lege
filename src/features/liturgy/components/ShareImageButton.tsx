import { ImageDown } from 'lucide-react'
import { useState, type ReactNode } from 'react'
import type { LiturgicalColor, Psalm, Reading } from '../types'
import { ShareImageDialog } from './ShareImageDialog'

type ShareImageButtonProps = {
  item: Reading | Psalm
  date: string
  color: LiturgicalColor
  className?: string
  children?: ReactNode
}

/** Botão que abre o editor de imagem para compartilhar um trecho da liturgia. */
export function ShareImageButton({ item, date, color, className, children }: ShareImageButtonProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          className ??
          'inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-on transition-colors hover:bg-accent-hover'
        }
      >
        {children ?? (
          <>
            <ImageDown className="size-4" />
            Criar imagem
          </>
        )}
      </button>
      {open && <ShareImageDialog item={item} date={date} color={color} onClose={() => setOpen(false)} />}
    </>
  )
}
