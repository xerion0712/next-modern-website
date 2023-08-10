import DownloadResumeButton from "../Shared/DResume/DownloadResumeButton";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { Zoom } from "react-awesome-reveal";


const About = () => {
  return (
    <section className="about flex md:flex-row flex-col bg-yellow items-center w-full justify-center text-primary py-[6rem]">
      <Zoom triggerOnce className="flex max-w-screen-sm  justify-center">
        <Image
          src="/img/lapmp.png"
          alt="About"
          className="px-2 w-full h-auto"
          width={1070}
          height={1070}
        />

      </Zoom>
      <div className="max-w-screen-sm  flex flex-col justify-center md:px-[6rem] py-[1rem] px-3 leading-6">
        <h2 className="text-2xl font-semibold mb-2 text-accent">Hey, Meet Us! </h2>
        <h3 className="text-3xl md:text-4xl  font-semibold mb-4 text-hover">
          <Typewriter
            options={{
              strings: ["Designers", "Frontend Developers", "Tea Lovers", "Working Globally"],
              autoStart: true,
              loop: true,
            }}
          />
        </h3>
        <p className="mb-2 text-lg text-justify">
          We help entrepreneurs to level up online presence. Our main objective is to focus on every small points that other just forget. Becasue, We know the value of online pressence because we are in same boot for growing globally.
        </p>
        {/* <DownloadResumeButton /> */}
      </div>
    </section>
  );
};

export default About;
