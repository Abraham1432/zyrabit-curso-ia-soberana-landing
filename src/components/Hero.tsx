import { ArrowRight, ExternalLink } from 'lucide-react'

const trustItems = [
  'MIT',
  'v3.0.0-rc.1 Beta',
  'Docker',
  'CPU / Metal / CUDA / Tenstorrent',
  'Cero egress posible',
]

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-surface)_0%,_transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-xs font-medium text-subtext sm:text-sm">
            <img
              src="https://assets.zyrabit.com/logos/icon_black.png"
              alt=""
              className="h-4 w-4"
            />
            Curso práctico · Español
          </p>

          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-text sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            Despliega IA soberana en tu infra — sin mandar datos a la nube
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-subtext sm:text-lg">
            Curso práctico en español: instalación, RAG con evidencia, PII sandwich,
            checklist air-gap y Zyrabit SLM local-first OSS. Aprende a operar IA en
            tu infraestructura sin filtrar datos sensibles.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#waitlist"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-secondary sm:w-auto"
            >
              Quiero el early bird — $79
              <ArrowRight size={18} />
            </a>
            <a
              href="https://github.com/Zyrabit-tech/zyrabit-SLM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-bg px-6 py-3.5 text-sm font-semibold text-primary transition hover:bg-surface sm:w-auto"
            >
              Ver el repo en GitHub
              <ExternalLink size={16} />
            </a>
          </div>

          <p className="mt-5 text-sm text-subtext/80">
            Self-paced · Labs incluidos · Beta del producto en vivo
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {trustItems.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border/80 bg-surface px-3 py-1.5 text-xs font-medium text-subtext sm:text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
