import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Eslam Nasser | Software Engineer & DEPI Trainer (AAST 3.53 GPA)',
  description: 'Portfolio of Eslam Nasser - Software Engineer, DEPI (Digital Egypt Pioneers Initiative) Trainer, and AAST Honors Graduate (3.53 GPA). Specializing in Next.js, scalable architectures, and tech mentorship.',
  keywords: [
    'Eslam Nasser',
    'Software Engineer',
    'DEPI Trainer',
    'Digital Egypt Pioneers Initiative',
    'AASTMT',
    'AAST 3.53 GPA',
    'Next.js Developer',
    'React',
    'TypeScript',
    'Full Stack Engineer',
    'Tech Mentor Egypt'
  ],
  authors: [{ name: 'Eslam Nasser' }],
  creator: 'Eslam Nasser',
  openGraph: {
    title: 'Eslam Nasser | Software Engineer & DEPI Trainer',
    description: 'AAST Honors Graduate (3.53 GPA) • Official DEPI Trainer • Full Stack Software Engineer',
    url: 'https://github.com/eslamnaaser454',
    siteName: 'Eslam Nasser Portfolio',
    images: [
      {
        url: '/assets/eslam-microsoft.jpg',
        width: 1200,
        height: 750,
        alt: 'Eslam Nasser at Microsoft',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eslam Nasser | Software Engineer & DEPI Trainer',
    description: 'AAST Honors Graduate (3.53 GPA) & Official DEPI Trainer',
    images: ['/assets/eslam-microsoft.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <div className="bg-ambient-layer">
          <div className="ambient-blob-1" />
          <div className="ambient-blob-2" />
          <div className="ambient-blob-3" />
          <div className="ambient-grid" />
        </div>
        {children}
      </body>
    </html>
  );
}
