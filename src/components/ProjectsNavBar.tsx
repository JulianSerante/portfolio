import { Category } from "@/type";
import { FunctionComponent } from "react";

export const NavItem:FunctionComponent<{
    value:Category | 'all', 
    handleFilterCategory:Function
    active:string
}> = ({value, handleFilterCategory, active}) => {

    let className = "capitalize cursor-pointer hover:text-green"
    if (active === value) className += " text-green";

    return (
        <li className={className} onClick={() => handleFilterCategory(value)}>
            {value}
        </li>
    )
}

const ProjectsNavBar:FunctionComponent<{handleFilterCategory:Function, active:string}> = (props) => {
    return (
        <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
            <NavItem value="all" {...props}/>
            <NavItem value="react" {...props}/>
            <NavItem value="next" {...props}/>
            <NavItem value="redux" {...props}/>
            <NavItem value="redux toolkit" {...props}/>
            <NavItem value="node" {...props}/>
            <NavItem value="express" {...props}/>
            <NavItem value="postgre" {...props}/>
            <NavItem value="mongo" {...props}/>
        </div>
    )
}

export default ProjectsNavBar;