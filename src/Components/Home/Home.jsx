import avatarPicture from "/src/assets/avatar.png"
import './Home.css'

import { useRef } from "react";

function Home(){

//Sleep function
    function sleep(ms){
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

//Load homepage
const homeRef = useRef(null);

const loadPicture = async()=>{
        await sleep(500);
        homeRef.current.children[1].children[0].className = "active";
    }   

const write = async() => {
    await sleep(600);
    const name = "Kacper Wasiak";
    const description = "Frontend developer";

    const upperHeader = document.querySelector('h2');
    const lowerHeader = document.querySelector('h3');

    for(let i = 0; i < name.length; i++){
        upperHeader.innerText = name.substring(0, i + 1);
        await sleep(80);
    }

    await sleep(150);

    for(let i = 0; i < description.length; i++){
        lowerHeader.innerText = description.substring(0, i + 1);
        await sleep(70);
    }
}

const loadLinks = async()=>{
    await sleep(3000)
    homeRef.current.children[0].children[1].classList.add("active");
}

function loadHomePage(){
    loadPicture();
    write();
    loadLinks();
}


//Homepage JSX
    
    const ghLink = "https://github.com/WasiakKacper";
    const fbLink = "https://www.facebook.com/kacper.wasiak.9216?locale=pl_PL";
    const igLink = "https://www.instagram.com/kacper_wasiak/";

    return(
        <div id="home" className="homePage" onLoad={loadHomePage}  ref={homeRef}>
            <div className="left">
                <div className="header">
                    <h2></h2>
                    <h3></h3>
                </div>
                <div id="linksBox" className="links">
                    <a href={fbLink} className="link"><i className="icon-facebook"></i></a>
                    <a href={igLink} className="link"><i className="icon-instagram"></i></a>
                    <a href={ghLink} className="link"><i className="icon-github-circled"></i></a>
                </div>
            </div>
            <div className="right">
                <img
                    className="avatar"
                    src={avatarPicture}
                    alt="Zdjęcie profilowe Kacper Wasiak" 
                />
            </div>
        </div>
    );
}

export default Home