import React from "react";
// import DownloadResumeButton from "../Shared/DownloadResumeButton";

const About = () => {
  return (
    <div className="lg:flex bg-white">
      <div className="w-full">
        <img
          src="https://metricool.com/wp-content/uploads/jason-blackeye-364785-2.jpg"
          alt="About"
          className="w-full"
        />
      </div>
      <div className="w-full flex flex-col justify-center px-[3rem] py-[2rem]">
        <h2 className="text-2xl font-bold mb-4 text-[#3294FE]">About</h2>
        <h3 className="text-5xl font-semibold mb-4 text-[#FFC107]">Frontend Developer</h3>
        <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis mattis lectus. Nunc ultricies auctor dignissim. Integer ullamcorper eleifend ex, a rutrum justo. Phasellus sagittis dapibus nulla et consectetur. Maecenas placerat nec quam at pellentesque. Phasellus in enim ut lectus congue rhoncus. Fusce sagittis leo sed nibh feugiat, nec venenatis nunc vehicula. Suspendisse arcu felis, tincidunt nec pulvinar in, convallis sodales massa. Nullam eget ex mauris. Donec sed nibh mauris. Donec scelerisque ante nisi, a faucibus nulla maximus vehicula. In imperdiet maximus magna non venenatis. Nam a pellentesque libero. Suspendisse aliquet urna nec metus interdum cursus.
        </p>
        {/* <DownloadResumeButton /> */}
      </div>
    </div>
  );
};

export default About;
