import React from "react";

const DownloadResumeButton = () => {
  const handleDownload = () => {
    const fileUrl =
      "https://drive.google.com/file/d/1sxInnXIDxmRl1jVd3laDMqzE6sxdxYme/view?usp=sharing";

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
      className="transition delay-150 w-[13rem] px-2 py-2 border border-primary text-primary hover:bg-primary hover:text-secondary"
    >
      Download Resume
    </button>
  );
};

export default DownloadResumeButton;
