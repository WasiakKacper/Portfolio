const arrowUp = document.getElementById("arrow-up");
const arrowDown = document.getElementById("arrow-down");

window.addEventListener('scroll', ()=>{
    let value = window.scrollY;

    if(value > 500){
        arrowUp.classList.add("active");
    }

    if(value == 0){
        arrowUp.classList.remove("active");
    }
});


