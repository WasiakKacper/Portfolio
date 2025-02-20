import "./Home.css";

function Home() {
  return (
    <main id="home">
      <h1>KACPER WASIAK</h1>
      <h3>Frontend developer</h3>
      <section id="wrapper">
        <div className="blocks">
          <img className="block" src="/Images/HTML2_IMAGE.svg" alt="HTML" />
          <img
            className="block"
            src="/Images/HTML_IMAGE.svg"
            alt="Tech stack: HTML"
          />
        </div>
        <div className="blocks">
          <img className="block" src="/Images/CSS2_IMAGE.svg" alt="CSS" />
          <img
            className="block"
            src="/Images/CSS_IMAGE.svg"
            alt="Tech stack: CSS"
          />
        </div>
        <div className="blocks">
          <img
            className="block"
            src="/Images/JavaScript2_IMAGE.svg"
            alt="JavaScript"
          />
          <img
            className="block"
            src="/Images/JavaScript_IMAGE.svg"
            alt="Tech stack: JavaScript"
          />
        </div>
        <div className="blocks">
          <img className="block" src="/Images/React2_IMAGE.svg" alt="React" />
          <img
            className="block"
            src="/Images/React_IMAGE.svg"
            alt="Tech stack: React"
          />
        </div>
      </section>
    </main>
  );
}

export default Home;
