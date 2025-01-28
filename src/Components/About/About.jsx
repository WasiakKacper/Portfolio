//Imports
import Image from "/Images/AboutMeSticker.svg";
import "./About.css";
import { motion } from "motion/react";
import { useRef } from "react";
import { useEffect } from "react";

//Component
const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > aboutRef.current.getBoundingClientRect().y + 100) {
        document.body.style.backgroundColor = "#9a80e9";
        document.body.style.transition = "300ms ease";
      } else {
        document.body.style.backgroundColor = "#fff";
        document.body.style.transition = "300ms ease";
      }
    });
  }, []);

  return (
    <motion.main id="about">
      <motion.h1
        initial={{ transform: "translateY(500px)", opacity: 0 }}
        whileInView={{ transform: "translateY(0px)", opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        viewport={{ once: true }}
      >
        O mnie
      </motion.h1>
      <section ref={aboutRef}>
        <motion.p
          initial={{ transform: "translateX(-500px)", opacity: 0 }}
          whileInView={{ transform: "translateX(0px)", opacity: 1 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          dignissimos aut impedit nisi laboriosam dolores nemo fugit. Placeat,
          velit possimus architecto excepturi non aliquam dolores, quam, atque
          repudiandae illo at.
        </motion.p>
        <motion.img
          src={Image}
          alt="Kacper Wasiak image"
          initial={{ transform: "translateX(500px)", opacity: 0 }}
          whileInView={{ transform: "translateX(0px)", opacity: 1 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
        />
      </section>
    </motion.main>
  );
};

export default About;
