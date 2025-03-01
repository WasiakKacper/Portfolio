import Styles from "../Styles.js";

function Home() {
  return (
    <main
      id="home"
      className="w-full  flex flex-col items-center justify-center my-10 md:my-60 z-1 "
    >
      {/* HEADING */}
      <h1 className="bg-(--dark) w-240 h-30 text-(--white) text-8xl font-bold  flex items-center justify-center tracking-[5px] font-[Jost] rounded-2xl">
        KACPER WASIAK
      </h1>
      <h3 className="text-4xl my-5 font-[Joan]">Frontend developer</h3>

      {/* TECH STACK */}
      <section
        id="wrapper"
        className="flex flex-col md:flex-row w-full items-center justify-center gap-10"
      >
        {/* LEFT */}
        <div className={`${Styles.techStackBolockWrapper} justify-end`}>
          {/* HTML */}
          <div className={`${Styles.techStackBlock} after:content-['HTML']`}>
            <img src="/Images/HTML_IMAGE.svg" alt="Tech stack: HTML" />
          </div>
          {/* CSS */}
          <div className={`${Styles.techStackBlock} after:content-['CSS']`}>
            <img
              src="/Images/CSS_IMAGE.svg"
              alt="Tech stack: CSS"
              className="saturate-120"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className={`${Styles.techStackBolockWrapper} justify-start`}>
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
