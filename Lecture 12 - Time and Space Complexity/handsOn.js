let obj={
    a:1,
    b:2
}
if(obj.a==1){
    console.log("Hi")
}
//Hi

if(obj && obj.aa && obj.aa.b==2){
      console.log("Hi")
}
else{
    console.log("Invalid property")
}
//Invalid property

// if(obj && obj.aa.b==2 && obj.aa.b){
//       console.log("Hi")
// }
// else{
//     console.log("Invalid property")
// }
// if(obj && obj.aa.b==2 && obj.aa.b){
//                  ^

// TypeError: Cannot read properties of undefined (reading 'b')

const x=true && 45;
const y=x==45&&34;
console.log({x,y});
// { x: 45, y: 34 }

//HW
//How do u write NAN in Js

console.log(Number("123"));
console.log(String(123));
console.log(Boolean(123));
// 123
// 123
// true
console.log(+String(123));
//becomes number
//123


//SEARCHING
//make array of 100 elements 1 to 100
//and find index of 57 there
let arr5=[];
for(let i=0;i<100;i++){
    arr5[i]=i+1;
}
function searchFiftySeven(arr5){
for(let i=0;i<arr5.length;i++){
    if(arr5[i]==57){
        console.log(i);
    }
}
}
searchFiftySeven(arr5);

//arr=[1,2,4,4,6,6,6,8];
//find last index of 6
//find first index of 6
let arr6=[1,2,4,4,6,6,6,8];
function firstAndLastIndex(arr){
    let firstIndexOf6=-1;
    let lastIndexOf6=-1;
    let n=arr.length;
    for(let i=n-1;i>=0;i--){
        if(arr[i]==6){
            firstIndexOf6=i;
            console.log(i);
            break;
        }
    }
    if(firstIndexOf6==-1){
        console.log(-1);
    }
    for(let i=0;i<n;i++){
        if(arr[i]==6){
            lastIndexOf6=i;
            console.log(i);
            break;
        }
    }
    if(lastIndexOf6==-1){
        console.log(-1);
    }
}

firstAndLastIndex(arr6)
//TC-O(n)

//Palindrome pair
//function to print all palindromic 
//substrings of string
let s="123454321"
let s1="nayan"
function printPalindromicSubStrings(str){
    for(let i=0;i<str.length;i++){
        for(let j=i;j<str.length;j++){
            let a=str.slice(i,j+1);
            if(palindromic(a)){
                console.log(a);
            }
        }
    }
}

function palindromic(str){
    let i=0;
    let j=str.length-1;
    while(i<j){
        if(str[i]!=str[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
}
let r1=printPalindromicSubStrings(s);
let r2=printPalindromicSubStrings(s1);
console.log(r1);
console.log(r2);


//DO using single for loop
//HW
//arr=[1,2,4,4,6,6,6,8];
//find last index of 6
//find first index of 6
function firstAndLastIndex2(arr){
    let firstIndex=-1;
    let lastIndex=-1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==6){
            if(firstIndex==-1){
            firstIndex=i;
            }
                    lastIndex=i;
           }
    }
    console.log(firstIndex);
    console.log(lastIndex);
}
firstAndLastIndex2(arr6)
