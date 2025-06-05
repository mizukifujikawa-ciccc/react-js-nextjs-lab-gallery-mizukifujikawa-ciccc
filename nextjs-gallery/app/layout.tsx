import './globals.css'
import { ReactNode } from 'react'
import Nav from '@/components/Nav'

export const metadata = {
  title: 'NextJS Gallery',
  description: 'Gallery lab project',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  )
}
