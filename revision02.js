function checkEven(num) {
    if (num % 2 === 0) {
      console.log(num);
    } else {
      // console.log("Odd number ", num);
    }
  }
  
  var rangeStarting = 1;
  var rangeEnding = 50;
  
  // for (var counter = rangeStarting; counter <= rangeEnding; counter++) {
  //   checkEven(counter);
  // }
  
  // for (var counter = 1; counter <= 50; counter++) {
  //   if (counter % 2 === 0) {
  //     console.log("Even number", counter);
  //   }
  // }
  
  // console.log("Hello");
  
  function printHello() {
    console.log("Hello");
  }
  
  // setTimeout(printHello, 10000);
  
  for (var i = 0; i < 5; i++) {
    setTimeout(function printNum() {
      // SBI
      // console.log(i);
    }, 1000); // We're on lunch come after 1 second
  }
  // Let me go and finish other tasks, i'll come back here after 1 second and execute this code => THIS NATURE IN JS IS CALLED ASYNCHRONOUS BEHAVIOR.
  /*100ms
  i=1
  200ms
  i=2
  300ms
  i=3
  400ms
  i=4
  500ms
  i=5
  600ms
  -------------
  700ms
  -------------
  800ms
  -------------
  900ms
  -------------
  1000ms
  console.log(i); i=5
  console.log(i); i=5
  console.log(i); i=5
  console.log(i); i=5
  console.log(i); i=5
  */
  
  var price = 100;
  price = 200;
  price = 300;
  price = 400;
  price = 500;
  
  // console.log(price);
  
  // var users = ['A','B','C','D','C'];
  
  // users.push('E');
  
  // console.log(users);
  
  // users.pop();
  // console.log(users);
  
  // users.unshift('ZZ');
  // console.log(users);
  
  // users.shift();
  // console.log(users);
  
  // users.splice(1,1);
  // console.log(users);
  
  // users.splice(2,0,'Y');
  // console.log(users);
  
  // var isZPresent = users.includes('A');
  // console.log(isZPresent);
  
  // var indexOfC = users.indexOf('C');
  // console.log(indexOfC);
  
  // var lastIndexOfC = users.lastIndexOf('C');
  // console.log(lastIndexOfC);
  
  // var users = ['B','J','A','D','C','Z','M'];
  // users.sort();
  
  // console.log(users.reverse());
  
  // A SORTER FN MUST RETURN 3 TYPES OF VALUES
  // -1 => Negative Value,
  // 0 => Return 0,
  // 1 => Positive value
  // function sorter(num1,num2) {
  //     return num2-num1;
  // }
  
  // var prices = [450,300,150,200];
  // prices.sort(sorter);
  // console.log(prices);
  
  // function sum(){
  
  // }
  
  // function subtract() {
  
  // }
  
  // for(var counter=0;counter<10;counter++) {
  //     console.log(counter);
  // }
  
  var users = ["A", "B", "C", "D"];
  console.log(users.indexOf("E"));
  
  var numbers = [0, 1, 2];
  
  /*
  for(initialization;condition;increment/decrement)
  */
  
  for (var counter = 0; counter <= 10; counter++) {
    // STEP 1
    //   if (numbers.indexOf(0) === -1) { // FALSY
    // STEP 2
    //   if (numbers.indexOf(1) === -1) { // FALSY
    // STEP 3
    //   if (numbers.indexOf(2) === -1) { // FALSY
    // STEP 4
    //   if (numbers.indexOf(3) === -1) { // TRUTHY
    if (numbers.indexOf(counter) === -1) {
      // No is not present
      console.log("Missing Number : ", counter);
    }
  }

  // PYRAMID PATTERN
