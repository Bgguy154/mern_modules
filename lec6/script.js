//Secondary diagonal pseudocode
// -Initialize variable with 0 to store sum of diagonal elements
// -It is observed that all secondary diagonal elements 
// lie on indices whose sum of row and col =n-1 where n is numberof rows
// we can loop from 1st to last index and find sum of diagonal by adding arr[i][n-i-1] 
// to sum as this is simplified from above formula


let A=[1,4,3,7,9];
A=A.slice(0,A.length-1);//this is not applicable if A is const
// A.pop();
//same as A.splice(-1) and console.log(A.slice(0,A.length-1)) and 
// A.splice(arr.length-1,1)
console.log(A);//[ 1, 4, 3, 7 ]

//using loop
A.length=A.length-1;

//IMP   IMP  IMP
//use while loop when the end is not known
//use for loop when it is known


//Delete element from start
// let ans=[1,2,3,4];
//1st method
// ans.shift();
// console.log(ans);

//2nd method
// ans.splice(0,1);
// console.log(ans);

// 3rd method
// ans=ans.slice(1);
// console.log(ans);

//4th method 
//using loops
let arr=[2,3,4,5,6,7]
console.log(arr);
console.log(arr.length);//6
for(let i=1;i<arr.length;i++){
    arr[i-1]=arr[i];
}
arr.length-=1;
console.log(arr);
console.log(arr.length);//5



//HW
  //do all what we did for deletion for insertion
  //1.insert at start
  //2.insert at end

//Rotations of array
//A=[10.20.30.40.50]
//1.Rotate array in right (clockwise) by 1
//   -[50,10,20,30,40]

//2.Rotate array in left(anticlockwise) by 1
//   -[20,30,40,50,10]

//1.solution(1st method)
let B=[10,20,30,40,50];
let s=B[B.length-1];
for(let i=B.length-1;i>0;i--){
    B[i]=B[i-1];
}
B[0]=s;
console.log(B);
//Other methods 
//HW-pop,push,unshift,shift 
//never change a future element that we are going to use


//2.solution
let C=[10,20,30,40,50];
let t=C[0];
for(let i=1;i<C.length;i++){
    C[i-1]=C[i];
}
C[C.length-1]=t;
console.log(C)


//rotate array clockwise by k eleements
//rotate array anticlockwise by k eleements
