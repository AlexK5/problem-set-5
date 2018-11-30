/*
 * Mario. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style half-pyramid of that height.
 *
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function mario() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 1 CODE HERE
document.getElementById("mario-easy-output").style.fontFamily="monospace";
let p = document.getElementById("mario-easy-output");
let result = "";
height=0;
x=0;
while(height<1 || height>23 || height%1!=0) {
  if (x==1){
    alert("Heights must be integers between 1 and 23.");
  }
  height=Number(prompt("Please enter an integer from 1 to 23."));
  result="";
  x=1;
}
for (let i = 0; i<height; i++) {
  for (let j = 0; j<height+1; j++){
    if(j>(height-i)-2){
      result+="#";
    }else{
      result+="&nbsp;";
    }
  }
  result+="<br/>";
}
p.innerHTML = "<code>" + result + "</code>";
  ////////////////////////// DO NOT MODIFY
  check('mario', height); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Mario, Again. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style pyramid of that height.
 *
 *     ##  ##
 *    ###  ###
 *   ####  ####
 *  #####  #####
 * ######  ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function marioAgain() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 2 CODE HERE
  document.getElementById("mario-hard-output").style.fontFamily="monospace";
  let p = document.getElementById("mario-hard-output");
  let result = "";
  height=0;
  x=0;
  while(height<1 || height>23 || height%1!=0) {
    if (x==1){
      alert("Heights must be integers between 1 and 23.");
    }
    height=Number(prompt("Please enter an integer from 1 to 23."));
    result="";
    x=1;
  }
  for (let i = 0; i<height; i++) {
    for (let j = 0; j<height+1; j++){
      if(j>(height-i)-2){
        result+="#";
      }else{
        result+="&nbsp;";
      }
    }
    result+="&nbsp;&nbsp;"
    for (let j = 0; j<height+1; j++){
      if(j<i+2){
        result+="#";
      }
    }
    result+="<br/>";
  }
  p.innerHTML = "<code>" + result + "</code>";
  //////////////////////////////// DO NOT MODIFY
  check('mario-again', height); // DO NOT MODIFY
  //////////////////////////////// DO NOT MODIFY
}

/*
 * Credit. 10 points.
 *
 * Write a function that prompts the user for a credit card number (valid
 * and invalid examples will be provided), and displays either:
 *   - an invalid image (provided)
 *   - an American Express image (provided)
 *   - a Mastercard image (provided)
 *   - a Visa image (provided)
 *
 * We'll use Luhn's algorithm to determine the validity of a credit card
 * number. Review the steps of the algorithm below.
 *
 *   0. Multiply every other digit by 2, starting with the number’s
 *      second-to-last digit, and then add those products' digits together.
 *   1. Add the sum to the sum of the digits that weren’t multiplied by 2.
 *   2. If the total’s last digit is 0 (or, put more formally, if the total
 *      modulo 10 is congruent to 0), the number is valid!
 *
 * American Express uses 15-digit numbers, starting with 34 or 37.
 * Mastercard uses uses 16-digit numbers, starting with 51, 52, 53, 54,
 * or 55. Visa uses 13- or 16-digit numbers, starting with 4.
 *
 * 378282246310005 should verify as American Express.
 * 371449635398431 should verify as American Express.
 * 5555555555554444 should verify as Mastercard.
 * 5105105105105100 should verify as Mastercard.
 * 4111111111111111 should verify as Visa.
 * 4012888888881881 should verify as Visa.
 *
 * Credit card numbers must be integers. Users should be continuously
 * re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function credit() {

  //////////// DO NOT MODIFY
  let card; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 3 CODE HERE
card=prompt("Input a credit card number.");
let p = document.getElementById("credit-output");
let sum = 0;
for(let i = 0; i<card.length; i++){
  if(i%2==card.length%2){
    if(card[i]>=5){
      sum+=Number(card[i])*2-9;
    }else{
      sum+=Number(card[i])*2;
    }
  }else{
    sum+=Number(card[i]);
  }
}
sum%=10;
if(sum!=0){
  p.innerHTML='<img src="images/invalid.png"/>';
}else if(card.length==15 && card[0]==3 && (card[1]==4 || card[1]==7)){
  p.innerHTML='<img src="images/amex.png"/>';
}else if(card.length==16 && card[0]==5 && 0<card[1]<6){
  p.innerHTML='<img src="images/mastercard.png"/>';
}else if((card.length==13 || card.length==16) && card[0]==4){
  p.innerHTML='<img src="images/visa.png"/>';
}else{
  p.innerHTML='<img src="images/invalid.png"/>';
}
card=Number(card);
  /*
   * NOTE: After reading in the card number and storing it in the 'card'
   *       variable, do not modify it. If you find it necessary to manipulate
   *       this value, you will need to create a second variable to serve
   *       as a copy of the 'card' variable.
   */

  ///////////////////////// DO NOT MODIFY
  check('credit', card); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Guess. 5 points.
 *
 * Write a function that generates a random number, and asks the user to
 * try to guess this number. When all is said and done, your function
 * should output the random number and the number of attempts it took the
 * user to correctly guess that number. Your function should also provided
 * helpful hints, indicating whether the most recent guess was greater than
 * or less than the target.
 *
 * Random numbers must be between 1 and 1000. User guesses must be integers
 * within the range [1, 1000], and users should be continuously re-prompted
 * until they comply with this restriction. In the event a user guesses
 * something that violates this restriction, an attempt should not be
 * recorded.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function guess() {

  // WRITE YOUR EXERCISE 4 CODE HERE
let random = Math.floor(Math.random()*1000)+1;
let number = 0;
let guesses=0;
let output="";
let p=document.getElementById("guess-output");
while(number!=random){
  if((number<1 || number>1000 || number%1!=0) && guesses>0){
    number=Number(prompt("That is not a valid input. Pick a number from 1 to 1000."));
    guesses--;
  }else if(guesses==0){
    number=Number(prompt("Pick a number from 1 to 1000."));
  }else if(number<random){
    number=Number(prompt("That guess was too low. Pick a number from 1 to 1000."));
  }else if(number>random){
    number=Number(prompt("That guess was too high. Pick a number from 1 to 1000."));
  }
  guesses++;
}
  output="The number was " + random;
  output+="<br/>You took " + guesses + " guesses";
  p.innerHTML=output;
  ////////////////// DO NOT MODIFY
  check('guess'); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hurricane. 5 points.
 *
 * Write a function that prompts the user to enter a windspeed, and prints
 * the hurricane category (if applicable) for that windspeed. We'll be
 * using the Saffir-Simpson scale, shown below in MPH.
 *   - Category 5: 157+
 *   - Category 4: 130-156
 *   - Category 3: 111-129
 *   - Catgeory 2: 96-110
 *   - Category 1: 74-95
 *   - Tropical Storm: 39-73
 *
 * Windspeeds must be non-negative integers in the range [0, INF), and
 * users should be continuously re-prompted until they comply with this
 * restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function hurricane() {

  ///////////////// DO NOT MODIFY
  let windspeed; // DO NOT MODIFY
  ///////////////// DO NOT MODIFY
let p = document.getElementById("hurricane-output")
windspeed=0;
while(windspeed<=0 || windspeed%1!=0){
windspeed=Number(prompt("Pick a windspeed that is a positive integer."))
}
if(windspeed>156){
  p.innerHTML="Category 5 Hurricane."
}else if(windspeed>129){
  p.innerHTML="Category 4 Hurricane."
}else if(windspeed>110){
  p.innerHTML="Category 3 Hurricane."
}else if(windspeed>95){
  p.innerHTML="Category 2 Hurricane."
}else if(windspeed>73){
  p.innerHTML="Category 1 Hurricane."
}else if(windspeed>38){
  p.innerHTML="Tropical Storm."
}else{
  p.innerHTML="The skies are calm..."
}
  ///////////////////////////////// DO NOT MODIFY
  check('hurricane', windspeed); // DO NOT MODIFY
  ///////////////////////////////// DO NOT MODIFY
}

/*
 * Gymnastics. 5 points.
 *
 * Write a function that prompts the user to enter six scores. From those
 * six scores, the lowest and highest should be discarded. An average score
 * should be computed from the remaining four. Your function should output
 * the discarded scores, as well as the average score.
 *
 * Scores must be real numbers in the range [0.0, 10.0], and users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function gymnastics() {

  /////////////////// DO NOT MODIFY
  let total = 0; //// DO NOT MODIFY
  let scores = []; // DO NOT MODIFY
  /////////////////// DO NOT MODIFY
let score;
let total2=0;
let discarded = [];
let k;
let p = document.getElementById("gymnastics-output");
for(let i = 0; i<6; i++){
  k=0
  score = -1;
  while (score<0 || score>10 || score*10%1!=0){
    if(k==1){
    score=Number(prompt("Your last input was invalid. Choose a score from 0.0 to 10.0."));
  }else{
    score=Number(prompt("Choose a score from 0.0 to 10.0."));
  }
    k=1
  }
  scores.push(score);
}
for(let j = 0; j<6; j++){
  total+=scores[j];
}
total2=total;
discarded.push(Math.min(...scores));
total2-=Math.min(...scores);
discarded.push(Math.max(...scores));
total2-=Math.max(...scores);
let result = `Discarded: ${discarded[0]}, ${discarded[1]}<br/>Score: ${(total2/4).toFixed(2)}`;
p.innerHTML=result;

  /*
   * NOTE: The 'total' variable should be representative of the sum of all
   *       six of the judges' scores.
   */

  /*
   * NOTE: You need to add each score (valid or not) to the 'scores' variable.
   *       To do this, use the following syntax:
   *
   *       scores.push(firstScore);   // your variable names for your scores
   *       scores.push(secondScore);  // will likely be different than mine
   */

  /////////////////////////////// DO NOT MODIFY
  check('gymnastics', scores); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Report Card. 5 points.
 *
 * Write a function that prompts the user to enter test, quiz, and homework
 * grades for the marking period. Users can enter as many grades of each
 * category, entering -1 to signal they are finished. Your function should
 * output the user's final grade, where tests, quizzes, and homework are
 * weighted at 60%, 30%, and 10%, respectively.
 *
 * Grades must be real numbers in the range [0.0, 100.0], and users should
 * be continuously re-prompted until they comply with this restriction. The
 * only exception is -1, which signals the user is finished entering grades
 * for that category.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function reportCard() {

  ///////////////////////// DO NOT MODIFY
  let testTotal = 0; ////// DO NOT MODIFY
  let quizTotal = 0; ////// DO NOT MODIFY
  let homeworkTotal = 0; // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'testTotal', 'quizTotal', and 'homeworkTotal' variables
   *       should be representative of the sum of the test scores, quiz
   *       scores, and homework scores the user enters, respectively.
   */

  ///////////////////// DO NOT MODIFY
  let tests = 0; ////// DO NOT MODIFY
  let quizzes = 0; //// DO NOT MODIFY
  let homeworks = 0; // DO NOT MODIFY
  ///////////////////// DO NOT MODIFY

  let p = document.getElementById("report-card-output");
  let grade = -2;
  while(grade!=-1){
    while((grade<0 || grade>100 || grade*10%1!=0) && grade!=-1){
      grade = Number(prompt("Enter a test grade from 0.0 to 100.0."));
    }
    if(grade!=-1){
      tests++;
      testTotal+=grade;
      grade=-2   ;
    }
  }
  grade=-2;
  while(grade!=-1){
    while((grade<0 || grade>100 || grade*10%1!=0) && grade!=-1){
      grade = Number(prompt("Enter a quiz grade from 0.0 to 100.0."))
    }
    if(grade!=-1){
      quizzes++;
      quizTotal+=grade;
      grade=-2;
    }
  }
  grade=-2;
  while(grade!=-1){
    while((grade<0 || grade>100 || grade*10%1!=0) && grade!=-1){
      grade = Number(prompt("Enter a homework grade from 0.0 to 100.0."))
    }
    if(grade!=-1){
      homeworks++;
      homeworkTotal+=grade;
      grade=-2;
    }
  }
  let gradeAverage=testTotal*0.6/tests+quizTotal*0.3/quizzes+homeworkTotal*0.1/homeworks;
  let result = `Tests: ${(testTotal/tests).toFixed(2)}<br/>Quizzes: ${(quizTotal/quizzes).toFixed(2)}<br/>Homework: ${(homeworkTotal/homeworks).toFixed(2)}<br/>Grade: ${gradeAverage.toFixed(2)}`;
  p.innerHTML=result;


  /*
   * NOTE: The 'tests', 'quizzes', and 'homeworks' variables should be
   *       representative of the number of tests, quizzes, and homework
   *       grades the user enters, respectively.
   */

  /////////////////////// DO NOT MODIFY
  check('report-card', // DO NOT MODIFY
    testTotal, ////////// DO NOT MODIFY
    tests, ////////////// DO NOT MODIFY
    quizTotal, ////////// DO NOT MODIFY
    quizzes, //////////// DO NOT MODIFY
    homeworkTotal, ////// DO NOT MODIFY
    homeworks /////////// DO NOT MODIFY
  ); //////////////////// DO NOT MODIFY
  /////////////////////// DO NOT MODIFY
}
