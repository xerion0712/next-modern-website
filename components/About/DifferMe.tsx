import Image from "next/image";
import { Zoom } from "react-awesome-reveal";


const DifferMe = () => {
  return (
    <section className="about flex md:flex-row flex-col bg-blue items-center w-full justify-center text-primary py-[5rem] px-1">
      <div className=" flex flex-col max-w-screen-sm md:px-[4rem] py-[1rem] px-3 leading-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-2">Way make us differ from other</h2>
        <h2 className="text-md md:text-xl mb-2">Exponential growth, optimizing performance and maximizing potential in the ever-evolving digital landscape.</h2>
        <p className="border-primary border text-md p-5 mt-2 rounded-lg">1. Understand &amp; Research </p>
        <p className="border-primary border text-md p-5 mt-2 rounded-lg">2. Develop Responsive layout  </p>
        <p className="border-primary border text-md p-5 mt-2 rounded-lg">3. Test Responsiveness &amp; Functionality </p>
        <p className="border-primary border text-md p-5 mt-2 rounded-lg">4. Deploy and Feedback </p>
        <p className="border-primary border text-md p-5 mt-2 rounded-lg">5. Continuous Learning &amp; Growth  </p>
      </div>
      <Zoom triggerOnce className="flex px-2 md:w-1/2 justify-center items-center">
        <Image
          src="/img/worklikeit.png"
          alt="About"
          className="px-2 w-[17rem] md:w-[25rem] h-auto"
          width={700}
          height={800}
        />

      </Zoom>
    </section>
  );
};

export default DifferMe;
