var loader;


function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function () {
            loadNow(opacity - 0.05)

        }, 250);
    }
}

function displayContent() {
    loader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function () {
    loader = document.getElementById('loader');
    loadNow(1);
});

const design = document.querySelector(".desi"),
designImg = document.querySelector(".desi-img");
const motion = document.querySelector(".moti"),
motionImg = document.querySelector(".moti-img");
const uiux = document.querySelector(".uiux"),
uiuxImg = document.querySelector(".uiux-img");

design.addEventListener("mouseover", () => {
    designImg.style.display = "block";
});

design.addEventListener("mouseleave", () => {
    designImg.style.display = "";
});

motion.addEventListener("mouseover", () => {
    motionImg.style.display = "block";
});

motion.addEventListener("mouseleave", () => {
    motionImg.style.display = "";
});

uiux.addEventListener("mouseover", () => {
    uiuxImg.style.display = "block";
});

uiux.addEventListener("mouseleave", () => {
    uiuxImg.style.display = "";
});

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
