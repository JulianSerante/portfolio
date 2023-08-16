'use client'

import { Education } from "@/components/Education"
import Layout from "../_app"
import { Technologies } from "@/components/Technologies"
import { AnimatePresence, motion } from "framer-motion"
import { routeAnimation } from "../../../animations"

const Resume = () => {
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div className="px-6 py-2" key='resume' variants={routeAnimation} initial='initial' animate='animate' exit='exit'>
          <Education/>
          <br />

          <Technologies/>
        </motion.div>
      </AnimatePresence>
    </Layout>
  )

}

export default Resume