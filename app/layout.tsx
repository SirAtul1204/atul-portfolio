import type { Metadata } from 'next';
import { ThemeProvider } from '@qevryn/ui';
import { portfolio } from '@/lib/portfolio';
import '@qevryn/ui/styles.css';
import './globals.css';
export const metadata: Metadata = {
  title: {
    default: `${portfolio.name} — ${portfolio.role}`,
    template: `%s | ${portfolio.name}`,
  },
  description: portfolio.intro,
  openGraph: {
    title: `${portfolio.name} — ${portfolio.role}`,
    description: portfolio.intro,
    type: 'website',
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme="dark">
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
