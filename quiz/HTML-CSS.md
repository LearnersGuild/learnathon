# Technical Quiz

## HTML & CSS

### Find the errors in HTML syntax

What is wrong with the HTML example below? Find all the syntax errors in the document. Choose all that apply.

```html
<html>
  <head>
    <title>Make a Word</title>

    <rel="stylesheet" href="main.css">
  <body>
    <div id="letters">
      OPMARGR
    </div>
  </body>
</html>
```

- There is no closing tag for the "head" element. [CORRECT]
- "div" is not a real element.
- The "body" tag can't have any child elements.
- There is no tag name for the element beginning <rel="stylesheet"... [CORRECT]

### Use basic HTML terms

Which of the following statements is a true description of the HTML below? Choose one.

```html
<div id="bugs" class="animal">Bunny</div>
```

- It is a "Bunny" element with four attributes, and its content is "div".
- It is a "div" element with an "id" and a "class" attribute, and its content is "Bunny". [CORRECT]
- It is a "class" element with the attributes "div" and "bugs", and its content is "Bunny".
- It is a "div" element with the content "id=bugs", "class=animal", and "text=Bunny".

### Style the right element in CSS

Which of the CSS statements would style _all_ of the "button" elements in the below HTML to have blue text? Choose all that apply.

```html
<body>
  <div id="letters" class="big-mono topmargin">
    OPMARGR
  </div>

  <button onclick="updateLetters()">Update</button>
  <button onclick="shuffleLetters()">Shuffle</button>

  <section id="guess-area" class="topmargin">
    <input type="text" id="word-guess">
    <button onclick="checkGuess()">Guess</button>

    <div id="game-message" class="notice">
      Enter your first guess!
    </div>
  </section>
</body>
```

- `.topmargin button { color: blue; }`
- `button #word-guess { color: blue; }`
- `button { color: blue; }` [CORRECT]
- `div button { color: blue; }`
