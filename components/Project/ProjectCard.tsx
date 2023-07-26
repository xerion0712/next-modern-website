import { Projects } from "./utils/ProjectDB";
import Image from "next/image";
import { Zoom } from "react-awesome-reveal"
const ProjectCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <Zoom triggerOnce >
        {Projects.map((item) => (
          <div key={item.title} className="relative bg-white shadow-md rounded-lg overflow-hidden">
            <div className="h-40 sm:h-56 md:h-[12rem] relative">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                className="transform transition-transform duration-300 hover:scale-110"
              />
            </div>
           
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default ProjectCard;
