/*

// Lexical scope defines how variable names are resolved in nested functions.

//Nested (child) functions have access to the scope of their parent functions 

// this is often confused with closure, but lexical scope is only an important part of closure.

//  A closure is a function having access to the parent scope, even after the parent function has closed

// A closure is created when we define a function, not when a function is executed

//global scope

let x = 1;

const parentfunction = () => {
    //local scope
    let myValue = 2;
    console.log(x);
    console.log(myValue);

    const childFunction = () => {
        console.log(x += 5);
        console.log(myValue += 1);
    }
    return childFunction;
}

const result = parentfunction();
console.log(result);

result();
result();
result();
console.log(x);
console.log(myValue); //reference error, private variable


// IIFE (Immediately Invoked Function Expression)
const privateCounter = (() => {
    let count = 0;
    console.log(`inital value: ${count}`);
    return () => { count += 1; console.log(count)}
})();

privateCounter();
privateCounter();
privateCounter();



const credits = ((num) => {
    let credits = num;
    console.log(`inital credits value: ${credits}`);
    return () => {
        credits -= 1;
        if (credits > 0) console.log(`playing game, ${credits} credits(s) remaining`);
        if (credits <=0) console.log('not enough credits');
    }
})(3);

credits();
credits();
credits();




//Prototypal Inhertiance and the Prototype Chain

//ES6 Introduced classes which is the modern way to construct objects

//That said, Prototypal inheritance and the prototype chain are:
//1) "under the hood", (Es6 classes are considered "syntatic sugar")
//2) often in interview questions,
//3) and are useful to understand.

//object Iiterals

const person = {
    alive: true
}

const musician = {
    plays: true
}

//musician.__proto__ = person;

//console.log(musician.plays);
//console.log(musician.alive);
//console.log(musician);

//JS now has getPrototypef and setPrototypeOf methods instead of using __proto__

Object.setPrototypeOf(musician,person);
//console.log(object.getPrototypeOf(musician));
//console.log(musician.__proto__);
//console.log(object.getPrototypeOf(musician) === musician.__proto__);

console.log(musician.plays);
//missing property => go to person
console.log(musician.alive);


//extending the prototype chain => general to specific to more specific
const guitarist = {
    strings: 6,
    __proto__:musician
}

console.log(guitarist.alive);
console.log(guitarist.plays);
console.log(guitarist.strings);
console.log(guitarist);

//No circular referances allowed (person.__proto__ can't be guitarist)
// The __proto__ value must be an object or null
//An object can only directly inherit from one object

//object with getter and setter methods
const car = {
    doors: 2,
    seats: "vinyl",
    get seatMaterial() {
        return this.seats;

    },
    set seatMaterial(material) {
        this.seats = material;

    }

}

const luxuryCar = {};
Object.setPrototyprOf(luxuryCar, car);
luxuryCar.seatMaterial = "leather"; //Note keyword "this"
console.log(luxuryCar);
//getting the keys of an object
console.log(bject.keys(luxuryCar));
//loop through each object key
Object.keys(luxuryCar).forEach(key => {
    console.log(key);
});
//but a for in loop includes inherited props
for(let key in luxuryCar) {
    console.log(key);
}



//object constructors
function Animal(species) {
    this.species = species;
    this.eats = true;
}
Animal.prototype.walks = function() {
    return `A ${this.species} is walking.`;
};

const Bear = new Animal("bear");
console.log(Bear.species);
console.log(Bear.walks());

// the prototype property is where inheritable props and methods are
console.log(Bear.__proto__);
console.log(Bear.__proto__ === Animal.prototype);
console.log(Animal.prototype);
console.log(Bear);


//Now an ES6 Classes example of inheritance

class Vehicle {
    constructor() {
        this.wheels = 4,
            this.motorized = true
    }
    ready() {
        return "Ready to go!";
    }
}

class Motorcycle extends Vehicle {
    constructor() {
        super();
        this.wheels = 2
    }

    wheelie() {
        return "On one wheel now!";
    }
}

const myBike = new Motorcycle();
console.log(myBike);
console.log(myBike.wheels);
console.log(myBike.ready());
console.log(myBike.wheelie());

const myTruck = new Vehicle();
console.log(myTruck);



//Offical Definition of Recursion
//In computer science, recursion is a method of solving a problem where the solution depends on solution to smaller instances of the same problem.

//Unoffical definition of Recursion
//"Any situation where you do something, and depending on the results, you might do it again."

//In programming, recursion occurs when a function calls itself.
//Any iterator function (aka function with a loop) can be recursive instead.

//iterator function
const countToTen = (num = 1) => {
    while (num <= 10){
        console.log(num);
        num++;
    }
}
//countToTen();
//1) the recursive call to the function
//2) at least one condition to exit

const recurToTen = (num = 1) => {
    if (num > 10) return;
    console.log(num);
    num++;
    recurToTen(num);
}
recurToTen();

//"With great power comes great responsibility"
//reasons to use (not abuse) Reccursion
//1) Less code
//2)Elegant Code (aka pleasing to look at)
//3) Increased readability


//Reasons to NOT use Recursion
//1)Performance
//2)Possibly more difficult to debug (aka follow the logic)
//3)Is the readability improved?

//The standard example: The Fibaonacci Sequences
//0,1,1,2,3,5,8,13,21, etc.

//without Recursion
const fibaonacci = (num, array = [0,1]) => {
    while (num > 2) {
        const [nextToLast,last] = array.slice(-2);
        array.push(nextToLast + last);
        num -= 1;
    }
    return array;
}
console.log(fibaonacci(12));

//with recursion
const fib = (num, array = [0,1]) => {
    if (num <=2) return array;
    const [nextToLast, last] = array.slice(-2);
    return fib(num -1, [...array, nextToLast + last]);
}
//console.log(fib(12));

//what number is in the nth position of the Fibonacci sequence?
//without recursion

const fibaonacciPos = (pos) => {
    if (pos <= 1) return pos;
    const seq = [0,1];
    for (let i = 2; i <= pos; i++) {
        const [nextToLast, last] = seq.slice(-2);
        seq.push(nextToLast + last);
    }
    return seq[pos];
}
console.log(fibaonacciPos(8));

// with Recursion
/*const fibPos = (pos) => {
    if (pos < 2) return pos;
    return fibPos(pos - 1) + fibPos(pos - 2);
}

const fibPos = pos => pos < 2 ? pos : fibPos(pos - 1) + fibPos (pos - 2);
console.log(fibPos(8));

// Real-life Examples

//1) Continuation Token from an API

const getAWSProductIdImages = async () => {
    //get the data with await fetch request

    if (DataTransfer.IsTruncated) {
        //recursive
        return await getAWSProductIdImages(
            productId,
            s3, //conection to s3
            resultArray, // accumlator
            dta.NextContinuationToken
        );
    }
    return resultArray;
}

//2) A Parser:
// a company directory
// a file directory
// the DOM - a web crawler
//An XML or JSON data export


//Export from your streaming service like spotify, YT Music, etc.

const artistsByGenre = {
    jazz: ["Miles Davis", "John Coltrane"],
    rock: {
        classic: ["Bob Seger", "The Eagles"],
        hair: ["Def Leppard", "Whitesnake", "Poison"],
        alt: {
            classic: ["Pearl Jam", "The Killers"],
            current: ["Joywave", "Sir Sly"],
        }
    },
    unclassified: {
        new: ["Caamp", "Neil Young"],
        classic: ["Seal", "Morcheeba", "chirs Stapleon"]
    }

}

const getArtistNames = (dataObj, arr = []) => {
    Object.keys(dataObj).forEach(key => {
        if (Array.isArray(dataObj[key])) {
            return dataObj[key].forEach(artist => {
                arr.push(artist);
            });
        }
        getArtistNames(dataObj[key],arr);
    });
    return arr;
}
console.log(getArtistNames(artistsByGenre));


//Javascript Decorator Functions

//Decorators wrap a function in anthoer function

// these wrappers "decorate" the original function
//with new capabilites.
// the concept of decorators is not exclusive to javascript

//Benefits: D.R.Y. and clean code through composition

//Example 1:
// Using closure to log how many times a function is called

let sum = (...args) => {
    return[...args].reduce((acc, num) => acc + num);
}

const callCounter = (fn) => {
    let count = 0;

    return(...args) => {
        //write to logs, console, db, etc
        console.log(`sum has been called ${count += 1} times`);
        return fn(...args);
    }
}
sum = callCounter(sum);

console.log(sum(2, 3, 5));
console.log(sum(1, 5));
console.log(sum(14, 5));

//Example 2:
//check for valid data and number of params

let rectangleArea = (length, width) => {
    return length * width;
}

const countParams = (fn) => {
    return (...params) => {
        if (params.length !== fn.length) {
            throw new Error(`Incorrect number of parameters for ${fn.name}`);
        }
        return fn(...params);
    }
}

const requireIntegers = (fn) => {
    const name = fn.name;
    return (name, ...params) => {
        params.forEach(param => {
            if (!Number.isInteger(param)) {
                throw new TypeError(`Params for ${name} must be integers`);
            }

        });
        return fn(...params);
    }
}

rectangleArea = countParams(rectangleArea);
rectangleArea = requireIntegers(rectangleArea);
console.log(rectangleArea(20, 30));
console.log(rectangleArea(20, 35));


//Examples 3:
//Decorating an async API call function;
//time data requests during development

let requestData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
    }
}

const dataResponseTime = (fn) => {
    return async (url) => {
        console.time('fn');
        const dta = await fn(url);
        console.timeEnd('fn');
        return data;
    }
}

const myTestFunction = async () => {
    requestData = dataResponseTime(requestData);
    const data = await requestData('https://jsonplaceholder.typicode.com/posts');
    console.log(data);
}
myTestFunction();



//currying

//named after Haskell B. curry
// concept from lambda calculus
// Currying takes a function that receives  more than one parameter
// and breaks it into a series of unary (one parameter) functions
// Therefore, a curried function only takes one parameter at a time


//Curring can look like this:

const bulidSandwich = (ingredient1) => {
    return (ingredient2) => { 
        return (ingredient3) => {
        return `${ingredient1}, ${ingredient2}, ${ingredient3}`;
    }
}
   
}

const mySandwhich = bulidSandwich("Bacon")("Lettuce")("Tomato")
console.log(mySandwhich);
// It works but thats getting ugly and nested the further we go
// Let's refactor:

const buildSamy = ingred1 => ingred2 => ingred3 =>
`${ingred1}, ${ingred2}, ${ingred3},`;

const mySammy = buildSamy("turkey")("cheese")("bread");
console.log(mySammy);

//Another example of a curried function
const multiply = (x,y) => x * y;
 
const curriedMultiply = x => y => x * y;

console.log(multiply(2,3));
console.log(curriedMultiply(2));
console.log(curriedMultiply(2)(3));

//Partically applied functions are a common use of currying
const timesTen = curriedMultiply(10);
console.log(timesTen);
console.log(timesTen(8));

//Another example
const updateElemText = id => content => document.querySelector(`#${id}`).
textContent = content;

const updateHeaderText = updateElemText('header');
updateHeaderText('Hello Dave!');


//ANother common use of currying is function composition
// allows calling small functions in a specific order

const addCustomer = fn => (...args) => {
    console.log("saving customer info...")
    return fn(...args);
}

const processOrder = fn => (...args) => {
    console.log(`processing order #${args[0]}`)
    return fn(...args);
}
let completeOrder = (...args) => {
    console.log(`order #${[...args].toString()} completed.`)
}
completeOrder = (processOrder(completeOrder));
console.log(completeOrder);
completeOrder = (addCustomer(completeOrder));
completeOrder("1000")

function addCustomer(...args) {
    return function processOrder(...args) {
        return function completeOrder(...args) {
            //end
        }
    }
}


//Requires a function with a fixed number of parameters
const curry = (fn) => {
    return curried = (...args) => {
        if (fn.length !== args.length) {
            console.log(...args);
            return curried.bind(null, ...args); //bind creates new func
        }
        return fn(...args);
    };
}
const total = (x, y, z) => x + y +z;
const curriedTotal = curry(total);
console.log(curriedTotal(10)(20)(30));



//Foundational knowledge for writing pure function

//Javascript Data Types
// Primitive va Structural

/* Primitive:
 1) undefined
 2) boolean
 3) number
 4) string
 5) bigInt
 6) Symbol 

 Sturctural :
 1) object: (new) object, array, map, set, weakmap, date
 2) function 

 //Value vs reference
 //Primitive pass values:
 let x = 2;
 let y = x;
 y += 1;
 console.log(y);
 console.log(x);

 //Structual types use refrences:
 let xArray = [1, 2, 3];
 let yArray = xArray;
 yArray.push(4);
 console.log(yArray);
 console.log(xArray);

 //Mutable vs Immutable

 //Primitive are Immutable

 let myName = "Dave";
 myName[0] = "W"; //nope!
 console.log(myName);
 //Reassignment is not the same as mutable
 myName = "David";
 console.log(myName);

 //Stuructures contain mutable data
 yArray[0] = 9;
console.log(yArray);
console.log(xArray);
//still shares reference

//pure functions require you to avoid
//mutating the data

//Impure function that mutates the data
const addToScoreHistory = (array, score) => {
    array.push(score);
    return array;
}
const ScoreArray = [44, 23, 12];
console.log(addToScoreHistory(ScoreArray, 14));

//This mutates the orginal array.
// This is considered to be a side effect.

//Notes: "const" does not make the array immutable

//we need to modify our function so it does not
//mutate the original data

//Shallow copy vs. Deep copy(clones)

//Shallow copy
//with the speed operator
const zArray = [...yArray, 10];
console.log(zArray);
console.log(yArray);

console.log(xArray === yArray);

console.log(yArray === zArray);

//with object.assign()
const tArray = Object.assign([], zArray);
console.log(tArray);
console.log(tArray === zArray);
tArray.push(11);
console.log(zArray);
console.log(tArray);

//But if there are nested arrays or objects..
yArray.push([8, 9, 10]);
const vArray = [...yArray];
console.log(vArray);
vArray[4].push(5);
console.log(vArray);
console.log(yArray);
//nested structural data types still share a reference!

//Note: Array.form() and slice() create shallow
//copies, too


//When it comes to objects,what about..
//...object.freeze()??

const scoreObj = {
    "first": 44,
    "second": 12,
    "third": {"a": 1, "b": 2}
}
Object.freeze(scoreObj);
scoreObj.third.a = 8;
console.log(scoreObj);

//still mutates - it is a shallow freeze
// how do we avoid these mutations?

//Deep Copy is needed to avoid this
//Several libraries like lodash, Ramda, and others
//have this feature built-in
/* Here is a one line vanila js solution,
but it does not work dates, functions, undefined, infinity, regexps, maps, sets, blobs, filelists, imageDates, and other complex data types 

const newscoreObj = JSON.parse(JSON.stringify(scoreObj));

console.log(newscoreObj);
console.log(newscoreObj === scoreObj);

//Instead of using a library, here is a vannila JS function

const deepClone = (obj) => {
    if (typeof obj !== "object" || obj === null) return obj;
    //Create an array or object to hold the values
    const newObject = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        const value = obj[key];
        //recursive call for nested object & arrays
        newObject[key] = deepClone(value);
    }
    return newObject;
}

const newscoreArray = deepClone(ScoreArray);
console.log(newscoreArray);
console.log(newscoreArray === ScoreArray);

//Now we can make pure function
const pureAddToScoreHistory = (array, score, cloneFunc) => {
    const newArray = cloneFunc(array);
    newArray.push(score);
    return newArray;
}
const pureScoreHistory = pureAddToScoreHistory(ScoreArray, 18, deepClone);
console.log(pureScoreHistory);
console.log(ScoreArray);



//Pure function

//A part of the functional programming paradigm
//Why write Pure Function?
//1) Clean code
//2) Easy to test
//3) Easy to debug
//4) Decoupled and independent
//5) Could be added to your uitility functions

//Rules for Pure Functions
//1) The same input ALWAYS gives the same input
//2) No side effect
//3) 

//1) The same input ALWAYS gives the same input

const add = (x, y) => x + y;
console.log(add(2,3));

const fullName = (first, last) => `${first} ${last}`;
console.log(fullName("Dave", "Gray"));

//We can replace the function with the output
// This is called "referential transparency"

//A pure function should have at least one parameter.
//Otherwise, it is the same as a constant because they
//can only work with their input.
const firstName = () => "Dave";

const firstName ="Dave";

//2) No side effect
//This is also means accessing the scope outside the function makes
//the function impure

const z = 5;
const sum = (x, y) => x + y + z;
console.log(sum(2,2));

//Pure functions cannot;
//Access a database, API, file system, storage, etc.
//Modify the DOM
//Or even log to the console

// That said, clearly "impure" function are necessary
//but they are harder to test and debug

//Further, no input state can be modified
//That is, no data should be "mutated"
//Consider all input data to be immutable


//Impure example1:
let x = 1;
const increment = () => x += 1;
console.log(increment());
console.log(x);

//Impure example2:
const myArray = [1, 2, 3];
const addToArray = (array, data) => {
    array.push(data);
    return array;
}
console.log(addToArray(myArray, 4));
console.log(myArray);

//Refactor example 1:
const pureIncrement = (num) => num += 1;
console.log(pureIncrement(x));
console.log(x);

//Refactor example 2:
const pureAddToArray = (array, data) => [...array, data];
console.log(pureAddToArray(myArray, 5));
console.log(myArray);

//Also notice how pure function always return something.
//No return means you definitely do not have a pure function.
//You may have already been working some great examples of
//pure functions and not realized it.

//These common higher order functions are pure functions:

const oneToFive = [1, 2, 3, 4, 5];
const oddToFive = oneToFive.filter(elem => elem % 2 !== 0);
console.log(oddToFive);
const doubled = oneToFive.map(elem => elem * 2);
console.log(doubled);

const summed = oneToFive.reduce((acc, elem) => acc + elem);
console.log(summed);
console.log(oddToFive);


//IIFE- Immediately-Invoked Function Expression

//Pronounced "iffy" by Ben Alman who introduced the acronym
//varaiations:
//with anonymous arrow function inside:
(() => {
    // do stuff
})();
//with the function keyword:
(function () {
    //do stuff
})();
//with a function name (allows for recursion):
(function myIIFE() {
    num++;
    console.log(num);
    return num !== 5 ? myIIFE(num) : console.log('finished!');

})(num = 0);

//Reason 1) Does not pollute the global object namespace

//global
const x = "whatever";

const helloWorld = () => "Hello World";

// isolate declarations withnin the function
(() => {
    const x = "life whatever";
    const helloWorld = () => "Hello IIFE!";
    console.log(x);
    console.log(helloWorld());
})();

console.log(x);
console.log(helloWorld());

//Reason 2) Private variables and methods from closure
const increment = (() => {
    let counter = 0;
    console.log(counter);
    const credits = (num) => console.log(`I have ${num} credits(s).`);
    return () => { counter++; credits(counter); }
})();
increment();
increment();
increment();
//credits(3); //ref error

//Reason 3) The module Pattern
const Score = (() => {
    let count = 0;

    return {
        current: () => { return count},
        increment: () => {count++},
        reset: () => { count = 0},
    }
})();

Score.increment();
console.log(Score.current());

Score.increment();
console.log(Score.current());

Score.reset();
console.log(Score.current());

//The Revealing pattern is a variation of the module pattern

const Game = (() => {
    let count = 0;
    const current = () => { return `Game score is ${count}.`};
    const increment = () => {count++};
    const reset = () => { count = 0};

    return {
        current: current,
        increment: increment,
        reset: reset,
    }
})();
Game.increment();
console.log(Game.current());

//Injecting a namespace object

((namespace) => {
    namespace.count = 0;
    namespace.current = function () { return `App count is ${this.count}.`};
    namespace.increment = function () { this.count++};
    namespace.reset = function() { this.count = 0};
})(window.App = window.App || {});

App.increment();
console.log(App.current());

*/
//Javascript Hoisting

