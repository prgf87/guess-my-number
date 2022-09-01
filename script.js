'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 18;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //no input
  if (!guess) {
    document.querySelector('.message').textContent = `⛔ No Number!`;

    //guess is correct / player correct
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!!';

    document.querySelector('.number').textContent = secretNumber;

    //change background color and widen number box
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '45rem';

    //guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `Too high, try again!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `You lost the game! 🤯`;
      document.querySelector('.score').textContent = 0;
    }

    //guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `Too low, try again!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `You lost the game! 🤯`;
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.numner').style.width = '15rem';
});

// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   console.log(score);
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   console.log(secretNumber);

//   document.querySelector('.score').textContent = score;
//   document.querySelector('.message').textContent = `Start guessing...`;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';

//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });
