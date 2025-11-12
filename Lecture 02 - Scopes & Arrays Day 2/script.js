/*in js,arrays can be initialized with given size 
ifonly 1 argument(of type Number) is passed an it creates empty spaces for all elements
and they are not undefined but EMPTY
*/

const arr=new Array(10);
console.log(arr)

const arr2=new Array("10")
console.log(arr2)


//more array methods
const teams=["CSK","RCB","MI","SRH","GT"]
//indexOf(value)
console.log(teams.indexOf("SRH"))
console.log(teams.indexOf("ABS"))//returns -1



//replace gt with lsg
let h=teams.indexOf("GT")
if(h!= -1){
teams[h]="LSG"
}
console.log(teams)

//includes() tells if value exists 
//in array or not return boolean 
console.log(teams.includes("SRH"))
console.log(teams.includes("SRK"))

//using includes
if(teams.includes("KKR")){
    let kkrIndex=indexOf("KKR")
    teams[kkrIndex]="LSG"
}


//concat() function
const otherTeams=["RR"]
const otherTeams2=["RR1","SRH2"]
const allTeams=teams.concat(otherTeams,otherTeams2)
console.log(allTeams)
console.log(teams)

//find factorial of number input5

function factorialNumber(n){
    if(n==1 || n==0)return 1
    return n*factorialNumber(n-1);
}
console.log(factorialNumber(5))
//given array[2,10,20,14] r=2
//find ncr of each element of array
// step1-write function to caluclate factorialNumber
// ste2 write function to calculate ncr according to formula
// step3-3rd function for printing array 

let result=[];
const arr3=[4,10,6,8]
const r=4
for(let num of arr3){
    result1=factorialNumber(num)/(factorialNumber(r)*factorialNumber(num-r))
    result.push(result1)
}
console.log(result)


console.log(Number(" "))//0



//avg of array
//[4,8,3,5]
//print avg upto 6 decimal places

function averageOfArray(sum,size){
  return sum/size;
}
const arr4=[4,8,3,5];
let sum=0;
let size=arr4.length
for(let num of arr4){
    sum+=num
}
avg=averageOfArray(sum,size).toFixed(6);
console.log(avg)



//last occurence of an element in unsorted array
function findIndex(key, arr) {
  for(let i=arr.length-1;i>=0;i--){
    if(arr[i]===key){
      console.log(i);
      return;
    }
  }
}
const arr5=[23,67,54,6,8]
findIndex(54,arr5)


function ArrayProblem1(n, arr) {
  // Write code here
  let maxvalue=-Infinity;
  let maxindex=0;
  for(let i=0;i<n;i++){
    if(maxvalue<arr[i]){
      maxvalue=arr[i]
      maxindex=i
    }
  }
  return maxindex
}

const arr6=[1,-10,-10,2,-10];
let res=ArrayProblem1(5,arr6)
console.log(res)

//do functions 22 july and arrays 28 july all