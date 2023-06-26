import React from 'react'

const Home = () => {
  return (
    <section className="home flex flex-col items-center justify-center lg:h-[68vh] h-screen text-center text-[#333333] font-semibold ">
      <h1 className="lg:text-7xl text-6xl">
        Baby Steps,
      </h1>
      <h2 className="lg:text-8xl text-6xl my-5">
       towards Dream
      </h2>
      <button className="px-10 py-2 border border-white text-[#333333] hover:bg-white mt-2">
       Explore my journey
      </button>
    </section>
  )
}

export default Home
