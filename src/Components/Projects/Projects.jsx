import "./Projects.css";

const Row = (props)=>{
  return(
    
  )
}

function Projects() {
  return (
    <>
      <main id="projects">
        <h1>PROJEKTY</h1>
        <section id="galery">
          <div id="oneInRow" className="row">
            <img src="/Images/Portfolio.png" alt="" />
          </div>
          <div id="twoInRow" className="row">
            <img src="/Images/weather.png" alt="" />
            <img src="/Images/todolist.png" alt="" />
          </div>
        </section>
      </main>
    </>
  );
}

export default Projects;
