/* Practice Question */
/* Cricket Team */
const team = {
  name: "Indian Cricket Team",
  /* this will store an object with two properties -> {id: 1, scores: [10, 34, 80]} */
  players: [{ id: 1, scores: [10, 34, 80] }],

  display: function () {
    // loop over players and display their id and scores
    this.players.forEach((a)=>console.log(a.id,a.scores))
  },

  addPlayers: function (id) {
    /* assume always a new player is coming with unique id, this function should create 
    a new player with this id and empty scores array, then push this player to players array
    */
   this.players.push({id,scores:[]});
  },

  addScore: function (id, score) {
    /* find the player with this id, and push this score to its score array */
    const playerJi=this.players.filter((a)=>a.id==id);
    playerJi.scores.push(score);
  },

  averageScore: function (id) {
    /* find the player with this id and calculate its avg score and return it*/    
  },

  teamAverage: function () {
    //optional
    /* calculate the average of scores of all players combined */
  },
};

team.addPlayers(2);
team.addPlayers(3);

team.addScore(1, 29);
team.addScore(3, 80);
team.addScore(2, 40);
team.addScore(2, 100);
team.addScore(2, 120);
team.addScore(3, 20);

team.display();
console.log("average score of player 1 - " + team.averageScore(1)); // => 153/4 = 38.25
console.log("average score of player 2 - " + team.averageScore(2)); // => 260/3 = 86.67

console.log("average score of team - " + team.teamAverage()); // => 513/9 = 57


//Functions

//write arrow function to check if number is divisible by 3 or not
//method 1
const divisibleBy3 = (a) => !(a % 3);
console.log(divisibleBy3(8));
console.log(divisibleBy3(9));

//method2
const divisibleBy3method2 = (a) => {
  return a % 3 == 0;
};
console.log(divisibleBy3method2(88));
console.log(divisibleBy3method2(90));
// false
// true
// false
// true

/*
Notes:Arrow functions dont have their own 'this' keyword
they uses parent's 'this'
*/
const student = {
  name: "Pratik",
  age: 2,
  result1: function (resultStatus) {
    console.log(this.name + " has " + resultStatus + " the exam");
    console.log(this); //shows object properties
  },
  result2: (resultStatus) => {
    console.log(this.name + " has " + resultStatus + " the exam");
    console.log(this); //doesnt show object propertis instead shows window properties
  },
};

student.result1("Passed");
student.result2("Failed");
// Pratik has Passed the exam
// {
//   name: 'Pratik',
//   age: 2,
//   result1: [Function: result1],
//   result2: [Function: result2]
// }
// undefined has Failed the exam
// {}

//Anonymous Functions
//They are functions with no name

//HOF
//Higher Order Functions
//These functions are either functions that takes functions as arguments or
//returns a function

//Types of HOF
//1.forEach
//    -applies callback function to each Element
//    -iterates over each element and doesnt break like other for loops
//    -doesnt change original array
//    -can be used to iterate and do some operations on array

let users = [
  { name: "ramesh", age: 20 },
  { name: "Suresh", age: 10 },
  { name: "Rani", age: 40 },
];

users.forEach((ele) => {
  console.log(ele.name, ele.age);
});
// ramesh 20
// Suresh 10
// Rani 40

//2.Map
//  -transforms array
//  -returns array

let arr1 = [3, 2, 9, 0, 10];
console.log(
  arr1.map((a) => {
    return a * a;
  })
);
//[ 9, 4, 81, 0, 100 ]

let users1 = [
  { name: "ramesh", age: 20 },
  { name: "Suresh", age: 10 },
  { name: "Rani", age: 40 },
];
//transform name of each user to uppercase
let users2 = users1.map((a) => {
  return {
    name: a.name.toLocaleUpperCase(),
    age: a.age,
  };
});
console.log(users2);
/*
[
  { name: 'RAMESH', age: 20 },
  { name: 'SURESH', age: 10 },
  { name: 'RANI', age: 40 }
]
*/


//3.filter()
//  -keeps elements that satisfies condition
//  -returns array
//  -doesnt change original array

let nums=[2,12,9,18,27];
const evenNumbers=nums.filter((value,index,array)=>value%2==0);
console.log({evenNumbers})
// { evenNumbers: [ 2, 12, 18 ] }

const oddNumbers=nums.filter((v)=>v%2);
console.log(oddNumbers);
//[ 9, 27 ]


let names=["Pranjal","Bhavesh","Uday","Siddharth","Neha"];
//filter above array with names s.t less than 5 characters are eleminated
const lengthAbove5Name=names.filter((a)=>a.length>5);
console.log(lengthAbove5Name);
//[ 'Pranjal', 'Bhavesh', 'Siddharth' ]