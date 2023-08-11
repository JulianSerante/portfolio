import './globals.css'
import type { Metadata } from 'next'
import { Chakra_Petch } from 'next/font/google'
import { Providers } from './providers'

const chacka = Chakra_Petch({
  weight: '400',
  style: 'normal',
  preload: true,
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='md:h-full 2xl:w-full 2xl:h-full'>
      <head>
        <title>JS Portfolio</title>
      </head>
      <body className={`h-full bg-fixed bg-gradient-to-r from-green to-blue-500 dark:from-dark-500 dark:to-dark-700 dark:text-white ${chacka.className}`} style={{marginBottom:'0px'}}>
        <Providers>
          <div className='h-screen 2xl:flex 2xl:justify-center 2xl:items-center 2xl:h-screen'>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}