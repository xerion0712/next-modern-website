import React from "react";
// import DownloadResumeButton from "../Shared/DownloadResumeButton";
import Image from "next/image";

const About = () => {
  return (
    <section className="about flex md:flex-row flex-col bg-contwo items-center w-full justify-center py-24">
      <div className="flex md:w-1/4 justify-center">
        <Image
          src="/img/frontendabout.svg"
          alt="About"
          className="object-fit w-[30rem] h-auto"
          width={1070}
          height={1070}
        />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center px-[3rem] py-[2rem]">
        <h2 className="text-2xl font-bold mb-4 text-primary">About</h2>
        <h3 className="text-5xl font-semibold mb-4 text-conone">Frontend Developer</h3>
        <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis mattis lectus. Nunc ultricies auctor dignissim. Integer ullamcorper eleifend ex, a rutrum justo. Phasellus sagittis dapibus nulla et consectetur. Maecenas placerat nec quam at pellentesque. Phasellus in enim ut lectus congue rhoncus. Fusce sagittis leo sed nibh feugiat, nec venenatis nunc vehicula. Suspendisse arcu felis, tincidunt nec pulvinar in, convallis sodales massa. Nullam eget ex mauris. Donec sed nibh mauris. Donec scelerisque ante nisi, a faucibus nulla maximus vehicula. In imperdiet maximus magna non venenatis. Nam a pellentesque libero. Suspendisse aliquet urna nec metus interdum cursus.
        </p>
        {/* <DownloadResumeButton /> */}
      </div>
    </section>
  );
};

export default About;
