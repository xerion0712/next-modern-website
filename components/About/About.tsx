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
            className="w-[80rem] h-auto"
            width={1070}
            height={1070}
          />
     
      </Zoom>
      <div className="md:w-1/2 w-full flex flex-col justify-center md:px-[6rem] py-[1rem] px-3 leading-6">
        <h2 className="text-2xl font-semibold mb-2">Hey, nice to meet you! </h2>
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
          Hello, I&apos;m Maryam Tufail, a Mid-Level Front-End Developer with over 2
          years of experience in crafting responsive UIs to drive business
          growth. My main objective is to continuously enhance my skills,
          enabling me to elevate customer engagement and establish a strong
          online presence that fosters business expansion.
        </p>
        {/* <div className="flex md:flex-row gap-8 font-bold text-md flex-wrap">
          <p>
            <Image src="/img/pixel.png"
            alt="About"
            className="inline mr-2 w-12 h-auto"
            width={500}
            height={500}/>
            Pixel-Perfect Web Pages
          </p>
          <p>
          <Image src="/img/delivery.png"
            alt="About"
            className="inline mr-2 w-12 h-auto"
            width={500}
            height={500}/>
            Efficient Project Delivery
          </p>
          <p>
          <Image src="/img/pixel.png"
            alt="About"
            className="inline mr-2 w-12 h-auto"
            width={500}
            height={500}/>
            Performance Optimization
          </p>
          </div> */}
        
        
        <DownloadResumeButton />
      </div>
    </section>
  );
};

export default About;
