import { Projects } from "./utils/ProjectDB";
import Image from "next/image";
import { Zoom } from "react-awesome-reveal";

const ProjectCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <Zoom triggerOnce>
        {Projects.map((item) => (
          <div key={item.title} className="relative bg-white shadow-md rounded-lg overflow-hidden">
            <div className="h-[13rem] md:h-[12rem] relative">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                className="transform transition-transform duration-300 hover:scale-110"
              />
            </div>
            {/* Hover content */}
            <div className="p-4 opacity-0 absolute top-0 left-0 h-full w-full bg-black bg-opacity-50 text-white transition-opacity duration-300 hover:opacity-100">
              <h3 className="flex justify-between"> <span className="text-lg sm:text-xl font-bold text-conone">{item.title} </span> 
               <a href={item.link} className="hover:text-conone">
                See View
              </a></h3>

              <p className="text-base py-4 pb-6">{item.description}</p>
              <div className="flex flex-wrap justify-center mb-4">
                {item.skills.map((skill) => (
                  <span key={skill} className="inline-block bg-contwo text-primary font-bold rounded-lg text-sm px-4 py-1 mr-2 mb-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default ProjectCard;
