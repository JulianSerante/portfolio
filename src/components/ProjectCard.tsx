'use client'

import { IProject } from "@/type"
import { FunctionComponent } from "react"
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";

const ProjectCard:FunctionComponent<{

    project:IProject;

}> = ({
    project:{
        name,
        image_path,
        description,
        deployed_url,
        github_url,
        githubBack_url,
        category,
        key_techs,
    }
}) => {
    return (
        <div>
            <img src={image_path} alt={name} className="cursor-pointer"/>
            <p className="my-2 text-center">{name}</p>

        <div className="grid md:grid-cols-2">
            <div>
                <img src={image_path} alt={name} />
            </div>
            <a href={github_url}>
                <AiFillGithub/> <span>GitHub</span>
            </a>
            {
                githubBack_url && 
                <a href={githubBack_url}>
                    <AiFillGithub/> <span>GitHub Server</span>
                </a>
            }
            {
                deployed_url && 
                <a href={deployed_url}>
                    <AiFillProject/> <span>Project</span>
                </a>
            }
        </div>

        <div>
            <h2>{name}</h2>
            <h3>{description}</h3>
            <div>
                {
                    key_techs.map(tech => 
                        <span key={tech}>
                            {tech}
                        </span>    
                    )
                }
            </div>
        </div>

        <button>
            <MdClose size={30}/>
        </button>

        </div>
    )
}

export default ProjectCard;