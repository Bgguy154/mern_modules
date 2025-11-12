//Q2
//Given array
//all elements in array is sorted except last element Done ✅
//Using shifting
//HW
function shiftLastOne(arr){
    let n=arr.length;
    let k=arr[n-1];
    let insertAt=0;
    for(let i=n-2;i>=0;i--){
        if(arr[i]>k){
           arr[i+1]=arr[i];
        }
        else{
            insertAt=i;
            arr[i+1]=k;
            break;
        }
    }
    if(insertAt==0){
        arr[insertAt]=k;
    }
    return arr;
}
// let arr=[1,7,8,-1];
console.log(shiftLastOne(arr))
//[ -1, 1, 7, 8 ]

//Sorting Day3

//Insertion Sort without using extra array
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let j = i - 1;
    while (j >= 0 && curr < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  }
  return arr;
}
let arr = [3, 1, 4, 2, 7, 8];
console.log(insertionSort(arr));

function insertionSortSir(arr) {
  let ind = 0;
  for (let i = 1; i < arr.length; i++) {
    let firstElementOfUnsortedArray = arr[i];
    let indexToinsertAt = 0;
    for (let j = ind; j >= 0; j--) {
      if (arr[j] > firstElementOfUnsortedArray) {
        arr[j + 1] = arr[j];
      } else {
        indexToinsertAt = j + 1;
        break;
      }
    }
    arr[indexToinsertAt] = firstElementOfUnsortedArray;
    ind++;
  }

  return arr;
}
console.log(insertionSortSir(arr));

//Q1
//Given array place its last element at a position st
//all smaller elements are in left and all
//greater elements are in right
//multiple answers are there print any 1 of them
let arr5 = [7, 5, 1, 2, 4, 4, 9, 3];
//ans=> [1,2,4,5,7]  and [2,1,4,7,5]

function setLastDividerOfArray(arr) {
  let arr1 = [];
  let k = arr[arr.length - 1];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < k) {
      arr1.push(arr[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == k) {
      arr1.push(arr[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > k) {
      arr1.push(arr[i]);
    }
  }
  return arr1;
}

console.log(setLastDividerOfArray(arr5));
//TC-O(n)
//SC-O(n)

function divideInTwo(arr) {
  let n = arr.length;
  let k = arr[n - 1];
  let l = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] <= k){
      [arr[l],arr[i]]=[arr[i],arr[l]];
      l++;
    }
  }
  return arr;
}

console.log(divideInTwo(arr5));
// [
//   1, 2, 3, 5,
//   4, 4, 9, 7
// ]



//Quick Sort
//HW ✅

function divideInTwo(arr,low,high) {
  let pivot=arr[high];
  let i=low-1;
  for(let j=low;j<=high-1;j++){
    if(arr[j]<pivot){
        i++;
        [arr[i],arr[j]]=[arr[j],arr[i]]
    }
  }
  [arr[i+1],arr[high]]=[arr[high],arr[i+1]];
  return i+1;
}


function quickSort(arr,low=0,high=arr.length-1){
    if(low>=high){
        return;
    }
    let pi=divideInTwo(arr,low,high);
    quickSort(arr,low,pi-1);
    quickSort(arr,pi+1,high);
}

let arr7=[3,1,6,2,8,7];
(quickSort(arr7));
console.log(arr7);
//[ 1, 2, 3, 6, 7, 8 ]


//HW explore localeCompare() method for strings comparison✅

// localeCompare() in JavaScript is a method used to compare two strings according to 
// the rules of the current locale. Syntax: str1.localeCompare(str2). It returns -1 if 
// str1 comes before str2, 0 if they are equal, and 1 if str1 comes after str2. It is 
// useful for alphabetically sorting strings in a culturally aware way, considering accents, 
// cases, or different languages. Example: ["banana", "Apple", "cherry"].sort((a, b) => a.localeCompare(b)); 
// ["Apple", "banana", "cherry"]

arr = [3, 1, 6, 2, 8, 7, 4];
// arr.sort(); //sorts in ascending order
// arr.sort().reverse(); // sorts in descending order

//also sorts in ascending order
arr.sort((a, b) => a - b);
// console.log({ arr });

//also sorts in descending order
arr.sort((a, b) => b - a);
console.log({ arr });

arr = ["apple", "watermelon", "kiwi"];
arr.sort();
console.log(arr);
//[ 'apple', 'kiwi', 'watermelon' ]


let students = [
  { name: "Kiran", age: 20, rollNum: 10 },
  {
    name: "Ramesh",
    age: 20,
    rollNum: 7,
  },
  { name: "Suresh", age: 24, rollNum: 12 },
];

students.sort((a, b) => {
  if (a.age == b.age) return a.rollNum - b.rollNum;
  return a.age - b.age;
});
console.log(students);
/*
[
  { name: 'Ramesh', age: 20, rollNum: 7 },
  { name: 'Kiran', age: 20, rollNum: 10 },
  { name: 'Suresh', age: 24, rollNum: 12 }
]
*/

const nestedArr = [
  [1, 3],
  [2, 1],
  [1, 2],
  [2, 4],
];

nestedArr.sort((a, b) => a[0] - b[0]);
console.log({ nestedArr });
//{ nestedArr: [ [ 1, 3 ], [ 1, 2 ], [ 2, 1 ], [ 2, 4 ] ] }

/* H.w  ✅: sort the above array according to first value and then according to second value 
output should be:   
[
  [1, 2],
  [1, 3],
  [2, 1],
  [2, 4],
]
*/


// const nestedArr = [
//   [1, 3],
//   [2, 1],
//   [1, 2],
//   [2, 4],
// ];

nestedArr.sort((a,b)=>{
    if(a[0]==b[0])return a[1]-b[1];
    return a[0]-b[0];
})

console.log(nestedArr);
/*
[ [ 1, 2 ], [ 1, 3 ], [ 2, 1 ], [ 2, 4 ] ]
*/
