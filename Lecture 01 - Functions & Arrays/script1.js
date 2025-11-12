console.log("Hello work")

/*
functions/methods:
-block of code that perform specific tasks

-when we want to use some specific lines of code
to be executed multiple times and we dont 
want when and where to use this code snippet

-follow dry principle dont repeat yourself


rules:
-same as variable naming rules

Parameters
-functions 
*/

//function defination/craetion
function greet(){
    console.log("hello world");
}
function greet2(){
    console.log("bye world")
}
greet()//calling/invoking
greet()
greet2()
greet2()
greet()
greet2()
greet2()
greet()
greet()

function greetUser(userName,place="hell"){
    console.log("Hello "+ userName +" Welcome to our "+place)
}
greetUser("rahul","website");
greetUser("rani","app");
greetUser("tanuja");

function sum(a,b){
    console.log(a+b)//nan
    //return function is end of function
}

sum(3)

//task
/*output:
hello rahul,welcome to our website
done
*/


//nested functions
function personalDetails(name,birthYear){
  console.log("name "+ name);
  console.log("Age "+ calculateAge(birthYear))
}

function calculateAge(birthYear){
    return 2025-birthYear;
}

personalDetails("Jayesh",2004)


//function to calculate square of numbers
function squareNumber(num){
    console.log(num*num);
}
squareNumber(20)
squareNumber(21)
squareNumber(5)

//parenthesis->()->function
console.log("hello",2+2)//will treat everything after comma as an argument
console.log("hello "+ 2+2)//will treat everrything as 1 argument
