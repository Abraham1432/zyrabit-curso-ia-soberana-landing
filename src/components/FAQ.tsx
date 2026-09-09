import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: '¿Necesito GPU?',
    a: 'No obligatoriamente. Zyrabit SLM corre en CPU, Metal (Apple), CUDA y Tenstorrent. GPU acelera, pero los labs están pensados para que puedas avanzar también en laptop.',
  },
  {
    q: '¿Sirve con 8 GB de RAM?',
    a: 'Sí para empezar con modelos pequeños y los labs básicos. Para workloads más grandes recomendamos más RAM o sizing con la guía bonus del curso.',
  },
  {
    q: '¿Es solo teoría o hay labs?',
    a: 'Es un curso práctico: video + labs. Cada módulo clave termina en un resultado verificable (verify OK, RAG+evidencia, demo PII, checklist air-gap).',
  },
  {
    q: '¿Esto me certifica en HIPAA / GDPR?',
    a: 'No. No vendemos certificaciones legales. Te damos un path técnico y checklist para reducir riesgo de egress y PII; compliance formal sigue siendo de tu abogado / auditor.',
  },
  {
    q: '¿Ofrecen factura o workshop corporativo?',
    a: 'Sí. El curso self-paced es el early bird. Para workshop / acompañamiento a equipos el rango orientativo es $1.5k–5k según alcance. Escríbenos tras apuntarte a la waitlist.',
  },
  {
    q: '¿El curso está solo en español?',
    a: 'Sí. Todo el contenido (video, labs y plantillas) está en español, pensado para LatAm y España.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-20 border-t border-border/40 bg-surface/40 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-bold tracking-tight text-text sm:text-3xl">
          FAQ
        </h2>

        <div className="mt-10 divide-y divide-border/70 rounded-2xl border border-border/70 bg-bg">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="font-medium text-text">{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-subtext transition ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <p className="px-5 pb-5 text-sm leading-relaxed text-subtext sm:px-6">
                    {item.a}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
