//Sorting Day 1

//Data is arranged in a specific manner s.t we can
//know and make decisions about data.

// Q1
let arr1 = [3, 2, 1];
function sortArray(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
    }
  }
}
sortArray(arr1);
console.log(arr1);
//wrong approach
//hw why

//HW
//read about avg tc
//Frequency array approach
//with +ve + -ve numbers inclusive

//Std Algorithms
//Bubble Sort
let arr2 = [1, 3, 2, 4, 5];
function bubbleSort(a) {
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] > a[j]) {
        [a[i], a[j]] = [a[j], a[i]];
      }
    }
  }
}
bubbleSort(arr2);
console.log(arr2);
//correct bubble sort
//Tc-O(n^2)
//SC-O(1)

function bubbleSort(a) {
  for (let i = a.length - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (a[i] > a[j]) {
        [a[i], a[j]] = [a[j], a[i]];
      }
    }
  }
}
//correct but is not bubble sort

// let arr2=[1,3,2,4,5];

function bubbleSort(a) {
  let swaps = false;
  for (let i = a.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (a[j + 1] < a[j]) {
        swaps = true;
        [a[j + 1], a[j]] = [a[j], a[j + 1]];
      }
    }
    if (!swaps) break;
  }
}

bubbleSort(arr2);
console.log(arr2);
//bubble sort
//[ 1, 2, 3, 4, 5 ]

//Stable sort
//Bubble sort is stable sort
//order of duplicate elements doesnt change
// hw dry run

//Inplace Sorting is sorting the same array without using
//any extra space
//Bubble sort is Inplace Sorting too

//Bubble sort Summary
//In 1 pass swap adj ele if curr>next ele
//After 1st pass,greatest ele will be at last position
// ..After each Pass 1 element will be placed at its correct sorted position  from last
//tc best O(n) avg-O(n^2) worst-O(n^2)
//sc-O(1)
//stable sorting(equal elements maintain order)+
//inplace sorting(not using any extra spaces)



//Selection Sort
//Hw implementation
//HW selection sort summary

console.log(1<2<3);
console.log(3>2>1);//false
// because 3>2 =true=1>1 false