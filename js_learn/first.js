/*
console.log("connetced");
console.log(document);
console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.body);
console.log(document.head);
console.log(document.title);
console.log(document.all);
console.log(document.all[1]);

document.title = 12345;
document.all[5].textContent='ttiittlee';


window.open("" ,"",width=100,height=100); //open new window

window.open("https://google.com");



var age = prompt("Please enter your age:");
if(age>20)
    alert("great you are a valid user/visitor");
else
    alert("try again");



console.log("connetced");

var head = document.getElementById("head1");

console.dir(head);


var list_of_hobbies = document.getElementsByClassName("hobby");

console.log(list_of_hobbies);



var list_of_para= document.getElementsByTagName("p");
console.log(list_of_para);
console.log(list_of_para[0]);

 

var clas= document.querySelector(".hobby");
console.log(clas);

var clas= document.querySelectorAll(".hobby");
console.log(clas); 
 

var I_D= document.getElementById("heading");
console.log(I_D);

I_D.style.color='red';
I_D.align="center";
I_D.style.background='blue';
I_D.textContent='Header';
I_D.innerHTML='Head';
I_D.innerHTML; 
console.log(I_D);



var x =document.getElementsByTagName("*");
var len = x.length;
for(var i=0;i<len;i++){
    console.log(x[i].tagName);
}


function change(id){
    id.innerHTML = "Clicked";
}

function button(id){

}


var button = document.getElementById("btn");
btn.addEventListener('click',function()
{
    console.log("button is Clicked");
});

*/


function parent()
{
    console.log("hello");

    function child()
    {
        console.log("bye");
    }
    return child;
}


player.top < ball.bottom
|
|
player.left < ball.right |  player.right > ball.left
|
|
player.bottom > ball.top
