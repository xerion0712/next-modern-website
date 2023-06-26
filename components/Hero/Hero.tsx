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
    <section className="home flex flex-col items-center justify-center lg:h-[68vh] h-screen text-center text-[#333333] font-semibold ">
      <h1 className="lg:text-7xl text-6xl">
        Baby Steps,
      </h1>
      <h2 className="lg:text-8xl text-6xl my-5">
       towards Dream
      </h2>
      <a href='#'  data-target="project" className="px-10 py-2 border border-white text-[#333333] hover:bg-white mt-2"  onClick={handleLinkClick}>
       Explore my journey
      </a>
    </section>
  )
}

export default Hero
