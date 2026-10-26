import type { Metadata } from 'next';
import { Caveat, Instrument_Sans, Newsreader } from 'next/font/google';
import { site } from '@/lib/site';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const newsreader = Newsreader({
  variable: '--font-newsreader',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['opsz'],
  display: 'swap',
});

const instrumentSans = Instrument_Sans({
  variable: '--font-instrument',
  subsets: ['latin'],
  display: 'swap',
});

// Only used to stand in for the user's handwriting on sample pages.
const caveat = Caveat({
  variable: '--font-caveat',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.metaTitle, template: `%s · ${site.name}` },
  description: site.metaDescription,
  applicationName: site.name,
  keywords: [
    'distraction-free writing',
    'handwriting app for Mac',
    'handwritten journal',
    'focus timer for writing',
    'block social media while writing',
    'scan handwritten notes',
    'handwriting to text',
    'private journal',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: site.metaTitle,
    description: site.metaDescription,
    url: '/',
    siteName: site.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: site.metaTitle,
    description: site.metaDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='en'
      className={`${newsreader.variable} ${instrumentSans.variable} ${caveat.variable} scroll-smooth antialiased`}
    >
      <body className='min-h-full bg-paper font-sans text-ink'>{children}</body>
      <Analytics />
    </html>
  );
}
