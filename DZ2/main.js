const block_inner = document.querySelector('.block_inner');


const mover = () => {
    let y = parseFloat(getComputedStyle(block_inner).left);
    let x = parseFloat(getComputedStyle(block_inner).top);

    if (y < 400 && x == 0) {
        block_inner.style.left = y + 1 + "px";
    }

    if (y == 400 && x < 400) {
        block_inner.style.top = x + 1 + "px";
    }

    if (y > 0 && x == 400) {
        block_inner.style.left = y - 1 + "px";
    }

    if (y == 0 && x > 0) {
        block_inner.style.top = x - 1 + "px";
    }
    setTimeout(() => {
        mover();
    }, 10);
}

mover();
// ///////////////////

let num = 0;

let sec = () => {
    num++;
    console.log(num + "sec ago");
}

setInterval(sec, 1000);