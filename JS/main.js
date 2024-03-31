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
window.addEventListener('scroll', async ()=>{
    let value = window.scrollY;
    /* show projects */

    const home = document.getElementById("homePage").offsetTop;
    const projects = document.getElementById("projects").offsetTop;
    const about = document.getElementById("about").offsetTop;
    const contact = document.getElementById("contact").offsetTop;

    if(value >= projects - 150){
        const projectsHeader = document.getElementById("projectsHeader");
        const projects = document.getElementById("projectWrapper");

        projectsHeader.classList.add("active");
        projects.classList.add("active");
    }

    /* change body color */

    if(value >= projects + 50){
        const bodyColor = document.querySelector("body");
        bodyColor.classList.add("active");
    }
    else{
        const bodyColor = document.querySelector("body");
        bodyColor.classList.remove("active");
    }

    /* show about me */

    if(value >= about - 100){
        const aboutHeader = document.getElementById("aboutHeader");
        const aboutTextContent = document.getElementById("paragraf");
        const aboutImage = document.getElementById("image");

        aboutHeader.classList.add("active");
        aboutTextContent.classList.add("active");
        aboutImage.classList.add("active");
    }

    /* show contact page */
    if(value >= contact - 500){
        const contactHeader = document.getElementById("contactHeader");
        const paragraph1 = document.getElementById("p1");
        const paragraph2 = document.getElementById("p2");

        contactHeader.classList.add("active");

        function sleep(ms){
            return new Promise((resolve) => setTimeout(resolve, ms));
        }

        paragraph1.classList.add("active");
        await sleep(200);
        paragraph2.classList.add("active");
    }
});
