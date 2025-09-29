/*
1.A social media platform wants to introduce a new feature where it suggests usernames to its users based on their name and interests. The username should be unique and follow a specific pattern. The platform has decided to use Fibonacci numbers as the basis for generating these usernames. A Fibonacci number is a number in the sequence 0, 1, 1, 2, 3, 5, 8, 13, ... .

Write a recursive function to check if a given number is a Fibonacci number or not. The function should take an integer as input and return true if the number is a Fibonacci number and false otherwise.

For example, if the input is 13, the function should return true because 13 is a Fibonacci number. If the input is 14, the function should return false because 14 is not a Fibonacci number.

You can use any programming language of your choice to write this function.

Note: You can assume that the input will always be a non-negative integer.
*/

// your code here
function isFibonacci(n, i = 0, j = 1) {
    if (n == 0 || n == 1) return true;
    let sum = i + j;

    if (sum >= n) {
        if (sum == n) {
            return true;
        }
        else {
            return false;
        }
    }

    return isFibonacci(n, j, sum);
}
console.log(isFibonacci(0));
console.log(isFibonacci(1));
console.log(isFibonacci(8));
console.log(isFibonacci(80));
console.log(isFibonacci(100));
console.log(isFibonacci(89));
console.log(isFibonacci(145));
console.log(isFibonacci(144));

// true
// true
// true
// false
// false
// true
// false
// true


//Simpler method 
function isFibonacci(n, i = 0, j = 1) {
    if (n == 0 || n == 1) return true;
    let sum = i + j;

    if(sum==n)return true;
    if(sum>n)return false;

    return isFibonacci(n, j, sum);
}
console.log(isFibonacci(0));
console.log(isFibonacci(1));
console.log(isFibonacci(8));
console.log(isFibonacci(80));
console.log(isFibonacci(100));
console.log(isFibonacci(89));
console.log(isFibonacci(145));
console.log(isFibonacci(144));


/*2
A social media company, "ConnectMe", has a feature that allows users to search for their friends by name. 
The algorithm currently uses a simple linear search to find all occurrences of the searched name in the list
 of user names. However, as the number of users grows, this approach becomes inefficient. The company wants 
 to optimize this feature by developing a more efficient algorithm that can find all substrings of the searched
  name in the list of user names.

You have been tasked with writing a recursive function to find all substrings for a given string. For example,
 if the input string is "banana", your function should return ["b", "ba", "ban", "bana", "banan", "banana", "a",
  "an", "ana", ...].

Assume that you have access to a function get_user_names() which returns a list of strings representing user names.


Write a pseudo-code for the recursive function find_substrings(input_string) that finds all substrings for the
 given input string and returns them as a list.
*/
let a=[];
function find_substring(input_string,n=input_string.length-1,i=0){
   if(i==n){
     a.push(input_string[i]);
     return;
   }
   let k=i;
   while(k<=n){
      a.push(input_string.slice(i,k+1));
      k++;
   }
   find_substring(input_string,n,i+1);
}

(find_substring("banana"));
console.log(a);


//2nd Method 
// let a=[];
let ans=[];
function find_substring(input_string,i=0){
   if(i==input_string.length){
     return ans;
   }
   for(let j=i;j<input_string.length;j++){
    ans.push(input_string.slice(i,j+1));
   }
   find_substring(input_string,i+1);
}


(find_substring("banana"));
console.log(ans);


//3rd method
function find_substring2(str,ans=[],str1="",pass=0,i=0){
    if(pass==str.length){
        return ans;
    }
    for(let j=i;j<str.length;j++){
        str1+=str[j];
        ans.push(str1);
    }
    return find_substring2(str,ans,"",pass+1,i+1)
}
console.log(find_substring2("banana"));



/* 4
Tc of this function
function solve(n) {
  if (n <= 1) return;
  solve(n / 2);
  solve(n / 2);
  for (let i = 0; i < n; i++) console.log(i);
}
*/

// it will be O(n*logn)
// nlogn for 2 n/2 recursive calls will be n* logn (for dicvide by 2)
// n for for loop
// total tc equals n*logn then