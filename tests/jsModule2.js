// 2 1 0 3 0 0 0 4 0 1 0 1 0 0 1 0 2 0 2 0 0 0 0 0 0 0
//abhshdshqaldoqhjd

function Alphabets(str) {
   str.trim();
   for(let i=0;i<str.length;i++){
    str[i]=str[i].toLowerCase();
   }
   let arr=new Array(26).fill(0);
   for(let i=0;i<str.length;i++){
    let char=str[i];
    arr[str.charCodeAt(i)-'a'.charCodeAt(char)]++;
   }
   console.log(arr.join(' '));
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", function (line) {
  let str = line;
  //str = str.replace(/\\n/g, " ");

  (Alphabets(str));
});
