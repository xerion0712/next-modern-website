import Image from "next/image";
import React from 'react'

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center lg:h-[68vh] h-screen text-center text-[#333333]">
      <h1 className="lg:text-7xl text-4xl font-bold">
        Baby Steps,
      </h1>
      <h2 className="lg:text-7xl text-4xl font-bold mb-8">
       towards Dream
      </h2>
      <button className="px-10 py-2 border border-white text-[#333333] font-semibold hover:bg-white ">
       Explore my journey
      </button>
    </section>
  )
}

export default Home
