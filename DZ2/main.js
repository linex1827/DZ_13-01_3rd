const block_inner = document.querySelector('.block_inner');


let y = 0;
let x = 0;


const mover = () => {
    if (y < 400 && x == 0) {
        y += 15;
        block_inner.style.left = `${y}px`;
        setTimeout(() => {
            mover();
        }, 100)
    } else if (y >= 400 && x < 400) {
        x += 15;
        block_inner.style.top = `${x}px`;
        setTimeout(() => {
            mover();
        }, 100)
    } else if (y > 0 && x >= 400) {
        y -= 15;
        block_inner.style.left = `${y}px`;
        setTimeout(() => {
            mover();
        }, 100);
    } else if (y == 0 && x > 0) {
        x -= 15
        block_inner.style.top = `${x}px`;
        setTimeout(() => {
            mover();
        }, 100)
    }
}

mover();


let num = 0;

setInterval(() => {
    num++;
    console.log(num + "sec ago")
}, 1000)