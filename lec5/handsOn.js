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

// Reverse each odd column (1-indexed → 0,2,4 in 0-indexed)
for (let j = 0; j < cols; j++) {
  if (j % 2 != 0) {  // odd column (1-indexed)
    let top = 0, bottom = rows - 1;
    while (top < bottom) {
      [arr2[top][j], arr2[bottom][j]] = [arr2[bottom][j], arr2[top][j]];
      top++;
      bottom--;
    }
  }
}

// Printing matrix
console.log(arr2);

// Printing like single string format
let result = arr2.map(row => row.join(" ")).join("\n");
console.log(result);





function colElementsOdd(arr){
    let row=arr.length
    let col=arr[0].length;//since arr is a matrix
    for(let j=0;j<col;j++){//जो constant वाली चीज़ है, वो बाहर रखनी है।
        if(j%2==0)continue;
        for(let i=0;i<row;i++){//जो भी बदलाव(change) करना है, वो अंदर वाले for लूप में रखना है।
            {
                console.log(arr[i][j])
            }
    }
    } 
}
colElementsOdd(arr2)   //hw 2 printColElemenstodd use string to store elements

//->nneche hai


function colElementsOdd(arr) {
    let row = arr.length;
    let col = arr[0].length;
    let result = ""; // सारी values store करने के लिए

    for (let j = 0; j < col; j++) { // जो constant वाली चीज़ है वो बाहर
        if (j % 2 === 0) continue; // केवल odd columns (1-indexed)
        for (let i = 0; i < row; i++) { // changes अंदर
            result += arr[i][j] + " "; 
        }
        result += "\n"; // हर column के बाद new line
    }

    console.log(result.trim()); 
}

colElementsOdd(arr2);

