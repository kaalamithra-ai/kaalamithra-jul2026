// app/layout.tsx
import { Analytics } from '@vercel/analytics/next'
import { Poppins, Inter } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import './theme.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ThemeProvider } from 'next-themes'

// 1. Import your background grid and mobile navigation components
import BackgroundGrid from '@/components/backgroundGrid'
import BottomNav from '@/components/bottomNav'
import ChatBot from '@/components/chatBot'
import PwaInstallPrompt from '@/components/pwaInstallPrompt'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'KAALAMITHRA | AI, Automation, CRM & Technology Solutions',
  description: 'Empowering businesses with cutting-edge AI, automation, CRM, and digital marketing solutions. Transform your vision into intelligent, scalable technology.',
  keywords: ['AI Solutions', 'Automation', 'CRM', 'Digital Marketing', 'Technology Consulting', 'KAALAMITHRA'],
  generator: 'v0.app',
  manifest: '/manifest.json',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        sizes: '32x32',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-light-32x32.png',
        sizes: '48x48',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-light-32x32.png',
        sizes: '72x72',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-light-32x32.png',
        sizes: '96x96',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-light-32x32.png',
        sizes: '128x128',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-light-32x32.png',
        sizes: '144x144',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-light-32x32.png',
        sizes: '192x192',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-light-32x32.png',
        sizes: '384x384',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-light-32x32.png',
        sizes: '512x512',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: [
      {
        url: '/icon-light-32x32.png',
        sizes: '152x152',
      },
      {
        url: '/icon-light-32x32.png',
        sizes: '180x180',
      },
      {
        url: '/icon-light-32x32.png',
        sizes: '167x167',
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: 'KAALAMITHRA',
    statusBarStyle: 'black-translucent',
  },
  formatDetection: {
    telephone: false,
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1b2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased min-h-screen relative`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          
          {/* 2. Renders the fixed vertical background grid lines layout globally */}
          <BackgroundGrid />

          <Header />
          
          {/* Adds relative positioning and z-index to push content above the grid lines */}
          <main className="pt-[73px] relative z-10">
            {children}
          </main>
          
          <Footer />

          {/* 3. Renders the floating mobile bar at the absolute bottom */}
          <BottomNav />

          {process.env.NODE_ENV === 'production' && <Analytics />}

          <PwaInstallPrompt />
          <ChatBot />
        </ThemeProvider>
      </body>
    </html>
  )
}