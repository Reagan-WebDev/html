const container = document.getElementById("container");
const myH1 = document.getElementById("myH1");
const myInput = document.getElementById("myInput");
const myButton = document.getElementById("myButtton");
const result = document.getElementById("result");
let myNumber;
function myCalculator() {
    myNumber = myInput.value;
    if(myNumber % 2 === 0) {
        result.innerHTML = "Even Number";
    }
    else {
        result.innerHTML = "Odd Number";
    }
}