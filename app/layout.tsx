import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tite Manzi Sports Academy',
  description: 'Youth development, coach education, and tournament management — shaping the next generation of football stars.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white antialiased">
        {children}
      </body>
    </html>
  )
}
