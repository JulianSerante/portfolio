'use client'

import { projects as projectsData } from "@/data"
import Layout from "../_app"
import ProjectCard from "@/components/ProjectCard"
import ProjectsNavBar from "@/components/ProjectsNavBar"
import { useState } from "react"
import { Category } from "@/type"

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
      <div className="px-5 py-2 overflow-y-scroll " style={{ height: "65vh" }}>
        <ProjectsNavBar handleFilterCategory = {handleFilterCategory} active = {active}/>

        <div className="relative grid grid-cols-12 gap-4 my-3">
          {
            projects.map(project => (
              <div className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200" key={project.name}>
                <ProjectCard project={project} key={project.name}/>
              </div>
            ))
          }
        </div>
      </div>
    </Layout>
  )
}

export default Projects