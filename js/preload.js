var loader = document.querySelector(".loader")

window.addEventListener("load", fadeout);

function fadeout(){
    loader.classList.add("disappear");
}