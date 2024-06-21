const minNum = 1;
const maxNum = 200;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1));
let attempts = 0;
let guesses;
let running = true;
while(running) {
    guesses = window.prompt("Guess a number between " + minNum + " - " + maxNum);
    guesses = Number(guesses);

    if(isNaN(guesses)) {
        window.alert("Please Enter a valid number!")
    }
    else if(guesses < minNum || guesses > maxNum) {
        window.alert("Please Enter a valid number!");
    }
    else {
        attempts++;
        if(guesses < answer) {
            window.alert("Too Low! Try Again!");
        }
        else if(guesses > answer) {
            window.alert("Too High! Try Again!");
        }
        else {
            window.alert("Correct! The answer was " + answer + " . " + "The number of attempts were " + attempts + " . ");
            running = false;
        }
    }
}