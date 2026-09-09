import { Check, X } from 'lucide-react'

const yes = [
  'Developers que van a integrar o operar LLMs en infra propia',
  'Equipos de ML / MLOps que necesitan RAG con evidencia y control',
  'IT-Sec y compliance que piden air-gap, PII y cero egress',
  'Founders LatAm / España que construyen producto con datos sensibles',
]

const no = [
  'Tips genéricos de ChatGPT o “prompts mágicos”',
  'Certificaciones falsas de GDPR / HIPAA',
  'Teoría sin labs ni checklist operativa',
]

export function Audience() {
  return (
    <section className="border-t border-border/40 bg-surface/40 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-bold tracking-tight text-text sm:text-3xl">
          ¿Para quién es (y para quién no)?
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-border/70 bg-bg p-6 sm:p-8">
            <h3 className="mb-4 text-lg font-semibold text-primary">Sí, es para ti</h3>
            <ul className="space-y-3">
              {yes.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-subtext sm:text-base">
                  <Check className="mt-0.5 shrink-0 text-secondary" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-border/70 bg-bg p-6 sm:p-8">
            <h3 className="mb-4 text-lg font-semibold text-primary">No es para ti</h3>
            <ul className="space-y-3">
              {no.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-subtext sm:text-base">
                  <X className="mt-0.5 shrink-0 text-muted" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
