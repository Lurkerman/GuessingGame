var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
var wins = document.querySelector('.wins');

var playGame = document.querySelector(".playGame");
var showScore = document.querySelector(".showScore");

var guessCount = 1;
var winCount = 0;
var resetButton = document.querySelector(".newGame");

resetButton.addEventListener("click", resetGame);

wins.textContent = winCount;

function checkGuess() {
    var userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';
 
    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        winCount++;
        wins.textContent = winCount;
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
    }
    if(userGuess < randomNumber) {
        lowOrHi.textContent = 'Last guess was too low!';
    } else if(userGuess > randomNumber) {
        lowOrHi.textContent = 'Last guess was too high!';
    }
 
  guessCount++;
  guessField.value = '';
  guessField.focus();;
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    playGame.style.display = "none";
    showScore.style.display = "inherit";
}

function resetGame() {
  guessCount = 1;

  var reset = document.querySelectorAll('.results p');
  for (var i = 0 ; i < reset.length ; i++) {
    reset[i].textContent = '';
  }

    playGame.style.display = "inherit";
    showScore.style.display = "none";
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}