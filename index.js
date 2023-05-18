const btnDecrease = document.querySelector('.decrease');
const btnReset = document.querySelector('.reset');
const btnIncrease = document.querySelector('.increase');
const number = document.getElementById('count');
let counter = 0;
number.innerHTML = counter;

function fontColor() {
    if (counter < 0) {
        return number.style.color = 'red';
    } else if (counter > 0) {
        return number.style.color = 'green';
    } else {
        return number.style.color = 'black';
    }
}

btnDecrease.addEventListener('click', () => {
    counter--;
    fontColor();
    return number.innerHTML = counter;
})
btnReset.addEventListener('click', () => {
    counter = 0;
    fontColor();
    return number.innerHTML = counter;
})
btnIncrease.addEventListener('click', () => {
    counter++;
    fontColor();
    return number.innerHTML = counter;
})