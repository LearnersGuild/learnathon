# Make a Word

In this challenge, you'll build a word-guessing game like Scrabble or Boggle.

The idea for this game is simple: players have to make words out of a set of letters shown on the screen.

There are only two rules:

- Words must use only the letters shown in the set
- Words must be real dictionary words

For example, if the letters shown are `N A I P L R A`, then the following words are _correct_: `PLAN`, `AIR`, `RAIN`.

The following words are _incorrect_: `APE` (`E` is not one of the provided letters) and `NARL` (not a word).

**Your task is to build a working version of this game with HTML, CSS, and JavaScript.**

## Getting Started

1. Fork this gist
1. Open your fork in JS Bin
1. Start working on the first objective

## Challenge Objectives

Complete each of the challenge objectives in order.

### 1: Complete the Logic in checkGuess()

Review the existing code in `index.html`, `main.css`, and `script.js`.

The incomplete logic in the `checkGuess()` function needs to be finished in order for the basic version of this game to work.

**GOOD NEWS!** This step has already been completed for you. The developer who solved it even recorded [this video for you to watch](TODO: need link) so you can get up-to-speed.

As you watch the video, note things like:

- How they go about learning about the existing code
- What steps they go through to solve the problem
- How they debug their code

### 2: Change the Letters from JavaScript

Having a single, static set of letters is not that interesting. Eventually, we'll need to change the letter set so that players can make different words.

The first step is to create a function in JavaScript that can change the letters displayed in HTML.

Tasks:

- Create a new function in your JavaScript file called `updateLetters()`
- Inside this function, define a variable `newLetters` and set it to the string `"ABCD"`
- This function should update the contents of the `<div>` with id `letters` with the string in `newLetters`

For example, running `updateLetters()` should change the content of the letters `<div>` tag to `ABCD`.

Once you write your function, test it out in the Console.

### 3: Make a "Random Generate" Feature

To make the game more interesting, a player should be able to generate a new random set of letters.

Tasks:

- Create a new function called `randomLetters()` that returns a string of 7 random letters from `A` to `Z`
- Change the `updateLetters()` function from the last objective so that it generates a new set of random letters and updates the HTML to display them
- Make a `<button>` that, when clicked, runs the function `updateLetters()`

If you're not sure how to generate random letters from JavaScript, the internet has many answers! Use your Google skills to find examples, but be sure to read and test them before pasting them into your code.

### 4: Improve User Interface

### 5: Make a "Shuffle" Feature

### 6: Make the Number of Letters Adjustable

### 7: Get Creative
