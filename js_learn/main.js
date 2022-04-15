console.log("Connected with external jsfile")


//if-else
var a=1;
var b=2;

if(a+b>4)
{
    console.log(a+b);
}
else if(a+b<1)
{
    console.log(a+b);
}
else
    console.log("hi");


//loops-for
for(var num=0;num<11;num=num+2)
    console.log(num);

//loops-for each
var a =[1,2,3,4];
a.forEach(item => console.log(item));
//loops-for in
for(var item in a)
    console.log(item);
//loops-for of
for(var item of a)
    console.log(item);



//while-loops
var num =0;
while(num<5)
{
    console.log(num);
    num++; //num=num+1;
}

//loops-do-while
do{
    console.log(num);
    num++;
}while(num<5);



//postfix(first assign then icrement)
var itr = 10;
console.log(itr++); //10
console.log(itr);//11
//prefix(first icrement then assign)
console.log(++itr); //12
console.log(itr);//12

//shift operator
var num1=8, n=2;
console.log(num1<<n); //32
/*00000.....0001000
  00000.....0000010
  rigth side*/
  console.log(num1>>n);//2


//hoisting

var a=10;
console.log(a);
for(var n =0;n<5;n++) //global scope
    console.log(n);

console.log(n);
for(let n =0;n<5;n++) //block scope
    console.log(n);
 
//data type


var a ="vignehwari";
console.log(name + "is 24 yr old");
console.log('${name} is 24 yr old')

var obj = {
    name :"faizan",
    roll_no:10,
    sing(){
        console.log(`${this.name} sing`);

    }
};
console.log(obj.name);
obj.sing();
console.log(obj["roll_no"]);


//array
var arr =[1,2,3,4,5];
console.log(arr[2]);//3

var arr1=[2,34,5,6,,77];
console.log(arr1[4]);//undefined

arr.push("faizen");
arr.push("taz");
console.log(arr.pop());

//unshift

arr.unshift(1000);
arr.unshift(10);
console.log(arr[0]);
console.log(arr.shift());

console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

//splice
arr.splice(1,3,"9999");

arr.splice(0,3);

//slice
var b_arr =[1,2,3,4,5,6];

var new_barr = b_arr.slice(0,4);

var c_arr = [1,2,3,4,5,6];
var new_carr = c_arr.slice(3);

var new_carr2 = c_arr.slice(3,7);

/* function
using function keyword */

print();
function print()
{
    console.log("happy");

}

console.log(print(5,7));
function print(a,b)
{
    return a+b;
}


var a =0;
console.log(a);
print();
function print()
{
    var b=0;
    a=10;
}
console.log(a);
console.log(b);


/* function expression*/

var print = function () {
    console.log("awesome");
}
print(); //awseome

//IIFE

(function (a ,b)
{
    console.log(a+b);
})(4,4);

/* call and apply function*/
function print()
{
    console.log("hello");
}
print.call();

print.apply();

let animal={
    name :'dog',
    eat(a,b){
        console.log( this.name + " is eating" + " " + a +" " + b);
    }

};
let human={
    name:'Ravi',
};
animal.eat(5,'bones');
animal.eat.call(human,10,'chips');
animal.eat.apply(human,1[0,'chips']);

//bind
let human_eat = animal.eat.bind(human);
human_eat(5,'apples');


//this keyword
let ob =
{
    prnt: function(){
    console.log(this);
    }
}
ob.prnt();


//arrow function
let obo =
{
    name: 'fur',
    prnt: function()
    {
    console.log(this);
    var an_prnt = ()=>
    {
        console.log('b' ,this);
    }
        an_prnt();
    }
};
obo.prnt();


//high order function

function printt(){
    console.log("hi");
}

setInterval(printt,1000);
clearInterval(1)


function canVote(age)
{
    return(age>=18)
};
function canDrive(age)
{
    return age>=16;
};
function canMarry(age)
{
    return age>=21;
};

console.log(canDrive(11));
console.log(canVote(11));
console.log(canMarry(16));

console.log(canDrive(27));
console.log(canVote(27));
console.log(canMarry(27));


function age_req(r_age)
{
    return function(age){
        return age>=r_age;
    };
        
};


let can_Vote = age_req(18);
console.log (can_Vote(27));

let can_Drive = age_req(16);
console.log (can_Drive(27));

let can_Marry = age_req(16);
console.log (can_Marry(27));

// encapsulation object function


class Box
{
    constructor(length)
    {
        this.length = length;
        console.log("constructor call")
    }
    display(){
        console.log(this);
    }
}
let obje = new Box(20);
obje.display();


// abstraction function

var arr =[1,2,3];

// prototype inheritence
obj.__proto__

let father = {
    name:'hon'
};
let son1={};
let son = Object.create(father);

console.log(father.isPrototypeOf(son));
console.log(father.isPrototypeOf(son1));
// prototype inheritence ownpropert()

var parent ={
    name : "father",
    sing(){
        console.log("singing");
    },
    eat:function(){
        console.log("eating");
    },
    drink: ()=>{
        console.log("drinking");
    }
};
var child = {
    name:"son",
    eat()
    {
        console.log("eating");
    }
};

child.__proto__=parent;

for(let p in child)
{
    console.log(p + " "+ child.hasOwnProperty(p));
}



//inhertience super

class Fruits
{
    constructor()
    {
        console.log("parent cons");
    }
}
class Apple extends Fruits
{
    constructor()
    {
        super();
        console.log("child cons");
    }
}

let objec = new Apple();


class Fruit
{
    constructor(color)
    {
        this.color=color;
    }
}
class orange extends Fruit
{
    constructor(color,type)
    {
        super(color);
        this.type=type;
    }
    print()
    {
        console.log(this);
    }
}

let objecc = new orange("red","apple");
objecc.print();

//polymorphismoverloading
class Fruitss
{
    constructor(color)

{
    this.color=color;
}
print()
{
    console.log(this);
}
print(size)
{
    console.log(size);
}
print(s1,s2){
    console.log(s1+s2);
}
}

let objecct = new Fruitss("red");
objecct.print(10);
objecct.print();
objecct.print(12,12); 


//over riddeing

class Parentt
{
     live()
     {
         console.log("Iran");
     }

}

class Child extends Parentt{
    live()
    {
        console.log("India");
    }
}
var oob = new Child();
oob.live();

//exception handling catch try
function iseligiblevoter(age)
{
    if(age<16)
    try
    {
        throw new Error("you are under age");
    
    }
    finally{
        console.log("Prgm ended");
    }

    else
    {
        console.log("you can vote");

    }
}

iseligiblevoter(13);


