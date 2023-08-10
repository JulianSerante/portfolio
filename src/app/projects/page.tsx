import { projects } from "@/data"
import Layout from "../_app"
import ProjectCard from "@/components/ProjectCard"

const Projects = () => {
  return (
    <Layout>
      <div className="px-5 py-2 overflow-y-scroll " style={{ height: "65vh" }}>
        <nav>Navbar</nav>

        <div className="grid grid-cols-12 gap-4 my-3 relative">
          {
            projects.map(project => (
              <div className="col-span-12 p-2 sm:col-span-6 lg:col-span-4 bg-gray-200 dark:bg-dark-200 rounded-lg">
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