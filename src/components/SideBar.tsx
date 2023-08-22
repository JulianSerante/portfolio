'use client'

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GrLocation } from 'react-icons/gr';
import { GiTie } from 'react-icons/gi';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { motion } from 'framer-motion';
 
export default function SideBar() {

    const {theme, setTheme} = useTheme()

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return(
        <div>
            <motion.div 
                      className="mt-4"
                      whileHover={{ scale: [null, 1.5, 1.4] }}
                      transition={{ duration: 0.3 }}
            >
                <Image 
                    src='/images/profile-pic.png'
                    alt='avatar'
                    className="mx-auto"
                    width={150}
                    height={150}
                    quality={100}
                />
            </motion.div>
            <motion.h3 className='mt-8 mb-4 text-3xl font-medium tracking-wider' whileHover={{ scale: [null, 1.5, 1.4] }} transition={{ duration: 0.3 }}>
                <span>Julian </span>
                Serante
            </motion.h3>
            <motion.p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500 dark:text-white' whileHover={{ scale: 1.07 }} onHoverStart={e => {}} onHoverEnd={e => {}}>Full Stack Web Developer</motion.p>
            <div className='flex flex-col justify-around 2xl:flex-row'>
                <motion.a 
                    className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500 " 
                    href='/assets/English CV - Julian Serante.pdf' 
                    download='English CV - Julian Serante.pdf'
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <GiTie className='w-6 h-6'/> Download English CV
                </motion.a>
                <motion.a 
                    className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500" 
                    href='/assets/CV - Julian Serante.pdf' 
                    download='CV - Julian Serante.pdf'
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <GiTie className='w-6 h-6'/> Download Spanish CV
                </motion.a>
            </div>

            <div className='flex w-9/12 mx-auto my-5 justify-evenly text-green md:w-full'>
                <a href="https://www.linkedin.com/in/julián-agustín-serante-742436124/">
                    <AiFillLinkedin className='w-8 h-8 cursor-pointer'/>
                </a>
                <a href="https://github.com/JulianSerante">
                    <AiFillGithub className='w-8 h-8 cursor-pointer'/>
                </a>
            </div>

            <div className='py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500' style={{marginLeft:'-1rem', marginRight: '-1rem'}}>
                <div className='flex items-center justify-center space-x-2 dark:text-white'>
                    <GrLocation className='p-1 rounded-full w-7 h-7 dark:bg-gray-200'/>
                    <span>Buenos Aires, Argentina</span>
                </div>
                <p className='my-2'>julian.serante@gmail.com</p>
            </div>


            <button className='w-8/12 px-5 py-2 font-bold text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none' onClick={() => window.open('mailto:julian.serante@gmail.com')}>Email me</button>
            <button 
            onClick={changeTheme}
            className='w-8/12 px-5 py-2 my-4 font-bold text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none'
            >
                Change theme
            </button>

        </div>
    )
}