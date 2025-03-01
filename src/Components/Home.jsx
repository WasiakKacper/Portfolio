import Styles from "../Styles.js";
import { useState, useEffect } from "react";
import { motion, transform } from "motion/react";

function Home() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("load", () => {
      setTimeout(() => {
        setIsActive(true);
      }, 500);
    });
  }, []);

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
      <motion.section
        id="wrapper"
        className="flex flex-col md:flex-row w-full items-center justify-center gap-10"
      >
        {/* LEFT */}
        <div className={`${Styles.techStackBolockWrapper} justify-end`}>
          {/* HTML */}
          <div className={`${Styles.techStackBlock} after:content-['HTML']`}>
            <motion.img
              src="/Images/HTML_IMAGE.svg"
              alt="Tech stack: HTML"
              initial={{ translateY: 20, opacity: 0 }}
              animate={isActive ? { translateY: 0, opacity: 1 } : {}}
              transition={
                isActive ? { delay: 1.2, duration: 0.1, ease: "easeInOut" } : {}
              }
            />
          </div>
          {/* CSS */}
          <div className={`${Styles.techStackBlock} after:content-['CSS']`}>
            <motion.img
              src="/Images/CSS_IMAGE.svg"
              alt="Tech stack: CSS"
              className="saturate-120"
              initial={{ translateY: 20, opacity: 0 }}
              animate={isActive ? { translateY: 0, opacity: 1 } : {}}
              transition={
                isActive ? { delay: 1.3, duration: 0.1, ease: "easeInOut" } : {}
              }
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className={`${Styles.techStackBolockWrapper} justify-start`}>
          {/* JAVASCRIPT */}
          <div
            className={`${Styles.techStackBlock} after:content-['JavaScript']`}
          >
            <motion.img
              src="/Images/JavaScript_IMAGE.svg"
              alt="Tech stack: JavaScript"
              initial={{ translateY: 20, opacity: 0 }}
              animate={isActive ? { translateY: 0, opacity: 1 } : {}}
              transition={
                isActive ? { delay: 1.4, duration: 0.1, ease: "easeInOut" } : {}
              }
            />
          </div>
          {/* REACT */}
          <div className={`${Styles.techStackBlock} after:content-['React']`}>
            <motion.img
              src="/Images/React_IMAGE.svg"
              alt="Tech stack: React"
              initial={{ translateY: 20, opacity: 0 }}
              animate={isActive ? { translateY: 0, opacity: 1 } : {}}
              transition={
                isActive ? { delay: 1.5, duration: 0.1, ease: "easeInOut" } : {}
              }
            />
          </div>
        </div>
      </motion.section>
    </main>
  );
}

export default Home;
