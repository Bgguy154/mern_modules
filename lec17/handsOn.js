//Recursion Day3

//Q1
//Compute tc of this function

function recursion(n){
  if(n==0)return;
  recursion(n/4);
  recursion(n/4);
  recursion(n/4);
  recursion(n/4);

  for(let i=0;i<n;i++){
    console.log(i*i);
  }
}
//HW TC
//Explanation
// Recursive calls
// For each n, the function calls itself 4 times, but on a smaller input (n/4).

// Loop
// After the recursive calls, it runs a loop from 0 to n-1, which takes n steps.

// Total work

// Each level of recursion does about n work.

// How many levels? Since the size reduces by /4 each time, it takes about log₄(n) ≈ log(n) levels.

// So total =

// n+n+n+…(log⁡n times)=n⋅log⁡n
// n+n+n+…(logn times)=n⋅logn

// The function does about n work at each level, and there are about log n levels, so the total time is:

// O(nlog⁡n)
	​



//print pattern n=5
// A 
// AB 
// BCD 
// CDEF 
// DEFGH 
let c=0;
for(let i=1;i<=5;i++){
        let s="";
        for(let j=1;j<=i;j++){
            s+=String.fromCharCode(65+c);
            c++;
        }
        c=i-1;
        console.log(s);
}



//Hollow Diamond Question
for(let i=1;i<=4;i++){
  if(i==1){
    let s="";
    s+=" ".repeat(4-1);
    s+="*";
    console.log(s);
  }
  else{
    let s="";
    s+=" ".repeat(4-i);
    s+="*";
    s+=" ".repeat(i*2-3);
    s+="*";
    console.log(s);
  }
}

for(let i=3;i>=1;i--){
  if(i==1){
    let s="";
    s+=" ".repeat(4-1);
    s+="*";
    console.log(s);
  }
  else{
    let s="";
    s+=" ".repeat(4-i);
    s+="*";
    s+=" ".repeat(i*2-3);
    s+="*";
    console.log(s);
  }
}


//without repeat HW
for (let i = 1; i <= n; i++) {
  let s = "";
  for (let j = 0; j < n - i; j++) s += " ";     // spaces
  s += "*";
  if (i > 1) {
    for (let j = 0; j < i * 2 - 3; j++) s += " "; // inner spaces
    s += "*";
  }
  console.log(s);
}

for (let i = n-1; i >=1; i--) {
  let s = "";
  for (let j = 0; j < n - i; j++) s += " ";     // spaces
  s += "*";
  if (i > 1) {
    for (let j = 0; j < i * 2 - 3; j++) s += " "; // inner spaces
    s += "*";
  }
  console.log(s);
}

//Question on map and set HW
//length of longest substring with distinct characters
// your code here
//length of longest substring with distinct characters

let s="abgdfsasdfer";
let substring=[];
for(let i=0;i<s.length;i++){
    let str="";
    for(j=i;j<s.length;j++){
       str+=s[j];
       substring.push(str);
    }
}
console.log(substring)
//gives all substrings
let set=new Set();
for(let i=0;i<substring.length;i++){
  let char=new Set(substring[i]);
  if(char.size==substring[i].length){
    set.add(substring[i]);
  }
}
console.log(set);
//set of substrings distinct characters
let count=0;
for(let num of set){
    count=Math.max(count,num.length);
}
console.log(count);


//Alternate method (Without substring array)