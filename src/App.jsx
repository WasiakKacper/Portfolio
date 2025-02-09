import Home from "./Components/Home/Home.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import "./App.css";
import { useRef, useEffect, useState } from "react";

function App() {
  //Navigation functions
  const handleUpScroll = () => {
    let scrollY = window.scrollY;
    const projectBottom = projectRef.current.getBoundingClientRect().bottom;
    const aboutBottom = aboutRef.current.getBoundingClientRect().bottom;

    if (scrollY > 0 && scrollY <= projectBottom) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (scrollY >= projectBottom && scrollY <= aboutBottom) {
      projectRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (scrollY > aboutBottom) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownScroll = () => {
    let scrollY = window.scrollY;
    const projectTop = projectRef.current.getBoundingClientRect().top;
    const aboutTop = aboutRef.current.getBoundingClientRect().top;

    if (scrollY >= 0 && scrollY <= projectTop) {
      projectRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (scrollY >= projectTop && scrollY <= aboutTop) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (scrollY >= aboutTop) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const [isActive, setIsActive] = useState(false);
  const [upArrow, setUpArrow] = useState(false);
  const [downArrow, setDownArrow] = useState(false);

  useEffect(() => {
    //Show upArrow and text
    document.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        setUpArrow(true);
        setIsActive(true);
      } else {
        setUpArrow(false);
      }

      //Show downArrow
      if (
        window.scrollY >=
        contactRef.current.getBoundingClientRect().bottom + 30
      ) {
        setDownArrow(true);
      } else {
        setDownArrow(false);
      }
    });
  }, []);

  return (
    <>
      <div className="arrows">
        <span className={isActive ? "active" : ""}>
          Kliknij żeby zobaczyć więcej
        </span>
        <p
          className={`icon-up ${upArrow ? "active" : ""}`}
          onClick={handleUpScroll}
        ></p>
        <p
          className={`icon-down${downArrow ? "active" : ""}`}
          onClick={handleDownScroll}
        ></p>
      </div>
      <section ref={homeRef}>
        <Home />
      </section>
      <section ref={projectRef}>
        <Projects />
      </section>
      <section ref={aboutRef}>
        <About />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
    </>
  );
}

export default App;
