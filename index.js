const readline = require('readline');

const systemNumber = Math.floor(Math.random() * 100);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askNumber() {
    rl.question("What's your name? ", (name) => {
        console.log(`\nWelcome to the game, ${name}!\n`)

        userNumber("Guess a number (1-100): ");
    })
}


function userNumber(promptText) {

    rl.question(promptText, (answer) => {
    const guess = parseInt(answer.trim(), 10);

    if (isNaN(guess) || guess > 100 || guess < 1){
        console.log("You have to put a number between 1 to 100!\n")
        userNumber(promptText)}
        
    else {
        if (guess === systemNumber){
        console.log("You Win!");
        rl.close()
    }   else if (guess > systemNumber){
        console.log("The number is too high, try again!");
        userNumber(promptText);
    }
        else if (guess < systemNumber){
        console.log("The number is too low, try again!");
        userNumber(promptText);

    }}
  })
}

askNumber();
console.log(systemNumber)