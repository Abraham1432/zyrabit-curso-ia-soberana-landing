const outcomes = [
  {
    n: '01',
    title: 'Verificar que el stack está OK',
    body: 'Instalas Zyrabit SLM, validas runtime (CPU / Metal / CUDA / Tenstorrent) y confirmas que no hay egress no deseado.',
  },
  {
    n: '02',
    title: 'RAG + evidencia',
    body: 'Montas retrieval híbrido (Chroma + BM25) y demuestras respuestas con citas / evidencia auditable.',
  },
  {
    n: '03',
    title: 'Demo PII sandwich',
    body: 'Configuras redacción bi-direccional y muestras un flujo seguro con datos sensibles de ejemplo.',
  },
  {
    n: '04',
    title: 'Checklist air-gap',
    body: 'Completas el checklist IT: red, volúmenes, telemetría off, política de cero egress posible.',
  },
  {
    n: '05',
    title: 'MCP opcional',
    body: 'Conectas herramientas vía MCP dentro del perímetro, con controles y límites claros.',
  },
]

export function Outcomes() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
            Lo que lograrás
          </h2>
          <p className="mt-4 text-subtext">
            Cinco hitos concretos, no slides vacíos: del verify OK al checklist
            air-gap (y MCP si lo necesitas).
          </p>
        </div>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((o) => (
            <li
              key={o.n}
              className="rounded-2xl border border-border/70 bg-surface/50 p-6"
            >
              <span className="text-xs font-bold tracking-widest text-secondary">
                {o.n}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-text">{o.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-subtext">{o.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
