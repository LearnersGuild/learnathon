# Technical Quiz

## JavaScript

For each of the following questions, _do not_ use a JavaScript interpreter (like JS Bin, Node.js, or a developer console). This is a test of your ability to _read_ and _evaluate_ code in your head.

### Determine the value of a variable

Given the JavaScript code below, what is the _value_ of the variable "x"?

```javascript
var word = "capybara";
var letter = word[4];
var x = letter;
```

- The string "letter"
- The string "y"
- The number 4
- The string "b" [CORRECT]

### Determine how many times a loop will run

How many iterations (loops) will the below JavaScript code execute? In other words, how many times will the function "doSomething" be called?

```javascript
var counter = 12;

while (counter > 4) {
  doSomething();
  counter = counter - 3;
}
```

- 2
- 3 [CORRECT]
- 4
- It's an infinite loop!

### Find the syntax error

What is wrong with the JavaScript code below? Identify the correct syntax error.

```javascript
function sum(x, y)
  return x + y;
}
```

- There is no opening curly brace "{" for the function body [CORRECT]
- The function parameters are separated by a comma
- The function has only one line in its body
- There is no semicolon after the word "function"
