import { IService } from "@/type"
import { FunctionComponent } from "react"

const ServiceCard:FunctionComponent<{service:IService}> = ({service: {Icon, about, title}}) => {

    const createMarkup = () => {
        return{
            __html:about
        }
    }

    return (

        <div className="flex items-center justify-center p-2 space-x-4">
            <div className="flex items-center w-20 h-20 justify-left text-green">
                <Icon className="w-12 h-12"/>
            </div>
            <div>
                <h4 className="font-bold text-justify">{title}</h4>
                <p className="text-justify" dangerouslySetInnerHTML={createMarkup()}/>
            </div>
        </div>
    )
}

export default ServiceCard