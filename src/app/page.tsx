'use client'

import AboutData from "@/components/AboutData";
import Layout from "./_app";
import { motion } from "framer-motion";
import { fadeInUp } from "../../animations";

export default function About() {
  return (
    <Layout>
      <div className="flex flex-col flex-grow px-6">
        
        <motion.h5 className="text-lg text-justify" variants={fadeInUp} initial='initial' animate='animate'>
          I&#39;m a Full Stack Developer with a background in international trade and customs that helped me improve skills such as teamwork, problem solving, organization of time and responsibilities. I&#39;m specialized in Front-end, Back-end and database technologies. Furthermore, I have a very good English level: C2 - Proficient.
        </motion.h5>
        <br />
        <motion.h5 className="text-lg text-justify" variants={fadeInUp} initial='initial' animate='animate'>
          Connect with me on LinkedIn or contact me by email to explore possible collaborations.
        </motion.h5>

        <br />
        <div className="flex-grow p-4 pb-5 bg-gray-300 dark:bg-gray-800" style={{ marginLeft: "-2.75rem", marginRight: "-2.75rem" }}>
          <h6 className="my-3 text-xl font-bold tracking-wide">What I offer?</h6>
          <div>
            <AboutData />
          </div>
        </div>
      </div>
    </Layout>
  );
}
