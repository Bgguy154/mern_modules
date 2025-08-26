//1 liner
const value=4+("34"*" ")/17;
console.log({value});   //{ value: 4 }

//matrices are also called grids
//given n*n grid find primary diagonal sum
const arr=[
    [1,21,3,8],
    [4,52,6,90],
    [7,12,9,87]
];

let sum=0;
for(let i=0;i<arr.length;i++){
 sum+=arr[i][i]
}
console.log(sum)
//tc-n,sc-1


//secondary diagonals (3,5,7)
let secondary_sum=0
let start=0;
let end=arr.length-1;
while(end>=0){
    secondary_sum+=arr[start][end];
    start++;
    end--;
}
console.log(secondary_sum)
//tc-n,sc-1

// Alternate solution
let secondary_sum2=0;
for(let i=0;i<arr.length;i++){
  secondary_sum2+=arr[i][arr.length-1-i]
}
console.log(secondary_sum2)
// tc-n,sc-1


//write function to calculate odd column sum of matrix
function colSum(arr){
    let row=arr.length;
    let end=arr[0].length;
    let j=0
    let cSum=0;
    for(let i=0;i<row;i++){
        for(j=0;j<end;j++){
            if(j%2!=0){
                cSum+=arr[i][j];
            }
        }
    }
    console.log(cSum)
}
colSum(arr);
//tc=n^2,sc-1



//function to print odd numbered column elements as col wise 
const arr2=[
    [1,2,3,4,5,6],
    [2,6,12,43,3,5],
    [8,10,34,23,12,8]
]
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
colElementsOdd(arr2)
//tc-n^2,sc-1


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


//hw 2 printColElemenstodd use string to store elements

