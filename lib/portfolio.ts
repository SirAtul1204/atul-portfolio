import raw from '@/content/portfolio.json';
import { z } from 'zod';
const text = z.string().min(1);
const project = z.object({
  slug: text.regex(/^[a-z0-9-]+$/),
  name: text,
  category: text,
  eyebrow: text,
  description: text,
  summary: text,
  technologies: z.array(text),
  features: z.array(text),
  github: z.union([z.literal(''), z.url()]),
  visual: z.enum(['restaurant', 'booking']),
});
const schema = z.object({
  name: text,
  role: text,
  location: text,
  email: z.email(),
  phone: text,
  headline: text,
  intro: text,
  about: text,
  socials: z.array(z.object({ label: text, url: z.url() })),
  stats: z.array(z.object({ value: text, label: text })),
  projects: z.array(project),
  experience: z.array(
    z.object({
      company: text,
      role: text,
      period: text,
      location: text,
      highlights: z.array(text),
    }),
  ),
  skills: z.array(z.object({ category: text, items: z.array(text) })),
  education: z.array(
    z.object({
      school: text,
      degree: text,
      detail: text,
      year: text,
      location: text,
    }),
  ),
});
export const portfolio = schema.parse(raw);
if (
  new Set(portfolio.projects.map((p) => p.slug)).size !==
  portfolio.projects.length
)
  throw new Error('Project slugs must be unique');
export type Project = z.infer<typeof project>;
