//String Questions
//1. given list of variable names
//separated by space write 2 functions 
//1.convert this variable to
//camelcase
//2.convert variable to
//snakecase


//"student first name"
//Camelcase=studentFirstName
//SnakeCase=student_first_name

//camelcase
function toCamelCase(s){
  let s1="";
  let n=s.length;
  for(let i=0;i<s.length;i++){
    if(s[i]===" "){
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


//Alternate snakecase
function snakeCase2(s){
    return s.trim().replaceAll(" ","_")
}
let s4=snakeCase2(str);
console.log(s4)


//Using objects
//HW



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

//using inbuilt function
console.log(str1.split("").reverse().join(""))



//2.checkif string is palindrome
//3.find no.of words in string
//4.find longest word in string
//Sab ke functions banao
//5.function to find 1st non repeating character
//do using indexOf and lastIndexOf

//2
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

//Alternate method
function isPalindrome2(s){
    let n=s.length;
    for(let i=0;i<Math.floor(n/2);i++){
        if(s[i]!==s[n-i-1]){
            return false
        }
    }
    return true;
}
console.log(isPalindrome2(str1))
console.log(isPalindrome2(str2))



//3
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

//Alternate method
function numberOfWords2(s){
    return s.trim().split(" ").length;
}
console.log(numberOfWords2(str))


//4
function longestWordInString(s){
    s.trim();
    let t=s.split(" ");
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



//5
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