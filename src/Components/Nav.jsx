import Styles from "../Styles.js";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

function Nav() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(true);
    }, 600);
  }, []);

  return (
    <motion.nav
      className="w-[60%] fixed bottom-0 left-1/2 -translate-x-1/2 bg-(--dark) rounded-t-3xl z-10000"
      initial={{ scaleY: 0, height: 0 }}
      whileInView={isActive ? { scaleY: 1, height: "auto" } : {}}
      transition={{ duration: 0.4, delay: 2.3 }}
      viewport={{ once: true }}
    >
      <ul className="w-full h-15 text-(--white) text-2xl lg:text-4xl font-[Joan] flex flex-row justify-center lg:gap-5 p-3 tracking-[3px] lg:tracking-[4px]">
        <li>
          <a href="#" className={Styles.aTag}>
            Home
          </a>
        </li>
        <li>
          <a href="#" className={Styles.aTag}>
            Projekty
          </a>
        </li>
        <li>
          <a href="#" className={Styles.aTag}>
            O mnie
          </a>
        </li>
        <li>
          <a href="#" className={Styles.aTag}>
            Kontakt
          </a>
        </li>
      </ul>
    </motion.nav>
  );
}

export default Nav;
