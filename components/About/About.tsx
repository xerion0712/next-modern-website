import DownloadResumeButton from "../Shared/DResume/DownloadResumeButton";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { Zoom } from "react-awesome-reveal";


const About = () => {
  return (
    <section className="about flex md:flex-row flex-col bg-secondary items-center w-full justify-center text-secondary py-[8rem]">
      <Zoom triggerOnce className="flex md:w-1/3 justify-center">
       
          <Image
            src="/img/aboutfront.png"
            alt="About"
            className="px-2 w-[80rem] h-auto"
            width={1070}
            height={1070}
          />
     
      </Zoom>
      <div className="md:w-1/2 w-full flex flex-col justify-center md:px-[6rem] py-[1rem] px-3 leading-6">
        <h2 className="text-2xl font-semibold mb-2">Hey, Meet me! </h2>
        <h3 className="text-3xl md:text-4xl text-accent font-semibold mb-4 ">
          <Typewriter
            options={{
              strings: ["Frontend Developer", "Tea Lover", "Freelancer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h3>
        <p className="mb-2 text-lg text-justify">
          I&apos;m Maryam Tufail, a Mid-Level Front-End Developer with over 2
          years of experience in crafting responsive UIs to drive business
          growth. My main objective is to continuously enhance my skills,
          enabling me to elevate customer engagement and establish a strong
          online presence that fosters business expansion.
        </p>
        <DownloadResumeButton />
      </div>
    </section>
  );
};

export default About;
