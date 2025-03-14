import { motion } from "motion/react";

function About() {
  return (
    <section
      id="about"
      className="w-full h-[1000px] bg-[url('Images/background.png')] bg-cover bg-center bg-fixed"
    >
      <motion.img
        src="/Images/About.svg"
        alt="O mnie"
        className="h-[300px] mx-auto z-10"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 1, once: true }}
      />
      <motion.p
        className="text-5xl w-[50%] my-30 mx-auto text-(--white) pb-30 z-10"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ amount: 0.4, once: true }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi in
        fuga blanditiis deserunt maxime ipsa sequi alias laudantium quod saepe
        optio, quia est repellendus consequuntur, magnam veniam! Ex,
        reprehenderit? Incidunt Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dolores sunt illum distinctio quo aspernatur hic
        molestias dignissimos aut.
      </motion.p>
    </section>
  );
}

export default About;
