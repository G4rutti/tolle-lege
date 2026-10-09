import { ArrowRight } from 'lucide-react'
import { Link, type LinkProps } from 'react-router'

type Variant = 'primary' | 'light' | 'text' | 'textLight'

/** Telha só onde se age (design-system/identidade.md): todo botão e link de ação é telha. */
const variants: Record<Variant, string> = {
  primary:
    'rounded-md bg-accent px-6 py-3.5 text-accent-on hover:bg-accent-hover focus-visible:outline-accent',
  light:
    'rounded-md bg-canvas px-6 py-3.5 text-accent-hover hover:bg-accent-subtle focus-visible:outline-canvas',
  text: 'group text-accent hover:text-accent-hover focus-visible:outline-accent',
  textLight: 'group text-canvas hover:text-accent-subtle focus-visible:outline-canvas',
}

type ButtonLinkProps = LinkProps & { variant?: Variant }

/** Link com aparência de botão. As variantes de texto incluem a seta animada. */
export function ButtonLink({ variant = 'primary', className = '', children, ...props }: ButtonLinkProps) {
  return (
    <Link
      className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-[color,background-color] focus-visible:outline-2 focus-visible:outline-offset-4 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {(variant === 'text' || variant === 'textLight') && (
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      )}
    </Link>
  )
}