const initApp = () => {
    console.log(stepOne);
    stepOne();
}
document.addEventListener("DOMContentLoaded", initApp);

const stepOne = () => {
    console.log("step one");
}



//Javascript object composition Vs javascript object inheritance

class Pizza {
    constructor(size, crust, sauce) {
        this.size = size;
        this.crust = crust;
        this.sauce = sauce;
        this.toppings = [];
    }
    prepare() { console.log('Preparaing...') }
    bake() { console.log('Baking...') }
    ready() { console.log('Ready!')}
}

//Problem: Repeating methods - Not D.R.Y
class Salad {
    constructor(size, dressing) {
        this.size = size;
        this.dressing = dressing
    }
    prepare() { console.log('Preparaing...') }
    toss() { console.log('Tossing...') }
    ready() { console.log('Ready!')}
}

class stuffedCrustPizza extends Pizza {
    stuff() { console.log('stuffing the crust...')}
}

class butterCrustPizza extends Pizza {
    butter() { console.log('Buttering the crust...')}
}

//Problem: Repeating methods - Not D.R.Y.

class stuffedButteredCrustPizza extends Pizza {
    stuff() { console.log('Stuffing the crust...')}
    butter() { console.log('Buttering the crust...')}
}

const myPizza = new stuffedButteredCrustPizza();
myPizza.stuff();
myPizza.butter();


