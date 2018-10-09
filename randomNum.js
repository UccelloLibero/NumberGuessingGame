/*
The Random Number Guessing game generates a random number between 1 and 10 and allows the player two attemts to guess the number correctly
*/

// assume the player guessed a wrong number
var correctGuess = false;

// generate a random number between 1 and 10
var randomNumber = Math.floor(Math.random() * 10) + 1;

// ask user to guess the number and stores the input into a new variable
var guess = prompt('I am thinking of a number between 1 and 10, can you guess the number?');

/*
Test to see if the player:
 guessed correctly
 guessed too low
 guessed too high
 guessed worng number
*/
if (parseInt(guess) === randomNumber) {
  correctGuess = true;
} else if (parseInt(guess) < randomNumber) {
  var guessMore = prompt('Close, but your number ' + guess + ' is less than the number I was thinking of. Try again!');
  if (parseInt(guessMore) === randomNumber) {
    correctGuess = true;
  }
} else if (parseInt(guess) > randomNumber) {
  var guessLess = prompt('Hmmm, your number ' + guess + ' is more than the one I was thinking of...try again.')
  if (parseInt(guessLess) === randomNumber) {
    correctGuess = true;
  }
}

// test the final response and output response
if (correctGuess === true) {
  document.write("<h2>You've guess the number!</h2>");
} else {
  document.write("<h2>Sorry but that is not the correct number. The number I was thinking of was " + randomNumber + " </h2>");
}
