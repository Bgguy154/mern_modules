//Armstrong numbers
function armStrong(a,b){
   for(let i=a;i<b;i++){
    let numStr=i.toString();
    let count=numStr.length;
    let arm=0;
    for(let j=0;j<count;j++){
        let digit=Number(numStr[j]);
        arm+=digit**count;
    }
     if(arm==i){
        console.log(arm);
     }
   }
}

armStrong(1,165)



//Prime numbers
//HW using pow and sqrt
function isPrime(n) {
    if (n < 2) return false; // 0 and 1 are not primes

    // check divisors up to sqrt(n)
    let limit = Math.floor(Math.sqrt(n));
    //using pow
    //let limit=Math.floor(Math.pow(n,0.5))
    for (let i = 2; i <= limit; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(isPrime(87))


//Filter elements even
let arr1=[1,2,3,4,5];
let num=arr1.filter(num=>num%2==0);
console.log(num);



// 1
// 12
// 234
// 3456
// 45678
//if row=i that row i elemnts
//each row has consecutive nos
//each row has i-1 starting no.

//write in function
function printPattern(){
let n=5;
console.log("1");
    for(let j=2;j<=n;j++){
        let outputStr="";
        for(let k=j-1;k<j-1+j;k++){
            outputStr+=k;
        }
      console.log(outputStr)
    }
}
printPattern();


//studenntgrade classification using switch case
function grade(N) {
    let result;

    switch (true) {
        case (N > 90):
            result = "Excellent";
            break;
        case (N > 80 && N <= 90):
            result = "Good";
            break;
        case (N > 70 && N <= 80):
            result = "Fair";
            break;
        case (N > 60 && N <= 70):
            result = "Meets Expectations";
            break;
        default:
            result = "Below Expectations";
    }

    return result;
}

// Example usage:
console.log(grade(95)); // Excellent
console.log(grade(85)); // Good
console.log(grade(75)); // Fair
console.log(grade(65)); // Meets Expectations
console.log(grade(50)); // Below Expectations




function triangleType(a, b, c) {
    let largest = Math.max(a, b, c);
    let sumSquares = a * a + b * b + c * c;
    let otherSquares = sumSquares - largest * largest;

    let result;

    switch (true) {
        case (largest * largest === otherSquares):
            result = 2; // right-angled
            break;
        case (largest * largest > otherSquares):
            result = 3; // obtuse-angled
            break;
        default:
            result = 1; // acute-angled
    }

    return result;
}

console.log(triangleType(3, 4, 5)); // 2 (right) - 5² = 25, 3² + 4² = 25
console.log(triangleType(2, 2, 3)); // 3 (obtuse) - 3² = 9, 2² + 2² = 8, so 9 > 8
console.log(triangleType(3, 5, 7)); // 3 (obtuse) - 7² = 49, 3² + 5² = 34, so 49 > 34
console.log(triangleType(3, 4, 4)); // 1 (acute) - 4² = 16, 3² + 4² = 25, so 16 < 25
