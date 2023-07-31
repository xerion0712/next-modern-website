import Image from "next/image";
import { Zoom } from "react-awesome-reveal";


const DifferMe = () => {
  return (
    <section className="about flex md:flex-row flex-col bg-secondary items-center w-full justify-center text-secondary py-[6rem]">
    
      <div className="md:w-[45%] w-full flex flex-col justify-center md:px-[6rem] py-[1rem] px-3 leading-6">
        <h2 className="text-3xl md:text-6xl font-bold mb-2">Way make me differ from other</h2>
        <h2 className="text-md md:text-xl mb-2">Exponential growth, optimizing performance and maximizing potential in the ever-evolving digital landscape.</h2>
     <p className="border-secondary border text-md p-5 mt-2 rounded-lg bg-[#FFECCC]">1. Understand &amp; Research </p>
     <p className="border-secondary border text-md p-5 mt-2 rounded-lg bg-[#FFECCC]">2. Develop Responsive layout  </p>
     <p className="border-secondary border text-md p-5 mt-2 rounded-lg bg-[#FFECCC]">3. Test Responsiveness &amp; Functionality </p>
     <p className="border-secondary border text-md p-5 mt-2 rounded-lg bg-[#FFECCC]">4. Deploy and Feedback </p>
      <p className="border-secondary border text-md p-5 mt-2 rounded-lg bg-[#FFECCC]">5. Continuous Learning &amp; Growth  </p>
      </div>
      <Zoom triggerOnce className="flex md:w-1/3 justify-center">
       
       <Image
         src="/img/workcycle.png"
         alt="About"
         className="px-2 w-[34rem] h-auto"
         width={1070}
         height={1070}
       />
  
   </Zoom>
    </section>
  );
};

export default DifferMe;
