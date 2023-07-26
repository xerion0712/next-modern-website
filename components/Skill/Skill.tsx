import { FaJs, FaReact, FaNodeJs, FaGithub, FaGit, FaCode, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiMui, SiNpm, SiYarn, SiTypescript, SiVercel, SiNextdotjs, SiVisualstudio } from "react-icons/si";
import Marquee from 'react-fast-marquee';

const SkillsSection = () => {
  return (
    <section className="text-center py-5">
     <h3 className='text-3xl font-bold'> Tech <span className='text-conone'>Stack</span></h3>
      <div className="overflow-hidden py-5 px-[24rem]">
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
