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
      <div className="container mx-auto px-2 flex flex-col items-center justify-center">
        <div className="text-gray-700 mb-6 uppercase">
          <a
            href="#"
            data-target="about"
            className="mr-4 text-blue-500 hover:text-blue-600"
            onClick={handleLinkClick}
          >
            About
          </a>
          <a
            href="#"
            data-target="project"
            className="mr-4 text-blue-500 hover:text-blue-600"
            onClick={handleLinkClick}
          >
            Projects
          </a>
          <a
            href="#"
            data-target="contact"
            className="text-blue-500 hover:text-blue-600"
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
