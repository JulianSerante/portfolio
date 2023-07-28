'use client'

import React from 'react'
import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'
import { usePathname } from 'next/navigation'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <div className='grid grid-cols-12 gap-6 px-5 mt-20 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48 '>
    {/* // do this div style later (after putting the content) */}
      <div className='h-full col-span-12 p-4 text-base text-center bg-white lg:col-span-3 rounded-2xl '>
        {/* //!sidebar */}
        <SideBar />
      </div>
      <div className='flex flex-col col-span-12 overflow-hidden bg-white rounded-2xl dark:text-white lg:col-span-9'>
       {/* //!navbar */}
            <NavBar />
            <main className='mx-5'>{children}</main>
      </div>
    </div>

  )
}

export default Layout
