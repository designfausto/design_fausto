let links = document.querySelectorAll(".links a");
let bodyId = document.querySelectorAll("body").id;


for(let link of links){
    if(link.CDATA_SECTION_NODE.active == bodyId){
        link.classList.add("active");
    }
}