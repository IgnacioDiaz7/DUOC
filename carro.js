const header = document.querySelector("#header");
const container = document.querySelector("#container");
const body = document.querySelector("body");

window.addEventListener("scroll", function(){
    if(container.getBoundingClientRect().top<10){
        header.classList.add("scroll")
    }
    else{
        header.classList.remove("scroll")
    }
})