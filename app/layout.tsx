import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Blushing Bride — Wedding Photography & Cinematography',
  description:
    'Six ways to hold onto one day, forever. Luxury wedding photography & cinematography in Bangladesh.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}