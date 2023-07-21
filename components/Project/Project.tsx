import ProjectCard from "./ProjectCard";
import {Zoom, Slide } from "react-awesome-reveal"

const Project = () => {
 

  return (
    <section className="project md:px-[10rem] py-[4rem] bg-white flex flex-col justify-center text-center">
      <div className="py-5 text-center">
        <Slide  triggerOnce className="text-2xl text-conone font-semibold"><p>Work</p></Slide>
        <Slide triggerOnce className=" px-2 text-2xl md:text-4xl text-primary font-semibold"><p>Embark on a journey through my creations.</p></Slide>
        </div>
        <Zoom triggerOnce> <ProjectCard/></Zoom>
   
    </section>
  );
};

export default Project;
