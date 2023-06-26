import Navbar from "../components/Shared/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Project from "../components/Project/Project";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
   <Navbar/>
   <Hero />
   <About/>
   <Project/>
   <Contact/>
   <Footer/>
    </div>
  )
}
export default Home;
