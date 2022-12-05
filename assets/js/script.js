document.body.style.overflow = "unset";


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


//script for making the image popup
const gallery = document.querySelectorAll(".gallery-container", ".image"),
previewBox = document.querySelector(".preview-box"),
previewImg = document.querySelector(".img"),
previewImgName = document.querySelector(".top-half h1"),
previewImgDesc = document.querySelector(".description p"),
closeIcon = document.querySelector(".fas.fa-times"),
shadow = document.querySelector(".bg-shadow");

window.onload = ()=> {
    for (let i = 0; i < gallery.length; i++){
        let newIndex = i;
        gallery[i].onclick = () =>{
            function preview(){
                let selectImgUrl = gallery[newIndex].querySelector("img").src;
                let selectImgName = gallery[newIndex].querySelector(".proj_name").textContent;
                let selectImgDesc = gallery[newIndex].querySelector(".proj_desc").textContent;
                previewImgName.textContent = selectImgName
                previewImgDesc.textContent = selectImgDesc
                previewImg.src = selectImgUrl;
            }
            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if(newIndex <= 0){
                prevBtn.style.display = "none";
            }
            if(newIndex >= gallery.length - 1){
                nextBtn.style.display = "none";
            }
            prevBtn.onclick = ()=>{
                newIndex--;
                if(newIndex <= 0){
                    preview();
                    prevBtn.style.display = "none";
                }else{
                    preview();
                    nextBtn.style.display = "block";
                }
            }
            nextBtn.onclick = ()=>{
                newIndex++;
                if(newIndex >= gallery.length - 1){
                    preview();
                    nextBtn.style.display = "none";
                }else{
                    preview();
                    prevBtn.style.display = "block";
                }
            }

            preview();
            previewBox.classList.add("show");
            shadow.style.display = "block";

            closeIcon.onclick = () =>{
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
            }
        }
    }
}
