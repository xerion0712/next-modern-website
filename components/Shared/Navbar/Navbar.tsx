import style from "./style.module.css";
import Image from "next/image";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

export default function Navbar() {
  const [offCanvas, setOffCanvas] = useState(false);
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetClassName = event.currentTarget.getAttribute('data-target');
    const targetElements = document.querySelectorAll(`.${targetClassName}`);
    if (targetElements.length > 0) {
      targetElements[0].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="flex justify-between items-center lg:px-[12rem] py-4 px-[1.5rem]">
        <Image src="/img/logo.png" width={150} height={80} alt="logo"/>
        <OutsideClickHandler onOutsideClick={() => setOffCanvas(false)}>
          <Image
            src="/img/menu.svg"
            width={32}
            height={32}
            className="cursor-pointer"
            onClick={() => setOffCanvas(true)} alt="openmenu"
          />
        </OutsideClickHandler>
      </nav>
      <div className={`${style.canvas_menu} ${offCanvas ? style.active : ""} `}>
        <div className={style.close_icon}>
          <Image
            src="/img/close.svg"
            width={50}
            height={50}
            onClick={() => setOffCanvas(false)} alt="closemenu"
          />
        </div>
        <div className={style.canvas_content}>
         
          <div className={style.menu}>
            <h4>Menu</h4>
            <p style={{ marginTop: 0 }}>
              <a href="#" data-target="home" onClick={handleLinkClick}>
                Home
              </a>
            </p>
            <p>
              <a href="#"  data-target="about" onClick={handleLinkClick}>
                About
              </a>
            </p>
            <p>
              <a href="#"  data-target="project" onClick={handleLinkClick}>
                Projects
              </a>
            </p>
            <p>
              <a href="#"  data-target="contact" onClick={handleLinkClick}>
                Contact
              </a>
            </p>
          </div>
        </div>
        <div className={style.social}>
              <a href="https:www.instagram.com/frontendartist">
                <img src="/img/Instagram.svg" />
              </a>
              <a href="https:www.linkedin.com/in/maryamtufail">
                <img src="/img/Linkedin.svg" />
               
              </a>
            </div>
        <div className={style.email}>
          <p>Get in touch</p>
          <h2>
            <u>maryamtufail78@gmail.com</u>
          </h2>
        </div>
        
      </div>
    </>
  );
}