//Sorting Day2


//Q1
// Given 2 sorted arrays A and B 
// we have to merge
let arr1=[1,1,2,3,4,7,10,20,100]
let arr2=[1,2,2,9,12,14,101,103];
// [
//     1,  2,  3,  4,   7,   9,
//    10, 12, 14, 20, 100, 101,
//   103
// ]
function mergeSortedArrays(arr1,arr2){
    let arr3=[];
    let m=arr1.length;
    let n=arr2.length;
    let i=0;
    let j=0;
    while(i<m && j<n){
       if(arr1[i]>arr2[j]){
          arr3.push(arr2[j]);
          j++;
       }
       else{
        arr3.push(arr1[i]);
        i++;
       }
    }

    for(let l=j;l<arr2.length;l++){
        arr3.push(arr2[l]);
    }

    for(let l=i;l<arr1.length;l++){
        arr3.push(arr1[l]);
    }
    return arr3;
}

console.log(mergeSortedArrays(arr1,arr2));
//TC-O(m+n)
//Sc-O(m+n)
//Total Comparisons=Math.min(m,n)


//Alternate method
// let arr1=[1,1,2,3,4,7,10,20,100]
// let arr2=[1,2,2,9,12,14,101,103];
// [
//     1,  2,  3,  4,   7,   9,
//    10, 12, 14, 20, 100, 101,
//   103
// ]
function mergeSortedArrays2(arr1,arr2){
    let m=arr1.length;
    let n=arr2.length;
    let arr3=new Array(m+n);
    let i=0;
    let j=0;
    let k=0;
    while(i<m && j<n){
       if(arr1[i]>arr2[j]){
          arr3[k]=(arr2[j]);
          j++;
       }
       else{
        arr3[k]=(arr1[i]);
        i++;
       }
       k++;
    }
    for(let l=j;l<arr2.length;l++){
        arr3.push(arr2[l]);
    }

    for(let l=i;l<arr1.length;l++){
        arr3.push(arr1[l]);
    }
    return arr3;
}

console.log(mergeSortedArrays2(arr1,arr2));
//Hw correct this function



//Merge Sort
let arr=[3,7,1,5,8,2,4];

function mergeSort(arr1,low,high){
    //Base case
    if(low==high){
        return [arr1[low]];
    }

    //Recursive Calls
    let mid=Math.floor(low+(high-low)/2);  
    let leftPart=mergeSort(arr1,low,mid);
    let rightPart=mergeSort(arr1,mid+1,high);

    //merging of unsorted arrays
    let mergedArr=mergeSortedArrays(leftPart,rightPart);
    return mergedArr;  
}

// let arr=[3,7,1,5,8,2,4];
console.log(mergeSort(arr,0,arr.length-1))
//[
//   1, 2, 3, 4,
//   5, 7, 8
// ]
//Tc-O(nlogn)
//SC-O(n)


//Insertion Sort
//Q2
//Given array
//all elements in array is sorted except last element
let arr3=[1,2,7,9,6];
function insertAtTarget(arr){
    let k=arr[arr.length-1];
    for(let i=arr.length-2;i>=0;i--){
        if(arr[i]<k){
            [arr[i+1],k]=[k,arr[i+1]]
            break;
        }
    
    }
    [arr[i],k]=[k,arr[i]]
    return arr;
}

console.log(insertAtTarget(arr3))
