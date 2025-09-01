/* Function to find the largest subarray with sum = K */
function ksumLength(arr,k){
    let length=0;
    let n=arr.length;
    for(let i=0;i<n;i++){
        let sum=0;
        for(let j=i;j<n;j++){
            sum+=arr[j];
            if(sum==k){
                length=Math.max(length,j-i+1);
            }
        }
    }
    return length;
}

let arr1=[1,2,-3,0,1,-1,1];
console.log(ksumLength(arr1,0));


/* Function to print all subarrays of size K */
function printSunarraysSumK(arr,k){
    let n=arr.length;
    let sunArrsizeK=[];
    for(let i=0;i+k<=n;i++){
        let suBArr="";
        for(let j=i;j<i+k;j++){
            suBArr+=arr[j]+" ";
        }
        sunArrsizeK.push(suBArr)
    }
    return sunArrsizeK;
}
console.log(printSunarraysSumK(arr1,3))
//tc-O(n*n),SC=O(1)
//DOYUBT WHY NOT N*N