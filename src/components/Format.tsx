import { Gift, Video, FlaskConical } from 'lucide-react'

const bonuses = [
  'Plantilla de threat model local-first',
  'Guía de sizing (CPU / GPU / RAM)',
  'Mail listo para enviar al CISO / IT',
  'Script de demo de 10 minutos',
]

export function Format() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
            Formato
          </h2>
          <p className="mt-4 text-subtext">
            6–8 h de video + labs en español. Self-paced, con material que puedes
            reutilizar en tu equipo.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-border/70 bg-surface/50 p-6 text-center">
            <Video className="mx-auto text-secondary" size={28} />
            <h3 className="mt-3 font-semibold text-text">Video + labs</h3>
            <p className="mt-2 text-sm text-subtext">
              6–8 horas de contenido práctico en español, con ejercicios guiados.
            </p>
          </article>
          <article className="rounded-2xl border border-border/70 bg-surface/50 p-6 text-center">
            <FlaskConical className="mx-auto text-secondary" size={28} />
            <h3 className="mt-3 font-semibold text-text">Producto en vivo</h3>
            <p className="mt-2 text-sm text-subtext">
              Labs sobre la beta de Zyrabit SLM — lo mismo que usas en producción.
            </p>
          </article>
          <article className="rounded-2xl border border-border/70 bg-surface/50 p-6 text-center">
            <Gift className="mx-auto text-secondary" size={28} />
            <h3 className="mt-3 font-semibold text-text">Bonuses</h3>
            <ul className="mt-2 space-y-1 text-left text-sm text-subtext">
              {bonuses.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="text-secondary">✓</span>
                  {b}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
