import Styles from "../../Styles.js";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import PropTypes from "prop-types";
import homeData from "./Data.js";

function Home() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("load", () => {
      setTimeout(() => {
        setIsActive(true);
      }, 500);
      clearTimeout();
    });
  }, []);

  const TechStackTile = (props) => {
    return (
      <div
        className={`${Styles.techStackBlock} after:content-['${props.after}']`}
      >
        <motion.img
          src={props.url}
          alt={props.alt}
          initial={{ translateY: 20, opacity: 0 }}
          animate={
            isActive ? { translateY: 0, opacity: 1, type: "spring" } : {}
          }
          transition={isActive ? { delay: props.sleep, duration: 0.1 } : {}}
        />
      </div>
    );
  };

  TechStackTile.propTypes = {
    url: PropTypes.string,
    alt: PropTypes.string,
    sleep: PropTypes.number,
    after: PropTypes.string,
  };

  return (
    <main
      id="home"
      className="w-full  flex flex-col items-center justify-center my-10 md:my-60 z-1 "
    >
      {/* HEADING */}
      <motion.h1
        className="bg-(--dark) w-240 h-full text-8xl text-(--white) font-bold  flex items-center justify-center tracking-[5px] font-[Jost] rounded-2xl   transition duration-500 ease-in-out"
        initial={{ scaleY: 0 }}
        animate={isActive ? { scaleY: 1 } : {}}
        transition={isActive ? { duration: 0.3, ease: "easeInOut" } : {}}
      >
        KACPER WASIAK
      </motion.h1>
      <motion.h3
        className="text-4xl my-5 font-[Joan]"
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
        className="flex flex-col md:flex-row w-full items-center justify-center gap-10"
      >
        {/* LEFT */}
        <div className={`${Styles.techStackBolockWrapper} justify-end`}>
          {/* HTML */}
          <TechStackTile
            url={homeData[0].url}
            alt={homeData[0].alt}
            sleep={1.2}
            after={"HTML"}
          />
          {/* CSS */}
          <TechStackTile
            url={homeData[1].url}
            alt={homeData[1].alt}
            sleep={1.3}
            after={"CSS"}
          />
        </div>

        {/* RIGHT */}
        <div className={`${Styles.techStackBolockWrapper} justify-start`}>
          {/* JAVASCRIPT */}
          <TechStackTile
            url={homeData[2].url}
            alt={homeData[2].alt}
            sleep={1.4}
            after={"JavaScript"}
          />
          {/* REACT */}
          <TechStackTile
            url={homeData[3].url}
            alt={homeData[3].alt}
            sleep={1.5}
            after={"React"}
          />
        </div>
      </section>
    </main>
  );
}

export default Home;
