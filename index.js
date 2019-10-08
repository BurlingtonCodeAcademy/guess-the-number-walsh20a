const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

async function start() {
  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber);

let guess = getRandomInt(100) 
let userResponse = await ask("Is " + guess + " your number?")


while (check = false){let guess = getRandomInt(100) 
  let userResponse = await ask("Is " + guess + " your number?")}
  
  let check = if (guess === secretNumber) { console.log("I guessed it! I'm correct! Computer Wins.") }

  else if (guess > secretNumber) { console.log("Guess Lower.") }



  process.exit();
}
