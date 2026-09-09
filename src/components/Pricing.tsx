import { ShieldCheck } from 'lucide-react'

export function Pricing() {
  return (
    <section id="precio" className="scroll-mt-20 border-t border-border/40 bg-surface/40 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
            Precio early bird
          </h2>
          <p className="mt-4 text-subtext">
            Reserva tu plaza ahora. El precio sube cuando salgamos de early bird.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-md rounded-3xl border border-border bg-bg p-8 shadow-md">
          <p className="text-sm font-medium uppercase tracking-wide text-secondary">
            Early bird
          </p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-5xl font-extrabold text-text">$79</span>
            <span className="text-subtext line-through">$99–149</span>
          </div>
          <p className="mt-2 text-sm text-subtext">
            Luego $99–149. Acceso completo al curso + labs + bonuses.
          </p>

          <a
            href="#waitlist"
            className="mt-6 flex w-full items-center justify-center rounded-full bg-primary py-3.5 text-sm font-semibold text-white transition hover:bg-secondary"
          >
            Quiero el early bird — $79
          </a>

          <div className="mt-6 flex gap-3 rounded-xl bg-surface/80 p-4 text-left">
            <ShieldCheck className="shrink-0 text-secondary" size={22} />
            <p className="text-sm text-subtext">
              <strong className="text-text">Garantía 7 días:</strong> si completas
              M1–M2 + install y no te encaja, te devolvemos el dinero.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
