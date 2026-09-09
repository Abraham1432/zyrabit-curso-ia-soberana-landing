const modules = [
  {
    id: 'M0',
    title: 'Fundamentos y amenaza',
    items: ['Soberanía vs “privado”', 'Threat model local-first', 'Mapa del stack Zyrabit'],
  },
  {
    id: 'M1',
    title: 'Instalación zyra.sh',
    items: ['Docker y runtimes', 'CPU / Metal / CUDA / Tenstorrent', 'Verify OK + health'],
  },
  {
    id: 'M2',
    title: 'RAG con evidencia',
    items: ['Chroma + BM25', 'Indexación y citas', 'Labs de retrieval'],
  },
  {
    id: 'M3',
    title: 'PII sandwich',
    items: ['Auditoría de PII', 'Redacción bi-direccional', 'Demo segura'],
  },
  {
    id: 'M4',
    title: 'MCP y herramientas',
    items: ['Protocolo MCP', 'Permisos y perímetro', 'Integración controlada'],
  },
  {
    id: 'M5',
    title: 'Air-gap checklist',
    items: ['Cero egress posible', 'Red y volúmenes', 'Entrega a IT'],
  },
  {
    id: 'M6',
    title: 'Ops con Grafana',
    items: ['Métricas y logs', 'Alertas básicas', 'Operación del día a día'],
  },
  {
    id: 'Cierre',
    title: 'Cierre y siguiente paso',
    items: ['Recap de labs', 'Plantillas bonus', 'Roadmap producto beta'],
  },
]

export function Curriculum() {
  return (
    <section id="temario" className="scroll-mt-20 border-t border-border/40 bg-surface/40 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
            Temario
          </h2>
          <p className="mt-4 text-subtext">
            Módulos M0–M6 + cierre: de zyra.sh a Chroma+BM25, PII audit, MCP y
            Grafana ops.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((m) => (
            <article
              key={m.id}
              className="flex flex-col rounded-2xl border border-border/70 bg-bg p-5 shadow-sm"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                {m.id}
              </span>
              <h3 className="mt-1 text-base font-semibold text-text">{m.title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-subtext">
                {m.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-muted">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
