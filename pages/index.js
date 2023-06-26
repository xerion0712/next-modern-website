import Navbar from "../components/Shared/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import Project from "../components/Project/Project";
import Contact from "../components/Contact/Contact";
import Footer from "../Components/Shared/Footer/Footer";

export default function index() {
  return (
    <div>
   <Navbar/>
   <Hero/>
   <About/>
   <Project/>
   <Contact/>
   <Footer/>
    </div>
  )
}
