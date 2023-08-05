import './globals.scss'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ShizzaHo Portfolio',
  description: 'Портфолио front-end разработчика',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
        <div className="globalContainer">
          {children}
        </div>
      </body>
    </html>
  )
}
