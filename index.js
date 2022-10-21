let point = 0;
let stage = 1;
let min = 1;
let max = 2;
let name = prompt("what is your name?");
console.log(`Good to meet you ${name}. Lets start shall we?`);

console.log(`------------------------------------`);

console.log(`So the rules are if you guess the right number, you will be advanced to the next stage and awarded a point. If you guess the wrong number, you will be given another try.`);

console.log(`------------------------------------`);

console.log(`You are starting at stage ${stage}`);
console.log(`Max starting range is ${max}`);

function callStageAndRange(stage, max) {
  stage++;
  max++;
  console.log(`You are now at stage ${stage}`);
  console.log(`Max range is ${max}`);
}


let randomNo = function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let number = prompt(`Guess enter a number`);

function guessNo(number) {
  if (number == randomNo) {
    console.log(`You guessed correctly!`);
    console.log(`The number was ${randomNo} and you guessed ${number}`);
    callStageAndRange(stage, max);
  }
}
while (number != randomNo) {
  console.log(`Try again`);
  continue;
}
if (number == randomNo) {
  guessNo(number);
}
