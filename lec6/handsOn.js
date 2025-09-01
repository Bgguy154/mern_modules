//HW
  //do all what we did for deletion for insertion
  //1.insert at start
  //2.insert at end

//1.
let ans=[1,2,3,4];
ans.unshift(7);
console.log(ans);

//2.
ans.push(8);
console.log(ans);


//rotate array anticlockwise by k elements
let ans1=[2,3,4,5,6,7];
function reverseAns1(arr,start,end){
    while(start<end){
        [arr[start],arr[end]]=[arr[end],arr[start]];
        start++;
        end--;
    }
}
let n=ans1.length;
let k=15;
k=k%n;
reverseAns1(ans1,0,n-1);
reverseAns1(ans1,0,k-1);
reverseAns1(ans1,k,n-1);
console.log(ans1)



//rotate array clockwise by k eleements
let ans2=[2,3,4,5,6,7];
let len=ans2.length;
k=15;
k=k%len;
reverseAns1(ans2,0,len-1);
reverseAns1(ans2,0,len-k-1);
reverseAns1(ans2,len-k,len-1);
console.log(ans2);

