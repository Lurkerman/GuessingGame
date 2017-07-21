var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
var wins = document.querySelector('.wins');

var outcome = document.querySelector(".outcome");
var playGame = document.querySelector(".playGame");
var showScore = document.querySelector(".showScore");

var guessCount = 1;
var winCount = 0;
var resetButton = document.querySelector(".newGame");

resetButton.addEventListener("click", resetGame);
guessSubmit.addEventListener('click', checkGuess);

wins.textContent = winCount;

function checkGuess() {
    var userGuess = Number(guessField.value);

//The adding variable is used to hold an entire paragraph, which must be finished later in the checkGuess function.
    var adding = "<p class='tracking'>Guess " + guessCount + ": " + userGuess;
 
    if (userGuess === randomNumber) {
        adding += "</p>";
        guesses.innerHTML += adding;
        winCount++;
        wins.textContent = winCount;
        outcome.textContent = "You won!  Congratulations!";
        setGameOver();
    } else if (guessCount === 10) {
        adding += "</p>";
        guesses.innerHTML += adding;
        setGameOver();
    } else {
        if(userGuess < randomNumber) {
           adding += ", which is too low.</p>";
           guesses.innerHTML += adding;
        } else if(userGuess > randomNumber) {
            adding += ", which is too high.</p>";
            guesses.innerHTML += adding;
        }
    }
 
  guessCount++;
  guessField.value = '';
  guessField.focus();
}

//This function switches the format of the left column.  The originally visible format is to allow user input.  showScore shows your score and allows you to reset the game.
function setGameOver() {
    playGame.style.display = "none";
    showScore.style.display = "inherit";
}

function resetGame() {
    guessCount = 1;

    //This will wipe all the paragraphs formed in the checkGuess function.
    var reset = document.querySelectorAll('.results p');
  for (var i = 0 ; i < reset.length ; i++) {
    reset[i].textContent = '';
  }
    playGame.style.display = "inherit";
    showScore.style.display = "none";
    guessField.value = '';
    guessField.focus();

    randomNumber = Math.floor(Math.random() * 100) + 1;
}