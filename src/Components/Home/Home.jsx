import { useState, useEffect } from "react";
import "./Home.css";
import Logo from "/Images/avatar.svg";
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  const [startTypingUpperText, setStartTypingUpperText] = useState(false);
  const [startTypingLowerText, setStartTypingLowerText] = useState(false);

  useEffect(() => {
    const timerForUpperText = setTimeout(() => {
      setStartTypingUpperText(true);
    }, 1500);

    const timerForLowerText = setTimeout(() => {
      setStartTypingLowerText(true);
    }, 3000);
    return () => clearTimeout(timerForUpperText, timerForLowerText);
  }, []);

  return (
    <main>
      <section>
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <h1>
            {startTypingUpperText && (
              <Typewriter words={["Kacper Wasiak"]} typeSpeed={100} />
            )}
          </h1>
          <h2>
            {startTypingLowerText && (
              <Typewriter words={["Frontend Developer"]} typeSpeed={100} />
            )}
          </h2>
        </motion.header>
        <motion.nav
          initial={{ transform: "translateY(200px)", opacity: 0 }}
          animate={{ transform: "translateY(0px)", opacity: 1 }}
          transition={{ type: "linear", duration: 0.5, delay: 5 }}
        >
          <a
            href="https://www.facebook.com/kacper.wasiak.9216"
            className="icon-facebook"
            target="_blank"
          ></a>
          <a
            href="https://www.instagram.com/kacper_wasiak/"
            className="icon-instagram"
            target="_blank"
          ></a>
          <a
            href="https://github.com/WasiakKacper"
            className="icon-github-circled"
            target="_blank"
          ></a>
        </motion.nav>
      </section>
      <section>
        <motion.img
          src={Logo}
          alt="Kacper Wasiak Image"
          initial={{ transform: "translateX(-500px)" }}
          animate={{ transform: "translateX(0px)" }}
          transition={{ type: "spring", delay: 1 }}
        />
      </section>
    </main>
  );
}

export default Home;
