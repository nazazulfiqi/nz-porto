import { Poppins } from '@next/font/google';
import localFont from '@next/font/local';
import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/globals.css';

import { ThemeProvider } from '@/components/theme-provider';

// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import { siteConfig } from '@/constant/config';

// !STARTERCONF Change these default meta
// !STARTERCONF Look at @/constant/config to change them
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  // !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
  // ! copy to /favicon folder
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
    // creator: '@th_clarence',
  },
  // authors: [
  //   {
  //     name: 'Theodorus Clarence',
  //     url: 'https://theodorusclarence.com',
  //   },
  // ],
};

const clashDisplay = localFont({
  src: [
    {
      path: '../../public/fonts/clash-display/ClashDisplay-Extralight.ttf',
      weight: '200',
    },
    {
      path: '../../public/fonts/clash-display/ClashDisplay-Regular.ttf',
      weight: '400',
    },
    {
      path: '../../public/fonts/clash-display/ClashDisplay-Medium.ttf',
      weight: '500',
    },
    {
      path: '../../public/fonts/clash-display/ClashDisplay-Semibold.ttf',
      weight: '600',
    },
    {
      path: '../../public/fonts/clash-display/ClashDisplay-Bold.ttf',
      weight: '700',
    },
  ],
  variable: '--font-clashDisplay',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${clashDisplay.variable} ${poppins.variable} font-poppins`}
    >
      <body>
        <ThemeProvider attribute='class' defaultTheme='light'>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
