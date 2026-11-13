'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Badge, Button, Grid } from '@qevryn/ui';
import { ArrowUpRight, Github } from 'lucide-react';
import type { Project } from '@/lib/portfolio';
import { ProjectVisual } from './project-visual';
export function Projects({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState('All work');
  const categories = ['All work', ...new Set(projects.map((p) => p.category))];
  return (
    <>
      <div className="filters" aria-label="Filter projects">
        {categories.map((c) => (
          <Button
            key={c}
            variant={c === filter ? 'satin' : 'ghost'}
            size="sm"
            aria-pressed={c === filter}
            onClick={() => setFilter(c)}
          >
            {c}
          </Button>
        ))}
      </div>
      <Grid columns={{ base: 1, md: 2 }} gap={8}>
        {projects
          .filter((p) => filter === 'All work' || p.category === filter)
          .map((p, i) => (
            <article className="project" key={p.slug}>
              <Link
                href={`/projects/${p.slug}`}
                tabIndex={-1}
                aria-hidden="true"
              >
                <ProjectVisual kind={p.visual} />
              </Link>
              <div className="project-meta">
                <span>{p.eyebrow}</span>
                <span>0{i + 1}</span>
              </div>
              <h3>
                <Link href={`/projects/${p.slug}`}>
                  {p.name}
                  <ArrowUpRight size={23} />
                </Link>
              </h3>
              <p>{p.description}</p>
              <div className="tags">
                {p.technologies.map((t) => (
                  <Badge key={t} variant="neutral">
                    {t}
                  </Badge>
                ))}
              </div>
              <div className="project-links">
                <Link href={`/projects/${p.slug}`}>
                  Explore project <ArrowUpRight size={14} />
                </Link>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer">
                    <Github size={15} /> Source code
                  </a>
                )}
              </div>
            </article>
          ))}
      </Grid>
    </>
  );
}
