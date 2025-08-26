//array
const students=["rahul","Puneet","rani","rani"];
//print 2nd student
console.log(students[1]);
//print roll number and name of fourth student
console.log(4,students[3])

for(let i=0;i<4;i++){
    console.log(i+1,students[i])
}

//for .. in loop
for(let y in students){
    console.log(y*1+1,students[y])
}
//y is string in this loop



//task print all students with even roll numbers
for(let i in students){
    if(i%2!=0){
        console.log(Number(i)+1,students[i])
    }
}


//for of loop
for(let student of students){
    console.log(student)
}//gives values 



//other types of array declaration
//declaration=creating a new variable or function
//definition-defining the variable or functions

//read pimitive data type
const arr=[1,5]
const arr1=new Array(1,2,34)
arr[2]=10
console.log(arr1)


//homogeneous prop.of array
//same type of datatypes as variables
const y=[9,8]

//heterogeneonus prop.of array
//diff data types as variav;es in array
const u=[0,"ju",false]
console.log(u)



//functions of arrays
const iplTeams=["CSK","MI","RCB","SRH"];
console.log(iplTeams.length)
//add some elements
//return updated length
console.log(iplTeams.push("GT"))
//insert at end
iplTeams.unshift("KKR")
//insert at start

//remove some elements
iplTeams.pop()//delete fromend

iplTeams.shift()//remove from start
console.log(iplTeams,iplTeams.length)


//slice
console.log(iplTeams.slice(2))//.slice(1,3)
//keeps all elements after 2

//-ve slice
console.log(iplTeams.slice(-1))
//keeps 1 element from end