'use client'

import { projects as projectsData } from "@/data"
import Layout from "../_app"
import ProjectCard from "@/components/ProjectCard"
import ProjectsNavBar from "@/components/ProjectsNavBar"
import { useState } from "react"
import { Category } from "@/type"
import { AnimatePresence, motion } from "framer-motion"
import { fadeInUp, routeAnimation, stagger } from "../../../animations"

const Projects = () => {

  const [projects, setProjects] = useState(projectsData)
  const [active, setActive] = useState('all')

  const [showDetail, setShowDetail] = useState< number | null >(null)

  const handleFilterCategory = (category:Category | 'all') => {
    if(category === 'all'){
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter(project => project.category.includes(category));
    setProjects(newArray)
    setActive(category)
  }

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }} key='projects' variants={routeAnimation} initial='initial' animate='animate' exit='exit'>
          <ProjectsNavBar handleFilterCategory = {handleFilterCategory} active = {active}/>

          <motion.div className="relative grid grid-cols-12 gap-4 my-3" variants={stagger} initial='initial' animate='animate'>
            {
              projects.map(project => (
                <motion.div className="col-span-12 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 sm:col-span-6 lg:col-span-4" key={project.name} variants={fadeInUp}>
                  <ProjectCard 
                    project={project} 
                    showDetail={showDetail} 
                    setShowDetail={setShowDetail}/>
                </motion.div>
              ))
            }
          </motion.div>
          <div className="flex justify-center mt-10 mb-4 md:mt-32">
            <h2 className="px-4 py-1 text-xl font-bold tracking-wider bg-blue-300 rounded-md dark:bg-green-400 dark:text-black">More projects coming soon...</h2>
          </div>

        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}

export default Projects