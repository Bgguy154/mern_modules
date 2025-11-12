//studentObj
const studentObj={
    name:"Raunak",
    address:"Pune",
    age:17,
    standard:12
}

//parentObj
const parentObj={
  name:"Riya",
  age:35,
  address:"Pune"
}

//Access
console.log(studentObj.name)
console.log(studentObj["name"])
//same output Raunak


//Updating value of object
studentObj.name="Prateek";
console.log(studentObj.name)


//add property
parentObj.gender="Female";
console.log(parentObj)

//delete property
delete parentObj.gender;
console.log(parentObj)

//create person object  name,age,city
//add hobby(singing),update city(Nagpur),print age
const person={
    name:"tanmay",
    age:22,
    city:"Pune"
}
person.hobby="Singing";
person.city="nagpur";
console.log(person.age);
console.log(person)


//nested objects
const employeeObj={
  name:"raju",
  company:"Acciojob",
  salary:"18LPA",
  address:{
    addressLine1:"bhumkar Chowk",
    addressLine2:"Wakad",
    houseNumber:31,
    city:"Pune"
  }
}
console.log(employeeObj.address.city)//Pune


//Array of Objects
const students=[
  studentObj,{
    name:"Nitin",
    address:"Nashik",
    age:27,
    standard:10
  }
]
console.log(students)
/*
[
  { name: 'Prateek', address: 'Pune', age: 17, standard: 12 },
  { name: 'Nitin', address: 'Nashik', age: 27, standard: 10 }
]
*/


for(let i in studentObj){
  console.log(i);
  console.log(studentObj[i]);
}
/*
name
Prateek
address
Pune
age
17
standard
12
*/


console.log(Object.keys(studentObj))
console.log(Object.values(studentObj))
/*
[ 'name', 'address', 'age', 'standard' ]
[ 'Prateek', 'Pune', 17, 12 ] 
 */


/* Task: Create a classroom array of 4 students.
Each student will have: name, age, gender, grade, and address (addressLine1, addressLine2, city, houseNo).

Q: Print the name, age, and house number of all students residing in Pune city. */
const classroom=[
  {
    name:"Namit",
    age:23,
    gender:"male",
    grade:"A",
    address:{
      addressLine1:"Mahalunge",
      addressLine2:"Pune",
      city:"Pune",
      houseNo:76
    }
  },
  {
    name: "Priya Mehta",
    age: 13,
    gender: "Female",
    grade: "7",
    address: {
      addressLine1: "56 Laxmi Nagar",
      addressLine2: "Behind Central Park",
      city: "Mumbai",
      houseNo: "B-204"
    }
  },
  {
    name: "Rohan Patil",
    age: 15,
    gender: "Male",
    grade: "9",
    address: {
      addressLine1: "78 Baner Road",
      addressLine2: "Near IT Park",
      city: "Pune",
      houseNo: "C-305"
    }
  },
  {
    name: "Ananya Desai",
    age: 12,
    gender: "Female",
    grade: "6",
    address: {
      addressLine1: "90 Koregaon Park",
      addressLine2: "Near River View",
      city: "Delhi",
      houseNo: "D-401"
    }
  },
];

for(let i of classroom){
  if(i && i.address && i.address.city=="Pune"){
    console.log(i.name,i.age,i.address.houseNo,)
  }
}
// Namit 23 76
// Rohan Patil 15 C-305



//Each obj has its own this keyword
//Scope only inside the object
//mostly used in functions inside object

//Functions inside objects and this keyword
const carObj={
  car:"mercodes GLS",
  color:"white",
  mileage:10,
  currentSpeed:20,

  running:function running(){
    console.log("the car is running Current Speed is ",this.currentSpeed)
  }
}
carObj.running()
// the car is running Current Speed is 
//  20


/* Question:

Create a JavaScript object called portfolio with the following properties and methods:
name → "Piyush"
skills → an array containing ["C++", "JavaScript", "MERN"]
showSkills() → a method that displays all the skills in one line, comma-separated.
addSkill(skillName) → a method that adds a new skill to the skills array. 
*/
const portFolio={
  name:"piyush",
  skills:['C++','Java','Python'],
  showSkills:function showSkills(){
    let skillsAll="";
    for(let i of this.skills){
       skillsAll+=i+",";
    }
    console.log(skillsAll)
  },
  addSkills:function addSkills(arr){
    this.skills.push(arr);
  }
  //can be written as this simply
  //addSkills:function(arr)
}
portFolio.showSkills();
portFolio.addSkills('react');
portFolio.showSkills()
// C++,Java,Python,
// C++,Java,Python,react,

// to remove Comma at end
// use only this line
// console.log(this.skills.join(", "));
// in showSkills function