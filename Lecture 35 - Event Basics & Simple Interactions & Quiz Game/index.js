const newElement=document.createElement("h3");
newElement.textContent="Hi,I am h3 tag";
const div1=document.querySelector("div");
div1.appendChild(newElement)

// hw append vs appendChild


// when we create same tag lement which has its existence in dom already 
// the original 1 gets at last in respect with the parent
// eg is below
const newElement2=document.createElement("h3");
newElement2.textContent="Hi,I am h3 2 tag";
const h31=document.querySelector("h3");
h31.appendChild(newElement2)


//Events
const para1=document.querySelector("p");
para1.addEventListener("click",(e)=>{
    paraClicked(e);
    //u clicked para click
})

//removing element from dom
function paraClicked(event){
    h31.remove();
    console.log("U have clicked a para",event.type)
}

// remove vs removeChild hw



//mousehover
//mouseup
//mousedown
//keyup
//keydown

const elem1=document.querySelector(".p2");

elem1.addEventListener("mousedown",()=>{
    elem1.style.fontSize="30px";
})

elem1.addEventListener("mouseup",()=>{
    elem1.style.backgroundColor="red";
})


elem1.addEventListener("mouseover",(e)=>{
    elem1.style.backgroundColor="pink";
})


const elem2=document.querySelector(".p3");
document.addEventListener("keydown",(e)=>{
    elem2.style.backgroundColor="yellow";
})
// e.key=>key u pressed
//e.keyCode=>key ki ascii

document.addEventListener("keyup",(e)=>{
    elem2.style.backgroundColor="brown";
})

 