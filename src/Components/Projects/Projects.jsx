//Imports
import "./Projects.css";
import { motion } from "motion/react";
import PropTypes from "prop-types";
import projectsInfo from "./Data/Projects.js";

//Component
const Projects = () => {
  //Nest component
  const ProjectCard = (props) => {
    return (
      <article className="project">
        <img src={props.src} alt="" />
        <div className="wrapper">
          <h3>{props.name}</h3>
          <p>{props.description}</p>
          <nav>
            <motion.a
              href={props.site}
              target="_blank"
              whileHover={{ transform: "translateY(-5px)" }}
              transition={{ type: "spring", duration: 0.3, bounce: 0.6 }}
            >
              Zobacz stronę
            </motion.a>

            <motion.a
              href={props.code}
              target="_blank"
              whileHover={{ transform: "translateY(-5px)" }}
              transition={{ type: "spring", duration: 0.3, bounce: 0.6 }}
            >
              Zobacz kod
            </motion.a>
          </nav>
        </div>
      </article>
    );
  };

  //Proptypes
  ProjectCard.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    site: PropTypes.string,
    code: PropTypes.string,
  };

  //Component structure
  return (
    <main id="projects">
      <motion.h1
        initial={{ transform: "translateY(500px)", opacity: 0 }}
        whileInView={{ transform: "translateY(0px)", opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        viewport={{ once: true }}
      >
        Projekty
      </motion.h1>
      <motion.section
        initial={{ transform: "translateY(500px)", opacity: 0 }}
        whileInView={{ transform: "translateY(0px)", opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {projectsInfo.map((projectsInfo, index) => (
          <ProjectCard
            key={index}
            src={projectsInfo.image}
            name={projectsInfo.name}
            description={projectsInfo.description}
            site={projectsInfo.urlToSite}
            code={projectsInfo.urlToCode}
          />
        ))}
      </motion.section>
    </main>
  );
};

export default Projects;
