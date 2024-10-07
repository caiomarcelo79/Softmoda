import type { Metadata } from 'next'
import './globals.css'
import Header from './components/header'

export const metadata: Metadata = {
  title: 'Softmoda',
  description: 'Seu gerenciador de loja de roupa',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // biome-ignore lint/a11y/useValidLang: <explanation>
    <html lang="pt-br">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
