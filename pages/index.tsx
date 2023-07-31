import Navbar from "../components/Shared/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Project from "../components/Project/Project";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Shared/Footer/Footer";
import Skill from "../components/Skill/Skill";
import Service from "../components/Service/Service"
import DifferMe from "../components/About/DifferMe";

const Home = () => {
  return (
    <div>
   <Navbar/>
   <Hero />
   <Service/>
   <About/>
   <Skill/>
   <DifferMe/>
   <Project/>
   <Contact/>
   <Footer/>
    </div>
  )
}
export default Home;
