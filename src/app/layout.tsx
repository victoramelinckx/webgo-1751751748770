
import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { Toaster } from 'react-hot-toast';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = { 
  title: 'WebGo',
  description: 'Sitio web de WebGo'
};

export const viewport: Viewport = { 
  width: 'device-width', 
  initialScale: 1 
};

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="es">
      <body>
        {children}
        <Toaster />
        <Analytics />
        {gaId && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}');
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}