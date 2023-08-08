import { ISkill } from "@/type"
import { FunctionComponent } from "react"

export const Bar:FunctionComponent<{
    data:ISkill
}> = ({data: {Icon, level, name}}) => {
    return (
        <div className="my-2 font-bold text-white bg-gray-300 rounded-full">
            <div className="flex items-center object-fill px-2 py-1 rounded-full bg-gradient-to-r from-green-400 to-blue-500" style={{width: level}}>
                <div className="mr-2">
                    <Icon className="w-5 h-5 text-blue-950"/>
                </div>
                <div>
                    <span className="drop-shadow">{name}</span>
                </div>
            </div>
        </div>
    )
}