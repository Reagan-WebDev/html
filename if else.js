const myLabel = document.getElementById("myLabel");
const myInput = document.getElementById("myInput");
const myButton = document.getElementById("myButton");
const result = document.getElementById("result");
let age;
myButton.onclick = function() {
    age = document.getElementById("myInput").value;
    if (age >= 18 && age <= 30) {
        result.textContent = "You are old enough to enter this site";
    }
    else if (age < 18 && age > 0) {
        result.textContent = "You are too young. You Cannot enter this site!";
    }
    else if (age == 0) {
        result.textContent = "You Cannot enter. You were just born!";
    }
    else if (age < 0) {
        result.textContent = "Your Age Cannot be below zero!";
    }
    else {
        result.textContent = "You are too Old to enter this site! Shame on You!";
    }
}