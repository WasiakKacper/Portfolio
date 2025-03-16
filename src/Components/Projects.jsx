import { motion } from "motion/react";
import PropTypes from "prop-types";
import { projectsData } from "./Data";

function Projects() {
  const Project = (props) => {
    return (
      <motion.div
        className="w-[90%] lg:w-[30%] flex flex-col bg-(--white) p-[2%] lg:p-[0.8%] rounded-[1.5em] mx-auto mb-[5%]"
        initial={{ translateY: 200, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: props.sleep }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.img src={props.url} alt="" className="block rounded-[1em]" />
        <div className="w-full">
          <h3 className="text-3xl font-[Inter] my-[2%]">{props.title}</h3>
          <p className="mb-[5%]">{props.description}</p>
          <div className="w-full flex *:mr-5 *:bg-(--dark) *:text-(--white) *:py-[1%] *:px-[2%] *:rounded-2xl">
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
    sleep: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
  };

  return (
    <>
      <section id="projects" className="w-full h-auto pt-[5%] mb-[10%]">
        <h1 className="w-full text-center text-7xl lg:text-8xl font-semibold font-[Jost] mb-[5%]">
          PROJEKTY
        </h1>
        <section id="galery" className="w-full flex flex-col lg:flex-row">
          <Project
            url={projectsData[0].url}
            title={"Portfolio"}
            description={projectsData[0].description}
            sleep={0.3}
          />
          <Project
            url={projectsData[1].url}
            title={"ToDoList"}
            description={projectsData[0].description}
            sleep={0.4}
          />
          <Project
            url={projectsData[2].url}
            title={"Weather"}
            description={projectsData[0].description}
            sleep={0.5}
          />
        </section>
      </section>
    </>
  );
}

export default Projects;
