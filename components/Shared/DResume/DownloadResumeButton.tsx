

const DownloadResumeButton = () => {
  const handleDownload = () => {
    const fileUrl =
      "https://drive.google.com/file/d/1rGSRkk90x1ajVLqU2DtGa8rwVTnz-ut_/view?usp=sharing";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "maryamtufail.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="font-bold cursor-pointer rounded-lg transition delay-50 px-2 py-3 border-2 border-accent text-priamry hover:border-hover visiable  mt-[2rem] w-[11rem]"
    >
      My Resume
    </button>
  );
};

export default DownloadResumeButton;
