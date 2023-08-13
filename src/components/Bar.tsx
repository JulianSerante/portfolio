import { ISkill } from "@/type"
import { FunctionComponent } from "react"

export const Bar:FunctionComponent<{
    data:ISkill
}> = ({data: {Icon, level, name}}) => {
    return (
        <div className="grid w-auto my-2 font-bold text-white rounded-md bg-gradient-to-r from-blue-500 to-green-400">
            <div className="flex items-center px-2 py-1">
                <div className="mr-2">
                    <Icon className="w-6 h-auto text-dark"/>
                </div>
                    <span className="drop-shadow">{name}</span>
            </div>
        </div>
    )
}