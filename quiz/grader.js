var rubric = {
  ct1: 'True',
  ct2: '3',
  js1: 'The string "b"',
  js2: '3',
  js3: 'There is no opening curly brace "{" for the function body'
}

function grade(input, rubric) {
  var score = 0.0;
  var results = [];
  var questionId;

  for (questionId in rubric) {
    var expected = rubric[questionId];
    var actual = input[questionId];
    var result = { score: 0, expected: expected, actual: actual };

    if (actual === expected) {
      score += 1.0;
      result.score = 1;
    }

    results.push(result);
  }

  return {
    score: (score / results.length),
    results: results
  }
}

output = grade(input, rubric);
