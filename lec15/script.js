//Recursive function to find sum of first N natural numbers
function sumOfNNaturalNumbers(n){
    if(n<=0){
        return 0;
    }
    return n+sumOfNNaturalNumbers(n-1);
}
console.log(sumOfNNaturalNumbers(10))
//TC-O(n)
//SC-O(n)
//sum of negative numbers will return 0


// function to calculate gcd
//method 1
function gcd(a,b){
    if(a==b){
        return a;
    }
    if(a==0 || b==0){
        return Math.max(a,b);
    }
    return gcd(b%a,a);
}
console.log(gcd(0,2));
console.log(gcd(8,32));
console.log(gcd(30,30));
console.log(gcd(90,54));
console.log(gcd(98,147));
console.log(gcd(1,234));

//method 2
//using while loop
//Iterative method
function gcd2(a,b){
    while(a!=0){
        let temp=a;
        a=b%a;
        b=temp;
    }
    return b;
}
console.log(gcd2(0,2));
console.log(gcd2(8,32));
console.log(gcd2(30,30));
console.log(gcd2(90,54));
console.log(gcd2(98,147));
console.log(gcd2(1,234));


//method 3
// ..low code recursion
function gcd(a,b){
    if(a==0){
        return b;
    }
    return gcd(b%a,a);
}
console.log(gcd(0,2));
console.log(gcd(8,32));
console.log(gcd(30,30));
console.log(gcd(90,54));
console.log(gcd(98,147));
console.log(gcd(1,234));
// 2
// 8
// 30
// 18
// 49
// 1


//GCD of more than 2 numbers
//gcd(a,b,c)=gcd(gcd(a,b),c)=gcd(a,gcd(b,c))=gcd(b,gcd(a,c))
//gcd of array
let arr=[3,12,18,6,15,27];
let gcdArr=0;

for(let i=0;i<arr.length;i++){
    gcdArr=gcd(gcdArr,arr[i]);
}
console.log(gcdArr);//3

//this was hw
//fibonacci using recursion
function fibonacciNumbers(n){
    if(n==1 || n==2){
        return n-1;
    }
    return fibonacciNumbers(n-1)+fibonacciNumbers(n-2);
}
console.log(fibonacciNumbers(1))
console.log(fibonacciNumbers(3))
console.log(fibonacciNumbers(4))
console.log(fibonacciNumbers(6))
//0 1 1 2 3 5 8 
//Tc-O(2^n)
//SC-O()

//NOTE
//time and space ki calculation shouldnt be more than 10^7 /10^8

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
//SC-O()

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


//using Power exponentialization method 
//recursion method 3
//do both
//if else
//direct