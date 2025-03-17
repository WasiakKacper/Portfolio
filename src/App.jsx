import "./App.css";

import Nav from "./Components/Nav.jsx";
import Home from "./Components/Home.jsx";
import Projects from "./Components/Projects.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";

import { useState, useEffect } from "react";
import { Element } from "react-scroll";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.addEventListener("load", () => {
      setIsLoaded(true);
    });
  }, []);

  return (
    <>
      <section className={`loaderWrapper ${!isLoaded ? "active" : "unactive"}`}>
        <div className="loader"></div>
      </section>
      <Nav />
      <Element name="/">
        <Home />
      </Element>
      <Element name="/projects">
        <Projects />
      </Element>
      <Element name="/about">
        <About />
      </Element>
      <Element name="/contact">
        <Contact />
      </Element>
    </>
  );
}

export default App;
