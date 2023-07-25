import { Projects } from "./utils/ProjectDB";
import Image from "next/image";

const ProjectCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {Projects.map((item) => (
        <div key={item.title} className="relative bg-white shadow-md rounded-lg overflow-hidden">
          <div className="h-48 sm:h-60 md:h-72 relative">
            <Image
              src={item.image}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="transform transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg sm:text-xl font-bold text-conone">{item.title}</h3>
            <p className="text-base py-4 pb-6">{item.description}</p>
            <div className="flex flex-wrap justify-center mb-4">
              {item.skills.map((skill) => (
                <span key={skill} className="inline-block bg-contwo text-primary font-bold text-sm px-4 py-1 mr-2 mb-2">
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex justify-center space-x-4">
              <a href={item.link} className="border-2 border-primary block text-center bg-primary text-secondary font-bold py-2 px-4 rounded-full transition duration-300 hover:bg-transparent hover:text-primary">
                See View
              </a>
              <a href={item.link} className="border-2 border-primary block text-center text-primary font-bold py-2 px-4 rounded-full transition duration-300 hover:text-secondary hover:bg-primary">
                GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
