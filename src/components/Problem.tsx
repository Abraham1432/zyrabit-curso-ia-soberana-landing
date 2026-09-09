import { AlertTriangle, ShieldOff, Clock } from 'lucide-react'

const points = [
  {
    icon: ShieldOff,
    title: 'Stacks enterprise que envían datos fuera',
    body: 'Muchas “IAs privadas” siguen llamando APIs cloud, telemetría o embeddings externos. Tus prompts y documentos salen de tu perímetro.',
  },
  {
    icon: AlertTriangle,
    title: 'Compliance e IT sin checklist clara',
    body: 'Legal, seguridad y operaciones piden evidencia de no-egress, control de PII y trazabilidad. Sin un path guiado, cada equipo improvisa.',
  },
  {
    icon: Clock,
    title: 'Semanas de prueba y error',
    body: 'Sin este curso: semanas de trial/error entre modelos, RAG, red, Docker y políticas. Con él: un camino probado hasta el checklist IT.',
  },
]

export function Problem() {
  return (
    <section className="border-t border-border/40 bg-surface/40 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
            Tu IA privada sigue pudiendo filtrar datos
          </h2>
          <p className="mt-4 text-subtext">
            “On-prem” o “privado” no garantiza soberanía. El riesgo real está en el
            stack, los conectores y lo que no está documentado.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {points.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="rounded-2xl border border-border/70 bg-bg p-6 shadow-sm"
            >
              <div className="mb-4 inline-flex rounded-xl bg-surface p-2.5 text-primary">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-text">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-subtext">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
