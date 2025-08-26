//101001=>32+8+1=41(bin to dec)
/* previous lecture
-freq array
-prefix sum
-all pairs with dif k
-toFixed
-plus minus
*/

//scope
x=10//global scope(variables declared globally ,can be accessed everywhere)
console.log(x)
function sayHi() {
for(let i=0;i<x;i++) console.log("HI",i)
}
sayHi()

//let variable=block scope (same for const)
/*{
   let x=5
   console.log(x)//5   
}
   console.log(x)//not defined error
   -if this variable is declared globally i.e not defined in any block 
   i.e outside any of the blocks,it will behave as global variable and will have global scope.
   -can be accessed everywhere
*/


//var not block scope but is function scope
{
    var y1=98
    const y2=87
    console.log(y1)
    console.log(y2)
}
console.log("var outside block scope",y1)
// console.log("const outside block scope",y2)//not defined eror


//Nested scope
function nestedScopes(){
  let value=145;
  for(let i=0;i<5;i++){
    if(i%2==0){
        let value2=35;
        console.log(value,value2)
    }
  }
}
nestedScopes()



//Nested arrays
let arr=[1,[1,2,3],4,"50","class"]//mixed nested array
console.log(arr[4][3])//s
console.log(arr[0])//1

// let arr2=[[2,5],[3,6],[1,4],[6,3]];
// for(let i=0;i<4;i++){
//     for(let j=0;j<2;j++){
//         console.log(arr2[i][j])
//     }
// }

//using undefined(as a variable 
//prints each element of array in separate line
let arr3=[1,[1,2,3],4,5,[6,95,72],80];
for(let i=0;i<arr3.length;i++){
    if(arr3[i].length==undefined){
        console.log(arr3[i])
    }
    else{
        arr3[i]=arr3[i].toString()
        console.log(arr3[i])
   }
}


//method 2 using typeof keyword
for(let i=0;i<arr3.length;i++){
    if(typeof(arr3[i])=="number")
    console.log(arr3[i])
else{
    for(let j=0;j<arr3[i].length;j++){
    console.log(arr3[i][j])
    }
}
}


//method 3 isarray 
//returns boolean value determining if variable is in array or not
for(let i=0;i<arr3.length;i++){
    if(!Array.isArray(arr3[i])){
        console.log(arr3[i])
    }
    else{
        arr3[i]=arr3[i].toString()
        console.log(arr3[i])
    }
}



//write function that takes nested array as argument and tells if this nested array is a matrix or not 
let arr4=[1,2,3,4]
let arr5=[[1,2],[3,4]]
let arr6=[[3,2],[4,5,6]]

function isMatrix(arr){
    if(!Array.isArray(arr) || !Array.isArray(arr[0])){
        return false;
    }
    let col=arr[0].length;
    for(let i=1;i<arr.length;i++)
        if(arr[i].length!=col)
            return false;

    return true;
}

console.log(isMatrix(arr4));
console.log(isMatrix(arr5));
console.log(isMatrix(arr6));


//more 1 liners
const arr7=[" "]
console.log(Number(arr7[0]))//0  (same if arr7=[""])
console.log(4/arr7[0]*1)//Infinity
console.log(-4/arr7[0]*1)//-Infinity



//write function to calculate product of sum of each rows
let arr8=[[1,2,3],[4,5,6],[7,8,9]]
let product=1;
for(let i=0;i<arr8.length;i++){
    let sum=0;
    for(let j=0;j<arr8[i].length;j++){
        sum+=arr8[i][j]
    }
    product*=sum;
}
console.log(product)



//write function to calculate sum of nested arrays
let totalSum=0;
for(let i=0;i<arr8.length;i++){
    for(let j=0;j<arr8[i].length;j++){
        totalSum+=arr8[i][j]
    }
}
console.log(totalSum)



//subarrays
//[1,2,3,4,5]
// [1][2][3][4][5]  len 1
// [1,2][2,3][3,4][4,5]  len 2
// [1,2,3][2,3,4][3,4,5] len 3
// [1,2,3,4][2,3,4,5]   len 4
// [1,2,3,4,5]          len 5
// total subarrays=(n*(n+1))/2

// 1234
// 1           2          3       4        5
// 12          23         34      45
// 123         234        345
// 1234        2345
// 12345


//hw today
//print all subarrays
let arr9=[1,2,3,4];
for(let i=0;i<arr9.length;i++){
    for(let j=i+1;j<=arr9.length;j++){
        console.log(arr9.slice(i,j));
    }
}


//altenate method
for(let i=0;i<arr9.length;i++){
    let subarray=""
    for(let j=i;j<arr9.length;j++){
        subarray+=arr9[j]+" ";
        console.log(subarray)
    }
}


function totalSubarraySum(arr){
let total=0;
//print sum of all subarrays
for(let i=0;i<arr9.length;i++){
    sum=0;
    for(let j=i;j<arr9.length;j++){
        sum+=arr[j];
        total+=sum;
    }
}
console.log(total)

//efficient way O(n)
let totalSumSubarray=0
for(let i=0;i<arr9.length;i++){
  totalSumSubarray+=arr9[i]*(i+1)*(arr9.length-i);
}
console.log(totalSumSubarray)
}

totalSubarraySum(arr9)


