import './Home.css'

function Home(){

//Sleep function
    function sleep(ms){
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

//Show home page
const loadPage = async () => {
    const avatar = document.querySelector('.avatar');
    const buttons = document.querySelector('.links');

    await sleep(500)
    avatar.classList.add('active');

    await sleep(2500)
    buttons.classList.add('active');
}

const Write = async () => {
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

//Load Page
window.addEventListener('load', async () => {
    loadPage();
    await sleep(600);
    Write();
})

//Home page JSX
    
    const ghLink = "https://github.com/WasiakKacper/Portfolio";
    const fbLink = "https://www.facebook.com/kacper.wasiak.9216?locale=pl_PL";
    const igLink = "https://www.instagram.com/kacper_wasiak/";

    return(
        <div id="home" className="homePage">
            <div className="left">
                <div className="header">
                    <h2></h2>
                    <h3></h3>
                </div>
                <div className="links">
                    <a href={fbLink} className="link"><i className="icon-facebook"></i></a>
                    <a href={igLink} className="link"><i className="icon-instagram"></i></a>
                    <a href={ghLink} className="link"><i className="icon-github-circled"></i></a>
                </div>
            </div>
            <div className="right">
                <img 
                    className="avatar"
                    src="src/assets/avatar.png"
                    alt="Zdjęcie profilowe Kacper Wasiak" 
                />
            </div>
        </div>
    );
}

export default Home
