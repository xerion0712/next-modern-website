import ProjectCard from "./ProjectCard";
import { Slide } from "react-awesome-reveal"
import { BsArrowUpRightCircle } from "react-icons/bs"
const Project = () => {


  return (
    <section className="project px-2 md:px-[5rem] py-[4rem] bg-primary flex flex-col justify-center">
      <div className="py-8 flex text-primary justify-between">
        <Slide triggerOnce className=" pb-2 text-xl md:text-2xl  font-semibold"><p>Embark on a journey through my creations.</p></Slide>
        <a className="w-[13rem] hover:text-conone" href="https://github.com/maryamtufail"><h2 className="text-xl  font-semibold">Want to See More <BsArrowUpRightCircle className="inline" /></h2></a>
      </div>
      <ProjectCard />
    </section>
  );
};

export default Project;
