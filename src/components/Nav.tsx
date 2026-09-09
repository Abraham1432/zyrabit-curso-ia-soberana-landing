import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#temario', label: 'Temario' },
  { href: '#precio', label: 'Precio' },
  { href: '#faq', label: 'FAQ' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#" className="flex shrink-0 items-center gap-2" aria-label="Zyrabit inicio">
          <img
            src="https://assets.zyrabit.com/logos/zyrabit_black.png"
            alt="Zyrabit"
            className="h-7 w-auto sm:h-8"
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-subtext transition hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#waitlist"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-secondary"
          >
            Early bird $79
          </a>
        </div>

        <button
          type="button"
          className="inline-flex rounded-lg p-2 text-primary md:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/60 bg-bg px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-subtext hover:bg-surface"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#waitlist"
              className="rounded-full bg-primary px-4 py-2.5 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Early bird $79
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
