import { Mail, Phone, UserRound } from "lucide-react";
import logo from "@/assets/chemistrecreate_logo.png.asset.json";
import { club, contacts, type Person } from "@/data/fest";
import { Reveal, SectionHeading } from "./primitives";

function PersonRow({ p }: { p: Person }) {
  return (
    <li className="flex items-center gap-3 rounded-xl border border-border bg-paper p-3 transition-colors hover:border-primary/50">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pill text-primary">
        <UserRound className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="font-serif font-semibold italic text-primary">{p.name}</p>
        <p className="text-sm text-muted-foreground">{p.role}</p>
        {p.email && (
          <a href={`mailto:${p.email}`} className="text-sm text-accent underline-offset-2 hover:underline">{p.email}</a>
        )}
        {p.phone && (
          <a href={`tel:${p.phone}`} className="block text-sm text-accent underline-offset-2 hover:underline">{p.phone}</a>
        )}
      </div>
    </li>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <SectionHeading number={6} symbol="Co" tone="red" eyebrow="contact & organizers" title="The people behind the reaction" />

      <div className="grid gap-6 lg:grid-cols-3">
        <Reveal>
          <div className="h-full rounded-2xl border-2 border-primary bg-paper p-6 shadow-paper">
            <img src={logo.url} alt={`${club.name} logo`} width={80} height={78} loading="lazy" className="h-20 w-20 rounded-full object-contain" />
            <h3 className="mt-4 font-display text-2xl uppercase tracking-wide text-primary">{club.name}</h3>
            <p className="text-sm italic text-muted-foreground">{club.clubLabel} · {club.school}</p>
            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-ink-soft" />
                {contacts.clubEmail ? (
                  <a href={`mailto:${contacts.clubEmail}`} className="text-accent hover:underline">{contacts.clubEmail}</a>
                ) : (
                  <span className="text-muted-foreground">Email to be added</span>
                )}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-ink-soft" />
                {contacts.clubPhone ? (
                  <a href={`tel:${contacts.clubPhone}`} className="text-accent hover:underline">{contacts.clubPhone}</a>
                ) : (
                  <span className="text-muted-foreground">Phone to be added</span>
                )}
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">Faculty coordinators</h3>
          <ul className="space-y-3">
            {contacts.faculty.map((p, i) => <PersonRow key={i} p={p} />)}
          </ul>
        </Reveal>

        <Reveal delay={180}>
          <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">Student coordinators</h3>
          <ul className="space-y-3">
            {contacts.students.map((p, i) => <PersonRow key={i} p={p} />)}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
