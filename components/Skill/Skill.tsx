import React from 'react';
import { FaJs, FaReact, FaNodeJs, FaGithub, FaGit, FaCode, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiMui, SiNpm, SiYarn, SiTypescript, SiVercel, SiNextdotjs, SiVisualstudio } from "react-icons/si";
import Marquee from 'react-fast-marquee';

const SkillsSection: React.FC = () => {
  return (
    <section className="py-8">
      <div className="w-full overflow-hidden">
        <Marquee direction="left" speed={50}>
          <FaJs className="icon" />
          <SiTypescript className="icon"/>
          <FaReact className="icon" />
          <SiNextdotjs className="icon"/>
          <FaNodeJs className="icon" />
          <FaGit className="icon" />
          <FaGithub className="icon" />
          <FaCode className="icon" />
          <SiVisualstudio className='icon'/>
          <FaBootstrap className="icon"/>
          <SiTailwindcss className="icon" />
          <SiMui className="icon"/>
          <SiYarn className="icon" />
          <SiNpm className="icon"/>
          <SiVercel className="icon"/>
        </Marquee>
      </div>
    </section>
  );
};

export default SkillsSection;
