import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeScript } from "@/components/theme-script";
import { Navigation } from "@/components/navigation";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ahsanhabib.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Md. Ahsan Habib — Full Stack Developer",
    template: "%s — Md. Ahsan Habib",
  },
  description:
    "Full Stack Developer building fast, scalable web products and SaaS platforms from idea to production.",
  applicationName: "Md. Ahsan Habib Portfolio",
  authors: [{ name: "Md. Ahsan Habib", url: "https://github.com/sowmik-sec" }],
  creator: "Md. Ahsan Habib",
  publisher: "Md. Ahsan Habib",
  keywords: [
    "Md. Ahsan Habib",
    "Ahsan Habib",
    "Full Stack Developer",
    "Software Engineer",
    "Next.js",
    "TypeScript",
    "React",
    "Go",
    "Tailwind CSS",
    "MongoDB",
    "Stripe",
    "SaaS Platform",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Md. Ahsan Habib — Full Stack Developer",
    title: "Md. Ahsan Habib — Full Stack Developer",
    description:
      "Full Stack Developer building fast, scalable web products and SaaS platforms from idea to production.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Md. Ahsan Habib — Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Ahsan Habib — Full Stack Developer",
    description:
      "Full Stack Developer building fast, scalable web products and SaaS platforms from idea to production.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Icons come from the file conventions: src/app/icon.svg (theme-aware
  // monogram, preferred by SVG-capable browsers) and src/app/favicon.ico
  // (raster fallback).
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Md. Ahsan Habib",
    jobTitle: "Full Stack Developer",
    url: siteUrl,
    sameAs: [
      "https://github.com/sowmik-sec",
      "https://www.linkedin.com/in/md-ahsan-habib-18569b21a/",
    ],
    knowsAbout: [
      "Full Stack Development",
      "Next.js",
      "TypeScript",
      "React",
      "Go",
      "Tailwind CSS",
      "MongoDB",
      "Stripe",
      "Software Architecture",
    ],
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Md. Ahsan Habib Portfolio",
    url: siteUrl,
    description:
      "Full Stack Developer building fast, scalable web products and SaaS platforms from idea to production.",
    author: {
      "@type": "Person",
      name: "Md. Ahsan Habib",
    },
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${instrumentSans.variable} ${instrumentSerif.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdPerson).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdWebSite).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground antialiased selection:bg-accent selection:text-accent-foreground">
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground focus:shadow-md"
        >
          Skip to content
        </a>

        <Navigation />

        <main
          id="main-content"
          tabIndex={-1}
          className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-8 outline-none focus:outline-hidden sm:px-6 sm:py-12 md:px-8 lg:px-12"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
