console.log(window.document.body)
console.log(document.body.childNodes)
// hw:keyframes me percentage
// hw:svg

// childNodes:you will get text and children text is assumed to be gap between tag return nodelist

// children :you will get actual children return html collection

console.log(document.body.firstChild)
// firstElementChild: return 1st children

console.log(document.body.firstElementChild)
// firstChild:return 1st child but it is text

// selectors:if not found return null
console.log(document.querySelector("div"));

console.log(document.querySelectorAll("div"));

console.log(document.querySelector(".firstDiv"))

console.log(document.querySelector("#secondDiv"))

console.log(document.querySelector("div #secondDiv")) //return null

//other specific selector
// based on id
console.log(document.getElementById("secondDiv"))

//based on class
console.log(document.getElementsByClassName("firstDiv"))

// based on tag
console.log(document.getElementsByTagName("p"))

const para = document.querySelector("p");
para.style.color = "white";
para.style.backgroundColor = "pink";


const imageElement = document.querySelector("img");
imageElement.setAttribute("src", "https://tse3.mm.bing.net/th/id/OIP.lIkwu94WOhqYMCyCN3ZPYQHaE8?pid=Api&P=0&h=180")

// practicle example for setAttribute

const data1 = document.querySelector(".firstDiv");
data1.setAttribute("data-updated-price", 500);

// innerHtml
let contentInsidep = para.textContent
para.innerHTML = `<strong>${contentInsidep}<strong>`;

// textContent
let fullName = document.querySelectorAll("p")[1];
fullName.textContent = "Tanmay";

// hw difference between innerHtml textContent and innerContent

// className Property

const sectionElement = document.querySelector("section")
console.log(sectionElement.className)
let array = sectionElement.className.split(" ");
array.splice(2, 1)
let cName = array.join(" ")
sectionElement.setAttribute("class", cName)

// classList
// if it is space seperated then it comes under domToKenList
const sectionElementCopy = document.querySelector("section")
console.log(sectionElement.classList)
sectionElement.classList.remove("class7")//not present then undefined
sectionElement.classList.add("class5")
sectionElement.classList.toggle("class5")
sectionElement.classList.contains("class5")
sectionElement.classList.replace("class2", "newClass2")

// classlist vs classname