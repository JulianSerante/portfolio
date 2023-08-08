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
    <html lang='en' className='2xl:w-full 2xl:h-full'>
      <body className={`h-full bg-fixed m-0 bg-gradient-to-r from-green to-blue-500 dark:from-dark-500 dark:to-dark-700 dark:text-white ${chacka.className}`} style={{marginBottom:'0px'}}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}