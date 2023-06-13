import React from "react";

const DownloadResumeButton = () => {
  const handleDownload = () => {
    const fileUrl =
      "https://drive.google.com/uc?export=download&id=1SGOX75Mt9PBI6JzgCqDKwLUs8FO0akKl";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="w-[10rem] p-2 border border-[#164E9F] text-black font-semibold hover:bg-[#164E9F] hover:text-white"
    >
      Download CV
    </button>
  );
};

export default DownloadResumeButton;
