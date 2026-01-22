import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Work from "./components/Work/Work";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
// import { projects } from "./constants";


function App() {

  return (
    <>
    
    <div className="bg-slate-900
">
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </div>
    </>
  )
}

export default App
