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


//callback
function fun(val){
  console.log(val);
}

function add(a,b,callback){
  let sum=a+b;
  callback(sum)
}
add(5,10,fun)//15



//Promise used to resolve callback hell
function task(name,delay){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(name==="task2"){
        reject("Something went wrong in"+name);
      }
      else{
        console.log(name+"done");
        resolve();
      }
    },delay)
  })
}

async function runtasks(){
  try{
    await task("Task 1",1000);
    await task("task2",1000);
    await task("task 3",1000);
    console.log("All taks finished");
  }catch(error){
    console.log("error",error)
  }
}

runtasks();
// Task 1done
// error Something went wrong intask2



//setInterval
// var inter=setInterval(fun,1000);
// function fun(){
//   let date=new Date().toLocaleTimeString();
//   console.log(date);
// }
// //prints current time after 1 sec interval

// setTimeout(()=>{
//   clearInterval(inter)
// },10000)
//stops after 10 iterations



//call,bind,apply
const person={
  firstName:"tanmay",
  lastName:"tapre"
};

function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.firstName} ${this.lastName}${punctuation}`);
}

greet.call(person,"hello","!");
// Output: Hello, Tanmay Tapre!

greet.apply(person,["hi","!"]);
// Output: Hello, Tanmay Tapre!

const greettanmay=greet.bind(person,"Hey");
// Returns a new function with bound this, but doesn’t call it immediately. You call it later.
greettanmay("?");
// Output: Hey, Tanmay Tapre?



//Property descriptors
const user={
  name:"tanmay",
}
let descriptor=Object.getOwnPropertyDescriptor(user,"name");
console.log(descriptor)
/*
{
  value: 'tanmay',
  writable: true,
  enumerable: true,
  configurable: true
}
  */


//property Flags
const user1 = {};

Object.defineProperty(user1, "name", {
  value: "Tanmay",
  writable: false,     // ❌ cannot change value
  enumerable: false,   // ❌ hidden from loops
  configurable: false  // ❌ cannot delete or redefine
});

console.log(user1.name); // Tanmay

user1.name = "Other";    // ignored (writable: false)
console.log(user1.name); // still Tanmay

console.log(Object.keys(user1)); // [] (not enumerable)

delete user1.name;              // fails (configurable: false)
console.log(user1.name);        // still Tanmay




//Class
//typeof of class is function
class Person{
  constructor(name,age){
    this.name=name;
    this.age=age;
  }
  greet(){
    console.log(`Hello ${this.name}`)
  }
}
let user4=new Person("John",98);
user4.greet();
console.log(user4)
// Hello John
// Person { name: 'John', age: 98 }



//inheritance
class Animal{
  constructor(name){
    this.name=name;
  }
  speak(){
    console.log(`${this.name} makes a noise`)
  }
}

class Dog extends Animal{
  constructor(name){
    super (name);
  }
}

let d=new Dog('Rufus');
d.speak();
//Rufus makes a noise


//Static
//if methods is static in
//a class,only class can access
//it.


//try catch throw
function u(a,b){
  try{
    if(b==0){
      throw new Error("cant divide by 0")
    }else{
      return a/b;
    }
  }catch(err){
      console.log(err.message)
    }
}
console.log(u(5,0));



//fetch api
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
// It returns a Promise, which makes it easier to work with
//  asynchronous requests compared to the old XMLHttpRequest.




// Here’s a **short, clear summary of DOM concepts in JavaScript** 👇

// ---

// ### 🌐 DOM (Document Object Model)

// * DOM is a programming interface for web documents.
// * It represents the structure of an HTML/XML document as a **tree of nodes** (elements, attributes, text).
// * Allows JS to **manipulate** structure, style, and content dynamically.

// ---

// ### 🧭 DOM Traversal

// Navigating through the DOM tree:

// * **Parent**: `element.parentNode` / `element.parentElement`
// * **Children**: `element.children` (HTMLCollection of only element nodes)
// * **First / Last Child**: `element.firstElementChild`, `element.lastElementChild`
// * **Siblings**:

//   * Next: `element.nextElementSibling`
//   * Previous: `element.previousElementSibling`
// * **All Child Nodes** (including text/comments): `element.childNodes`

// ---

// ### 🛠 DOM Selectors

// Used to **find elements** in the DOM:

// * `document.getElementById("id")` → single element
// * `document.getElementsByClassName("class")` → live HTMLCollection
// * `document.getElementsByTagName("tag")` → live HTMLCollection
// * `document.querySelector("selector")` → first matching element
// * `document.querySelectorAll("selector")` → NodeList (all matching elements)

// ---

// ### ➕ Append / Add Elements

// * Create element: `document.createElement("div")`
// * Append child: `parent.appendChild(child)`
// * Insert before: `parent.insertBefore(newNode, referenceNode)`
// * Modern alternatives:

//   * `parent.append(child)` (can append text + multiple nodes)
//   * `parent.prepend(child)`
//   * `element.after(newNode)` / `element.before(newNode)`



// ### 🔄 Replace Child

// ```js
// parent.replaceChild(newNode, oldNode);
// ```

