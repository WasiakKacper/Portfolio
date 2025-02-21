import "./Projects.css";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className="cardWrapper">
      <img src={props.imageUrl} alt={props.descriptionContent} />
      <div>
        <p className="desc">{props.descriptionContent}</p>
        <div className="btnWrapper">
          <a href="#" className="btn">
            Zobacz stronę
          </a>
          <a href="#" className="btn">
            Zobacz kod
          </a>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string,
  descriptionContent: PropTypes.string,
};

function Projects() {
  return (
    <>
      <main id="projects">
        <h1>PROJEKTY</h1>
        <section id="galery"></section>
      </main>
    </>
  );
}

export default Projects;
