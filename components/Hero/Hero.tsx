import { Slide, Roll } from "react-awesome-reveal";

const Hero = () => {

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetClassName = event.currentTarget.getAttribute('data-target');
    const targetElements = document.querySelectorAll(`.${targetClassName}`);
    if (targetElements.length > 0) {
      targetElements[0].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="home flex items-center w-full flex-col justify-center md:px-[15rem] px-10 md:py-[8rem] py-[3rem] text-center">
      <div className="max-w-4xl mx-auto">     <Slide triggerOnce className="py-6 text-4xl md:text-6xl  font-bold"> <h1>Level up your Web<span className='text-conone'> Presence</span></h1></Slide>
        <Slide triggerOnce className='md:text-xl text-md'><p>FrontendFirst is dedicated to boosting your online presence with cutting-edge designs and agile methodologies. Don&apos;t miss out on the opportunity to enhance your business. Take action now and witness the remarkable benefits firsthand.</p></Slide></div>
      <Roll triggerOnce className="rounded-full transition delay-50 px-12 py-2 border border-primary text-primary hover:bg-primary hover:text-secondary mt-[3rem]">
        <a href='#' data-target="project" onClick={handleLinkClick}>
          Explore my journey
        </a>
      </Roll>
    </section>
  )
}

export default Hero
