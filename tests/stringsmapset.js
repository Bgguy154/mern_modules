/*
Given N strings and Q queries, for each query you will be given a string, your task is to print all the 
anagrams of the string from the given N strings. If no anagrams exist then print -1.

Note:- Given string may contain duplicated strings you should print it as many times as it occurs.
Input Format

First line of input contains a single integer N, second line of input contains N space separated strings.
 Third line of input contains a single integer Q, next Q line contains a single string each.
Output Format

For each query in a new line print the anagrams in lexicographical order separated by spaces.
Example 1

Input

6
cat tea pet tac act eat
4
cat
tca
eee
tea

output

act cat tac
act cat tac
-1
eat tea

*/

// your code here
function isAnagram(str1,str2){
    if(str1.length!=str2.length)return false;
    let map=new Map();
    for(let i of str1){
        map.set(i,(map.get(i)||0)+1);
    }
    for(let j=0;j<str2.length;j++){
        if(!map.has(str2[j])){
            return false;
        }
        map.set(str2[j],map.get(str2[j])-1);
    }
    for(let values of map.values()){
        if(values!=0){
            return false;
        }
    }
    return true;
}

let a=["cat","tea","pet","tac","act","eat"]
let b="cat";

function printAnagrams(a,b){
    let arr=[];
    for(let i=0;i<a.length;i++){
        if(isAnagram(b,a[i])){
            console.log(a[i]);
        }
        else{
            console.log("-1");
        }
    }
}
printAnagrams(a,b);