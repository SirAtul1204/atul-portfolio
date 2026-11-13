import Link from 'next/link';
import { Container } from '@qevryn/ui';
import { portfolio as p } from '@/lib/portfolio';
import { PrintResume } from '@/components/controls';
export const dynamic = 'force-dynamic';
export const metadata = { title: 'Resume' };
export default function Resume() {
  return (
    <Container maxWidth="lg" gutter={{ base: 6, md: 10 }}>
      <main id="main" className="resume">
        <div className="resume-toolbar">
          <Link href="/">← Portfolio</Link>
          <PrintResume />
          <a href="/resume.pdf" download>
            Original PDF ↓
          </a>
        </div>
        <h1>{p.name}</h1>
        <p className="resume-role">{p.role}</p>
        <p>
          <a href={`mailto:${p.email}`}>{p.email}</a> ·{' '}
          <a href={`tel:${p.phone.replace(/\s/g, '')}`}>{p.phone}</a> ·{' '}
          {p.location}
        </p>
        <div className="tags">
          {p.socials.map((s) => (
            <a key={s.label} href={s.url}>
              {s.label} ↗
            </a>
          ))}
        </div>
        <section>
          <h2>Profile</h2>
          <p>{p.about}</p>
        </section>
        <section>
          <h2>Experience</h2>
          {p.experience.map((e) => (
            <article key={e.company}>
              <h3>
                {e.company} — {e.role}
              </h3>
              <p className="muted">
                {e.period} · {e.location}
              </p>
              <ul>
                {e.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
        <section>
          <h2>Projects</h2>
          {p.projects.map((v) => (
            <article key={v.slug}>
              <h3>{v.name}</h3>
              <p>{v.summary}</p>
              <p className="muted">{v.technologies.join(' · ')}</p>
              {v.github && <a href={v.github}>{v.github}</a>}
            </article>
          ))}
        </section>
        <section>
          <h2>Skills</h2>
          {p.skills.map((s) => (
            <p key={s.category}>
              <strong>{s.category}: </strong>
              {s.items.join(', ')}
            </p>
          ))}
        </section>
        <section>
          <h2>Education</h2>
          {p.education.map((e) => (
            <article key={e.school}>
              <h3>
                {e.school} · {e.year}
              </h3>
              <p>
                {e.degree} · {e.detail}
              </p>
            </article>
          ))}
        </section>
      </main>
    </Container>
  );
}
