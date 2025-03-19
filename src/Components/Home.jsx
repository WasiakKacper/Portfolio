import Styles from "../Styles.js";
import { motion } from "motion/react";
import { homeData } from "./Data.js";

function Home() {
  /* Animation */

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center w-full h-[100vh]"
    >
      {/* HEADING */}
      <motion.h1
        className="flex items-center justify-center w-[90%] lg:w-[60%] text-7xl md:text-7xl lg:text-8xl text-(--white) font-bold  text-center  tracking-[5px] font-[Jost] rounded-2xl bg-(--dark) transition duration-500 ease-in-out"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.5 }}
      >
        KACPER WASIAK
      </motion.h1>
      <motion.h3
        className="text-3xl md:text-4xl my-5 font-[Joan]"
        initial={{ translateY: 20, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.3, ease: "easeInOut" }}
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
          <motion.div
            className={Styles.techStackBlock}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.1 }}
          >
            <motion.img
              src={homeData[0].url}
              alt={homeData[0].alt}
              initial={{ translateY: 20, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.1 }}
              className="group-hover:brightness-50"
              loading="lazy"
            />
            <span className={Styles.span}>{homeData[0].name}</span>
          </motion.div>

          {/* CSS */}
          <motion.div
            className={Styles.techStackBlock}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.1 }}
          >
            <motion.img
              src={homeData[1].url}
              alt={homeData[1].alt}
              initial={{ translateY: 20, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.1 }}
              className="group-hover:brightness-50"
              loading="lazy"
            />
            <span className={Styles.span}>{homeData[1].name}</span>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className={`${Styles.techStackBlockWrapper} justify-start`}>
          {/* JAVASCRIPT */}
          <motion.div
            className={Styles.techStackBlock}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.1 }}
          >
            <motion.img
              src={homeData[2].url}
              alt={homeData[2].alt}
              initial={{ translateY: 20, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.1 }}
              className="group-hover:brightness-50"
              loading="lazy"
            />
            <span className={Styles.span}>{homeData[2].name}</span>
          </motion.div>
          {/* REACT */}
          <motion.div
            className={Styles.techStackBlock}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.1 }}
          >
            <motion.img
              src={homeData[3].url}
              alt={homeData[3].alt}
              initial={{ translateY: 20, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.1 }}
              className="group-hover:brightness-50"
              loading="lazy"
            />
            <span className={Styles.span}>{homeData[3].name}</span>
          </motion.div>
        </div>
      </section>
    </section>
  );
}

export default Home;
