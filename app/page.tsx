import Link from 'next/link';
import { Badge, Container, Grid } from '@qevryn/ui';
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  FileDown,
  Github,
  Linkedin,
  MapPin,
} from 'lucide-react';
import { portfolio as p } from '@/lib/portfolio';
import { Projects } from '@/components/projects';
import { CopyEmail } from '@/components/controls';
export const dynamic = 'force-static';
export default function Home() {
  return (
    <Container maxWidth="xl" gutter={{ base: 6, md: 10 }}>
      <header className="site-header">
        <a href="#" className="brand" aria-label={`${p.name} home`}>
          as<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
        </nav>
        <a href={`mailto:${p.email}`} className="header-contact">
          Let’s talk <ArrowUpRight size={15} />
        </a>
      </header>
      <main id="main">
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              {p.role} <span className="muted">/ {p.location}</span>
            </div>
            <h1>
              {p.headline.split('\n')[0]}
              <br />
              <span>{p.headline.split('\n')[1]}</span>
            </h1>
            <p className="hero-intro">{p.intro}</p>
            <div className="hero-actions">
              <a href="#work" className="primary-link">
                Explore my work <ArrowDown size={17} />
              </a>
              <a href="/resume.pdf" className="secondary-link" download>
                <FileDown size={17} /> Download resume
              </a>
            </div>
            <div className="hero-socials">
              {p.socials.map((s, i) => (
                <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
                  {i === 0 ? <Github size={17} /> : <Linkedin size={17} />}{' '}
                  {s.label}
                  <ArrowUpRight size={13} />
                </a>
              ))}
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="core">
              <Code2 size={72} strokeWidth={1} />
            </div>
            <span className="orbit-label label-react">React & TypeScript</span>
            <span className="orbit-label label-node">
              Node.js & Spring Boot
            </span>
            <div className="art-foot">
              <span className="status-dot" /> FROM INTERFACE TO INFRASTRUCTURE
            </div>
            <span className="art-index">01 / FULL STACK</span>
          </div>
        </section>
        <div className="stats">
          {p.stats.map((s) => (
            <div key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
          <div className="current">
            <span className="muted">Currently at</span>
            <strong>
              Barclays <ArrowUpRight size={16} />
            </strong>
          </div>
        </div>
        <section id="work" className="section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">01 / SELECTED WORK</span>
              <h2>Built with purpose.</h2>
            </div>
            <p>
              A few things I’ve helped bring to life.
              <br />
              From everyday operations to enterprise scale.
            </p>
          </div>
          <Projects projects={p.projects} />
        </section>
        <section id="experience" className="section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">02 / THE JOURNEY</span>
              <h2>Experience that ships.</h2>
            </div>
            <Link href="/resume" className="text-link">
              View full resume <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="experience-list">
            {p.experience.map((e, i) => (
              <article className="experience" key={e.company}>
                <div className="experience-date">
                  <span>{e.period}</span>
                  <span className="muted">{e.location}</span>
                </div>
                <div>
                  <div className="company-line">
                    <h3>{e.company}</h3>
                    {i === 0 && <Badge variant="satin">Current</Badge>}
                  </div>
                  <p className="role">{e.role}</p>
                  <ul>
                    {e.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="about" className="section">
          <Grid columns={{ base: 1, md: 2 }} gap={12}>
            <div>
              <span className="eyebrow">03 / A LITTLE ABOUT ME</span>
              <h2>
                Curious by nature.
                <br />
                <span className="muted">Engineer by practice.</span>
              </h2>
              <p className="about-copy">{p.about}</p>
              <div className="location">
                <MapPin size={16} />
                {p.location}
              </div>
            </div>
            <div className="skills">
              {p.skills.map((s) => (
                <div key={s.category}>
                  <h3>{s.category}</h3>
                  <div className="tags">
                    {s.items.map((t) => (
                      <Badge variant="outline" key={t}>
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Grid>
          <div className="education">
            <span className="eyebrow">FOUNDATIONS / EDUCATION</span>
            {p.education.map((e) => (
              <div className="education-row" key={e.school}>
                <span className="muted">{e.year}</span>
                <div>
                  <h3>{e.school}</h3>
                  <p>{e.degree}</p>
                  <small>
                    {e.detail} · {e.location}
                  </small>
                </div>
                <span className="education-icon">↗</span>
              </div>
            ))}
          </div>
        </section>
        <section id="contact" className="contact section">
          <span className="eyebrow">04 / NEXT CONVERSATION</span>
          <h2>
            Good things start
            <br />
            with a <span>hello.</span>
          </h2>
          <p>
            Have a project in mind, a role to discuss, or just want to connect?
          </p>
          <a className="email-link" href={`mailto:${p.email}`}>
            {p.email}
            <ArrowUpRight />
          </a>
          <div className="contact-actions">
            <CopyEmail email={p.email} />
            {p.socials.map((s) => (
              <a href={s.url} key={s.label} target="_blank" rel="noreferrer">
                {s.label}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </section>
      </main>
      <footer>
        <span>
          © {new Date().getFullYear()} {p.name}
        </span>
        <span>Built with care. Next.js + Qevryn UI.</span>
        <a href="#">Back to top ↑</a>
      </footer>
    </Container>
  );
}
