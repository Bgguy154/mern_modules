//Palindrome pair
//function to print all palindromic 
//substrings of string
//HW


//Time complexity
// Js is JIT(Just in time) Compiled language.
// meaning it is interpreted(primary feature) +compiled

//AIS(Automatic insertion of semicolons)
//is preinstalled in js engine

//Single statements-constant unit of time
//eg.
//const a=0;
// if(true){
//     console.log(o)
// }
// a+=3;

//Time and space complexities are approximation based only
//and not exact ammount of time or space taken by the 
//program.

//O(n)=O(2n)=O(n+k)=O(n/2)=O(n/k)=O(n/2k)=Big O
//k is not dependent on n

//O(1)=constant tc
//O(n)=linear tc
//O(n^2)=quadratic tc
//O(logn)=logarithmic tc

// Someexamples
while(n>0){
    n--;
}
//TC-O(n)

while(n>0){
    n-=2;
}
//TC-O(n)=O(n/2)

while(n>0){
    n*=2;
}
//Infinite loop

while(n>0){
    n/=2;
}
//TC-O(logn)base is 2

while(n>0){
    n/=5;
}
//TC-O(logn)base is 5

let m=1;
while(m<n){
    m*=2;
}
//TC-O(logn)base is 2

for(let i=0;i<n;i++){
    while(n>0){
        n/=2;
    }
}
//TC-O(logn) base is 2

for(let i=0;i<N;i++){
    if(i==N/2){
        let M=N;
        while(M>0){
            M/=2;
        }
    }
}
//TC-O(n+logn)=O(n)

//space complexity
//Auxiliary space
//-Variables take constant space
function sum(a,b,c){
    let arr=[a,b,c];
    let sum3=arr[0]+arr[1]+arr[2];
    return sum3;
}
//SC-O(3)=O(1)

//calc sum from 1 to n
function findSumTillN(N){
    let arr1=[];
    for(let i=0;i<N;i++){
        arr1.push(i+1);
    }
    let sum=0;
    for(let i=0;i<arr1.length;i++){
        sum+=arr1[i];
    }
    return sum;
}
//SC-O(N)

for(let i=0;i<N;i++){
    let  x=i;
    console.log(x);
}
//SC-O(1)


let arr2=[];
while(N>0){
    arr.push(N);
    N/=2;
}
//SC-O(logn)


let obj={
    a:1,
    b:2
}
if(obj.a==1){
    console.log("Hi")
}
if(obj && obj.aa && obj.aa.b==2){
      console.log("Hi")
}
else{
    console.log("Invalid property")
}

/*
In Js,only 6 values are considered false
0,false,null,undefined,NAN,("")(empty string)
else all is considered true
*/

console.log(Number("123"));
console.log(String(123));
console.log(Boolean(123));
// 123
// 123
// true

//x===NaN is always false even if x=NaN itself 

//for logical And(&&)=in short circuiting first falsy value
//or last truthy value will be output

//for logical or = first truthy or last falsy value

console.log(+String(123));
//123
//becomes a number


//SEARCHING
//make array of 100 elements 1 to 100
//and find index of 57 there
let arr5=[];
for(let i=0;i<100;i++){
    arr5[i]=i+1;
}
function searchFiftySeven(arr5){
for(let i=0;i<arr5.length;i++){
    if(arr[i]==57){
        console.log(i);
    }
}
}
searchFiftySeven(arr5);
//O(n)


//arr=[1,2,4,4,6,6,6,8];
//find last index of 6
//find first index of 6
let arr6=[1,2,4,4,6,6,6,8];
function firstAndLastIndex(arr){
    let n=arr.length;
    for(let i=n-1;i>=0;i--){
        if(arr[i]==6){
            console.log(i);
            break;
        }
    }
    for(let i=0;i<n;i++){
        if(arr[i]==6){
            console.log(i);
            break;
        }
    }
}

firstAndLastIndex(arr6);


//Using binary search
//Find square root of perfect square number using binary search
//search space= 0 to n


//