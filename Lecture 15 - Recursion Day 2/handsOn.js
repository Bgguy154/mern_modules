//a^b
//method 1
function aPowerb(a,b){
let p=1;
while(b--){
  p*=a;
}
console.log(p);
}
aPowerb(8,3);
aPowerb(2,10);
// 512
// 1024
//TC-O(b)
//SC-O(b)

//using recursion method 2
function aPowerb2(a,b){
    if(b==0){
        return 1;
    }
    return a*aPowerb2(a,b-1);
}
console.log(aPowerb2(8,3));
console.log(aPowerb2(2,19));
// 512
// 524288
//Tc-O(O(b))
// Space Complexity

// The space complexity of the aPowerb2 function is O(b).

// This is because each recursive call adds a new frame to the call stack. The function calls itself with b, then b−1, and so on,
//  until it reaches the base case of 0. This means the call stack will have a depth of b. The space required to store these stack 
//  frames is directly proportional to the value of the exponent, b. The comment's assertion of O(1) (constant space) is incorrect;
//   that would only apply to an iterative (loop-based) implementation of the same algorithm.


//using Power exponentialization method 
//recursion method 3
//direct

function powerexponential(a,b){
    if(b==0)return 1;
    let temp=powerexponential(a,Math.floor(b/2));
    return temp*temp*a**(b%2);
}
// console.log(powerexponential(5,3));
// console.log(powerexponential(5,1));
// console.log(powerexponential(2,6));
// console.log(powerexponential(5,0));
// Time Complexity

// The time complexity of the powerexponential function is O(logb).

// The function uses the method of Exponentiation by Squaring to calculate ab. Instead of multiplying a by itself b times, it recursively calculates the result for b/2.
//  This process halves the exponent in each step, 
// similar to a binary search.
//  The number of steps required to reach the base case (b=0) is proportional to the number of times you can divide b by 2, which is the definition of a logarithm.

// Space Complexity

// The space complexity of the powerexponential function is also O(logb).

// The space required is determined by the maximum depth of the recursion call stack. Because the exponent b is halved in each recursive call,
//  the depth of the recursion is logarithmic. Therefore, the space used by the function's call stack is also proportional to the logarithm of the exponent

//if else
//method 4
function powerexponential2(a,b){
    if(b==0)return 1;
    let temp=powerexponential2(a,Math.floor(b/2))
    if(b%2!=0){
        return a*temp*temp;
    }
    else{
        return temp*temp;
    }
}
console.log(powerexponential2(5,3));
console.log(powerexponential2(5,1));
console.log(powerexponential2(2,6));
console.log(powerexponential2(5,0));
// 125
// 5
// 64
// 1