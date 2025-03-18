import "./App.css";

const Nav = lazy(() => import("./Components/Nav.jsx"));
import Home from "./Components/Home.jsx";
const Projects = lazy(() => import("./Components/Projects.jsx"));
const About = lazy(() => import("./Components/About.jsx"));
const Contact = lazy(() => import("./Components/Contact.jsx"));

import { useState, useEffect, lazy } from "react";
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
