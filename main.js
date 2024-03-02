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

function navigation(){
    let value = window.scrollY;

   if(value == 0){
    arrowDown.addEventListener('click', ()=>{
        window.scroll(0.980);
    });
   }

   if(value == 980){
    arrowDown.addEventListener('click', ()=>{
        window.scroll(0.1500);
    });

    arrowUp.addEventListener('click', ()=>{
        window.scroll(0.0);
    });
   }
}

navigation();