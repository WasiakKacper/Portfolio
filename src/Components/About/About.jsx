import aboutSticker from "src/assets/AboutMeSticker.png";
import './About.css';

export default function About(){

    window.addEventListener('scroll', () => {
        const aboutPage = document.getElementById('aboutPage').offsetTop;
        const body = document.querySelector('body');
        let value = window.scrollY;
        
        if(value >= aboutPage - 400){
            body.classList.add('active');
        }
        else{
            body.classList.remove('active');
        }

        const aboutText = document.querySelector('.text');
        const aboutImage = document.querySelector('.image');
        const aboutHeader = document.querySelector('.aboutHeader');

        if(value >= aboutPage - 400){
            aboutText.classList.add('active');
            aboutImage.classList.add('active');
            aboutHeader.classList.add('active');
        }
    });

    return(
        <div id="aboutPage" className="aboutPage">
            <h3 className='aboutHeader'>O mnie</h3>
            <div className="aboutWrapper">
                <p className='text'>
                    Mam na imię Kacper jestem absolwentem technikum informatycznego. Tworzeniem stron internetowych zajmuję się od drugiej połowy 2022 roku. Poza programowaniem lubię grać na gitarze i uprawiać sport.
                </p>
                <img src={aboutSticker} alt="Kacper Wasiak" className='image'/>
            </div>
        </div>
    );
}
