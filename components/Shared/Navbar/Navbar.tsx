import Image from "next/image";
import { useState, MouseEvent } from "react";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
import OutsideClickHandler from "react-outside-click-handler";

export default function Navbar() {
  const [offCanvas, setOffCanvas] = useState(false);
  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
    const targetClassName = event.currentTarget.getAttribute("data-target");
    const targetElements = document.querySelectorAll(`.${targetClassName}`);

    if (targetElements.length > 0) {
      targetElements[0].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="bg-primary fixed w-full z-50">
        <div className="container mx-auto py-2 px-4 md:px-12 flex items-center justify-between text-center">
          <a href="#" data-target="home" onClick={(e) => handleLinkClick(e)}>
            <Image
              src="/img/frontslogo.png"
              width={200}
              height={120}
              alt="logo"
            />
          </a>
          {/* Render the hamburger menu icon only on small screens */}
          <div className="md:hidden">
              <Image
                src="/img/nmenu.png"
                width={30}
                height={22}
                className="cursor-pointer"
                onClick={() => setOffCanvas(true)}
                alt="openmenu"
              />
          </div>
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8 text-lg items-center">
            <a href="#" data-target="home" onClick={(e) => handleLinkClick(e)} className="text-white hover:text-primary">
              Home
            </a>
            <a href="#" data-target="about" onClick={(e) => handleLinkClick(e)} className="text-white hover:text-primary">
              About
            </a>
            <a href="#" data-target="service" onClick={(e) => handleLinkClick(e)} className="text-white hover:text-primary">
              Service
            </a>
            <a href="#" data-target="contact" onClick={(e) => handleLinkClick(e)} className="text-white hover:text-primary">
              Contact
            </a>
            <a href="#" data-target="contact" onClick={(e) => handleLinkClick(e)} className="text-white hover:text-primary border-accent border px-4 rounded-lg py-1">
              Book Now
            </a> 
          </div>
        </div>
      </nav>
      {/* Render the off-canvas menu when offCanvas is true */}
      {offCanvas && (
        <div className="fixed z-50 bg-primary h-full w-[60%] right-0">
          <div className="container mx-auto py-8 px-4">
            <div className="flex justify-end">
              <button
                onClick={() => setOffCanvas(false)}
                className="text-white text-2xl focus:outline-none"
              >
                &#10005;
              </button>
            </div>
            {/* Mobile View */}
            <OutsideClickHandler onOutsideClick={() => setOffCanvas(false)}>
            <div className="flex flex-col pt-24 space-y-8 text-center">
            <a href="#" data-target="home" onClick={(e) => handleLinkClick(e)}  className="text-white hover:text-primary">
              Home
            </a>
            <a href="#" data-target="about" onClick={(e) => handleLinkClick(e)} className="text-white hover:text-primary">
              About
            </a>
              <a href="#" data-target="service" onClick={(e) => handleLinkClick(e)} className="text-white hover:text-primary">
                Service
              </a>
              <a href="#" data-target="contact" onClick={(e) => handleLinkClick(e)} className="text-white hover:text-primary">
                Contact
              </a>
            </div>
            <div className="flex justify-center mt-8">
              <a href="https://www.instagram.com/frontendfirst" aria-label="Instagram" className="text-white mr-4 hover:text-primary">
                <FiInstagram className="w-8 h-8" />
              </a>
              <a href="https:www.linkedin.com/in/maryam-tufail7" aria-label="Linkedin" className="text-white hover:text-primary">
                <FiLinkedin className="w-8 h-8" />
              </a>
            </div>
          </OutsideClickHandler>
          </div>
        </div>
      )}
    </>
  );
}
