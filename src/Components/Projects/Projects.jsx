import portfolioImage from "/src/assets/Portfolio.png";
import weatherImage from "/src/assets/weather.png";
import todolistImage from "/src/assets/todolist.png";
import "./Projects.css";
import PropTypes from "prop-types";

const linkArray = [
  "https://kacper-wasiak-portfolio-programisty.netlify.app/",
  "https://weather-kacperwasiak.netlify.app/",
  "https://todolist-kacper-wasiak.netlify.app/",
  "https://github.com/WasiakKacper/Portfolio",
  "https://github.com/WasiakKacper/.Weather",
  "https://github.com/WasiakKacper/ToDoList",
];

const nameArray = ["Portfolio", ".Weather", ".ToDoList"];

const descriptionArray = [
  "Strona portfolio została stworzona za pomocą HTML, CSS, JS oraz React, a zaprojektowana w Figmie. Strona ma na celu w prosty sposób przedstawić moje projekty.",
  ".Weather to aplikacja pogodowa wyświetlająca dane pogodowe dla danej miejscowości. Stworzona za pomocą HTML, CSS, JS oraz API od Openweather. Projekt strony został wykonany w Figmie. Strona korzysta z frameworka Bootstrap.",
  ".ToDoList to aplikacja do planowania zadań. Stworzona za pomocą HTML, CSS i JS. Została zaprojektowana w FIgmie.",
];

function Card(props) {
  return (
    <div className="project">
      <img src={props.source} alt="Website image" />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <div className="buttons">
        <a target="_blank" href={props.link}>
          Zobacz stronę
        </a>
        <a target="_blank" href={props.ghLink}>
          Zobacz kod
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  source: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  ghLink: PropTypes.string,
};

export default function Projects() {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  window.addEventListener("scroll", async () => {
    const header = document.querySelector(".projectsHeader");
    const galery = document.querySelector(".galery");

    const projectsPage = document.getElementById("projectsPage").offsetTop;

    let value = window.scrollY;

    if (value >= projectsPage - 500) {
      await sleep(100);
      header.classList.add("active");
      galery.classList.add("active");
    }
  });

  return (
    <div id="projectsPage" className="projectsPage">
      <h3 className="projectsHeader">Projekty</h3>
      <div className="galery">
        <Card
          source={portfolioImage}
          name={nameArray[0]}
          description={descriptionArray[0]}
          link={linkArray[0]}
          ghLink={linkArray[3]}
        />

        <Card
          source={weatherImage}
          name={nameArray[1]}
          description={descriptionArray[1]}
          link={linkArray[1]}
          ghLink={linkArray[4]}
        />

        <Card
          source={todolistImage}
          name={nameArray[2]}
          description={descriptionArray[2]}
          link={linkArray[2]}
          ghLink={linkArray[5]}
        />
      </div>
    </div>
  );
}
