import Styles from "../Styles.js";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import PropTypes from "prop-types";
import { homeData } from "./Data.js";

function Home() {
  const [isActive, setIsActive] = useState(false); //Load animations

  /* Animation */
  useEffect(() => {
    window.addEventListener("load", () => {
      setTimeout(() => {
        setIsActive(true);
      }, 500);
      clearTimeout();
    });
  }, []);

  /* TechStack component */
  const TechStackTile = (props) => {
    return (
      <motion.div
        className={Styles.techStackBlock}
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={isActive ? { delay: props.sleep, duration: 0.1 } : {}}
      >
        <motion.img
          src={props.url}
          alt={props.alt}
          initial={{ translateY: 20, opacity: 0 }}
          animate={isActive ? { translateY: 0, opacity: 1 } : {}}
          transition={isActive ? { delay: props.sleep, duration: 0.1 } : {}}
          className="group-hover:brightness-50"
        />
        <span className={Styles.span}>{props.technologyName}</span>
      </motion.div>
    );
  };

  TechStackTile.propTypes = {
    url: PropTypes.string,
    alt: PropTypes.string,
    sleep: PropTypes.number,
    technologyName: PropTypes.string,
  };

  return (
    <section
      id="home"
      className="w-full h-[100vh]  flex flex-col items-center justify-center z-1"
    >
      {/* HEADING */}
      <motion.h1
        className={Styles.h1}
        initial={{ scaleY: 0 }}
        animate={isActive ? { scaleY: 1 } : {}}
        transition={isActive ? { duration: 0.3, ease: "easeInOut" } : {}}
      >
        KACPER WASIAK
      </motion.h1>
      <motion.h3
        className="text-3xl md:text-4xl my-5 font-[Joan]"
        initial={{ translateY: 20, opacity: 0 }}
        animate={isActive ? { translateY: 0, opacity: 1 } : {}}
        transition={
          isActive ? { delay: 2, duration: 0.3, ease: "easeInOut" } : {}
        }
      >
        Frontend developer
      </motion.h3>

      {/* TECH STACK */}
      <section
        id="wrapper"
        className="flex w-[80%] md:w-[85%] flex-row gap-4 md:gap-7 items-center justify-center"
      >
        {/* LEFT */}
        <div className={`${Styles.techStackBlockWrapper} justify-end`}>
          {/* HTML */}
          <TechStackTile
            url={homeData[0].url}
            alt={homeData[0].alt}
            sleep={1.2}
            technologyName={homeData[0].name}
          />
          {/* CSS */}
          <TechStackTile
            url={homeData[1].url}
            alt={homeData[1].alt}
            sleep={1.3}
            technologyName={homeData[1].name}
          />
        </div>

        {/* RIGHT */}
        <div className={`${Styles.techStackBlockWrapper} justify-start`}>
          {/* JAVASCRIPT */}
          <TechStackTile
            url={homeData[2].url}
            alt={homeData[2].alt}
            sleep={1.4}
            technologyName={homeData[2].name}
          />
          {/* REACT */}
          <TechStackTile
            url={homeData[3].url}
            alt={homeData[3].alt}
            sleep={1.5}
            technologyName={homeData[3].name}
          />
        </div>
      </section>
    </section>
  );
}

export default Home;
