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

function randomLetters() {
  // A list of all possible letters
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // This string will hold the random letters
  var randomLetters = "";

  // Find a different random letter 7 times
  for (var i = 0; i < 7; i++) {
    // Generate a random index from 0-25
    var charNo = Math.floor(Math.random() * possible.length);
    // Select the letter at this random index
    randomLetters += possible.charAt(charNo);
  }

  // Return the random letters
  return randomLetters;
}

function shuffle(original) {
  // Make an array of characters from the original string
  var chars = original.split('');
  // This will hold our final, shuffled string
  var shuffled = "";

  // Repeat until we have no characters left
  while (chars.length > 0) {
    // Make a random indes to find a character by
    var charNo = Math.floor(Math.random() * chars.length);
    // Remove this character from the array
    var char = chars.splice(charNo, 1);
    // Add it to our shuffled string
    shuffled += char;
  }

  // Return the shuffled string
  return shuffled;
}
