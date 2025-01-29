import { useState, useEffect } from "react";
import "./Home.css";
import Logo from "/Images/avatar.svg";
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";
import PropTypes from "prop-types";
import links from "./Data/Home.js";

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

  const LinkToSocial = (props) => {
    return (
      <motion.a
        href={props.url}
        className={props.class}
        target="_blank"
        initial={{ transform: "translateY(0px)" }}
        whileHover={{ transform: "translateY(-10px)" }}
        transition={{ type: "spring", bounce: 0.4, duration: 0.3 }}
      ></motion.a>
    );
  };

  LinkToSocial.propTypes = {
    url: PropTypes.string,
    class: PropTypes.string,
  };

  return (
    <>
      <main id="home">
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
            transition={{ type: "spring", bounce: 0.2, delay: 5 }}
          >
            <LinkToSocial url={links[0].url} class="icon-facebook" />
            <LinkToSocial url={links[1].url} class="icon-instagram" />
            <LinkToSocial url={links[2].url} class="icon-github-circled" />
          </motion.nav>
        </section>
        <section>
          <motion.img
            src={Logo}
            alt="Kacper Wasiak Image"
            initial={{ transform: "translateX(-500px)", scale: 1 }}
            animate={{ transform: "translateX(0px)" }}
            transition={{ type: "spring", bounce: 0.3, delay: 1 }}
          />
        </section>
      </main>
    </>
  );
}

export default Home;
