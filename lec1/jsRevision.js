//Copy and spread operator
let arr1=[1,"tanmay",true];
let arr2=[...arr1];
arr2.push("Atom");

console.log(arr1);
console.log(arr2);

//Array destructuring
let arr3=["thomas","chad","tanmay","boy"];
let [item1,item2,...item3]=arr3;
console.log(item1);//"thomas"
console.log(item2);//"chad"
console.log(item3);//"tanmay","boy"


//Obj inside arrays
let arr4=[
    {user:1,name:"tate"},
    {user:2,name:"shelby"},
    {user:3,name:"paro"}
]

let [{name},item2a,{name:name1}]=arr4;
console.log(name);//tate
console.log(item2a);//{ user: 2, name: 'shelby' }
console.log(name1);//paro
//if u dont want to create any 
//obj leave it blank


//Sets
const s=new Set([10,20,30,30,30,40]);
s.add(60);
s.add("tanmay")
console.log(s)
//Set(6) { 10, 20, 30, 40, 60, 'tanmay' }


//Maps
var map1=new Map([[1,"one"],["fname","Mickey"],["whole number",[0,1,2,3,4]]]);
console.log(map1);
//Map(3) {
//   1 => 'one',
//   'fname' => 'Mickey',
//   'whole number' => [ 0, 1, 2, 3, 4 ]
// }
map1.set("fname","Mouse");
console.log(map1);
// Map(3) {
//   1 => 'one',
//   'fname' => 'Mouse',
//   'whole number' => [ 0, 1, 2, 3, 4 ]
// }


//Symbol is a hidden property
//Js is synchronous


//setTimeout
setTimeout(fun,1000);
console.log("This");
function fun(){
  console.log("Asynchronous");
}
console.log("Is")
//Even if setTimeout is set to 0 still asynchronous will be printed at last only due to stack arrangement