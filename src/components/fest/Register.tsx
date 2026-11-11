import { ExternalLink, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { registration } from "@/data/fest";
import { Reveal, SectionHeading } from "./primitives";

export function Register() {
  const hasLink = registration.url.trim().length > 0;

  return (
    <section id="register" className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <SectionHeading number={5} symbol="Rg" eyebrow="registration & participation" title={registration.heading} />

      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-primary p-7 text-primary-foreground shadow-ink-lg sm:p-12">
          <div className="lab-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
          <FlaskConical className="pointer-events-none absolute -bottom-8 -right-6 h-48 w-48 text-primary-foreground/10" aria-hidden="true" />

          <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <p className="font-script text-3xl text-amber">be a part of it</p>
              <p className="mt-3 max-w-lg text-lg leading-relaxed text-primary-foreground/85">{registration.text}</p>

              <div className="mt-8">
                {hasLink ? (
                  <Button asChild variant="hero" size="xl">
                    <a href={registration.url} target="_blank" rel="noopener noreferrer">
                      Register now <ExternalLink />
                    </a>
                  </Button>
                ) : (
                  <>
                    <Button variant="ink" size="xl" disabled aria-describedby="reg-note" className="border-primary-foreground/60 text-primary-foreground disabled:opacity-100">
                      Registration opens soon
                    </Button>
                    <p id="reg-note" className="mt-3 font-mono text-xs uppercase tracking-widest text-primary-foreground/60">
                      Link will be added here
                    </p>
                  </>
                )}
              </div>
            </div>

            <dl className="grid grid-cols-2 gap-3">
              {registration.details.map((d) => (
                <div key={d.label} className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/5 p-4">
                  <dt className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-primary-foreground/60">{d.label}</dt>
                  <dd className="mt-1 font-serif font-semibold italic">{d.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
