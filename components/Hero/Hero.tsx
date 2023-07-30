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
    <section className="home flex items-center w-full flex-col justify-center md:px-[15rem] px-10 md:py-[7rem] py-[3rem] text-center bg-primary text-primary">
      <div className="max-w-4xl mx-auto"><Slide triggerOnce className="py-6 text-4xl md:text-6xl  font-bold"> <h1>Level up your Web<span className='text-conone'> Presence</span></h1></Slide>
        <Slide triggerOnce className='md:text-xl text-md'><p>FrontendFirst is dedicated to boosting your online presence with cutting-edge designs and agile methodologies. Don&apos;t miss out on the opportunity to enhance your business. Take action now and witness the remarkable benefits firsthand.</p></Slide></div>
      <Roll triggerOnce className="font-bold cursor-pointer rounded-lg transition delay-50 px-12 py-3  bg-paccent text-secondary hover:bg-saccent hover:text-primary mt-[3rem]">
        <a href='#' data-target="project" onClick={handleLinkClick}>
          Explore my journey
        </a>
      </Roll>
    </section>
  )
}

export default Hero
