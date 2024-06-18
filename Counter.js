const myLabel = document.getElementById("myLabel");
const myIncreaseBtn = document.getElementById("myIncreaseBtn");
const myResetBtn = document.getElementById("myResetBtn");
const myDecreaseBtn = document.getElementById("myDecreaseBtn");
let count = 0;

myIncreaseBtn.onclick = function() {
    count++;
    myLabel.textContent = count;
}
myDecreaseBtn.onclick = function() {
    count--;
    myLabel.textContent = count;
}
myResetBtn.onclick = function() {
    count = 0;
    myLabel.textContent = count;
}