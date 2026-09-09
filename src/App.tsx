import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Problem } from './components/Problem'
import { Solution } from './components/Solution'
import { Audience } from './components/Audience'
import { Outcomes } from './components/Outcomes'
import { Curriculum } from './components/Curriculum'
import { Format } from './components/Format'
import { Pricing } from './components/Pricing'
import { Waitlist } from './components/Waitlist'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-svh bg-bg font-sans text-text">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Audience />
        <Outcomes />
        <Curriculum />
        <Format />
        <Pricing />
        <Waitlist />
        <FAQ />
        <section className="bg-surface/60 py-16 text-center sm:py-20">
          <div className="mx-auto max-w-2xl px-4 sm:px-6">
            <img
              src="https://assets.zyrabit.com/logos/icon_black.png"
              alt=""
              className="mx-auto h-10 w-10"
            />
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-text sm:text-3xl">
              Empieza a desplegar IA soberana
            </h2>
            <p className="mt-3 text-subtext">
              Early bird $79 · labs incluidos · checklist air-gap · español
            </p>
            <a
              href="#waitlist"
              className="mt-6 inline-flex rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-secondary"
            >
              Quiero el early bird — $79
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
