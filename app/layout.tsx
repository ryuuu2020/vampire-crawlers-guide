import type { Metadata } from 'next';
import SidebarLayout from './components/SidebarLayout';
import './globals.css';
import Script from "next/script";
import SchemaMarkup from '@/shared/SchemaMarkup';


export const metadata: Metadata = {
  title: 'Vampire Crawlers Guide - Best Cards, Builds & Tier List',
  description: 'The ultimate Vampire Crawlers guide with character tier lists, card database, weapon evolution recipes, build strategies, dungeon walkthroughs, and combo mechanics. Master the roguelite deckbuilder.',
  metadataBase: new URL("https://vampirecrawlers.gguidehub.com"),
  openGraph: {
    title: 'Vampire Crawlers Guide',
    description: 'The ultimate Vampire Crawlers guide with character tier lists, card database, weapon evolution recipes, build strategies, dungeon walkthroughs, and combo mechanics.',
    type: 'website',
  },
  verification: {
    google: '4cd6cdf221ea7b0b',
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
        {/* Google Search Console verification */}
        <meta name="google-site-verification" content="4cd6cdf221ea7b0b" />

        {/* Google Analytics 4 */}
        <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-ET6778V62K" />
        <Script strategy="lazyOnload" id="gtag-init">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-ET6778V62K');`}
            </Script>
        <Script strategy="lazyOnload" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8925824244664340" crossOrigin="anonymous" />
      
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{"@context": "https://schema.org", "@type": "WebSite", "name": "Vampire Crawlers Guide", "url": "https://vampire-crawlers-guide.vercel.app"}`
          }}
        />

      </head>
      <body className="font-body min-h-screen flex flex-col">
        <SidebarLayout>{children}</SidebarLayout>
      </body>
    </html>
  );
}
