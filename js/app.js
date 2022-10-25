'use strict';

console.log('Hello World');

let guessName = prompt('What is your name?');
alert(`Welcome to my page ${guessName}! Please answer yes or no to some quick questions.`);

let questionOne = prompt('Have you ever been to Disney World?').toUpperCase();
if(questionOne === 'YES' || questionOne === 'Y') {
  alert('YES! Correct me too!');
} else if (questionOne === 'NO' || questionOne === 'N') {
  alert ('NO, Too bad me neither!');
}
