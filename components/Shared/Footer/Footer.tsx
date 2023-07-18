import React from 'react';

const Footer = () => {
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetClassName = event.currentTarget.getAttribute('data-target');
    const targetElements = document.querySelectorAll(`.${targetClassName}`);
    if (targetElements.length > 0) {
      targetElements[0].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-200 py-12">
      <div className=" mx-auto px-2 flex flex-col items-center justify-center">
        <div className="text-gray-700 mb-6 uppercase text-conone ">
          <a
            href="#"
            data-target="about"
            className="mr-4"
            onClick={handleLinkClick}
          >
            About
          </a>
          <a
            href="#"
            data-target="project"
            className="mr-4 "
            onClick={handleLinkClick}
          >
            Projects
          </a>
          <a
            href="#"
            data-target="contact"
            className=""
            onClick={handleLinkClick}
          >
            Contact
          </a>
        </div>
        <div className="text-gray-700">
          &copy; {new Date().getFullYear()} FrontendFirst. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
