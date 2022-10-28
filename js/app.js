'use strict';
console.log('Hello World');

let guessName = prompt('What is your name?');
// console.log(`Welcome to my page ${guessName}! Please answer yes or no to a few quick questions.`);
alert(`Welcome to my page ${guessName}! Please answer yes or no to a few quick questions.`);

let questionOne = prompt('Have you ever been to Disney World?').toUpperCase();
if(questionOne === 'YES' || questionOne === 'Y') {
  // console.log(`YES! ${guessName}! Correct me too!`);
  alert(`YES! ${guessName}! correct me too!`);
} else if (questionOne === 'NO' || questionOne === 'N') {
//  console.log(`NO? ${guessName}! wrong answer but too bad me neither!`);
  alert(`NO, ${guessName}! too bad me neither!`);
}

let questionTwo = prompt('Did you have a good day?').toUpperCase();
if(questionTwo === 'YES' || questionTwo === 'Y') {
// console.log(`Correct! ${guessName}! I am glad to hear that!`);
  alert(`Correct! ${guessName}! I am glad to hear that!`);
} else if (questionTwo === 'NO' || questionTwo === 'N') {
  // console.log(`WRONG! But ${guessName}! I hope tommorrow is better!`);
  alert(`WRONG! But ${guessName}! I hope tommorrow is better!`);
}

let questionThree = prompt('Have you ever played Monopoly?').toUpperCase();
if(questionThree === 'YES' || questionThree === 'Y') {
  // console.log(`Right Answer! ${guessName}! I love that game.`);
  alert(`Right Answer! ${guessName}! I love that game.`);
} else if (questionThree === 'NO' || questionThree === 'N') {
  // console.log(`${guessName}! Wrong Answer! You are missing out on some fun!`);
  alert(`${guessName}! Wrong Answer! You are missing out on some fun!`);
}

let questionFour = prompt('Would you ever go sky diving?').toUpperCase();
if(questionFour === 'YES' || questionFour === 'Y') {
  // console.log(`True! ${guessName}! I hope to go someday as well.`);
  alert(`True! ${guessName}! I hope to go someday as well.`);
} else if (questionFour === 'NO' || questionFour === 'N') {
  // console.log(`Incorrect! ${guessName}! I wish you would at leasr try.`);
  alert(`Incorrect! ${guessName}! wish you would at leasr try.`);
}

let questionFive = prompt('Do you use social media?').toUpperCase();
if(questionFive === 'YES' || questionFive === 'Y') {
  // console.log(`${guessName}! Right Answer! I love all platforms.`);
  alert(`${guessName}! Right Answer! I love all platforms.`);
} else if (questionFive === 'NO' || questionFive === 'N') {
  // console.log(`${guessName}! Incorrect! Give it one last try please.`);
  alert(`${guessName}! Incorrect! Give it one last try please.`);
}


let favColor = ['black', 'red', 'yellow', 'blue'];
let guessesLeft = 6;
let correctAnswer = false;
while(guessesLeft > 0) {
  let guess = prompt('What is my favorite color?').toLowerCase();
  for (let i = 0; i < favColor.length; i++) {
    if (favColor[i] === guess) {
      console.log('Correct! Back is my favoriteeeee!');
      correctAnswer = true;
    }
    else {
      console.log(`${guess}!`);
    }
  }
  if (correctAnswer) {
    score++;
    break;
  }
  guessesLeft--;
} alert('My favorite colors are black, red, yellow, and blue!');


let myNumber = 17;

let guessNumber = prompt('Guess my favorite number between 1 and 30.');
while (guessNumber !== myNumber) {
  guessNumber = prompt('Guess my favorite number');
  if (guessNumber > myNumber) {
    alert('Wrong! You guessed too high!');
  }
  if (guessNumber < myNumber) {
    alert('Guess again, that was too low!');
  }
}

alert(`Thanks for participating, ${guessName}. Thank you for visiting my site!`);
