'use client'

import Layout from './_app'
import { services } from '../data'
import { usePathname } from 'next/navigation'

export default function About() {

const pathname = usePathname()
console.log(services);


  return (
    <Layout>
      <div className='text-black'>
        About page
      </div>
    </Layout>
  )
}
