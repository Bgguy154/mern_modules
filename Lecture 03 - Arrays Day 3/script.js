//find prefix sum in array  tc-n  sc-1
//[3,5,1,4,5,8]

let arr=[3,5,1,4,5,8]
let size=arr.length
let prefixSum=0;
for(let i=0;i<size;i++){
    prefixSum+=arr[i];
    arr[i]=prefixSum
}
console.log(arr)


//altrernate way  tc-n sc-n
const arr2=[3,5,1,4,5,8]
const pref=[];
pref[0]=arr2[0]
for(let i=1;i<arr2.length;i++){
    pref[i]=pref[i-1]+arr2[i]
}
console.log(pref)


const num=23.5
console.log(num.toFixed(3)+12)//23.50012
//toFixed return string always

//HW
/* create array of 100 size freq
put zero at all indices of this array
now travel in arr and increase value of freq
[arr[i]]+1
this shows that we are increasing frequency
of current element
now traverse in freq arr and print 
index and its value of all elements 
whose value is greater than zero
*/

let arr4=[2,2,2,2,2,4,4,4,4,3,3,3,35,6,7,7,8,12,12,1,3,1,1,1,3,4,52,7,87,8,87]
let freq=new Array(100).fill(0)

for(let i=0;i<arr4.length;i++){
    freq[arr4[i]]++;
}

for(let i=0;i<freq.length;i++){
    if(freq[i]!=0){
        console.log(i,freq[i])
    }
}

