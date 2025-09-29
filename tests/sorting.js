
//Test  on recursion Questions
/*
1.You are given an array of objects. Each object has the following properties:

    department (string)
    name (string)
    age (number)

Your task is to sort this array:

    First by department in alphabetical order
    If department is the same, then by age in ascending order

📦 Sample Input:

const employees = [
  { department: "HR", name: "Anjali", age: 32 },
  { department: "Tech", name: "Aman", age: 28 },
  { department: "HR", name: "Rahul", age: 25 },
  { department: "Tech", name: "Sneha", age: 24 },
  { department: "Finance", name: "Kunal", age: 30 },
  { department: "Tech", name: "Divya", age: 28 },
];
*/

employees.sort((a,b)=>{
    if(a.department==b.department){
        return a.age-b.age;
    }
    return a.department.localeCompare(b.department);
})
console.log(employees);

/*
[
  { department: 'Finance', name: 'Kunal', age: 30 },
  { department: 'HR', name: 'Rahul', age: 25 },
  { department: 'HR', name: 'Anjali', age: 32 },
  { department: 'Tech', name: 'Sneha', age: 24 },
  { department: 'Tech', name: 'Aman', age: 28 },
  { department: 'Tech', name: 'Divya', age: 28 }
]
*/

//2.Iterative Insertion Sort
function insertfromStart(arr,endIndex){
 let target=arr[endIndex];
 let j=endIndex-1;
 while(j>=0 && arr[j]>target){
    arr[j+1]=arr[j];
    j--;
 }
 arr[j+1]=target;

}

function insertionSort(arr){
  for(let i=1;i<arr.length;i++){
    insertfromStart(arr,i);
  }
  return arr;
}

let arr=[3,1,2,5,6,4];
console.log(insertionSort(arr));
//1 2 3 4 5 6