// A function to get the set of possible letters
function getLetters() {
  // Select the element with the id 'letters'
  var lettersContainer = document.querySelector('#letters');

  // Get the text content of the element
  var letters = lettersContainer.innerText;

  // Return the letters
  return letters;
}

// A function to get the user's guess
function getGuess() {
  // Select the input element where the user enters their guess
  var wordGuess = document.querySelector('input#word-guess');

  // Get the text content of the element
  var guess = wordGuess.value;

  // Return the guess
  return guess;
}

// A function to display a message on the screen
function showMessage(messageText) {
  // Select the element to display a message
  var messageElem = document.querySelector('#game-message');

  // Set the text value of the element to the provided text
  messageElem.innerText = messageText;
}

function checkGuess() {
  // Collect the text from the letters and the guess
  var letters = getLetters();
  var guess   = getGuess();

  // Convert the guess to all UPPER CASE (to better compare to the letters)
  guess = guess.toUpperCase();

  // Determine if all the letters in the guess are in the letters
  for (var i = 0; i < guess.length; i++) {
    var letterFromGuess = guess[i];

    if (letters.indexOf(letterFromGuess) == -1) {
      // If the letterFromGuess can't be found in 'letters', the game is over
      showMessage("Sorry, not a valid word.");

      // Return to exit the function
      return false;
    }
  }

  // If we've made it this far, then the word must be true!
  showMessage("Yes, that is a valid word!");

  return true;
}

function updateLetters() {
  // Define a new string to update the set of letters with
  var newLetters = "ABCD";

  // Change the contents of the element with our new letters
  document.querySelector('#letters').innerText = newLetters;
}
