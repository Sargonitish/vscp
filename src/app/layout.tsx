import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Your Name | Full-Stack Developer Portfolio',
  description: 'Full-stack developer portfolio built with Next.js, TypeScript, and Tailwind CSS. Features an interactive VS Code-inspired workspace interface.',
  keywords: ['developer', 'portfolio', 'full-stack', 'react', 'next.js', 'typescript'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Your Name | Full-Stack Developer',
    description: 'Interactive VS Code-inspired developer portfolio.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" data-theme="vs-dark">
      <body className="h-full overflow-hidden">{children}</body>
    </html>
  );
}
