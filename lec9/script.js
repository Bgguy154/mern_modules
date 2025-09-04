console.log(8)


const obj={
    property1:"propertyone",
    property2:"propertwo",
    1:"one"
}
console.log(obj["property3"]);
console.log(obj.property3);
console.log(obj[1]);

//undefined 
// undefined 
// one


//object keys can have array as values also
obj.arrProperty=[1,2,3,4];
for(let i of obj.arrProperty){
    console.log(i)
}
// 1 
// 2 
// 3
// 4



const newObj=new Object();
newObj.a="a";
newObj.b="b";
newObj.c="c";
newObj.d="d";
console.log({newObj})
// Object { newObj: {…} }
// ​
// newObj: Object { a: "a", b: "b", c: "c", … }


//typeof doesnt have array included in it
//instead we use object as its typeof



//STRINGS are case sensitive

let str='a';
console.log(typeof str);

//strings using single quotes
str='abc';
console.log(typeof str);

//strings using double quotes
str="abc";
console.log(typeof str);

str=['a','b','c','d'];
console.log(typeof str);
console.log(typeof str[0]);
// string 
// string 
// string 
// object 
// string

//strings using backticks
str=`ab`;
console.log(typeof str);
// string

//case when u must using double quotes
str="Hi I'm Vaibhav"
console.log(typeof str);
// string

//case when u must using single quotes
str='Hi you want "java" classes'
console.log(typeof str);
//string

//case when we use backticks
str=`Hi I'm Vaibhav and learning "Java"`
console.log(typeof str);
//string


//some more features of backticks
let personName="Vaibhav";
str=`Hi I am ${personName}`;
console.log(str)
personName="Prateek";
str=`Hi I am ${personName}`;
console.log(str);
// Hi I am Vaibhav 
// Hi I am Prateek


//Some methods in strings
str="   We're going to see some methods of strings";

//includes function->returns if given string is present in str or not
console.log(str.includes('a'));
// false
console.log(str.includes('g'));
//true
console.log(str.includes('of'))
//true
console.log(str.includes('oman'));
//false


//replace function->replaces 1st occurrence of 'W' with 'X'
console.log(str.replace('W','X'));
// Xe're going to see some methods of strings
console.log(str)
// We're going to see some methods of strings
//replace() doesnt change original string

//replaceAll function->replaces all 's' with 'X'
console.log(str.replaceAll('s','X'));
console.log(str);
// We're going to Xee Xome methodX of XtringX 
// We're going to see some methods of strings
//replaceAll() too doesnt chaneg original string

//trim()->removes all leading and trailing spaces
console.log(str);
console.log(str.trim());
console.log(str);
//    We're going to see some methods of strings
// We're going to see some methods of strings 
//    We're going to see some methods of strings


//substring()->gives substrings
//doesnt change original string
//gives substring from index=3 and ending at index=8(9-1)
console.log(str.substring(3,9));
//We're 

//gives substring from index=3 till end
console.log(str.substring(3));
//We're going to see some methods of strings
console.log(str.substring("3"));
//same output

console.log(str.substring(-3));
//    We're going to see some methods of strings
console.log(str.substring(-3,-10));//equivalent to (0,0)
//<empty string>
console.log(str.substring(-3,10000));//prints till length(0,n)
//   We're going to see some methods of strings


//slice()->almost same as substring 
//but changes -ve values differently
console.log(str.slice(3));
//gives substring from index=3 till end
console.log(str.slice(-3));//last 3 elements
//ngs
console.log(str.slice(3,5));
//We
//gives elements from 3 to 4
console.log(str.slice())
//   We're going to see some methods of strings
console.log(str.slice(-100))
//gives all elements in case no. is greater than length of string
//   We're going to see some methods of strings
console.log(str.slice(-9,-3))
//f stri
console.log(str.slice(-3,0));
//<empty string> as end is smaller than start



//split()->splits string based on given character
let str1="   We're going ,to see some ,methods of strings"
console.log(str.split(","))
const line="hello welcome to MERN stack course";
const line1="hedwibkiw";
console.log(line.split(" "));
//[ "hello", "welcome", "to", "MERN", "stack", "course" ]
const line2="hello welcome to MERN stack course1  ";
console.log(line2.split(" "))
//CHECK????


//toUpperCase()
console.log("hello".toUpperCase())
//HELLO


//Wrapper Objects
const string="vaibhav";
const number=67;
const bool=true;
const object={
    name1:"tanmay"
}
console.log(string,__proto__);
console.log(number,__proto__);
console.log(bool,__proto__);
console.log(object,__proto__);

// vaibhav 
// WindowPrototype { … }
// 67 
// WindowPrototype { … }
// true 
// WindowPrototype { … }
// Object { name1: "tanmay" }
// WindowPrototype { … }


//Spread and rest operator

//rest operator->...
//always applied at last
function addStudent(students,...studentNames){
  console.log(studentNames);
  //[ "Abhishek", "Diya", "Surbhi" ]
  for(i of studentNames){
    students.push(i)
  }
  console.log(students);
  //[ "rahul", "Riya", "Prem", "Abhishek", "Diya", "Surbhi" ]
}
const students=["rahul","Riya","Prem"];
addStudent(students,"Abhishek","Diya","Surbhi");



const [hi,...bye]=["Hi","Bye","Byee","Byeee"];
console.log(hi,bye)
//Hi Array(3) [ "Bye", "Byee", "Byeee" ]
//is called array destructuring


//Spread operator
const arr1=[1,3,5,6];
console.log([...arr1,98,87])
// [ 1, 3, 5, 6, 98, 87 ]
console.log([86,...arr1,76]);
//[ 86, 1, 3, 5, 6, 76 ]



//HW
//use spread operator with objects 
//