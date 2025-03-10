import { motion } from "motion/react";

function About() {
  return (
    <section id="about" className="w-full h-[100vh]">
      <div className="w-full flex justify-center">
        <motion.img
          src="/Images/About.svg"
          alt="O mnie"
          className="h-[300px]"
          initial={{ height: 0 }}
          whileInView={{ height: 300 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
        />
      </div>
      <motion.p
        className="text-5xl w-[50%] my-30 mx-auto text-(--white) pb-30"
        initial={{ translateY: 200, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        viewport={{ once: true }}
      >
        Lotem ipsum sit dolor amet Lotem ipsum sit dolor amet Lotem ipsum sit
        dolor amet Lotem ipsum sit dolor ametLotem ipsum sit dolor amet Lotem
        ipsum sit dolor amet Lotem ipsum sit dolor amet Lotem ipsum sit dolor
        ametLotem ipsum sit dolor amet Lotem ipsum sit dolor amet Lotem ipsum
        sit dolor amet Lotem.
      </motion.p>
    </section>
  );
}

export default About;
