'use strict';

let guessName = prompt('What is your name?');
// console.log(`Welcome to my page ${guessName}! Please answer yes or no to a few quick questions.`);
alert(`Welcome to my page ${guessName}! Please answer yes or no to a few quick questions.`);

let questionOne = prompt('Have you ever been to Disney World?').toUpperCase();
if(questionOne === 'YES' || questionOne === 'Y') {
  // console.log('YES! Correct me too!');
  alert('YES! Correct me too!');
} else if (questionOne === 'NO' || questionOne === 'N') {
//  console.log('NO? Wrong answer but too bad me neither!');
  alert('NO, Too bad me neither!');
}

let questionTwo = prompt('Did you have a good day?').toUpperCase();
if(questionTwo === 'YES' || questionTwo === 'Y') {
// console.log('Correct! I am glad to hear that!');
  alert('Correct! I am glad to hear that!');
} else if (questionTwo === 'NO' || questionTwo === 'N') {
  // console.log('WRONG! But I hope tommorrow is better!');
  alert('WRONG! But I hope tommorrow is better!');
}

let questionThree = prompt('Have you ever played Monopoly?').toUpperCase();
if(questionThree === 'Yes' || questionThree === 'Y') {
  // console.log('Right Answer! I love that game.');
  alert('Right Answer! I love that game.');
} else if (questionThree === 'NO' || questionThree === 'N'); {
  // console.log('Wrong Answer! You are missing out on some fun!');
  alert('Wrong Answer! You are missing out on some fun!');
}

let questionFour = prompt('Would you ever go sky diving?').toUpperCase();
if(questionFour === 'YES' || questionFour === 'Y') {
  // console.log('True! I hope to go someday as well.');
  alert('True! I hope to go someday as well.');
} else if (questionFour === 'NO' || questionFour === 'N'); {
  // console.log('Incorrect! I wish you would at leasr try.');
  alert('Incorrect! I wish you would at leasr try.');
}

let questionFive = prompt('Do you use social media?').toUpperCase();
if(questionFive === 'YES' || questionFive === 'Y') {
  // console.log('Right Answer! I love all platforms.');
  alert('Right Answer! I love all platforms.');
} else if (questionFive === 'NO' || questionFive === 'N'); {
  // console.log('Incorrect! Give it one last try please.');
  alert('Incorrect! Give it one last try please.');
}


alert(`Thanks for participating, ${guessName}. Thank you for visiting my site!`);