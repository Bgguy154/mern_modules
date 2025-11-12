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
function quickSort(arr,low=0,high=arr.length-1){
    if(low>=high){
        return ;
    }
    let n=arr.length;
    let pivot=arr[n-1];
    arr=divideInTwo(arr,low,high);
    let k=arr.indexOf(pivot);
    quickSort(arr,low,k-1);
    quickSort(arr,k,high  );
}

let arr7=[3,1,6,2,8,7];
console.log(quickSort(arr7))
//HW


//sort() method
let arr2=[3,1,6,2,8,7,4];
arr2.sort()//sorts in ascending order
arr2.sort().reverse();//descending order
arr2.sort((a,b)=>a-b);//ascending order
arr2.sort((a,b)=>b-a);//descending order

//HW explore localeCompare() method for strings comparison

let students=[
    {name:"Kiran",age:32},
    {name:"Rajaji",age:23},
    {name:"Anu",age:1}
];
