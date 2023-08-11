'use client'

import React from 'react'
import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'
import { usePathname } from 'next/navigation'
import { Providers } from './providers'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <Providers>
      <div className='grid h-screen grid-cols-12 gap-6 px-5 py-5 overflow-y-auto 2xl:h-full lg:mb-0 md:mb-0 sm:px-10 md:px-20 lg:px-20 xl:px-20'>
      {/* // do this div style later (after putting the content) */}
        <div className='col-span-12 p-4 text-base text-center bg-white lg:col-span-3 rounded-2xl dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark'>
          {/* //!sidebar */}
          <SideBar />
        </div>
        <div className='flex flex-col col-span-12 bg-white rounded-2xl dark:bg-dark-500 dark:text-white lg:col-span-9 shadow-custom-light dark:shadow-custom-dark'>
        {/* //!navbar */}
              <NavBar />
              <main className='mx-5'>{children}</main>
        </div>
      </div>
    </Providers>
  )
}

export default Layout
