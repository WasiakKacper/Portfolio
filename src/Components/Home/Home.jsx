import "./Home.css";

function Home() {
  return (
    <main
      id="home"
      className="w-full h-full flex flex-col items-center justify-center !important"
    >
      <h1 className="w-120 md:w-200 bg-(--dark) text-5xl md:text-9xl font-[Jost] text-(--white) text-center tracking-[4px] block">
        KACPER WASIAK
      </h1>
      <h3 className="text-center text-[90px]">Frontend developer</h3>
      <section
        id="wrapper"
        className="flex flex-col md:flex-row w-full items-center justify-center"
      >
        <div className="left flex flex-col md:flex-row justify-around">
          <div className="blocks">
            {/*             <img className="block" src="/Images/HTML2_IMAGE.svg" alt="HTML" /> */}
            <img
              className="relative after:absolute after:content['HTML'] after:text-(--dark) hover:brightness-50 block"
              src="/Images/HTML_IMAGE.svg"
              alt="Tech stack: HTML"
            />
          </div>
          <div className="blocks hover:brightness-50 transition duration-300 ease">
            {/*             <img className="block" src="/Images/CSS2_IMAGE.svg" alt="CSS" /> */}
            <img
              className="block hover:brightness-50 transition duration-300 ease"
              src="/Images/CSS_IMAGE.svg"
              alt="Tech stack: CSS"
            />
          </div>
        </div>
        <div className="right flex flex-col md:flex-row">
          <div className="blocks">
            {/*             <img
              className="block"
              src="/Images/JavaScript2_IMAGE.svg"
              alt="JavaScript"
            /> */}
            <img
              className="block hover:brightness-50 transition duration-300 ease"
              src="/Images/JavaScript_IMAGE.svg"
              alt="Tech stack: JavaScript"
            />
          </div>
          <div className="blocks">
            {/*             <img className="block" src="/Images/React2_IMAGE.svg" alt="React" /> */}
            <img
              className="block hover:brightness-50 transition duration-300 ease"
              src="/Images/React_IMAGE.svg"
              alt="Tech stack: React"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
