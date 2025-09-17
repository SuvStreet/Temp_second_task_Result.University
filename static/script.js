let count = 0;

const countEl = document.getElementById('count');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');

increaseBtn.addEventListener('click', () => {
    count++;
    countEl.textContent = count;
});

decreaseBtn.addEventListener('click', () => {
    count--;
    countEl.textContent = count;
});
