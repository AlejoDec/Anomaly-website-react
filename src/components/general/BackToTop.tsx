import '../styles/BackToTop.css';

export default function BackToTop() {
    const mybutton = document.getElementById("myBtn");

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (mybutton !== null) {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
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
        <button id="myBtn" title="Go to top" className='max-sm:left-3'>
            Up
        </button>
    )
}