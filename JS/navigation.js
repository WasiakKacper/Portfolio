/* NAVIGATION */
const arrowUp = document.getElementById("arrow-up");
const arrowDown = document.getElementById("arrow-down");

/* show text */
window.addEventListener('DOMContentLoaded', ()=>{
    const text = document.getElementById("more");

    text.classList.add('active');
});

/* show arrows */
window.addEventListener('scroll',()=>{
    let value = window.scrollY;

    const home = document.getElementById("homePage").offsetTop;
    const projects = document.getElementById("projects").offsetTop;
    const about = document.getElementById("about").offsetTop;

    const text = document.getElementById("more");

    if(value > home){
        arrowUp.classList.add('active');
        text.classList.remove('active');
    }

    if(value > about + 200){
        arrowDown.classList.remove('active');
    }

    if(value < about + 200){
        arrowDown.classList.add('active');

    }

    if(value < projects - 500){
        arrowUp.classList.remove('active');
    }
});

/* SCROLLING TO EACH SECTION */
/* scroll down */
arrowDown.addEventListener('click', ()=>{
    let value = window.scrollY;

    const home = document.getElementById("homePage").offsetTop;
    const projects = document.getElementById("projects").offsetTop;
    const about = document.getElementById("about").offsetTop;
    const contact = document.getElementById("contact").offsetTop;

    if(value >= 0 && value <= projects){        
        window.scrollTo({
            top: projects,
            behavior: "smooth"
        });
    }

    if(value >= projects && value <= about){
        window.scrollTo({
            top: about,
            behavior: "smooth"
        });
    }

    if(value >= about && value <= contact){
        window.scrollTo({
            top: contact,
            behavior: "smooth"
        });
    }
});

/* scroll up */
arrowUp.addEventListener('click', ()=>{
    let value = window.scrollY;

    const projects = document.getElementById("projects").offsetTop;
    const about = document.getElementById("about").offsetTop;
    const contact = document.getElementById("contact").offsetTop;

    if(value > 0 && value <= projects){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    if(value > projects && value <= about){
        window.scrollTo({
            top: projects,
            behavior: "smooth"
        });
    }

    if(value > about && value <= contact){
        window.scrollTo({
            top: about,
            behavior: "smooth"  
        });
    }
});
