function State() {
  this.letters = document.querySelector('#letters').innerText;
  this.guess = document.querySelector('input#word-guess').value;
  this.message = document.querySelector('#game-message').innerText;

  this.reset = function() {
    document.querySelector('#letters').innerText = this.letters;
    document.querySelector('input#word-guess').value = this.guess;
    document.querySelector('#game-message').innerText = this.message;
  };
}

var RESULTS = [];

function assert(message, testFunc) {
  var originalState = new State();
  var result;

  try {
    result = testFunc();
  } catch (e) {
    console.error("Error: " + e.message);
  } finally {
    result = result || false;
  }

  if (result) {
    console.log("PASS: " + message);
  } else {
    console.error("FAIL: " + message);
  }

  originalState.reset(); // reset to prior state after every test

  RESULTS.push(result);
  return result;
}

function group(name, assertions) {
  console.log('--- ' + name + ' ---');

  assertions();
}

function runTests() {
  RESULTS = []; // clear results

  group("Objective 1 - checkGuess() logic", function() {
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
  });

  group("Objective 2 - Change letters", function() {
    assert("updateLetters() is defined as a function", function() {
      return (typeof updateLetters === "function");
    });

    assert("updateLetters() changes the letters on the page", function() {
      var before = "BEFORE";
      document.querySelector("#letters").innerText = before;

      updateLetters();

      var after = document.querySelector("#letters").innerText;

      return before !== after;
    });

    assert("updateLetters() adds at least 4 letters", function() {
      updateLetters();
      var letters = document.querySelector("#letters").innerText;

      return letters.length >= 4;
    });
  });

  group("Objective 3 - Randomly generate letters", function() {
    assert("randomLetters() returns a string of 7 letters", function() {
      return (randomLetters().length === 7);
    });

    assert("randomLetters() returns a different random string every time it is called", function() {
      var first = randomLetters();
      var second = randomLetters();
      var third = randomLetters();

      return (first !== second && second !== third && third !== first);
    });

    assert("randomLetters() returns a string containing at least 2 vowels", function() {
      var letters = randomLetters();
      var vowels = letters.match(/[aeiou]/gi);

      return vowels && vowels.length >= 2;
    });
  });

  group("Objective 5 - Shuffle letters", function() {
    assert("shuffle() shuffles a string of 7 characters", function() {
      var testString = "SHUFFLE";
      var shuffled = shuffle(testString);

      return (shuffled.length === testString.length && shuffled !== testString);
    });

    assert("shuffle() returns the same set of letters", function() {
      var testString = "SHUFFLE";
      var shuffled = shuffle(testString);

      var sortedTestString = testString.split('').sort().join();
      var sortedShuffledString = shuffled.split('').sort().join();

      return (sortedTestString === sortedShuffledString);
    });
  });

  var passes = String(RESULTS.filter(function(r) { return r === true; }).length);
  var fails = String(RESULTS.filter(function(r) { return r === false; }).length);

  group("RESULTS", function() {
    console.log(passes + " passing tests and " + fails + " failing tests.");
  });
}
