 //init
refreshScreen(16);

const screen = document.querySelector(".screen");
const pixels = document.querySelectorAll(".pixel");
const button = document.querySelector("button");

function refreshScreen(size) {
    if(size > 100) size = 100;
    else if(size < 0) size = 1;
    while(screen.firstChild){
        screen.removeChild(screen.firstChild);
    }
    for (let i = 0; i < (size*size); i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.id = "pixel" + i;
        pixel.style.width = 100/size + "%";
        pixel.style.height = 100/size + "%";
        screen.appendChild(pixel);
    }
}

screen.addEventListener("mouseover", event => {
    const target = event.target;
    if (target.className === "screen") { return; };
    target.style.backgroundColor = "black";
});

button.addEventListener("click", (event) => {
    const target = event.target;
    let input = prompt("Enter desired number of squares per side: ");
    refreshScreen(input);
});