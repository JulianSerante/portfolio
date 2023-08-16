'use client'

import { motion } from "framer-motion"
import { fadeInUp } from "../../animations"

export const Education = () => {



    return(
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div variants={fadeInUp} initial='initial' animate='animate'>
            <h5 className="my-3 text-2xl font-bold">Technology Education</h5>
            <div>
              <h5 className="my-2 text-xl font-bold">Full-Stack Web Developer</h5>
              <p className="font-semibold font-l">Henry Bootcamp (feb. 2023 - jul.2023)</p>
              <p className="my-3 ">700 horas de cursado teórico-práctico</p>
            </div>
          </motion.div>

        <div>
          <h5 className="my-3 text-2xl font-bold">No Technology Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Bachelor of International Trade</h5>
            <p className="font-semibold font-l">Universidad Nacional de Luján (feb. 2019 - present)</p>
          </div>
          <motion.div variants={fadeInUp} initial='initial' animate='animate'>
            <h5 className="my-2 text-xl font-bold">English (language)</h5>
            <p className="font-semibold font-l">Chicentre Pilar (2010 - 2018)</p>
            <p>Level: </p>
               <p>C1 - Proficiency (Anglia Examinations)</p>
               <p>C2 - Proficient (EF Standard English Test (EF SET))</p>
          </motion.div>
        </div>
      </div>
    )
}