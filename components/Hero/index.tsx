import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center lg:h-[68vh] h-screen text-center">
      <h1 className="lg:text-7xl text-4xl font-bold ">
        Baby Steps,
      </h1>
      <h2 className="lg:text-7xl text-4xl font-bold mb-8">
       towards Dream
      </h2>
      <button className="px-10 py-2 border border-[#164E9F] text-black font-semibold hover:bg-[#164E9F] hover:text-white">
       Dig into my universe
      </button>
    </div>
  );
}