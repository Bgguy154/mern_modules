/*Q1
function scopeExample() {
  console.log(x);
  var x = 5;
  if (true) {
    var x = 10;
    let y = 20;
    console.log(x);
    console.log(y);
  }
  console.log(x);
  console.log(y);
}

scopeExample();
*/
Answer
undefined

10

20

10

ReferenceError

/*Q2
What will be the output of the following code?

function test() {
  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
  }
  console.log(a);
  console.log(b);
  console.log(c);
}

test();
*/
Answer
10
ReferenceError
ReferenceError

/*
Q3
Delete All Odd Numbers from an Array
*/
let arr=[1,2,3,4,5];
let arr1=arr.filter((a)=>a%2!=0);
console.log(arr1)
//[ 1, 3, 5 ]

/*
Q4
Given an array A of size N. Value of an element Ai is
 defined as the sum of absolute difference of all elements
  of the array with Ai. More formally, the value of an element 
  at index i is sum of |Ai - Aj| over all j (1 <= j <= N).
   Find the maximum such value over all i (1 <= i <= N) in the array.

Note: Given array is 1-based index
*/
let arr2=[1,1,5,5,8,9];
// let maxS=0;
for(let i=0;i<arr2.length;i++){
    let maxS2=0;
    for(let j=0;j<arr2.length;j++){
      maxS2+=Math.abs(arr2[j]-arr2[i]);
      if(maxS2>maxS){
        maxS=maxS2;
      }
    }
}
console.log(maxS);
//TC-O(n^2)

//More optimized
// let arr2 = [1, 1, 5, 5, 8, 9];

// Step 1: find min and max
let minVal = Math.min(...arr2);
let maxVal = Math.max(...arr2);

// Step 2: compute distances
let sumMin = 0, sumMax = 0;
for (let num of arr2) {
  sumMin += Math.abs(num - minVal);
  sumMax += Math.abs(num - maxVal);
}

// Step 3: result
let maxS = Math.max(sumMin, sumMax);
console.log(maxS); // ✅ optimized
//TC-O(n)


/*
Q5
Total Book price

You are working on a project for a local bookstore. The bookstore has a list of books and their corresponding prices, stored in an array of objects. Your task is to create a function that takes in an array of books and returns the total price of all the books.
Input Format

An array of objects, arr, where each object has the following properties:

title (string): the title of the book
price (number): the price of the book

Output Format

A number representing the total price of all the books in arr.
Example 1

Input

[
  { title: "Book 1", price: 10 },
  { title: "Book 2", price: 20 },
  { title: "Book 3", price: 30 }
]

output

60

*/
Answer
let priceTotal=0;
for(let i of arr){
    priceTotal+=i.price;
}


/*
Q6
Unread Books Tracker

You are given a JSON object Array of the format below

[ 
  {
    "title": "sampleTitle1",
    "author": "sampleAuthor1",
    "readingStatus": false
  },
  {
    "title": "sampleTitle2",
    "author": "sampleAuthor2",
    "readingStatus": true
  },
  {
    "title": "sampleTitle3",
    "author": "sampleAuthor3",
    "readingStatus": false
  }
]

The keys of each object are title which is the name of the book, author which is the author of the book and readingStatus which can be true(if the user has read the book) or false(if the user has not read the book).

Your task is to print the name and author of the books that are not read by the user.
Input Format

First line contains the JSON array of objects, in compact form(in a single line)
Output Format

Print the name and author of the book separated by a dash -

Example:

sampleTitle1-sampleAuthor1
sampleTitle3-sampleAuthor3

Example 1

Input

[{"title":"Bill Gates","author":"The Road Ahead","readingStatus":true},{"title":"Steve Jobs","author":"Walter Isaacson","readingStatus":true},{"title":"Mockingjay: The Final Book of The Hunger Games","author":"Suzanne Collins","readingStatus":false}]

Output

Mockingjay: The Final Book of The Hunger Games-Suzanne Collins

*/
Answer
  for(let i of obj){
    if(i["readingStatus"]==false){
      console.log(i["title"]+"-"+i["author"]);
    }
  }