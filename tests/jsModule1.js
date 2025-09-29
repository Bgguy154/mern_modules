/*
Q1
let favoriteSong = 'Song1';

function displayFavoriteSong() {
  console.log(favoriteSong); // Line A
  let favoriteSong = 'Song2';
  console.log(favoriteSong); // Line B
}

displayFavoriteSong();
*/
// The actual reason for the error is 
// due to variable hoisting within the 
// function's scope, causing a ReferenceError
//  at Line A.


/*
Q2
const interactions = [10, 20, 30, 40];
interactions[0] = 100;

console.log(interactions);
*/
//[100,20,30,40]


/*
Q3
A social media company wants to track user engagement on their platform.
 They have an object that stores user data, including their name, age, and
  number of posts. The company wants to rename the "posts" key to "totalPosts"
   without changing the value. Write a function renameKey(obj, oldKey, newKey)
    that takes an object, the old key, and the new key as parameters and renames
     the key accordingly.

Here is the sample object:

const userData = {
  name: "John Doe",
  age: 25,
  posts: 50
};

Your function should be able to rename the "posts" key to "totalPosts" 
without modifying the value.
*/
// your code here
const userData = {
  name: "John Doe",
  age: 25,
  posts: 50
};

function renameKey(obj,oldKey,newKey){
   if(oldKey in obj){
      obj[newKey]=obj[oldKey];
      delete obj[oldKey];
   }
   return obj;
}
console.log(renameKey(userData,"posts","totalPosts"));



/*
Q4
: S = 1 + 2/(1+2) + 3/(1+2+3) + 4/(1+2+3+4) …….n/(1+2+3...n).

Create a JavaScript function that takes an integer n as input and
 returns the sum of the series up to n terms. For example, if n is 3,
  the function should return the sum of the series up to 3 terms, which
   is 1 + 2/(1+2) + 3/(1+2+3).
*/
let sum=0;
for(let i=1;i<=n;i++){
 let denominator=(i*(i+1))/2;
 sum+=i/denominator;
}
console.log(sum);