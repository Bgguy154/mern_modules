function handleScroll(){
    console.log("Scrolling abhi bhi")
}



//Throttling using Global Variables

//let isAllowed=true;
// function throttle(delay){
//     if(!isAllowed)return ;
//     handleScroll()
//     isAllowed=false;
//     setTimeout(()=>{
//       isAllowed=true;
//     },delay)
// }

// window.addEventListener("scroll",()=>{
//     throttle(1000);
// })


//Throttling using Closures
function throttleFunction(fn,delay){
    let isAllowed=true;
    return function(){
    if(!isAllowed)return;
    fn()
    isAllowed=false;
    setTimeout(()=>{
      isAllowed=true;
    },delay)
    }
}

const throttleScroll=throttleFunction(handleScroll,1000);
window.addEventListener("scroll",throttleScroll);

//Debouncing
// function debounce(fn,delay){
//     let timerId=null;
//     return function(){
//         clearTimeout(timerId);
//         timerId=setTimeout(()=>{
//            fn();
//         },delay)
//     }

// }

// function saveInput(){
//     console.log("Something Typed");
// }

// const debounceSaved=debounce(saveInput,2000);

// const input=document.querySelector("input");
// input.addEventListener("input",()=>{
//     debounceSaved(input.value);
// })


//Debouncing with spread,rest,apply
function debounce(fn,delay){
    let timerId=null;
    return function(...args){
        clearTimeout(timerId);
        timerId=setTimeout(()=>{
           fn.apply(this,args);
        },delay)
    }

}

function saveInput(value){
    console.log(value);
}

const debounceSaved=debounce(saveInput,2000);

const input=document.querySelector("input");
input.addEventListener("input",()=>{
    debounceSaved(input.value);
})