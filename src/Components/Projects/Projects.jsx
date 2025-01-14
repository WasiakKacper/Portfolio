import "./Projects.css";
import { motion } from "motion/react";

const Projects = () => {
  const ProjectCard = () => {
    return (
      <motion.article>
        <img src="" alt="" />
        <div className="wrapper">
          <h3>Lorem ipsum</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
            veritatis eius sint, molestiae laboriosam alias rem consequuntur ea
            nobis eum cum temporibus, totam ipsa, voluptate labore sit
            consectetur? Molestias, ratione!
          </p>
          <nav>
            <motion.a>Zobacz stronę</motion.a>
            <motion.a>Zobacz kod</motion.a>
          </nav>
        </div>
      </motion.article>
    );
  };

  return (
    <main className="projects">
      <h1>Projekty</h1>
      <section>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </section>
    </main>
  );
};

export default Projects;
