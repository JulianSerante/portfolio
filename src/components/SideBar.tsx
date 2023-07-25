'use client'

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GrLocation } from 'react-icons/gr';
import { GiTie } from 'react-icons/gi'
 
export default function SideBar() {
    return(
        <div>
            <img 
                src="https://res.cloudinary.com/dmtzjtgy8/image/upload/v1689709315/cyubbk8fm8ciuqcx5z5l.png" 
                alt="user avatar"
                className='w-32 h-32 mx-auto'
            />
            <h3 className='my-4 text-3xl font-medium tracking-wider'>
                <span>Julian </span>
                Serante
            </h3>
            <p className='px-2 py-1 my-3 bg-gray-200 rounded-full'>Full Stack Web Developer</p>
            <a 
                className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full' 
                href='' 
                download='name'
            >
                <GiTie className='w-6 h-6'/> Download CV
            </a>


            <div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full'>
                <a href="https://www.linkedin.com/in/julián-agustín-serante-742436124/">
                    <AiFillLinkedin className='w-8 h-8 cursor-pointer'/>
                </a>
                <a href="https://github.com/JulianSerante">
                    <AiFillGithub className='w-8 h-8 cursor-pointer'/>
                </a>
            </div>

            <div className='py-4 my-5 bg-gray-200' style={{marginLeft:'-1rem', marginRight: '-1rem'}}>
                <div className='flex items-center justify-center space-x-2'>
                    <GrLocation/>
                    <span>Buenos Aires, Argentina</span>
                </div>
                <p className='my-2'>julian.serante@gmail.com</p>
            </div>


            <button className='w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none' onClick={() => window.open('mailto:julian.serante@gmail.com')}>Email me</button>
            <button className='w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none'>Toggle theme</button>

        </div>
    )
}