import { motion } from "motion/react";
import PropTypes from "prop-types";
import { projectsData } from "./Data";

const Project = (props) => {
  return (
    <motion.div
      className="w-[90%] h-99% lg:w-[30%] flex flex-col bg-(--white) p-[2%] lg:p-[0.8%] rounded-[1.5em] mb-[5%] lg:mb-0 mt-10"
      initial={{ translateY: 200, opacity: 0 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 0.2, delay: props.sleep }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.img src={props.url} className="block rounded-[1em]" />
      <h3 className="text-3xl font-[Inter] my-[2%]">{props.title}</h3>
      <div className="h-full flex flex-col justify-between">
        <p className="mb-[5%]">{props.description}</p>
        <div className="w-full flex *:mr-5 *:bg-(--dark) *:text-(--white) *:py-[1%] *:px-[2%] *:rounded-2xl">
          <a
            href={props.link}
            className="hover:-translate-y-1.5 transition duration-300 ease"
            target="_blank"
          >
            Zobacz stronę
          </a>
          <a
            href={props.repoLink}
            className="hover:-translate-y-1.5 transition duration-300 ease"
            target="_blank"
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
  link: PropTypes.string,
  repoLink: PropTypes.string,
};

function Projects() {
  return (
    <>
      <section className="w-full h-auto pt-[5%] mb-[10%]">
        <h1 className="w-full text-center text-7xl lg:text-8xl font-semibold font-[Jost] mb-[5%]">
          PROJEKTY
        </h1>
        <section className="w-[90%] mx-auto">
          <section className="w-full h-auto flex flex-col flex-wrap lg:flex-row lg:flex-wrap items-left justify-start gap-[5%]">
            <Project
              url={projectsData[0].url}
              title={"Portfolio"}
              description={projectsData[0].description}
              link={projectsData[0].link}
              repoLink={projectsData[0].repoLink}
              sleep={0.3}
            />
            <Project
              url={projectsData[1].url}
              title={"ToDoList"}
              description={projectsData[1].description}
              link={projectsData[1].link}
              repoLink={projectsData[1].repoLink}
              sleep={0.4}
            />
            <Project
              url={projectsData[2].url}
              title={"Weather"}
              description={projectsData[2].description}
              link={projectsData[2].link}
              repoLink={projectsData[2].repoLink}
              sleep={0.5}
            />
            <Project
              url={projectsData[3].url}
              title={"Fabryka Warzyw"}
              description={projectsData[3].description}
              link={projectsData[3].link}
              repoLink={projectsData[3].repoLink}
              sleep={0.5}
            />
          </section>
        </section>
      </section>
    </>
  );
}

export default Projects;
