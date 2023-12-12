import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

import { Providers } from '@/shared/providers'
import { Header } from '@/widgets/header'

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Bestshave.ru • Только качественные товары для мужчин',
  description:
    'Bestshave — интернет-магазин косметики и аксессуаров для бритья',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={montserrat.variable}>
      <Providers>
        <body className="flex flex-col h-screen">
          <Header />
          <main className="grow max-lg:pb-14">{children}</main>
        </body>
      </Providers>
    </html>
  )
}
