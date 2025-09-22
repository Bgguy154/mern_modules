//Recursion Day3

//Q1
//Compute tc of this function

function recursion(n){
  if(n==0)return;
  recursion(n/4);
  recursion(n/4);
  recursion(n/4);
  recursion(n/4);

  for(let i=0;i<n;i++){
    console.log(i*i);
  }
}


//print pattern n=5
// A 
// AB 
// BCD 
// CDEF 
// DEFGH 
let c=0;
for(let i=1;i<=5;i++){
        let s="";
        for(let j=1;j<=i;j++){
            s+=String.fromCharCode(65+c);
            c++;
        }
        c=i-1;
        console.log(s);
}

//HW alternate without c


//Hollow Diamond Question
for(let i=1;i<=4;i++){
  if(i==1){
    let s="";
    s+=" ".repeat(4-1);
    s+="*";
    console.log(s);
  }
  else{
    let s="";
    s+=" ".repeat(4-i);
    s+="*";
    s+=" ".repeat(i*2-3);
    s+="*";
    console.log(s);
  }
}

for(let i=3;i>=1;i--){
  if(i==1){
    let s="";
    s+=" ".repeat(4-1);
    s+="*";
    console.log(s);
  }
  else{
    let s="";
    s+=" ".repeat(4-i);
    s+="*";
    s+=" ".repeat(i*2-3);
    s+="*";
    console.log(s);
  }
}


//without repeat HW

//Question on map and set HW
//length of longest substring with distinct characters