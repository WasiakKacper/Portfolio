const arrowUp = document.getElementById("arrow-up");
const arrowDown = document.getElementById("arrow-down");

window.addEventListener('scroll', ()=>{
    let value = window.scrollY;

    if(value > 500){
        arrowUp.classList.add("active");
    }
    else{
        arrowUp.classList.remove("active");
    }

    if(value > 1800){
        arrowDown.classList.remove("active");
    }
    else{
        arrowDown.classList.add("active");
    }
});

/* NAVIGATION */
arrowDown.addEventListener('click', ()=>{
    let value = window.scrollY;

    if(value >= 0 && value < 980){
            window.scrollTo({
                top: 980,
                behavior: "smooth"
            })
        }
    else if(value >= 980){
        window.scrollTo({
            top: 2250,
            behavior: "smooth"
        })
    }
});

arrowUp.addEventListener('click', ()=>{
    let value = window.scrollY;

    if(value <= 980 && value < 1400){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    else if(value <= 2250){
        window.scrollTo({
            top: 980,
            behavior: "smooth"
        })
    }
});

/* LOADING */
function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
    }

const text = "Kacper Wasiak";
const el = document.getElementById("header");

const write = async ()=>{
    for(let i = 0; i < text.length; i++){
        el.innerText = text.substring(0, i + 1);
        await sleep(100)
    }
}
write()

const subText = "Frontend developer"
const h2 = document.getElementById("underHeader")

const writeLower = async ()=>{
    await sleep(1300)
    for(let i = 0; i < subText.length; i++){
        h2.innerText = subText.substring(0, i + 1);
        await sleep(50)
    }
}
writeLower()

/* PARALAX ANIMATIONS */
 const portfolioTile = document.getElementById("portfolio");
 const weatherTile = document.getElementById("weather");
 const todolistTile = document.getElementById("todolist");

function showProject(){
    let value = window.scrollY;
    if(value >= 980){
        portfolioTile.classList.add("active");
        weatherTile.classList.add("active");
        todolistTile.classList.add("active");
    }
 }




