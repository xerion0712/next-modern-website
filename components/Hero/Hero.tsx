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
    <section className="home flex flex-col items-center w-full flex-col pt-[11rem] pb-[16rem] font-bold">
      <h1 className="py-6 text-5xl leading-tight md:text-7xl md:leading-tight lg:text-8xl lg:leading-tight text-center">
      Level Up your Web <span className='text-conone'>Presence</span> </h1>
      <p className='md:ml-[25rem] md:flex hidden justify-end text-xl w-1/3'>FrontendFirst, with its emphasis on modern designs and agile methods,  has proven to attract more customers than ever before. Don&apos;t hesitate any longer! Place your order now and experience the benefits firsthand.</p>
      <a href='#'  data-target="project" className="transform px-10 py-2 border border-primary text-primary hover:bg-primary hover:text-secondary mt-[2.5rem]"  onClick={handleLinkClick}>
       Explore my journey
      </a>
    </section>
  )
}

export default Hero
