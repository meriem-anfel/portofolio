import Header from "./components/Header";
import Home from "./components/Home";
import ProjectShowcase from "./components/ProjectShowcase";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />

      <main>
        <section id="home">
          <Home />
        </section>

        <section id="projects">
          <ProjectShowcase />
        </section>

        <section id="skills">
          <About />
        </section>

        <section id="contact">
          <Contact />
        </section>
        
          <Footer />
       
      </main>
    </>
  );
}

export default App;
