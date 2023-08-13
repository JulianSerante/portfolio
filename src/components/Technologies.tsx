import { backend, database, frontend, languages, tools, workMethods } from "@/data"
import { Bar } from "./Bar"

export const Technologies = () => {
    return(
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">

                <div>
                    <h5 className="my-3 text-xl font-bold">Languages</h5>
                    <div className="my-2">
                        {
                            languages.map(language => <Bar data={language} key={language.name}/>)
                        }
                    </div>
                    <h5 className="my-3 text-xl font-bold">Front-End</h5>
                    <div className="my-2">
                        {
                            frontend.map(front => <Bar data={front} key={front.name}/>)
                        }
                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-xl font-bold">Back-End</h5>
                        <div className="my-2">
                            {
                                backend.map(back => <Bar data={back} key={back.name}/>)
                            }
                        </div>
                    <h5 className="my-3 text-xl font-bold">Database</h5>
                        <div className="my-2">
                            {
                                database.map(db => <Bar data={db} key={db.name}/>)
                            }
                        </div>
                </div>
                <div>
                    <h5 className="my-3 text-xl font-bold">Tools</h5>
                        <div className="my-2">
                            {
                                tools.map(tool => <Bar data={tool} key={tool.name}/>)
                            }
                        </div>
                    <h5 className="my-3 text-xl font-bold">Work methodologies</h5>
                        <div className="my-2">
                            {
                                workMethods.map(method => <Bar data={method} key={method.name}/>)
                            }
                        </div>
                </div>

        </div>
    )
}