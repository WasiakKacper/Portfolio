import { motion } from "motion/react";
import PropTypes from "prop-types";
import { projectsData } from "./Data";

function Projects() {
  const Project = (props) => {
    return (
      <motion.div
        className="w-[full] flex flex-col md:flex-row justify-between bg-(--white) p-[2%] rounded-2xl mx-[10%]"
        initial={{ translateY: -200, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.img src={props.url} alt="" className="w-[45%] rounded-2xl" />
        <div className="w-[45%] flex flex-col text-3xl text-[Iner] items-center justify-between">
          <p>{props.description}</p>
          <div className="w-full flex *:mr-10 *:bg-(--dark) *:text-(--white) *:py-[1%] *:px-[2%] *:rounded-2xl">
            <a
              href="#"
              className="hover:-translate-y-1.5 transition duration-300 ease"
            >
              Zobacz stronę
            </a>
            <a
              href="#"
              className="hover:-translate-y-1.5 transition duration-300 ease"
            >
              Zobacz kod
            </a>
          </div>
        </div>
      </motion.div>
    );
  };

  Project.propTypes = {
    url: PropTypes.string,
    rowStyle: PropTypes.string,
    sleep: PropTypes.number,
    description: PropTypes.string,
  };

  return (
    <>
      <section id="projects" className="w-full h-auto pt-[5%] mb-[10%]">
        <motion.h1
          className="w-full text-center text-8xl font-semibold font-[Jost] mb-[5%]"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          viewport={{ once: true, amount: 1 }}
        >
          PROJEKTY
        </motion.h1>
        <section
          id="galery"
          className="w-full h-auto flex flex-col items-center gap-7"
        >
          <Project
            url={projectsData[0].url}
            description={projectsData[0].description}
          />
          <Project
            url={projectsData[1].url}
            description={projectsData[0].description}
          />
          <Project
            url={projectsData[2].url}
            description={projectsData[0].description}
          />
        </section>
      </section>
    </>
  );
}

export default Projects;
