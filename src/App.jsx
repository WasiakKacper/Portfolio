import Home from "./Components/Home/Home.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import About from "./Components/About/About.jsx";
import "./App.css";
import { motion } from "motion/react";

function App() {
  const NavArrows = () => {
    const animations = [
      {
        backgroundColor: "#ffffff",
      },
      {
        backgroundColor: "#f1eaff",
      },
      {
        duration: 0.3,
        type: "ease",
      },
    ];

    return (
      <div id="nav">
        <motion.p
          id="up"
          className="icon-up"
          initial={animations[0]}
          whileHover={animations[1]}
          transition={animations[2]}
        ></motion.p>
        <motion.p
          id="down"
          className="icon-down"
          initial={animations[0]}
          whileHover={animations[1]}
          transition={animations[2]}
        ></motion.p>
      </div>
    );
  };

  return (
    <>
      <NavArrows />
      <Home />
      <Projects />
      <About />
    </>
  );
}

export default App;
