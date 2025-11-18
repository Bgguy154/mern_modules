let outer=document.querySelector(".outer-div");
let inner=document.querySelector(".inner-div");
let text=document.querySelector(".h1-tag");

//this is target phase(c)
//event happen on element in this phase
text.addEventListener("click",(e)=>{
    e.stopPropagation();
    console.log("h1 clicked")
    text.style.backgroundColor="violet";
})

outer.addEventListener("click",()=>{
    console.log("outer clicked")
    outer.style.backgroundColor="yellow";
})

inner.addEventListener("click",()=>{
    console.log("inner clicked")
    inner.style.backgroundColor="red";
})


// this is bubbling phase(b) by default
//order h1 to outer on clicking h1
//we can use stopPropagation in this phase

// applied on writing true
//capturing phase(a)
//order outer to h1 on clicking h1


//event propagation is the change of 
//orders of the elements

//stopPropagation limits bubbling and capturing phases
//and gets us whats need to be done