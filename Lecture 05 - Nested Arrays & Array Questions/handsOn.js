// HW-
// given 2d matrix ,reverse each odd columns and print it 
// const arr2=[
//     [1,2,3,4,5,6],
//     [2,6,12,43,3,5],
//     [8,10,34,23,12,8]
// ]
//also print like last 1 string wala amethod 
// output:
// [
//     [1,10,3,23,5,8],
//     [2,6,12,43,3,5],
//     [8,2,34,4,12,6]
// ]

const arr2 = [
  [1, 2, 3, 4, 5, 6],
  [2, 6, 12, 43, 3, 5],
  [8, 10, 34, 23, 12, 8]
];

let rows = arr2.length;
let cols = arr2[0].length;


for (let j = 0; j < cols; j++) {
  if (j % 2 != 0) {  // odd column (0-indexed)
    let top = 0, bottom = rows - 1;
    while (top < bottom) {
      // [arr2[top][j], arr2[bottom][j]] = [arr2[bottom][j], arr2[top][j]];
      //alternative method 
      let temp=arr2[top][j];
      arr2[top][j]=arr2[bottom][j];
      arr2[bottom][j]=temp;
      
      top++;
      bottom--;
    }
  }
}
//tc-O(n^2),sc-O(1)

// Printing matrix
console.log(arr2);

// Printing like single string format
let result = arr2.map(row => row.join(" ")).join("\n");
console.log(result);


//remove all occurences of particular element from array
function removeElementFromArray(arr,target){
  return arr.filter(item=>item!=target)
}
let arr7=[10,20,10,30,10,60];
let removed=removeElementFromArray(arr7,10);
console.log(removed);
//[ 20, 30, 60 ]

//current date and time in a specific format
function curtrentDateTime(){
  let currentyDate=new Date();
  return currentyDate.toLocaleString()
}
console.log(curtrentDateTime());
//9/5/2025, 4:40:51 PM

// function colElementsOdd(arr){
//     let row=arr.length
//     let col=arr[0].length;//since arr is a matrix
//     for(let j=0;j<col;j++){//जो constant वाली चीज़ है, वो बाहर रखनी है।
//         if(j%2==0)continue;
//         for(let i=0;i<row;i++){//जो भी बदलाव(change) करना है, वो अंदर वाले for लूप में रखना है।
//             {
//                 console.log(arr[i][j])
//             }
//     }
//     } 
// }
// colElementsOdd(arr2)   //hw 2 printColElemenstodd use string to store elements

// //->nneche hai


// function colElementsOdd(arr) {
//     let row = arr.length;
//     let col = arr[0].length;
//     let result = ""; // सारी values store करने के लिए

//     for (let j = 0; j < col; j++) { // जो constant वाली चीज़ है वो बाहर
//         if (j % 2 === 0) continue; // केवल odd columns (1-indexed)
//         for (let i = 0; i < row; i++) { // changes अंदर
//             result += arr[i][j] + " "; 
//         }
//         result += "\n"; // हर column के बाद new line
//     }

//     console.log(result.trim()); 
// }

// colElementsOdd(arr2);

