import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Fiction Word Fusion System',
  description: 'An advanced RNG system that combines mystical words and fantastical elements to spark creative imagination for worldbuilding, character creation, and storytelling.',
  keywords: [
    'fiction',
    'worldbuilding',
    'creative writing',
    'fantasy',
    'word generator',
    'inspiration',
    'storytelling',
    'character creation',
    'magic systems',
    'RNG'
  ],
  authors: [{ name: 'Fiction Word Fusion System' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Fiction Word Fusion System',
    description: 'Spark your creative imagination with mystical word combinations',
    type: 'website',
    images: [
      {
        url: 'https://placehold.co/1200x630?text=Fiction+Word+Fusion+System+%7C+Creative+Inspiration+Generator',
        width: 1200,
        height: 630,
        alt: 'Fiction Word Fusion System - Creative word combination generator for storytellers and worldbuilders',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fiction Word Fusion System',
    description: 'Spark your creative imagination with mystical word combinations',
    images: [
      'https://placehold.co/1200x630?text=Fiction+Word+Fusion+System+%7C+Creative+Inspiration+Generator'
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✨</text></svg>" />
        <meta name="theme-color" content="#1f2937" />
        <meta name="color-scheme" content="dark light" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen bg-background text-foreground`}
      >
        <div className="flex flex-col min-h-screen">
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}