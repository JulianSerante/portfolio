import { projects } from "@/data"
import Layout from "../_app"
import ProjectCard from "@/components/ProjectCard"

const Projects = () => {
  return (
    <Layout>
      <div>
        <nav>Navbar</nav>

        <div className="grid grid-cols-12 gap-4 my-3">
          {
            projects.map(project => (
              <div className="col-span-12 p-2 sm:col-span-6 lg:col-span-4">
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