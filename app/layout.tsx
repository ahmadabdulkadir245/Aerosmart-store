import { Urbanist } from 'next/font/google'

import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

import './globals.css'
import Header from '@/components/Header'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Aerosmart Store',
  description: 'An Ecommerce website for buying all home and building products and materials online',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        {/* <Navbar /> */}
        <Header/>
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
