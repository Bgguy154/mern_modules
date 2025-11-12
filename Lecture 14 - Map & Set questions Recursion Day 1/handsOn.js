//Intersection
//let arr4 = [1,2,4,5,6,3,3], arr5 = [2,5,6,3,1,3];
////intersection: 1,2,5,6,3,3
let arr4 = [1, 2, 4, 5, 6, 3];
let arr5 = [2, 5, 6, 3, 1];
let intersection = [];
let set4 = new Set(arr4);
for (let i = 0; i < arr5.length; i++) {
  if (set4.has(arr5[i])) {
    intersection.push(arr5[i]);
  }
}
intersection = [...new Set(intersection)];//this lines tc and sc=n
console.log({ intersection });
//TC-O(n)
//SC-O(n)
//{ intersection: [ 2, 5, 6, 3, 1 ] }

//another way to execute above line
// let intersectionset=new Set(intersection);
// intersection=[...intersectionset];

//NOTES
//Set and map both maintains insertion order
//Map values are all undefined initially

/* Question find the frequency of each element in the arr (Method 1) */
let arr3 = [2, 3, 4, 1, 0, 1, 2, 3, 4, 5, 10];
function freqOfEachElement(arr) {
  let map = new Map();
  for (let num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (i of map) {
    console.log("Frequency of ", i[0], " is ", i[1]);
  }
}
freqOfEachElement(arr3);
//TC-O(n)
//SC-O(n)


//Alternate method(Method 2)
let map2=new Map();
for(let i=0;i<arr3.length;i++){
  if(map2.has(arr3[i])){
    map2.set(arr3[i],map2.get(arr3[i])+1)
  }
  else{
    map2.set(arr3[i],1);
  }
}

for(let key of map2.keys()){
    console.log(key,map2.get(key));
}
//TC-O(n)
//Sc-O(1)
// 2 2
// 3 2
// 4 2
// 1 2
// 0 1
// 5 1
// 10 1

//alternate method of printing(Method 2 of printing)
for(let [key,val] of map2){
    console.log({key,val});
}
// { key: 2, val: 2 }
// { key: 3, val: 2 }
// { key: 4, val: 2 }
// { key: 1, val: 2 }
// { key: 0, val: 1 }
// { key: 5, val: 1 }
// { key: 10, val: 1 }

// about rest operator and destructuring
const [a,...b]=[1,2,3,4,5];
console.log({a,b})
//{ a: 1, b: [ 2, 3, 4, 5 ] }


//using objects(Method 3 of printing)
let obj={};
for(let key of map2.keys()){
    obj[`${key}`]=map2.get(key);
}
console.log(obj);
//{ '0': 1, '1': 2, '2': 2, '3': 2, '4': 2, '5': 1, '10': 1 }


//Question
//Remove duplicates from array and print array
let set=new Set(arr3);
console.log({set});
console.log(set)
// { set: Set(7) { 2, 3, 4, 1, 0, 5, 10 } }
//Set(7) { 2, 3, 4, 1, 0, 5, 10 }

//1 line code
console.log([... new Set(arr3)])
// [
//   2, 3,  4, 1,
//   0, 5, 10
// ]



//Find frequesncy of all words in a paragraph 
//only spaces,a-z and A-Z will be there
const paragraph="Hello how are you How was your day Did you eat hoW did you find that";
let arr6=paragraph.trim().toLowerCase().split(" ");
let map3=new Map();
for(let num of arr6){
    if(!map3.has(num)){
      map3.set(num,1);
    }
    else{
        map3.set(num,map3.get(num)+1)
    }
    //1 liner for if else
    map3.set(num,(map3.get(num)||0)+1);
}
for(let [key,val] of map3){
    console.log(key,val);
}
//TC-O(n)
//SC-O(1)
// hello 1
// how 3
// are 1
// you 3
// was 1
// your 1
// day 1
// did 2
// eat 1
// find 1
// that 1

//Using object(Method 2 of printing)
let obj1={};
for(let key of map3.keys()){
    obj1[`${key}`]=map3.get(key);
}
console.log(obj1);
// {
//   hello: 1,
//   how: 3,
//   are: 1,
//   you: 3,
//   was: 1,
//   your: 1,
//   day: 1,
//   did: 2,
//   eat: 1,
//   find: 1,
//   that: 1
// }



//Anagrams
//2 words exact letters order can change same frequency of letters
//listen-silent
//mad-dam
//not anagram apple-aplee
function isAnagrams(){
let c='apple';
let d='applue';
let map4=new Map();
for(let num of c){
    map4.set(num,(map4.get(num)||0)+1);
}
for(let num of d){
    if(map4.get(num)>0){
    map4.set(num,(map4.get(num))-1);//tc and sc of this line=1
    }
    else{
    map4.set(num,(map4.get(num)||0)+1);
    }
} 

for(let [key,values] of map4){
    if(map4.get(key)!=0){
        return false;
    }
}
return true;
}
console.log(isAnagrams());
//TC-O(n)
//SC-O(n)

//Using objects (Method 2)
function isAnagrams2(){
let c='apple';
let d='appe';
let freqObj={};
if(c.length!=d.length)return false;
for(let i=0;i<c.length;i++){
    freqObj[c[i]]=(freqObj[c[i]]||0)+1;
}

for(let i=0;i<d.length;i++){
    if(!freqObj[d[i]])return false;
    freqObj[d[i]]=freqObj[d[i]]-1;
}

for(let value of Object.values(freqObj)) if(value) return false;
return true;
}
console.log(isAnagrams2())
//TC-O(m+n)
//m=length of c
//n=length of d
//SC-O(1)=O(26/52)




//RECURSION
function factorial(N){
    if(N==0){
        return 1;
    }
    let fact=N*factorial(N-1);
    return fact;
}
console.log(factorial(4));
console.log(factorial(7));
// 24
// 5040
//tc-O(n)
//sc-O(1) it uses call stack which is not considered in sc


//print numbers from 1 to N
function printTillN(N){
    if(N==0){
       return;
    }
    printTillN(N-1);
   console.log(N);
}
printTillN(6);
// 1
// 2
// 3
// 4
// 5
// 6

//reverse print from n to 1
function reverseprintTillN(N){
    if(N==0){
       return;
    }
    console.log(N);
    reverseprintTillN(N-1);
}
reverseprintTillN(10);
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1


//NOTES
//2 things to be kept in mind
//base conditions should always exist
//combining return value of iterations and current function
// Recursive functions can be of two types:

// Void recursion → only printing/doing tasks (like printTillN).

// Return recursion → combining results (like factorial, sum).

// Recursion depth in JS is limited (~10k calls).

// For large N, recursion might crash → iterative solution is safer.


function factorial(N) {
  if (N === 0) return 1;
  return N * factorial(N - 1);
}
// Each call reduces N by 1 → N calls total.

// TC = O(N)

// SC = O(N) (because each call is stored in call stack).

// ⚠️ Your note "SC = O(1) not considering call stack" → not correct.
// In recursion, call stack memory counts in SC (important in interviews).