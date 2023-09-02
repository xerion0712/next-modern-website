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
    <main className="home px-4 flex items-center w-full flex-col justify-center md:py-[16rem] py-[10rem] text-center bg-hero text-primary">
      <div className="max-w-6xl flex flex-col items-center">
        <h1 className="py-6 text-4xl md:text-6xl font-bold">
          LEVEL UP YOUR WEB<span className="text-hover"> PRESENCE</span>
        </h1>
        <div className="md:text-xl text-md">
          <p >
            Don&apos;t miss out on the opportunity to enhance your business.
          </p>
          <p>
            Take action now and witness the remarkable benefits firsthand.
          </p>
        </div>
          <a className=" font-bold cursor-pointer rounded-lg transition delay-50 px-12 py-2 border-2 border-accent text-priamry hover:border-hover visiable  mt-[3rem]" href="#contact" data-target="contact" onClick={handleLinkClick}>
            Book Now
          </a>
      </div>
    </main>
  );
};

export default Hero;
