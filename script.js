'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  console.log(guess);

  //When he doesnt type a number
  if (!guess) {
    displayMessage('No number');
  }
  //When guess number is too high
  else if (guess > secretNumber) {
    displayMessage('📈Too high');
    document.querySelector('.score').textContent = score;
    score--;
  }
  //When guess number is too low
  else if (guess < secretNumber) {
    displayMessage('📉Too low');
    document.querySelector('.score').textContent = score;
    score--;
  }
  //When he wins
  else if (guess == secretNumber) {
    displayMessage('🎈🎉Correct Number');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = '20';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
