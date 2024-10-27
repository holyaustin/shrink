import type { Metadata, Viewport } from 'next'
import '../styles/globals.css'
import { Providers } from './providers'
import NavigationComponent from "@/components/navigation"
import { GoogleAnalytics } from '@next/third-parties/google'
import { appFont, inter } from './fonts'

export const metadata: Metadata = {
  manifest: '/manifest.json',
  title: 'SHRINK.AI',
  description: 'Shrink.ai is an innovative generative AI platform developed to enhance social media content delivery with real-time compression and optimization. By harnessing LivePeer&aposs decentralized video streaming and Zora&#39s blockchain capabilities, Shrink.ai offers creators efficient tools for content scalability and security.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en" className={`comfort ${inter.className} ${appFont.className}`}>
      <body>
        <Providers>
          <NavigationComponent />
          {children}
        </Providers>
      </body>

      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GID!} />
    </html >
  )
}