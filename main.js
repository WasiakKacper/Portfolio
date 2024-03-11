/* LOADING */
function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const text = "Kacper Wasiak";
const el = document.getElementById("header");
const avatar = document.getElementById("avatar");
const btns = document.getElementById("buttonsWrapper");

const showHomePage = async ()=>{
    await sleep(500);
    avatar.classList.add("active");

    await sleep(2300);
    btns.classList.add("active");
}
showHomePage();

const write = async ()=>{
    await sleep(501)
    for(let i = 0; i < text.length; i++){
        el.innerText = text.substring(0, i + 1);
        await sleep(100)
    }
}
write()

const subText = "Frontend developer"
const h2 = document.getElementById("underHeader")

const writeLower = async ()=>{
    await sleep(1800)
    for(let i = 0; i < subText.length; i++){
        h2.innerText = subText.substring(0, i + 1);
        await sleep(50)
    }
}
writeLower()

/* PARALAX EVENTS */
window.addEventListener('scroll', ()=>{
    let value = window.scrollY;
    /* show projects */

    if(value >= 800){
        const projects = document.getElementById("projectWrapper");

        projects.classList.add("active");
    }

    /* change body color */

    if(value >= 1400){
        const bodyColor = document.querySelector("body");

        if(bodyColor.classList == "active"){
            const arrowUp = document.getElementById("arrow-up");
            const arrowDown = document.getElementById("arrow-down");
        }

        bodyColor.classList.add("active");
    }
    else{
        const bodyColor = document.querySelector("body");
        bodyColor.classList.remove("active");
    }

    /* show about me */

    if(value >= 2000){
        const aboutTextContent = document.getElementById("paragraf");
        const aboutImage = document.getElementById("image");

        aboutTextContent.classList.add("active");
        aboutImage.classList.add("active");
    }
});

/* NAVIGATION */
const arrowUp = document.getElementById("arrow-up");
const arrowDown = document.getElementById("arrow-down");

/* show arrows */
window.addEventListener('DOMContentLoaded', ()=>{
    arrowDown.classList.add("active");
})
window.addEventListener('scroll', ()=>{
    let value = window.scrollY;
    let viewWidth = document.documentElement.clientWidth;

    if(viewWidth < 980){
        if(value >= 0 && value <= 4000){
            arrowDown.classList.add("active");
        }
        else{
            arrowDown.classList.remove("active");
        }

        if(value > 500){
            arrowUp.classList.add("active");
        }
        else{
            arrowUp.classList.remove("active");
        }
    }
    else{
        if(value >= 0 && value <= 2400){
            arrowDown.classList.add("active");
        }
        else{
            arrowDown.classList.remove("active");
        }

        if(value > 500){
            arrowUp.classList.add("active");
        }
        else{
            arrowUp.classList.remove("active");
        }
    }
});

/* scrolling to each section */

arrowDown.addEventListener('click', ()=>{
    let value = window.scrollY;
    let viewWidth = document.documentElement.clientWidth;

    if(viewWidth < 980){
        /* On mobile */
        if(value >= 0 && value < 980){
            const projects = document.getElementById("projects").offsetTop;
            
            window.scrollTo(
                {
                    top: projects,
                    behavior: "smooth"
                }
            )
        }
        else if(value >= 980 && value < 2500){
            const about = document.getElementById("about").offsetTop;
            
            window.scrollTo(
                {
                    top: about,
                    behavior: "smooth"
                }
            )
        }
        else{
            const contact = document.getElementById("contact").offsetTop;

            window.scrollTo({
                top: contact,
                behavior: "smooth"
            })
        }
    }
    else{
        /* On desktop */
        if(value >= 0 && value < 980){
            const projects = document.getElementById("projects").offsetTop;
            
            window.scrollTo(
                {
                    top: projects,
                    behavior: "smooth"
                }
            )
        }
        else if(value >= 980 && value < 2000){
            const about = document.getElementById("about").offsetTop;
            
            window.scrollTo(
                {
                    top: about,
                    behavior: "smooth"
                }
            )
        }
        else if(value > 2000){
            const contact = document.getElementById("contact").offsetTop;

            window.scrollTo({
                top: contact,
                behavior: "smooth"
            })
        }
    }
});

arrowUp.addEventListener('click', ()=>{
    let value = window.scrollY;
    let viewWidth = document.documentElement.clientWidth;

    if(viewWidth < 980){
        /* On mobile */
        if(value >= 980 && value < 2000){
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
        else if(value >= 3500 && value < 4000){
            const projects = document.getElementById("projects").offsetTop;
            
            window.scrollTo(
                {
                    top: projects,
                    behavior: "smooth"
                })
        }
        else{
            const about = document.getElementById("about").offsetTop;
            
            window.scrollTo(
                {
                    top: about,
                    behavior: "smooth"
                }
            )
        }
    }
    else{
        /* On desktop */
        if(value >= 980 && value < 2000){
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
        else if(value >= 2000 && value < 3000){
            const projects = document.getElementById("projects").offsetTop;
            
            window.scrollTo(
                {
                    top: projects,
                    behavior: "smooth"
                })
        }
        else{
            const about = document.getElementById("about").offsetTop;
            
            window.scrollTo(
                {
                    top: about,
                    behavior: "smooth"
                }
            )
        }
    }
});
