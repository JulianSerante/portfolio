import AboutData from "@/components/AboutData";
import Layout from "./_app";

export default function About() {
  return (
    <Layout>
      <div className="flex flex-col flex-grow px-6">
        <h5 className="text-lg text-justify">
          I&#39;m a Full Stack Developer with a background in international trade and customs that helped me improve skills such as teamwork, problem solving, organization of time and responsibilities. I&#39;m specialized in Front-end, Back-end and database technologies. Furthermore, I have a very good English level: C2 - Proficient.
        </h5>
        <br />
        <h5 className="text-lg text-justify">
          Connect with me on LinkedIn or contact me by email to explore possible collaborations.
        </h5>
        <br />
        <div className="flex-grow p-4 pb-5 bg-gray-300 dark:bg-gray-800" style={{ marginLeft: "-2.75rem", marginRight: "-2.75rem" }}>
          <h6 className="my-3 text-xl font-bold tracking-wide">What I offer?</h6>
          <div>
            <AboutData />
          </div>
        </div>
      </div>
    </Layout>
  );
}
