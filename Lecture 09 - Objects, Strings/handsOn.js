//Rest operator for function parameters
function sum(a,b,...nums){
    console.log(nums);
    return a+b+nums.reduce((acc,val)=>acc+val,0);
}
console.log(sum(1,2,3,4,5));
// nums = [3,4,5] → output: 15

//rest operator for array destructuring
const [first,...rest]=[10,20,30,40,50];
console.log(first);
console.log(rest);
// 10
// [ 20, 30, 40, 50 ]

//rest operator for object destructuring
const person={name:"tanmay",age:21,city:"Pune"};
const {name,...details}=person;
console.log(name);
console.log(details);
// tanmay
// { age: 21, city: 'Pune' }

//Spread operator for copying arrays
const arr=[1,2,3];
const newArr=[...arr];
console.log(newArr);
//[ 1, 2, 3 ]

//Spread opertaor for merging arrays
const arr1=[2,3,4];
const arr2=[9,8,7];
console.log([...arr1,...arr2]);
//[ 2, 3, 4, 9, 8, 7 ]

//Spread operator for passing as function arguments
function add(x,y,z){
    return x+y+z;
}
const nums=[2,3,5];
console.log(add(...nums));
//10



//HW

//Spread for copying objects
const obj1={a:1,b:2};
const obj2={...obj1};
console.log(obj2);
//{ a: 1, b: 2 }

//Spread for merging objects
const obj3={c:3,d:4};
const obj4={e:5,f:6};
console.log({...obj3,...obj4})
//{ c: 3, d: 4, e: 5, f: 6 }

//Spread operator for overriding properties
const obj5={name:"tanmay",age:76};
const obj6={age:22,gender:"male"};
console.log({...obj5,...obj6});
//{ name: 'tanmay', age: 22, gender: 'male' }



//Objects
//key value pairs
const obj = { name: "Tanmay", age: 21 };
console.log(obj.name);     // Tanmay
console.log(obj["age"]);   // 21


//Strings
// Immutable sequences of characters.

// Can use ' ', " ", or ` ` (backticks for template literals).

// Common methods:

// .includes("sub") → check substring

// .replace("a","b"), .replaceAll() → replace text

// .trim() → remove spaces

// .substring(start,end) / .slice(start,end) → extract part

// .split(" ") → split into array

// .toUpperCase() / .toLowerCase() → case change




//Array methods
/*
map() → transform each item, returns new array

filter() → keep only matching items

reduce() → accumulate values
*/
const arr7=[1,2,3,4,5];
console.log(arr7.map(x=>x*2))//2,4,6,8,10
console.log(arr7.filter(x=>x%2));//[1,3,5];
console.log(arr7.reduce((a,b)=>a+b));//15