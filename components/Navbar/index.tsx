import style from "./style.module.css";
import Image from "next/image";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

export default function Navbar() {
  const [offCanvas, setOffCanvas] = useState(false);

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
              <a href="/" onClick={() => setOffCanvas(false)}>
                Home
              </a>
            </p>
            <p>
              <a href="featured" onClick={() => setOffCanvas(false)}>
                Featured
              </a>
            </p>
            <p>
              <a href="projects" onClick={() => setOffCanvas(false)}>
                Projects
              </a>
            </p>
            <p>
              <a href="testimoni" onClick={() => setOffCanvas(false)}>
                Testimoni
              </a>
            </p>
          </div>
        </div>
        <div className={style.social}>
              <a href="https:www.instagram.com/frontendartist">
                <img src="/img/Instagram.svg" />
                <span>&nbsp; Instagram</span>
              </a>
              <a href="https:www.linkedin.com/in/maryamtufail">
                <img src="/img/Linkedin.svg" />
                <span>&nbsp; Linkedin</span>
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