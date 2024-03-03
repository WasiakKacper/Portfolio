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

/* Navigation */
arrowDown.addEventListener('click', ()=>{
    if(window.screenY >= 0 && window.scrollY < 980){
            window.scrollTo({
                top: 980,
                behavior: "smooth"
            })
        }
    else if(window.scrollY >= 980){
        window.scrollTo({
            top: 1900,
            behavior: "smooth"
        })
    }
});

arrowUp.addEventListener('click', ()=>{
    if(window.scrollY <= 980 && window.scrollY < 1400){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    else if(window.scrollY <= 1900){
        window.scrollTo({
            top: 980,
            behavior: "smooth"
        })
    }
});




