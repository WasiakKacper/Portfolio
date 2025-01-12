import { useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import "./Home.css";
import Logo from "/Images/avatar.svg";

function Home() {
  const [show, setShow] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [typeEffect] = useTypewriter({
    words: ["Kacper Wasiak"],
    typeSpeed: 100,
  });
  const waitUntilShow = () => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  };

  waitUntilShow();

  const waitUntilActive = () => {
    setTimeout(() => {
      setIsActive(true);
    }, 2000);
  };
  waitUntilActive();

  return (
    <main>
      <section>
        {show ? (
          <header>
            <h1>{typeEffect}</h1>
            <h2>Frontend Developer</h2>
          </header>
        ) : (
          ""
        )}

        <nav className={isActive ? "unactive" : "active"}>
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
        </nav>
      </section>
      <section>
        <img
          src={Logo}
          alt="Kacper Wasiak Image"
          className={show ? "unactive" : "active"}
        />
      </section>
    </main>
  );
}

export default Home;
