const display = document.getElementById("display");
function myInput(input) {
    display.value += input;
}
function clearInput() {
    display.value = "";
}
function result() {
    try {
        display.value = eval(display.value);
    }
    catch(error)  {
        display.value = "Syntax Error";
    }
}