//recursion day 3
//given a parenthesis sequence determine if its valid or not
let s1 = "))()(())(((())))"; //invalid
let s2 = "())()"; //invalid
let s3 = "())(())("; //invalid

function isValidParenthesis(str) {
  if (str.length % 2 == 1) return false;
  let count1 = 0,
    count2 = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == ")") {
      count1++;
      if (count1 > count2) {
        return false;
      }
    } else count2++;
  }
  return count1 == count2 ? true : false;
}

console.log(isValidParenthesis(s1));
console.log(isValidParenthesis(s2));
console.log(isValidParenthesis(s3));


//use 1 variable only
// your code here
function isValidParenthesis2(str) {
  if (str.length % 2 == 1) return false;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == ")") {
      if (count > 0) {
        count--;
      } else {
        return false;
      }
    } else count++;
  }
  return count == 0 ? true : false;
}

console.log(isValidParenthesis2(s1));
console.log(isValidParenthesis2(s2));
console.log(isValidParenthesis2(s3));


//Generate all parenthesis of length N
let allValidParenthesis=[];
function generateParenthesis(N,str="",ind=0,op=0,cl=0){
    if(op<cl)return;
    if(ind==N){
        if(op==cl){
            allValidParenthesis.push(str);
        }
        return allValidParenthesis;
    }
    generateParenthesis(N,str+'(',ind+1,op+1,cl);
    generateParenthesis(N,str+')',ind+1,op,cl+1);
}
generateParenthesis(4);
console.log({allValidParenthesis})
//{ allValidParenthesis: [ '(())', '()()' ] }

generateParenthesis(6);
console.log({allValidParenthesis})
//{
//   allValidParenthesis: [ '((()))', '(()())', '(())()', '()(())', '()()()' ]
// }
//Total valid + invalid parenthesis =2^n
//Tc-O(2^n)
// SC-O(n)



//String permutations
let s='abc'
let arr=[];
function stringPermutations(str,j=0){
  if(j==str.length-1){
    arr.push(str)
    return;
  }
  for(let i=j;i<str.length;i++){
    let a=swapStr(str,j,i);
    stringPermutations(a,j+1);
  }
}

function swapStr(str,i,j){
    let arr=str.split('');
    [arr[i],arr[j]]=[arr[j],arr[i]];
    str=arr.join("");
    return str;
}
stringPermutations(s);
console.log(arr);
// TC-O(n!)
// [ 'abc', 'acb', 'bac', 'bca', 'cba', 'cab' ]