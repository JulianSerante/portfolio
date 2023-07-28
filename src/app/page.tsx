import AboutData from "@/components/AboutData";
import Layout from "./_app";

export default function About() {
  return (
    <Layout>
      <div className="flex flex-col flex-grow px-6 text-black">
        <h5 className="text-lg text-justify">
          I&quot;m a Full Stack Developer with a background in international trade and customs that helped me work in teams, solve problems, organize time and responsibilities. I&quot;m specialized in Front-end, Back-end and database technologies. I have also knowledge in agile methodologies, GIT, data structure, algorithms, CSS frameworks, and software such as Postman and Visual Studio. I have experience working on full-stack projects using technologies such as React, Next.JS, Redux, Redux Toolkit, NodeJS, Express, PostgreSQL, MongoDB and in Scrum methodology. I have soft skills just like Git-Flow, versatility and curiosity. I&quot;ve also have a good English level: C2 - Proficient.
        </h5>
        <br />
        <h5 className="text-lg text-justify">
          Connect with me on LinkedIn or contact me by email at julian.serante@gmail.com to explore possible collaborations.
        </h5>
        <br />
        <div className="flex-grow p-4 pb-5 bg-gray-400" style={{ marginLeft: "-2.75rem", marginRight: "-2.75rem" }}>
          <h6 className="my-3 text-xl font-bold tracking-wide">What I offer?</h6>
          <div>
            <AboutData />
          </div>
        </div>
      </div>
    </Layout>
  );
}
