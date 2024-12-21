import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

function App() {
//sleep
  function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
//Write tip

  window.addEventListener('load', async ()=>{
    const tip = "Kliknij żeby zobaczyć więcej";
    const tipContainer = document.querySelector('.tip');

    await sleep(3000)
    for(let i = 0; i < tip.length; i++){
      tipContainer.innerText = tip.substring(0, i + 1);
      await sleep(50);
    }

    let value = window.scrollY;

    if(value > 100){
      const tipContainer = document.querySelector('.tip');
      tipContainer.style.display = "none";
    }
  });

  //Hide tip
  window.addEventListener('scroll', ()=>{
    let value = window.scrollY;
    if(value > 100){
      const tipContainer = document.querySelector('.tip');
      tipContainer.style.display = "none";
    }
  });


//Hide Arrows
window.addEventListener('scroll', ()=>{
  const arrowUp = document.getElementById('arrowUp');
  const arrowDown = document.getElementById('arrowDown');


  const contactoffSet = document.querySelector('#contact').offsetTop;

  let value = window.scrollY;

  //arrow up
  if(value > 100){
    arrowUp.style.display = "inline";
  }
  else{
    arrowUp.style.display = "none";
  }

  //arrow down
  if(value > contactoffSet - 700){
    arrowDown.style.display = "none";
  }
  else{
    arrowDown.style.display = "inline";
  }
});

//Scroll to each section
//scroll down
const scrollDown = ()=>{
  let value = window.scrollY;

  const projectsOffSet = document.getElementById('projects').offsetTop;
  const aboutOffSet = document.getElementById('about').offsetTop;
  const contactOffSet = document.getElementById('contact').offsetTop;

  if(value >= 0 && value < projectsOffSet){
    window.scrollTo({
      top: projectsOffSet,
      behavior: "smooth"
    })
  }
  else if(value >= projectsOffSet && value < aboutOffSet){
    window.scrollTo({
      top: aboutOffSet,
      behavior: "smooth"
    })
  }
  else if(value >= aboutOffSet && value < contactOffSet){
    window.scrollTo({
      top: contactOffSet,
      behavior: "smooth"
    })
  }
}

const scrollUp = ()=> {
  let value = window.scrollY;

  const projectsOffSet = document.getElementById('projects').offsetTop;
  const aboutOffSet = document.getElementById('about').offsetTop;
  const contactOffSet = document.getElementById('contact').offsetTop;

  if(value <= projectsOffSet && value > 0){
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  else if(value <= aboutOffSet && value > projectsOffSet){
    window.scrollTo({
      top: projectsOffSet,
      behavior: "smooth"
    })
  }
  else if(value <= contactOffSet && value > aboutOffSet){
    window.scrollTo({
      top: aboutOffSet,
      behavior: "smooth"
    })
  }
}
  return( 
    <>

      <div className="navigation">
        <p className="tip"></p>
        <div className="arrows">
          <p id="arrowUp" className="arrowUp material-symbols-outlined" onClick={scrollUp}></p>
          <p id="arrowDown" className="arrowDown material-symbols-outlined" onClick={scrollDown}></p>
        </div>
      </div>

      <div id="home"><Home /></div>
      <div id="projects"><Projects /></div>
      <div id="about"><About /></div>
      <div id="contact"><Contact /></div>
    
    </>
  );
}

export default App;
