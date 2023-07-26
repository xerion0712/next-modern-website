import Image from "next/image";
import ServiceCard from "./ServiceCard";
import { Slide } from "react-awesome-reveal"

const Service = () => {
 

  return (
    <section className="service md:px-[20rem] bg-white flex flex-col justify-center text-center">
   
       <ServiceCard/>
   
    </section>
  );
};

export default Service;