import "./Projects.css";
import { motion } from "motion/react";
import PropTypes from "prop-types";

const descriptionArr = [
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi suscipit quod cupiditate vitae amet, quam quaerat enim. Officiis culpa voluptatem adipisci maiores libero quos, tempore, ea amet corporis, vitae veniam.",

  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi suscipit quod cupiditate vitae amet, quam quaerat enim. Officiis culpa voluptatem adipisci maiores libero quos, tempore, ea amet corporis, vitae veniam.",

  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi suscipit quod cupiditate vitae amet, quam quaerat enim. Officiis culpa voluptatem adipisci maiores libero quos, tempore, ea amet corporis, vitae veniam.",
];

const urlArr = [
  "./Images/Portfolio.png",
  "./Images/weather.png",
  "./Images/todolist.png",
];

const Projects = () => {
  const ProjectCard = (props) => {
    return (
      <motion.article
        className="project"
        initial={{ transform: "translateY(500px)", opacity: 0 }}
        whileInView={{ transform: "translateY(0px)", opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
      >
        <img src={props.src} alt="" />
        <div className="wrapper">
          <h3>{props.name}</h3>
          <p>{props.description}</p>
          <nav>
            <motion.a
              initial={{ transform: "translateY(0px)" }}
              whileHover={{ transform: "translateY(-20px)" }}
              transition={{ type: "spring", bounce: 0.4 }}
            >
              Zobacz stronę
            </motion.a>
            <motion.a
              initial={{ transform: "translateY(0px)" }}
              whileHover={{ transform: "translateY(-10px)" }}
              transition={{ type: "spring", bounce: 0.4 }}
            >
              Zobacz kod
            </motion.a>
          </nav>
        </div>
      </motion.article>
    );
  };

  ProjectCard.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  };

  return (
    <main id="projects">
      <motion.h1
        initial={{ transform: "translateY(500px)", opacity: 0 }}
        whileInView={{ transform: "translateY(0px)", opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
      >
        Projekty
      </motion.h1>
      <section>
        <ProjectCard
          src={urlArr[0]}
          name="Portfolio"
          description={descriptionArr[0]}
        />
        <ProjectCard
          src={urlArr[1]}
          name="Weather"
          description={descriptionArr[1]}
        />
        <ProjectCard
          src={urlArr[2]}
          name="ToDoList"
          description={descriptionArr[2]}
        />
      </section>
    </main>
  );
};

export default Projects;
