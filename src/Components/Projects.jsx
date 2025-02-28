function Projects() {
  return (
    <>
      <main id="projects" className="w-full h-auto">
        <h1 className="w-full text-center text-8xl font-semibold font-[Jost]">
          PROJEKTY
        </h1>
        <section id="galery" className="w-full my-20">
          <div className=" w-full h-full flex flex-col justify-center items-center">
            <img
              src="/Images/Portfolio.png"
              alt=""
              className="w-[80%] h-auto m-4 border-1 rounded-2xl hover:brightness-50"
            />
          </div>
          <div className="w-full flex flex-col md:flex-row justify-center items-center mx-auto">
            <img
              src="/Images/todolist.png"
              alt=""
              className="w-[80%] md:w-[39%] h-1/2 m-4 border-1 rounded-2xl hover:brightness-50"
            />
            <img
              src="/Images/weather.png"
              alt=""
              className="w-[80%] md:w-[39%] h-1/2 m-4 border-1 rounded-2xl hover:brightness-50"
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default Projects;
