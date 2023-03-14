const count = document.querySelector(".count");
const button = document.querySelector(".button");

button.addEventListener("click", (e) => {
    if (e.target.classList.contains("add")) {
      count.innerHTML++;
      setColor();
    }
    if (e.target.classList.contains("substract")) {
        count.innerHTML--;
        setColor();
    }
    if (e.target.classList.contains("reset")) {
        count.innerHTML = 0;
        setColor();
    }
})

function setColor() { 
    if (count.innerHTML > 0) {
        count.style.color = "yellow";
    }else if (count.innerHTML < 0) {
        count.style.color = "red";
    }else {
        count.style.color = "white"
    }
}