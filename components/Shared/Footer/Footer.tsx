import {  FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';
import Image from "next/image";
const Footer = () => {

  return (
    <footer className="bg-primary p-[3rem] text-secondary items-center flex flex-col">
      <Image
            src="/img/frontendlogo.png"
            width={200}
            height={200}
            alt="logo"
          />
      <div className="mt-2 w-full flex md:flex-row flex-col px-7 py-[4rem] mx-auto  rounded-lg bg-secondary ">
        <div className="w-full md:w-1/2 mb-12 md:px-[4rem] ">
          <h3 className="text-xl md:text-4xl font-bold">Let&apos;s Meet for a Brown Tea <br />Chat - Virtually</h3>
          <p className="text-md mt-4">  &copy; {new Date().getFullYear()} FrontendFirst. All rights reserved.</p>
          <p className="text-sm"> Design and Developed by your trusty </p>
        </div>
        <div className="flex flex-col w-full md:w-1/2 justify-center text-lg md:text-4xl font-bold gap-2">
        <a className='flex items-center' href="#"><FiInstagram className=' mr-2 inline md:w-8 h-8'/> Instagram</a>
        <a className='flex items-center' href="#"> <FiLinkedin className=' mr-2 inline md:w-8 h-8'/> LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
