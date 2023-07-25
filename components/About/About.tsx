import DownloadResumeButton from "../Shared/DResume/DownloadResumeButton";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import {Zoom } from "react-awesome-reveal"
const About = () => {
  return (
    <section className="about flex md:flex-row flex-col bg-contwo items-center w-full justify-center py-[3rem]">
      <Zoom triggerOnce className="flex md:w-1/4 justify-center">
     <div>
        <Image
          src="/img/frontendabout.svg"
          alt="About"
          className="object-fit w-[30rem] h-auto"
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
        <p className="mb-9 md:text-md text-sm text-justify">
          A mid-level Front-End Developer having 1.5+ years of experience, converting Figma designs into visually stunning and interactive user interfaces using the power of React.js and Next.js into pixel-perfect and interactive UIs. Some of my technical skills include HTML, CSS, Git, and Agile methodologies.
        </p>
        <DownloadResumeButton />
      </div>
    </section>
  );
};

export default About;
