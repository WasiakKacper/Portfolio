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

/* NAVIGATION */
const arrowUp = document.getElementById("arrow-up");
const arrowDown = document.getElementById("arrow-down");

const home = document.getElementById("homePage");
const project = document.getElementById("projects").offsetTop;
const contact = document.getElementById("contact");

window.addEventListener('scroll', ()=>{
    let value = window.scrollY;

    if(project){
        arrowUp.classList.add("active");
    }
    else if(home){
        arrowUp.classList.remove("active");
    }
});
/* scrolling to each section */