//Instead use composition for methods

const prepare = () => {
    return {
        prepare: () => console.log('Preparing...')
    }
}
const bake = () => {
    return {
        bake: () => console.log('Baking...')
    }
}
const toss = () => {
    return {
        toss: () => console.log('Tossing...')
    }
}
const ready = () => {
    return {
        ready: () => console.log('Ready!')
    }
}
const stuff = () => {
    return {
       stuff() {console.log('Stuffing the crust ...')}
    }
}
const butter = () => {
    return {
        butter() {console.log('Buttering the crust...')}
    }
}
const createPizza = (size, crust, sauce) => {
    const pizza = {
        size: size,
        crust: crust,
        sauce: sauce,
        toppings: []
    }
    return {
        ...pizza,
        ...prepare(),
        ...bake(),
        ...ready()
    }
}

const createSalad = (size, dressing) => {
    return {
        size: size,
        dressing: dressing,
        ...prepare(),
        ...toss(),
        ...ready()
    }
}

//compare to ES6 class syntax with extends and super()
const createStuffedButteredCrustPizza = (pizza) => {
    return {
        ...pizza,
        ...stuff(),
        ...butter() 
    }
}

const anotherPizza = createPizza("medium", "thin", "orginal");
const somebodysPizza = createStuffedButteredCrustPizza(anotherPizza);

