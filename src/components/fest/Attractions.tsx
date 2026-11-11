import atom from "@/assets/atom-molecule.jpg";
import { attractions } from "@/data/fest";
import { Reveal, SectionHeading } from "./primitives";

export function Attractions() {
  return (
    <section id="attractions" className="relative mx-auto max-w-6xl overflow-hidden px-6 py-20 sm:py-28">
      <img
        src={atom}
        alt=""
        aria-hidden="true"
        width={1024}
        height={1024}
        loading="lazy"
        className="ink-blend pointer-events-none absolute -right-24 -top-6 w-72 opacity-25 sm:w-96"
      />
      <SectionHeading number={4} symbol="At" tone="red" eyebrow="special attractions" title="Elements of the fest" />

      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {attractions.map((a, i) => (
          <Reveal key={a.symbol} delay={i * 80}>
            <article className="group relative flex h-full flex-col rounded-2xl border-2 border-primary bg-paper p-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-ink sm:p-6">
              <div className="flex items-start justify-between font-mono text-xs text-ink-soft">
                <span>{String(a.number).padStart(2, "0")}</span>
                <span className="h-2.5 w-2.5 rounded-full bg-amber transition-transform group-hover:scale-150" aria-hidden="true" />
              </div>
              <p className="mt-3 font-display text-5xl leading-none text-primary transition-colors group-hover:text-accent sm:text-6xl">
                {a.symbol}
              </p>
              <h3 className="mt-3 font-serif text-lg font-semibold italic text-primary sm:text-xl">{a.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{a.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
