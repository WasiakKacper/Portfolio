import Nav from "./Components/Nav.jsx";
import Home from "./Components/Home.jsx";
import Projects from "./Components/Projects.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import "./App.css";
import { useState, useEffect } from "react";

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
      <Home />
      <Projects />
      <section className="w-full h-full bg-[url(Images/background.png)] bg-cover">
        <About />
        <Contact />
      </section>
    </>
  );
}

export default App;