// * Replaces `oldNode` inside `parent` with `newNode`.

// ---

// ### 👨‍👩‍👦 Parent Node

// * `element.parentNode` → gives parent node (could be element, document, etc.)
// * `element.parentElement` → only parent element.

// ---

// ### 👶 Child Nodes

// * `element.childNodes` → all nodes (text, comment, element).
// * `element.children` → only element nodes (HTMLCollection).

// ---

// ### 👬 Siblings

// * `element.nextElementSibling` → next sibling element.
// * `element.previousElementSibling` → previous sibling element.
// * (Also `element.nextSibling` / `previousSibling` → may include text/comments).

// ---

// ### ⏩ First & Last Child

// * `element.firstChild` / `element.lastChild` → any node (text, comment, element).
// * `element.firstElementChild` / `element.lastElementChild` → only element nodes.

// ---

// ⚡ In short:

// * **replaceChild()** → swap node.
// * **parentNode / parentElement** → go up.
// * **children / childNodes** → go down.
// * **next/prevElementSibling** → sideways.
// * **first/lastElementChild** → boundaries.

// ### **DOM Properties & Methods**

// * **`innerHTML`** → Gets/sets the **HTML content** of an element (includes tags).
// * **`outerHTML`** → Gets/sets the **element itself + its HTML content**.
// * **`innerText`** → Gets/sets only the **visible text** inside an element (ignores hidden text, respects CSS).
// * **`textContent`** → Gets/sets all **text inside** an element (includes hidden text, doesn’t respect CSS).

// ---

// ### **Attributes**

// * **`getAttribute(attr)`** → Gets the value of an attribute.
// * **`setAttribute(attr, value)`** → Sets/updates an attribute.

//   ```js
//   let img = document.querySelector("img");
//   img.getAttribute("src"); 
//   img.setAttribute("alt", "sample image");
//   ```

// ---

// ### **Styling**

// * Inline style via JS:

//   ```js
//   element.style.color = "red";
//   element.style.backgroundColor = "yellow";
//   ```

// ---

// ### **Mouse Events**

// * **`mouseover`** → Fires when mouse pointer enters element.
// * **`mouseout`** → Fires when mouse pointer leaves element.
// * **`mousedown`** → Fires when mouse button is pressed.
// * **`mouseup`** → Fires when mouse button is released.

// ---

// ### **onClick**

// * Executes a function when element is clicked.

//   ```js
//   button.onclick = () => alert("Button clicked!");
//   ```

// ---

// ### **Animation**

// * Using CSS + JS:

//   ```js
//   element.style.transition = "all 0.5s";
//   element.style.transform = "translateX(100px)";
//   ```
// * Or via `animate()` API:

//   ```js
//   element.animate([{ transform: "translateX(0)" }, { transform: "translateX(100px)" }], {
//     duration: 500,
//     iterations: 1
//   });
//   ```

// ---