// OUTER LOOP REPRESENTS NUMBER OF LINES TO BE PRINTED
// INNER LOOP REPRESENTS NUMBER OF STARTS TO BE PRINTED IN A SINGLE LINE
function printStarLeftPyramid(rows) {
  for (var i = 1; i <= rows; i++) {
    var pattern = "";
    for (var j = 1; j <= i; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}

// printStarLeftPyramid(5);
// console.log("--------------------");
// printStarLeftPyramid(7);

// * => 1 line 1 stars ixstars = > 1 star
// ** => 2 line 2 stars => i x stars => 2 stars
// *** => 3 line 3 starts => i x stars => 3 star
// **** => 4 line 4 times
// *****
// ******

function printStarLeftPyramidExperiment(rows) {
  for (var i = 1; i <= rows; i++) {
    var pattern = "";
    for (var j = 0; j < i; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}

// printStarLeftPyramidExperiment(5);

function printSquareWithStars() {
  for (var i = 1; i <= 5; i++) {
    var pattern = "";
    for (var j = 1; j <= 5; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}

function printNumbersLeftPyramid(rows) {
  for (var i = 1; i <= rows; i++) {
    var pattern = "";
    for (var j = 1; j <= i; j++) {
      pattern += String(j);
      //   pattern += i;
    }
    console.log(pattern);
  }
}

// printNumbersLeftPyramid(5);

// 1
// 22
// 333
// 4444
// 55555

// 1
// 12
// 123
// 1234
// 12345

// *
// **
// ***
// ****
// *****

//     *
//    **
//   ***
//  ****
// *****

//   *
//  **
// ***

//   1
//  22
// 333

//   1
//  12
// 123

function printStarRightPyramid(rows) {
  for (var i = 1; i <= rows; i++) {
    // PRINTS NUMBER OF LINES
    var pattern = "";
    for (var j = 1; j <= rows - i; j++) {
      // PRINTS SPACES IN EACH LINE
      pattern += " ";
    }
    for (var k = 1; k < i; k++) {
      // PRINTS STARTS IN EACH LINE
      pattern += "*";
    }
    console.log(pattern);
  }
}
// printStarRightPyramid(5);

function printStarRightPyramidExperiment(rows) {
  for (var i = 1; i <= rows; i++) {
    // PRINTS NUMBER OF LINES
    var pattern = "";
    for (var j = 1; j <= rows; j++) {
      // PRINTS SPACES IN EACH LINE
      if (i + j - 1 < rows) {
        pattern += " ";
      } else {
        pattern += "*";
      }
    }

    console.log(pattern);
  }
}

// printStarRightPyramidExperiment(6);

function printNumberRightPyramid(rows) {
  //   var outputArr = [];
  for (var i = 1; i <= rows; i++) {
    // PRINTS NUMBER OF LINES
    var pattern = "";
    for (var j = 1; j <= rows; j++) {
      // PRINTS SPACES IN EACH LINE
      if (i + j - 1 < rows) {
        pattern += " ";
      } else {
        pattern += i;
      }
    }
    // outputArr.push(pattern);
    console.log(pattern);
  }
  //   console.log(outputArr);
  //   for (var k = 0; k < outputArr.length; k++) {
  //     console.log(outputArr[k]);
  //   }
}

// printNumberRightPyramid(5);

var pyramindUtils = {
  leftStars: printStarLeftPyramid,
  leftNumbers: printNumbersLeftPyramid,
  rightStars: printStarRightPyramid,
  rightNumbers: printNumberRightPyramid,
};

// console.log(pyramindUtils);

// pyramindUtils.rightNumbers(5);

// pyramindUtils.leftStars(3);
// console.log(5);

var message = "Welcome to JavaScript course";
// console.log(message.split(" ").join(" "));

// Write a program to check if a given string is a palindrome or not?
// 'ABCBA'
// 'RACECAR'

function checkPalindrome() {
  var input = "RACECAR";
  input.split("").reverse().join("") === input
    ? console.log("It is a palindrome")
    : console.log("It is not a palindrome");
}

function findDuplicates() {
  var input = ["A", "B", "C", "B", "D", "E", "B", "D", "G", "A"];
  var uniques = [];
  var charOccurances = {};
  for (var i = 0; i < input.length; i++) {
    //   console.log(input[i]);
    var currentChar = input[i];
    if (uniques.includes(currentChar)) {
      // Duplicate element found
      console.log(`Duplicate Element found "${input[i]}"`);
    } else {
      // Not a duplicate element
      uniques.push(currentChar);
    }
    // -------------------------------------------
    // charOccurances['A'] = 1;
    // charOccurances.A = 1;
    if (charOccurances[currentChar]) {
      //If the key exists in object, increase its count by 1
      charOccurances[currentChar]++;
    } else {
      // Value does not exists in the object, set the key's value to 1
      charOccurances[currentChar] = 1;
    }
  }
  //   console.log(uniques);
  console.log(charOccurances);
}

findDuplicates();

// Find the occurance of each character in a given array