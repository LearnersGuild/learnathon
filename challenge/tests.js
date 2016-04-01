var LETTERS_TEXT, GUESS_TEXT, MESSAGE_TEXT; // globals for tracking state

function assert(message, testFunc) {
  var result = testFunc()

  if (result) {
    console.log(message);
  } else {
    console.error(message);
  }

  resetState(); // reset to prior state after every test

  return result;
}

function captureState() {
  LETTERS_TEXT = document.querySelector('#letters').innerText;
  GUESS_TEXT = document.querySelector('input#word-guess').value;
  MESSAGE_TEXT = document.querySelector('#game-message').innerText;
}

function resetState() {
  document.querySelector('#letters').innerText = LETTERS_TEXT;
  document.querySelector('input#word-guess').value = GUESS_TEXT;
  document.querySelector('#game-message').innerText = MESSAGE_TEXT;
}

function runTests() {
  captureState();

  assert("checkGuess() is defined as a function", function() {
    return (typeof checkGuess === "function");
  });

  assert("checkGuess() returns true for a valid guess", function() {
    document.querySelector('#letters').innerText = "ABCD";
    document.querySelector('input#word-guess').value = "BAD";

    return (checkGuess() === true);
  });

  assert("checkGuess() returns false for an invalid guess", function() {
    document.querySelector('#letters').innerText = "ABCD";
    document.querySelector('input#word-guess').value = "BEAD";

    return (checkGuess() === false);
  });

  assert("updateLetters() is defined as a function", function() {
    return (typeof updateLetters === "function");
  });

  assert("updateLetters() changes the letters on the page", function() {
    var before = document.querySelector("#letters").innerText;
    updateLetters();
    var after = document.querySelector("#letters").innerText;

    return before !== after;
  });

  assert("updateLetters() adds at least 4 letters", function() {
    updateLetters();
    var letters = document.querySelector("#letters").innerText;

    return letters.length >= 4;
  });

  assert("randomLetters() is defined as a function", function() {
    return (typeof randomLetters === "function");
  });

  assert("randomLetters() returns a string of 7 letters", function() {
    return (randomLetters().length === 7);
  });

  assert("randomLetters() returns a different random string every time it is called", function() {
    var first = randomLetters();
    var second = randomLetters();
    var third = randomLetters();

    return (first !== second && second !== third && third !== first);
  });

  resetState();
}
