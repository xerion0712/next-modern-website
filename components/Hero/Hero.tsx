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
    <section className="home flex flex-col items-center w-full flex-col py-[16rem]  font-bold">
      <h1 className="py-6 text-5xl leading-tight md:text-7xl md:leading-tight lg:text-8xl lg:leading-tight text-center">
      Level Up your Web Presence
      </h1>
      <p className='pr-[19rem] w-full flex justify-end text-xl'>FrontendFirst, with its emphasis on modern designs and agile methods,  has<br/> proven to attract more customers than ever before. Don&apos;t hesitate any longer! <br/> Place your order now and experience the benefits firsthand.</p>
      <a href='#'  data-target="project" className="transform px-10 py-2 border border-primary text-primary hover:bg-primary hover:text-secondary mt-[2.5rem]"  onClick={handleLinkClick}>
       Explore my journey
      </a>
    </section>
  )
}

export default Hero
