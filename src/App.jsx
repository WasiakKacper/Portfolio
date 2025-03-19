import "./App.css";

import { Suspense, lazy } from "react";
import { Element } from "react-scroll";

import Nav from "./Components/Nav.jsx";
const Home = lazy(() => import("./Components/Home.jsx"));
const Projects = lazy(() => import("./Components/Projects.jsx"));
const About = lazy(() => import("./Components/About.jsx"));
const Contact = lazy(() => import("./Components/Contact.jsx"));

function App() {
  return (
    <>
      <Nav />
      <Suspense
        fallback={
          <section className={"loaderWrapper active"}>
            <div className="loader"></div>
          </section>
        }
      >
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
      </Suspense>
    </>
  );
}

export default App;
