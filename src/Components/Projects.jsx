import { motion } from "motion/react";
import PropTypes from "prop-types";
import { projectsData } from "./Data";

function Projects() {
  const Project = (props) => {
    return (
      <motion.img
        src={props.url}
        alt=""
        className={`${props.rowStyle} border border-(--dark) rounded-2xl hover:brightness-50 transition duration-300 ease cursor-pointer`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3, delay: props.sleep }}
        viewport={{ once: true }}
      />
    );
  };

  Project.propTypes = {
    url: PropTypes.string,
    rowStyle: PropTypes.string,
    sleep: PropTypes.number,
  };

  return (
    <>
      <main id="projects" className="w-full h-auto pt-[5%]">
        <motion.h1
          className="w-full text-center text-8xl font-semibold font-[Jost] mb-[5%]"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          viewport={{ once: true }}
        >
          PROJEKTY
        </motion.h1>
        <section id="galery" className="w-full my-10 px-[10%]">
          <Project url={projectsData[0].url} rowStyle="w-full" sleep={0.6} />
          <div className="flex flex-col md:flex-row w-full justify-between my-[1%]">
            <Project
              url={projectsData[1].url}
              rowStyle="w-[49.5%]"
              sleep={0.1}
            />
            <Project
              url={projectsData[2].url}
              rowStyle="w-[49.5%]"
              sleep={0.2}
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default Projects;
