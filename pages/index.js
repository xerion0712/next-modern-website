
import Head from "next/head";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";

export default function index() {
  return (
    <div>
   <Navbar/>
   <Hero/>
   <About/>
    </div>
  )
}
