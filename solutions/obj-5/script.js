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

// A function to check whether the guessed word is correct or not
function checkGuess() {
  // Collect the text from the letters and the guess
  var letters = getLetters();
  var guess = getGuess();

  // Convert both to uppercase so we can compare equals
  guess = guess.toUpperCase();
  letters = letters.toUpperCase();

  // Determine if all the characters in the guess are in the letters
  for (var i = 0; i < guess.length; i++) {
    var currentChar = guess[i];

    // If the current character can't be found in letters, the guess is incorrect
    if (letters.indexOf(currentChar) === -1) {
      // Show a message saying guess is incorrect
      showMessage("Wrong guess, try again.");
      // Return false to exit the function
      return false;
    }
  }

  // If we've made it this far, then the guess must be correct!
  // Show a message saying guess is correct
  showMessage("Good guess, that is correct!");
  // Return true to exit the function
  return true;
}

function updateLetters() {
  // Define a new string to update the set of letters with
  var newLetters = randomLetters();

  // Change the contents of the element with our new letters
  document.querySelector('#letters').innerText = newLetters;
}

function randomLetters() {
  // A list of all possible letters
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // A list of vowels
  var vowels = "AEIOU";
  // This string will hold the random letters
  var randomLetters = "";

  // Find a different random letter 5 times
  for (var i = 0; i < 5; i++) {
    // Generate a random index from 0-25
    var charNo = Math.floor(Math.random() * possible.length);
    // Select the letter at this random index
    randomLetters += possible.charAt(charNo);
  }

  // Then add a vowel to the beginning and end (for a total of 7)
  var firstVowelIndex = Math.floor(Math.random() * vowels.length);
  var secondVowelIndex = Math.floor(Math.random() * vowels.length);
  randomLetters = vowels.charAt(firstVowelIndex) + randomLetters;
  randomLetters = randomLetters + vowels.charAt(secondVowelIndex);

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
