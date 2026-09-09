import { useState } from 'react'
import type { FormEvent } from 'react'

type Role = 'Dev' | 'IT-Sec' | 'Founder' | 'Otro'
type Tried = 'Sí' | 'Aún no'

type WaitlistEntry = {
  email: string
  name: string
  role: Role
  tried: Tried
  createdAt: string
}

const STORAGE_KEY = 'zyrabit-waitlist'

export function Waitlist() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [role, setRole] = useState<Role>('Dev')
  const [tried, setTried] = useState<Tried>('Aún no')
  const [success, setSuccess] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const entry: WaitlistEntry = {
      email: email.trim(),
      name: name.trim(),
      role,
      tried,
      createdAt: new Date().toISOString(),
    }

    // Persist locally (no backend in this landing)
    const prev: WaitlistEntry[] = (() => {
      try {
        const raw = localStorage.getItem(STORAGE_KEY)
        return raw ? (JSON.parse(raw) as WaitlistEntry[]) : []
      } catch {
        return []
      }
    })()
    prev.push(entry)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prev))
    console.log('[zyrabit-waitlist]', entry)

    // TODO: replace with real API call, e.g.:
    // await fetch('/api/waitlist', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(entry) })

    setSuccess(true)
    setEmail('')
    setName('')
    setRole('Dev')
    setTried('Aún no')
  }

  return (
    <section id="waitlist" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-lg">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
              Únete al early bird
            </h2>
            <p className="mt-4 text-subtext">
              Déjanos tus datos y te avisamos para asegurar el precio de $79.
            </p>
          </div>

          {success ? (
            <div
              className="mt-8 rounded-2xl border border-border bg-surface/70 p-8 text-center"
              role="status"
            >
              <p className="text-lg font-semibold text-primary">
                Ya estás dentro. Revisa tu correo (y spam).
              </p>
              <button
                type="button"
                className="mt-4 text-sm font-medium text-secondary underline-offset-2 hover:underline"
                onClick={() => setSuccess(false)}
              >
                Enviar otro registro
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5 rounded-2xl border border-border/70 bg-surface/40 p-6 sm:p-8"
            >
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-border bg-bg px-4 py-2.5 text-sm text-text outline-none ring-ring focus:ring-2"
                  placeholder="tu@empresa.com"
                  autoComplete="email"
                />
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text">
                  Nombre *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-border bg-bg px-4 py-2.5 text-sm text-text outline-none ring-ring focus:ring-2"
                  placeholder="Tu nombre"
                  autoComplete="name"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-text">
                  Rol
                </label>
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value as Role)}
                  className="mt-1.5 w-full rounded-xl border border-border bg-bg px-4 py-2.5 text-sm text-text outline-none ring-ring focus:ring-2"
                >
                  <option value="Dev">Dev</option>
                  <option value="IT-Sec">IT-Sec</option>
                  <option value="Founder">Founder</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <fieldset>
                <legend className="text-sm font-medium text-text">
                  ¿Ya probaste Zyrabit?
                </legend>
                <div className="mt-2 flex gap-4">
                  {(['Sí', 'Aún no'] as const).map((opt) => (
                    <label key={opt} className="flex items-center gap-2 text-sm text-subtext">
                      <input
                        type="radio"
                        name="tried"
                        value={opt}
                        checked={tried === opt}
                        onChange={() => setTried(opt)}
                        className="accent-primary"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </fieldset>

              <button
                type="submit"
                className="w-full rounded-full bg-primary py-3.5 text-sm font-semibold text-white transition hover:bg-secondary"
              >
                Quiero el early bird
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