//OR
const davesPizza = createStuffedButteredCrustPizza(createPizza("medium", "thin", "original"));

const daveSalad = createSalad("side", "ranch");

davesPizza.bake();
davesPizza.stuff(); 
davesSalad.prepare();
console.log(davesPizza);

//what about the toppings?
const addTopping = (pizza, topping) => {
    pizza.toppings.push(topping);
    return pizza;
}
const jimsPizza = createPizza("medium", "thin", "original");
console.log(jimsPizza);
console.log(addTopping(jimsPizza, "pepperoni"));
console.log(jimsPizza); //mutation!

//we need to clone the pizza object to avoid mutation
//Function composition:
/*const shallowPizzaClone = (fn) => {
    return (obj, array) => {
        const newobj = {...obj};
        return fn (newobj, array);
    }
}*/
const shallowPizzaClone = (fn) => (obj, array) => fn({...obj }, array);
    let addToppings = (pizza, toppings) => {
        pizza.toppings = [...pizza.toppings, ...toppings];
        return pizza;
    }


//Decorate the addToppings function with shallowPizzaClone
addToppings = shallowPizzaClone(addToppings);

const timsPizza = createPizza ("medium", "thin", "original");
const timsPizzaWithToppings = addToppings(timsPizza, ["olives", "cheese", "pepperoni"]);

console.log(timsPizzaWithToppings);
console.log(timsPizza);
console.log(timsPizzaWithToppings === timsPizza);