import "./Home.css";
import Styles from "./Styles.js";

function Home() {
  return (
    <main
      id="home"
      className="w-full h-full flex flex-col items-center justify-center"
    >
      {/* HEADING */}
      <h1 className="w-120 md:w-200 bg-(--dark) text-5xl md:text-9xl font-[Jost] text-(--white) text-center tracking-[4px] block">
        KACPER WASIAK
      </h1>
      <h3 className="text-center text-[90px]">Frontend developer</h3>

      {/* TECH STACK */}
      <section
        id="wrapper"
        className="flex flex-col md:flex-row w-full items-center justify-center"
      >
        {/* LEFT */}
        <div className="left">
          {/* HTML */}
          <div className={`${Styles.techStackBlock} after:content-['HTML']`}>
            <img src="/Images/HTML_IMAGE.svg" alt="Tech stack: HTML" />
          </div>
          {/* CSS */}
          <div className={`${Styles.techStackBlock} after:content-['CSS']`}>
            <img src="/Images/CSS_IMAGE.svg" alt="Tech stack: CSS" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="right">
          {/* JAVASCRIPT */}
          <div
            className={`${Styles.techStackBlock} after:content-['JavaScript']`}
          >
            <img
              src="/Images/JavaScript_IMAGE.svg"
              alt="Tech stack: JavaScript"
            />
          </div>
          {/* REACT */}
          <div className={`${Styles.techStackBlock} after:content-['React']`}>
            <img src="/Images/React_IMAGE.svg" alt="Tech stack: React" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
