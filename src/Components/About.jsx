import { motion } from "motion/react";

function About() {
  return (
    <section
      id="about"
      className="relative w-full h-[100vh] lg:h-[98vh] bg-[url('/Images/background.png')] bg-cover bg-center bg-fixed flex flex-col justify-evenly before:content-[''] before:block lg:before:none before:absolute before:inset-0 before:bg-black/10 before:brightness-75 *:z-10"
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
        className="w-[80%] h-[50%] overflow-y-scroll lg:overflow-y-auto text-(--white) text-xl md:text-3xl mt-[5%] mb-[5%] mx-auto "
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
