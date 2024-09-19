import '../styles/BackToTop.css';

export default function BackToTop() {
    const mybutton = document.querySelector(".myBtn");

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (mybutton !== null) {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block"; // Ignorar error de TS
            } else {
                mybutton.style.display = "none"; // Ignorar error de TS
            }
        }
    }

    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    if (mybutton !== null) {
        mybutton.addEventListener('click', topFunction);
    }

    return (
        <button title="Go to top" className='myBtn max-sm:left-3'>
            Up
        </button>
    )
}