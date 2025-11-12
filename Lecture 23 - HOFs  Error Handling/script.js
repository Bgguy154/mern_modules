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
// HW use map for this

//function to display all active users from above users array
//HW

//HW
//function to find sum of age for all users below 30

//HW
//function to get names of all active users


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
once --> restricts a function to be called more than once
memoization --> if a function is called with same args as before, it will not calculate the result again, 
                it will find the result from a cache where result of 
                previous function call with same args is stored
*/