/*multiply = function(a,b) {
    return a*b;
}*/
//This code does not execute properly. Try to figure out why.

multiply = function(a,b) {
    const c = a*b
    console.log(c)
}
multiply(2,8)

//The function is not returning the correct values. Can you figure out why?
//getPlanetNameid

function getPlanetName(id){
    var name;
    switch(id){
        case 1:
            name = 'Mercury'
            break;
        case 2:
            name = 'Earth'
            break;
        case 2:
            name = 'Mars'
            break;
        case 2:
            name = 'Jupiter'
            break;
        case 2:
            name = 'Saturn'
            break;
        case 2:
            name = 'Uranus'
            break;
        case 2:
            name = 'Uranus'
            break;
            
    }
    return name;
}




//Reversed string 

function solution(str){
    const arr = str.split("");
    const reversed = arr.reverse();
    const finalAnswer = reversed.join('');

    console.log(finalAnswer);
} solution("hello");

/*
function solution(str){
    return str.split('').reverse().join('');
}
*/


//even or odd number

function even_or_odd(number) {
    if (number %2 === 0){
        return 'Even';
    } else {
        return 'Odd';
    }
} console.log(even_or_odd(5));
console.log(even_or_odd(2));

/* vowel count

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.*/

function getCount(str) {
    let vowelsCount = 0;

    const arr = str.split("");

    for (let i = 0; i < arr.length; i++) {
        switch(arr[i]) {
            case 'a':
                vowelsCount++;
                break;
            case 'e':
                vowelsCount++;
                break;
            case 'i':
                vowelsCount++;
                break;
            case 'o':
                vowelsCount++;
                break;
            case 'u':
                vowelsCount++;
        }
    }
    return vowelsCount;
} console.log(getCount("happiest"));



/*Jenny's secrect message
Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.
*/
function greet(name) {
    if(name === "Johnny") {
        return "Hello, my love!";
    } else {
        return "Hello, " + name + "!";

    }
    
} console.log(greet());


/*is in divisble by x and y? 
Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

*/

function isDivisible(n, x, y) {
    const result1 = n / x;
    const result2 = n / y;

    if ( result1 % 1 === 0 && result2 % 1 === 0) {
        return true;
    } else {
        return false;
    }

} console.log(isDivisible(3,1,9));

/*  Return Negative

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
*/

function makeNegative(num) {
    if (num<0) {
        return num;
    } else {
        return num * -1;
    }
} console.log(makeNegative(2));


/* find the smallest integer in array */


class smallestIntegerFinder {
    findSmallestInt(arrayOfNumbers) {
        let smallestNumber;

        for (let i = 0; i < arrayOfNumbers.length; i++) {
            const arrNumber = arrayOfNumbers[i];

            if (i === 0) {
                smallestNumber = arrNumber;
            }
            if (arrNumber < smallestNumber) {
                smallestNumber = arrNumber;
            }
        }
        return smallestNumber;
    }
} console.log(([23,2,0,4,5]));


var arr = [4,1,10,5,-1];
var smallest = arr[0];

for(var i=1; i<arr.length; i++){
    if(arr[i] < smallest){
        smallest = arr[i];
    }
} console.log(smallest);


/*summation 
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

*/

var summation = function (num) {
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum = sum + i;
    }
    console.log(sum);
}

summation(2);
summation(5);

//get the mean of the array

function getAverage(scoreArray){
    const count = scoreArray.length;
    let sum = 0;

    for (let i = 0; i < count; i++) {
        sum = sum + scoreArray[i];
    }
    const avg = sum / count;
    const roundedDown = Math.floor(avg);
    console.log(roundedDown);
}
getAverage([1,2,3,4,5]);
getAverage([1,1,1,1,1,1,1,1,2]);
getAverage([2,2,2,2,2,]);

/* Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

*/
const rockPaperScissors = (player1,player2) => {
    if (player1 === 'rock'){
        if (player2 === 'rock') {
            return 'Draw!';
        }
        if (player2 === 'paper'){
            return 'Player 2 won';
        }
        if (player2 === 'scissors'){
            return 'Player 1 won';
        }

    }

    if (player1 === 'paper') {
        if (player2 === 'rock') {
            return 'Player 1 won!';
        }
        if (player2 === 'paper'){
            return 'Draw';
        }
        if (player2 === 'scissors'){
            return 'Player 2 won';
        }

    }
    
    if(player1 === 'scissors'){
        if (player2 === 'rock') {
            return 'Player 2 won!';
        }
        if (player2 === 'paper'){
            return 'Player 1 won';
        }
        if (player2 === 'scissors'){
            return 'Draw';
        }
    }
};
/*
Rock - I
paper - P
Scissors -s

player1   player2  result
I           I       draw
I           P       p2
I           s        p1
P           I        p1
P           p        draw
P           s        p2
s           I        p2
s           P        p1
s           s        draw
*/


/*Remove First and Last Character 


*/

function removeChar(str){
    const lengthofString = str.length;
    console.log(str.substr(1,lengthofString-2));
}removeChar('hello');
removeChar('container');


// sum of positive

function positiveSum(arr) {
  let sum = 0;

  for(let i = 0; i < arr.length; i++){
      if(arr[i] > 0) {
          sum = sum + arr[i];
      }
  }
  console.log(sum);
}positiveSum([1,2,3,4,5]);


//Basic Mathematical Operations

function basicOp(operation, value1, value2)
{
  let result;

  switch (operation) {
      case '+':
          result = value1 + value2;
          break;
      case '-':
        result = value1 - value2;
        break;
     case '*':
        result = value1 * value2;
        break;
    case '/':
        result = value1 / value2;
        break;
  }
  console.log(result);
}basicOp('+', 4, 7);




function basicOp(operation, value1, value2) {
    const operationString = value1 + operation + value2;

    const result = eval(operationString);

    console.log(result);
}basicOp('+',3,9);


//String repeat

function repeatStr (numberOfRepeats, str) {

    let starterString = '';

    for (let i=0; i < numberOfRepeats; i++) {
        starterString = starterString + str;
    }
    console.log(starterString);
    
    
}repeatStr(3, "*");


//Convert a string to an array
function stringToArray(string){
    console.log(string.split(" "));

}stringToArray("Robin Singh");


//Remove string space
/*
function noSpace(x){
    const arr = x.spilt(" ");

    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        const trimmedString = arr[i].trim();
        newArray.push(trimmedString);
    }

    const finalString = newArray.join("");
    console.log(finalString);
}noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')*/

function noSpace(x){
    console.log (x.split(" ").join(''));
  }noSpace('8 j 8   mBliB8g  imjB8B8  jl  B');



  //Beginner - Lost Without a Map


  function maps(arr){
      const result = arr.map((arrItem) => {
          return arrItem * 2;

      });
      console.log(result);
  }maps([1, 2, 3]);


  //Is he gonna survive

  function hero(bullets, dragons) {
     console.log(bullets / dragons >= 2); 
  } hero(10,5);


  /*Array plus array
  function arrayPlusArray(arr1, arr2) {

    let sum = [];
    for (let i = 0; i < arr1.length; i++) {
        const arr1Value = arr1[i];
        const arr2Value = arr2[i];

        const addedValue = arr1Value + arr2Value;

        sum = sum + addedValue;
    }
    console.log(sum);
  }arrayPlusArray([1, 2, 3], [4, 5, 6]);
  */

  //century from year

  function century(year) {
      console.log(Math.ceil(year / 100));
  } century(1705);

  //cat years dog years
  var humanYearsCatYearsDogYears = function(humanYears) {
    let CatsAge;
    let dogsAge;
    if (humanYears === 1){
        return [humanYears,15,15];
    }

    if (humanYears === 2) {
        return[humanYears,24,24];
    }
    const excessYears = humanYears - 2;
    const extraCatYears = excessYears * 4;
    const extraDogYears = excessYears * 5;
    
    console.log([humanYears, 24 + extraCatYears, 24 + extraDogYears]);
  }
  humanYearsCatYearsDogYears(10);


  //total amount of points

  function points(gamesArray) {
    let totalPoints = 0;

    for (let i=0; i < gamesArray.length; i++) {
        const value = gamesArray[i];

        const parts = value.split(":");

        const x = parts[0];
        const y = parts[1];

        if(x > y) {
            totalPoints = totalPoints + 3;
        } else if (x == y) {
            totalPoints +=1;
        }
    }
    console.log(totalPoints);
  }points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])