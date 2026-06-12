import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills"
import Projects from "./components/projects"
import Learning from "./components/Learning";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
     <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Projects />
      <Learning/>
      <Contact/>
      <Footer />
    </>
  );
}

export default App;