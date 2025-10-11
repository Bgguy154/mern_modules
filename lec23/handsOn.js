let arr1 = [3, 2, 9, 0, 10];
console.log(
  arr1.map((a) => {
    return a * a;
  })
);
//[ 9, 4, 81, 0, 100 ]

//HW normal anonymous functions ✅
/*
1.Assigning to a variable

let greet = function(name) {
  return "Hello, " + name;
};
console.log(greet("Tanmay")); // Hello, Tanmay

2.Using as a callback

setTimeout(function() {
  console.log("This runs after 2 seconds");
}, 2000);


3.With Array methods

let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(function(num) {
  return num * 2;
});
console.log(doubled); // [2, 4, 6, 8, 10]


4.Immediately Invoked Function Expression (IIFE)
(function() {
  console.log("I run immediately!");
})();

*/



//HOF Day 2

//4.reduce
let arr = [2, 5, 3, 10, 34];
//sum of array
// function sumOfArray(arr){
//     let sum=0;
//     for(let i of arr){
//         sum+=i;
//     }
//     console.log(sum);
// }
// sumOfArray(arr);

//acc accumulator
let sum = arr.reduce((accumulator, value, index, array) => {
  accumulator += value;
  return accumulator;
}, (initialAccumulatorValue = 0));
console.log(sum);

//find count of even numbers
let countEven = arr.reduce((accumulator, value, index, array) => {
  accumulator += value % 2== 0;
  return accumulator;
}, (initialAccumulatorValue = 0));
console.log(countEven);

//find frequency of each element
let fruits = ["apple", "guava", "kiwi", "guava", "kiwi", "Apple", "Guava"];
function freqOfAllElements(fruits){
    let obj={};
    for(let i in fruits){
        obj[fruits[i].toLowerCase()]=(obj[fruits[i].toLowerCase()]||0)+1;
    }
    return obj;
}
console.log(freqOfAllElements(fruits));
//{ apple: 2, guava: 3, kiwi: 2 }

//using reduce
let obj=fruits.reduce((acc,val)=>{
    val=val.toLowerCase();
   acc[val]=(acc[val]||0)+1;
   return acc;
},{})
console.log(obj);
//{ apple: 2, guava: 3, kiwi: 2 }


//5.find
//-returns value
//-returns 1st element that matches the condition

let findApple=fruits.find((val,index,array)=>
    val.toLowerCase()==='apple'
)
console.log(findApple);


//given an array of object,containing details of users,console name of 
//first user aged above 30
const users = [
  { name: "Alice", age: 22,isActive:true },
  { name: "Bob", age: 25,isActive:false},
  { name: "Charlie", age: 28 ,isActive:true},
  { name: "Diana", age: 24 ,isActive:false},
  { name: "Ethan", age: 39 ,isActive:true}
];

let obj1=users.find((val)=>{
    if(val.age>30){ 
        return val;
    }
})
console.log(obj1.name)
//Ethan

//print name and age of each user
users.forEach((val,index,array)=>{
  console.log(val.name,val.age);
})

//function to create array of names from above users

users.forEach((val,index,array)=>{
    array[index]=val.name;
})
console.log(users);
// HW use map for this ✅

let a1=users.map((a)=>{
  return a.name;
})
console.log(a1);
//[ 'Alice', 'Bob', 'Charlie', 'Diana', 'Ethan' ]

//function to display all active users from above users array
//HW ✅
const activeUsers=users.filter((a)=>a.isActive)
console.log(activeUsers);
/*
[
  { name: 'Alice', age: 22, isActive: true },
  { name: 'Charlie', age: 28, isActive: true },
  { name: 'Ethan', age: 39, isActive: true }
]
*/

//Alternate method 
// const activeUsers=users.filter((a)=>{
//   return a.isActive;
// })

//HW  ✅
//function to find sum of age for all users below 30
let under30=users.filter((a)=>a.age<30);
let sumunder30=under30.reduce((a,val)=>{
    a+=val.age;
    return a;
},0)
console.log(sumunder30);
//99

//HW  ✅
//function to get names of all active users
let a2=activeUsers.map((a)=>{
  return a.name;
})
console.log(a2);
//[ 'Alice', 'Charlie', 'Ethan' ]

//Passing a function as an argument & returning a function
function calculate(a,b,operation){
    let ans=operation(a,b);
    console.log(ans);
}
function add(a,b){
    return (a+b);
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return Math.floor(a/b);
}
calculate(10,5,add);
calculate(10,5,sub);
calculate(10,5,mul);
calculate(10,5,div);
// 15
// 5
// 50
// 2


//Error Handling

try {
  // console.log(studentName);
  let studentName = "Pratik";
  console.log(studentName);
  if (studentName === "Pratik") throw new Error("Pratik found!!");
} catch (error) {
  console.log(error.message);
  console.log(error.name);
  console.log(error.stack);
} finally {
  console.log("In finally block");
}

console.log("after try catch block");
/*
Pratik
Pratik found!!
Error
Error: Pratik found!!
    at Object.<anonymous> (/box/script.js:5:39)
    at Module._compile (internal/modules/cjs/loader.js:959:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:995:10)
    at Module.load (internal/modules/cjs/loader.js:815:32)
    at Function.Module._load (internal/modules/cjs/loader.js:727:14)
    at Function.Module.runMain (internal/modules/cjs/loader.js:1047:10)
    at internal/main/run_main_module.js:17:11
In finally block
after try catch block
*/


/* 
once --> restricts a function to be called more than once
memoization --> if a function is called with same args as before, it will not calculate the result again, 
                it will find the result from a cache where result of 
                previous function call with same args is stored
*/


//Quick Sort alternative
// your code here
const unsortedArray = [3, 7, 2, 8, 2, 782, 7, 29, 1, 3, 0, 34];
function quickSort(arr){
    if(arr.length<=1){
        return arr;
    }
    let pivot=arr[arr.length-1];
    let left=[];
    let right=[];
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i]);
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)];
}
let sortedArray=quickSort(unsortedArray);
console.log(sortedArray);