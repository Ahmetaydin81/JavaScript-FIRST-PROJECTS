let buttonOne = document.querySelector(".high-button");
let buttonTwo = document.querySelector(".low-button");
let buttonTre = document.querySelector(".value-del");

let number = 0;
document.getElementById("value").innerHTML = number;

buttonOne.addEventListener("click", () => {
    number++;
    document.getElementById("value").innerHTML = number;
})


buttonTwo.addEventListener("click", () => {
    if (number > 0) {
        number--;
        document.getElementById("value").innerHTML = number;

    }
    else {
        document.getElementById("value").innerHTML = "❤️";
    }


})


buttonTre.addEventListener("click", () => {
    if (number > 0) {
        number = 0;
        document.getElementById("value").innerHTML = number;
    }
})