import { Education } from "@/components/Education"
import Layout from "../_app"
import { Technologies } from "@/components/Technologies"

const Resume = () => {
  return (
    <Layout>
      <div className="px-6 py-2">
        <Education/>
        <br />

        <Technologies/>
      </div>
    </Layout>
  )

}

export default Resume