

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
      className="font-bold cursor-pointer rounded-lg transition delay-50 px-12 py-3  bg-paccent text-secondary hover:bg-saccent hover:text-primary mt-[2rem] w-[11rem]"
    >
      About Me
    </button>
  );
};

export default DownloadResumeButton;
