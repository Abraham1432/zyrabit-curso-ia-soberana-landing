import { CheckCircle2 } from 'lucide-react'

const steps = [
  'Instalación local-first de Zyrabit SLM (Docker, CPU / Metal / CUDA / Tenstorrent)',
  'RAG híbrido con evidencia: Chroma + BM25 y citas verificables',
  'PII sandwich bi-direccional: redacta entrada y salida sin romper utilidad',
  'MCP y herramientas controladas dentro de tu perímetro',
  'Checklist air-gap: cero egress posible, lista para IT y compliance',
]

export function Solution() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
            Un path guiado hasta el checklist de IT
          </h2>
          <p className="mt-4 text-subtext leading-relaxed">
            Sobre Zyrabit SLM — OSS local-first — te llevamos de “¿por dónde
            empiezo?” a un despliegue demostrable: RAG con evidencia, PII
            bi-direccional, MCP y air-gap listo para pasar revisión interna.
          </p>
        </div>
        <ul className="space-y-4 rounded-2xl border border-border/70 bg-surface/60 p-6 sm:p-8">
          {steps.map((step) => (
            <li key={step} className="flex gap-3">
              <CheckCircle2
                className="mt-0.5 shrink-0 text-secondary"
                size={20}
              />
              <span className="text-sm leading-relaxed text-text sm:text-base">
                {step}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
