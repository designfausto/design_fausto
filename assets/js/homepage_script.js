

// script for about
var t1 = new TimelineMax({
    paused: true
});

t1.to(".menu", 2, {
    right: "0%",
    position: "fixed",
    ease: Expo.easeInOut,
});

t1.reverse();
$(document).on("click", ".about-btn", function () {
    t1.reversed(!t1.reversed());
});


const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]


toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
