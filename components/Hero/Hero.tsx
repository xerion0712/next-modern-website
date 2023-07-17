import React from 'react'

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
    <section className="home flex flex-col items-center w-full flex-col py-[12rem] text-center font-bold">
      <h1 className="py-5 text-5xl leading-tight md:text-6xl md:leading-tight lg:text-8xl lg:leading-tight">
      Level Up<br/>your <br/>Web Presence
      </h1>
      
      <a href='#'  data-target="project" className="transform px-10 py-2 border border-primary text-primary hover:bg-primary hover:text-secondary mt-[3rem]"  onClick={handleLinkClick}>
       Explore my journey
      </a>
    </section>
  )
}

export default Hero
