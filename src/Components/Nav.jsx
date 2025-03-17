import Styles from "../Styles.js";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-scroll";

function Nav() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(true);
    }, 600);
  }, []);

  return (
    <motion.nav
      className="w-[99%] md:w-[60%] fixed bottom-0 left-1/2 -translate-x-1/2 bg-(--dark) rounded-t-3xl z-10000"
      initial={{ scaleY: 0, height: 0 }}
      whileInView={isActive ? { scaleY: 1, height: "auto" } : {}}
      transition={{ duration: 0.4, delay: 2.3 }}
      viewport={{ once: true }}
    >
      <ul className="w-full h-15 text-(--white) text-2xl lg:text-4xl font-[Joan] flex flex-row justify-center lg:gap-5 p-3 tracking-[3px] lg:tracking-[4px]">
        <li>
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className={Styles.aTag}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            spy={true}
            smooth={true}
            duration={500}
            className={Styles.aTag}
          >
            Projekty
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            spy={true}
            smooth={true}
            duration={500}
            className={Styles.aTag}
          >
            O mnie
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            spy={true}
            smooth={true}
            duration={500}
            className={Styles.aTag}
          >
            Kontakt
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
}

export default Nav;
