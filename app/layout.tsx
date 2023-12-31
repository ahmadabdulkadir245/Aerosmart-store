import { ClerkProvider } from '@clerk/nextjs'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import Navbar from '@/components/navbar'
import { Poppins, Merriweather_Sans, Play , Iceland, Changa} from'next/font/google';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500'],
  subsets:['latin'],
  variable: "--poppins-font",
});
const iceland = Iceland({
  weight: ["400"],
  subsets:['latin'],
  variable: "--iceland-font",
});
const play = Play({
  weight: ['400', '700'],
  subsets:['latin'],
  variable: "--primary-font",
});
const changa = Changa({
  weight: ["400"],
  subsets:['latin'],
  variable: "--changa-font",
});

const merriweather = Merriweather_Sans({
  subsets:['latin'],
  variable: "--body-font",
});

import './globals.css'
import Header from '@/components/Header'


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
    <ClerkProvider>
    <html lang="en" className={`${poppins.variable} ${merriweather.variable} ${play.variable} ${iceland.variable} ${changa.variable} `}>
      <body>
        <ToastProvider />
        <ModalProvider />
        {/* <Navbar /> */}
        <Header/>
        {children}
      </body>
    </html>
    </ClerkProvider>
  )
}
