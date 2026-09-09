import { ExternalLink } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-primary text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 text-center sm:px-6">
        <img
          src="https://assets.zyrabit.com/logos/zyrabit_white.png"
          alt="Zyrabit"
          className="h-8 w-auto"
        />
        <p className="max-w-md text-sm text-white/80">
          Despliega IA soberana en tu infra. Curso práctico + Zyrabit SLM
          local-first OSS.
        </p>
        <a
          href="https://github.com/Zyrabit-tech/zyrabit-SLM"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-white"
        >
          Repo Zyrabit SLM en GitHub
          <ExternalLink size={14} />
        </a>
        <p className="text-xs text-white/60">© {new Date().getFullYear()} Zyrabit</p>
      </div>
    </footer>
  )
}
