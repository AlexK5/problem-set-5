/*
 * SOLUTION. Mario.
 */

function mario() { //creates a function called mario
  let height = -1; //creates a variable called height and sets it to -1

  while (height < 1 || height > 23) { //creates a while loop that works until the height is within the requirements
    height = Number(prompt("Height: ")); //sets height to a user-inputted number

    if (height === null) { //checks whether height does not have a valid value
      break; //breaks the code out of the while loop
    } else if (Number.isNaN(height)) { //checks whether the height value is not a number assuming that height has a value
      height = -1; //sets height to -1
    } else if (!Number.isInteger(height)) { //checks whether the height is not an integer assuming that height has a numerical value
      height = -1; //sets height to -1
    }
  }

  if (height !== null) { //checks whether a valid height was entered
    let output = "<code>"; //creates a variable called output with a value that is a code tag
    let space = "&nbsp;"; //creates a variable called space with a value that is a non-breaking space
    let block = "#"; //creates a variable called block with a value that is a hashtag

    for (let row = 1; row <= height; row++) { //creates a for loop that creates a variable called row and sets it to one and runs until row is greater than height with row increasing by one per iteration
      for (let i = 0; i < height - row; i++) { //creates a for loop that creates a variable called i and sets it to zero and runs it until i is equal to height minus row with i increasing by one per iteration
        output = output + space; //the variable space is added to output
      }
      for (let j = 0; j < row + 1; j++) { //creates a for loop that creates a variable called j and sets it to zero and runs that code until j is greater than row with j increasing by one per iteration
        output = output + block; //the variable block is added to output
      }
      output = output + "<br>"; //a break tag is added to output
    }
    output = output + "</code>"; //a code tag is added to output

    document.getElementById("mario-easy-output").innerHTML = output; //output's value is displayed in the html
  } else { //runs if height does not have a value
    document.getElementById("mario-easy-output").innerHTML = ""; //nothing is displayed in the html
  }

  check("mario", height;//the code is checked
}

/*
 * SOLUTION. Mario, Again.
 */

function marioAgain() { //creates a function called mario again
  let height = -1; //creates a variable called height and sets it to -1

  while (height < 1 || height > 23) { //creates a while loop that runs while height's value is not in the specified range
    height = Number(prompt("Height: ")); //sets height to a number entered by the user

    if (height === null) { //checks if height does not have a valid value
      break; //breaks the code out of the while loop
    } else if (Number.isNaN(height)) { //checks if height's value is not a number assuming it has a value
      height = -1; //sets height to -1
    } else if (!Number.isInteger(height)) { //checks if height's value is not an integer assuming it has a numerical value
      height = -1; //sets height to -1
    }
  }

  if (height !== null) { //checks if height has a valid value
    let output = "<code>"; //creates a variable called output and sets its value to a code tag
    let space = "&nbsp;"; //creates a variable called space and sets its value to non-breaking space
    let block = "#"; //creates a variable called block and sets its value to a hashtag

    for (let row = 1; row <= height; row++) { //creates a for loop that creates a variable called row and sets it to one and runs until row is greater than height with row increasing by one per iteration
      for (let i = 0; i < height - row; i++) {  //creates a for loop that creates a variable called i and sets it to zero and runs it until i is equal to height minus row with i increasing by one per iteration
        output = output + space; //adds space's value to output
      }
      for (let j = 0; j < row + 1; j++) { //creates a for loop that creates a variable called j and sets it to zero and runs that code until j is greater than row with j increasing by one per iteration
        output = output + block; //adds block's value to output
      }
      output = output + space + space; //adds two of space's value to output

      for (let k = 0; k < row + 1; k++) { //creates a for loop that creates a variable called k and sets it to zero and runs that code until k is greater than row with k increasing by one per iteration
        output = output + block; //adds block's value to output
      }
      output = output + "<br>"; //adds a break tag to output
    }
    output = output + "</code>"; //adds a code tag to output

    document.getElementById("mario-hard-output").innerHTML = output; //displays output's value in the html
  } else { //executes when height does not have a valid value
    document.getElementById("mario-hard-output").innerHTML = ""; //does not display anything
  }

  check("mario-again", height); //checks the code
}

/*
 * SOLUTION. Credit.
 */

function credit() { //creates a function called credit
  let card = "invalid"; //creates a variable called card and sets it to the word invalid

  while (!Number.isInteger(card)) { //creates a while loop that executes while card is not an integer
    card = Number(prompt("Card Number: ")); //sets cards value to a user-generated number

    if (card === null) { //checks if card does not have a valid value
      break; //breaks the code from the while loop
    }
  }

  let prev;
  if (card !== null) {
    let number = card;
    let sumMultDigits = 0;
    let sumNonMultDigits = 0;
    let numDigits = 0;
    let current = -1;
    let previous = -1;
    let multiply = false;

    while (number > 0) {
      digit = number % 10;
      numDigits++;

      let tmp = current;
      current = digit;
      previous = tmp;

      if (multiply) {
        var product = digit * 2;
        var sum = 0;

        while (product > 0) {
          let temp = product % 10;
          sum = sum + temp;
          product = Math.floor(product / 10);
        }

        sumMultDigits = sumMultDigits + sum;
      } else {
        sumNonMultDigits = sumNonMultDigits + digit;
      }

      multiply = !multiply;
      number = Math.floor(number / 10);
    }

    let checksum = ((sumNonMultDigits + sumMultDigits) % 10);
    if (checksum === 0) {
      if (current === 4) {
        if (numDigits === 13 || numDigits === 16) {
          prev = document.getElementById("cc");
          if (prev) {
            prev.parentNode.removeChild(prev);
          }

          let visa = document.createElement("img");
          visa.setAttribute("id", "cc");
          visa.setAttribute("src", "images/visa.png");
          visa.setAttribute("width", "25%");
          document.getElementById("credit-output").innerHTML = "";
          document.getElementById("credit-output").appendChild(visa);
        }
      } else if (current === 3 && (previous === 4 || previous === 7)) {
        if (numDigits === 15) {
          prev = document.getElementById("cc");
          if (prev) {
            prev.parentNode.removeChild(prev);
          }

          let amex = document.createElement("img");
          amex.setAttribute("id", "cc");
          amex.setAttribute("src", "images/amex.png");
          amex.setAttribute("width", "25%");
          document.getElementById("credit-output").innerHTML = "";
          document.getElementById("credit-output").appendChild(amex);
        }
      } else if (current === 5 && previous > 0 && previous < 6) {
        if (numDigits === 16) {
          prev = document.getElementById("cc");
          if (prev) {
            prev.parentNode.removeChild(prev);
          }

          var mc = document.createElement("img");
          mc.setAttribute("id", "cc");
          mc.setAttribute("src", "images/mastercard.png");
          mc.setAttribute("width", "25%");
          document.getElementById("credit-output").innerHTML = "";
          document.getElementById("credit-output").appendChild(mc);
        }
      }
    } else {
      document.getElementById("credit-output").innerHTML = "Invalid.";
    }
  } else {
    prev = document.getElementById("cc");
    if (prev) {
      prev.parentNode.removeChild(prev);
    }
    document.getElementById("credit-output").innerHTML = "";
  }

  check("credit", card);
}

/*
 * SOLUTION. Guess.
 */

function guess() {
  let target = Number((Math.random() * 1001).toFixed(0));
  let guess = -1;
  let attempts = 0;

  while (guess !== target) {
    guess = Number(prompt("Guess: "));

    if (guess === null) {
      break;
    } else if (Number.isNan(guess)) {
      guess = -1;
    } else if (!Number.isInteger(guess)) {
      guess = -1;
    }

    if (guess > 0 && guess < 1001) {
      attempts++;

      if (guess < target) {
        alert("Try something a little larger...");
      } else if (guess > target) {
        alert("Try something a little smaller...");
      }
    }
  }

  if (guess !== null) {
    document.getElementById("guess-output").innerHTML = "Random Number: " + target + "<br>Attempts: " + attempts;
  } else {
    document.getElementById("guess-output").innerHTML = "";
  }

  check("guess");
}

/*
 * SOLUTION. Hurricane.
 */

function hurricane() {
  const CAT5 = 156;
  const CAT4 = 129;
  const CAT3 = 110;
  const CAT2 = 95;
  const CAT1 = 73;
  const TROP = 38;

  let windspeed = -1;
  while (windspeed < 0) {
    windspeed = Number(prompt("Windspeed: "));

    if (windspeed === null) {
      break;
    } else if (Number.isNaN(windspeed)) {
      windspeed = -1;
    } else if (!Number.isInteger(windspeed)) {
      windspeed = -1;
    }
  }

  if (windspeed !== null) {
    if (windspeed > CAT5) {
      document.getElementById("hurricane-output").innerHTML = "Category 5 Hurricane.";
    } else if (windspeed > CAT4) {
      document.getElementById("hurricane-output").innerHTML = "Category 4 Hurricane.";
    } else if (windspeed > CAT3) {
      document.getElementById("hurricane-output").innerHTML = "Category 3 Hurricane.";
    } else if (windspeed > CAT2) {
      document.getElementById("hurricane-output").innerHTML = "Category 2 Hurricane.";
    } else if (windspeed > CAT1) {
      document.getElementById("hurricane-output").innerHTML = "Category 1 Hurricane.";
    } else if (windspeed > TROP) {
      document.getElementById("hurricane-output").innerHTML = "Tropical Storm.";
    } else {
      document.getElementById("hurricane-output").innerHTML = "The skies are calm...";
    }
  } else {
    document.getElementById("hurricane-output").innerHTML = "";
  }

  check("hurricane", windspeed);
}

/*
 * SOLUTION. Gymnastics.
 */

function gymnastics() {
  let total = 0;
  let scores = [];
  let valid = 0;
  let max = -1;
  let min = 11;
  let score = -1;

  while (valid < 6) {
    score = Number(prompt("Score: "));

    if (score === null) {
      break;
    } else if (Number.isNaN(score)) {
      score = -1;
    }

    if (score >= 0 && score <= 10) {
      valid++;
      scores.push(score);

      if (score < min) {
        min = score;
      }
      if (score > max) {
        max = score;
      }
      total = total + score;
    }
  }

  if (score !== null) {
    let sum = total;
    sum = sum - min - max;
    let average = (sum / 4.0).toFixed(2);

    let result = `Discarded: ${min}, ${max}<br>Score: ${average}`;
    document.getElementById("gymnastics-output").innerHTML = result;
  } else {
    scores = null;
    document.getElementById("gymnastics-output").innerHTML = "";
  }

  check("gymnastics", scores);
}

/*
 * SOLUTION. Report Card.
 */

function reportCard() {
  let testTotal = 0;
  let quizTotal = 0;
  let homeworkTotal = 0;
  let tests = 0;
  let quizzes = 0;
  let homeworks = 0;

  let testScore = -2;
  while (testScore !== -1) {
    testScore = Number(prompt("Test: "));

    if (testScore === null) {
      break;
    } else if (Number.isNaN(testScore)) {
      testScore = -2;
    } else if (testScore === -1) {
       break;
    } else if (testScore >= 0 && testScore <= 100) {
      tests++;
      testTotal = testTotal + testScore;
    }
  }

  let quizScore = -2;
  while (quizScore !== -1) {
    quizScore = Number(prompt("Quiz: "));

    if (quizScore === null) {
      break;
    } else if (Number.isNaN(quizScore)) {
      quizScore = -2;
    } else if (quizScore === -1) {
       break;
    } else if (quizScore >= 0 && quizScore <= 100) {
      quizzes++;
      quizTotal = quizTotal + quizScore;
    }
  }

  let homeworkScore = -2;
  while (homeworkScore !== -1) {
    homeworkScore = Number(prompt("Homework: "));

    if (homeworkScore === null) {
      break;
    } else if (Number.isNaN(homeworkScore)) {
      homeworkScore = -2;
    } else if (homeworkScore === -1) {
       break;
    } else if (homeworkScore >= 0 && homeworkScore <= 100) {
      homeworks++;
      homeworkTotal = homeworkTotal + homeworkScore;
    }
  }

  let testAverage = null;
  let quizAverage = null;
  let homeworkAverage = null;
  let average = null;

  if (testScore === null || quizScore === null || homeworkScore === null) {
    document.getElementById("report-card-output").innerHTML = "";
  } else {
    testAverage = (testTotal / tests).toFixed(2);
    quizAverage = (quizTotal / quizzes).toFixed(2);
    homeworkAverage = (homeworkTotal / homeworks).toFixed(2);
    average = (testAverage * 0.6 + quizAverage * 0.3 + homeworkAverage * 0.1).toFixed(2);

    let result = `Tests: ${testAverage}<br>Quizzes: ${quizAverage}<br>Homework: ${homeworkAverage}<br>Grade: ${average}`;
    document.getElementById("report-card-output").innerHTML = result;
  }

  check("report-card", testTotal, tests, quizTotal, quizzes, homeworkTotal, homeworks);
}
