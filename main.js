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

    /* show contact page */
    if(value >= 2700){
        const paragraph1 = document.getElementById("p1");
        const paragraph2 = document.getElementById("p2");

        function sleep(ms){
            return new Promise((resolve) => setTimeout(resolve, ms));
        }

        paragraph1.classList.add("active");
        await sleep(200);
        paragraph2.classList.add("active");
    }
});
