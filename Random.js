const myRoll = document.getElementById("myRoll");
const result = document.getElementById("result");

myRoll.onmouseover = function() {
    let roll = Math.floor(Math.random() * 6) + 1;
    result.textContent =  roll;
}
