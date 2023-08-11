import { Slide, Roll } from "react-awesome-reveal";

const Hero = () => {
 
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetClassName = event.currentTarget.dataset.target;
    const targetElement = document.querySelector(`.${targetClassName}`);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  return (
    <main className="home px-4 flex items-center w-full flex-col justify-center  md:py-[11rem] py-[3rem] text-center bg-hero text-primary">
      <div className="max-w-3xl flex flex-col items-center">
        <Slide triggerOnce className="py-6 text-4xl md:text-6xl font-bold">
          <h1>
            LEVEL UP YOUR WEB<span className="text-hover"> PRESENCE</span>
          </h1>
        </Slide>
        <Slide triggerOnce className="md:text-xl text-md">
          <p>
            FrontendFirst is dedicated to boosting your online presence with cutting-edge designs and agile methodologies. Don&apos;t miss out on the opportunity to enhance your business. Take action now and witness the remarkable benefits firsthand.
          </p>
        </Slide>
      <Roll triggerOnce className="w-[16rem] font-bold cursor-pointer rounded-lg transition delay-50 px-12 py-3 border-2 border-accent text-priamry hover:border-hover visiable  mt-[3rem]">
        <a href="#contact" data-target="contact" onClick={handleLinkClick}>
          Book Now
        </a>
      </Roll>
      </div>
    </main>
  );
};

export default Hero;
