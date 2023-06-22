import Head from "next/head";
import Navbar from "../components/Shared/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Project from "../components/Project";
export default function index() {
  return (
    <div>
   <Navbar/>
   <Hero/>
   <About/>
   <Project/>
    </div>
  )
}
