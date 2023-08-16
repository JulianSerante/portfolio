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
                  <ProjectCard project={project}/>
                </motion.div>
              ))
            }
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}

export default Projects