import { Category } from "@/type";
import { FunctionComponent } from "react";

export const NavItem:FunctionComponent<{value:Category | 'all'}> = ({value}) => {
    return (
        <li className="capitalize cursor-pointer hover:text-green">
            {value}
        </li>
    )
}

const ProjectsNavBar = () => {
    return (
        <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
            <NavItem value="all"/>
            <NavItem value="react"/>
            <NavItem value="next"/>
            <NavItem value="redux"/>
            <NavItem value="redux toolkit"/>
            <NavItem value="node"/>
            <NavItem value="express"/>
            <NavItem value="postgre"/>
            <NavItem value="mongo"/>
        </div>
    )
}

export default ProjectsNavBar;