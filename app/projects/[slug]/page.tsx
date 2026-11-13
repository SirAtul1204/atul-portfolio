import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Badge, Container } from '@qevryn/ui';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { portfolio } from '@/lib/portfolio';
import { ProjectVisual } from '@/components/project-visual';
export const dynamicParams = false;
export function generateStaticParams() {
  return portfolio.projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = portfolio.projects.find((p) => p.slug === slug);
  return { title: p?.name, description: p?.description };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = portfolio.projects.find((p) => p.slug === slug);
  if (!p) notFound();
  return (
    <Container maxWidth="lg" gutter={{ base: 6, md: 10 }}>
      <main id="main" className="detail">
        <Link href="/#work" className="text-link">
          <ArrowLeft size={16} /> All projects
        </Link>
        <div className="eyebrow">{p.eyebrow}</div>
        <h1>{p.name}</h1>
        <p className="detail-summary">{p.summary}</p>
        <div className="tags">
          {p.technologies.map((t) => (
            <Badge key={t} variant="satin">
              {t}
            </Badge>
          ))}
        </div>
        <ProjectVisual kind={p.visual} />
        <h2>What I worked on</h2>
        <ul className="feature-list">
          {p.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        {p.github ? (
          <a
            href={p.github}
            className="primary-link"
            target="_blank"
            rel="noreferrer"
          >
            Explore source code <ArrowUpRight size={16} />
          </a>
        ) : (
          <p className="muted">
            Enterprise work at Barclays. Source code is proprietary.
          </p>
        )}
        <div className="detail-bottom">
          <a href={`mailto:${portfolio.email}`} className="text-link">
            Let’s talk about your next project <ArrowUpRight size={16} />
          </a>
        </div>
      </main>
    </Container>
  );
}
