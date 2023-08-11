import { services } from "@/data";
import ServiceCard from "./ServiceCard";

const AboutData = () => {
  return (
    <div className='grid gap-6 my-3 md:grid-cols-2'>
      {services.map((service) => (
        <div key={service.title} className="col-span-2 p-2 bg-gray-100 rounded-lg dark:bg-dark-200 md:col-span-1 ">
          <ServiceCard service={service} />
        </div>
      ))}
    </div>
  );
}


export default AboutData;

