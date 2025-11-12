//Camelcase
// The first word starts lowercase
// Each subsequent word starts with an uppercase letter
// No spaces or underscores are used

//Snakecase
// All letters are lowercase
// Words are separated by an underscore _


function toCamelCase(s){
    let s1="";
    let n=s.length;
    for(let i=0;i<n;i++){
        if(s[i]===' '){
            s1+=s[i+1].toUpperCase();
            i++;
        }
        else{
            s1+=s[i];
        }
    }
    return s1;
}
let str="student first name";
let s2=toCamelCase(str);
console.log(s2);
//TC-O(n)
//SC-O(n)


//SnakeCase
function toSnakeCase(s){
    let n=s.length;
    let s1=""
    for(let i=0;i<n;i++){
        if(s[i]==" "){
            s1+="_"
        }
        else{
            s1+=s[i]
        }
    }
    return s1;
}
let s3=toSnakeCase(str);
console.log(s3);
//TC-O(n)
//SC-O(n)


//Alternate snakeCase
function snakeCase2(s){
    return s.trim().replaceAll(" ","_")
}
let s4=snakeCase2(str);
console.log(s4)
//TC-O(n)
//SC-O(n)


//Cases using objects
const caseObject={
    toCamelCase:function(s){
        let s1 = "";
    let n = s.length;
    for (let i = 0; i < n; i++) {
      if (s[i] === " ") {
        s1 += s[i + 1].toUpperCase();
        i++;
      } else {
        s1 += s[i];
      }
    }
    return s1;
    },
    toSnakeCase:function(s){
      let n = s.length;
    let s1 = "";
    for (let i = 0; i < n; i++) {
      if (s[i] === " ") {
        s1 += "_";
      } else {
        s1 += s[i];
      }
    }
    return s1;  
    }
}
let s5="Tanmay His kite";
console.log(caseObject.toCamelCase(s5));
console.log(caseObject.toSnakeCase(s5));
//TC-O(n)
//SC-O(n)



//1.reverse a string
//Without inbuilt function
let str1="IamGoat";
function revStr(s){
let d=""
for(let i=s.length-1;i>=0;i--){
    d+=s[i];
}
console.log(d)
}
revStr(str1);
//TC-O(n)
//SC-O(n)

//Alternate way
function revStr2(s){
    let d="";
    for(let i=0;i<s.length;i++){
        d+=s[s.length-i-1];
    }
    return d;
}
let g=revStr2(str1);
console.log(g);
//TC-O(n)
//SC-O(n)

//using inbuilt function
console.log(str1.split("").reverse().join(""))
//TC-O(n)
//SC-O(n)
// Breakdown:
// split("") → O(n) + O(n) space (creates array of chars)
// reverse() → O(n)
// join("") → O(n) + O(n) space (creates string back)
// So overall:
// Time Complexity = O(n) ✅
// Space Complexity = O(n) ❌ (not O(1))
// Because you’re still allocating:
// an array of size n (split)
// a string of size n (join)
// So SC is O(n), not O(1).



//2 Check palindrome
let str2="NayaN";
function isPalindrome(s){
    let start=0;
    let end=s.length-1;
    while(start<=end){
        if(s[start]!==s[end]){
            console.log("Not palindrome");
            return;
        }
        start++;
        end--;
    }
    console.log("Palindrome")
}
isPalindrome(str1);
isPalindrome(str2);
//TC-O(n)
//SC-O(1)

//Alternate method
//using rev stored
//HW
function isPalindrome3(a,b){
    if(a===b){
        return true;
    }
    return false;
}
console.log(isPalindrome3(str1,g));
//TC-O(n)
//SC-O(n)

//Alternate method
function isPalindrome2(s){
    let n=s.length;
    for(let i=0;i<Math.floor(n/2);i++){
        if(s[i]!==s[n-i-1]){
            return false;
        }
    }
    return true;
}
console.log(isPalindrome2(str1))
console.log(isPalindrome2(str2))
//TC-O(n)
//SC-O(1)

//3 Count Number of words
function numberOfWords(s){
    s.trim();
    let count=0;
    for(let i=0;i<s.length;i++){
        if(s[i]==' '){
            count++;
        }
    }
    console.log(count+1);
}
numberOfWords(str);
//TC-O(n)
//SC-O(1)

//Alternate method
function numberOfWords2(s){
    return s.trim().split(" ").length;
}
console.log(numberOfWords2(str))
//TC-O(n)
//SC-O(n)



//4 Longest Word In String
function longestWordInString(s){
    s.trim();
    let t=s.split(" ");
    //t becomes array
    let maxCount=0;
    for(let i=0;i<t.length;i++){
        if(maxCount<t[i].length){
       maxCount=t[i].length;
       maxWord=i;
}
    }
    console.log(t[maxWord]);
}
longestWordInString(str);
//TC-O(n)
//SC-O(n)

//Alternate method
function largestWordInString(s){
    s=s.trim();
    s=s.split(" ");

    let largetstWord=s[0];
    for(word of s){
        if(word.length>largetstWord.length){
            largetstWord=word;
        }
    }
    console.log(largetstWord)
}
largestWordInString(str)
//TC-O(n)
//SC-O(n)


//5 Print 1st nonrepeating character in string
let str3="jhjkihkuiouoj"
function noRepeatFirst(s){
    for(let i=0;i<s.length;i++){
        if(s.indexOf(s[i])==s.lastIndexOf(s[i])){
            console.log(s[i]);
            return;
        }
    }
    console.log("Every character is repeated")
}
noRepeatFirst(str3);
//TC-O(n*n)
//SC-O(1)
// Complexity
// Outer loop runs n times.
// Each indexOf and lastIndexOf is O(n) → inside loop.
// So worst case = O(n²) ❌ (not O(n)).

//IndexOf
// Returns the first occurrence of the specified value.
// If the value is not found → returns -1.

//lastIndexOf
// Returns the last occurrence of the specified value.
// If the value is not found → returns -1.



//HW
//Reverse each word of string
//"Hi I am vaibhav"
//"iH I ma vahbiav"

let str4="Hi I am vaibhav";
function revEachWord(s){
    s.trim();
    let result="";
    let word="";
    for(let i=0;i<s.length;i++){
        if(s[i]!=" "){
            word=s[i]+word;
            //changes to reverse 
            //in real time
        }
        else{
            result+=word+" ";
            word="";
        }
    }
    result+=word;
    //adds last word
    console.log(result);
}
revEachWord(str4)
//TC-O(n)
//SC-O(n)


//Alternate method
function revEachWord2(s){
    let words= s.trim().split(" ");
    let reverseWords=words.map(word=>word.split("").reverse().join(""));
    console.log(reverseWords.join(" "))
}
revEachWord2(str4);
//TC-O(n)
//SC-O(n)


// Why "" specifically?

// If you used " " in join(" "), you’d
//  get characters separated by spaces: