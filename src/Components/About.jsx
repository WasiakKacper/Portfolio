import { motion } from "motion/react";

function About() {
  return (
    <section
      id="about"
      className="w-full h-[auto] lg:h-[100vh] bg-[url('/Images/background.png')] bg-cover bg-center bg-fixed flex flex-col justify-between py-[5%]"
    >
      <motion.img
        src="/Images/About.svg"
        alt="O mnie"
        className="h-[200px] md:h-[300px] mx-auto"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 1, once: true }}
      />
      <motion.p
        className="text-xl md:text-3xl w-[80%] mt-[5%] mx-auto text-(--white)"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ amount: 0.4, once: true }}
      >
        Jestem 20-letnim studentem informatyki, a programowanie to moja pasja,
        którą rozwijam od 2022 roku. Tworzenie aplikacji pozwala mi nieustannie
        poszerzać swoje umiejętności i doskonalić warsztat. Specjalizuję się w
        technologiach frontendowych, takich jak React, JavaScript, HTML, CSS i
        Tailwind CSS, dbając o estetykę, wydajność oraz intuicyjność
        interfejsów. Do każdego projektu podchodzę z pełnym zaangażowaniem,
        dopracowując każdy detal, aby zapewnić jak najlepsze doświadczenie
        użytkownika. Nieustannie się uczę, śledzę nowinki technologiczne i
        rozwijam swoje umiejętności, aby tworzyć nowoczesne, dynamiczne i
        funkcjonalne aplikacje.
      </motion.p>
    </section>
  );
}

export default About;
