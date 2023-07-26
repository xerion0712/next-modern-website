import DownloadResumeButton from "../Shared/DResume/DownloadResumeButton";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import {Zoom } from "react-awesome-reveal"
const About = () => {
  return (
    <section className="about flex md:flex-row flex-col bg-contwo items-center w-full justify-center py-[10rem]">
      <Zoom triggerOnce className="flex md:w-1/4 justify-center">
     <div>
        <Image
          src="/img/about.png"
          alt="About"
          className="object-fit w-[50rem] h-auto"
          width={1070}
          height={1070}
        />
        </div>
      </Zoom>
      <div className="md:w-1/2 w-full flex flex-col justify-center md:px-[8rem] py-[1rem] px-3">
        <h2 className="text-2xl font-bold mb-4 text-primary">About</h2>
        <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-conone">
        <Typewriter
            options={{
              strings: ["Frontend Developer", "Tea Lover", "Freelancer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h3>
        <p className="mb-9 text-md text-justify">
        Hello, I'm Maryam Tufail, a Mid-Level Front-End Developer with over 2 years of experience in crafting responsive UIs to drive business growth. My main objective is to continuously enhance my skills, enabling me to elevate customer engagement and establish a strong online presence that fosters business expansion.
        </p>
        <DownloadResumeButton />
      </div>
    </section>
  );
};

export default About;
