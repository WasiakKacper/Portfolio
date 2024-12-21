
import './Contact.css' 

export default function Contact (){

    function sleep(ms){
       return new Promise((resolve) => setTimeout(resolve, ms));
    }

    window.addEventListener('scroll', async ()=>{
        const contact = document.getElementById('contactPage').offsetTop;

        let value = window.scrollY;

        if(value >= contact - 800){
            const aboutHeader = document.getElementById('aboutHeader');
            const aboutText = document.querySelector('.aboutText');
            const underText = document.querySelector('.underText');

            await sleep(50);
            aboutHeader.classList.add('active');
            await sleep(150);
            aboutText.classList.add('active');
            await sleep(150);
            underText.classList.add('active');
        }
    });

    return(
        <div id="contactPage" className="contactPage">
            <h3 id='aboutHeader' className='aboutHeader'>Kontakt</h3>
            <h2 className='aboutText'>Jeśli chcesz żebym stworzył dla ciebie stronę internetową zapraszam do kontaktu pod adresem:</h2>
            <h3 className='underText'>kacper.wasiak111@gmail.com</h3>
        </div>
    );
 }
