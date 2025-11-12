//Filter elements even
let arr1=[1,2,3,4,5];
let num=arr1.filter(num=>num%2==0);
console.log(num);


//Armstrong Numbers
//HW

//perfect squares have odd number of divisors
//all other numbers have even number of divisors

//Prime numbers
//HW using pow and sqrt


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
//which angled triangle using switch case