const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
    return new Promise((resolve, reject) => {
        rl.question(questionText, resolve);
    });
}

function randomInteger(min, max) {
    let range = max - min + 1;
    return min + Math.floor(Math.random() * range);
}

start();

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

async function start() {
    console.log("Let's play a game where you (human) make up a number between 1 and 100 and I (computer) try to guess it.")
    let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
    console.log('You entered: ' + secretNumber);

    let guess = getRandomInt(100)
    let userResponse = await ask("Is " + guess + " your number? ")

    let maxNumber = 100
    let minNumber = 1

    while (userResponse !== "Y" || "y" !== userResponse) {

        if (guess > secretNumber) {
            console.log("Guess Lower.")
            maxNumber = guess
            guess = randomInteger(maxNumber, minNumber)

            userResponse = await ask("Is " + guess + " your number?")
        }

        else if (guess < secretNumber) {
            console.log("Guess Higher.")
            minNumber = guess
            guess = randomInteger(maxNumber, minNumber)

            userResponse = await ask("Is " + guess + " your number?")
        }

        else if (userResponse === "y" || "Y" === userResponse) {
            console.log("I guessed it! I'm correct! I'm a genius! The Computer Wins.")
            break
        }
    }




    process.exit();
}
