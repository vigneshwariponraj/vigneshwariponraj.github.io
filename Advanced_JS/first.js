//Functional Programming
//Often uses pipe and compose = higher order functions

/*A higher order function is any function which takes a function as an argument, returns a function, or both. 

//Here's how a "compose" function works:

//start with small unary(one parameter) functions


const add2 = (x) => x + 2;
const subtract1 = (x) => x - 1;
const multiplyBy5 = (x) => x * 5;

//Notice how the functions execute from to outside & right to left

const result = multiplyBy5(subtract1(add2(4)));
console.log(result);

//The above is NOT a compose function - let's make one
//Making our own compose and pipe functions
//Note: Ramda.js and lodash libraries have their own bulit-in compose and pipe functions.lodeash calls pipe "flow"

//Higher order function "reduce" takes a list of values and applies a function to each of those values, accumulating a single result

//To get the compose order from right to left as we see with nested function calls in our example above, we need reduceRight

const compose = (...fns) => val => fns.reduceRight((prev, fn) => fn(prev), val);

const compResult = compose(multiplyBy5, subtract1, add2)(4);
console.log(compResult);

//To do the same, but read from left to right.. we use "pipe".
//it is the same except uses reduce instead of reduceRight.
const pipe = (...fns) => (val) => fns.reduce((prev, fn) => fn(prev), val);

const pipeResult = pipe(add2, subtract1, multiplyBy5)(5);
console.log(pipeResult);

//You will often see the functions on separate lines

const pipeResult2 = pipe(
    add2,
    subtract1,
    multiplyBy5
)(6);
console.log(pipeResult2);

//Thi is a "pointer free" style where you do not see the unary parameter passed between each function

//eaxapmle with a 2nd parameter

const divideBy = (divisor, num) => num / divisor;

const pipeResult3 = pipe(
    add2,
    subtract1,
    multiplyBy5,
    x => divideBy(2, x)
)(5);
console.log(pipeResult3);

//Or you could curry the divideBy function for a custom unary function:
const divBy = (divisor) => (num) => num / divisor;
const divideBy2 = divBy(2); //partially applied

const pipeResult4 = pipe(
    add2,
    subtract1,
    multiplyBy5,
    divideBy2
)(5);
console.log(pipeResult4);
*/


//let's look at some examples beyound math functions

const lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
const pipe = (...fns) => (val) => fns.reduce((prev, fn) => fn(prev), val);

const spiltOnSpace = (string) => string.split(' ');
const count= (array) => array.length;

const wordCount = pipe(
    spiltOnSpace,
    count
);
console.log(wordCount(lorem));

//the pipe function is reusable
const egbdf = "Every good boy does fine.";
console.log(wordCount(egbdf));

//combine processes: check for palindrome
const pal1 = "taco cat";
const pal2 = "UFO tofu";
const pal3 = "Dave";

const split = (string) => string.split('');
const join = (string) => string.join('');
const lower = (string) => string.toLowerCase();
const reverse = (array) => array.reverse();

const fwd = pipe(
    spiltOnSpace,
    join,
    lower
);

const rev = pipe(
   fwd, // a nested pipe function
   split,
   reverse,
   join
);

console.log(fwd(pal1) === rev(pal1));
console.log(fwd(pal2) === rev(pal2));
console.log(fwd(pal3) === rev(pal3));

//Clone / copy functions within a pipe or compose function
//3approaches

//1) Clone the object before an impure function mutates it

const scoreObj = { home: 0, away: 0};

const shallowClone = (obj) => Array.isArray(obj) ? [...obj] : {...obj };

const incrementHome = (obj) => {
    obj.home += 1; //mutation
    return obj;
};

const homeScore = pipe(
    shallowClone,
    incrementHome
    //another function
    //and another function etc
);
console.log(homeScore(scoreObj));
console.log(scoreObj);
console.log(homeScore(scoreObj) === scoreObj);

//Positive: Fewer function calls
//Negative: Create impure functions and testing difficulties

//2) Curry the function to create a partial that is unary

let incrementHomeB = (cloneFn) => (obj) => {
    const newObj = cloneFn(obj);
    newObj.home += 1; //mutation
    return newObj;
}

//creates the partial by applying the first argument in advance
incrementHomeB = incrementHomeB(shallowClone);

const homeScoreB = pipe(
    incrementHomeB
    //another function
    //and another function, etc..
);

console.log(homeScoreB(scoreObj));
console.log(scoreObj);

//Positive: Pure function with clear dependencies
//Negative: More calls to the cloning function

//3) Insert the clone function as a dependency

const incrementHomeC = (obj, cloneFn) => {
    const newObj = cloneFn(obj);
    newObj.home += 1; //mutation
    return newObj;
};

const homeScoreC = pipe(
    x => incrementHomeC(x, shallowClone)
    //another function
    //and another function, etc..

);
console.log(homeScoreC(scoreObj));
console.log(scoreObj);
//Positive: Pure function with clear dependencies
//Negative: non-unary functions in your pipe / compose chain


