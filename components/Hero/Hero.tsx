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
    <section className="home flex items-center w-full flex-col justify-center md:px-[15rem] px-10 md:py-[9rem] py-[3rem] text-center">
     <div className="py-6 text-4xl md:text-7xl  font-bold"><h1 >
      Level up your Web<span className='text-conone'> Presence</span></h1></div> 
      <p className='md:text-xl text-md'>FrontendFirst is dedicated to boosting your online presence with cutting-edge designs and agile methodologies. Don&apos;t miss out on the opportunity to enhance your business. Take action now and witness the remarkable benefits firsthand.</p>
      <a href='#'  data-target="project" className="transition delay-150 px-12 py-2 border border-primary text-primary hover:bg-primary hover:text-secondary mt-[3rem]"  onClick={handleLinkClick}>
       Explore my journey
      </a>
    </section>
  )
}

export default Hero
