// ---->Variable initialization
let point = 0;
let stage = 1;
let maxStage = 10;
const min = 1;
let max = 2;
let tries = 5;
let name = prompt("What is your name?");
// ---->Variable initialization ends

// ---->Rules
console.log(`Good to meet you ${name}. Lets start shall we?`);

console.log(`------------Rules------------`);

console.log(`-->You have to guess the right whole number between the range defined`);
console.log(`-->On the right guess, you will be advanced to the next stage and awarded a point.`);
console.log(`-->If you guess the wrong number, you will be given another try.`);
console.log(`-->You have a maximum of 5 tries.`);

let tc = prompt(`Do you understand the rules? y/n`);
if (tc === 'y'){
  console.log(`------------Game------------`);
}
else{
  return 0;
}
// ---->Rules end

console.log(`-->You are starting at stage ${stage}`);
console.log(`-->Max starting range is ${max}`);

// ---->random number generator

let randomNo = function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// ---->random generator ends

// ---->loop to guess numbers
while (tries !== 0 && stage !== maxStage){
  let number = parseInt(prompt(`Guess enter a number between ${min} and ${max}`));
  if (number == null){
    return 0;
  }
  let result = randomNo(min, max);
  if (number === parseInt(result)) {
    console.log(`You guessed correctly!`);
    console.log(`The number was ${result} and you guessed ${number}`);
    stage++;
    point++;
    max++;
    console.log(`You now have ${point} points`);
    console.log(`You are now at stage ${stage}`);
    console.log(`Max range is ${max}`);
  }
  else{
    console.log("Wrong guess");
    tries--;
    console.log(`The number was actually ${result}`);
    console.log(`You have ${tries} tries remaining.`);
  }
}
// ---->end of loop

// ---->congratulatory message or failure message
if (stage === maxStage){
  console.log(`Congratulations! You beat the game! Now go touch some grass.`);
  return (0);
}
if (tries === 0){
  console.log(`Game over! You've run out of tries :(`);
  return (0);
}