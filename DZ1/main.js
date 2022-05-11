const inn_button = document.querySelector(".inn_button");
const inn_text = document.querySelector(".inn_text");
const inn_result = document.querySelector(".inn_result");

const innReg = /^1 \d{13}|2 \d{13}$/;

inn_button.addEventListener("click", () => {
    if (innReg.test(inn_text.value)) {
        inn_result.style.color = "green";
        inn_result.innerText = "OK";
    } else {
        inn_result.style.color = "red";
        inn_result.innerText = "NOT OK";
    }

});


////////////////////////////////////////////////////////////

const mover = document.querySelector(".mover")

let num = 0;
let NUM = 50;

mover.addEventListener("click", function move() {
    num += 50;
    mover.style.left = `${num}px`;
    mover.style.top = `${NUM}px`;
    if (num < 50) {
        move();
    } else {
        num = 0;
    }
})