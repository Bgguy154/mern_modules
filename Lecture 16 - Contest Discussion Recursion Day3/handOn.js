//anagrams

function checkAnagram(s1,s2){
    let map=new Map();
    for(let i=0;i<s1.length;i++){
        map.set(s1[i],(map.get(s1[i])||0)+1);
    }
    for(let i=0;i<s2.length;i++){
        if(map.has(s2[i])){
        map.set(s1[i],map.get(s1[i])-1);
        }
        else{
         return false;
        }
    }
    for(let[key,value]of map){
        if(value!=0){
            return false;
        }
    }
    return true;
}
//false

console.log(checkAnagram("abc","dog"))

function anagramsCount(){
    let arr=["cat","tea","pet","tac","act","eat"]
    let arr2=["cat","tcs","tca","eee","tea"];
    for(let i=0;i<arr2.length;i++){
        let curr=arr2[i];
        let count=0;
        for(let j=0;j<arr.length;j++){
            if(checkAnagram(curr,arr[j])){
                count++;
            }
        }
        let t=count==0?-1:count;
        console.log(t);
    } 
}

anagramsCount();
// 3
// -1
// 3
// -1
// 2

//function to display array for pushing anagrams
function anagrams(){
    let arr=["cat","tea","pet","tac","act","eat"]
    let arr2=["cat","tcs","tca","eee","tea"];
    for(let i=0;i<arr2.length;i++){
        let curr=arr2[i];
        let arrResult=[];
        for(let j=0;j<arr.length;j++){
            if(checkAnagram(curr,arr[j])){
                arrResult.push(arr[j])
            }
        }
        if(arrResult.length==0){
           console.log(-1)
        }
        else{
            console.log(arrResult.sort().join(' '))
        }
    } 
}
anagrams();
// act cat tac
// -1
// act cat tac
// -1
// eat tea



//function to find lcm of 2 numbers by recursion
function lcm(a,b,multiple=Math.max(a,b)){
    if(multiple%a==0 && multiple%b==0){
        return multiple;
    }
    return lcm(a,b,multiple+Math.max(a,b));
}
console.log(lcm(34,68));
console.log(lcm(10,12));
console.log(lcm(1,8));
console.log(lcm(4,70));
console.log(lcm(83,1000));
console.log(lcm(23,67));