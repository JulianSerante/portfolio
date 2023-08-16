'use client'

import { services } from "@/data";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../../animations";

const AboutData = () => {
  return (
    <motion.div className='grid gap-6 my-3 md:grid-cols-2' variants={stagger} initial='initial' animate='animate'>
      {services.map((service) => (
        <motion.div key={service.title} className="col-span-2 p-2 bg-gray-100 rounded-lg dark:bg-dark-200 md:col-span-1 " variants={fadeInUp} >
          <ServiceCard service={service} />
        </motion.div>
      ))}
    </motion.div>
  );
}


export default AboutData;

