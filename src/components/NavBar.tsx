'use client'

import { useState, useEffect, FunctionComponent } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const NavItem: FunctionComponent<{
   active: string
   setActive: Function
   name: string
   route: string
}> = ({ active, setActive, name, route }) => {
   return active !== name ? (
      <Link legacyBehavior href={route}>
         <a id='link'>
            <span
               className='mx-2 text-black cursor-pointer hover:border-b-4 hover:text-green'
               onClick={() => setActive(name)}>
               {name}
            </span>
         </a>
      </Link>
   ) : null
}

const Navbar = () => {
   const pathname = usePathname()

   const [active, setActive] = useState('')

   useEffect(() => {
      if (pathname === '/') setActive('About')
      else if (pathname === '/projects') setActive('Projects')
      else if (pathname === '/resume') setActive('Resume')
   }, [])

   return (
      <div className='flex items-center justify-between px-5 py-3 my-3 border-b border-black rounded-b-lg'>
         <span className='text-xl font-bold border-b-4 text-green md:text-2xl border-green'>
            {active}
         </span>

         <div className='flex space-x-5 text-lg'>
            <NavItem
               active={active}
               setActive={setActive}
               name='About'
               route='/'
            />
            <NavItem
               active={active}
               setActive={setActive}
               name='Resume'
               route='/resume'
            />
            <NavItem
               active={active}
               setActive={setActive}
               name='Projects'
               route='/projects'
            />
         </div>
      </div>
   )
}

export default Navbar