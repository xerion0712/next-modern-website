import React from "react";
import DownloadResumeButton from "../Shared/DownloadResumeButton";

const About = () => {
  return (
    <div className="lg:flex bg-[#8BB4BB]">
      <div className="w-full">
        <img
          src="https://metricool.com/wp-content/uploads/jason-blackeye-364785-2.jpg"
          alt="About"
          className="w-full"
        />
      </div>
      <div className="w-full flex flex-col justify-center px-[3rem] py-[2rem]">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <h3 className="text-5xl font-semibold mb-4">Frontend Developer</h3>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          convallis enim quis dolor tristique, at dapibus enim pharetra. Sed
          fermentum justo sed sapien porta, non efficitur lorem tristique.
        </p>
        {/* <button className="w-[10rem]  p-2 border border-[#164E9F] text-black font-semibold hover:bg-[#164E9F] hover:text-white">
       Download CV
      </button> */}
        <DownloadResumeButton />
      </div>
    </div>
  );
};

export default About;
