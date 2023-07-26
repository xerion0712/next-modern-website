import ProjectCard from "./ProjectCard";
import { Slide } from "react-awesome-reveal"

const Project = () => {
 

  return (
    <section className="project md:px-[5rem] py-[4rem] bg-white flex flex-col justify-center">
      <div className="py-5">
        <Slide  triggerOnce className="text-2xl text-conone font-semibold"><p>Project</p></Slide>
        <Slide triggerOnce className=" pb-2 text-2xl md:text-4xl text-primary font-semibold"><p>Embark on a journey through my creations.</p></Slide>
        </div>
       <ProjectCard/>
   
    </section>
  );
};

export default Project;
