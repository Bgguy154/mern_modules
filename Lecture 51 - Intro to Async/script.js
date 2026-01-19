const buttonEle=document.querySelector("button");
const spanEle=document.querySelector("span");
buttonEle.addEventListener("click",(e)=>{
    e.preventDefault();
    spanEle.textContent="Welcome to the class";
    setTimeout(()=>{
       spanEle.remove();
    },1000)
})
//event listeners are async in nature

// console.log("nonblocking");
// alert("blocking");
// console.log("after blocking");

//setTimeOut is used for implementing something after sometime

const startBtn=document.querySelector("button:nth-of-type(2)");
const stopBtn=document.querySelector("button:last-of-type");
const h1Ele=document.querySelector("h1");
let count=0;
let timer=null;

startBtn.addEventListener("click",()=>{
    timer=setInterval(()=>{
       count++;
       h1Ele.textContent=count;
    },1000)
})

//setInterval sets timer for implemenetation of how many seconds
//it has clearInterval for deleting the interval set.

stopBtn.addEventListener("click",()=>{
    console.log(timer);
    clearInterval(timer);
})

//mdn setInerval setTimeOut

