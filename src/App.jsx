import Nav from "./Components/Nav.jsx";
import Home from "./Components/Home.jsx";
import Projects from "./Components/Projects.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import "./App.css";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

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
      <motion.section
        className="w-full h-full  bg-[url(Images/background.png)] bg-cover"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ amount: 0.3 }}
      >
        <About />
        <Contact />
      </motion.section>
    </>
  );
}

export default App;
