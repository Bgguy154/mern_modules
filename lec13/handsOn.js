/* Question: Find the square root of a number in O(logN) T.C. */
function squareRoot(n){
    let low=0;
    let high=n;
    while(low<high){
        let mid=Math.floor((low+(high-low)/2));
        let midSquare=mid*mid;
        if(midSquare==n){
            return mid;
        }
        else if(midSquare>n){
            high=mid-1;
        }
        else{
            low=mid+1;
        }
    }
    return -1;
}
let sqrt=squareRoot(90);
let sqrt1=squareRoot(81);
console.log(sqrt,sqrt1);


/* Function to find the index of target element in a sorted Array */
function findTargetElement (arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    
    if(arr[mid] == target){
      return mid;
    } else if (arr[mid] > target){
      high = mid - 1;
    } else { 
      low = mid + 1;
    }
}
  return -1;

}
let arr=[1,1,2,3,4,5,6,8];
console.log(findTargetElement(arr,5));
console.log(findTargetElement(arr,9));


/* Function to find the first index of target in a Sorted Array */
function findFirstIndexOfTargetElement (arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let index=-1;


  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    
    if(arr[mid] == target){
      index=mid;
      high=mid-1;
    } else if (arr[mid] > target){
      high = mid - 1;
    } else { 
      low = mid + 1;
    }
}
    return index;

}
console.log(findFirstIndexOfTargetElement(arr,1));
console.log(findFirstIndexOfTargetElement(arr,9));
// 0
// -1


/* Lowerbound */
//actaully is first index of element gretaer than or equal to target element
//[1,2,6,6,11,11,11,15]
//lb(4)=2
//lb(1)=0
//lb(0)=0
//lb(11)=4
//lb(15)=7
function lowerbound (arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let index = arr.length;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if(arr[mid] >= target){
      index = mid;
      high = mid - 1;
    } else low = mid + 1;
  }

  return index;
}
let arr1=[1,2,6,6,11,11,11,15];
console.log(lowerbound(arr1,4));
console.log(lowerbound(arr1,1));
console.log(lowerbound(arr1,0));
console.log(lowerbound(arr1,15));
console.log(lowerbound(arr1,11));
console.log(lowerbound(arr1,19));

// 2
// 0
// 0
// 7
// 4
//8

//HW
//upper bound is first index of eleemnt just greater than target element
//ub(1)=1
//ub(7)=4
//ub(15)=n(length of array if dont exists)=8
//ub(0)=0
function upperbound (arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let index = arr.length;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if(arr[mid] >target){
      index = mid;
      high = mid - 1;
    } else low = mid + 1;
  }

  return index;
}
//let arr1=[1,2,6,6,11,11,11,15];
console.log(upperbound(arr1,7));
console.log(upperbound(arr1,1));
console.log(upperbound(arr1,0));
console.log(upperbound(arr1,15));
console.log(upperbound(arr1,11));
// 4
// 1
// 0
// 8
// 7


/* SET in JS */
//unique data only
let set=new Set([1,2,4,4,5,6]);

//methoid to add element in set
set.add(200);
set.add(2);
set.add(3);
console.log(set);
//Set(7) { 1, 2, 4, 5, 6, 200, 3 }


// method to check if a number is in set or not
console.log("checking if 30 is in set?",set.has(30))
console.log("checking if 200 is in set?",set.has(200))
// checking if 30 is in set? false
// checking if 200 is in set? true

console.log("Size of set "+set.size);
//Size of set 7

console.log(set);
console.log(set.delete(4),set);
// Set(7) { 1, 2, 4, 5, 6, 200, 3 }
// true Set(6) { 1, 2, 5, 6, 200, 3 }

//Remove duplicates from array
let array=[2,3,1,4,0,1,2,3,4,5,10];
let set1=new Set(array);
let array1=[...set1];
let array11=Array.from(set1);

let set2=new Set([...array]);
let arr2=[...set2];
console.log({array,array1,array11,arr2})
// {
//   array: [
//      2, 3, 1, 4, 0,
//      1, 2, 3, 4, 5,
//     10
//   ],
//   array1: [
//     2, 3,  1, 4,
//     0, 5, 10
//   ],
//   array11: [
//     2, 3,  1, 4,
//     0, 5, 10
//   ],
//   arr2: [
//     2, 3,  1, 4,
//     0, 5, 10
//   ]
// }

/* MAP in JS */
//contains key value pairs
//key must be diff across pairs
//key can be anything
let map=new Map([
    ["name3",["Sultan","Sahil"]],
    ["name4","Sunny"]
]);

map.set("name1","Sultan");
map.set("name2","Sunny");

//checking if a key is present or not
console.log("checking if `name1` is present or not?", map.has("name1"));

//getting value of specific key
console.log("Value of `name2` key: ",map.get("name2"));

//deleting a key in map
console.log("Deleting `name4`: ",map.delete("name4"));

for(let i of map){
    console.log("key : "+i[0],"Value : "+i[1]);
}
// checking if `name1` is present or not? true
// Value of `name2` key:  Sunny   
// Deleting `name4`:  true        
// key : name3 Value : Sultan,Sahil
// key : name1 Value : Sultan     
// key : name2 Value : Sunny 

console.log("Printing keys");
for(let i of map.keys()){
  console.log(i);
}

map.set("name1","Sargar");
console.log(map);
// Map(3) {
//   'name3' => [ 'Sultan', 'Sahil' ],
//   'name1' => 'Sargar',
//   'name2' => 'Sunny'
// }

const mapArr=[...map];
console.log("Map converted into Array",{mapArr});
// Map converted into Array {     
//   mapArr: [ [ 'name3', [Array] ], [ 'name1', 'Sargar' ], [ 'name2', 'Sunny' ] ]
// }

/* Question find the frequency of each element in the arr */
let arr3 = [2,3,4,1,0,1,2,3,4,5,10];
function freqOfEachElement(arr){
    let map=new Map();
    for(let num of arr){
        map.set(num,(map.get(num)||0)+1);
    }
    for(i of map){
        console.log("Frequency of ",i[0]," is ",i[1]);
    }
}
freqOfEachElement(arr3);
//TC-O(n)
//SC-O(n)

// Frequency of  2  is  2
// Frequency of  3  is  2
// Frequency of  4  is  2
// Frequency of  1  is  2
// Frequency of  0  is  1
// Frequency of  5  is  1
// Frequency of  10  is  1

/* Question: Find intersection & Union */
let arr4 = [1,2,4,5,6,3], arr5 = [2,5,6,3,1,3];

//intersection: 1,2,5,6
//union: 1,2,3,4,5,6
// const unionArr=[...new Set([...arr4,...arr5])];
// console.log({unionArr});
//{ unionArr: [ 1, 2, 4, 5, 6, 3 ] }
//Alternate method
const unionArr=new Set([...arr4,...arr5]);
const unionSet=[...unionArr];
console.log(unionSet);
//[ 1, 2, 4, 5, 6, 3 ]


//Intersection
//let arr4 = [1,2,4,5,6,3,3], arr5 = [2,5,6,3,1,3];
////intersection: 1,2,5,6,3,3
function intersect(a1,a2){
    let map=new Map();
    let result=[];
    for(num of a1){
        map.set(num,(map.get(num)||0)+1);
    }
    for(let num of a2){
        if(map.has(num) && map.get(num)>0){
            result.push(num);
            map.set(num,(map.get(num)-1));
        }
    }
    return result;
}

let r=intersect(arr4,arr5);
console.log(r);
//[ 2, 5, 6, 3, 1 ]
//TC-O(n+m)
//SC-O(n) for map